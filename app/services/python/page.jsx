import {
  Code2,
  Server,
  Database,
  Brain,
  Shield,
  Zap,
  Globe,
  Cloud,
  Cpu,
  GitBranch,
  Activity,
  Rocket,
} from "lucide-react";

export default function PythonDevelopmentPage() {

  const services = [
    { icon: Server, title: "Backend Development", desc: "Scalable Python backend systems using Django & FastAPI." },
    { icon: Code2, title: "Custom Python Development", desc: "Tailored solutions built around your business logic." },
    { icon: Brain, title: "AI & Machine Learning", desc: "Intelligent systems, ML models & automation pipelines." },
    { icon: Database, title: "Data Engineering", desc: "Big data pipelines, ETL workflows & analytics systems." },
    { icon: Globe, title: "Web Applications", desc: "Secure, fast and scalable Python web platforms." },
    { icon: Shield, title: "Security Systems", desc: "Advanced security, authentication & data protection." },
    { icon: Cloud, title: "Cloud Deployment", desc: "AWS, Azure & GCP deployment for Python apps." },
    { icon: GitBranch, title: "API Development", desc: "REST & GraphQL APIs for modern applications." },
  ];

  const features = [
    "Highly Scalable Architecture",
    "Fast Development Cycle",
    "AI & Data Science Ready",
    "Enterprise Security",
    "Easy Integration with APIs",
    "Cloud-Native Applications",
  ];

  const steps = [
    "Requirement Analysis",
    "System Design",
    "UI/UX Planning",
    "Python Development",
    "Testing & Optimization",
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
          <Code2 size={16} /> Python Development Services
        </div>

        <h1 className="mt-8 text-4xl md:text-6xl font-bold">
          Build Scalable &
          <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Intelligent Python Applications
          </span>
        </h1>

        <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
          We build high-performance Python applications including backend systems,
          AI solutions, APIs, and enterprise-grade platforms for startups and enterprises.
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
            ["450+", "Python Projects"],
            ["120+", "AI Systems"],
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
            Python Development Services
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
            Why Python is Powerful
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
            Need a Powerful Python Solution?
          </h2>

          <p className="mt-4 text-slate-600">
            Let’s build scalable AI, backend and data-driven applications for your business.
          </p>

          <button className="mt-8 px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl hover:scale-105 transition">
            Start Your Project
          </button>

        </div>
      </section>

    </main>
  );
}