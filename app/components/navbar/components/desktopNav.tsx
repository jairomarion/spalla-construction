// src/components/layout/DesktopNav.tsx
import Link from "next/link";
import { NAV_LINKS } from "@/app/components/navbar/data/nav";

export function DesktopNav() {
  return (
    <div className="hidden md:flex items-center gap-6 lg:gap-8">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-slate-700 font-medium text-sm lg:text-[15px] 
          hover:text-spalla-orange 
          transition-colors duration-200 
          px-2 py-1"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}  