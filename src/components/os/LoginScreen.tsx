'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface LoginScreenProps {
  onLogin: () => void;
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === 'password') {
      onLogin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)", transition: { duration: 1.2, ease: "easeInOut" } }}
    >
      <div className="absolute inset-0 bg-[url('/wallpaper.png')] bg-cover bg-center opacity-30 blur-md mix-blend-overlay" />
      
      <motion.div 
        className="relative z-10 flex flex-col items-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-[0_0_30px_rgba(236,72,153,0.5)] border-2 border-white/20 mb-6">
          <Image 
            src="/profile.jpg" 
            alt="Mujtaba Ahmed"
            width={144}
            height={144}
            className="w-full h-full object-cover"
          />
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wider mb-2 drop-shadow-md">
          Mujtaba Ahmed
        </h2>

        <p className="text-sm text-pink-200/80 mb-8 font-medium text-center px-4">
          Enter password to see Mujtaba&apos;s Portfolio
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-xs">
          <div className="relative w-full">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className={`w-full bg-white/10 border ${error ? 'border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]' : 'border-white/20'} rounded-full px-6 py-3 text-center text-white placeholder-white/50 focus:outline-none focus:border-pink-400 focus:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all backdrop-blur-md`}
              autoFocus
            />
            <button 
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-white/10 text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <p className="mt-4 text-xs text-white/50 font-medium tracking-widest uppercase">
            Hint: password
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
}
