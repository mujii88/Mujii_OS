'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
  "Boot sequence complete. Opening Secure Terminal.",
];

interface BootScreenProps {
  onComplete: () => void;
}

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [showLogs, setShowLogs] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowLogs(true), 1200);
    const timer2 = setTimeout(() => {
      onComplete();
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.02 }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, filter: 'blur(5px)', y: -2 },
    visible: { opacity: 0.9, filter: 'blur(0px)', y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  const logContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const logLineVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeOut" } }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black text-pink-400 font-mono text-xs sm:text-sm p-4 sm:p-8 overflow-hidden z-50 pointer-events-none flex flex-col"
      style={{ textShadow: '0 0 10px rgba(236,72,153,0.8)' }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(20px)", transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      {/* Scanline overlay for cinematic effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-50" />
      
      <div className="flex-1 flex flex-col justify-center items-center whitespace-pre relative z-10">
        {/* ASCII Art block */}
        <motion.div 
          className="mb-6 leading-[1.1] text-[6px] sm:text-[10px] md:text-xs"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {asciiArt.map((line, i) => (
            <motion.div key={i} variants={lineVariants}>{line}</motion.div>
          ))}
        </motion.div>

        {/* Boot log block */}
        <div className="space-y-1 h-48 w-full flex flex-col items-center">
          {showLogs && (
            <motion.div 
              variants={logContainerVariants}
              initial="hidden"
              animate="visible"
              className="text-left"
            >
              {bootLines.map((line, i) => (
                <motion.div key={i} variants={logLineVariants}>{line}</motion.div>
              ))}
              {/* Blinking cursor */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="font-bold text-pink-300 mt-1"
              >
                _
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
