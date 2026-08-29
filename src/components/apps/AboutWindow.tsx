'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutWindow() {
  return (
    <div className="h-full w-full flex flex-col overflow-hidden" style={{ background: 'linear-gradient(145deg, #fce4ec 0%, #fdf2f8 30%, #faf5ff 60%, #fce7f3 100%)' }}>
      
      {/* Header */}
      <div className="shrink-0 px-8 pt-8 pb-4">
        <div className="flex items-center justify-between mb-2">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-black text-gray-800 tracking-tight"
            >
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-purple-400">
                Me
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-gray-400 mt-2 text-sm font-medium tracking-wide"
            >
              ~/about — The intersection of hardware and software
            </motion.p>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto px-8 pb-12" style={{ scrollbarWidth: 'thin', scrollbarColor: '#f9a8d4 transparent' }}>
        <div className="max-w-4xl mx-auto space-y-8 mt-4">
          
          {/* Main Intro Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative bg-white/70 backdrop-blur-2xl border border-pink-200/50 rounded-3xl p-8 md:p-10 shadow-sm overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-300/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
              <div className="w-32 h-32 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-xl shadow-pink-500/20">
                <Image 
                  src="/profile.jpg" 
                  alt="Mujtaba Ahmed" 
                  width={128} 
                  height={128} 
                  className="w-full h-full object-cover transform scale-[1.02]"
                />
              </div>
              
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  Mujtaba Ahmed
                </h2>
                <h3 className="text-lg text-pink-500 font-semibold mb-4">
                  Software &amp; Hardware Engineer
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-2xl text-sm md:text-base">
                  I specialize in designing high-performance systems from the silicon level up to the cloud. Whether it&apos;s architecting distributed backends in Go, building digital chip designs with Verilog, or creating intelligent Agentic AI frameworks, I thrive at the complex boundaries where hardware meets software.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education & Transcript Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group bg-white/70 backdrop-blur-2xl border border-pink-200/50 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pink-200/30 to-transparent rounded-tr-2xl rounded-bl-[80px] pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-purple-500/20">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800">Education</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors">National University of Sciences and Technology (NUST)</h4>
                  <p className="text-gray-500 text-sm mt-1">Bachelor of Science in Electrical Engineering</p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                  <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">2022 — May 2026</span>
                  <div className="flex items-center gap-1.5 bg-purple-50 text-purple-700 px-3 py-1 rounded-full border border-purple-100 font-bold text-sm shadow-sm shadow-purple-500/10">
                    <span>CGPA:</span>
                    <span className="text-purple-900">3.51</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Transcript Card */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group bg-white/70 backdrop-blur-2xl border border-pink-200/50 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pink-200/30 to-transparent rounded-tr-2xl rounded-bl-[80px] pointer-events-none" />
              
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white shadow-md shadow-pink-500/20">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Academic Records</h3>
                </div>
                <p className="text-gray-500 text-sm mb-6">
                  View my official academic transcript detailing coursework, credits, and academic performance throughout my degree at NUST.
                </p>
              </div>

              <a
                href="/transcript.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm font-bold shadow-md shadow-pink-500/20 hover:shadow-lg hover:shadow-pink-500/30 hover:from-pink-600 hover:to-rose-600 transition-all duration-300 group/btn"
              >
                <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Official Transcript
              </a>
            </motion.div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
