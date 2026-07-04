import Link from "next/link";
import {
  Smartphone,
  Apple,
  ShieldCheck,
  Zap,
  Palette,
  Layers,
  Cpu,
  Globe,
  Rocket,
  Lock,
  Code2,
  Settings,
} from "lucide-react";

export default function IphoneAppDevelopment() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-cyan-50 text-slate-900 px-4 sm:px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-xl border rounded-full">
            <Apple size={16} /> iOS App Development
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold">
            iPhone App Development
          </h1>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto">
            We build high-performance iOS applications for iPhone and iPad
            that deliver smooth user experience, strong security, and premium Apple-level design quality.
          </p>
        </div>

        {/* INTRO */}
        <section className="mt-16 space-y-6">
          <p className="text-slate-700 leading-7">
            iPhone apps are known for their performance, security, and premium user experience.
            We design and develop custom iOS applications using Swift and modern frameworks that
            fit perfectly into the Apple ecosystem.
          </p>

          <p className="text-slate-700 leading-7">
            Whether you need a startup MVP, enterprise solution, or a scalable SaaS mobile app —
            we deliver end-to-end iOS development services from idea to App Store launch.
          </p>
        </section>

        {/* FEATURES */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">What We Offer</h2>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              [Smartphone, "Native iOS Development", "High-performance apps built using Swift & SwiftUI"],
              [Palette, "Premium UI/UX Design", "Apple-style clean, minimal and intuitive interfaces"],
              [ShieldCheck, "App Store Compliance", "We ensure smooth approval with Apple guidelines"],
              [Zap, "High Performance Apps", "Fast loading, optimized and smooth user experience"],
              [Lock, "Strong Security", "Encrypted data and secure authentication systems"],
              [Globe, "Apple Ecosystem Integration", "Siri, Apple Pay, iCloud integration support"],
            ].map(([Icon, title, desc], i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/60 border hover:shadow-xl transition"
              >
                <div className="flex items-center gap-3">
                  <Icon className="text-cyan-600" />
                  <h3 className="font-semibold">{title}</h3>
                </div>
                <p className="text-slate-600 mt-2">{desc}</p>
              </div>
            ))}

          </div>
        </section>

        {/* PROCESS */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-6">Development Process</h2>

          <div className="space-y-4">

            {[
              "Requirement Analysis & Planning",
              "UI/UX Design & Prototyping",
              "iOS App Development (Swift / SwiftUI)",
              "Backend Integration & APIs",
              "Testing on Multiple Devices",
              "App Store Deployment & Support",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center text-sm">
                  {i + 1}
                </div>
                <p className="text-slate-700">{step}</p>
              </div>
            ))}

          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-6">Industries We Serve</h2>

          <div className="grid md:grid-cols-3 gap-4">

            {[
              "E-Commerce Apps",
              "Fintech Applications",
              "Healthcare Apps",
              "Education Platforms",
              "Travel & Booking Apps",
              "On-Demand Services Apps",
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/50 border">
                <p className="text-slate-700">{item}</p>
              </div>
            ))}

          </div>
        </section>

        {/* WHY US */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              [Rocket, "Faster Delivery", "We deliver apps in weeks, not months"],
              [Cpu, "Senior Engineers", "Experienced iOS developers only"],
              [Layers, "Scalable Architecture", "Built for millions of users"],
              [Settings, "Full Support", "Maintenance & updates after launch"],
            ].map(([Icon, title, desc], i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/60 border">
                <div className="flex items-center gap-3">
                  <Icon className="text-cyan-600" />
                  <h3 className="font-semibold">{title}</h3>
                </div>
                <p className="text-slate-600 mt-2">{desc}</p>
              </div>
            ))}

          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold">
            Ready to Build Your iPhone App?
          </h2>

          <p className="text-slate-600 mt-3">
            Let’s turn your idea into a powerful iOS application.
          </p>

          <Link href="/contact">
            <button className="mt-6 px-8 py-4 bg-cyan-500 text-white rounded-xl hover:scale-105 transition">
              Get Free Consultation
            </button>
          </Link>
        </section>

      </div>
    </main>
  );
}