import {
  Code2,
  LayoutTemplate,
  Plug,
  ShoppingCart,
  Shield,
  Zap,
  Globe,
  Settings,
  Layers,
  Rocket,
  Database,
  Server,
} from "lucide-react";

export default function WordpressDevelopmentPage() {

  const services = [
    { icon: LayoutTemplate, title: "Custom WordPress Themes", desc: "Pixel-perfect custom themes built for your brand." },
    { icon: Plug, title: "Plugin Development", desc: "Custom plugins for advanced functionality." },
    { icon: ShoppingCart, title: "WooCommerce Development", desc: "Powerful eCommerce stores with WordPress." },
    { icon: Code2, title: "Custom Development", desc: "Fully tailored WordPress solutions from scratch." },
    { icon: Settings, title: "Website Optimization", desc: "Speed, SEO & performance optimization." },
    { icon: Shield, title: "Security Hardening", desc: "Secure WordPress setup with protection layers." },
  ];

  const features = [
    "Fast Loading Websites",
    "SEO Optimized Structure",
    "Mobile Responsive Design",
    "Easy Content Management",
    "Scalable Architecture",
    "API Integrations",
  ];

  const steps = [
    "Requirement Analysis",
    "UI/UX Design",
    "WordPress Development",
    "Plugin Integration",
    "Testing & Optimization",
    "Launch & Maintenance",
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-b from-sky-50 via-white to-cyan-50 text-slate-900">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[250px] h-[250px] md:w-[600px] md:h-[600px] bg-cyan-300/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] md:w-[600px] md:h-[600px] bg-blue-300/30 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-sky-200/20 rounded-full blur-[100px]" />
      </div>

      {/* HERO */}
      <section className="px-4 sm:px-6 py-24 md:py-32">
        <div className="max-w-5xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 backdrop-blur-2xl border border-white/70 shadow-lg">
            <Globe size={16} /> WordPress Development Company
          </div>

          <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl font-bold">
            Build Powerful
            <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              WordPress Websites
            </span>
            That Convert
          </h1>

          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            We create high-performance WordPress websites, custom themes, plugins and WooCommerce stores
            that are fast, secure, SEO-friendly and scalable.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl hover:scale-105 transition">
              Get Free Consultation
            </button>

            <button className="px-8 py-4 rounded-2xl bg-white/60 backdrop-blur-2xl border border-white/70 shadow-lg">
              View Services
            </button>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="px-4 sm:px-6 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            ["500+", "WordPress Sites Built"],
            ["120+", "WooCommerce Stores"],
            ["10+", "Years Experience"],
            ["99%", "Client Satisfaction"],
          ].map((s, i) => (
            <div key={i} className="bg-white/60 backdrop-blur-2xl border border-white/70 rounded-[28px] p-6 text-center shadow-xl">
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
            WordPress Development Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((item, i) => {
              const Icon = item.icon;

              return (
                <div key={i} className="relative p-6 rounded-[32px] bg-white/60 backdrop-blur-2xl border border-white/70 shadow-xl hover:-translate-y-2 transition">

                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-cyan-100/20" />

                  <div className="relative">
                    <Icon className="text-cyan-600 w-8 h-8" />
                    <h3 className="mt-4 font-semibold text-xl">{item.title}</h3>
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
            Key Features
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            {features.map((f, i) => (
              <div key={i} className="p-5 rounded-xl bg-white/60 border backdrop-blur-xl shadow">
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
        <div className="max-w-5xl mx-auto text-center bg-white/60 backdrop-blur-3xl border border-white/70 rounded-[40px] p-10 shadow-2xl">

          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Build Your WordPress Website?
          </h2>

          <p className="mt-4 text-slate-600">
            Let’s build a fast, scalable and SEO-friendly WordPress website for your business.
          </p>

          <button className="mt-8 px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl hover:scale-105 transition">
            Get Free Consultation
          </button>

        </div>
      </section>

    </main>
  );
}