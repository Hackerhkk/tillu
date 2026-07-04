import nodemailer from "nodemailer";

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

export async function sendLoginAlert({
  name,
  email,
  ip,
  browser,
  os,
  device,
  loginTime,
}) {
  await transporter.sendMail({
    from: `"Tillu Solutions Security" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "New Login Detected 🔐",
    html: `
      <h2>Hello ${name},</h2>

      <p>A successful login to your account was detected.</p>

      <table>
        <tr><td><b>Time</b></td><td>${loginTime}</td></tr>
        <tr><td><b>IP</b></td><td>${ip}</td></tr>
        <tr><td><b>Browser</b></td><td>${browser}</td></tr>
        <tr><td><b>Operating System</b></td><td>${os}</td></tr>
        <tr><td><b>Device</b></td><td>${device}</td></tr>
      </table>

      <br/>

      <p>If this wasn't you, please change your password immediately.</p>
    `,
  });
}