import db from "@/lib/db";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { amount } = await req.json();

  const token = cookies().get("token")?.value;
  const user = jwt.verify(token, process.env.JWT_SECRET);

  // add money after successful payment
  await db.query(
    "INSERT INTO wallets (user_id, balance) VALUES (?, 0) ON DUPLICATE KEY UPDATE user_id=user_id",
    [user.id]
  );

  await db.query(
    "UPDATE wallets SET balance = balance + ? WHERE user_id = ?",
    [amount, user.id]
  );

  await db.query(
    "INSERT INTO transactions (user_id, type, amount, description) VALUES (?, 'credit', ?, 'Razorpay Add Money')",
    [user.id, amount]
  );

  return Response.json({ success: true });
}