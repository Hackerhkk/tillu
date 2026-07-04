import {
  Shield,
  RefreshCw,
  Database,
  Zap,
  Bug,
  Lock,
  Activity,
  Globe,
  Settings,
  Cloud,
  Server,
  BarChart3,
} from "lucide-react";

export default function WebsiteMaintenancePage() {

  const services = [
    { icon: RefreshCw, title: "Regular Updates", desc: "WordPress, plugins & theme updates with safe testing." },
    { icon: Shield, title: "Security Monitoring", desc: "Malware protection, firewall & hack prevention." },
    { icon: Database, title: "Daily Backups", desc: "Automated secure backups with instant restore option." },
    { icon: Zap, title: "Speed Optimization", desc: "Improve loading speed & Core Web Vitals." },
    { icon: Bug, title: "Bug Fixes", desc: "Fix errors, broken pages & plugin conflicts." },
    { icon: Lock, title: "Security Hardening", desc: "Advanced protection from attacks & vulnerabilities." },
    { icon: Globe, title: "Uptime Monitoring", desc: "24/7 website monitoring & downtime alerts." },
    { icon: BarChart3, title: "Performance Reports", desc: "Monthly reports of speed, traffic & health." },
  ];

  const plans = [
    {
      name: "Basic Plan",
      price: "$49/mo",
      features: ["Weekly Updates", "Security Scan", "Monthly Backup", "Email Support"]
    },
    {
      name: "Growth Plan",
      price: "$99/mo",
      features: ["Daily Backups", "Speed Optimization", "Bug Fixes", "Priority Support"]
    },
    {
      name: "Business Plan",
      price: "$199/mo",
      features: ["24/7 Monitoring", "Advanced Security", "Dedicated Developer", "Instant Fixes"]
    },
  ];

  const steps = [
    "Website Audit",
    "Security Setup",
    "Performance Optimization",
    "Backup Configuration",
    "Monitoring Setup",
    "Monthly Maintenance"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-cyan-50 text-slate-900">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-300/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-300/30 rounded-full blur-[140px]" />
      </div>

      {/* HERO */}
      <section className="px-4 sm:px-6 py-24 md:py-32 text-center max-w-5xl mx-auto">

        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 border backdrop-blur-xl shadow">
          <Activity size={16} /> Website Maintenance Services
        </div>

        <h1 className="mt-8 text-4xl md:text-6xl font-bold">
          Keep Your Website
          <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Secure, Fast & Updated
          </span>
        </h1>

        <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
          We provide professional website maintenance services that keep your website
          secure, optimized, and running 24/7 without downtime.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl shadow-xl hover:scale-105 transition">
            Get Maintenance Plan
          </button>

          <button className="px-8 py-4 bg-white/60 border rounded-2xl backdrop-blur-xl hover:bg-white/80 transition">
            Talk to Expert
          </button>
        </div>

      </section>

      {/* SERVICES */}
      <section className="px-4 sm:px-6 py-24">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-center text-3xl md:text-5xl font-bold mb-16">
            What’s Included in Maintenance
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((item, i) => {
              const Icon = item.icon;

              return (
                <div key={i} className="relative p-6 rounded-[32px] bg-white/60 backdrop-blur-2xl border shadow-xl hover:-translate-y-2 transition">

                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-cyan-100/20" />

                  <div className="relative">
                    <Icon className="text-cyan-600 w-8 h-8" />
                    <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-slate-600">{item.desc}</p>
                  </div>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="px-4 sm:px-6 py-24">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            Maintenance Pricing Plans
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {plans.map((plan, i) => (
              <div key={i} className="p-8 rounded-[32px] bg-white/60 border backdrop-blur-xl shadow-xl hover:-translate-y-2 transition">

                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="text-3xl font-bold text-cyan-600 mt-3">{plan.price}</p>

                <ul className="mt-6 space-y-2 text-slate-600">
                  {plan.features.map((f, idx) => (
                    <li key={idx}>✔ {f}</li>
                  ))}
                </ul>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="px-4 sm:px-6 py-24">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            Maintenance Process
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {steps.map((step, i) => (
              <div key={i} className="p-6 rounded-[28px] bg-white/60 border shadow-xl">
                <div className="text-cyan-600 text-2xl font-bold">0{i + 1}</div>
                <h3 className="mt-3 font-semibold">{step}</h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 py-24">
        <div className="max-w-5xl mx-auto text-center bg-white/60 backdrop-blur-3xl border rounded-[40px] p-10 shadow-2xl">

          <h2 className="text-3xl md:text-5xl font-bold">
            Stop Worrying About Website Issues
          </h2>

          <p className="mt-4 text-slate-600">
            Let us handle updates, security & performance while you grow your business.
          </p>

          <button className="mt-8 px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl hover:scale-105 transition">
            Start Maintenance Today
          </button>

        </div>
      </section>

    </main>
  );
}