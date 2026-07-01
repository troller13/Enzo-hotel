import Icon from "./Icon";

const fields = [
  { icon: "location", label: "Locație",    value: "Chișinău"     },
  { icon: "room",     label: "Tip cameră", value: "Standard"     },
  { icon: "person",   label: "Persoane",   value: "01"           },
  { icon: "calendar", label: "Check in",   value: "09 iul 2026"  },
  { icon: "calendar", label: "Check out",  value: "13 iul 2026"  },
];

export default function BookingBar() {
  return (
    <div className="relative z-20 -mt-[56px] mx-auto max-w-[1272px] px-4">
      <div className="reveal from-up bg-white rounded-[12px] shadow-[0_16px_60px_rgba(0,0,0,.12)] px-6 md:px-10 py-5 flex flex-wrap items-center gap-6 md:gap-8 transition-all duration-700"
           style={{ transitionDelay: "0.3s" }}>
        {fields.map((field) => (
          <div key={field.label} className="flex items-center gap-3 group cursor-pointer">
            <span className="size-[38px] rounded-full bg-[#F2EDE4] flex items-center justify-center transition-colors group-hover:bg-gold/10">
              <Icon name={field.icon} className="size-4 text-gold" />
            </span>
            <div>
              <p className="font-poppins text-[13px] flex items-center gap-1 text-black/50">
                {field.label}
                <Icon name="chevron-down" className="size-2.5" />
              </p>
              <p className="font-poppins text-[14px] font-semibold">{field.value}</p>
            </div>
          </div>
        ))}
        <button className="ml-auto btn-gold font-poppins font-semibold text-[14px] rounded-[6px] px-8 h-[50px]">
          Verifică disponibilitatea
        </button>
      </div>
    </div>
  );
}
