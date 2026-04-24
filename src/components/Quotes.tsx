/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Quote } from "lucide-react";

const quotes = [
  { text: "I never imagined you’d be the one to fill my life with this much happiness, but now that you are, every moment feels brighter because of you.", author: "Vicky" },
  { text: "All I wish is to love you in ways you’ve never expected, with a depth that makes your heart feel truly cherished every single day.", author: "My Heart" },
  { text: "Every year with you is my new favorite adventure.", author: "Always Yours" },
];

export default function Quotes() {
  return (
    <section className="py-24 bg-transparent relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-16">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? 'items-start' : 'items-end'}`}
            >
              <div className="glass-card p-10 md:p-14 rounded-[2rem] relative max-w-2xl border-white/5 bg-white/5">
                <Quote className="absolute -top-4 -left-4 text-rose-500/40 w-12 h-12 rotate-12" />

                <h3 className="text-[10px] uppercase tracking-[0.3em] text-rose-300/80 mb-6 font-semibold">Words from the heart</h3>

                <p className="font-serif text-2xl md:text-3xl leading-relaxed italic text-white/90 mb-8 font-medium">
                  "{quote.text}"
                </p>

                <div className={`flex items-center space-x-3 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className="h-[1px] w-8 bg-rose-500/50" />
                  <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-rose-400">
                    — {quote.author}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
