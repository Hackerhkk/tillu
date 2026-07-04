"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); 
  // idle | loading | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "",message: "" });

        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-b from-sky-50 via-white to-cyan-50 text-slate-900">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-cyan-300/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-300/30 rounded-full blur-[120px]" />
      </div>

      {/* HERO */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-5xl mx-auto">

          <span className="px-5 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-white/70 shadow">
            Contact Us
          </span>

          <h1 className="mt-8 text-4xl md:text-6xl font-bold">
            Let’s Build Something
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>

          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            Have an idea? We will help you build scalable web, mobile and AI solutions.
          </p>

        </div>
      </section>

     {status === "success" && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">

    <div className="bg-white rounded-3xl shadow-2xl px-10 py-10 flex flex-col items-center gap-4 animate-pulse">

      {/* BIG GREEN TICK */}
      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
        <CheckCircle className="w-12 h-12 text-green-500" />
      </div>

      <h2 className="text-xl font-semibold text-green-600">
        Success
      </h2>

      <p className="text-slate-500 text-sm text-center">
        Thanks for contacting us. We will reply soon.
      </p>

    </div>

  </div>
)}
      

      {/* CONTACT SECTION */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">

          {/* FORM CARD */}
          <form
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-[40px] bg-white/60 backdrop-blur-3xl border border-white/70 shadow-2xl p-8 space-y-5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-cyan-100/20" />

            <div className="relative">
              <h2 className="text-2xl font-bold mb-6">Send Message</h2>

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-4 rounded-2xl bg-white/70 border outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full mt-4 p-4 rounded-2xl bg-white/70 border outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />


              
              {/* <input
                name="phone"
                type=""
                value={form.phone}
                onChange={handleChange}
                placeholder="mobile no"
                className="w-full mt-4 p-4 rounded-2xl bg-white/70 border outline-none focus:ring-2 focus:ring-cyan-400"
                required
              /> */}


              <div className="mt-4 flex items-center rounded-2xl bg-white/70 border overflow-hidden focus-within:ring-2 focus-within:ring-cyan-400">
  <span className="px-4 text-gray-600 font-medium border-r">
    +91
  </span>

  <input
    name="phone"
    type="tel"
    value={form.phone}
    onChange={(e) => {
      const value = e.target.value.replace(/\D/g, "").slice(0, 10);
      setForm({ ...form, phone: value });
    }}
    placeholder="9876543210"
    maxLength={10}
    pattern="[0-9]{10}"
    className="w-full p-4 outline-none bg-transparent"
    required
  />
</div>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                className="w-full mt-4 p-4 rounded-2xl bg-white/70 border outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />

              <button
                type="submit"
                className="w-full mt-6 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl hover:scale-105 transition"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </div>
          </form>

          {/* INFO CARDS */}
          <div className="space-y-6">

            {[
              { icon: Mail, title: "Email", value: "contact@tillu.com" },
              { icon: Phone, title: "Phone", value: "+91 1234567890" },
              { icon: MapPin, title: "Location", value: "India (Remote Team)" },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-[32px] bg-white/60 backdrop-blur-2xl border border-white/70 shadow-xl p-6 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-cyan-100 flex items-center justify-center">
                    <Icon className="text-cyan-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.value}</p>
                  </div>
                </div>
              );
            })}

          </div>

        </div>
      </section>

    </main>
  );
}