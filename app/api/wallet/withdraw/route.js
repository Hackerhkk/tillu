import db from "@/lib/db";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { amount } = await req.json();

  const token = cookies().get("token")?.value;
  const user = jwt.verify(token, process.env.JWT_SECRET);

  const [wallet] = await db.query(
    "SELECT balance FROM wallets WHERE user_id = ?",
    [user.id]
  );

  if (!wallet.length || wallet[0].balance < amount) {
    return Response.json(
      { success: false, message: "Insufficient balance" },
      { status: 400 }
    );
  }

  await db.query(
    "UPDATE wallets SET balance = balance - ? WHERE user_id = ?",
    [amount, user.id]
  );

  await db.query(
    "INSERT INTO transactions (user_id, type, amount, description) VALUES (?, 'debit', ?, 'Withdraw')",
    [user.id, amount]
  );

  return Response.json({ success: true });
}