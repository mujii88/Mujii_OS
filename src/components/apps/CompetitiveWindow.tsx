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
        <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.606-2.697c-1.082-1.082-2.522-1.531-4.04-1.531s-2.958.449-4.04 1.531l-4.319 4.38c-1.082 1.082-1.624 2.615-1.624 4.148s.542 3.065 1.624 4.148l4.332 4.363c1.082 1.082 2.522 1.531 4.04 1.531s2.958-.449 4.04-1.531l2.697-2.607c.514-.514.496-1.365-.039-1.9-.536-.535-1.387-.553-1.9-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
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
      <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.781 12.029h4.593v-2.35H7.781c-1.378 0-2.395 1.173-2.395 2.55s1.017 2.55 2.395 2.55h.88v2.33h-.88c-2.613 0-4.726-2.113-4.726-4.725s2.113-4.726 4.726-4.726h3.401v2.35H7.781c-1.378 0-2.395 1.173-2.395 2.55zM16.219 9.679h-4.593v2.35h4.593c1.378 0 2.395-1.173 2.395-2.55s-1.017-2.55-2.395-2.55h-.88V4.599h.88c2.613 0 4.726 2.113 4.726 4.725s-2.113 4.726-4.726 4.726h-3.401v-2.35h3.401c1.378 0 2.395-1.173 2.395-2.55z" />
      </svg>
    ),
    description: "Active contributor and rigorous problem solver. Practicing core computer science fundamentals.",
  },
  {
    name: 'InterviewBit',
    url: 'https://www.interviewbit.com/profile/mujtaba-khan_655/',
    color: 'from-cyan-400 to-blue-600',
    shadow: 'shadow-cyan-500/40',
    icon: (
      <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    description: "Preparing for top-tier tech interviews through timed, high-pressure algorithmic practice.",
  }
];

function ProfileCard({ profile, index, className = '' }: { profile: typeof profiles[0], index: number, className?: string }) {
  return (
    <motion.a
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.15, type: 'spring', stiffness: 200, damping: 20 }}
      whileHover={{ 
        y: -12, 
        scale: 1.03,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      className={`group relative bg-white/70 backdrop-blur-2xl border border-pink-200/50 rounded-2xl p-7 flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-[0_25px_60px_-15px_rgba(219,39,119,0.15)] transition-shadow duration-500 min-h-[280px] ${className}`}
    >
      {/* Hover glow overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-100/0 via-rose-50/0 to-purple-100/0 group-hover:from-pink-100/40 group-hover:via-rose-50/30 group-hover:to-purple-100/30 transition-all duration-500 pointer-events-none" />

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pink-200/30 to-transparent rounded-tr-2xl rounded-bl-[80px] pointer-events-none" />

      <div className="relative z-10 flex-1 flex flex-col items-center text-center">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${profile.color} ${profile.shadow} mb-5 shadow-lg transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500`}>
          {profile.icon}
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-black text-gray-800 mb-3 group-hover:text-pink-700 transition-colors duration-300">
          {profile.name}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-6 group-hover:text-gray-600 transition-colors duration-300 flex-1 max-w-sm">
          {profile.description}
        </p>

        {/* Link Button */}
        <div
          className="inline-flex items-center justify-center gap-2 px-6 py-3 w-full rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm font-semibold shadow-md shadow-pink-500/20 hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 group-hover:from-pink-600 group-hover:to-rose-600 group/btn mt-auto"
        >
          View Profile
          <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </motion.a>
  );
}

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

      {/* Pyramid Layout */}
      <div className="flex-1 overflow-y-auto px-4 md:px-8 pb-12 flex flex-col items-center" style={{ scrollbarWidth: 'thin', scrollbarColor: '#f9a8d4 transparent' }}>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="w-full max-w-4xl flex flex-col gap-6"
          >
            {/* Top Row: LeetCode centered */}
            <div className="w-full flex justify-center">
              <ProfileCard profile={profiles[0]} index={0} className="w-full md:w-3/5" />
            </div>

            {/* Bottom Row: GfG and InterviewBit */}
            <div className="w-full flex flex-col md:flex-row justify-center gap-6">
              <ProfileCard profile={profiles[1]} index={1} className="w-full md:w-1/2" />
              <ProfileCard profile={profiles[2]} index={2} className="w-full md:w-1/2" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
