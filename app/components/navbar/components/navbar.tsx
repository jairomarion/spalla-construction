"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { useClickOutside } from "@/app/components/navbar/hooks/useNav";
import { HamburgerButton } from "@/app/components/navbar/components/hambuger";
import { DesktopNav } from "@/app/components/navbar/components/desktopNav";
import { MobileNav } from "@/app/components/navbar/components/mobileNav";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useClickOutside(navRef, () => setIsOpen(false), isOpen);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 
      bg-white/80 backdrop-blur-lg 
      border-b border-slate-200/60 
      shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 md:h-16">
        
        {/* Logo (Height-driven) */}
       <Link href="#home" className="flex items-center h-full">
  <img
  src="/Spalla.png"
  alt="Spalla Logo"
  className="h-32 md:h-32 w-auto object-contain"
/>
</Link>

        {/* Desktop Nav */}
        <DesktopNav />

        {/* Mobile Button */}
        <HamburgerButton
          isOpen={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>

      {/* Mobile Menu */}
      <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
}