import Icon from "./Icon";
import { strengths } from "@/lib/data";

export default function Strengths() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {strengths.map((s) => (
        <div
          key={s}
          className="flex items-start gap-3 bg-cream rounded-[10px] p-5"
        >
          <span className="shrink-0 size-7 rounded-full bg-gold/15 text-gold flex items-center justify-center">
            <Icon name="check" className="size-3.5" />
          </span>
          <p className="font-raleway text-[14px] leading-relaxed">{s}</p>
        </div>
      ))}
    </div>
  );
}
