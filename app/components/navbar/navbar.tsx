"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-20">
        <Link href="#home" className="flex items-center gap-2 group">
          <span className="relative w-10 h-10 flex items-center">
            <Image
              src="/spalla-logo.png"
              alt="Spalla Logo"
              width={40}
              height={40}
              className="object-contain drop-shadow-md transition-transform group-hover:scale-105"
              priority
            />
          </span>
          <span className="font-extrabold text-2xl text-spalla-green tracking-tight drop-shadow-sm group-hover:text-spalla-orange transition-colors">
            Spalla
          </span>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-700 font-semibold hover:text-spalla-orange transition-colors px-2 py-1 rounded"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded hover:bg-slate-100"
          aria-label="Open navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-6 h-0.5 bg-spalla-green"></span>
          <span className="block w-6 h-0.5 bg-spalla-green"></span>
          <span className="block w-6 h-0.5 bg-spalla-green"></span>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg animate-fade-in-down">
          <div className="flex flex-col gap-4 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-700 font-semibold hover:text-spalla-orange transition-colors px-2 py-1 rounded"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
