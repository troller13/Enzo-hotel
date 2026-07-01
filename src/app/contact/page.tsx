import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import Faq from "@/components/Faq";
import NearbyPlaces from "@/components/NearbyPlaces";
import Reveal from "@/components/Reveal";
import { hotelInfo, policies } from "@/lib/data";

export default function ContactPage() {
  return (
    <>
      <Navbar transparent />
      <PageHero
        title="Contactează-ne"
        subtitle="Suntem aici să te ajutăm cu orice întrebare legată de rezervări, camere sau evenimente la Hotel EZIO."
      />

      {/* Location banner */}
      <section className="relative h-[380px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <Reveal direction="scale" className="relative h-full max-w-[1272px] mx-auto px-6 flex flex-col items-center justify-center text-center text-white">
          <div className="size-[64px] rounded-full bg-gold/30 backdrop-blur flex items-center justify-center mb-5">
            <Icon name="location" className="size-7" />
          </div>
          <h3 className="font-raleway font-bold text-[22px] md:text-[28px] mb-2">{hotelInfo.address}</h3>
          <p className="text-white/70 font-poppins text-[14px] mb-1">{hotelInfo.phone}</p>
          <p className="text-white/70 font-poppins text-[14px]">{hotelInfo.email}</p>
        </Reveal>
      </section>

      {/* Policies */}
      <section className="max-w-[1272px] mx-auto px-6 py-20">
        <Reveal direction="up" className="text-center mb-12">
          <p className="font-dancing text-gold text-[26px] mb-1">Înainte de rezervare</p>
          <h2 className="font-raleway font-bold text-[28px] md:text-[36px]">
            Informații importante
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
          {policies.map((p, i) => (
            <Reveal key={p.label} direction="up" delay={i * 0.06}>
              <div className="bg-[#EDE8DF] rounded-[12px] p-5 text-center h-full">
                <p className="font-poppins text-[11px] text-black/40 uppercase tracking-wider mb-2">{p.label}</p>
                <p className="font-raleway font-semibold text-[14px]">{p.value}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" className="text-center mb-10">
          <p className="font-dancing text-gold text-[26px] mb-1">Ai întrebări?</p>
          <h2 className="font-raleway font-bold text-[28px] md:text-[36px]">
            Întrebări frecvente
          </h2>
        </Reveal>
        <Faq />
      </section>

      {/* Nearby */}
      <section className="bg-[#EDE8DF] py-20">
        <div className="max-w-[1272px] mx-auto px-6">
          <Reveal direction="up" className="text-center mb-10">
            <h2 className="font-raleway font-bold text-[28px] md:text-[36px] mb-2">
              Ce se află în apropiere
            </h2>
            <p className="font-raleway text-[14px] text-black/50">
              Distanțe estimative față de Hotel EZIO
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <NearbyPlaces />
          </Reveal>
        </div>
      </section>

      {/* Contact form */}
      <section className="max-w-[1272px] mx-auto px-6 py-20">
        <Reveal direction="up" className="text-center mb-12">
          <p className="font-dancing text-gold text-[26px] mb-1">Scrie-ne</p>
          <h2 className="font-raleway font-bold text-[28px] md:text-[36px]">
            Trimite-ne un mesaj
          </h2>
        </Reveal>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[860px] mx-auto">
          <Reveal direction="up" delay={0.05}>
            <div>
              <label className="font-poppins text-[14px] font-medium block mb-2">Nume complet</label>
              <input
                type="text"
                placeholder="ex. Ion Popescu"
                className="w-full h-[56px] rounded-[8px] bg-[#EDE8DF] px-5 text-[14px] outline-none focus:ring-2 focus:ring-gold/30 transition-all"
              />
            </div>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <div>
              <label className="font-poppins text-[14px] font-medium block mb-2">Email</label>
              <input
                type="email"
                placeholder="ionpopescu@gmail.com"
                className="w-full h-[56px] rounded-[8px] bg-[#EDE8DF] px-5 text-[14px] outline-none focus:ring-2 focus:ring-gold/30 transition-all"
              />
            </div>
          </Reveal>
          <Reveal direction="up" delay={0.15} className="md:col-span-2">
            <div>
              <label className="font-poppins text-[14px] font-medium block mb-2">Mesaj</label>
              <textarea
                placeholder="Cum te putem ajuta?"
                rows={6}
                className="w-full rounded-[8px] bg-[#EDE8DF] px-5 py-4 text-[14px] outline-none focus:ring-2 focus:ring-gold/30 resize-none transition-all"
              />
            </div>
          </Reveal>
          <Reveal direction="up" delay={0.2} className="md:col-span-2">
            <button
              type="submit"
              className="btn-gold font-poppins font-semibold text-[15px] rounded-[8px] h-[56px] px-12"
            >
              Trimite mesajul
            </button>
          </Reveal>
        </form>
      </section>

      <Footer />
    </>
  );
}
