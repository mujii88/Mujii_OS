'use client';

import React from 'react';
import { motion } from 'framer-motion';

const profiles = [
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/mujii1036/',
    color: 'from-yellow-400 to-orange-500',
    shadow: 'shadow-[0_0_20px_rgba(249,115,22,0.6)]',
    icon: (
      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.543l5.096 5.107c.502.502 1.272.502 1.774 0l.965-.965a1.254 1.254 0 0 0 0-1.774l-5.096-5.106a2.548 2.548 0 0 1 0-3.604l3.854-4.125 5.406-5.788c.502-.502.502-1.272 0-1.774l-.966-.965A1.374 1.374 0 0 0 13.483 0zm-2.866 12.815a1.254 1.254 0 0 0 0 1.774l2.548 2.548c.502.502 1.272.502 1.774 0l.965-.965a1.254 1.254 0 0 0 0-1.774l-2.548-2.548a1.254 1.254 0 0 0-1.774 0l-.965.965zM17.433 9.467a1.254 1.254 0 0 0 0 1.774l2.548 2.548c.502.502 1.272.502 1.774 0l.965-.965a1.254 1.254 0 0 0 0-1.774l-2.548-2.548a1.254 1.254 0 0 0-1.774 0l-.965.965z" />
      </svg>
    ),
    description: "Solving algorithmic challenges and mastering data structures.",
  },
  {
    name: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/profile/mujtabakhycl6?tab=activity',
    color: 'from-emerald-400 to-green-600',
    shadow: 'shadow-[0_0_20px_rgba(16,185,129,0.6)]',
    icon: (
      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </svg>
    ),
    description: "Active contributor and problem solver on GfG.",
  },
  {
    name: 'InterviewBit',
    url: 'https://www.interviewbit.com/profile/mujtaba-khan_655/',
    color: 'from-cyan-400 to-blue-500',
    shadow: 'shadow-[0_0_20px_rgba(6,182,212,0.6)]',
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    description: "Preparing for top-tier tech interviews through rigorous practice.",
  }
];

export default function CompetitiveWindow() {
  return (
    <div className="w-full h-full flex flex-col p-6 sm:p-10 overflow-y-auto bg-black/40 text-white scrollbar-hide">
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500 drop-shadow-md">
          Competitive Programming
        </h1>
        <p className="text-sm sm:text-lg text-white/70 mb-10 font-medium tracking-wide">
          My journey through algorithms, data structures, and continuous problem-solving.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile, i) => (
          <motion.a
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            key={profile.name}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: i * 0.15, type: "spring", stiffness: 300, damping: 20 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className={`group relative flex flex-col items-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden transition-all hover:bg-white/10 hover:border-white/30 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]`}
          >
            {/* Background Glow */}
            <div className={`absolute -inset-4 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />
            
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br ${profile.color} ${profile.shadow} mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
              {profile.icon}
            </div>

            <h2 className="text-2xl font-bold mb-3 tracking-wide">{profile.name}</h2>
            
            <p className="text-center text-sm text-white/60 font-medium">
              {profile.description}
            </p>

            <div className="mt-8 px-6 py-2 rounded-full bg-white/10 text-xs font-bold uppercase tracking-widest group-hover:bg-white/20 transition-colors">
              View Profile
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
