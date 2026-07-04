"use client";

import { useEffect, useState } from "react";
import {
  Shield,
  User,
  LogOut,
  ArrowLeftRight,
} from "lucide-react";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isImpersonating, setIsImpersonating] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/me");
        const data = await res.json();

        setUser(data.user || null);
        setIsImpersonating(data.isImpersonating || false);
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    };

    fetchUser();
  }, []);

  const logout = async () => {
    await fetch("/api/logout", { method: "POST" });
    window.location.href = "/login";
  };

  const returnToAdmin = async () => {
    await fetch("/api/return-admin", { method: "POST" });
    window.location.href = "/admin";
  };

  // 🔥 LOADING STATE (IMPORTANT FIX)
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-cyan-50 flex items-center justify-center px-4">

      <div className="relative w-full max-w-md rounded-[32px] bg-white/60 backdrop-blur-2xl border border-white/70 shadow-2xl p-8 text-center">

        {/* ICON */}
        <div className="mx-auto w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center">
          {user?.role === "ADMIN" ? (
            <Shield className="w-8 h-8 text-cyan-600" />
          ) : (
            <User className="w-8 h-8 text-cyan-600" />
          )}
        </div>

        {/* TITLE */}
        <h1 className="mt-5 text-3xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-600">
          {user?.role === "ADMIN"
            ? "Admin Panel Access"
            : "User Dashboard"}
        </p>

        {/* STATUS */}
        <div className="mt-4 inline-flex px-4 py-1 rounded-full bg-white/70 border text-sm text-slate-700">
          {isImpersonating
            ? "👁 WELCOME BACK"
            : ` ${user?.role || "unknown"}`}
        </div>

        {/* RETURN BUTTON */}
        {isImpersonating && (
          <button
            onClick={returnToAdmin}
            className="mt-6 w-full flex items-center justify-center gap-2 bg-purple-600 text-white py-3 rounded-2xl"
          >
            <ArrowLeftRight className="w-4 h-4" />
            Return to Admin
          </button>
        )}

        {/* LOGOUT */}
        <button
          onClick={logout}
          className="mt-3 w-full flex items-center justify-center gap-2 bg-red-500 text-white py-3 rounded-2xl"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>

      </div>

    </main>
  );
}