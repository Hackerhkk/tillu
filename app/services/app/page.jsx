import { Smartphone, Code2, Rocket, Shield, Globe, Layers } from "lucide-react";

export default function MobileAppDevelopmentPage() {
  const services = [
    { icon: Smartphone, title: "Native Apps", desc: "Android & iOS high-performance apps." },
    { icon: Code2, title: "Cross Platform Apps", desc: "React Native & Flutter solutions." },
    { icon: Rocket, title: "MVP Development", desc: "Fast MVP launch for startups." },
    { icon: Shield, title: "Secure Apps", desc: "Enterprise-grade security systems." },
    { icon: Globe, title: "API Integration", desc: "Seamless backend connectivity." },
    { icon: Layers, title: "UI/UX Design", desc: "Modern mobile-first interfaces." },
  ];

  const steps = ["Ideation", "Design", "Development", "Launch"];

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
            Mobile App Development
          </div>

          <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Build High-Performance
            <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              Mobile Apps
            </span>
            That Scale
          </h1>

          <p className="mt-6 text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            We design and develop powerful Android & iOS applications with modern UI,
            scalable backend, and smooth performance.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl hover:scale-105 transition">
              Start Your App
            </button>

            <button className="px-8 py-4 rounded-2xl bg-white/60 backdrop-blur-2xl border border-white/70 shadow-lg hover:bg-white/80 transition">
              Talk to Expert
            </button>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="px-4 sm:px-6 py-20 md:py-24">

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

          {[
            ["120+", "Apps Delivered"],
            ["50+", "Clients Worldwide"],
            ["8+", "Years Experience"],
            ["99%", "Client Satisfaction"],
          ].map((s, i) => (
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
            Mobile App Development Services
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

                    <p className="mt-3 text-slate-600 text-sm md:text-base">
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
            Development Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {steps.map((step, i) => (
              <div
                key={i}
                className="rounded-[28px] bg-white/60 backdrop-blur-2xl border border-white/70 shadow-xl p-6"
              >

                <div className="text-cyan-600 text-2xl font-bold">
                  0{i + 1}
                </div>

                <h3 className="mt-3 text-lg font-semibold">
                  {step}
                </h3>

                <p className="text-slate-600 mt-2 text-sm">
                  End-to-end mobile app delivery lifecycle.
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
              Ready to Build Your Mobile App?
            </h2>

            <p className="mt-4 text-slate-600 text-base md:text-lg">
              Let’s turn your idea into a scalable mobile product.
            </p>

            <button className="mt-8 px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl hover:scale-105 transition">
              Get Free Consultation
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}