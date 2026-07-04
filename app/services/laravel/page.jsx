import {
  Code2,
  Server,
  Database,
  Layers,
  Shield,
  Zap,
  Globe,
  Cloud,
  GitBranch,
  Cpu,
  Settings,
  Rocket,
} from "lucide-react";

export default function LaravelDevelopmentPage() {

  const services = [
    { icon: Code2, title: "Custom Laravel Development", desc: "Scalable and secure Laravel applications built from scratch." },
    { icon: Server, title: "API Development", desc: "Robust REST & GraphQL APIs for mobile & web apps." },
    { icon: Database, title: "Database Architecture", desc: "Optimized database design for high-performance systems." },
    { icon: Layers, title: "Enterprise Web Apps", desc: "Large-scale Laravel applications for businesses." },
    { icon: Shield, title: "Security Solutions", desc: "Advanced protection against threats & vulnerabilities." },
    { icon: Zap, title: "Performance Optimization", desc: "Speed optimization for faster web applications." },
    { icon: Cloud, title: "Cloud Deployment", desc: "Deploy Laravel apps on AWS, Azure & GCP." },
    { icon: GitBranch, title: "Migration Services", desc: "Upgrade legacy apps to Laravel framework smoothly." },
  ];

  const features = [
    "MVC Architecture Based Development",
    "High Security & Data Protection",
    "Fast & Scalable Backend Systems",
    "Third-Party API Integration",
    "Multi-Tenant SaaS Ready",
    "SEO Friendly Web Applications",
  ];

  const steps = [
    "Requirement Gathering",
    "System Architecture Design",
    "UI/UX Planning",
    "Laravel Development",
    "Testing & QA",
    "Deployment & Scaling",
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
          <Globe size={16} /> Laravel Development Services
        </div>

        <h1 className="mt-8 text-4xl md:text-6xl font-bold">
          Build Powerful
          <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Laravel Web Applications
          </span>
        </h1>

        <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
          We build secure, scalable, and high-performance Laravel applications for startups,
          enterprises, and SaaS platforms using modern architecture.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl hover:scale-105 transition">
            Get Free Consultation
          </button>

          <button className="px-8 py-4 rounded-2xl bg-white/60 border backdrop-blur-xl">
            View Case Studies
          </button>
        </div>

      </section>

      {/* STATS */}
      <section className="px-4 sm:px-6 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            ["300+", "Laravel Projects"],
            ["50+", "SaaS Platforms"],
            ["10+", "Years Experience"],
            ["99%", "Client Satisfaction"],
          ].map((s, i) => (
            <div key={i} className="p-6 text-center rounded-[28px] bg-white/60 border backdrop-blur-xl shadow-xl">
              <h2 className="text-3xl font-bold text-cyan-600">{s[0]}</h2>
              <p className="text-slate-600 mt-2">{s[1]}</p>
            </div>
          ))}

        </div>
      </section>

      {/* SERVICES */}
      <section className="px-4 sm:px-6 py-24">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-center text-3xl md:text-5xl font-bold mb-16">
            Laravel Development Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((item, i) => {
              const Icon = item.icon;

              return (
                <div key={i} className="relative p-6 rounded-[32px] bg-white/60 border backdrop-blur-xl shadow-xl hover:-translate-y-2 transition">

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

      {/* FEATURES */}
      <section className="px-4 sm:px-6 py-24">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            Why Choose Laravel?
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            {features.map((f, i) => (
              <div key={i} className="p-5 rounded-xl bg-white/60 border shadow">
                {f}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="px-4 sm:px-6 py-24">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            Development Process
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
            Ready to Build Your Laravel Application?
          </h2>

          <p className="mt-4 text-slate-600">
            Let’s build a powerful backend system that scales your business.
          </p>

          <button className="mt-8 px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl hover:scale-105 transition">
            Start Your Project
          </button>

        </div>
      </section>

    </main>
  );
}