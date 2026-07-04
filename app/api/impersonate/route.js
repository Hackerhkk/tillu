import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import db from "@/lib/db";

export async function POST(req) {
  try {
    const adminToken = req.cookies.get("token")?.value;

    if (!adminToken) {
      return NextResponse.json({ message: "No token" }, { status: 401 });
    }

    const admin = jwt.verify(adminToken, process.env.JWT_SECRET);

    if (admin.role !== "ADMIN") {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    const { userId } = await req.json();

    const [rows] = await db.query(
      "SELECT * FROM users WHERE id = ?",
      [userId]
    );

    if (rows.length === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const user = rows[0];

    const userToken = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const res = NextResponse.json({
      success: true,
      message: "Now impersonating user",
    });

    // 🔥 store admin backup
    res.cookies.set("admin_token", adminToken, {
      httpOnly: true,
      path: "/",
    });

    // 🔥 replace active token with user
    res.cookies.set("token", userToken, {
      httpOnly: true,
      path: "/",
    });

    return res;

  } catch (err) {
    return NextResponse.json(
      { message: "Server error", error: err.message },
      { status: 500 }
    );
  }
}