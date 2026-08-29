'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface DesktopIconProps {
  name: string;
  icon: React.ReactNode;
  onDoubleClick?: () => void;
  onClick?: () => void;
  delay?: number;
  draggable?: boolean;
}

export default function DesktopIcon({ name, icon, onDoubleClick, onClick, delay = 0, draggable = false }: DesktopIconProps) {
  return (
    <motion.div
      drag={draggable}
      dragMomentum={false}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
      onDoubleClick={onDoubleClick}
      onClick={onClick}
      className="flex flex-col items-center justify-center w-24 p-2 cursor-pointer rounded-lg hover:bg-white/10 active:bg-white/20 transition-colors"
      style={{ touchAction: 'none' }}
    >
      <div className="w-12 h-12 flex items-center justify-center mb-1 text-4xl drop-shadow-lg pointer-events-none">
        {icon}
      </div>
      <span className="text-white text-xs text-center font-medium drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] truncate w-full px-1 pointer-events-none">
        {name}
      </span>
    </motion.div>
  );
}
