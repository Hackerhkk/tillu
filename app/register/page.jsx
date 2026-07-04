"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, User } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message);
        setLoading(false);
        return;
      }

      setMessage("Account created successfully 🎉");

      setTimeout(() => {
        router.push("/login");
      }, 1000);

    } catch (error) {
      setMessage("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-50 to-cyan-50 px-5">

      <div className="w-full max-w-md bg-white/60 backdrop-blur-2xl border rounded-3xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center">
          Create Account
        </h1>

       

        <form onSubmit={handleRegister} className="mt-8 space-y-5">

          {/* Name */}
          <div className="flex items-center border rounded-xl px-4 bg-white">
            <User className="w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 outline-none bg-transparent"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center border rounded-xl px-4 bg-white">
            <Mail className="w-5 h-5 text-slate-500" />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 outline-none bg-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center border rounded-xl px-4 bg-white">
            <Lock className="w-5 h-5 text-slate-500" />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 outline-none bg-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {message && (
            <p className="text-sm text-center text-red-500">
              {message}
            </p>
          )}

          <button
            disabled={loading}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            {loading ? "Creating..." : "Register"}
          </button>

        </form>

        <p className="text-center mt-4 text-sm text-slate-600">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-blue-600 cursor-pointer"
          >
            Login
          </span>
        </p>

      </div>

    </main>
  );
}