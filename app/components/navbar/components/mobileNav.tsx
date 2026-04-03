// src/components/layout/MobileNav.tsx
import Link from "next/link";
import { NAV_LINKS } from "@/app/components/navbar/data/nav";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <div
      className={`md:hidden absolute top-full left-0 w-full 
      bg-white/95 backdrop-blur-md 
      border-b border-slate-200 
      shadow-md transition-all duration-300 origin-top ${
        isOpen
          ? "opacity-100 scale-y-100"
          : "opacity-0 scale-y-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col gap-3 px-5 py-5">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="text-slate-700 font-medium text-[15px] 
            hover:text-spalla-orange 
            transition-colors py-2 border-b border-slate-100 last:border-none"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}