"use client";

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ArrowUpRight, 
  Github, 
  ExternalLink, 
  SlidersHorizontal, 
  Layers,
  X,
  CheckCircle2,
  Cpu,
  Info
} from 'lucide-react';
import { 
  LegalClarityVisual, 
  FlightControlVisual, 
  AircraftLandingVisual, 
  WiiewVisual, 
  AerisAiVisual, 
  RadarVisual, 
  DisplayfyVisual, 
  ObstacleCarVisual 
} from './ProjectVisuals';

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  category: 'AI & Web' | 'Aerospace & Control' | 'Embedded & Sensing';
  categoryLabel: string;
  tech: string[];
  github: string;
  liveDemo?: string;
  flagship?: boolean;
  highlights: string[];
  positioning: string;
  visualComponent: React.ReactNode;
  details: {
    problem: string;
    architecture: string;
    keyTakeaway: string;
  };
}

const PROJECTS: ProjectData[] = [
  {
    id: 'legal-clarity',
    number: '01',
    title: 'Legal Clarity',
    shortDesc: 'AI-powered legal document companion providing grounded explanations, structured analysis, and citations without legal advice claims.',
    category: 'AI & Web',
    categoryLabel: 'GenAI & Legal Intelligence',
    flagship: true,
    tech: ['Generative AI', 'Document Analysis', 'Context Grounding', 'Citations', 'Web Interface', 'Evaluation'],
    github: 'https://github.com/shr3y4n/legal-clarity',
    positioning: 'Flagship AI/Web project. Focuses on document understanding and context-grounded retrieval rather than unregulated legal counsel.',
    visualComponent: <LegalClarityVisual />,
    highlights: [
      'Strict grounding to source text with citation-aware responses',
      'Structured clause analysis & obligations extraction',
      'Non-advisory legal information tool with zero hallucinatory leap',
      'Modern responsive web UI optimized for rapid document navigation'
    ],
    details: {
      problem: 'Complex contracts and legal documents contain dense jargon and hidden liabilities that non-lawyers struggle to parse safely.',
      architecture: 'Document chunking pipeline connected to contextual GenAI models with citation validation to map answers directly to source clauses.',
      keyTakeaway: 'Engineered for reliability, transparent context provenance, and strict non-advisory positioning.'
    }
  },
  {
    id: 'flight-control-system',
    number: '02',
    title: 'Flight Control System — PID / LQR / MPC',
    shortDesc: 'Flight control simulation suite benchmarking classical, optimal, and predictive control strategies on aircraft pitch dynamics.',
    category: 'Aerospace & Control',
    categoryLabel: 'Aerospace & Control Systems',
    flagship: true,
    tech: ['PID Control', 'LQR', 'MPC', 'MATLAB / Simulation', 'Control Systems', 'Aircraft Dynamics'],
    github: 'https://github.com/shr3y4n/flight-control-simulation-pid-lqr-mpc',
    positioning: 'Aerospace and control systems research project evaluating performance, stability margins, and actuator limits under turbulence.',
    visualComponent: <FlightControlVisual />,
    highlights: [
      'Comparative benchmarking: Classical PID vs Optimal LQR vs Constrained MPC',
      'Aircraft longitudinal state-space modeling & pitch stability analysis',
      'Actuator saturation constraints & sensor disturbance rejection',
      'Engineering visualizations of dynamic responses'
    ],
    details: {
      problem: 'Aircraft longitudinal dynamics exhibit oscillatory modes (short period and phugoid) that require robust multi-controller stabilization.',
      architecture: 'State-space linearization around steady level flight, pole-placement and quadratic cost Riccati solver for LQR, receding horizon optimization for MPC.',
      keyTakeaway: 'Demonstrates trade-offs between implementation simplicity (PID), optimality (LQR), and hard state-constraint handling (MPC).'
    }
  },
  {
    id: 'aircraft-landing-rl',
    number: '03',
    title: 'Autonomous Aircraft Landing — Reinforcement Learning',
    shortDesc: 'Research simulation framework and verification harness exploring autonomous fixed-wing landing behavior via deep RL (TD3).',
    category: 'Aerospace & Control',
    categoryLabel: 'Reinforcement Learning & Aerospace',
    flagship: true,
    tech: ['Reinforcement Learning', 'Autonomous Aircraft', 'TD3 Algorithm', 'Simulation', 'Verification Harness', 'Aerospace Engineering'],
    github: 'https://github.com/shr3y4n/AircraftLandingRL',
    positioning: 'Research/simulation project exploring learned policies for the glide-slope approach and landing flare under crosswind conditions.',
    visualComponent: <AircraftLandingVisual />,
    highlights: [
      'Twin Delayed DDPG (TD3) policy actor-critic training framework',
      'Glide-slope tracking and flare envelope threshold guidance',
      'Crosswind disturbance injection and descent rate verification harness',
      'Transparent simulation-bound positioning without real-world overstatement'
    ],
    details: {
      problem: 'Autonomous landing is safety-critical; ground effect and crosswind shear require rapid continuous corrective elevator and thrust commands.',
      architecture: 'Custom aircraft dynamic simulation environment integrated with continuous action TD3 policy, conditioned on relative runway coordinates and sink rate.',
      keyTakeaway: 'Built a systematic verification harness to evaluate landing envelope safety bounds across wind variations.'
    }
  },
  {
    id: 'wiiew',
    number: '04',
    title: 'Wiiew',
    shortDesc: 'Experimental room sensing application exploring Wi-Fi Channel State Information (CSI) for camera-free human presence detection.',
    category: 'Embedded & Sensing',
    categoryLabel: 'ESP32 RF Sensing & IoT',
    tech: ['ESP32 CSI', 'Wi-Fi Channel State', 'Python', 'FastAPI', 'Web Dashboard', 'Signal Processing', 'RuView'],
    github: 'https://github.com/shr3y4n/Wiiew',
    positioning: 'Experimental contactless sensing system capturing subcarrier perturbations to infer room occupancy without invasive optical cameras.',
    visualComponent: <WiiewVisual />,
    highlights: [
      'ESP32 firmware capturing raw 802.11 CSI amplitude & phase variations',
      '56-subcarrier orthogonal frequency disturbance analysis',
      'FastAPI backend with streaming real-time room occupancy state',
      'Privacy-preserving room presence sensing mechanism'
    ],
    details: {
      problem: 'Indoor occupancy detection traditionally relies on optical cameras that compromise personal privacy in private spaces.',
      architecture: 'Wi-Fi RF packets transmitted between ESP32 nodes; multipath reflections caused by human body movement perturb subcarrier amplitudes.',
      keyTakeaway: 'Demonstrates contactless presence detection through bare-metal RF signal telemetry and fast web service delivery.'
    }
  },
  {
    id: 'aeris-ai',
    number: '05',
    title: 'Aeris AI',
    shortDesc: 'Smart environmental air-quality and health-monitoring station combining multi-sensor embedded hardware, cloud telemetry, and Gemini AI.',
    category: 'Embedded & Sensing',
    categoryLabel: 'IoT + Embedded Systems + AI',
    tech: ['Arduino UNO R4 WiFi', 'SDS011 Sensor', 'MQ Gas Sensors', 'DHT22', 'Firebase', 'ThingSpeak', 'Gemini API'],
    github: 'https://github.com/shr3y4n/AERIS-AI-V1.0',
    positioning: 'IoT + AI + embedded hardware project measuring real particulate and chemical indices with cloud sync and generative intelligence.',
    visualComponent: <AerisAiVisual />,
    highlights: [
      'Multi-sensor integration: SDS011 (PM2.5/PM10 laser scattering) + MQ gas sensors',
      'Arduino UNO R4 WiFi firmware with telemetry serialization',
      'Real-time cloud sync to Firebase and ThingSpeak analytics channels',
      'Gemini API integration for localized air-quality insight and hazard warnings'
    ],
    details: {
      problem: 'Commercial air monitors offer black-box readings without actionable health context or localized trend explanations.',
      architecture: 'Microcontroller reads UART/Analog sensor data, calculates US-EPA AQI sub-indices, pushes to cloud telemetry, and requests AI summaries for hazardous trends.',
      keyTakeaway: 'Practical integration of physical sensor engineering, cloud telemetry, and generative AI advisory synthesis.'
    }
  },
  {
    id: 'arduino-radar-system',
    number: '06',
    title: 'Arduino Radar System',
    shortDesc: 'Miniature radar obstacle-detection system integrating Arduino hardware, HC-SR04 ultrasonic sensor, SG90 servo, and PC visualization.',
    category: 'Embedded & Sensing',
    categoryLabel: 'Embedded Systems & Robotics',
    tech: ['Arduino', 'Embedded Systems', 'Ultrasonic HC-SR04', 'Servo SG90', 'Radar GUI', 'Hardware Integration'],
    github: 'https://github.com/shr3y4n/Arduino-Radar-System',
    positioning: 'Hardware/software integration project executing 180° spatial sweeps and mapping obstacle distance to a PC-based radar display.',
    visualComponent: <RadarVisual />,
    highlights: [
      '180-degree continuous servo motor sweep mechanism',
      'Ultrasonic pulse timing to distance conversion with microsecond accuracy',
      'Serial data streaming protocol transmitting (angle, distance) pairs',
      'Real-time polar PPI radar display rendering detected obstacles'
    ],
    details: {
      problem: 'Creating low-cost educational spatial obstacle sensing using accessible hardware components.',
      architecture: 'Arduino executes synchronized PWM servo stepped angles and ultrasonic echo pulses; serial stream feeds a graphical radar renderer.',
      keyTakeaway: 'Fundamental sensor timing, actuator control, and cross-platform serial communication implementation.'
    }
  },
  {
    id: 'display-fy',
    number: '07',
    title: 'Display-fy',
    shortDesc: 'Embedded IoT companion displaying live Spotify track metadata and synchronized lyrics on a monochrome OLED display via APIs.',
    category: 'Embedded & Sensing',
    categoryLabel: 'Embedded UI & Hardware',
    tech: ['Arduino', 'SSD1306 OLED', 'Spotify Web API', 'Genius API', 'Embedded UI', 'Hardware/Software'],
    github: 'https://github.com/shr3y4n/Display-fy',
    positioning: 'Hardware/software desktop companion delivering an ambient music and synchronized lyric reading experience on physical hardware.',
    visualComponent: <DisplayfyVisual />,
    highlights: [
      'SSD1306 128x64 monochrome OLED I2C display buffer management',
      'Spotify Web API OAuth integration for live player telemetry',
      'Genius API / lyric scraping and timestamp synchronization',
      'Compact embedded desktop gadget hardware assembly'
    ],
    details: {
      problem: 'Accessing lyrics and music metadata requires switching desktop app windows or opening a smartphone.',
      architecture: 'Backend service monitors Spotify playback status, fetches synchronized lyrics, and streams formatted text buffers over serial/I2C to the OLED controller.',
      keyTakeaway: 'End-to-end integration of cloud audio APIs, text synchronization algorithms, and small-screen embedded UI rendering.'
    }
  },
  {
    id: 'obstacle-avoiding-car',
    number: '08',
    title: 'Obstacle Avoiding Car',
    shortDesc: 'Autonomous robot car powered by Arduino, ultrasonic sensor, and dual-motor driver for real-time collision detection and path correction.',
    category: 'Embedded & Sensing',
    categoryLabel: 'Robotics & Motor Control',
    tech: ['Arduino', 'Ultrasonic Sensing', 'L298N Motor Driver', 'Robotics', 'Embedded C++', 'Autonomous Navigation'],
    github: 'https://github.com/shr3y4n/Obstacle-Avoiding-Car-with-Arduino',
    positioning: 'Foundational autonomous robotics platform testing real-time ultrasonic ranging, threshold braking, and differential drive steering.',
    visualComponent: <ObstacleCarVisual />,
    highlights: [
      'Autonomous obstacle boundary detection using ultrasonic sonar pings',
      'Differential drive DC motor steering logic with L298N H-Bridge controller',
      'Dynamic threshold safety distance check & reverse-pivot escape routines',
      'Self-contained chassis wiring and battery-powered power distribution'
    ],
    details: {
      problem: 'Autonomous mobile navigation in unstructured ground environments without pre-mapped paths.',
      architecture: 'Main loop polls distance readings; if obstacle < 20cm, triggers braking vector, evaluates left/right clearance, and commands differential wheel speeds.',
      keyTakeaway: 'Core embedded control loops, reactive behavior trees, and physical motor actuation.'
    }
  }
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectData | null>(null);

  const categories = ['All', 'AI & Web', 'Aerospace & Control', 'Embedded & Sensing'];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.shortDesc.toLowerCase().includes(q) ||
        project.tech.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="projects"
      aria-label="Recent Featured Projects"
      className="py-24 px-6 border-b border-white/[0.05]"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="font-mono text-xs text-blue-400 tracking-widest uppercase block mb-2">
              02 // Featured Engineering
            </span>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Recent Projects
            </h2>
            <p className="text-xs text-slate-400 mt-2 max-w-lg leading-relaxed">
              Curated projects showcasing technical depth across autonomous flight simulation, embedded sensing, control algorithms, and grounded AI.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-md px-3.5 py-1.5 border transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'border-blue-500 bg-blue-500/10 text-blue-400 font-semibold'
                      : 'border-white/10 bg-white/[0.02] text-slate-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat} <span className="text-[10px] text-slate-500 ml-1">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-md">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search by project name, tech tag, or domain..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-[#0d0f12] py-2.5 pl-10 pr-4 text-xs text-slate-200 outline-none focus:border-blue-500/50 transition font-mono placeholder:text-slate-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-2.5 text-xs text-slate-500 hover:text-white font-mono"
            >
              clear
            </button>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-white/[0.07] bg-[#0c0e12] overflow-hidden hover:border-blue-500/40 transition-all duration-300 flex flex-col group shadow-lg"
            >
              {/* Project Visual Display Header */}
              <div className="h-52 w-full border-b border-white/[0.06] relative overflow-hidden bg-black/50">
                {project.visualComponent}
                {/* Floating badge */}
                <div className="absolute top-3 right-3 z-20">
                  <span className="font-mono text-[9px] text-slate-400 bg-black/70 backdrop-blur-sm border border-white/10 px-2 py-0.5 rounded">
                    {project.number} // {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {project.shortDesc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mb-5 space-y-1.5 bg-black/30 rounded-lg p-3 border border-white/5">
                    <span className="font-mono text-[9px] text-blue-400 uppercase tracking-wider block mb-1">
                      Key Highlights:
                    </span>
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-slate-400 leading-snug">
                        <span className="text-blue-400 mt-0.5 font-mono text-[9px]">&bull;</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-white/[0.03] border border-white/5 px-2 py-0.5 font-mono text-[9px] text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors py-1 px-2 rounded bg-white/[0.03] hover:bg-white/10 border border-white/10"
                    >
                      <Github size={13} />
                      <span>GitHub</span>
                      <ArrowUpRight size={11} className="text-slate-400" />
                    </a>

                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors py-1 px-2 rounded hover:bg-blue-500/10 cursor-pointer"
                    >
                      <Info size={12} />
                      <span>Architecture</span>
                    </button>
                  </div>

                  <span className="text-[10px] text-slate-500">
                    {project.categoryLabel.split(' ')[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fallback if no matching project */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 border border-dashed border-white/10 rounded-xl bg-card/20">
            <p className="font-mono text-sm text-slate-400 mb-2">No projects matching your query.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="font-mono text-xs text-blue-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>

      {/* Architecture Detail Modal */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <div className="relative w-full max-w-xl rounded-xl border border-white/10 bg-[#0d0f14] p-6 shadow-2xl overflow-hidden font-sans">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div>
                <span className="font-mono text-[10px] text-blue-400 uppercase tracking-widest">
                  {activeModalProject.categoryLabel}
                </span>
                <h3 id="modal-project-title" className="text-lg font-bold text-white mt-0.5">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/5 transition"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-300 max-h-[60vh] overflow-y-auto pr-1">
              <div>
                <span className="font-mono text-[10px] text-slate-400 uppercase block mb-1 font-semibold">
                  Engineering Context &amp; Objective:
                </span>
                <p className="leading-relaxed bg-white/[0.02] p-3 rounded border border-white/5">
                  {activeModalProject.details.problem}
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] text-slate-400 uppercase block mb-1 font-semibold">
                  Technical Architecture:
                </span>
                <p className="leading-relaxed bg-white/[0.02] p-3 rounded border border-white/5">
                  {activeModalProject.details.architecture}
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] text-slate-400 uppercase block mb-1 font-semibold">
                  Key Takeaway:
                </span>
                <p className="leading-relaxed bg-white/[0.02] p-3 rounded border border-white/5">
                  {activeModalProject.details.keyTakeaway}
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] text-slate-400 uppercase block mb-1.5 font-semibold">
                  Core Technologies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 font-mono text-[9px] text-blue-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href={activeModalProject.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 px-4 py-2 font-mono text-xs font-semibold text-white transition"
              >
                <Github size={14} />
                <span>Open Repository</span>
                <ArrowUpRight size={13} />
              </a>

              <button
                onClick={() => setActiveModalProject(null)}
                className="font-mono text-xs text-slate-400 hover:text-white px-3 py-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
