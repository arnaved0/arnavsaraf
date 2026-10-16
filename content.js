/* EDIT YOUR PORTFOLIO HERE
 * No build tools are needed. Save this file and refresh index.html.
 *
 * ADD: Copy one complete { ... } block and paste it inside the same list.
 * REMOVE: Delete its entire { ... } block.
 * REORDER: Move blocks up or down. Entries appear in the same order as this file.
 * Keep a comma after each block. A trailing comma is allowed.
 * Text goes inside quotes. For a quote inside text, use \" or use single quotes.
 * New cards and jobs automatically fit into the page layout.
 */
window.portfolioContent = {

  // PROJECTS: Add, remove or rearrange the blocks below.
  projects: [
    // PROJECT 1
    {
      title: "1.09 GHz Aviation Receiver",
      category: "RF & software-defined radio",
      // CHANGE COVER IMAGE: Put your photo in assets/ and change this path.
      image: "assets/aviation.png",
      // Describe your cover image here for accessibility.
      imageAlt: "Illustrated aircraft and radio signal arcs",
      link: "https://docs.google.com/document/d/1nEfThNBL2hFGmHhkD_LWBQplTAdufMOF/edit",
      description: "This project features the design and implementation of an aviation receiver system tailored to capture Automatic Dependent Surveillance-Broadcast (ADS-B) transmissions at 1.09 GHz. The hardware integrates a custom microstrip patch antenna modeled with a coupled-line bandpass filter and simulated in Ansys HFSS. This optimized front-end interfaces directly with a Software-Defined Radio (SDR) to decode real-time aircraft telemetry.",
    },
    // PROJECT 2  
    {
      title: "High Frequency Doppler Radar",
      category: "RF & analog electronics",
      // CHANGE COVER IMAGE: Put your photo in assets/ and change this path.
      image: "assets/radar.png",
      // Describe your cover image here for accessibility.
      imageAlt: "Illustrated radar sweep and detected targets",
      link: "https://docs.google.com/document/d/1bPIoLNgSs5qAKqPfghf8_KdPklqAOcG8/edit",
      description: "This project develops a 2.4 GHz continuous-wave (CW) Doppler radar intended to estimate the speed of moving objects. A shared RF oscillator drives the transmitting antenna and serves as the local oscillator for a receiver mixer. The Doppler-shifted echo is translated to a low-frequency signal, conditioned using analog filters and amplifiers, and prepared for processing by an Arduino Nano.",
    },
    // PROJECT 3
    {
      title: "FPGA Heart Rate Monitor",
      category: "FPGA & signal processing",
      // CHANGE COVER IMAGE: Put your photo in assets/ and change this path.
      image: "assets/fpga.png",
      // Describe your cover image here for accessibility.
      imageAlt: "Illustrated digital chip and pulse waveform",
      link: "https://docs.google.com/document/d/13BJlaQaq8XgfFDfZAPOtqQ4pkigBaaWg/edit",
      description: "Designed an FPGA-based PPG heart rate monitor that processes real-time pulse signals, detects heartbeats, calculates intervals, and outputs a smoothed BPM value. The project includes digital filtering, adaptive peak detection, moving-average BPM calculation, and an SPI interface for reading a 12-bit external ADC. MATLAB and Questa were used to validate the design before a real-life test.",
    },
  ],

  // EXPERIENCES: Copy or delete one whole block, including its bullets list.
  experiences: [
    // EXPERIENCE 1
    {
      company: "Quantum Technology Corp.",
      role: "Electrical Engineering Intern",
      // Add or remove bullet points by adding or deleting a quoted line.
      bullets: [
        "Designed and assembled control panels in AutoCAD Electrical for industrial gas systems, following applicable IEC, CSA and UL requirements.",
        "Integrated PLCs, instrumentation, motor starters, VFDs and power distribution equipment.",
        "Tested panels and PCBs using oscilloscopes and bench equipment; documented quality-control results.",
        "Led electrical design for a mobile helium recovery system, including 480 V power distribution and purity and flow monitoring.",
        "Participated in HAZOP discussions and prepared an electrical safety presentation.",
      ],
    },
    // EXPERIENCE 2
    {
      company: "MPI Morheat",
      role: "Electrical Engineering Intern",
      // Add or remove bullet points by adding or deleting a quoted line.
      bullets: [
        "Automated heater power calculations and quoting workflows using Java and Python.",
        "Drafted sensor and heater concepts and incorporated design revisions in AutoCAD and Fusion 360.",
        "Soldered connectors for RTD and thermocouple sensor assemblies.",
      ],
    },
  ],
};
