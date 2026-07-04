"use client";

import Link from "next/link";
import {
  Code2,
  Smartphone,
  Bot,
  Globe,
  ShoppingCart,
  Cloud,
  Server,
  Database,
  Shield,
  Cpu,
  Building2,
  GraduationCap,
  HeartPulse,
  TrendingUp,
} from "lucide-react";

export default function HomePage() {
  const services = [
    { icon: Code2, title: "Web Development", desc: "Modern SEO-friendly websites" },
    { icon: Smartphone, title: "Mobile Apps", desc: "iOS & Android scalable apps" },
    { icon: Bot, title: "AI Solutions", desc: "AI automation & ML systems" },
    { icon: Globe, title: "SaaS Platforms", desc: "Multi-tenant SaaS products" },
    { icon: ShoppingCart, title: "E-Commerce", desc: "Online stores & marketplaces" },
    { icon: Cloud, title: "Cloud Solutions", desc: "Scalable cloud architecture" },
  ];

  const cloudServices = [
    { icon: Cloud, title: "Cloud Infrastructure", desc: "AWS / Azure / GCP scalable systems" },
    { icon: Server, title: "Web Hosting", desc: "High-speed secure hosting" },
    { icon: Cpu, title: "DevOps & CI/CD", desc: "Automated deployment pipelines" },
    { icon: Shield, title: "Server Security", desc: "Advanced protection & monitoring" },
    { icon: Database, title: "Database Scaling", desc: "SQL & NoSQL optimization" },
    { icon: TrendingUp, title: "24/7 Monitoring", desc: "Real-time performance tracking" },
  ];

  const tech = [
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Kubernetes",
    "TypeScript",
    "Tailwind CSS",
    "Firebase",
    "Prisma",
  ];

  const industries = [
    { icon: TrendingUp, title: "FinTech" },
    { icon: HeartPulse, title: "Healthcare" },
    { icon: ShoppingCart, title: "E-Commerce" },
    { icon: GraduationCap, title: "Education" },
    { icon: Building2, title: "Real Estate" },
    { icon: Globe, title: "SaaS Startups" },
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
      <section className="px-4 sm:px-6 py-20 md:py-32 text-center max-w-6xl mx-auto">

        <div className="inline-flex px-5 py-2 rounded-full bg-white/70 backdrop-blur-2xl border border-white/70 shadow-lg">
          Tillu Digital Solutions
        </div>

        <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Build Scalable
          <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 bg-clip-text text-transparent">
            Digital Products
          </span>
        </h1>

        <p className="mt-6 text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
          We build cloud-powered web apps, mobile apps, SaaS platforms and AI systems using modern technologies like AWS, DevOps and scalable architectures.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
         

          <Link
            href="/contact"
            className="px-8 py-4 rounded-2xl bg-cyan-500 text-white shadow-xl hover:scale-105 transition inline-block">
            Get Started
          </Link>

          <Link
            href="/get-start"
            className="px-8 py-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white shadow-lg inline-block text-center">
            View Services
          </Link>
        </div>
      </section>


      

      {/* SERVICES */}
      <section className="px-4 sm:px-6 py-20 md:py-24 max-w-6xl mx-auto">

        <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((s, i) => {
            const Icon = s.icon;

            return (
              <div key={i} className="p-6 rounded-2xl bg-white/60 backdrop-blur-2xl border border-white/70 shadow-xl hover:-translate-y-2 transition">
                <Icon className="text-cyan-600" />
                <h3 className="mt-4 font-semibold text-xl">{s.title}</h3>
                <p className="text-slate-600 mt-2">{s.desc}</p>
              </div>
            );
          })}

        </div>
      </section>


      <section className="px-4 sm:px-6 py-20 md:py-24">

  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-3xl md:text-5xl font-bold">
      We Build Digital Products That Scale
    </h2>

    <p className="mt-6 text-slate-600 max-w-3xl mx-auto text-base md:text-lg">
      We are a product-focused software development team specializing in building
      high-performance web applications, mobile apps, SaaS platforms, and AI-powered systems.
      Our goal is to help startups and businesses turn ideas into scalable digital products.
    </p>

  </div>

</section>

      {/* CLOUD & HOSTING */}
      <section className="px-4 sm:px-6 py-20 md:py-24 max-w-6xl mx-auto">

        <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">
          Cloud & Hosting Solutions
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {cloudServices.map((c, i) => {
            const Icon = c.icon;

            return (
              <div key={i} className="p-6 rounded-2xl bg-white/60 backdrop-blur-2xl border border-white/70 shadow-xl">
                <Icon className="text-cyan-600" />
                <h3 className="mt-3 font-semibold text-lg">{c.title}</h3>
                <p className="text-slate-600 mt-2">{c.desc}</p>
              </div>
            );
          })}

        </div>
      </section>


      

      {/* TECHNOLOGIES */}
      <section className="px-4 sm:px-6 py-20 md:py-24 bg-white/40">

        <h2 className="text-center text-3xl md:text-5xl font-bold mb-10">
          Technologies We Use
        </h2>

        <div className="flex flex-wrap justify-center gap-3">

          {tech.map((t, i) => (
            <span key={i} className="px-4 py-2 rounded-full bg-white/70 border border-white shadow text-slate-700">
              {t}
            </span>
          ))}

        </div>
      </section>


      <section className="px-4 sm:px-6 py-20 md:py-24">

  <div className="max-w-6xl mx-auto">

    <h2 className="text-center text-3xl md:text-5xl font-bold">
      Our Development Process
    </h2>

    <div className="mt-14 grid md:grid-cols-4 gap-6">

      {[
        {
          title: "Discovery",
          desc: "We understand your idea, business goals, and requirements.",
        },
        {
          title: "Design",
          desc: "We create modern UI/UX designs focused on user experience.",
        },
        {
          title: "Development",
          desc: "We build scalable and secure applications using modern tech.",
        },
        {
          title: "Deployment",
          desc: "We deploy, optimize, and maintain your product.",
        },
      ].map((item, i) => (
        <div key={i} className="p-6 rounded-2xl bg-white/60 backdrop-blur-2xl border border-white/70 shadow-xl">
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="text-slate-600 mt-2">{item.desc}</p>
        </div>
      ))}

    </div>

  </div>

</section>


      <section className="px-4 sm:px-6 py-16 bg-white/40">

  <div className="max-w-6xl mx-auto text-center">

    <p className="text-slate-500 mb-8">
      Trusted by startups and growing businesses worldwide
    </p>

    <div className="flex flex-wrap justify-center gap-8 opacity-70 text-slate-600 font-semibold">
      <span>StartupX</span>
      <span>TechNova</span>
      <span>Cloudify</span>
      <span>DevSphere</span>
      <span>NextScale</span>
      <span>CodeForge</span>
    </div>

  </div>

</section>


<section className="px-4 sm:px-6 py-20 md:py-24">

  <div className="max-w-6xl mx-auto">

    <h2 className="text-center text-3xl md:text-5xl font-bold">
      What Our Clients Say
    </h2>

    <div className="mt-14 grid md:grid-cols-3 gap-6">

      {[
        {
          name: "Rahul Sharma",
          role: "Startup Founder",
          text: "They delivered our SaaS platform faster than expected with excellent quality."
        },
        {
          name: "Sarah Khan",
          role: "Product Manager",
          text: "Highly professional team with strong technical expertise."
        },
        {
          name: "John Doe",
          role: "CEO",
          text: "Best development experience we've had. Highly recommended."
        },
      ].map((t, i) => (
        <div key={i} className="p-6 rounded-2xl bg-white/60 border border-white/70 shadow-xl">
          <p className="text-slate-600">"{t.text}"</p>
          <h4 className="mt-4 font-semibold">{t.name}</h4>
          <p className="text-sm text-slate-500">{t.role}</p>
        </div>
      ))}

    </div>

  </div>

</section>





      {/* INDUSTRIES */}
      <section className="px-4 sm:px-6 py-20 md:py-24 max-w-6xl mx-auto">

        <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">
          Industries We Serve
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {industries.map((ind, i) => {
            const Icon = ind.icon;

            return (
              <div key={i} className="p-6 rounded-2xl bg-white/60 backdrop-blur-2xl border border-white/70 shadow-xl">
                <Icon className="text-cyan-600" />
                <h3 className="mt-3 font-semibold text-lg">{ind.title}</h3>
                <p className="text-slate-600 mt-2">
                  We build scalable systems for this industry.
                </p>
              </div>
            );
          })}

        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 py-20 md:py-24">

        <div className="max-w-5xl mx-auto text-center p-10 rounded-3xl bg-gradient-to-r from-cyan-100/40 to-blue-100/40 border border-white/70 shadow-xl">

          <h2 className="text-3xl md:text-5xl font-bold">
            Let’s Build Something Powerful
          </h2>

          <p className="mt-4 text-slate-600">
            Turn your idea into a scalable digital product.
          </p>

          <Link href="/contact">
            <button className="mt-8 px-10 py-4 rounded-2xl bg-cyan-500 text-white hover:scale-105 transition">
              Contact Us
            </button>
          </Link>

        </div>

      </section>

    </main>
  );
}