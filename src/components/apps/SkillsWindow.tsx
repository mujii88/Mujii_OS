'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  description: string;
  skills: { name: string; color: string }[];
};

const categories: SkillCategory[] = [
  {
    name: 'Languages',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    description: 'Core programming languages across systems and applications',
    skills: [
      { name: 'Go', color: 'bg-cyan-100 text-cyan-700 border-cyan-200' },
      { name: 'Python', color: 'bg-amber-100 text-amber-700 border-amber-200' },
      { name: 'C / C++', color: 'bg-blue-100 text-blue-700 border-blue-200' },
      { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
      { name: 'Verilog', color: 'bg-rose-100 text-rose-700 border-rose-200' },
      { name: 'SystemVerilog', color: 'bg-pink-100 text-pink-700 border-pink-200' },
    ],
  },
  {
    name: 'EDA & Hardware Tools',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    description: 'Electronic Design Automation and chip design tooling',
    skills: [
      { name: 'Xilinx Vivado', color: 'bg-orange-100 text-orange-700 border-orange-200' },
      { name: 'Cadence Genus', color: 'bg-red-100 text-red-700 border-red-200' },
      { name: 'Cadence Virtuoso', color: 'bg-rose-100 text-rose-700 border-rose-200' },
      { name: 'Yosys', color: 'bg-lime-100 text-lime-700 border-lime-200' },
      { name: 'Icarus Verilog', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
      { name: 'Arduino', color: 'bg-teal-100 text-teal-700 border-teal-200' },
    ],
  },
  {
    name: 'DevOps & Platforms',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    description: 'Infrastructure, containers, and operating systems',
    skills: [
      { name: 'Docker', color: 'bg-sky-100 text-sky-700 border-sky-200' },
      { name: 'Linux', color: 'bg-stone-100 text-stone-700 border-stone-200' },
      { name: 'PostgreSQL', color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
    ],
  },
  {
    name: 'Signal Processing & SDR',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    description: 'Radio frequency engineering and signal analysis',
    skills: [
      { name: 'GNU Radio', color: 'bg-purple-100 text-purple-700 border-purple-200' },
      { name: 'MATLAB', color: 'bg-orange-100 text-orange-700 border-orange-200' },
    ],
  },
  {
    name: 'AI & Databases',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    description: 'Vector search and AI infrastructure',
    skills: [
      { name: 'Pinecone', color: 'bg-violet-100 text-violet-700 border-violet-200' },
      { name: 'ChromaDB', color: 'bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200' },
    ],
  },
];

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white/70 backdrop-blur-2xl border border-pink-200/50 rounded-2xl p-7 cursor-default shadow-sm hover:shadow-[0_25px_60px_-15px_rgba(219,39,119,0.15)] transition-shadow duration-500"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-100/0 via-rose-50/0 to-purple-100/0 group-hover:from-pink-100/40 group-hover:via-rose-50/30 group-hover:to-purple-100/30 transition-all duration-500 pointer-events-none" />

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pink-200/30 to-transparent rounded-tr-2xl rounded-bl-[80px] pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <motion.div
            animate={{ rotate: isHovered ? 10 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-11 h-11 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white shadow-md shadow-pink-500/20"
          >
            {category.icon}
          </motion.div>
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-pink-700 transition-colors duration-300">
            {category.name}
          </h3>
        </div>

        <p className="text-gray-400 text-sm mb-5 pl-14">
          {category.description}
        </p>

        {/* Skill Pills */}
        <div className="flex flex-wrap gap-2.5 pl-14">
          {category.skills.map((skill, i) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.7, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.1 + i * 0.06 + 0.35, duration: 0.4, ease: 'easeOut' }}
              whileHover={{ scale: 1.1, y: -3 }}
              className={`text-sm px-4 py-2 rounded-full border font-semibold cursor-default select-none backdrop-blur-sm transition-shadow duration-300 hover:shadow-md ${skill.color}`}
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsWindow() {
  const totalSkills = categories.reduce((sum, cat) => sum + cat.skills.length, 0);

  return (
    <div className="h-full w-full flex flex-col overflow-hidden" style={{ background: 'linear-gradient(145deg, #fce4ec 0%, #fdf2f8 30%, #faf5ff 60%, #fce7f3 100%)' }}>

      {/* Header */}
      <div className="shrink-0 px-8 pt-8 pb-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-black text-gray-800 tracking-tight"
            >
              Technical{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-purple-400">
                Skills
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-gray-400 mt-2 text-sm font-medium tracking-wide"
            >
              ~/skills — From silicon to cloud
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
            className="text-right hidden md:flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-white/60 backdrop-blur-xl border border-pink-200/50 shadow-sm"
          >
            <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-pink-500 to-rose-600">
              {totalSkills}
            </div>
            <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
              Skills
            </div>
          </motion.div>
        </div>

        {/* Category count pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex flex-wrap gap-2"
        >
          {categories.map((cat, i) => (
            <motion.span
              key={cat.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="px-4 py-2 rounded-full bg-white/60 backdrop-blur-xl border border-pink-200/40 text-xs font-bold text-gray-500 shadow-sm"
            >
              {cat.name}
              <span className="ml-1.5 text-pink-500">{cat.skills.length}</span>
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Skills Grid */}
      <div className="flex-1 overflow-y-auto px-8 pb-8" style={{ scrollbarWidth: 'thin', scrollbarColor: '#f9a8d4 transparent' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <SkillCard key={category.name} category={category} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
