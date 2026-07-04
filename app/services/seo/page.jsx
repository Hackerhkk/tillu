"use client";

import {
  Search,
  TrendingUp,
  BarChart3,
  Globe,
  Link2,
  Shield,
  ArrowRight,
  CheckCircle,
  Target,
  Zap,
} from "lucide-react";

export default function SeoServicesPage() {

  const services = [
    {
      icon: Search,
      title: "Keyword Research",
      desc: "We find high-intent keywords that bring real customers, not just traffic.",
    },
    {
      icon: TrendingUp,
      title: "Rank Tracking",
      desc: "Track your Google rankings daily and improve performance continuously.",
    },
    {
      icon: BarChart3,
      title: "SEO Audit",
      desc: "Deep technical audit to find and fix issues stopping your growth.",
    },
    {
      icon: Globe,
      title: "On Page SEO",
      desc: "Optimize titles, meta tags, content, and structure for better ranking.",
    },
    {
      icon: Link2,
      title: "Backlink Building",
      desc: "High authority backlinks to increase your domain authority.",
    },
    {
      icon: Shield,
      title: "Technical SEO",
      desc: "Fix speed, indexing, crawling and mobile usability issues.",
    },
  ];

  const benefits = [
    "Increase Organic Traffic",
    "Rank on Google Top Page",
    "Generate Qualified Leads",
    "Improve Brand Visibility",
    "Long-Term Business Growth",
  ];

  const process = [
    {
      title: "Website Audit",
      desc: "We analyze your website structure, speed, and SEO issues.",
    },
    {
      title: "Keyword Strategy",
      desc: "We build a data-driven keyword strategy for your business.",
    },
    {
      title: "On-Page Optimization",
      desc: "We optimize your pages for maximum Google visibility.",
    },
    {
      title: "Off-Page SEO",
      desc: "We build high-quality backlinks to boost authority.",
    },
    {
      title: "Tracking & Reporting",
      desc: "We track rankings and provide monthly SEO reports.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-cyan-50 text-slate-900">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-300/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-300/30 blur-[140px] rounded-full" />
      </div>

      {/* HERO */}
      <section className="px-6 py-24 text-center max-w-5xl mx-auto">

        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 border backdrop-blur-xl shadow">
          <TrendingUp size={16} />
          Professional SEO Services
        </div>

        <h1 className="mt-8 text-4xl md:text-6xl font-bold">
          Rank Your Website on
          <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Google First Page
          </span>
        </h1>

        <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
          We help businesses grow online with powerful SEO strategies that increase traffic, leads, and sales consistently.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl hover:scale-105 transition">
            Get Free SEO Audit
          </button>

          <button className="px-8 py-4 rounded-2xl bg-white/60 border backdrop-blur-xl hover:bg-white/80 transition">
            Talk to Expert
          </button>
        </div>

      </section>

      {/* SERVICES */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-center text-3xl md:text-5xl font-bold mb-14">
            What We Do in SEO
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="p-6 rounded-[30px] bg-white/60 backdrop-blur-2xl border shadow-xl hover:-translate-y-2 transition"
                >
                  <Icon className="text-cyan-600 w-8 h-8" />
                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-slate-600">{item.desc}</p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl md:text-5xl font-bold mb-14">
            Why Choose Our SEO Services?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {benefits.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-5 rounded-2xl bg-white/60 border backdrop-blur-xl"
              >
                <CheckCircle className="text-cyan-600" />
                {b}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-center text-3xl md:text-5xl font-bold mb-14">
            Our SEO Process
          </h2>

          <div className="space-y-6">

            {process.map((step, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 rounded-2xl bg-white/60 border backdrop-blur-xl"
              >
                <div className="text-cyan-600 font-bold text-xl">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-slate-600 text-sm mt-1">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto text-center bg-white/60 backdrop-blur-3xl border rounded-[40px] p-12 shadow-2xl">

          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Grow Your Business Online?
          </h2>

          <p className="mt-4 text-slate-600">
            Get expert SEO strategy and start ranking higher on Google today.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl hover:scale-105 transition">
            Start SEO Campaign <ArrowRight size={16} />
          </button>

        </div>
      </section>

    </main>
  );
}