import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { notFound } from "next/navigation";
import { rooms } from "@/lib/data";

const images = [
  "1611892440504-42a792e24d32",
  "1590490360182-c33d57733427",
  "1582719478250-c89cae4dc85b",
  "1505693416388-ac5ce068fe85",
];

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = rooms.findIndex((r) => r.slug === slug);
  const room = rooms[index];
  if (!room) notFound();

  return (
    <>
      <Navbar transparent />

      <section className="relative h-[520px] md:h-[620px] mt-[90px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-${images[index]}?q=80&w=1600&auto=format&fit=crop')`,
            animation: "scaleDownRoom 8s ease-out forwards",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
        <div className="relative h-full max-w-[1272px] mx-auto px-6 flex flex-col justify-end pb-16">
          <Link
            href="/camere"
            className="text-white/60 text-[13px] mb-4 hover:text-white transition-colors inline-flex items-center gap-1.5"
            style={{ animation: "fadeDown 0.6s ease 0.1s both" }}
          >
            ← Înapoi la camere
          </Link>
          <h1
            className="font-raleway font-bold text-white text-[34px] md:text-[52px] leading-tight"
            style={{ animation: "fadeUp 0.7s ease 0.25s both" }}
          >
            {room.name}
          </h1>
        </div>
        <style>{`
          @keyframes scaleDownRoom {
            from { transform: scale(1.1); }
            to   { transform: scale(1.02); }
          }
        `}</style>
      </section>

      <section className="max-w-[1272px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-[1fr_340px] gap-16">
        <Reveal direction="right">
          <div>
            <h2 className="font-poppins text-[22px] text-gold mb-4">Despre cameră</h2>
            <p className="font-raleway text-[15px] leading-relaxed text-black/60 mb-8">
              {room.longDescription}
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {room.size && (
                <span className="bg-[#EDE8DF] rounded-full px-4 py-2 font-poppins text-[13px]">{room.size}</span>
              )}
              <span className="bg-[#EDE8DF] rounded-full px-4 py-2 font-poppins text-[13px]">{room.beds}</span>
              <span className="bg-[#EDE8DF] rounded-full px-4 py-2 font-poppins text-[13px]">
                Max. {room.maxGuests} {room.maxGuests > 1 ? "persoane" : "persoană"}
              </span>
            </div>
            <h3 className="font-poppins text-[17px] mb-5">Facilitățile camerei</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {room.features.map((f) => (
                <div key={f} className="flex items-center gap-2.5">
                  <span className="size-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Icon name="check" className="size-3 text-gold" />
                  </span>
                  <span className="font-raleway text-[14px]">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.1}>
          <aside className="bg-[#EDE8DF] rounded-[14px] p-8 h-fit sticky top-[110px]">
            <p className="font-raleway text-gold text-[32px] font-semibold mb-1">
              {room.price}
            </p>
            <p className="text-[12px] text-black/45 mb-1">pe noapte, {room.taxes}</p>
            <p className="text-[12px] text-black/45 mb-6">
              Anulare gratuită · Fără plată în avans
            </p>
            <div className="flex items-center gap-2 mb-6 p-3 bg-white rounded-[8px]">
              <span className="size-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-[13px]">
                <span className="font-semibold text-gold">{room.available}</span> camere disponibile
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-gold block text-center font-poppins text-[15px] font-semibold rounded-[8px] h-[56px] leading-[56px]"
            >
              Rezervă acum
            </Link>
          </aside>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
