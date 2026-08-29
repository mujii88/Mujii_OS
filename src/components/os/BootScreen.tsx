'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const asciiArt = [
  "............................................................",
  "............................................................",
  "............................................................",
  "............................:::-+***+=---:..................",
  "..........................:*#%#%%##%######*=:...............",
  "........................:=#%@%%%%#%%%%###%%#*-..............",
  ".......................:*%%%@@@@@@@@@@@%%##*#*=:............",
  ".......................=%%@@@%%%###%@@%%%#####*+............",
  ".......................=@@@%*++=====+#%%#**###**:...........",
  ".......................-@@%*=========+#%%*#%##*#-...........",
  "........................+@#*+=========#%%%%%%%%%:...........",
  ".........................+*#%+=*##***++%%%@%%%%+............",
  ".........................-+**=-=*#*++==**%@%%%+.............",
  "........................:=-=-:::-=+=-----%%**+..............",
  "........................:====--------::-=**++:..............",
  ".........................=##%%#===------===+:...............",
  "........................:=******#*=-=---*%#:................",
  "...............::--==+##*#+=++=--==--===%*:.................",
  ".........:-=++**####%@%%%@#+++=--==++=-=:...................",
  "......:=+*###%%%%%%@@%%%@@%##****++==-=*-...................",
  ".....-*###%%%%%%%%@%%%##%%#*****+===-=%***-:................",
  "...:+##%%%%%%%%%%@@@@@*=+=--==+++===*@#++#*++-..............",
  "..:*#%%%%%%%%%%%@%%@@@#+====-----=+#@%**+**#%*-:............",
  "..:#%%%%%%%%@%%%%%%%@%+=======--:=%@@@%##*#%%+**=:..........",
  "...-%@%%%%%@%%%%%%%%@%+=-====--::=@@@@@@%#%%#*#***+:........",
  "....-%@@@@@@%%%%%%%%%%+=====---::-%%%%@@%%%%#####**+:.......",
  ".....:*@@@@@@@@%%%%%%%*=*%%+=--:::*%%@@@@%%%%%###*++=.......",
  ".......=%@@@@@@%%%%%%%%%%@@#=---::-%%@@%@%%%%%###**=:.......",
  "........:+%@@@@@%%%%%%@@%@@%==--:::=%@@%@@@@%%%%#*-.........",
  "..........:=#@@@%%%@%%@@@@%%*==---::-%@@@@@@@@%*-...........",
  ".............-+#@@@@@%@@@@%%@#+=---::=@@@@@%#=:.............",
  "................-=*#%%@@@%%%@@%#+==-::=%%*=:................",
  "....................:-=**##%%@@%+==-:..:....................",
];

const bootLines = [
  "Loading MujiiOS Kernel (v6.1.0-pink)...",
  "Initializing neural matrix... [ OK ]",
  "Decrypting designer modules... [ OK ]",
  "Establishing hardware handshakes...",
  "[  OK  ] CPU: Optimized for elegance.",
  "[  OK  ] GPU: Accelerated aesthetics enabled.",
  "Mounting encrypted file systems...",
  "[  OK  ] User Profile Authenticated.",
  "Injecting personality subroutines...",
  "Starting OS Environment...",
  "Boot sequence complete. Welcome to Mujii OS.",
];

interface BootScreenProps {
  onComplete: () => void;
}

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [displayedAscii, setDisplayedAscii] = useState<string[]>([]);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    let asciiIndex = 0;
    
    // Animate ASCII art fast
    const asciiInterval = setInterval(() => {
      if (asciiIndex < asciiArt.length) {
        setDisplayedAscii(prev => [...prev, asciiArt[asciiIndex]]);
        asciiIndex++;
      } else {
        clearInterval(asciiInterval);
        
        // Start text boot sequence after ASCII finishes
        let textIndex = 0;
        const textInterval = setInterval(() => {
          if (textIndex < bootLines.length) {
            setDisplayedLines(prev => [...prev, bootLines[textIndex]]);
            textIndex++;
          } else {
            clearInterval(textInterval);
            setTimeout(() => {
              setIsFadingOut(true);
              setTimeout(onComplete, 1200); // Wait for fade out
            }, 800);
          }
        }, 120); // ms per text line
      }
    }, 25); // very fast ms per ascii line

    return () => {
      clearInterval(asciiInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <motion.div
          className="fixed inset-0 bg-black text-pink-400 font-mono text-xs sm:text-sm p-4 sm:p-8 overflow-hidden z-50 pointer-events-none flex flex-col"
          style={{ textShadow: '0 0 10px rgba(236,72,153,0.8)' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 1.2, ease: "easeInOut" } }}
        >
          {/* Scanline overlay for cinematic effect */}
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-50" />
          
          <div className="flex-1 flex flex-col justify-end whitespace-pre relative z-10">
            {/* ASCII Art block */}
            <div className="mb-6 opacity-90 leading-[1.1] text-[6px] sm:text-[10px] md:text-xs">
              {displayedAscii.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>

            {/* Boot log block */}
            <div className="space-y-1">
              {displayedLines.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
              {/* Blinking cursor */}
              {displayedLines.length < bootLines.length && (
                <div className="animate-pulse font-bold text-pink-300">_</div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
