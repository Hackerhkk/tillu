import Razorpay from "razorpay";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { amount } = await req.json();

  const token = cookies().get("token")?.value;
  const user = jwt.verify(token, process.env.JWT_SECRET);

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  const options = {
    amount: amount * 100, // paise
    currency: "INR",
    receipt: `rcpt_${Date.now()}`,
  };

  const order = await razorpay.orders.create(options);

  return Response.json({
    order,
    key: process.env.RAZORPAY_KEY_ID,
  });
}