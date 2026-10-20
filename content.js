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
      description: "ADS-B receiver combining a custom patch antenna, bandpass filter and SDR to decode aircraft telemetry.",
    },
    // PROJECT 2  
    {
      title: "High Frequency Doppler Radar",
      category: "RF & analog electronics",
      // CHANGE COVER IMAGE: Put your photo in assets/ and change this path.
      image: "assets/radarlay.png",
      // Describe your cover image here for accessibility.
      imageAlt: "Illustrated radar sweep and detected targets",
      link: "https://docs.google.com/document/d/1bPIoLNgSs5qAKqPfghf8_KdPklqAOcG8/edit",
      description: "Continuous-wave radar that translates reflected RF signals into a conditioned Doppler signal for speed measurement.",
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
      description: "Real-time PPG processing with digital filtering, adaptive heartbeat detection, smoothed BPM and an SPI ADC interface.",
    },
  ],

  // EXPERIENCES: Copy or delete one whole block, including its bullets list.
  experiences: [
    // EXPERIENCE 1
    {
       company: "MPI Morheat",
      role: "Electrical Engineering Intern (Sept 2026 - Present)",
      // Add or remove bullet points by adding or deleting a quoted line.
      bullets: [
        "Automated heater power calculations and quoting workflows using Java and Python.",
        "Drafted sensor and heater concepts and incorporated design revisions in AutoCAD and Fusion 360.",
        "Soldered connectors for RTD and thermocouple sensor assemblies.",
      ],
    },
    // EXPERIENCE 2
    {
    company: "Quantum Technology Corp.",
      role: "Electrical Engineering Intern (Jan 2026 - May 2026)",
      // Add or remove bullet points by adding or deleting a quoted line.
      bullets: [
        "Designed and assembled control panels in AutoCAD Electrical for industrial gas systems, following applicable IEC, CSA and UL requirements.",
        "Integrated PLCs, instrumentation, motor starters, VFDs and power distribution equipment.",
        "Tested panels and PCBs using oscilloscopes and bench equipment; documented quality-control results.",
        "Led electrical design for a mobile helium recovery system, including 480 V power distribution and purity and flow monitoring.",
        "Participated in HAZOP discussions and prepared an electrical safety presentation.",
      ],
    },
  ],
};
