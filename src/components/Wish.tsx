/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Sparkles, Heart } from "lucide-react";

export default function Wish() {
  return (
    <section className="py-32 bg-transparent text-white overflow-hidden relative z-10">
      {/* Background Sparkles */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ 
              duration: 2 + Math.random() * 2, 
              repeat: Infinity, 
              delay: Math.random() * 2 
            }}
            className="absolute"
            style={{ 
              top: Math.random() * 100 + "%", 
              left: Math.random() * 100 + "%" 
            }}
          >
            <Sparkles size={16} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="relative inline-block mb-12">
            <div className="absolute -inset-8 bg-rose-600/20 blur-2xl rounded-full"></div>
            <motion.div
              animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative inline-block p-8 glass-card border-rose-500/20 rounded-full"
            >
              <Heart size={64} className="text-rose-500 animate-pulse fill-rose-500/20" />
            </motion.div>
          </div>
          
          <h2 className="font-serif text-5xl md:text-7xl mb-10 italic glow-text">
            A Wish From <span className="not-italic text-rose-300">Myself</span>
          </h2>
          
          <p className="font-sans text-xl md:text-2xl text-rose-100/70 max-w-2xl mx-auto leading-relaxed mb-16 font-light">
            May your day be as radiant as your smile, as warm as your heart, 
            and as unforgettable as the love we share. Happy Birthday to the 
            brightest star in my sky.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 text-rose-400 font-sans font-bold tracking-tighter"
          >
            {[..."BIRTHDAY"].map((char, i) => (
              <motion.span
                key={i}
                animate={{ 
                  y: [0, -20, 0],
                  color: ["#F43F5E", "#fda4af", "#F43F5E"]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: i * 0.1 
                }}
                className="text-5xl md:text-8xl drop-shadow-[0_0_20px_rgba(244,63,94,0.3)]"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
