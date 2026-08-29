'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface WindowProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  onMinimize?: () => void;
  isActive: boolean;
  isMinimized?: boolean;
  onClick: () => void;
  defaultPosition?: { x: number; y: number };
  width?: number | string;
  height?: number | string;
  defaultMaximized?: boolean;
}

export default function Window({
  title,
  children,
  onClose,
  onMinimize,
  isActive,
  isMinimized = false,
  onClick,
  defaultPosition = { x: 100, y: 100 },
  width = 600,
  height = 400,
  defaultMaximized = false
}: WindowProps) {
  const [isMaximized, setIsMaximized] = useState(defaultMaximized);

  const toggleMaximize = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMaximized(!isMaximized);
  };

  const handleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onMinimize) onMinimize();
  };

  return (
    <motion.div
      layout
      drag={!isMaximized}
      dragElastic={0}
      dragMomentum={false}
      initial={{ 
        opacity: 0, 
        scale: 0.5, 
        x: defaultPosition.x, 
        y: defaultPosition.y + 100
      }}
      animate={
        isMinimized 
          ? { opacity: 0, scale: 0.8 }
          : { 
              opacity: 1, 
              scale: 1, 
              x: isMaximized ? 0 : undefined, 
              y: isMaximized ? 0 : undefined
            }
      }
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ 
        layout: { type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.4 },
        opacity: { duration: 0.25 },
        default: { type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.4 }
      }}
      onClick={onClick}
      style={{
        width: isMaximized ? '100vw' : '100%',
        maxWidth: isMaximized ? undefined : width,
        height: isMaximized ? '100vh' : height,
        maxHeight: '100vh',
        zIndex: isActive ? 40 : 30,
        pointerEvents: isMinimized ? 'none' : 'auto',
        willChange: 'transform, opacity, width, height',
      }}
      className={`flex flex-col overflow-hidden shadow-2xl border ${
        isActive ? 'border-white/20' : 'border-white/10'
      } bg-gray-900/80 backdrop-blur-md ${
        isMaximized ? 'fixed top-0 left-0 rounded-none z-[100]' : 'absolute rounded-xl'
      }`}
    >
      {/* Titlebar */}
      <div
        onDoubleClick={toggleMaximize}
        className={`titlebar flex items-center justify-between px-4 py-3 cursor-grab active:cursor-grabbing transition-colors ${
          isActive ? 'bg-black/40' : 'bg-black/20'
        }`}
      >
        <div className="flex gap-2 items-center group">
          <button 
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-400 focus:outline-none flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <span className="opacity-0 group-hover:opacity-100 text-[8px] text-red-900 font-bold leading-none">x</span>
          </button>
          <button 
            onClick={handleMinimize}
            className="w-3.5 h-3.5 rounded-full bg-yellow-500 hover:bg-yellow-400 focus:outline-none flex items-center justify-center transition-colors"
            aria-label="Minimize"
          >
            <span className="opacity-0 group-hover:opacity-100 text-[10px] text-yellow-900 font-bold leading-none">-</span>
          </button>
          <button 
            onClick={toggleMaximize}
            className="w-3.5 h-3.5 rounded-full bg-green-500 hover:bg-green-400 focus:outline-none flex items-center justify-center transition-colors"
            aria-label="Maximize"
          >
            <span className="opacity-0 group-hover:opacity-100 text-[8px] text-green-900 font-bold leading-none">+</span>
          </button>
        </div>
        
        <div className="text-sm font-semibold text-gray-200 select-none">
          {title}
        </div>
        
        <div className="w-11" /> {/* Placeholder to balance title centering */}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-4 text-gray-100 bg-gray-900/50">
        {children}
      </div>
    </motion.div>
  );
}
