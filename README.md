<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=fbcfe8&height=250&section=header&text=Mujii%20OS&fontSize=70&fontColor=be185d&animation=twinkling" />

  <a href="https://readme-typing-svg.demolab.com">
    <img src="https://readme-typing-svg.demolab.com?font=Inter&weight=800&size=30&duration=3000&pause=1000&color=EC4899&center=true&vCenter=true&width=600&lines=Inspired+By+Linux+Desktop;Built+For+The+Web;Bridging+Hardware+%26+Software" alt="Typing SVG" />
  </a>
  <br/>
  
  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-be185d?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-f472b6?style=for-the-badge&logo=react&logoColor=white" alt="React" />
    <img src="https://img.shields.io/badge/TailwindCSS-db2777?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind" />
    <img src="https://img.shields.io/badge/Framer_Motion-fbcfe8?style=for-the-badge&logo=framer&logoColor=be185d" alt="Framer Motion" />
  </p>
</div>

---

<br/>

## 🌸 The Concept

**Mujii OS** is a highly interactive, custom web-based operating system designed as a professional engineering portfolio. It ditches the standard scrolling website template in favor of an immersive, draggable, physics-based desktop environment.

It is heavily themed in a custom **"Pink Glassmorphism"** aesthetic, bridging the gap between low-level hardware engineering logic and high-end frontend design.

<br/>

## 🚀 Animated Features

- 🎀 **Cinematic Boot Sequence:** A fully animated, dot-matrix ASCII art terminal boot sequence mimicking a Linux kernel startup.
- 🎀 **Secure Lock Screen:** A frosted-glass authentication layer with dynamic blurring and micro-animations.
- 🎀 **Physics-Based Windows:** Fully draggable, minimizable, and maximizable application windows powered by `framer-motion` spring and tween physics.
- 🎀 **Orbital Skill Ring:** A complex CSS and Framer Motion orbital layout showcasing the technical stack (Go, Python, C++, Verilog, PostgreSQL).
- 🎀 **Simulated File System:** A working web terminal capable of reading simulated local directories.

<br/>

## 🧠 Zero-Lag Architecture

Mujii OS treats the browser DOM like a traditional window manager. 
- **`Desktop.tsx`** acts as the global orchestrator. It manages the Z-index stacking context, tracking which apps are open, minimized, or currently focused by the user.
- **`Window.tsx`** is a highly reusable higher-order container component. It injects a title bar, window controls, and complex drag-and-drop mechanics into any app component passed inside it.
- **Hardware Acceleration:** Traditional web animations rely heavily on the CPU. By strictly animating `transform` and `opacity` properties and utilizing `layout` IDs in Framer Motion, the OS maintains buttery smooth **60 FPS** even with heavy background blur filters active.

<br/>

## 🤝 Open Source & Inspiration

The web thrives on shared knowledge and creativity. This repository is open-sourced under the MIT License. 

You are highly encouraged to fork this repository, explore the window-management logic, and learn how the Framer Motion physics are orchestrated to build your own web apps.

> ⚠️ **A note on cloning:** Please do not simply clone this repository, change the name, and use it as your own portfolio. The pink aesthetic, the specific layouts, and the "Mujii OS" branding represent my personal brand. Take the *underlying architecture*, learn from the *code*, but **design your own unique experience!**

<br/>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=fbcfe8&height=100&section=footer" />
</div>
