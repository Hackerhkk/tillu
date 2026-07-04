
import { Calendar, User, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const blogs = [
    {
      title: "How to Build a Modern Web App with Next.js",
      desc: "Step-by-step guide for scalable frontend architecture.",
    },
    {
      title: "Mobile App Development Best Practices in 2026",
      desc: "Learn performance optimization and UX strategies.",
    },
    {
      title: "AI Integration in Modern SaaS Products",
      desc: "How AI is transforming product engineering.",
    },
    {
      title: "Database Design for Scalable Applications",
      desc: "PostgreSQL vs MongoDB architecture decisions.",
    },
    {
      title: "CI/CD Pipeline Setup for Production Apps",
      desc: "Automate deployment with modern DevOps tools.",
    },
    {
      title: "UI/UX Design Trends for SaaS Platforms",
      desc: "Modern design systems and conversion-focused UX.",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-b from-sky-50 via-white to-cyan-50 text-slate-900">

      {/* LIQUID BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute top-0 left-0 w-[250px] h-[250px] md:w-[600px] md:h-[600px] bg-cyan-300/30 rounded-full blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] md:w-[600px] md:h-[600px] bg-blue-300/30 rounded-full blur-[120px]" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-sky-200/20 rounded-full blur-[100px]" />

      </div>

      {/* HERO */}
      <section className="px-4 sm:px-6 py-20 md:py-32">

        <div className="max-w-5xl mx-auto text-center">

          <div className="inline-flex px-5 py-2 rounded-full bg-white/70 backdrop-blur-2xl border border-white/70 shadow-lg">
            Our Blog
          </div>

          <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Insights on
            <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              Web, Mobile & AI
            </span>
          </h1>

          <p className="mt-6 text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Explore technical guides, industry insights and engineering best
            practices from our development team.
          </p>

        </div>

      </section>

      {/* FEATURED ARTICLE */}
      <section className="px-4 sm:px-6 pb-16">

        <div className="max-w-6xl mx-auto">

          <div className="relative overflow-hidden rounded-[40px] bg-white/60 backdrop-blur-3xl border border-white/70 p-6 md:p-8 shadow-2xl">

            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-cyan-100/20" />

            <div className="relative grid lg:grid-cols-2 gap-8 items-center">

              <div className="h-[240px] md:h-[320px] rounded-[28px] bg-gradient-to-br from-cyan-200/40 to-blue-200/40 flex items-center justify-center">
                <span className="text-5xl">🚀</span>
              </div>

              <div>

                <span className="text-cyan-600 font-medium">
                  Featured Article
                </span>

                <h2 className="text-2xl md:text-4xl font-bold mt-3">
                  A Complete Guide to Building Scalable SaaS Applications
                </h2>

                <p className="text-slate-600 mt-4">
                  Learn architecture patterns, backend scaling strategies and
                  frontend optimization techniques for modern SaaS platforms.
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mt-5">

                  <span className="flex items-center gap-1">
                    <User size={14} />
                    Admin
                  </span>

                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    June 2026
                  </span>

                </div>

                <button className="mt-6 flex items-center gap-2 text-cyan-600 hover:text-cyan-700 transition">
                  Read More <ArrowRight size={16} />
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* BLOG GRID */}
      <section className="px-4 sm:px-6 py-20">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">
            Latest Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {blogs.map((blog, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[32px] bg-white/60 backdrop-blur-2xl border border-white/70 p-6 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-cyan-100/20" />

                <div className="relative">

                  <div className="h-40 rounded-[24px] bg-gradient-to-br from-cyan-200/30 to-blue-200/30 mb-5 flex items-center justify-center">
                    <span className="text-4xl">📘</span>
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold">
                    {blog.title}
                  </h3>

                  <p className="text-slate-600 mt-3 text-sm">
                    {blog.desc}
                  </p>

                  <button className="mt-5 text-cyan-600 hover:text-cyan-700 flex items-center gap-2 text-sm font-medium">
                    Read More
                    <ArrowRight size={14} />
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* NEWSLETTER CTA */}
      <section className="px-4 sm:px-6 py-20 md:py-24">

        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[40px] bg-white/60 backdrop-blur-3xl border border-white/70 p-8 md:p-14 shadow-2xl text-center">

          <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/40 via-white/20 to-blue-100/40" />

          <div className="relative">

            <h2 className="text-3xl md:text-5xl font-bold">
              Want More Engineering Insights?
            </h2>

            <p className="mt-4 text-slate-600 text-base md:text-lg">
              Subscribe to get the latest updates on web, mobile and AI
              development.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 max-w-xl mx-auto">

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/70 outline-none focus:ring-2 focus:ring-cyan-400"
              />

              <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl hover:scale-105 transition">
                Subscribe
              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
