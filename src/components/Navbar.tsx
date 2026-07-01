"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";

export default function Navbar({ transparent = false }: { transparent?: boolean }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const glassClass = scrolled
    ? "bg-[#1c1408]/80 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,.25)]"
    : transparent
    ? "bg-transparent"
    : "bg-[#1c1408]/60 backdrop-blur-sm";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 navbar-enter transition-all duration-500 ${glassClass}`}
    >
      <div className="max-w-[1512px] mx-auto flex items-center justify-between px-6 md:px-[120px] h-[90px]">
        {/* Logo */}
        <Link
          href="/"
          className="font-dancing text-white text-[28px] font-semibold tracking-wide hover:opacity-80 transition-opacity"
        >
          Ezio Hotel
        </Link>

        {/* Nav links */}
        <nav className="hidden lg:flex items-center gap-10 font-poppins text-[14px]">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${active ? "active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center justify-center btn-gold font-poppins font-semibold text-[14px] rounded-[6px] px-7 h-[48px]"
        >
          Rezervă acum
        </Link>
      </div>
    </header>
  );
}
