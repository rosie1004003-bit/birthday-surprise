/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Music, Volume2, VolumeX } from "lucide-react";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Audio play blocked", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-y-4">
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="mb-2 glass-card px-5 py-3 rounded-2xl flex items-center gap-4 border-rose-500/20"
          >
            <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center shadow-lg shadow-rose-500/20">
              <Music size={18} className="text-white" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-white uppercase tracking-widest">Romantic Melodies</p>
              <p className="text-[10px] text-rose-300 opacity-60">Background playing...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleMusic}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 glass-card ${isPlaying ? 'border-rose-500/50 bg-rose-500/10' : 'border-white/10'}`}
      >
        {isPlaying ? <Volume2 size={24} className="text-rose-400" /> : <VolumeX size={24} className="text-white/40" />}
      </motion.button>

      <audio
        ref={audioRef}
        src="audio/song.mp3"
        loop
      />
    </div>
  );
}
