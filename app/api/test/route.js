import db from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query("SELECT NOW() AS time");

    return Response.json({
      success: true,
      data: rows,
    });
  } catch (err) {
    return Response.json({
      success: false,
      error: err.message,
    });
  }
}