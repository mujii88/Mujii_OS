'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLines = [
  "Loading Linux 5.15.0-generic...",
  "Loading initial ramdisk...",
  "Starting systemd-udevd version 249.11...",
  "[  OK  ] Reached target Local File Systems (Pre).",
  "[  OK  ] Reached target Local File Systems.",
  "Mounting Kernel Debug File System...",
  "Mounting POSIX Message Queue File System...",
  "[  OK  ] Mounted Kernel Debug File System.",
  "[  OK  ] Mounted POSIX Message Queue File System.",
  "Starting Journal Service...",
  "[  OK  ] Started Journal Service.",
  "Starting Load Kernel Modules...",
  "[  OK  ] Started Load Kernel Modules.",
  "Starting Set Up Additional Binary Formats...",
  "[  OK  ] Started Set Up Additional Binary Formats.",
  "[  OK  ] Reached target System Initialization.",
  "[  OK  ] Reached target Basic System.",
  "Starting User Login Management...",
  "[  OK  ] Started User Login Management.",
  "Starting GNOME Display Manager...",
  "[  OK  ] Started GNOME Display Manager.",
  "Starting Mujii OS Environment...",
  "Boot sequence complete. Welcome to Mujii OS.",
];

interface BootScreenProps {
  onComplete: () => void;
}

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex < bootLines.length) {
        setDisplayedLines(prev => [...prev, bootLines[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(onComplete, 1000); // Wait for fade out
        }, 500);
      }
    }, 100); // 100ms per line

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <motion.div
          className="fixed inset-0 bg-black text-green-400 font-mono text-sm p-4 overflow-hidden z-50 pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          {displayedLines.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
          {displayedLines.length < bootLines.length && (
            <div className="animate-pulse">_</div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
