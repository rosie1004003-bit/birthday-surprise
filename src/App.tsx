/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Quotes from "./components/Quotes";
import Wish from "./components/Wish";
import Surprise from "./components/Surprise";
import MusicToggle from "./components/MusicToggle";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative font-sans scroll-smooth">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-rose-500 origin-left z-50 rounded-r-full"
        style={{ scaleX }}
      />

      {/* Music Toggle Floating UI */}
      <MusicToggle />

      <Hero />

      <div className="relative">
        {/* Decorative Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 border-2 border-dashed border-rose-300 rounded-full opacity-20"
          />
        </div>

        <Gallery />
      </div>

      <Quotes />

      <Wish />

      <Surprise />

      <footer className="py-12 bg-transparent text-center border-t border-white/5 relative z-10 flex flex-col items-center gap-4">
        <p className="font-serif text-lg text-rose-300 italic opacity-80">I am always yours only.</p>
        <p className="text-[10px] text-white/20 tracking-[0.3em] font-medium uppercase">DESIGNED WITH LOVE • 2026</p>
      </footer>
    </main>
  );
}
