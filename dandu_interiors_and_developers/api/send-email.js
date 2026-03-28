export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, phone, propertyLocation, propertyType, requirement, customLocation } = req.body;

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": process.env.VITE_BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { 
          name: "Dandu Interior Website", 
          email: process.env.VITE_SENDER_EMAIL || "pradeepvarmaalluri7@gmail.com"
        },
        to: [{ email: process.env.VITE_ADMIN_EMAIL || "syampanga2003@gmail.com", name: "Syampanga Admin" }],
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
        replyTo: { email: process.env.VITE_ADMIN_EMAIL || "syampanga2003@gmail.com", name: name }
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
