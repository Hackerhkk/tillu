import db from "@/lib/db";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { amount } = await req.json();

  const token = cookies().get("token")?.value;
  const user = jwt.verify(token, process.env.JWT_SECRET);

  // wallet create if not exists
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
    "INSERT INTO transactions (user_id, type, amount, description) VALUES (?, 'credit', ?, 'Added Money')",
    [user.id, amount]
  );

  return Response.json({ success: true });
}