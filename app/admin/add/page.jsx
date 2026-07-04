"use client";

import { useState } from "react";
import { UserPlus } from "lucide-react";

export default function AddUserCard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const addUser = async (e) => {
    e.preventDefault();

    await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
        role: "user",
      }),
    });

    setName("");
    setEmail("");
    setPassword("");

    fetchUsers();
  };


  return (
    <div className="max-w-2xl mx-auto">

      {/* CARD */}
      <div className="bg-white/70 backdrop-blur-2xl border border-white/60 shadow-xl rounded-3xl p-6 hover:shadow-2xl transition">

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center">
            <UserPlus className="w-5 h-5 text-cyan-600" />
          </div>

          <div>
            <h2 className="text-xl font-bold">Add New User</h2>
            <p className="text-sm text-slate-500">
              Create a new user account
            </p>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={addUser} className="space-y-4">

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            required
            className="w-full p-3 rounded-xl border bg-white/60 outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            type="email"
            required
            className="w-full p-3 rounded-xl border bg-white/60 outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            required
            className="w-full p-3 rounded-xl border bg-white/60 outline-none focus:ring-2 focus:ring-cyan-400"
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition shadow-lg"
          >
            Add User
          </button>

        </form>
      </div>
    </div>
  );
}