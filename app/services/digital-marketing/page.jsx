import {
  TrendingUp,
  Search,
  Share2,
  MousePointerClick,
  Mail,
  Megaphone,
  BarChart3,
  Globe,
  Users,
  Target,
  Rocket,
  LineChart,
} from "lucide-react";

export default function DigitalMarketingPage() {

  const services = [
    { icon: Search, title: "SEO Optimization", desc: "Rank higher on Google and drive organic traffic to your website." },
    { icon: Share2, title: "Social Media Marketing", desc: "Grow brand awareness on Instagram, Facebook, LinkedIn & more." },
    { icon: MousePointerClick, title: "PPC Advertising", desc: "High-converting Google & Meta ads for instant leads." },
    { icon: Megaphone, title: "Brand Awareness Campaigns", desc: "Build strong digital identity across all platforms." },
    { icon: Mail, title: "Email Marketing", desc: "Automated email funnels to convert and retain customers." },
    { icon: BarChart3, title: "Analytics & Reporting", desc: "Data-driven insights for better marketing decisions." },
  ];

  const features = [
    "Increase Website Traffic",
    "Generate Qualified Leads",
    "Improve Brand Visibility",
    "Boost ROI on Ads",
    "Long-Term Organic Growth",
    "Targeted Audience Reach",
  ];

  const process = [
    "Business Analysis",
    "Market Research",
    "Strategy Creation",
    "Campaign Setup",
    "Optimization",
    "Reporting & Scaling",
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
          <TrendingUp size={16} /> Digital Marketing Services
        </div>

        <h1 className="mt-8 text-4xl md:text-6xl font-bold">
          Grow Your Business with
          <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Powerful Digital Marketing
          </span>
        </h1>

        <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
          We help startups and enterprises grow online using SEO, PPC, social media,
          and performance marketing strategies that deliver real results.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl hover:scale-105 transition">
            Get Free Strategy
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
            ["10M+", "Impressions Generated"],
            ["5000+", "Leads Delivered"],
            ["200+", "Brands Served"],
            ["95%", "Client Retention"],
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
            Digital Marketing Services
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

      {/* BENEFITS */}
      <section className="px-4 sm:px-6 py-24">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            Why Digital Marketing Matters
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
            Our Marketing Process
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {process.map((step, i) => (
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
            Ready to Grow Your Business Online?
          </h2>

          <p className="mt-4 text-slate-600">
            Let’s build a high-performance digital marketing strategy for your brand.
          </p>

          <button className="mt-8 px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl hover:scale-105 transition">
            Start Your Campaign
          </button>

        </div>
      </section>

    </main>
  );
}