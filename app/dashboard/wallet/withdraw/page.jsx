"use client";

import { useState } from "react";

export default function WithdrawPage() {
  const [amount, setAmount] = useState("");

  const withdraw = async () => {
    const res = await fetch("/api/wallet/withdraw", {
      method: "POST",
      body: JSON.stringify({ amount: Number(amount) }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Withdraw request success");
      window.location.href = "/wallet";
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-50 to-cyan-50">

      <div className="bg-white/70 border p-8 rounded-3xl shadow-xl w-[350px]">

        <h1 className="text-2xl font-bold mb-4">Withdraw Money</h1>

        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="w-full p-3 border rounded-xl mb-4"
        />

        <button
          onClick={withdraw}
          className="w-full bg-black text-white p-3 rounded-xl"
        >
          Withdraw
        </button>

      </div>
    </div>
  );
}