import {
  Globe,
  Code2,
  ShoppingCart,
  Shield,
  Smartphone,
  Rocket,
} from "lucide-react";

export default function WebDevelopmentPage() {
  const stats = [
    ["500+", "Projects Delivered"],
    ["70+", "Countries"],
    ["200+", "Experts"],
    ["10+", "Years Experience"],
  ];

  const services = [
    { icon: Globe, title: "Custom Websites", desc: "Fast, scalable, SEO optimized websites." },
    { icon: Code2, title: "Web Applications", desc: "Complex SaaS & dashboard systems." },
    { icon: ShoppingCart, title: "eCommerce Solutions", desc: "High converting online stores." },
    { icon: Smartphone, title: "Responsive UI", desc: "Perfect across all devices." },
    { icon: Shield, title: "Security", desc: "Enterprise-grade protection." },
    { icon: Rocket, title: "Maintenance", desc: "Continuous improvements." },
  ];

  const process = ["Discovery", "UI/UX", "Development", "Launch"];

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
            Web Development Services
          </div>

          <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Build Scalable
            <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              Digital Products
            </span>
            That Grow Business
          </h1>

          <p className="mt-6 text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            We design and develop high-performance web applications, SaaS platforms
            and business websites with modern technologies.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl hover:scale-105 transition">
              Get Started
            </button>

            <button className="px-8 py-4 rounded-2xl bg-white/60 backdrop-blur-2xl border border-white/70 shadow-lg hover:bg-white/80 transition">
              Free Consultation
            </button>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="px-4 sm:px-6 py-20 md:py-24">

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-[28px] bg-white/60 backdrop-blur-2xl border border-white/70 shadow-xl p-6 text-center hover:-translate-y-1 transition"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-cyan-600">
                {s[0]}
              </h2>
              <p className="text-slate-600 mt-2 text-sm md:text-base">
                {s[1]}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* SERVICES */}
      <section className="px-4 sm:px-6 py-20 md:py-24">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-center text-3xl md:text-5xl font-bold mb-10 md:mb-16">
            Our Web Development Services
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

                    <Icon className="w-10 h-10 text-cyan-600" />

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

      {/* PROCESS */}
      <section className="px-4 sm:px-6 py-20 md:py-24">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl md:text-5xl font-bold mb-10 md:mb-16">
            Our Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {process.map((p, i) => (
              <div
                key={i}
                className="rounded-[28px] bg-white/60 backdrop-blur-2xl border border-white/70 shadow-xl p-6"
              >
                <div className="text-cyan-600 text-2xl font-bold">
                  0{i + 1}
                </div>

                <h3 className="mt-3 text-lg font-semibold">
                  {p}
                </h3>

                <p className="text-slate-600 mt-2 text-sm">
                  End-to-end structured delivery process.
                </p>
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
              Let’s Build Your Next Big Idea
            </h2>

            <p className="mt-4 text-slate-600 text-base md:text-lg">
              Talk to our experts and start your project today.
            </p>

            <button className="mt-8 px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl hover:scale-105 transition">
              Contact Us
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}