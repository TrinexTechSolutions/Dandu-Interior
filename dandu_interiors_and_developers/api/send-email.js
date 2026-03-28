export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, phone, propertyLocation, propertyType, requirement, customLocation } = req.body;
  const brevoApiKey = process.env.BREVO_API_KEY?.trim();
  const senderEmail = process.env.SENDER_EMAIL?.trim() || "pradeepvarmaalluri7@gmail.com";
  const adminEmail = process.env.ADMIN_EMAIL?.trim() || "syampanga2003@gmail.com";
  const escapeHtml = (value = "") =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  const locationLabel =
    propertyLocation === "Other" && customLocation
      ? `${propertyLocation} (${customLocation})`
      : propertyLocation;

  if (!brevoApiKey) {
    return res.status(500).json({ message: 'BREVO_API_KEY is not configured on the server.' });
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": brevoApiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { 
          name: "Dandu Interior Website", 
          email: senderEmail
        },
        to: [{ email: adminEmail, name: "Syampanga Admin" }],
        subject: `New Inquiry from ${name}`,
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
                          <div style="font-size: 11px; letter-spacing: 0.38em; text-transform: uppercase; color: #7d746e; font-weight: 700;">Dandu Interiors & Developers</div>
                        </td>
                      </tr>
                      <tr>
                        <td style="background-color: #f8f5f2; border: 1px solid #d8cfc6; border-radius: 30px; overflow: hidden; box-shadow: 0 18px 50px rgba(26, 26, 26, 0.08);">
                          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                            <tr>
                              <td style="padding: 36px 36px 24px; border-bottom: 1px solid #e6ddd4;">
                                <div style="font-size: 12px; letter-spacing: 0.32em; text-transform: uppercase; color: #8b8179; font-weight: 700; margin-bottom: 18px;">New Website Inquiry</div>
                                <div style="font-size: 54px; line-height: 0.95; color: #37302F; font-weight: 300;">
                                  Let's <span style="font-family: Georgia, 'Times New Roman', serif; font-style: italic; color: rgba(55, 48, 47, 0.68);">Connect</span>
                                </div>
                                <div style="margin-top: 18px; max-width: 520px; font-size: 18px; line-height: 1.7; color: #5d5650;">
                                  A new client inquiry has arrived through the Dandu Interiors contact form. The details below follow the same refined, minimal tone as the website experience.
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 32px 36px;">
                                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                                  <tr>
                                    <td style="padding: 0 0 16px;">
                                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff; border: 1px solid #e4dad1; border-radius: 22px;">
                                        <tr>
                                          <td style="padding: 22px 24px;">
                                            <div style="font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase; color: #8b8179; font-weight: 700; margin-bottom: 10px;">Client Name</div>
                                            <div style="font-size: 28px; line-height: 1.2; color: #1A1A1A; font-weight: 600;">${escapeHtml(name)}</div>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="padding: 0 0 16px;">
                                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                                        <tr>
                                          <td width="50%" style="padding-right: 8px; vertical-align: top;">
                                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff; border: 1px solid #e4dad1; border-radius: 22px;">
                                              <tr>
                                                <td style="padding: 20px 22px;">
                                                  <div style="font-size: 10px; letter-spacing: 0.24em; text-transform: uppercase; color: #8b8179; font-weight: 700; margin-bottom: 10px;">WhatsApp</div>
                                                  <div style="font-size: 18px; line-height: 1.5; color: #37302F; font-weight: 600;">${escapeHtml(phone)}</div>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                          <td width="50%" style="padding-left: 8px; vertical-align: top;">
                                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff; border: 1px solid #e4dad1; border-radius: 22px;">
                                              <tr>
                                                <td style="padding: 20px 22px;">
                                                  <div style="font-size: 10px; letter-spacing: 0.24em; text-transform: uppercase; color: #8b8179; font-weight: 700; margin-bottom: 10px;">Location</div>
                                                  <div style="font-size: 18px; line-height: 1.5; color: #37302F; font-weight: 600;">${escapeHtml(locationLabel)}</div>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="padding: 0 0 16px;">
                                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                                        <tr>
                                          <td width="50%" style="padding-right: 8px; vertical-align: top;">
                                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff; border: 1px solid #e4dad1; border-radius: 22px;">
                                              <tr>
                                                <td style="padding: 20px 22px;">
                                                  <div style="font-size: 10px; letter-spacing: 0.24em; text-transform: uppercase; color: #8b8179; font-weight: 700; margin-bottom: 10px;">Property Type</div>
                                                  <div style="font-size: 18px; line-height: 1.5; color: #37302F; font-weight: 600;">${escapeHtml(propertyType)}</div>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                          <td width="50%" style="padding-left: 8px; vertical-align: top;">
                                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ffffff; border: 1px solid #e4dad1; border-radius: 22px;">
                                              <tr>
                                                <td style="padding: 20px 22px;">
                                                  <div style="font-size: 10px; letter-spacing: 0.24em; text-transform: uppercase; color: #8b8179; font-weight: 700; margin-bottom: 10px;">Requirement</div>
                                                  <div style="font-size: 18px; line-height: 1.5; color: #37302F; font-weight: 600;">${escapeHtml(requirement)}</div>
                                                </td>
                                              </tr>
                                            </table>
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
                                            <div style="font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: rgba(248, 245, 242, 0.62); font-weight: 700; margin-bottom: 8px;">Dandu Interior Website</div>
                                            <div style="font-size: 18px; line-height: 1.6; color: #F8F5F2;">
                                              A fresh conversation is ready for follow-up.
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
        `,
        replyTo: { email: adminEmail, name: name }
      }),
    });

    if (response.ok) {
      return res.status(200).json({ message: 'Email sent successfully' });
    } else {
      const errorData = await response.json();
      console.error("Brevo API Error:", errorData);
      return res.status(response.status).json({
        message: errorData.message || "Brevo request failed",
        code: errorData.code || "brevo_error",
      });
    }
  } catch (error) {
    console.error("Serverless Function Error:", error);
    return res.status(500).json({ message: error.message || 'Internal Server Error' });
  }
}
