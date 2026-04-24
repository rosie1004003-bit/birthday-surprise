/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Heart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Immersive Background Elements */}
      <div className="absolute inset-0 z-0 bg-immersive-bg" />
      <div
        className="absolute inset-0 z-1 opacity-60"
        style={{ background: "radial-gradient(circle at 50% 40%, #4c1d3d 0%, #1a0b16 70%)" }}
      />

      {/* Decorative pulse element */}
      <div className="absolute top-20 left-10 w-24 h-24 border border-rose-500/20 rounded-full flex items-center justify-center opacity-40 z-0 scale-150 md:scale-100">
        <div className="w-16 h-16 border border-rose-400/30 rounded-full animate-pulse"></div>
      </div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-rose-900/10 rounded-full blur-3xl z-0"></div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-4"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="uppercase tracking-[0.4em] text-rose-300/60 text-xs mb-4"
          >
            To My Favorite Person
          </motion.p>

          <motion.h1
            className="font-serif text-6xl md:text-8xl text-white italic glow-text"
            animate={{ scale: [1, 1.01, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            Happy Birthday <br />
            <span className="not-italic">Love</span> ❤️
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-rose-100/80 text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto pt-6"
          >
            In a world full of ordinary days, you are my forever celebration. Your love is my greatest gift, and every moment with you feels like magic.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-12"
          >
            <a
              href="#gallery"
              className="group relative inline-block"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative px-8 py-4 bg-black rounded-full border border-rose-500/30 text-rose-100 uppercase tracking-[0.2em] text-sm">
                Explore the surprise
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles - subtle */}
      <div className="absolute top-[20%] left-[15%] w-2 h-2 bg-rose-400 rounded-full blur-[1px] opacity-40"></div>
      <div className="absolute top-[70%] left-[8%] w-1.5 h-1.5 bg-rose-300 rounded-full blur-[1px] opacity-30"></div>
      <div className="absolute bottom-[15%] right-[25%] w-1 h-1 bg-white rounded-full blur-[1px] opacity-50"></div>
    </section>
  );
}
