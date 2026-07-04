import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const adminBackup = req.cookies.get("admin_token")?.value;

    if (!adminBackup) {
      return NextResponse.json(
        { message: "No admin session found" },
        { status: 401 }
      );
    }

    jwt.verify(adminBackup, process.env.JWT_SECRET);

    const res = NextResponse.json({
      success: true,
      message: "Back to admin",
    });

    // restore admin token
    res.cookies.set("token", adminBackup, {
      httpOnly: true,
      path: "/",
    });

    // remove backup
    res.cookies.set("admin_token", "", {
      httpOnly: true,
      expires: new Date(0),
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