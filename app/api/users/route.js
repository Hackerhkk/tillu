import { NextResponse } from "next/server";
import db from "@/lib/db";
import jwt from "jsonwebtoken";

/* =========================
   GET USERS (ADMIN ONLY)
========================= */
export async function GET(req) {
  try {
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json({ message: "No token" }, { status: 401 });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    if (decoded.role !== "ADMIN") {
      return NextResponse.json(
        { message: "Forbidden (not admin)" },
        { status: 403 }
      );
    }

    const [users] = await db.query(
      "SELECT id, name, email, role FROM users"
    );

    return NextResponse.json({ users });

  } catch (err) {
    return NextResponse.json(
      { message: "Server Error", error: err.message },
      { status: 500 }
    );
  }
}

/* =========================
   DELETE USER (🔥 FIX)
========================= */
export async function DELETE(req) {
  try {
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json({ message: "No token" }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "ADMIN") {
      return NextResponse.json(
        { message: "Forbidden (not admin)" },
        { status: 403 }
      );
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { message: "ID required" },
        { status: 400 }
      );
    }

    await db.query("DELETE FROM user WHERE id = ?", [id]);

    return NextResponse.json({
      success: true,
      message: "User deleted",
    });

  } catch (err) {
    return NextResponse.json(
      { message: "Server Error", error: err.message },
      { status: 500 }
    );
  }
}