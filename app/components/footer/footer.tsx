import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-spalla-dark text-white py-10 border-t border-slate-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="relative w-10 h-10 flex items-center aspect-square">
            <Image
              src="/Spalla.png"
              alt="Spalla Logo"
              fill
              sizes="40px"
              className="object-contain drop-shadow-md"
              priority
            />
          </span>
          <span className="font-extrabold text-2xl text-spalla-green tracking-tight drop-shadow-sm">
            Spalla
          </span>
          <span className="text-slate-400 text-sm ml-2">
            &copy; {new Date().getFullYear()} All rights reserved.
          </span>
        </div>
        <nav className="flex gap-6 text-slate-300 text-sm">
           <a
            href="#home"
            className="hover:text-spalla-orange transition-colors"
          >Home</a>
          <a
            href="#about"
            className="hover:text-spalla-orange transition-colors"
          >
            About
          </a>
          <a
            href="#services"
            className="hover:text-spalla-orange transition-colors"
          >
            Services
          </a>
          <a
            href="#projects"
            className="hover:text-spalla-orange transition-colors"
          >
            Projects
          </a>
          <a
            href="#clients"
            className="hover:text-spalla-orange transition-colors"
          >
            Clients
          </a>
           <a
            href="#social-impact"
            className="hover:text-spalla-orange transition-colors"
          >
            Social Impact
          </a>
          <a
            href="#contact"
            className="hover:text-spalla-orange transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
