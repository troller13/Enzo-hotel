type PageHeroProps = {
  title: string;
  subtitle: string;
};

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative h-[560px] md:h-[640px] mt-[90px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop')",
          animation: "scaleDown 8s ease forwards",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative h-full max-w-[1272px] mx-auto px-6 flex flex-col items-center justify-center text-center">
        <div
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/30 text-white/70 text-[12px] font-poppins tracking-widest uppercase"
          style={{ animation: "fadeDown 0.7s ease both" }}
        >
          Hotel EZIO · Chișinău
        </div>
        <h1
          className="font-raleway font-bold text-white text-[38px] md:text-[58px] leading-tight mb-6"
          style={{ animation: "fadeUp 0.7s ease 0.15s both" }}
        >
          {title}
        </h1>
        <p
          className="font-raleway text-white/85 text-[15px] max-w-[560px] leading-relaxed"
          style={{ animation: "fadeUp 0.7s ease 0.3s both" }}
        >
          {subtitle}
        </p>
      </div>

      {/* Decorative wave */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        fill="#F2EDE4"
      >
        <path d="M0,40 C360,70 1080,10 1440,40 L1440,60 L0,60 Z" />
      </svg>

      <style>{`
        @keyframes scaleDown {
          from { transform: scale(1.1); }
          to   { transform: scale(1.03); }
        }
      `}</style>
    </section>
  );
}
