export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, phone, propertyLocation, propertyType, requirement, customLocation } = req.body;
  const brevoApiKey = process.env.BREVO_API_KEY?.trim() || process.env.VITE_BREVO_API_KEY?.trim();
  const senderEmail = process.env.SENDER_EMAIL?.trim() || process.env.VITE_SENDER_EMAIL?.trim() || "pradeepvarmaalluri7@gmail.com";
  const adminEmail = process.env.ADMIN_EMAIL?.trim() || process.env.VITE_ADMIN_EMAIL?.trim() || "syampanga2003@gmail.com";

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
          <html>
            <body style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
              <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                <h2 style="color: #1A1A1A; border-bottom: 2px solid #37302F; padding-bottom: 10px;">New Contact Inquiry</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Location:</strong> ${propertyLocation}${propertyLocation === 'Other' ? ` (${customLocation})` : ''}</p>
                <p><strong>Property Type:</strong> ${propertyType}</p>
                <p><strong>Requirement:</strong> ${requirement}</p>
                <div style="margin-top: 20px; padding-top: 10px; font-size: 12px; color: #777;">
                  Sent from Dandu Interior Website Contact Form
                </div>
              </div>
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
      return res.status(response.status).json(errorData);
    }
  } catch (error) {
    console.error("Serverless Function Error:", error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
