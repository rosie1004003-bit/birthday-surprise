/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

const photos = [
  { url: "/pair1.jpg", title: "My love" },
  { url: "/hands.jpg", title: "together forever" },
  { url: "/pair2.jpg", title: "My soul" },
  { url: "/mv.jpg", title: "Mine..." },
  { url: "/pair 3.jpg", title: "My happiness" },
  { url: "/single.jpg", title: "Ennavane..." },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-4 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-rose-500/30"></div>
            <h2 className="font-serif text-4xl md:text-5xl text-white italic glow-text">Memorabilia</h2>
            <div className="h-[1px] w-12 bg-rose-500/30"></div>
          </div>
          <p className="text-rose-300/60 font-sans uppercase tracking-[0.2em] text-xs">A few snapshots of the happiness you bring.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {photos.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? -1 : 1 }}
              className={`p-2 glass-card rounded-2xl ${index % 3 === 0 ? 'rotate-[-2deg]' : index % 3 === 1 ? 'rotate-[1deg]' : 'rotate-[-1deg]'} transition-transform duration-500`}
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-[#2d1b28]">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-rose-100 font-serif text-lg italic">{item.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
