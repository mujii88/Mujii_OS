# Mujii OS

> **Inspired by Linux Desktop, Built for the Web.**

Mujii OS is a highly interactive, custom web-based operating system designed as a professional engineering portfolio. It bridges the gap between low-level hardware engineering logic and high-end frontend aesthetic design.

Built entirely from scratch, it ditches the standard scrolling website template in favor of an immersive, draggable, physics-based desktop environment.

## 🚀 Features

- **Cinematic Boot Sequence:** A fully animated, dot-matrix ASCII art terminal boot sequence mimicking a Linux kernel startup.
- **Secure Lock Screen:** A frosted-glass authentication layer with dynamic blurring and micro-animations.
- **Physics-Based Windows:** Fully draggable, minimizable, and maximizable application windows powered by `framer-motion` spring and tween physics.
- **Orbital Skill Ring:** A complex CSS and Framer Motion orbital layout showcasing the technical stack (Go, Python, C++, Verilog, PostgreSQL).
- **Simulated File System & Terminal:** A working web terminal capable of reading simulated local directories and executing basic commands.
- **Glassmorphism UI:** Heavy use of backdrop-blur, gradient meshes, and glowing drop-shadows to create a premium, tactile feel.
- **Zero-Lag Architecture:** Carefully optimized transitions using `will-change` hardware acceleration and tween curves to prevent layout thrashing on heavy DOM elements.

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS 
- **Animation Engine:** Framer Motion (Layout Animations & Gesture Tracking)
- **Language:** TypeScript

## 🧠 Architecture & Strategy

Mujii OS treats the browser DOM like a traditional window manager. 
- **`Desktop.tsx`** acts as the global orchestrator. It manages the Z-index stacking context, tracking which apps are open, minimized, or currently focused by the user.
- **`Window.tsx`** is a highly reusable higher-order container component. It injects a title bar, window controls, and complex drag-and-drop mechanics into any app component passed inside it.
- **Hardware Acceleration:** Traditional web animations rely heavily on the CPU. By strictly animating `transform` and `opacity` properties and utilizing `layout` IDs in Framer Motion, the OS maintains buttery smooth 60 FPS even with heavy background blur filters active.

## 🤝 Open Source & Inspiration

The web thrives on shared knowledge and creativity. This repository is open-sourced under the MIT License. 

You are highly encouraged to fork this repository, explore the window-management logic, and learn how the Framer Motion physics are orchestrated to build your own web apps.

**A note on cloning:** Please do not simply clone this repository, change the name, and use it as your own portfolio. The pink aesthetic, the specific layouts, and the "Mujii OS" branding represent my personal brand. Take the *underlying architecture*, learn from the *code*, but **design your own unique experience!**

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
