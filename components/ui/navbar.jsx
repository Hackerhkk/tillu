"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Home,
  User,
  Phone,
  Rocket,
  Globe,
  Code2,
  Smartphone,
  Search,
  Megaphone,
  Database,
  Layers,
  Wrench,
  Factory,
} from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // ✅ ONLY ADD THIS (NO STRUCTURE CHANGE)
  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[999] px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur-xl border rounded-full px-5 py-3 shadow-xl">

        {/* LOGO */}
        <Link href="/" className="text-xl font-bold">
          Tillu<span className="text-cyan-600">Digital</span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">

          <Link href="/" className="flex items-center gap-1 hover:text-cyan-600">
            <Home size={16} /> Home
          </Link>

          <Link href="/about" className="flex items-center gap-1 hover:text-cyan-600">
            <User size={16} /> About
          </Link>
          <Link href="/trending" className="flex items-center gap-1 hover:text-cyan-600">
            <Rocket size={16} /> Trending
          </Link>
          <Link href="/industries" className="flex items-center gap-1 hover:text-cyan-600">
            <Factory size={16} /> Industries
          </Link>

          {/* DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 hover:text-cyan-600"
            >
              <Layers size={16} /> Services
              <ChevronDown size={16} />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-3 w-[450px] bg-white text-black rounded-2xl shadow-xl overflow-hidden">

                <div className="grid grid-cols-2 gap-0.5 p-2">

                  

                  <Link onClick={closeAllMenus} href="/services/webdev" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-gray-100">
          <Globe size={16} /> Web Development
        </Link>

        <Link onClick={closeAllMenus} href="/services/nodejs" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-gray-100">
          <Code2 size={16} /> Node.js
        </Link>

        <Link onClick={closeAllMenus} href="/services/laravel" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-gray-100">
          <Layers size={16} /> Laravel
        </Link>

        <Link onClick={closeAllMenus} href="/services/python" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-gray-100">
          <Code2 size={16} /> Python
        </Link>

        <Link onClick={closeAllMenus} href="/services/app" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-gray-100">
          <Smartphone size={16} /> App Development
        </Link>

        <Link onClick={closeAllMenus} href="/services/digital-marketing" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-gray-100">
          <Megaphone size={16} /> Digital Marketing
        </Link>

        <Link onClick={closeAllMenus} href="/services/web-maintence" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-gray-100">
          <Wrench size={16} /> web-maintence
        </Link>

        <Link onClick={closeAllMenus} href="/services/wordpress" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-gray-100">
          <Database size={16} /> WordPress
        </Link>
        <Link onClick={closeAllMenus} href="/services/webdev" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-gray-100">
          <Globe size={16} /> Web Development
        </Link>

        <Link onClick={closeAllMenus} href="/services/nodejs" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-gray-100">
          <Code2 size={16} /> Node.js
        </Link>

        <Link onClick={closeAllMenus} href="/services/laravel" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-gray-100">
          <Layers size={16} /> Laravel
        </Link>

        <Link onClick={closeAllMenus} href="/services/python" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-gray-100">
          <Code2 size={16} /> Python
        </Link>

        <Link onClick={closeAllMenus} href="/services/app" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-gray-100">
          <Smartphone size={16} /> App Development
        </Link>

        <Link onClick={closeAllMenus} href="/services/digital-marketing" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-gray-100">
          <Megaphone size={16} /> Digital Marketing
        </Link>

        <Link onClick={closeAllMenus} href="/services/seo" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-gray-100">
          <Search size={16} /> SEO Services
        </Link>

        <Link onClick={closeAllMenus} href="/services/wordpress" className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-gray-100">
          <Database size={16} /> WordPress
        </Link>

                </div>
              </div>
            )}
          </div>

          <Link href="/contact" className="flex items-center gap-1 hover:text-cyan-600">
            <Phone size={16} /> Contact
          </Link>

        </nav>

        {/* CTA */}
        <Link
          href="/login"
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-600 text-white"
        >
          <Rocket size={16} /> Get Started
        </Link>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden p-2 rounded-full border bg-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden mt-3 bg-white/90 backdrop-blur-xl border rounded-2xl shadow-xl p-4 space-y-3">

          <Link href="/" onClick={closeAllMenus} className="flex items-center gap-2">
            <Home size={16} /> Home
          </Link>

          <Link href="/about" onClick={closeAllMenus} className="flex items-center gap-2">
            <User size={16} /> About
          </Link>

          <Link href="/trending" onClick={closeAllMenus} className="flex items-center gap-2">
            <Rocket size={16} /> Trending
          </Link>

          {/* MOBILE DROPDOWN */}
          <div>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 font-medium"
            >
              <Layers size={16} /> Services
              <ChevronDown size={16} />
            </button>

            {isDropdownOpen && (
              <div className="mt-2 ml-3 gap-2 text-sm text-gray-600 grid grid-cols-1 gap-0.5 p-2">

                <Link onClick={closeAllMenus} href="/services/webdev">
                  <Globe size={14} /> Web Development
                </Link>

                <Link onClick={closeAllMenus} href="/services/nodejs">
                  <Code2 size={14} /> Node.js
                </Link>

                <Link onClick={closeAllMenus} href="/services/laravel">
                  <Layers size={14} /> Laravel
                </Link>

                <Link onClick={closeAllMenus} href="/services/python">
                  <Code2 size={14} /> Python
                </Link>

                <Link onClick={closeAllMenus} href="/services/app">
                  <Smartphone size={14} /> App Development
                </Link>

                <Link onClick={closeAllMenus} href="/services/seo">
                  <Search size={14} /> SEO Services
                </Link>

              </div>
            )}
          </div>

          <Link href="/contact" onClick={closeAllMenus} className="flex items-center gap-2">
            <Phone size={16} /> Contact
          </Link>
          

          <Link
            href="/login"
            onClick={closeAllMenus}
            className="flex items-center justify-center gap-2 bg-cyan-600 text-white py-2 rounded-full"
          >
            <Rocket size={16} /> Get Started
          </Link>

        </div>
      )}

    </header>
  );
}






