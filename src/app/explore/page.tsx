import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { exploreItems } from "@/lib/data";

const images = [
  "1566073771259-6a8506099945",
  "1571896349842-33c89424de2d",
  "1551882547-ff40c63fe5fa",
];

export default function ExplorePage() {
  return (
    <>
      <Navbar transparent />

      {/* Video Hero */}
      <section className="relative h-[700px] mt-[90px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1600&auto=format&fit=crop')",
            animation: "scaleDownExplore 10s ease-out forwards",
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative h-full flex flex-col items-center justify-center gap-6">
          <div
            className="play-btn size-[130px] rounded-full bg-white/15 border-2 border-white/40 backdrop-blur flex items-center justify-center cursor-pointer hover:bg-white/25 transition-all"
            style={{ animation: "fadeIn 1s ease 0.3s both" }}
          >
            <Icon name="play" className="size-10 text-white" />
          </div>
          <p
            className="font-raleway text-white text-[28px] font-medium"
            style={{ animation: "fadeUp 0.7s ease 0.5s both" }}
          >
            Fă un tur al Hotel EZIO
          </p>
        </div>
        <style>{`
          @keyframes scaleDownExplore {
            from { transform: scale(1.12); }
            to   { transform: scale(1.03); }
          }
        `}</style>
      </section>

      <section className="max-w-[1272px] mx-auto px-6 py-24">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {exploreItems.map((item, i) => (
      <Reveal key={item.title} direction="up" delay={i * 0.12}>
        <div className="card-lift rounded-[16px] overflow-hidden bg-white flex flex-col h-full">
          <div className="img-zoom relative h-[260px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-${images[i]}?q=80&w=900&auto=format&fit=crop')`,
              }}
            />
          </div>
          <div className="p-8 flex flex-col flex-1">
            <h3 className="font-raleway font-bold text-[22px] text-gold mb-3">
              {item.title}
            </h3>
            <p className="font-raleway text-[14px] leading-relaxed text-black/60">
              {item.description}
            </p>
          </div>
        </div>
      </Reveal>
    ))}
  </div>
</section>

      <div className="h-24 md:h-40" />
      <Footer />
    </>
  );
}
