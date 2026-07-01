import Link from "next/link";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="bg-[#1c1408] text-white">
      <div className="max-w-[1512px] mx-auto px-6 md:px-[120px] pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <p className="font-dancing text-[32px] font-bold mb-4 text-white">
              Ezio Hotel
            </p>
            <p className="text-[13px] leading-loose text-white/55 max-w-[280px] mb-6">
              Hotel de 3 stele din Chișinău. Parcare gratuită, recepție
              non-stop, terasă și bar — totul pentru un sejur memorabil.
            </p>
            <div className="flex gap-3">
              {["facebook", "twitter", "instagram", "linkedin"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="size-[38px] rounded-full bg-white/8 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all"
                >
                  <Icon name={s} className="size-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-poppins font-semibold text-[14px] mb-5 text-white/90 tracking-wide uppercase text-[11px]">
              Linkuri rapide
            </p>
            <ul className="space-y-3">
              {[
                { href: "/contact", label: "Rezervare camere" },
                { href: "/camere",  label: "Camere" },
                { href: "/contact", label: "Contact" },
                { href: "/explore", label: "Explorează" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="footer-link text-[13px] text-white/55 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-poppins font-semibold text-[11px] mb-5 text-white/90 tracking-wide uppercase">
              Companie
            </p>
            <ul className="space-y-3">
              {[
                { href: "/despre-noi", label: "Despre noi" },
                { href: "#",          label: "Politica de confidențialitate" },
                { href: "#",          label: "Politica de rambursare" },
                { href: "/contact",   label: "Întrebări frecvente" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="footer-link text-[13px] text-white/55 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-white/30">
          <p>Ezio Hotel © {new Date().getFullYear()} · Str. Haiducilor 44, Chișinău</p>
          <p>Realizat cu Next.js</p>
        </div>
      </div>
    </footer>
  );
}
