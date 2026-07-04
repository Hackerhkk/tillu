import db from "@/lib/db";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/jwt";
import { NextResponse } from "next/server";
import { UAParser } from "ua-parser-js";
import { sendLoginAlert } from "@/lib/sendLoginAlert";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // ===============================
    // FIND USER
    // ===============================
    const [rows] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    const user = rows?.[0];

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Invalid user" },
        { status: 401 }
      );
    }

    // ===============================
    // PASSWORD CHECK
    // ===============================
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { success: false, message: "Wrong password" },
        { status: 401 }
      );
    }

    // ===============================
    // JWT TOKEN
    // ===============================
    const token = await signToken({
      id: user.id,
      role: user.role,
      email: user.email,
    });

    // ===============================
    // USER AGENT INFO
    // ===============================
    const parser = new UAParser(req.headers.get("user-agent"));

    const browser = parser.getBrowser().name || "Unknown";
    const os = parser.getOS().name || "Unknown";
    const device = parser.getDevice().type || "Desktop";

    // ===============================
    // IP ADDRESS
    // ===============================
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "Unknown";

    // ===============================
    // LOGIN TIME
    // ===============================
    const loginTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "long",
    });

    // ===============================
    // SEND LOGIN EMAIL (FAST - NO WAIT)
    // ===============================
    sendLoginAlert({
      name: user.name,
      email: user.email,
      ip,
      browser,
      os,
      device,
      loginTime,
    }).catch((err) => {
      console.error("Login email failed:", err);
    });

    // ===============================
    // RESPONSE
    // ===============================
    const res = NextResponse.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        role: user.role,
      },
    });

    // ===============================
    // COOKIE SET
    // ===============================
    res.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
    });

    return res;
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        error: err.message,
      },
      { status: 500 }
    );
  }
}