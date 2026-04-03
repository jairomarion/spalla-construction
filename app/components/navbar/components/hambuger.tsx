// src/components/ui/HamburgerButton.tsx
"use client";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function HamburgerButton({ isOpen, onClick }: HamburgerButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      className="md:hidden flex items-center justify-center 
      w-10 h-10 rounded-md 
      hover:bg-slate-100 transition"
    >
      <div className="flex flex-col gap-[5px]">
        <span
          className={`block w-5 h-[2px] bg-spalla-green transition ${
            isOpen ? "rotate-45 translate-y-[7px]" : ""
          }`}
        />
        <span
          className={`block w-5 h-[2px] bg-spalla-green transition ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-5 h-[2px] bg-spalla-green transition ${
            isOpen ? "-rotate-45 -translate-y-[7px]" : ""
          }`}
        />
      </div>
    </button>
  );
}