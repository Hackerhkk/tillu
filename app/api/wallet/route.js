import db from "@/lib/db";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function GET() {
  const token = cookies().get("token")?.value;

  if (!token) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  const user = jwt.verify(token, process.env.JWT_SECRET);

  const [wallet] = await db.query(
    "SELECT * FROM wallets WHERE user_id = ?",
    [user.id]
  );

  const [transactions] = await db.query(
    "SELECT * FROM transactions WHERE user_id = ? ORDER BY id DESC",
    [user.id]
  );

  return Response.json({
    balance: wallet[0]?.balance || 0,
    transactions,
  });
}