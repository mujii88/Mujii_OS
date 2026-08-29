'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactWindow() {
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
              Get in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-purple-400">
                Touch
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-gray-400 mt-2 text-sm font-medium tracking-wide"
            >
              ~/contact — Let&apos;s build high-performance systems together
            </motion.p>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 flex items-center justify-center p-8 overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: '#f9a8d4 transparent' }}>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
          
          {/* Email */}
          <motion.a
            href="mailto:mujtabakhan1036k@gmail.com"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative bg-white/70 backdrop-blur-2xl border border-pink-200/50 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100/0 via-rose-50/0 to-purple-100/0 group-hover:from-pink-100/40 group-hover:via-rose-50/30 group-hover:to-purple-100/30 transition-all duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors">Email</h3>
                <p className="text-gray-500 mt-1 font-medium">mujtabakhan1036k@gmail.com</p>
              </div>
            </div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/mujtaba-ahmed-488ba7280/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative bg-white/70 backdrop-blur-2xl border border-pink-200/50 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100/0 via-rose-50/0 to-purple-100/0 group-hover:from-pink-100/40 group-hover:via-rose-50/30 group-hover:to-purple-100/30 transition-all duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">LinkedIn</h3>
                <p className="text-gray-500 mt-1 font-medium">Connect Professionally</p>
              </div>
            </div>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/mujii88"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative bg-white/70 backdrop-blur-2xl border border-pink-200/50 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100/0 via-rose-50/0 to-purple-100/0 group-hover:from-pink-100/40 group-hover:via-rose-50/30 group-hover:to-purple-100/30 transition-all duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white shadow-lg shadow-gray-900/20 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">GitHub</h3>
                <p className="text-gray-500 mt-1 font-medium">@mujii88</p>
              </div>
            </div>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:03175159949"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative bg-white/70 backdrop-blur-2xl border border-pink-200/50 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100/0 via-rose-50/0 to-purple-100/0 group-hover:from-pink-100/40 group-hover:via-rose-50/30 group-hover:to-purple-100/30 transition-all duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/20 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-teal-600 transition-colors">Phone</h3>
                <p className="text-gray-500 mt-1 font-medium">0317-5159949</p>
              </div>
            </div>
          </motion.a>

        </div>
      </div>
    </div>
  );
}
