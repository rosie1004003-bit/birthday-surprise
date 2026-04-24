/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Gift, Heart } from "lucide-react";

export default function Surprise() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-24 bg-transparent flex flex-col items-center justify-center min-h-[600px] px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="uppercase tracking-[0.4em] text-rose-300/60 text-xs mb-4">One Last Thing</p>
        <h2 className="font-serif text-4xl text-white italic glow-text">A tiny secret just for your eyes.</h2>
      </motion.div>

      <div className="relative">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-rose-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className={`relative px-12 py-5 bg-black rounded-full border border-rose-500/30 text-rose-100 uppercase tracking-[0.2em] text-sm flex items-center gap-3 transition-colors ${isOpen ? 'border-rose-400' : ''}`}>
            {isOpen ? 'Surprise Revealed' : 'Tap to reveal a surprise'}
            <Gift size={20} className={isOpen ? 'text-rose-400' : 'text-rose-500'} />
          </div>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="mt-12 w-[320px] md:w-[480px] glass-card p-10 md:p-14 rounded-[2.5rem] z-20 border-white/10 relative"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-rose-500 glow-text">
                <Heart fill="currentColor" size={48} className="animate-pulse" />
              </div>
              <div className="space-y-8 text-center">
                <p className="font-sans text-white/90 text-lg md:text-xl leading-relaxed font-light">
                  "I never knew my first love would be you,
                  so unexpected, yet so perfectly meant for my heart.
                  You came not as I imagined, but as everything I truly needed.

                  Your kindness feels like warmth,
                  your care feels like home,
                  and in your love, I found a peace I never knew before.

                  I never thought I would fall this deeply,
                  but you changed me in the most beautiful way.
                  In your little sacrifices, in your quiet patience,
                  I see a love so pure, so rare.

                  No matter where life takes us,
                  I promise I’ll stand by you, always.
                  To love you, to hold you, to be your strength.

                  Keep shining, keep dreaming, keep becoming everything you wish to be…
                  And once again—Happy Birthday, my forever. 💖"
                </p>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-[1px] w-12 bg-rose-500/30 mb-2"></div>
                  <p className="font-serif text-2xl text-rose-300 italic">
                    I Love You Baby.
                  </p>
                  <motion.img
                    src="images/hands2.jpg"
                    alt="love"
                    className="w-48 md:w-64 rounded-2xl shadow-xl mt-4"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-[#0a0502]/60 backdrop-blur-md pointer-events-none z-0"
        />
      )}
    </section>
  );
}
