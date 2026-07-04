"use client";

import { useEffect, useState } from "react";
import {
  Wallet,
  Plus,
  ArrowDownToLine,
  ArrowUpFromLine,
} from "lucide-react";

export default function WalletPage() {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([]);

  // =========================
  // FETCH WALLET DATA
  // =========================
  const fetchWallet = async () => {
    const res = await fetch("/api/wallet");
    const data = await res.json();

    setBalance(data.balance || 0);
    setTransactions(data.transactions || []);
  };

  useEffect(() => {
    fetchWallet();
  }, []);

  // =========================
  // ADD MONEY (RAZORPAY)
  // =========================
  const addMoney = async () => {
    const res = await fetch("/api/razorpay/create-order", {
      method: "POST",
      body: JSON.stringify({ amount: Number(amount) }),
    });

    const data = await res.json();

    const options = {
      key: data.key,
      amount: data.order.amount,
      currency: "INR",
      name: "My Wallet",
      order_id: data.order.id,

      handler: async () => {
        await fetch("/api/razorpay/verify", {
          method: "POST",
          body: JSON.stringify({ amount: Number(amount) }),
        });

        setAmount("");
        fetchWallet();
        alert("Money Added Successfully 🎉");
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // =========================
  // WITHDRAW MONEY
  // =========================
  const withdraw = async () => {
    const res = await fetch("/api/wallet/withdraw", {
      method: "POST",
      body: JSON.stringify({ amount: Number(amount) }),
    });

    const data = await res.json();

    if (data.success) {
      setAmount("");
      fetchWallet();
      alert("Withdraw Successful");
    } else {
      alert(data.message);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-cyan-50 relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-300/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-300/30 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-12 h-12 rounded-2xl bg-cyan-100 flex items-center justify-center">
            <Wallet className="text-cyan-600" />
          </div>

          <div>
            <h1 className="text-3xl font-bold">My Wallet</h1>
            <p className="text-slate-500 text-sm">
              Manage your balance & transactions
            </p>
          </div>
        </div>

        {/* BALANCE CARD */}
        <div className="bg-white/60 backdrop-blur-2xl border rounded-3xl shadow-xl p-8 mb-8">
          <p className="text-slate-500">Available Balance</p>
          <h2 className="text-4xl font-bold mt-2">₹ {balance}</h2>

          <div className="flex gap-3 mt-6">
            <button
              onClick={addMoney}
              className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-xl hover:scale-105 transition"
            >
              <Plus size={16} />
              Add Money
            </button>

            <button
              onClick={withdraw}
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-xl hover:scale-105 transition"
            >
              <ArrowUpFromLine size={16} />
              Withdraw
            </button>
          </div>
        </div>

        {/* INPUT */}
        <div className="bg-white/60 backdrop-blur-2xl border rounded-3xl shadow-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Enter Amount</h2>

          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        {/* TRANSACTIONS */}
        <div className="bg-white/60 backdrop-blur-2xl border rounded-3xl shadow-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>

          <div className="space-y-3">
            {transactions.map((tx) => (
              <div
                key={tx.id}
                className="flex items-center justify-between p-4 rounded-xl border bg-white/50"
              >
                <div className="flex items-center gap-3">
                  {tx.type === "credit" ? (
                    <ArrowDownToLine className="text-green-600" />
                  ) : (
                    <ArrowUpFromLine className="text-red-500" />
                  )}

                  <p>{tx.description}</p>
                </div>

                <p
                  className={
                    tx.type === "credit"
                      ? "text-green-600"
                      : "text-red-500"
                  }
                >
                  {tx.type === "credit" ? "+" : "-"} ₹{tx.amount}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}