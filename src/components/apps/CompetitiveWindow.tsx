'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const profiles = [
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/mujii1036/',
    color: 'from-orange-400 to-rose-500',
    shadow: 'shadow-orange-500/40',
    icon: (
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.543l5.096 5.107c.502.502 1.272.502 1.774 0l.965-.965a1.254 1.254 0 0 0 0-1.774l-5.096-5.106a2.548 2.548 0 0 1 0-3.604l3.854-4.125 5.406-5.788c.502-.502.502-1.272 0-1.774l-.966-.965A1.374 1.374 0 0 0 13.483 0zm-2.866 12.815a1.254 1.254 0 0 0 0 1.774l2.548 2.548c.502.502 1.272.502 1.774 0l.965-.965a1.254 1.254 0 0 0 0-1.774l-2.548-2.548a1.254 1.254 0 0 0-1.774 0l-.965.965zM17.433 9.467a1.254 1.254 0 0 0 0 1.774l2.548 2.548c.502.502 1.272.502 1.774 0l.965-.965a1.254 1.254 0 0 0 0-1.774l-2.548-2.548a1.254 1.254 0 0 0-1.774 0l-.965.965z" />
      </svg>
    ),
    description: "Solving algorithmic challenges and mastering advanced data structures like dynamic programming and graphs.",
  },
  {
    name: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/profile/mujtabakhycl6?tab=activity',
    color: 'from-emerald-400 to-teal-500',
    shadow: 'shadow-emerald-500/40',
    icon: (
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </svg>
    ),
    description: "Active contributor and rigorous problem solver. Practicing core computer science fundamentals.",
  },
  {
    name: 'InterviewBit',
    url: 'https://www.interviewbit.com/profile/mujtaba-khan_655/',
    color: 'from-cyan-400 to-blue-500',
    shadow: 'shadow-cyan-500/40',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    description: "Preparing for top-tier tech interviews through timed, high-pressure algorithmic practice.",
  }
];

export default function CompetitiveWindow() {
  return (
    <div className="h-full w-full flex flex-col overflow-hidden" style={{ background: 'linear-gradient(145deg, #fce4ec 0%, #fdf2f8 30%, #faf5ff 60%, #fce7f3 100%)' }}>
      
      {/* Header */}
      <div className="shrink-0 px-8 pt-8 pb-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-black text-gray-800 tracking-tight"
            >
              Coding{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-purple-400">
                Profiles
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-gray-400 mt-2 text-sm font-medium tracking-wide"
            >
              ~/competitive — Algorithms, Data Structures &amp; Problem Solving
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
            className="text-right hidden md:flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-white/60 backdrop-blur-xl border border-pink-200/50 shadow-sm"
          >
            <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-pink-500 to-rose-600">
              {profiles.length}
            </div>
            <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
              Platforms
            </div>
          </motion.div>
        </div>
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-y-auto px-8 pb-8" style={{ scrollbarWidth: 'thin', scrollbarColor: '#f9a8d4 transparent' }}>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {profiles.map((profile, index) => (
              <motion.a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                key={profile.name}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
                className="group relative bg-white/70 backdrop-blur-2xl border border-pink-200/50 rounded-2xl p-7 flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-[0_25px_60px_-15px_rgba(219,39,119,0.15)] transition-shadow duration-500 min-h-[280px]"
              >
                {/* Hover glow overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-100/0 via-rose-50/0 to-purple-100/0 group-hover:from-pink-100/40 group-hover:via-rose-50/30 group-hover:to-purple-100/30 transition-all duration-500 pointer-events-none" />

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pink-200/30 to-transparent rounded-tr-2xl rounded-bl-[80px] pointer-events-none" />

                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${profile.color} ${profile.shadow} mb-5 shadow-lg transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500`}>
                    {profile.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-700 transition-colors duration-300">
                    {profile.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 group-hover:text-gray-600 transition-colors duration-300 flex-1">
                    {profile.description}
                  </p>

                  {/* Link Button */}
                  <div
                    className="inline-flex self-start items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm font-semibold shadow-md shadow-pink-500/20 hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 group-hover:from-pink-600 group-hover:to-rose-600 group/btn mt-auto"
                  >
                    View Profile
                    <svg className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
