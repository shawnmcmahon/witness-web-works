import { Resend } from "resend";

// Initialize Resend lazily to avoid build-time errors when API key is not set
let resend: Resend | null = null;

function getResendClient(): Resend {
  if (!resend) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("RESEND_API_KEY environment variable is not configured");
    }
    resend = new Resend(apiKey);
  }
  return resend;
}

interface ContactEmailData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export async function sendContactEmail(data: ContactEmailData) {
  const { name, email, phone, message } = data;

  const recipients = [
    "shawn@witnesswebworks.com",
    "demetri@integratedimpact.co",
    "demetri@witnesswebworks.com",
  ];

  const emailContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #2D4A53; padding: 20px; text-align: center;">
        <h1 style="color: #C9A227; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
      </div>
      
      <div style="background-color: #FAF7F2; padding: 30px;">
        <h2 style="color: #2D4A53; margin-top: 0;">Contact Details</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold; color: #2D4A53; width: 100px;">Name:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #ddd; color: #1A1A1A;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold; color: #2D4A53;">Email:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #ddd;"><a href="mailto:${email}" style="color: #C9A227;">${email}</a></td>
          </tr>
          ${
            phone
              ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold; color: #2D4A53;">Phone:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #ddd;"><a href="tel:${phone}" style="color: #C9A227;">${phone}</a></td>
          </tr>
          `
              : ""
          }
        </table>
        
        <h3 style="color: #2D4A53; margin-top: 25px;">Message</h3>
        <div style="background-color: #FFFFFF; padding: 20px; border-radius: 8px; border-left: 4px solid #C9A227;">
          <p style="color: #1A1A1A; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
      
      <div style="background-color: #2D4A53; padding: 15px; text-align: center;">
        <p style="color: #FFFFFF; margin: 0; font-size: 14px;">
          This message was sent from the Witness Web Works contact form.
        </p>
      </div>
    </div>
  `;

  const client = getResendClient();
  const result = await client.emails.send({
    from: "Witness Web Works <noreply@witnesswebworks.com>",
    to: recipients,
    replyTo: email,
    subject: `New Contact: ${name}`,
    html: emailContent,
  });

  return result;
}

