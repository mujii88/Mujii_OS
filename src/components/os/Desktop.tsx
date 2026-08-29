'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import DesktopIcon from './DesktopIcon';
import Window from './Window';
import Terminal from '../apps/Terminal';
import ProjectWindow from '../apps/ProjectWindow';
import AboutWindow from '../apps/AboutWindow';
import ContactWindow from '../apps/ContactWindow';
import SkillsWindow from '../apps/SkillsWindow';
import CompetitiveWindow from '../apps/CompetitiveWindow';

export default function Desktop() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [isCompetitiveOpen, setIsCompetitiveOpen] = useState(false);
  
  const [minimizedWindows, setMinimizedWindows] = useState<string[]>([]);
  
  // Track active window
  const [activeWindow, setActiveWindow] = useState<string | null>(null);

  const handleAppClick = (windowName: string, setOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
    setOpen(true);
    setMinimizedWindows(prev => prev.filter(w => w !== windowName));
    setActiveWindow(windowName);
  };

  const toggleMinimize = (windowName: string) => {
    if (minimizedWindows.includes(windowName)) {
      setMinimizedWindows(prev => prev.filter(w => w !== windowName));
      setActiveWindow(windowName);
    } else {
      setMinimizedWindows(prev => [...prev, windowName]);
      if (activeWindow === windowName) setActiveWindow(null);
    }
  };

  const openTerminal = () => handleAppClick('terminal', setIsTerminalOpen);
  const openProjects = () => handleAppClick('projects', setIsProjectsOpen);
  const openAbout = () => handleAppClick('about', setIsAboutOpen);
  const openContact = () => handleAppClick('contact', setIsContactOpen);
  const openSkills = () => handleAppClick('skills', setIsSkillsOpen);
  const openCompetitive = () => handleAppClick('competitive', setIsCompetitiveOpen);

  const closeTerminal = () => {
    setIsTerminalOpen(false);
    if (activeWindow === 'terminal') setActiveWindow(null);
  };

  const closeProjects = () => {
    setIsProjectsOpen(false);
    if (activeWindow === 'projects') setActiveWindow(null);
  };

  const closeAbout = () => {
    setIsAboutOpen(false);
    if (activeWindow === 'about') setActiveWindow(null);
  };

  const closeContact = () => {
    setIsContactOpen(false);
    if (activeWindow === 'contact') setActiveWindow(null);
  };

  const closeSkills = () => {
    setIsSkillsOpen(false);
    if (activeWindow === 'skills') setActiveWindow(null);
  };

  const closeCompetitive = () => {
    setIsCompetitiveOpen(false);
    if (activeWindow === 'competitive') setActiveWindow(null);
  };

  const bringToFront = (windowName: string) => {
    if (minimizedWindows.includes(windowName)) {
      toggleMinimize(windowName);
    } else {
      setActiveWindow(windowName);
    }
  };

  return (
    <div 
      className="relative w-screen h-screen overflow-hidden bg-[#fcd4dc] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/wallpaper.png')" }}
    >
      {/* OS Branding & Profile Layout */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 pointer-events-none z-0">
        
        {/* Left Side: Logo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 
            className="text-7xl md:text-9xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-gray-700 to-black drop-shadow-[0_5px_15px_rgba(0,0,0,0.2)] select-none"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Mujii OS
          </h1>
          <p className="mt-4 md:mt-2 text-gray-600 tracking-[0.3em] text-sm md:text-lg font-medium drop-shadow-sm select-none uppercase">
            Inspired By Linux Desktop
          </p>
        </div>

        {/* Right Side: 100% Match Animated Profile */}
        <div className="relative flex items-center justify-center shrink-0 mt-8 md:mt-0">
          
          {/* Orbiting Skills */}
          <div className="absolute inset-[-15px] md:inset-[-25px] pointer-events-none z-10">
            {[
              { name: 'Go', color: 'from-cyan-400 to-blue-500', shadow: 'shadow-[0_0_15px_rgba(6,182,212,0.6)]' },
              { name: 'Python', color: 'from-yellow-400 to-orange-500', shadow: 'shadow-[0_0_15px_rgba(245,158,11,0.6)]' },
              { name: 'C++', color: 'from-blue-500 to-indigo-500', shadow: 'shadow-[0_0_15px_rgba(99,102,241,0.6)]' },
              { name: 'Verilog', color: 'from-rose-400 to-pink-500', shadow: 'shadow-[0_0_15px_rgba(236,72,153,0.6)]' },
              { name: 'Docker', color: 'from-sky-400 to-blue-600', shadow: 'shadow-[0_0_15px_rgba(56,189,248,0.6)]' },
              { name: 'PostgreSQL', color: 'from-indigo-400 to-purple-500', shadow: 'shadow-[0_0_15px_rgba(168,85,247,0.6)]' },
            ].map((skill, index) => {
              const initialAngle = (index * 360) / 6;
              return (
                <motion.div
                  key={skill.name}
                  className="absolute inset-0"
                  animate={{ rotate: [initialAngle, initialAngle + 360] }}
                  transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                >
                  <motion.div
                    className={`absolute top-0 left-1/2 flex items-center justify-center px-2 py-1 md:px-3 md:py-1.5 rounded-full border border-white/50 text-[9px] md:text-[10px] font-bold text-white tracking-wide bg-gradient-to-br ${skill.color} ${skill.shadow}`}
                    style={{ x: '-50%', y: '-50%' }}
                    animate={{ rotate: [-initialAngle, -(initialAngle + 360)] }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                  >
                    {skill.name}
                  </motion.div>
                </motion.div>
              );
            })}
            
            {/* Dashed orbit ring with subtle pulsing */}
            <div className="absolute inset-0 rounded-full border-[2px] border-pink-400/80 border-dashed animate-pulse shadow-[0_0_15px_rgba(244,114,182,0.3)]" />
          </div>

          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-[0_10px_40px_rgba(236,72,153,0.3)] border-4 border-white/30 backdrop-blur-md select-none z-0">
            <Image 
              src="/profile.jpg" 
              alt="Animated Profile"
              width={320}
              height={320}
              className="w-full h-full object-cover transform scale-[1.02]"
              priority
            />
          </div>
        </div>

      </div>

      {/* Light overlay to keep the pink fresh while adding subtle contrast */}
      <div className="absolute inset-0 bg-white/20 pointer-events-none z-0"></div>


      {/* MacOS Style Bottom Dock */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-4 flex items-end gap-6 z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl">
        <DesktopIcon
          name="Terminal"
          onClick={openTerminal}
          icon={
            <div className={`w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center shadow-lg transition-transform hover:-translate-y-2 cursor-pointer border border-white/10 ${activeWindow === 'terminal' ? 'ring-2 ring-white/50' : ''}`}>
              <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          }
        />
        <DesktopIcon
          name="Projects"
          onClick={openProjects}
          icon={
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg transition-transform hover:-translate-y-2 cursor-pointer border border-white/20 ${activeWindow === 'projects' ? 'ring-2 ring-white/50' : ''}`}>
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
            </div>
          }
        />
        <DesktopIcon
          name="Skills"
          onClick={openSkills}
          icon={
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-lg transition-transform hover:-translate-y-2 cursor-pointer border border-white/20 ${activeWindow === 'skills' ? 'ring-2 ring-white/50' : ''}`}>
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          }
        />
        <DesktopIcon
          name="Coding"
          onClick={openCompetitive}
          icon={
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center shadow-lg transition-transform hover:-translate-y-2 cursor-pointer border border-white/20 ${activeWindow === 'competitive' ? 'ring-2 ring-white/50' : ''}`}>
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
          }
        />
        <DesktopIcon
          name="About"
          onClick={openAbout}
          icon={
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center shadow-lg transition-transform hover:-translate-y-2 cursor-pointer border border-white/20 ${activeWindow === 'about' ? 'ring-2 ring-white/50' : ''}`}>
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          }
        />
        <DesktopIcon
          name="Contact"
          onClick={openContact}
          icon={
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg transition-transform hover:-translate-y-2 cursor-pointer border border-white/20 ${activeWindow === 'contact' ? 'ring-2 ring-white/50' : ''}`}>
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          }
        />
      </div>

      {/* Windows */}
      <AnimatePresence>
        {isTerminalOpen && (
          <Window
            key="terminal"
            title="Terminal - one@mujii-os:~"
            onClose={closeTerminal}
            onMinimize={() => toggleMinimize('terminal')}
            isMinimized={minimizedWindows.includes('terminal')}
            isActive={activeWindow === 'terminal'}
            onClick={() => bringToFront('terminal')}
          >
            <Terminal />
          </Window>
        )}

        {isProjectsOpen && (
          <Window
            key="projects"
            title="Projects — ~/projects"
            onClose={closeProjects}
            onMinimize={() => toggleMinimize('projects')}
            isMinimized={minimizedWindows.includes('projects')}
            isActive={activeWindow === 'projects'}
            onClick={() => bringToFront('projects')}
            defaultMaximized={true}
          >
            <ProjectWindow />
          </Window>
        )}

        {isSkillsOpen && (
          <Window
            key="skills"
            title="Technical Skills — ~/skills"
            onClose={closeSkills}
            onMinimize={() => toggleMinimize('skills')}
            isMinimized={minimizedWindows.includes('skills')}
            isActive={activeWindow === 'skills'}
            onClick={() => bringToFront('skills')}
            defaultMaximized={true}
          >
            <SkillsWindow />
          </Window>
        )}

        {isCompetitiveOpen && (
          <Window
            key="competitive"
            title="Coding Profiles — ~/competitive"
            onClose={closeCompetitive}
            onMinimize={() => toggleMinimize('competitive')}
            isMinimized={minimizedWindows.includes('competitive')}
            isActive={activeWindow === 'competitive'}
            onClick={() => bringToFront('competitive')}
            defaultMaximized={true}
          >
            <CompetitiveWindow />
          </Window>
        )}

        {isAboutOpen && (
          <Window
            key="about"
            title="About Me — ~/about"
            onClose={closeAbout}
            onMinimize={() => toggleMinimize('about')}
            isMinimized={minimizedWindows.includes('about')}
            isActive={activeWindow === 'about'}
            onClick={() => bringToFront('about')}
            defaultMaximized={true}
          >
            <AboutWindow />
          </Window>
        )}

        {isContactOpen && (
          <Window
            key="contact"
            title="Contact — ~/contact"
            onClose={closeContact}
            onMinimize={() => toggleMinimize('contact')}
            isMinimized={minimizedWindows.includes('contact')}
            isActive={activeWindow === 'contact'}
            onClick={() => bringToFront('contact')}
            defaultMaximized={true}
          >
            <ContactWindow />
          </Window>
        )}
      </AnimatePresence>
    </div>
  );
}
