import Link from "next/link";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] text-white border-t border-white/10 overflow-hidden">

      {/* soft glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#06b6d4_0%,transparent_60%)] opacity-20" />

      <div className="relative max-w-6xl mx-auto px-6 py-16">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-14">

          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              T<span className="text-cyan-400">illu</span>
            </h2>

            <p className="text-zinc-400 mt-4 text-sm leading-relaxed max-w-sm">
              We build scalable digital products — web apps, mobile apps, SaaS platforms,
              and AI-powered solutions for modern businesses.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-6 text-lg text-zinc-400">
              {[FaTwitter, FaGithub, FaLinkedin, FaInstagram].map((Icon, i) => (
                <Icon
                  key={i}
                  className="hover:text-cyan-400 cursor-pointer transition-transform hover:scale-110"
                />
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-5">
              Services
            </h3>

            <div className="grid grid-cols-2 gap-y-3 text-sm text-zinc-400">

              {[
                ["Web Development", "/services/webdev"],
                ["Mobile Apps", "/services/app"],
                ["Full Stack", "/services/fullstack"],
                ["Node.js", "/services/nodejs"],
                ["Python", "/services/python"],
                ["SEO", "/services/seo"],
                ["Marketing", "/services/digital-marketing"],
                ["Laravel", "/services/laravel"],
                ["PHP", "/services/php"],
              ].map(([name, href], i) => (
                <Link
                  key={i}
                  href={href}
                  className="hover:text-cyan-400 transition-colors duration-200"
                >
                  {name}
                </Link>
              ))}

            </div>
          </div>

          {/* CTA + COMPANY */}
          <div className="space-y-8">

            {/* CTA CARD */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <h3 className="font-semibold">Start Your Project</h3>

              <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                Get a free consultation and roadmap for your product idea.
              </p>

              <Link
                href="/contact"
                className="inline-block mt-5 px-5 py-2 rounded-xl bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition"
              >
                Contact Us
              </Link>
            </div>

            {/* COMPANY */}
            <div>
              <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
                Company
              </h3>

              <div className="space-y-2 text-sm text-zinc-400">

                {[
                  ["About", "/about"],
                  ["Blog", "/blog"],
                  ["Industries", "/industries"],
                ].map(([name, href], i) => (
                  <Link
                    key={i}
                    href={href}
                    className="block hover:text-cyan-400 transition"
                  >
                    {name}
                  </Link>
                ))}

              </div>
            </div>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-zinc-500 text-center md:text-left">
            © {new Date().getFullYear()} Tillu. All rights reserved.
          </p>


        </div>

      </div>
    </footer>
  );
}