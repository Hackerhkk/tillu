
import {
  Rocket,
  Shield,
  Users,
  Lightbulb,
  Globe,
  Code2,
} from "lucide-react";

export default function AboutPage() {
  const features = [
    {
      icon: Rocket,
      title: "Fast Delivery",
      desc: "Agile development with quick turnaround time.",
    },
    {
      icon: Shield,
      title: "Secure Systems",
      desc: "Enterprise-grade security & architecture.",
    },
    {
      icon: Users,
      title: "Expert Team",
      desc: "Senior engineers & designers only.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "AI-driven modern solutions.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      desc: "Serving clients across 70+ countries.",
    },
    {
      icon: Code2,
      title: "Clean Code",
      desc: "Scalable and maintainable systems.",
    },
  ];

  const timeline = [
    {
      year: "2017 - 2019",
      title: "Foundation",
      desc: "Started as a small development team building websites and MVPs.",
    },
    {
      year: "2020 - 2022",
      title: "Growth Phase",
      desc: "Expanded into mobile apps, SaaS products and enterprise systems.",
    },
    {
      year: "2023 - Present",
      title: "AI & Scale",
      desc: "Building AI-powered platforms and global digital products.",
    },
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
            About Us
          </div>

          <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            We Build
            <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              Digital Products
            </span>
          </h1>

          <p className="mt-6 text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            We help startups and enterprises build scalable web,
            mobile and AI-powered products that accelerate growth.
          </p>

        </div>

      </section>

      {/* WHO WE ARE */}
      <section className="px-4 sm:px-6 py-20">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center">

          <div>

            <h2 className="text-3xl md:text-5xl font-bold">
              Who We Are
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed">
              We are a modern digital engineering company focused on building
              scalable, secure and high-performance software systems.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Our mission is to help businesses transform ideas into
              real digital products using React, Next.js, Node.js,
              Cloud and AI technologies.
            </p>

            <p className="mt-4 text-slate-600">
              We don't just build software — we build growth systems.
            </p>

          </div>

          <div className="relative overflow-hidden rounded-[36px] bg-white/60 backdrop-blur-2xl border border-white/70 shadow-2xl h-[280px] md:h-[400px] flex items-center justify-center">

            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-cyan-100/20" />

            <div className="relative text-center">
              <div className="text-6xl">🚀</div>
              <p className="mt-4 text-slate-600">
                Team / Office Illustration
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="px-4 sm:px-6 py-20 md:py-24">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-center text-3xl md:text-5xl font-bold mb-10 md:mb-16">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {features.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-[32px] bg-white/60 backdrop-blur-2xl border border-white/70 p-6 md:p-8 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
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

      {/* TIMELINE */}
      <section className="px-4 sm:px-6 py-20 md:py-24">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">
            Our Journey
          </h2>

          <div className="space-y-6">

            {timeline.map((item, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-[32px] bg-white/60 backdrop-blur-2xl border border-white/70 p-6 md:p-8 shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />

                <div className="relative">
                  <p className="text-cyan-600 font-semibold">
                    {item.year}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-slate-600">
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

        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[40px] bg-white/60 backdrop-blur-3xl border border-white/70 p-8 md:p-14 shadow-2xl text-center">

          <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/40 via-white/20 to-blue-100/40" />

          <div className="relative">

            <h2 className="text-3xl md:text-5xl font-bold">
              Let's Build Something Great Together
            </h2>

            <p className="mt-4 text-slate-600 text-base md:text-lg">
              We help you turn ideas into scalable digital products.
            </p>

            <button className="w-full sm:w-auto mt-8 px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl hover:scale-105 transition-all duration-300">
              Contact Us
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}

