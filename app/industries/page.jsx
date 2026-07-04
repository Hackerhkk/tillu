import {
  Building2,
  ShoppingCart,
  Banknote,
  GraduationCap,
  HeartPulse,
  Truck,
  Factory,
  Laptop,
} from "lucide-react";

export default function IndustriesPage() {
  const industries = [
    {
      icon: Building2,
      title: "Real Estate",
      desc: "Property listing platforms, CRM systems, and booking portals.",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce",
      desc: "Scalable online stores and marketplace solutions.",
    },
    {
      icon: Banknote,
      title: "Fintech",
      desc: "Secure banking apps, wallets, and payment systems.",
    },
    {
      icon: GraduationCap,
      title: "Education",
      desc: "E-learning platforms, LMS and student portals.",
    },
    {
      icon: HeartPulse,
      title: "Healthcare",
      desc: "Hospital management and telemedicine platforms.",
    },
    {
      icon: Truck,
      title: "Logistics",
      desc: "Tracking systems, supply chain and fleet management.",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      desc: "ERP systems and industrial automation dashboards.",
    },
    {
      icon: Laptop,
      title: "SaaS / Tech",
      desc: "Cloud-based SaaS platforms and admin dashboards.",
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
            Industries We Serve
          </div>

          <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Digital Solutions Across
            <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              Every Industry
            </span>
          </h1>

          <p className="mt-6 text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            We build scalable web, mobile, and AI-powered solutions tailored
            for different industries and business needs.
          </p>

        </div>

      </section>

      {/* INDUSTRIES GRID */}
      <section className="px-4 sm:px-6 py-20 md:py-24">

        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {industries.map((item, i) => {
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

      {/* CTA */}
      <section className="px-4 sm:px-6 py-20 md:py-24">

        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[40px] bg-white/60 backdrop-blur-3xl border border-white/70 p-8 md:p-14 shadow-2xl text-center">

          <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/40 via-white/20 to-blue-100/40" />

          <div className="relative">

            <h2 className="text-3xl md:text-5xl font-bold">
              Have an Industry-Specific Idea?
            </h2>

            <p className="mt-4 text-slate-600 text-base md:text-lg">
              We build custom solutions tailored to your business domain.
            </p>

            <button className="mt-8 px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl hover:scale-105 transition">
              Get Consultation
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}