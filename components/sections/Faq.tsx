"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/lib/faq";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-24 bg-brand-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Preguntas Frecuentes
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white">
            Antes de que pregunte
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question} className="border border-brand-700 bg-brand-900">
                <button
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-white">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-accent flex-shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-5 text-gray-400 leading-relaxed">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
