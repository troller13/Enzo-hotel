import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { rooms } from "@/lib/data";

const images = [
  "1611892440504-42a792e24d32",
  "1590490360182-c33d57733427",
  "1582719478250-c89cae4dc85b",
  "1505693416388-ac5ce068fe85",
];

export default function RoomsPage() {
  return (
    <>
      <Navbar transparent />
      <PageHero
        title="Camere și apartamente"
        subtitle="Patru tipuri de camere, toate cu anulare gratuită, fără plată în avans și fără card de credit necesar la rezervare."
      />

      <section className="max-w-[1272px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((room, i) => (
            <Reveal key={room.slug} direction="up" delay={i * 0.1}>
              <div className="card-lift rounded-[14px] overflow-hidden bg-white flex flex-col sm:flex-row h-full border border-black/5">
                <div className="img-zoom relative h-[220px] sm:h-auto sm:w-[240px] shrink-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-${images[i]}?q=80&w=700&auto=format&fit=crop')`,
                    }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-raleway font-bold text-[18px]">{room.name}</h3>
                    <span className="shrink-0 text-[10px] bg-gold/10 text-gold font-semibold rounded-full px-2.5 py-1">
                      {room.available} disp.
                    </span>
                  </div>
                  <p className="font-raleway text-[13px] text-black/50 mb-3">{room.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {room.features.slice(0, 4).map((f) => (
                      <span key={f} className="text-[11px] bg-[#F2EDE4] rounded-full px-3 py-1 text-black/55">
                        {f}
                      </span>
                    ))}
                  </div>
                  <p className="font-raleway text-gold text-[22px] font-semibold mb-4">
                    {room.price}
                    <span className="text-[12px] text-black/40 font-normal"> / noapte</span>
                  </p>
                  <Link
                    href={`/camere/${room.slug}`}
                    className="mt-auto btn-gold font-poppins text-[14px] font-semibold rounded-[6px] h-[44px] flex items-center justify-center"
                  >
                    Vezi camera
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
