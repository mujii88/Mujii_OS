export type FileSystem = {
  [path: string]: {
    [filename: string]: string;
  };
};

export const fileSystem: FileSystem = {
  "/": {
    "skills.txt": "Go, Python, C++, Verilog, SystemVerilog, PostgreSQL, Docker, GNU Radio",
    "hardware.txt": "AXI4, NPU, Digital Chip Design",
    "projects": "[DIR]",
  },
  "/projects": {
    "completed": "[DIR]",
    "ongoing": "[DIR]",
  },
  "/projects/completed": {
    "risc-v.txt": `╔══════════════════════════════════════════════════════════════╗
║  RISC-V 32-bit Pipelined Processor                         ║
╠══════════════════════════════════════════════════════════════╣
║  A complete 32-bit RISC-V microprocessor architecture       ║
║  featuring a fully pipelined datapath. Built to execute     ║
║  standard RISC-V instruction sets with optimized hazard     ║
║  handling and branch prediction.                            ║
╠══════════════════════════════════════════════════════════════╣
║  Stack: Verilog, Computer Architecture, RISC-V              ║
║  URL:   github.com/mujii88/RISC-V-32-bit-Pipelined-mp      ║
╚══════════════════════════════════════════════════════════════╝`,
    "systolic-array.txt": `╔══════════════════════════════════════════════════════════════╗
║  Systolic Array Matrix Multiplier                           ║
╠══════════════════════════════════════════════════════════════╣
║  High-speed hardware systolic array implemented in Verilog. ║
║  Designed for highly parallel matrix multiplication         ║
║  operations, forming the core mathematical engine for       ║
║  modern machine learning hardware.                          ║
╠══════════════════════════════════════════════════════════════╣
║  Stack: Verilog, Hardware Acceleration, VLSI, DSP           ║
║  URL:   github.com/mujii88/systolic_array                   ║
╚══════════════════════════════════════════════════════════════╝`,
    "tdoa.txt": `╔══════════════════════════════════════════════════════════════╗
║  TDOA Transmitter Localization                              ║
╠══════════════════════════════════════════════════════════════╣
║  An advanced Time Difference of Arrival (TDOA) algorithm    ║
║  designed for multilateration. Capable of locating unknown  ║
║  radio frequency transmitters utilizing distributed SDRs.   ║
╠══════════════════════════════════════════════════════════════╣
║  Stack: Signal Processing, Python, GNU Radio, SDR, RF       ║
║  URL:   github.com/mujii88/TDOA                             ║
╚══════════════════════════════════════════════════════════════╝`,
    "instantrag.txt": `╔══════════════════════════════════════════════════════════════╗
║  InstantRAG                                                 ║
╠══════════════════════════════════════════════════════════════╣
║  A high-speed document intelligence platform and backend    ║
║  generator. Deploys custom RAG pipelines for chatbots in    ║
║  under 10 seconds without external backend orchestration.   ║
╠══════════════════════════════════════════════════════════════╣
║  Stack: Next.js, FastAPI, RAG, LLM Infrastructure           ║
║  URL:   github.com/mujii88/InstantRAG_Frontend              ║
╚══════════════════════════════════════════════════════════════╝`,
    "transformer.txt": `╔══════════════════════════════════════════════════════════════╗
║  Transformer Architecture (From Scratch)                    ║
╠══════════════════════════════════════════════════════════════╣
║  A foundational, from-scratch implementation of the         ║
║  "Attention Is All You Need" paper, modeling multi-head     ║
║  self-attention mechanisms and encoder-decoder stacks.       ║
╠══════════════════════════════════════════════════════════════╣
║  Stack: Python, Deep Learning, NLP, PyTorch                 ║
║  URL:   github.com/mujii88/Transformer_Architecture         ║
╚══════════════════════════════════════════════════════════════╝`,
    "vigil.txt": `╔══════════════════════════════════════════════════════════════╗
║  VIGIL Global Radar System                                  ║
╠══════════════════════════════════════════════════════════════╣
║  A robust global radar and network telemetry backend.       ║
║  Designed as a highly scalable microservice architecture    ║
║  to process, monitor, and visualize real-time states.       ║
╠══════════════════════════════════════════════════════════════╣
║  Stack: Go, Microservices, PostgreSQL, PostGIS, Docker      ║
║  URL:   github.com/mujii88/VIGIL_Backend                    ║
╚══════════════════════════════════════════════════════════════╝`,
    "buildtop.txt": `╔══════════════════════════════════════════════════════════════╗
║  Buildtop                                                   ║
╠══════════════════════════════════════════════════════════════╣
║  A high-performance, real-time Linux system monitor and     ║
║  interactive process manager engineered natively in Go.     ║
║  Built for speed and minimal resource overhead.             ║
╠══════════════════════════════════════════════════════════════╣
║  Stack: Go, Linux Internals, CLI, Systems Programming       ║
║  URL:   github.com/mujii88/buildtop                         ║
╚══════════════════════════════════════════════════════════════╝`,
  },
  "/projects/ongoing": {
    "leetvari.txt": `╔══════════════════════════════════════════════════════════════╗
║  LeetVari                                                   ║
╠══════════════════════════════════════════════════════════════╣
║  An online judge platform specifically tailored for HDLs    ║
║  (Verilog, SystemVerilog, VHDL). Features a secure          ║
║  execution pipeline utilizing Yosys and Docker runners.     ║
╠══════════════════════════════════════════════════════════════╣
║  Stack: Go, Docker, Next.js, Yosys, HDL                     ║
║  URL:   github.com/mujii88/LeetVari                         ║
╚══════════════════════════════════════════════════════════════╝`,
    "npu-accelerator.txt": `╔══════════════════════════════════════════════════════════════╗
║  NPU Accelerator with AXI4                                  ║
╠══════════════════════════════════════════════════════════════╣
║  A cutting-edge Neural Processing Unit accelerator          ║
║  integrated with the AXI4 bus protocol. Designed to bridge  ║
║  high-speed memory interfaces with custom hardware          ║
║  matrix engines.                                            ║
╠══════════════════════════════════════════════════════════════╣
║  Stack: SystemVerilog, AXI4 Protocol, NPU, Chip Design      ║
║  URL:   github.com/mujii88/NPU-Accelerator-with-AXI4        ║
╚══════════════════════════════════════════════════════════════╝`,
  },
};
