"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setMessage(data.message || "Login failed");
        setLoading(false);
        return;
      }

      setMessage("Login success 🎉");

      const role = data?.user?.role;

      setTimeout(() => {
        if (role === "ADMIN") router.push("/admin");
        else router.push("/dashboard");
      }, 800);

    } catch (error) {
      setMessage("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-50 to-cyan-50 px-5">

      <div className="w-full max-w-md bg-white/60 backdrop-blur-2xl border rounded-3xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center">
          Welcome Back
        </h1>

        <p className="text-center text-slate-600 mt-2">
          Login to continue
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">

          {/* EMAIL */}
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

          {/* PASSWORD */}
          <div className="flex items-center border rounded-xl px-4 bg-white">
            <Lock className="w-5 h-5 text-slate-500" />

            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 outline-none bg-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="text-slate-500"
            >
              {showPass ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* MESSAGE */}
          {message && (
            <p className="text-sm text-center text-slate-600">
              {message}
            </p>
          )}

          {/* BUTTON */}
          <button
            disabled={loading}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        {/* SWITCH TO REGISTER */}
        <p className="text-center mt-4 text-sm text-slate-600">
          Don’t have an account?{" "}
          <span
            onClick={() => router.push("/register")}
            className="text-blue-600 cursor-pointer"
          >
            Register
          </span>
        </p>

      </div>

    </main>
  );
}
