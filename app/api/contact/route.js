import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 587,
      secure: false,
      family: 4,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1️⃣ EMAIL TO YOU (ADMIN)
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Message",
      text: `
Name: ${name}
Email: ${email}
phone: ${phone}

Message: ${message}
      `,
    });

    // 2️⃣ AUTO REPLY TO USER
    await transporter.sendMail({
      from: `"Tillu Solutions" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting Tillu Solutions 🚀",
      html: `
        <div style="font-family: Arial; padding: 10px;">
          <h2>Hi ${name},</h2>

          <p>Thank you for contacting <b>Tillu Solutions</b>.</p>

          <p>We have received your message and our team will get back to you shortly.</p>

          <hr/>

          <p><b>Your Message:</b></p>
          <p>${phone}</p>
          <p>${message}</p>

          <br/>

          <p>Regards,<br/>Tillu Solutions Team 🚀</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.log("EMAIL ERROR:", error);
    return Response.json(
      { success: false, error: "Email failed" },
      { status: 500 }
    );
  }
}