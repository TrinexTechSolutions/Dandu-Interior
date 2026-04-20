export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // 1. EXTRACT CONFIGURATION & FORM FIELDS
  const { 
    name, phone, email, 
    propertyLocation, propertyType, requirement, customLocation,
    serviceType, budget, source 
  } = req.body;
  
  // Service Credentials
  const brevoApiKey = process.env.BREVO_API_KEY?.trim();
  const senderEmail = process.env.SENDER_EMAIL?.trim();
  const adminEmail = process.env.ADMIN_EMAIL?.trim();

  // Business Configuration & Segment IDs
  const whatsappNumber = process.env.WHATSAPP_NUMBER?.trim() || "919866166612";
  const adminName = process.env.ADMIN_NAME?.trim() || "Syampanga Admin";
  const businessName = process.env.BUSINESS_NAME?.trim() || "Dandu Interiors & Developers";
  const websiteSource = source || process.env.LEAD_SOURCE_DEFAULT || "Website";

  // Segment Mapping (Brevo Lists)
  const segmentMap = {
    'contact': parseInt(process.env.BREVO_LIST_CONTACTS) || 2,
    'quote': parseInt(process.env.BREVO_LIST_QUOTES) || 3,
    'call': parseInt(process.env.BREVO_LIST_CALLS) || 4
  };
  const brevoListId = segmentMap[source] || segmentMap['contact'];

  // 2. HELPER FUNCTIONS & NORMALIZATION
  const escapeHtml = (value = "") =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const normalize = (val) => val ? String(val).trim() : "";
  
  const locationLabel = normalize(
    propertyLocation === "Other" && customLocation
      ? `${propertyLocation} (${customLocation})`
      : (propertyLocation || req.body.location || "")
  );

  const cleanPhone = normalize(phone).replace(/[^0-9]/g, "");

  // Reusable Brevo API Caller
  const callBrevo = async (endpoint, payload, method = "POST") => {
    try {
      const response = await fetch(`https://api.brevo.com/v3/${endpoint}`, {
        method: method,
        headers: {
          "accept": "application/json",
          "api-key": brevoApiKey,
          "content-type": "application/json",
        },
        body: method !== "GET" ? JSON.stringify(payload) : undefined,
      });
      const data = await response.json().catch(() => ({}));
      console.log(`Brevo API Response [${method} ${endpoint}]:`, { ok: response.ok, status: response.status, data });
      return { ok: response.ok, status: response.status, data };
    } catch (err) {
      console.error(`Brevo API Error [${method} ${endpoint}]:`, err);
      return { ok: false, status: 500, data: { message: err.message } };
    }
  };

  // 3. VALIDATION
  if (!brevoApiKey || !senderEmail || !adminEmail) {
    return res.status(500).json({ message: 'Marketing service configuration is missing on the server.' });
  }

  if (!name || !phone) {
    return res.status(400).json({ message: 'Name and Phone are required for lead capture.' });
  }

  try {
    // // CRM INTEGRATION (BREVO CONTACTS) // //
    const contactEmail = normalize(email) || `${cleanPhone}@noemail.com`;
    
    // Standardize Phone for Brevo (Requires E.164 format like +91...)
    let formattedSms = cleanPhone;
    if (formattedSms.length === 10) formattedSms = "91" + formattedSms;
    if (!formattedSms.startsWith("+")) formattedSms = "+" + formattedSms;

    const contactPayload = {
      email: contactEmail,
      attributes: {
        FIRSTNAME: normalize(name),
        SMS: formattedSms, 
        LOCATION: locationLabel || "Not specified",
        PROPERTY_TYPE: normalize(propertyType || serviceType) || "Interior Design",
        REQUIREMENT: normalize(requirement || `Lead via ${websiteSource}`),
        SOURCE: websiteSource.toUpperCase(),
        BUDGET: normalize(budget) || "Not specified"
      },
      listIds: [brevoListId],
      updateEnabled: true
    };

    // Diagnostic: Log exactly what we are sending to Brevo
    console.log("📡 SYNCING TO BREVO CRM:", JSON.stringify(contactPayload, null, 2));

    // Create/Update contact in CRM
    let crmResult = await callBrevo("contacts", contactPayload).catch(err => ({ ok: false, data: { message: err.message } }));
    
    // FALLBACK: Handle "SMS already associated with another Contact" conflict
    if (!crmResult.ok && crmResult.data?.code === 'duplicate_parameter' && crmResult.data?.metadata?.duplicate_identifiers?.includes('SMS')) {
      console.log("🔄 DUPLICATE SMS CONFLICT: Trying to find and update existing contact owner...");
      
      // 1. Search for the contact who owns this SMS
      const searchResult = await callBrevo(`contacts/${encodeURIComponent(formattedSms)}?identifierType=phone_id`, null, "GET");
      
      if (searchResult.ok && searchResult.data?.email) {
        const existingEmail = searchResult.data.email;
        console.log(`📍 Found original owner: ${existingEmail}. Redirecting update.`);
        
        // 2. Perform a targeted update on the actual owner's record
        const updateResult = await callBrevo(`contacts/${encodeURIComponent(existingEmail)}`, contactPayload, "PUT");
        
        if (updateResult.ok) {
          console.log("✅ RECOVERY SUCCESSful: Lead updated via SMS identification.");
          crmResult = updateResult; // Mark as success for downstream logging
        }
      } else {
        console.error("⚠️ Fallback failed: Could not retrieve original contact by SMS.");
      }
    }

    if (!crmResult.ok) {
      console.error("❌ BREVO CRM SYNC FAILURE:", JSON.stringify(crmResult.data, null, 2));
    } else {
      console.log("✅ BREVO CRM SYNC SUCCESS");
    }

    // 4. PREPARE ADMIN NOTIFICATION
    const adminEmailPayload = {
      sender: { name: businessName, email: senderEmail },
      to: [{ email: adminEmail, name: adminName }],
      subject: `New Lead [${websiteSource.toUpperCase()}]: ${name}`,
      htmlContent: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Dandu Interior Inquiry</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #f3eee7; font-family: Arial, Helvetica, sans-serif; color: #1A1A1A;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f3eee7; margin: 0; padding: 32px 16px;">
              <tr>
                <td align="center">
                  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 720px;">
                    <tr>
                      <td style="padding-bottom: 16px; text-align: left;">
                        <div style="font-size: 11px; letter-spacing: 0.38em; text-transform: uppercase; color: #7d746e; font-weight: 700;">${businessName}</div>
                      </td>
                    </tr>
                    <tr>
                      <td style="background-color: #f8f5f2; border: 1px solid #d8cfc6; border-radius: 30px; overflow: hidden; box-shadow: 0 18px 50px rgba(26, 26, 26, 0.08);">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                          <tr>
                            <td style="padding: 36px 36px 24px; border-bottom: 1px solid #e6ddd4;">
                              <div style="font-size: 12px; letter-spacing: 0.32em; text-transform: uppercase; color: #8b8179; font-weight: 700; margin-bottom: 18px;">Type: ${websiteSource.toUpperCase()}</div>
                              <div style="font-size: 54px; line-height: 0.95; color: #37302F; font-weight: 300;">
                                New <span style="font-family: Georgia, 'Times New Roman', serif; font-style: italic; color: rgba(55, 48, 47, 0.68);">Request</span>
                              </div>
                              <div style="margin-top: 18px; max-width: 520px; font-size: 18px; line-height: 1.7; color: #5d5650;">
                                A visitor has submitted the ${websiteSource} form. Details follow:
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 32px 36px;">
                              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                                <tr>
                                  <td style="padding: 0 0 16px;">
                                    <div style="font-size: 11px; letter-spacing: 0.24em; text-transform: uppercase; color: #8b8179; font-weight: 700; margin-bottom: 8px;">Client Name</div>
                                    <div style="font-size: 26px; line-height: 1.3; color: #1A1A1A; font-weight: 600;">${escapeHtml(name)}</div>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding: 8px 0 16px;">
                                    <div style="font-size: 11px; letter-spacing: 0.24em; text-transform: uppercase; color: #8b8179; font-weight: 700; margin-bottom: 8px;">WhatsApp Number</div>
                                    <div style="font-size: 17px; line-height: 1.6; color: #37302F; font-weight: 500;">${escapeHtml(phone)}</div>
                                  </td>
                                </tr>
                                ${locationLabel ? `<tr>
                                  <td style="padding: 8px 0 16px;">
                                    <div style="font-size: 11px; letter-spacing: 0.24em; text-transform: uppercase; color: #8b8179; font-weight: 700; margin-bottom: 8px;">Location</div>
                                    <div style="font-size: 17px; line-height: 1.6; color: #37302F; font-weight: 500;">${escapeHtml(locationLabel)}</div>
                                  </td>
                                </tr>` : ''}
                                ${(serviceType || propertyType) ? `<tr>
                                  <td style="padding: 8px 0 16px;">
                                    <div style="font-size: 11px; letter-spacing: 0.24em; text-transform: uppercase; color: #8b8179; font-weight: 700; margin-bottom: 8px;">Service/Property</div>
                                    <div style="font-size: 17px; line-height: 1.6; color: #37302F; font-weight: 500;">${escapeHtml(serviceType || propertyType)}</div>
                                  </td>
                                </tr>` : ''}
                                ${budget ? `<tr>
                                  <td style="padding: 8px 0 16px;">
                                    <div style="font-size: 11px; letter-spacing: 0.24em; text-transform: uppercase; color: #8b8179; font-weight: 700; margin-bottom: 8px;">Budget Range</div>
                                    <div style="font-size: 17px; line-height: 1.6; color: #37302F; font-weight: 500;">${escapeHtml(budget)}</div>
                                  </td>
                                </tr>` : ''}

                                <!-- // ADMIN WHATSAPP CTA // -->
                                <tr>
                                  <td align="center" style="padding-bottom: 32px; padding-top: 16px;">
                                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
                                      <tr>
                                        <td style="background-color: #25D366; border-radius: 50px; text-align: center;">
                                          <a href="https://wa.me/${cleanPhone}" style="display: inline-block; padding: 16px 32px; font-family: Arial, sans-serif; font-size: 14px; font-weight: bold; color: #ffffff; text-decoration: none; letter-spacing: 0.1em; text-transform: uppercase;">
                                            WHATSAPP CLIENT
                                          </a>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                
                                <tr>
                                  <td style="padding-top: 8px;">
                                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #1A1A1A; border-radius: 24px;">
                                      <tr>
                                        <td style="padding: 22px 24px; text-align: center;">
                                          <div style="font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: rgba(248, 245, 242, 0.62); font-weight: 700; margin-bottom: 8px;">${businessName}</div>
                                          <div style="font-size: 18px; line-height: 1.6; color: #F8F5F2;">
                                            A new lead is waiting for your response.
                                          </div>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `
    };

    // 5. PREPARE USER CONFIRMATION
    // Skip confirmation email for Quote requests as per user requirement
    if (email && websiteSource !== 'quote') {
      const userReplyPayload = {
        sender: { name: businessName, email: senderEmail },
        to: [{ email: email, name: name }],
        subject: `Thank you for contacting ${businessName}, ${name}!`,
        htmlContent: `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Thank You from ${businessName}</title>
            </head>
            <body style="margin: 0; padding: 0; background-color: #FAFAF8; font-family: Arial, Helvetica, sans-serif; color: #1A1A1A;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin: 0; padding: 40px 16px;">
                <tr>
                  <td align="center">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px;">
                      <tr>
                        <td style="padding-bottom: 24px; text-align: center;">
                          <div style="font-size: 12px; letter-spacing: 0.3em; text-transform: uppercase; color: #1A1A1A; font-weight: 700;">${businessName}</div>
                        </td>
                      </tr>
                      <tr>
                        <td style="background-color: #ffffff; border: 1px solid #eaeaea; border-radius: 16px; padding: 48px 40px;">
                          <div style="font-family: Georgia, 'Times New Roman', serif; font-size: 32px; color: #1A1A1A; margin-bottom: 24px; font-weight: normal;">
                            Hello ${escapeHtml(name)},
                          </div>
                          <div style="font-size: 16px; line-height: 1.8; color: #555555; margin-bottom: 32px;">
                            Thank you for reaching out to us. We have received your request for <strong>${escapeHtml(serviceType || propertyType || "Interior Design Services")}</strong>.<br /><br />
                            Our team is currently reviewing your details. One of our specialists will reach out to you on your provided number (<strong>${escapeHtml(phone)}</strong>) shortly.<br /><br />
                            We look forward to creating something extraordinary together.
                          </div>

                          <div style="text-align: center; padding-bottom: 32px;">
                            <a href="https://wa.me/${whatsappNumber}" style="background-color: #1A1A1A; color: #ffffff; padding: 18px 32px; border-radius: 50px; text-decoration: none; font-size: 14px; font-weight: bold; letter-spacing: 0.1em; display: inline-block;">
                              CHAT ON WHATSAPP
                            </a>
                          </div>

                          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                            <tr>
                              <td style="padding-top: 32px; border-top: 1px solid #eaeaea;">
                                <div style="font-size: 14px; font-weight: 600; color: #1A1A1A;">Warm Regards,</div>
                                <div style="font-size: 14px; color: #777777; margin-top: 4px;">The ${businessName} Team</div>
                                <div style="font-size: 12px; color: #999999; margin-top: 12px;">+${whatsappNumber} | ${senderEmail}</div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </body>
          </html>
        `
      };
      // Send user confirmation (Await to ensure completion)
      await callBrevo("smtp/email", userReplyPayload).catch(err => console.error("User email error:", err));
    }

    // 6. EXECUTE ADMIN EMAIL & RETURN
    const adminResponse = await callBrevo("smtp/email", adminEmailPayload);

    if (adminResponse.ok) {
      return res.status(200).json({ 
        message: 'Lead captured successfully',
        crm: {
          success: crmResult.ok,
          details: crmResult.data
        }
      });
    } else {
      console.error("Brevo Admin Email Failure:", adminResponse.data);
      return res.status(adminResponse.status).json({
        message: adminResponse.data.message || "Failed to send admin notification",
        code: adminResponse.data.code || "email_error",
      });
    }

  } catch (error) {
    console.error("Critical Funnel Error:", error);
    return res.status(500).json({ message: error.message || 'Internal Server Error' });
  }
}
