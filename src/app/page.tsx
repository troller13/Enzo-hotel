import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingBar from "@/components/BookingBar";
import Icon from "@/components/Icon";
import Strengths from "@/components/Strengths";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { facilities, rooms, testimonials, hotelInfo } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Navbar transparent />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Parallax BG */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1800&auto=format&fit=crop')",
            animation: "heroZoom 12s ease-out forwards",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="relative max-w-[1512px] mx-auto w-full px-6 md:px-[120px] pt-[90px] pb-32">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white text-[12px] font-poppins tracking-wider uppercase"
            style={{ animation: "fadeDown 0.8s ease 0.2s both" }}
          >
            <span className="size-2 rounded-full bg-gold animate-pulse" />
            Hotel de 3 stele · Chișinău, Moldova
          </div>

          <h1
            className="font-raleway font-bold text-white text-[42px] md:text-[68px] leading-[1.1] mb-6 max-w-[680px]"
            style={{ animation: "fadeUp 0.9s cubic-bezier(.22,1,.36,1) 0.35s both" }}
          >
            Un hotel pentru
            <span className="block font-dancing text-gold font-semibold text-[52px] md:text-[80px]">
              fiecare moment
            </span>
            plin de emoție
          </h1>

          

          <div
            className="flex flex-wrap items-center gap-5"
            style={{ animation: "fadeUp 0.7s ease 0.7s both" }}
          >
            <Link
              href="/contact"
              className="btn-gold btn-pulse font-poppins font-semibold text-[16px] rounded-[8px] h-[58px] px-10 flex items-center justify-center"
            >
              Rezervă acum
            </Link>
            <Link href="/explore" className="flex items-center gap-4 group">
              <span className="play-btn size-[58px] rounded-full bg-white/15 border border-white/40 backdrop-blur flex items-center justify-center group-hover:bg-white/25 transition-all">
                <Icon name="play" className="size-5 text-white" />
              </span>
              <span className="font-poppins text-white text-[15px] font-medium group-hover:text-gold transition-colors">
                Fă un tur virtual
              </span>
            </Link>
          </div>
        </div>

        {/* Wave bottom */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          fill="#F2EDE4"
        >
          <path d="M0,50 C480,90 960,10 1440,50 L1440,80 L0,80 Z" />
        </svg>
      </section>

      {/* Booking Bar */}
      <BookingBar />

      {/* ─── FACILITIES ─── */}
      <section className="max-w-[1512px] mx-auto px-6 md:px-[120px] pt-32 pb-24">
        <Reveal direction="up" className="text-center mb-16">
          <p className="font-dancing text-gold text-[28px] mb-2">Descoperă</p>
          <h2 className="font-raleway font-bold text-[32px] md:text-[44px] mb-3">
            Cele mai apreciate facilități
          </h2>
          <p className="font-poppins text-[15px] text-black/50">
            Hotel de 3 stele cu recepție deschisă non-stop, în Chișinău.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
          {facilities.map((facility, i) => (
            <Reveal key={facility.name} direction="up" delay={i * 0.07}>
              <div className="facility-card bg-[#EDE8DF] rounded-[10px] aspect-square flex flex-col items-center justify-center gap-4 px-4 text-center cursor-default">
                <Icon name={facility.icon} className="size-10 text-gold transition-colors" />
                <p className="font-poppins text-gold text-[14px] md:text-[17px] font-medium transition-colors">
                  {facility.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={0.1}>
          <h3 className="font-raleway font-bold text-[22px] md:text-[26px] text-center mb-8">
            Punctele forte ale proprietății
          </h3>
        </Reveal>
        <Reveal direction="up" delay={0.2}>
          <Strengths />
        </Reveal>
      </section>

      {/* ─── ROOMS ─── */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-[#1c1408]/85" />

        <div className="relative max-w-[1512px] mx-auto px-6 md:px-[120px]">
          <Reveal direction="up" className="text-center mb-16">
            <p className="font-dancing text-gold text-[28px] mb-2">Confort și eleganță</p>
            <h2 className="font-raleway font-bold text-white text-[34px] md:text-[52px] mb-5">
              Camere disponibile
            </h2>
            <div className="line-grow h-[4px] rounded-full bg-gold mx-auto mb-5" />
            <p className="font-raleway text-white/70 text-[14px]">
              Anulare gratuită · Fără plată în avans · Fără card de credit
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {rooms.map((room, i) => (
              <Reveal key={room.slug} direction="up" delay={i * 0.1}>
                <div className="card-lift bg-white rounded-[12px] overflow-hidden h-full flex flex-col">
                  <div className="img-zoom relative h-[200px]">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-${
                          [
                            "1611892440504-42a792e24d32",
                            "1590490360182-c33d57733427",
                            "1582719478250-c89cae4dc85b",
                            "1505693416388-ac5ce068fe85",
                          ][i]
                        }?q=80&w=700&auto=format&fit=crop')`,
                      }}
                    />
                    <span className="absolute top-3 right-3 bg-gold text-white text-[10px] font-bold rounded-[4px] px-2.5 py-1.5 backdrop-blur-sm">
                      {room.available} disponibile
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <p className="font-raleway font-bold text-[15px] mb-1">{room.name}</p>
                    <p className="font-poppins text-gold text-[19px] font-semibold mb-4">
                      {room.price}{" "}
                      <span className="text-[11px] text-black/40 font-normal">/ noapte</span>
                    </p>
                    <Link
                      href={`/camere/${room.slug}`}
                      className="mt-auto inline-flex items-center gap-2 text-gold font-poppins text-[13px] font-semibold hover:gap-3 transition-all"
                    >
                      Vezi detalii
                      <span className="text-[16px]">→</span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HIGHLIGHT STRIP ─── */}
      <section className="bg-gold py-16 overflow-hidden">
        <Reveal direction="up">
          <div className="max-w-[1272px] mx-auto px-6 flex flex-wrap items-center justify-between gap-8 text-white text-center">
            {[
              { value: "3★", label: "Stele" },
              { value: "4", label: "Tipuri de camere" },
              { value: "24/7", label: "Recepție" },
              { value: "14 km", label: "Față de aeroport" },
              { value: "4.2 km", label: "Față de centru" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-raleway font-bold text-[36px] md:text-[44px] leading-none">
                  {stat.value}
                </p>
                <p className="font-poppins text-[13px] text-white/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="max-w-[1512px] mx-auto px-6 md:px-[120px] py-28">
        <Reveal direction="up" className="text-center mb-16">
          <p className="font-dancing text-gold text-[28px] mb-2">Experiențe reale</p>
          <h2 className="font-raleway font-bold text-[34px] md:text-[50px]">
            Ce spun oaspeții
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} direction="up" delay={i * 0.12}>
              <div className="testimonial-card relative rounded-[12px] overflow-hidden h-[400px] bg-[#EDE8DF]">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-15"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=900&auto=format&fit=crop')",
                  }}
                />
                <div className="relative h-full flex flex-col p-7">
                  <div className="flex items-center justify-between mb-6">
                    <p className="font-poppins text-[12px] text-black/40">{t.date}</p>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Icon key={j} name="star" className="size-3 text-gold" />
                      ))}
                    </div>
                  </div>
                  <Icon name="quote" className="size-7 text-gold/40 mb-4" />
                  <p className="font-raleway text-[14px] text-black/65 leading-relaxed flex-1">
                    {t.text}
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="size-[40px] rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold font-poppins text-[14px]">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-poppins text-[13px] font-semibold">{t.name}</p>
                      <p className="font-raleway text-[11px] text-black/40">Oaspete verificat</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="relative py-24 overflow-hidden mx-6 md:mx-[60px] mb-20 rounded-[20px]">
        <div
          className="absolute inset-0 bg-cover bg-center rounded-[20px]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1400&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-[#1c1408]/75 rounded-[20px]" />
        <Reveal direction="scale" className="relative text-center text-white px-6">
          <h2 className="font-raleway font-bold text-[32px] md:text-[48px] mb-4">
            Gata să rezervi?
          </h2>
          <p className="font-raleway text-white/75 text-[15px] mb-8 max-w-[480px] mx-auto">
            Fără card de credit necesar. Anulare gratuită. Plata direct la recepție.
          </p>
          <Link
            href="/contact"
            className="btn-gold font-poppins font-semibold text-[16px] rounded-[8px] h-[58px] px-12 inline-flex items-center justify-center"
          >
            Rezervă acum
          </Link>
        </Reveal>
      </section>

      <Footer />

      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.12); }
          to   { transform: scale(1.02); }
        }
      `}</style>
    </>
  );
}
