"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#clients", label: "Clients" },
  { href: "#social-impact", label: "Social Impact" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16 md:h-20">
        
        
        <Link href="#home" className="flex items-center group h-full">
          
          <span className="relative w-36 sm:w-44 md:w-56 h-full flex items-center">
            <Image
              src="/Spalla.png"
              alt="Spalla Logo"
              fill
              sizes="(max-width: 768px) 144px, 224px"
              className="object-contain object-left drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-700 font-medium text-sm lg:text-base hover:text-spalla-orange transition-colors px-2 py-1 rounded"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded hover:bg-slate-100 transition-colors z-50 focus:outline-none"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block w-5 h-0.5 bg-spalla-green transition-transform duration-300 ease-in-out ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-spalla-green transition-opacity duration-300 ease-in-out ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-spalla-green transition-transform duration-300 ease-in-out ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg transition-all duration-300 ease-in-out origin-top ${
          open ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 py-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-700 font-semibold text-base hover:text-spalla-orange transition-colors px-2 py-2 rounded border-b border-slate-50 last:border-none"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}