import crypto from "crypto";
import db from "@/lib/db";

export async function POST(req) {
  const body = await req.text();
  const signature = req.headers.get("x-razorpay-signature");

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body)
    .digest("hex");

  if (signature !== expectedSignature) {
    return Response.json({ message: "Invalid signature" }, { status: 400 });
  }

  const event = JSON.parse(body);

  // ===============================
  // PAYMENT SUCCESS EVENT
  // ===============================
  if (event.event === "payment.captured") {
    const payment = event.payload.payment.entity;

    const amount = payment.amount / 100;
    const email = payment.email;

    // find user
    const [users] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    const user = users[0];

    if (!user) return Response.json({ ok: true });

    // create wallet if not exists
    await db.query(
      "INSERT INTO wallets (user_id, balance) VALUES (?, 0) ON DUPLICATE KEY UPDATE user_id=user_id",
      [user.id]
    );

    // update balance
    await db.query(
      "UPDATE wallets SET balance = balance + ? WHERE user_id = ?",
      [amount, user.id]
    );

    // transaction log
    await db.query(
      "INSERT INTO transactions (user_id, type, amount, description) VALUES (?, 'credit', ?, 'Razorpay Webhook Payment')",
      [user.id, amount]
    );
  }

  return Response.json({ success: true });
}