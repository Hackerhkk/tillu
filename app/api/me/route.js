import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req) {
  try {
    const token = req.cookies.get("token")?.value;
    const adminToken = req.cookies.get("admin_token")?.value;

    if (!token) {
      return NextResponse.json({ user: null });
    }

    const user = jwt.verify(token, process.env.JWT_SECRET);

    return NextResponse.json({
      user,
      isImpersonating: !!adminToken, // 🔥 IMPORTANT
    });

  } catch (err) {
    return NextResponse.json({ user: null });
  }
}