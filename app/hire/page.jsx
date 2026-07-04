import {
  Code2,
  Smartphone,
  Bot,
  Globe,
  Layers,
  Shield,
  Users,
  Rocket,
} from "lucide-react";

export default function HireDevelopersPage() {
  const services = [
    { icon: Code2, title: "Web Developers", desc: "React, Next.js, Node.js experts" },
    { icon: Smartphone, title: "Mobile Developers", desc: "Android, iOS, Flutter, React Native" },
    { icon: Bot, title: "AI Developers", desc: "LLMs, ML, automation systems" },
    { icon: Globe, title: "Full Stack Developers", desc: "End-to-end scalable systems" },
    { icon: Layers, title: "Frontend Engineers", desc: "UI/UX focused modern apps" },
    { icon: Shield, title: "Backend Engineers", desc: "Secure APIs & architecture" },
  ];

  const whyHire = [
    { icon: Users, title: "Dedicated Teams", desc: "Fully dedicated engineers for your project." },
    { icon: Rocket, title: "Fast Delivery", desc: "Agile execution with weekly updates." },
    { icon: Shield, title: "Secure Code", desc: "Enterprise-grade secure development standards." },
  ];

  const models = [
    { title: "Dedicated Developer", desc: "Full-time engineer for long-term projects." },
    { title: "Team Model", desc: "Complete team with PM, devs & QA." },
    { title: "Project Based", desc: "Fixed scope with clear delivery timeline." },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-b from-sky-50 via-white to-cyan-50 text-slate-900">

      {/* LIQUID BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[250px] h-[250px] md:w-[600px] md:h-[600px] bg-cyan-300/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] md:w-[600px] md:h-[600px] bg-blue-300/30 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-sky-200/20 rounded-full blur-[100px]" />
      </div>

      {/* HERO */}
      <section className="px-4 sm:px-6 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">

          <div className="inline-flex px-5 py-2 rounded-full bg-white/70 backdrop-blur-2xl border border-white/70 shadow-lg">
            Hire Developers
          </div>

          <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Hire Expert
            <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              Developers
            </span>
          </h1>

          <p className="mt-6 text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Build scalable web, mobile, and AI-powered products with dedicated
            engineers who deliver production-ready systems.
          </p>

          <button className="mt-10 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl hover:scale-105 transition">
            Get Started
          </button>

        </div>
      </section>

      {/* SERVICES */}
      <section className="px-4 sm:px-6 py-20 md:py-24">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-center text-3xl md:text-5xl font-bold mb-10 md:mb-16">
            Hire Developers Across Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-[32px] bg-white/60 backdrop-blur-2xl border border-white/70 p-6 md:p-8 shadow-xl hover:-translate-y-2 transition"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-cyan-100/20" />

                  <div className="relative">

                    <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-cyan-600" />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-slate-600">
                      {item.desc}
                    </p>

                  </div>
                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* WHY HIRE US */}
      <section className="px-4 sm:px-6 py-20 md:py-24">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-center text-3xl md:text-5xl font-bold mb-10 md:mb-16">
            Why Hire From Us
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {whyHire.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-[32px] bg-white/60 backdrop-blur-2xl border border-white/70 p-6 md:p-8 shadow-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent" />

                  <div className="relative">

                    <Icon className="w-10 h-10 text-cyan-600" />

                    <h3 className="mt-4 text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 mt-2">
                      {item.desc}
                    </p>

                  </div>
                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* HIRING MODELS */}
      <section className="px-4 sm:px-6 py-20 md:py-24">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-center text-3xl md:text-5xl font-bold mb-10 md:mb-16">
            Hiring Models
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {models.map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-[32px] bg-white/60 backdrop-blur-2xl border border-white/70 p-6 md:p-8 shadow-xl hover:-translate-y-2 transition"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent" />

                <div className="relative">
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 mt-3">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 py-20 md:py-24">

        <div className="max-w-5xl mx-auto text-center relative overflow-hidden rounded-[40px] bg-white/60 backdrop-blur-3xl border border-white/70 p-8 md:p-14 shadow-2xl">

          <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/40 via-white/20 to-blue-100/40" />

          <div className="relative">

            <h2 className="text-3xl md:text-5xl font-bold">
              Start Hiring Developers Today
            </h2>

            <p className="mt-4 text-slate-600 text-base md:text-lg">
              Get matched with expert developers within 24–48 hours.
            </p>

            <button className="mt-8 px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl hover:scale-105 transition">
              Hire Now
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}