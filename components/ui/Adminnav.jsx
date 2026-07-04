"use client";

import { useRouter } from "next/navigation";
import { Shield, Users, LayoutDashboard, LogOut } from "lucide-react";

export default function AdminNav() {
  const router = useRouter();

  const logout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
  };

  return (
    <nav className="w-full bg-white/70 backdrop-blur-xl border-b shadow-sm px-6 py-4 flex items-center justify-between">

      {/* LEFT */}
      <div className="flex items-center gap-2">
        <Shield className="text-cyan-600 w-5 h-5" />
        <span className="font-bold text-lg">Admin Panel</span>
      </div>

      {/* CENTER MENU */}
      <div className="hidden md:flex items-center gap-6 text-sm text-slate-600">

        <button className="flex items-center gap-1 hover:text-cyan-600">
          <LayoutDashboard className="w-4 h-4" />
          <a href="/admin">          Dashboard
</a>
          
        </button>

        <button className="flex items-center gap-1 hover:text-cyan-600" >
          <Users className="w-4 h-4" />
          <a href="/admin/add">          Users
</a>
        </button>

      </div>

      {/* RIGHT */}
      <button
        onClick={logout}
        className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-xl hover:scale-105 transition"
      >
        <LogOut className="w-4 h-4" />
        Logout
      </button>

    </nav>
  );
}