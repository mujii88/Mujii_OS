'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
};

const completedProjects: Project[] = [
  {
    title: 'RISC-V 32-bit Pipelined Processor',
    description: 'A complete 32-bit RISC-V microprocessor architecture featuring a fully pipelined datapath. Built to execute standard RISC-V instruction sets with optimized hazard handling and branch prediction.',
    tags: ['Verilog', 'Computer Architecture', 'RISC-V', 'Digital Design'],
    link: 'https://github.com/mujii88/RISC-V-32-bit-Pipelined-mp',
  },
  {
    title: 'Systolic Array Matrix Multiplier',
    description: 'High-speed hardware systolic array implemented in Verilog. Designed for highly parallel matrix multiplication operations, forming the core mathematical engine for modern machine learning hardware.',
    tags: ['Verilog', 'Hardware Acceleration', 'VLSI', 'DSP'],
    link: 'https://github.com/mujii88/systolic_array',
  },
  {
    title: 'TDOA Transmitter Localization',
    description: 'An advanced Time Difference of Arrival (TDOA) algorithm designed for multilateration. Capable of locating unknown radio frequency transmitters utilizing distributed Software Defined Radios (SDRs).',
    tags: ['Signal Processing', 'Python', 'GNU Radio', 'SDR', 'RF'],
    link: 'https://github.com/mujii88/TDOA',
  },
  {
    title: 'InstantRAG',
    description: 'A high-speed document intelligence platform and backend generator. Deploys custom Retrieval-Augmented Generation (RAG) pipelines for chatbots in under 10 seconds without requiring external backend orchestration.',
    tags: ['Next.js', 'FastAPI', 'RAG', 'LLM Infrastructure'],
    link: 'https://github.com/mujii88/InstantRAG_Frontend',
  },
  {
    title: 'Transformer Architecture (From Scratch)',
    description: 'A foundational, from-scratch implementation of the groundbreaking "Attention Is All You Need" paper, modeling multi-head self-attention mechanisms and encoder-decoder stacks.',
    tags: ['Python', 'Deep Learning', 'NLP', 'PyTorch'],
    link: 'https://github.com/mujii88/Transformer_Architecture',
  },
  {
    title: 'VIGIL Global Radar System',
    description: 'A robust global radar and network telemetry backend. Designed as a highly scalable microservice architecture to process, monitor, and visualize real-time network states.',
    tags: ['Go', 'Microservices', 'PostgreSQL', 'PostGIS', 'Docker'],
    link: 'https://github.com/mujii88/VIGIL_Backend',
  },
  {
    title: 'Buildtop',
    description: 'A high-performance, real-time Linux system monitor and interactive process manager engineered natively in Go. Built for speed and minimal resource overhead.',
    tags: ['Go', 'Linux Internals', 'CLI', 'Systems Programming'],
    link: 'https://github.com/mujii88/buildtop',
  },
];

const ongoingProjects: Project[] = [
  {
    title: 'LeetVari',
    description: 'An online judge platform specifically tailored for Hardware Description Languages (Verilog, SystemVerilog, VHDL). Features a secure execution pipeline utilizing Yosys and Docker runners.',
    tags: ['Go', 'Docker', 'Next.js', 'Yosys', 'HDL'],
    link: 'https://github.com/mujii88/LeetVari',
  },
  {
    title: 'NPU Accelerator with AXI4',
    description: 'A cutting-edge Neural Processing Unit accelerator integrated with the AXI4 bus protocol. Designed to bridge high-speed memory interfaces with custom hardware matrix engines.',
    tags: ['SystemVerilog', 'AXI4 Protocol', 'NPU', 'Digital Chip Design'],
    link: 'https://github.com/mujii88/NPU-Accelerator-with-AXI4',
  },
];

const tagColors: Record<string, string> = {
  'Verilog': 'bg-rose-100/60 text-rose-700 border-rose-200/80',
  'SystemVerilog': 'bg-rose-100/60 text-rose-700 border-rose-200/80',
  'Go': 'bg-teal-100/60 text-teal-700 border-teal-200/80',
  'Python': 'bg-amber-100/60 text-amber-700 border-amber-200/80',
  'Next.js': 'bg-gray-100/60 text-gray-700 border-gray-200/80',
  'Docker': 'bg-sky-100/60 text-sky-700 border-sky-200/80',
  'PostgreSQL': 'bg-indigo-100/60 text-indigo-700 border-indigo-200/80',
  'RISC-V': 'bg-orange-100/60 text-orange-700 border-orange-200/80',
  'FastAPI': 'bg-emerald-100/60 text-emerald-700 border-emerald-200/80',
  'PyTorch': 'bg-red-100/60 text-red-700 border-red-200/80',
  'GNU Radio': 'bg-purple-100/60 text-purple-700 border-purple-200/80',
  'Computer Architecture': 'bg-violet-100/60 text-violet-700 border-violet-200/80',
  'Digital Design': 'bg-fuchsia-100/60 text-fuchsia-700 border-fuchsia-200/80',
  'Hardware Acceleration': 'bg-cyan-100/60 text-cyan-700 border-cyan-200/80',
  'VLSI': 'bg-blue-100/60 text-blue-700 border-blue-200/80',
  'DSP': 'bg-lime-100/60 text-lime-700 border-lime-200/80',
  'Signal Processing': 'bg-emerald-100/60 text-emerald-700 border-emerald-200/80',
  'SDR': 'bg-teal-100/60 text-teal-700 border-teal-200/80',
  'RF': 'bg-cyan-100/60 text-cyan-700 border-cyan-200/80',
  'RAG': 'bg-violet-100/60 text-violet-700 border-violet-200/80',
  'LLM Infrastructure': 'bg-purple-100/60 text-purple-700 border-purple-200/80',
  'Deep Learning': 'bg-orange-100/60 text-orange-700 border-orange-200/80',
  'NLP': 'bg-yellow-100/60 text-yellow-700 border-yellow-200/80',
  'Microservices': 'bg-sky-100/60 text-sky-700 border-sky-200/80',
  'PostGIS': 'bg-green-100/60 text-green-700 border-green-200/80',
  'Linux Internals': 'bg-stone-100/60 text-stone-700 border-stone-200/80',
  'CLI': 'bg-gray-100/60 text-gray-700 border-gray-200/80',
  'Systems Programming': 'bg-zinc-100/60 text-zinc-700 border-zinc-200/80',
  'Yosys': 'bg-lime-100/60 text-lime-700 border-lime-200/80',
  'HDL': 'bg-blue-100/60 text-blue-700 border-blue-200/80',
  'AXI4 Protocol': 'bg-indigo-100/60 text-indigo-700 border-indigo-200/80',
  'NPU': 'bg-fuchsia-100/60 text-fuchsia-700 border-fuchsia-200/80',
  'Digital Chip Design': 'bg-pink-100/60 text-pink-700 border-pink-200/80',
};

function getTagColor(tag: string): string {
  return tagColors[tag] || 'bg-pink-100/60 text-pink-700 border-pink-200/80';
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      className="group relative bg-white/70 backdrop-blur-2xl border border-pink-200/50 rounded-2xl p-7 cursor-pointer shadow-sm hover:shadow-[0_25px_60px_-15px_rgba(219,39,119,0.15)] transition-shadow duration-500"
    >
      {/* Hover glow overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-100/0 via-rose-50/0 to-purple-100/0 group-hover:from-pink-100/40 group-hover:via-rose-50/30 group-hover:to-purple-100/30 transition-all duration-500 pointer-events-none" />

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pink-200/30 to-transparent rounded-tr-2xl rounded-bl-[80px] pointer-events-none" />

      <div className="relative z-10">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-700 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-5 group-hover:text-gray-600 transition-colors duration-300">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.08 + i * 0.05 + 0.3 }}
              className={`text-xs px-3 py-1.5 rounded-full border font-medium backdrop-blur-sm ${getTagColor(tag)}`}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* GitHub Button */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm font-semibold shadow-md shadow-pink-500/20 hover:shadow-lg hover:shadow-pink-500/30 hover:from-pink-600 hover:to-rose-600 transition-all duration-300 group/btn"
        >
          <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-12" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
          View Source
          <svg className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

export default function ProjectWindow() {
  const [activeTab, setActiveTab] = useState<'completed' | 'ongoing'>('completed');
  const projects = activeTab === 'completed' ? completedProjects : ongoingProjects;

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
              Project{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-purple-400">
                Portfolio
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-gray-400 mt-2 text-sm font-medium tracking-wide"
            >
              ~/projects — Engineering at the intersection of hardware &amp; software
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
            className="text-right hidden md:flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-white/60 backdrop-blur-xl border border-pink-200/50 shadow-sm"
          >
            <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-pink-500 to-rose-600">
              {projects.length}
            </div>
            <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
              {activeTab === 'completed' ? 'Done' : 'Active'}
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex gap-1 bg-white/50 backdrop-blur-xl rounded-2xl p-1.5 border border-pink-200/40 max-w-xs shadow-sm"
        >
          <button
            onClick={() => setActiveTab('completed')}
            className={`flex-1 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
              activeTab === 'completed'
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/25'
                : 'text-gray-400 hover:text-gray-600 hover:bg-white/50'
            }`}
          >
            Completed
            <span className="ml-1.5 text-xs opacity-70">({completedProjects.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('ongoing')}
            className={`flex-1 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
              activeTab === 'ongoing'
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/25'
                : 'text-gray-400 hover:text-gray-600 hover:bg-white/50'
            }`}
          >
            Ongoing
            <span className="ml-1.5 text-xs opacity-70">({ongoingProjects.length})</span>
          </button>
        </motion.div>
      </div>

      {/* Project Grid */}
      <div className="flex-1 overflow-y-auto px-8 pb-8" style={{ scrollbarWidth: 'thin', scrollbarColor: '#f9a8d4 transparent' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
