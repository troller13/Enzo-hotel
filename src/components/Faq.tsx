"use client";

import { useState } from "react";
import Icon from "./Icon";
import { faqItems } from "@/lib/data";

function AnswerContent({ answer }: { answer: string }) {
  const lines = answer.split("\n").filter(Boolean);
  const bulletLines = lines.filter((l) => l.trim().startsWith("* "));

  if (bulletLines.length > 1) {
    const intro = lines.find((l) => !l.trim().startsWith("* "));
    return (
      <div>
        {intro && (
          <p className="font-raleway text-[14px] text-black/60 leading-relaxed mb-2">
            {intro}
          </p>
        )}
        <ul className="space-y-1.5">
          {bulletLines.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Icon name="check" className="size-3 text-gold shrink-0 mt-1" />
              <span className="font-raleway text-[14px] text-black/60">
                {item.replace(/^\*\s*/, "")}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <p className="font-raleway text-[14px] text-black/60 leading-relaxed pr-8">
      {answer}
    </p>
  );
}

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="max-w-[850px] mx-auto divide-y divide-black/10 border-t border-b border-black/10">
      {faqItems.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left font-poppins text-[16px] md:text-[17px]"
            >
              <span>{item.question}</span>
              <Icon
                name="chevron-down"
                className={`size-4 shrink-0 text-gold transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
              }`}
              style={{ display: "grid" }}
            >
              <div className="overflow-hidden">
                <AnswerContent answer={item.answer} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
