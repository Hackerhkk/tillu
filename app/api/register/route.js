import db from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("REGISTER BODY:", body);

    const { name, email, password } = body;

    const hashed = await bcrypt.hash(password, 10);

    const result = await db.query(
      "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, 'USER')",
      [name, email, hashed]
    );

    console.log("REGISTER RESULT:", result);

    return Response.json({
      success: true,
      message: "User registered",
    });
  } catch (err) {
    console.log("REGISTER ERROR:", err);

    return Response.json({
      success: false,
      error: err.message,
    });
  }
}