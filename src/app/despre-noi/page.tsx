import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { hotelInfo } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <Navbar transparent />

      <PageHero
        title="Despre noi"
        subtitle={`Hotel EZIO — ${hotelInfo.address}. Hotel de 3 stele cu recepție deschisă non-stop și parcare privată gratuită.`}
      />

      <section className="max-w-[1272px] mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-[480px_1fr] gap-16 items-start">
        <Reveal direction="right">
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-full h-full rounded-[14px] bg-[#EDE8DF] hidden md:block" />
            <div
              className="img-zoom relative rounded-[14px] h-[520px] overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=900&auto=format&fit=crop')",
                }}
              />
            </div>
            <div className="mt-5 flex items-center gap-3">
              <div className="size-[42px] rounded-full bg-gold flex items-center justify-center text-white font-bold font-poppins">
                M
              </div>
              <div>
                <p className="font-raleway font-bold text-[18px]">Maria Ciobanu</p>
                <p className="font-poppins text-[12px] text-black/45">Manager Hotel EZIO</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1}>
          <div>
            <p className="font-dancing text-gold text-[28px] mb-2">Povestea noastră</p>
            <h2 className="font-raleway font-bold text-[28px] md:text-[36px] mb-6">
              Ospitalitate autentică în inima Chișinăului
            </h2>
            <p className="font-raleway text-[15px] leading-relaxed text-black/60 mb-5">
              Hotel EZIO se află în Chișinău, la 5,9 km de Muzeul Național de
              Arheologie și Istorie a Moldovei, și pune la dispoziția oaspeților
              o terasă, un bar și parcare privată gratuită.
            </p>
            <p className="font-raleway text-[15px] leading-relaxed text-black/60 mb-5">
              Hotelul se află la 6,1 km de Universitatea de Stat din Moldova și
              la 14 km de Aeroportul Internațional Chișinău, pentru care oferim
              și serviciu de transfer contra unui cost suplimentar.
            </p>
            <p className="font-raleway text-[15px] leading-relaxed text-black/60">
              Echipa noastră este pregătită să primească cereri speciale înainte
              de sosire. Lucrăm constant pentru ca fiecare sejur la Hotel EZIO
              să fie unul memorabil.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {[
                { label: "Check-in", value: "12:30" },
                { label: "Check-out", value: "11:30" },
                { label: "De la aeroport", value: "14 km" },
                { label: "De la centru", value: "4,2 km" },
              ].map((s) => (
                <div key={s.label} className="bg-[#EDE8DF] rounded-[10px] p-5">
                  <p className="font-poppins text-[11px] text-black/40 uppercase tracking-wider mb-1">{s.label}</p>
                  <p className="font-raleway font-bold text-[22px] text-gold">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
