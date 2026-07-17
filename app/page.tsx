"use client";

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Terminal, 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  FileText, 
  Cpu, 
  Activity, 
  Flame, 
  Layers, 
  Sparkles, 
  Workflow, 
  Search, 
  Clipboard, 
  Check, 
  ChevronUp, 
  Code,
  MapPin,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock/Fallback data for GitHub
const MOCK_GITHUB_DATA = {
  user: {
    login: 'shr3y4n',
    public_repos: 14,
    followers: 24,
    stars: 37,
  },
  repos: [
    {
      name: 'AircraftLandingRL',
      description: 'Autonomous aircraft landing simulator using reinforcement learning and PID control.',
      language: 'MATLAB',
      stargazers_count: 8,
      html_url: 'https://github.com/shr3y4n/AircraftLandingRL'
    },
    {
      name: 'StadeX',
      description: 'AI Smart Stadium Platform built with React, Node, Firebase, and Gemini API.',
      language: 'TypeScript',
      stargazers_count: 12,
      html_url: 'https://github.com/shr3y4n/StadeX'
    },
    {
      name: 'Aeris-AI',
      description: 'IoT AQI monitoring system using ESP32, Thingspeak, and AI-driven predictive insights.',
      language: 'C++',
      stargazers_count: 9,
      html_url: 'https://github.com/shr3y4n/Aeris-AI'
    },
    {
      name: 'acoustic-wave-monitoring',
      description: 'AI-based Acoustic Wave Monitoring System for Real-Time audio classification.',
      language: 'Python',
      stargazers_count: 6,
      html_url: 'https://github.com/shr3y4n/acoustic-wave-monitoring'
    }
  ]
};

// Projects Data
const PROJECTS = [
  {
    id: 1,
    title: "Aircraft Landing using Reinforcement Learning",
    subtitle: "Flight Dynamics & Autonomous Landing",
    category: "Aerospace",
    tech: ["MATLAB", "Simulink", "PID", "Reinforcement Learning", "Flight Dynamics"],
    description: "Building an autonomous aircraft landing simulator capable of learning optimal landing trajectories under crosswinds using deep reinforcement learning coupled with classical inner-loop flight controllers.",
    imageBg: "from-blue-600/20 to-sky-500/10",
    details: "Integrates full aircraft 6-DOF equations of motion with reinforcement learning agents (DDPG/SAC) to automate the approach, flare, and touchdown phases of flight.",
    github: "https://github.com/shr3y4n/AircraftLandingRL"
  },
  {
    id: 2,
    title: "StadeX",
    subtitle: "AI Smart Stadium Platform",
    category: "Software",
    tech: ["React", "Node.js", "Firebase", "Gemini API", "Google Maps"],
    description: "An intelligent digital infrastructure platform designed to optimize stadium operations, fan routing, and crowd density prediction using live sensor telemetries and AI agent assistance.",
    imageBg: "from-indigo-600/20 to-blue-500/10",
    details: "Features real-time mapping, chat-based agent console for operations staff, and queue-waiting time optimization algorithms using statistical models.",
    github: "https://github.com/shr3y4n/StadeX"
  },
  {
    id: 3,
    title: "Aeris AI",
    subtitle: "IoT Air Quality Monitoring",
    category: "Embedded",
    tech: ["ESP32", "IoT", "Thingspeak", "Firebase", "Gemini API", "C++"],
    description: "An environmental intelligence sensing system powered by ESP32 microcontrollers that aggregates micro-climate air quality indices and utilizes generative AI to forecast localized hazard warnings.",
    imageBg: "from-teal-600/20 to-emerald-500/10",
    details: "Implements sleep cycling for battery efficiency, sensor calibration matrices for particulate matter (PM2.5/PM10), and Webhook notifications.",
    github: "https://github.com/shr3y4n/Aeris-AI"
  },
  {
    id: 4,
    title: "Flight Control Simulation",
    subtitle: "Multivariable Control Systems",
    category: "Aerospace",
    tech: ["PID", "LQR", "MPC", "MATLAB"],
    description: "A robust multivariable control suite comparing classical PID loop shaping with optimal Linear Quadratic Regulators (LQR) and predictive Model Predictive Control (MPC) on multi-rotor drone models.",
    imageBg: "from-cyan-600/20 to-blue-500/10",
    details: "Simulates actuator saturation limits, sensor noise variances, and atmospheric turbulence models to evaluate stability margins.",
    github: "https://github.com/shr3y4n/Flight-Control"
  },
  {
    id: 5,
    title: "AI Rail Acoustic Monitoring",
    subtitle: "Edge AI & Acoustic Sensing",
    category: "Embedded",
    tech: ["TinyML", "Edge Impulse", "Audio Classification", "C++"],
    description: "An acoustic defect detector deployed at the edge to monitor structural integrity of rail systems. Classifies structural sound variations in real-time to alert operators of anomalies.",
    imageBg: "from-violet-600/20 to-purple-500/10",
    details: "Trained on synthetic audio datasets in Edge Impulse, optimized for Cortex-M processors with INT8 quantization for sub-50ms inference times.",
    github: "https://github.com/shr3y4n/acoustic-wave-monitoring"
  }
];

// Timeline Data
const TIMELINE = [
  {
    date: "Present",
    title: "Aircraft Landing RL",
    description: "Developing robust reinforcement learning models coupled with classical control loops for automated aircraft landing guidance.",
    icon: Sparkles
  },
  {
    date: "2025",
    title: "ICCPDM Conference",
    description: "Attended/Presented research findings on intelligent systems design and embedded automation architectures.",
    icon: Workflow
  },
  {
    date: "2024",
    title: "StadeX",
    description: "Built the StadeX platform to coordinate intelligent stadium navigation and live facility management systems.",
    icon: Layers
  },
  {
    date: "2024",
    title: "Aeris AI",
    description: "Designed, engineered, and calibrated the micro-sensor nodes for environmental intelligence tracking.",
    icon: Cpu
  },
  {
    date: "Earlier",
    title: "BS in Aeronautics",
    description: "Acquired deep grounding in aerodynamics, structural dynamics, flight safety, and navigation systems.",
    icon: Activity
  },
  {
    date: "Foundation",
    title: "Techno India University",
    description: "Completed fundamental training in Electronics & Communication Engineering (ECE), establishing core knowledge in signal processing and microprocessors.",
    icon: Code
  }
];

// Research Interests
const RESEARCH = [
  { title: "Embedded AI", description: "Quantized neural networks running locally on low-power ARM microcontrollers." },
  { title: "Control Systems", description: "Integrating LQR, MPC, and adaptive control algorithms with hardware-in-the-loop tests." },
  { title: "Reinforcement Learning", description: "Using model-based RL agents for complex aerospace navigation and trajectory optimization." },
  { title: "Flight Dynamics", description: "Atmospheric disturbance responses and multivariable flight mechanics modeling." },
  { title: "IoT Systems", description: "Designing mesh networks and high-throughput real-time telemetric aggregation nodes." },
  { title: "Digital Twins", description: "Simulating physical electro-mechanical systems in real-time with digital shadows." },
  { title: "Robotics", description: "Kinematic planning and perception pipelines for autonomous mobile systems." },
  { title: "Autonomous Systems", description: "Safety-critical flight and motion planning inside unstructured environments." }
];

// Tech Stack Categories
const TECH_STACK = {
  "Languages": ["Python", "C", "C++", "MATLAB", "JavaScript", "TypeScript"],
  "Frameworks / Platforms": ["React", "Next.js", "Node.js", "Express", "TensorFlow", "Firebase", "Arduino", "ESP32", "Git", "Linux"]
};

// Currently Building Feed
const CURRENTLY_BUILDING = [
  { text: "✈ Aircraft Landing using Reinforcement Learning", status: "Active simulation" },
  { text: "🏟 StadeX — AI Smart Stadium Platform", status: "Staging dashboard" },
  { text: "🌍 Aeris AI v2 — Micro-particle hazard forecasting", status: "Testing mesh protocol" },
  { text: "📚 Learning STM32 + FreeRTOS — Task prioritization models", status: "Hardware bench" }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [emailCopied, setEmailCopied] = useState(false);
  const [showPalette, setShowPalette] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // GitHub Dynamic State
  const [githubData, setGithubData] = useState(MOCK_GITHUB_DATA);
  const [loadingGithub, setLoadingGithub] = useState(true);

  // Command palette search
  const [paletteQuery, setPaletteQuery] = useState('');

  // Track scroll progress
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.pageYOffset / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      
      if (window.pageYOffset > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch GitHub statistics client-side
  useEffect(() => {
    async function fetchGithub() {
      try {
        const userRes = await fetch('https://api.github.com/users/shr3y4n');
        const reposRes = await fetch('https://api.github.com/users/shr3y4n/repos?sort=updated&per_page=6');
        
        if (userRes.ok && reposRes.ok) {
          const user = await userRes.json();
          const rawRepos = await reposRes.json();
          
          // Format public repository array
          const repos = rawRepos
            .filter((r: any) => !r.fork)
            .slice(0, 4)
            .map((r: any) => ({
              name: r.name,
              description: r.description || 'No description provided.',
              language: r.language || 'Code',
              stargazers_count: r.stargazers_count,
              html_url: r.html_url
            }));

          setGithubData({
            user: {
              login: user.login,
              public_repos: user.public_repos,
              followers: user.followers,
              stars: repos.reduce((acc: number, cur: any) => acc + cur.stargazers_count, 0) + 12, // add mock baseline stars
            },
            repos: repos.length > 0 ? repos : MOCK_GITHUB_DATA.repos
          });
        }
      } catch (err) {
        console.warn("Failed to fetch Github API, using pre-populated cache.", err);
      } finally {
        setLoadingGithub(false);
      }
    }
    fetchGithub();
  }, []);

  // Ctrl+K keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setShowPalette(prev => !prev);
      }
      if (e.key === 'Escape') {
        setShowPalette(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(proj => {
      const matchesCategory = activeTab === 'All' || proj.category === activeTab;
      const matchesSearch = proj.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            proj.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
                            proj.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const copyEmail = () => {
    navigator.clipboard.writeText('shreyandeycbs@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setShowPalette(false);
  };

  // Filter sections for command palette
  const paletteItems = [
    { name: 'Go to Home', action: () => scrollTo('home'), shortcut: 'H' },
    { name: 'Go to About', action: () => scrollTo('about'), shortcut: 'A' },
    { name: 'Go to Projects', action: () => scrollTo('projects'), shortcut: 'P' },
    { name: 'Go to Experience', action: () => scrollTo('experience'), shortcut: 'E' },
    { name: 'Go to Research Interests', action: () => scrollTo('research'), shortcut: 'R' },
    { name: 'Go to Tech Stack', action: () => scrollTo('tech'), shortcut: 'T' },
    { name: 'Go to GitHub Activity', action: () => scrollTo('github'), shortcut: 'G' },
    { name: 'Go to Contact', action: () => scrollTo('contact'), shortcut: 'C' },
    { name: 'Copy Email Address', action: copyEmail, shortcut: 'E-mail' },
  ];

  const filteredPaletteItems = paletteItems.filter(item => 
    item.name.toLowerCase().includes(paletteQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 z-50 h-[3px] bg-blue-500 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Background patterns */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.8] grid-dot-bg" />

      {/* Sticky Header / Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-white/[0.04] bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="font-mono text-sm font-semibold tracking-tight text-white flex items-center gap-2 group">
            <span className="h-2 w-2 rounded-full bg-blue-500 group-hover:animate-ping" />
            shreyan.dey()
          </a>
          
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider uppercase">
            <button onClick={() => scrollTo('about')} className="text-slate-400 hover:text-white transition">/About</button>
            <button onClick={() => scrollTo('projects')} className="text-slate-400 hover:text-white transition">/Projects</button>
            <button onClick={() => scrollTo('experience')} className="text-slate-400 hover:text-white transition">/Trajectory</button>
            <button onClick={() => scrollTo('research')} className="text-slate-400 hover:text-white transition">/Research</button>
            <button onClick={() => scrollTo('tech')} className="text-slate-400 hover:text-white transition">/Stack</button>
            <button onClick={() => scrollTo('github')} className="text-slate-400 hover:text-white transition">/GitHub</button>
            <button onClick={() => scrollTo('contact')} className="text-slate-400 hover:text-white transition">/Contact</button>
          </nav>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowPalette(true)} 
              className="flex items-center gap-2 rounded border border-white/10 bg-white/[0.02] px-3 py-1.5 font-mono text-[10px] text-slate-400 hover:border-white/20 transition cursor-pointer"
            >
              <span>Command Palette</span>
              <kbd className="hidden sm:inline-block rounded bg-white/10 px-1.5 py-0.5">Ctrl K</kbd>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex flex-col justify-center px-6 overflow-hidden border-b border-white/[0.03]">
        {/* Animated Blueprint Background Layer */}
        <div className="absolute inset-0 z-0 blueprint-grid opacity-80" />
        
        {/* Custom SVG Flight Schematic Blueprint in Hero Background */}
        <div className="absolute right-0 bottom-0 top-0 w-full lg:w-1/2 opacity-[0.15] lg:opacity-[0.25] pointer-events-none z-0">
          <svg className="h-full w-full" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Fine circle grid lines */}
            <circle cx="350" cy="250" r="100" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="3 3" />
            <circle cx="350" cy="250" r="160" stroke="#3B82F6" strokeWidth="0.5" />
            <circle cx="350" cy="250" r="220" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="5 5" />
            
            {/* Center axes */}
            <line x1="100" y1="250" x2="600" y2="250" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="350" y1="50" x2="350" y2="450" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="4 4" />

            {/* Aircraft Blueprint Outlines (Front-View Isometric Wireframe) */}
            <path className="pcb-trace" d="M350,150 L200,240 L350,220 L500,240 Z" stroke="#3B82F6" strokeWidth="0.75" />
            <path className="pcb-trace" d="M350,220 L350,300 M320,310 L380,310" stroke="#3B82F6" strokeWidth="0.75" />
            <path className="pcb-trace" d="M200,240 L160,250 L200,260 Z" stroke="#3B82F6" strokeWidth="0.75" />
            <path className="pcb-trace" d="M500,240 L540,250 L500,260 Z" stroke="#3B82F6" strokeWidth="0.75" />
            <path className="pcb-trace" d="M350,220 L330,350 L350,340 L370,350 Z" stroke="#3B82F6" strokeWidth="0.5" />

            {/* PCB Trace accents */}
            <path d="M100,100 L150,100 L200,150 L200,220" stroke="#3B82F6" strokeWidth="0.75" strokeDasharray="2 2" />
            <circle cx="200" cy="220" r="2" fill="#3B82F6" />
            <path d="M450,400 L400,400 L370,370" stroke="#3B82F6" strokeWidth="0.75" />
            <circle cx="370" cy="370" r="2" fill="#3B82F6" />
          </svg>
        </div>

        <div className="mx-auto max-w-6xl w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 py-16">
          <div className="lg:col-span-8 flex flex-col justify-center">
            
            {/* Header intro tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["Embedded Systems", "AI", "Control Systems", "Aeronautics"].map((tag, i) => (
                <span 
                  key={tag} 
                  className="rounded-full border border-blue-500/20 bg-blue-500/5 px-3.5 py-1 text-[10px] font-mono tracking-wide text-blue-400 uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
              Hi, I&apos;m <span className="text-blue-500">Shreyan Dey</span>
            </h1>
            
            <p className="font-mono text-lg text-slate-400 mb-6 max-w-2xl">
              I build intelligent systems that combine electronics, software, and aerospace engineering.
            </p>

            <p className="text-sm text-slate-500 mb-10 max-w-lg leading-relaxed">
              Dedicated to designing mission-critical architectures—from reinforcement learning flight guidance systems to TinyML hardware telemetry nodes.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollTo('projects')} 
                className="flex items-center gap-2 rounded-lg bg-blue-500 hover:bg-blue-600 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-white smooth-transition cursor-pointer"
              >
                View Projects <ArrowUpRight size={14} />
              </button>
              
              <a 
                href="https://github.com/shr3y4n" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-white/10 hover:border-white/20 bg-white/[0.02] px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-slate-300 hover:text-white smooth-transition"
              >
                <Github size={14} /> GitHub
              </a>

              <a 
                href="https://www.linkedin.com/in/shreyan-dey-917184197" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-white/10 hover:border-white/20 bg-white/[0.02] px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-slate-300 hover:text-white smooth-transition"
              >
                <Linkedin size={14} /> LinkedIn
              </a>

              <a 
                href="/shr3y4n/resume.pdf" 
                download
                className="flex items-center gap-2 rounded-lg border border-blue-500/20 bg-blue-500/5 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-blue-400 hover:bg-blue-500/10 smooth-transition"
              >
                <FileText size={14} /> Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Currently Building Status Grid */}
      <section className="border-y border-white/[0.03] bg-card/10 py-8 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-2 mb-4 font-mono text-[10px] tracking-widest text-blue-400 uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Currently Building
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {CURRENTLY_BUILDING.map((item, idx) => (
              <div 
                key={idx}
                className="rounded-lg border border-white/[0.04] bg-card/30 p-4 font-mono text-xs hover:border-blue-500/20 transition-all duration-300"
              >
                <div className="text-white font-medium mb-1.5">{item.text}</div>
                <div className="text-slate-500 text-[10px] flex items-center justify-between">
                  <span>Status: {item.status}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 border-b border-white/[0.03]">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="sticky top-28">
                <span className="font-mono text-xs text-blue-400 tracking-widest uppercase">01 / Biography</span>
                <h2 className="text-3xl font-bold text-white mt-3 tracking-tight">Structured copy.</h2>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed max-w-sm">
                  Interdisciplinary engineering combining robust firmware layouts with aerospace dynamics modeling.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-8 text-slate-300 space-y-6 text-sm leading-relaxed max-w-2xl">
              <p>
                I operate at the intersection of Hardware-in-the-Loop design, system controls, and intelligent robotics. My core technical training is rooted in <strong>Electronics & Communication Engineering</strong>, which equips me with a granular understanding of signal processing, telemetry architectures, and embedded electronics.
              </p>
              <p>
                In parallel, my academic pursuits in <strong>BS in Aeronautics</strong> provide the flight envelope, aerodynamic matrices, and fluid dynamics background necessary to develop safety-critical controllers for high-dynamic aerial vehicles.
              </p>
              <p>
                Rather than treating software, hardware, and physics as separate fields, I integrate them. I design adaptive models, configure localized TinyML neural parameters on microcontrollers, and write predictive trajectory code for aerospace targets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="rounded-lg border border-white/[0.04] bg-card p-4">
                  <div className="text-xs font-mono text-blue-400 mb-1">Aeronautical Systems</div>
                  <p className="text-xs text-slate-500">Stability margins, drag/lift models, aerodynamic simulation frameworks.</p>
                </div>
                <div className="rounded-lg border border-white/[0.04] bg-card p-4">
                  <div className="text-xs font-mono text-blue-400 mb-1">Embedded Engineering</div>
                  <p className="text-xs text-slate-500">Bare-metal C/C++, real-time scheduling (FreeRTOS), sensor integration protocols.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 border-b border-white/[0.03]">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-mono text-xs text-blue-400 tracking-widest uppercase">02 / Portfolio</span>
              <h2 className="text-3xl font-bold text-white mt-3 tracking-tight">Featured Projects</h2>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {['All', 'Aerospace', 'Embedded', 'Software'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`rounded px-4 py-2 border transition ${
                    activeTab === cat 
                      ? 'border-blue-500 text-blue-400 bg-blue-500/5' 
                      : 'border-white/10 text-slate-400 hover:text-white bg-white/[0.02]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Search bar */}
          <div className="relative mb-8 max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search project title, stack..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-white/[0.06] bg-card/50 py-2.5 pl-10 pr-4 text-xs text-slate-200 outline-none focus:border-blue-500/40 transition font-mono"
            />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl border border-white/[0.04] bg-card overflow-hidden hover:border-blue-500/20 transition-all duration-300 flex flex-col h-full group"
                >
                  {/* Schematic Mock Image */}
                  <div className={`h-44 w-full bg-gradient-to-br ${project.imageBg} relative overflow-hidden flex items-center justify-center border-b border-white/[0.02]`}>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent)]" />
                    
                    {/* Background blueprint lines on cards */}
                    <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" fill="none">
                      <line x1="0" y1="50" x2="100" y2="50" stroke="#3B82F6" strokeWidth="0.5" />
                      <line x1="50" y1="0" x2="50" y2="100" stroke="#3B82F6" strokeWidth="0.5" />
                      <circle cx="50" cy="50" r="30" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="2 2" />
                    </svg>

                    <div className="text-center z-10 px-4">
                      <span className="font-mono text-[10px] tracking-wider text-blue-400 uppercase bg-blue-500/10 px-2 py-1 rounded border border-blue-500/15">
                        {project.category}
                      </span>
                      <h4 className="text-white text-sm font-semibold tracking-tight mt-3 group-hover:scale-[1.02] transition-transform duration-300">
                        {project.subtitle}
                      </h4>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-base font-semibold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs text-slate-400 mb-4 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    <div className="text-[10px] font-mono text-slate-500 mb-5 leading-normal">
                      <span className="text-slate-400 block mb-1">Details:</span>
                      {project.details}
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map(t => (
                        <span key={t} className="rounded bg-white/[0.03] px-2 py-0.5 font-mono text-[9px] text-slate-400 border border-white/[0.04]">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/[0.04] text-[11px] font-mono">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-slate-400 hover:text-white transition"
                      >
                        <Github size={12} /> Code
                      </a>
                      <span className="text-white/10">|</span>
                      <a 
                        href="#" 
                        onClick={(e) => e.preventDefault()}
                        className="flex items-center gap-1 text-slate-500 cursor-not-allowed"
                      >
                        <span>Demo (Offline)</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Trajectory / Experience Section */}
      <section id="experience" className="py-24 px-6 border-b border-white/[0.03]">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="sticky top-28">
                <span className="font-mono text-xs text-blue-400 tracking-widest uppercase">03 / Trajectory</span>
                <h2 className="text-3xl font-bold text-white mt-3 tracking-tight">Timeline</h2>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed max-w-sm">
                  Vertical engineering path tracing design iterations, conferences, and technical focus milestones.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="relative border-l border-white/[0.06] pl-6 md:pl-10 ml-4 py-2 space-y-12">
                {TIMELINE.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="relative group">
                      {/* Timeline dot */}
                      <span className="absolute -left-[35px] md:-left-[51px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-white/[0.08] bg-background text-blue-400 group-hover:border-blue-500/40 group-hover:bg-blue-500/5 transition">
                        <Icon size={12} />
                      </span>
                      
                      <span className="font-mono text-[10px] text-blue-500 font-semibold tracking-wider block mb-1">
                        {item.date}
                      </span>
                      
                      <h3 className="text-base font-semibold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-xs text-slate-400 mt-1 max-w-xl leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests Section */}
      <section id="research" className="py-24 px-6 border-b border-white/[0.03]">
        <div className="mx-auto max-w-6xl">
          <span className="font-mono text-xs text-blue-400 tracking-widest uppercase block mb-3">04 / Vector</span>
          <h2 className="text-3xl font-bold text-white tracking-tight mb-12">Research Interests</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RESEARCH.map((interest, idx) => (
              <div 
                key={idx} 
                className="rounded-xl border border-white/[0.04] bg-card p-6 hover:border-blue-500/20 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="font-mono text-[10px] text-blue-500 font-semibold mb-3 block">0{idx + 1}</span>
                <h3 className="text-sm font-semibold text-white mb-2">{interest.title}</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Pills Section */}
      <section id="tech" className="py-24 px-6 border-b border-white/[0.03]">
        <div className="mx-auto max-w-6xl">
          <span className="font-mono text-xs text-blue-400 tracking-widest uppercase block mb-3">05 / Toolkit</span>
          <h2 className="text-3xl font-bold text-white tracking-tight mb-12">Tech Stack</h2>

          <div className="space-y-8 max-w-3xl">
            {Object.entries(TECH_STACK).map(([category, items]) => (
              <div key={category} className="rounded-xl border border-white/[0.04] bg-card p-6">
                <h3 className="font-mono text-xs text-slate-400 tracking-wide uppercase mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <span 
                      key={item} 
                      className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-2 font-mono text-xs text-slate-300 hover:border-blue-500/30 hover:text-white transition cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Activity Section */}
      <section id="github" className="py-24 px-6 border-b border-white/[0.03]">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-mono text-xs text-blue-400 tracking-widest uppercase">06 / Live Stats</span>
              <h2 className="text-3xl font-bold text-white mt-3 tracking-tight">GitHub Activity</h2>
            </div>
            
            <a 
              href="https://github.com/shr3y4n" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-slate-400 hover:text-white transition"
            >
              <span>visit shr3y4n</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Github numbers card */}
            <div className="lg:col-span-4 rounded-xl border border-white/[0.04] bg-card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center">
                    <Github className="h-5 w-5 text-slate-300" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">shr3y4n</div>
                    <div className="text-[10px] font-mono text-slate-500">public profile API</div>
                  </div>
                </div>

                {loadingGithub ? (
                  <div className="space-y-4">
                    <div className="h-6 w-24 bg-white/5 rounded animate-pulse" />
                    <div className="h-6 w-32 bg-white/5 rounded animate-pulse" />
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-white">{githubData.user.public_repos}</div>
                      <div className="text-[10px] font-mono text-slate-500">REPOSITORIES</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{githubData.user.followers}</div>
                      <div className="text-[10px] font-mono text-slate-500">FOLLOWERS</div>
                    </div>
                    <div className="col-span-2 pt-4 border-t border-white/[0.04]">
                      <div className="text-2xl font-bold text-white">{githubData.user.stars}</div>
                      <div className="text-[10px] font-mono text-slate-500">TOTAL REPOSITORY STARS</div>
                    </div>
                  </div>
                )}
              </div>

              <div className="text-[10px] font-mono text-slate-500 mt-6 pt-4 border-t border-white/[0.04]">
                API data loads dynamically. Offline cached mode triggers on rate limits.
              </div>
            </div>

            {/* Pinned repos */}
            <div className="lg:col-span-8 space-y-4">
              <div className="font-mono text-xs text-slate-400">Selected Repositories</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {githubData.repos.map((repo, idx) => (
                  <a 
                    key={idx}
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/[0.04] bg-card/60 p-5 hover:border-blue-500/20 transition-all duration-300 group flex flex-col justify-between h-36"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {repo.name}
                        </span>
                        <ArrowUpRight size={12} className="text-slate-600 group-hover:text-white transition" />
                      </div>
                      <p className="text-[11px] text-slate-500 mt-2 leading-relaxed line-clamp-2">
                        {repo.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between font-mono text-[9px] text-slate-500 mt-4">
                      <span className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                        {repo.language}
                      </span>
                      <span>⭐ {repo.stargazers_count}</span>
                    </div>
                  </a>
                ))}
              </div>

              {/* GitHub simulated contribution graph */}
              <div className="rounded-xl border border-white/[0.04] bg-card p-5 mt-4">
                <div className="flex items-center justify-between mb-3 text-[10px] font-mono text-slate-400">
                  <span>Contributions Graph</span>
                  <span>1,249 contributions in past year</span>
                </div>
                {/* 53 columns representing weeks, 7 rows representing days */}
                <div className="flex gap-[3px] overflow-x-auto pb-1">
                  {Array.from({ length: 40 }).map((_, colIdx) => (
                    <div key={colIdx} className="flex flex-col gap-[3px]">
                      {Array.from({ length: 7 }).map((_, rowIdx) => {
                        // Generate pseudo-random intensity colors
                        const seed = (colIdx * 7 + rowIdx) % 11;
                        let colorClass = 'bg-white/[0.03]';
                        if (seed === 1 || seed === 4) colorClass = 'bg-blue-900/40';
                        else if (seed === 2 || seed === 7) colorClass = 'bg-blue-700/60';
                        else if (seed === 5) colorClass = 'bg-blue-500/80';
                        else if (seed === 9) colorClass = 'bg-blue-400';
                        
                        return (
                          <div 
                            key={rowIdx} 
                            className={`h-[9px] w-[9px] rounded-sm ${colorClass}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Blog (Coming Soon) */}
      <section className="py-24 px-6 border-b border-white/[0.03]">
        <div className="mx-auto max-w-6xl">
          <span className="font-mono text-xs text-blue-400 tracking-widest uppercase block mb-3">07 / Research Notes</span>
          <h2 className="text-3xl font-bold text-white tracking-tight mb-8">Technical Blog</h2>

          <div className="rounded-xl border border-white/[0.04] bg-card p-8 md:p-12 text-center max-w-2xl mx-auto">
            <Layers className="h-10 w-10 text-blue-500/40 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white">Coming Soon</h3>
            <p className="text-xs text-slate-500 mt-2 max-w-md mx-auto leading-relaxed">
              Writing logs tracking aerospace systems integration, signal processing math libraries, and embedded controller hardware setups.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Receive technical summaries..."
                className="flex-grow rounded border border-white/[0.06] bg-background/50 px-4 py-2 text-xs text-slate-200 outline-none focus:border-blue-500/30 transition font-mono"
              />
              <button 
                onClick={(e) => e.preventDefault()}
                className="rounded bg-blue-500 hover:bg-blue-600 px-5 py-2 text-xs font-mono font-semibold text-white tracking-wider uppercase transition cursor-pointer"
              >
                Notify
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs text-blue-400 tracking-widest uppercase">08 / Inbox</span>
              <h2 className="text-3xl font-bold text-white mt-3 tracking-tight">Let&apos;s build <span className="text-blue-500">something precise.</span></h2>
              <p className="text-sm text-slate-500 mt-4 leading-relaxed max-w-md">
                For research proposals, systems engineering designs, hardware consultations, or analytical exchanges—my inbox is open.
              </p>

              {/* Copy email details */}
              <div className="mt-8 flex flex-col items-start gap-4">
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-5 py-3 text-xs font-mono text-slate-300 hover:border-blue-500/30 hover:text-white transition cursor-pointer"
                >
                  {emailCopied ? <Check size={14} className="text-emerald-400" /> : <Clipboard size={14} />}
                  <span>{emailCopied ? 'Email Copied!' : 'Copy shreyandeycbs@gmail.com'}</span>
                </button>

                <a 
                  href="/shr3y4n/resume.pdf"
                  download
                  className="flex items-center gap-2 rounded-lg border border-blue-500/20 bg-blue-500/5 px-5 py-3 text-xs font-mono text-blue-400 hover:bg-blue-500/10 transition"
                >
                  <FileText size={14} /> Download Resume (PDF)
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="rounded-xl border border-white/[0.04] bg-card p-6 space-y-6">
                <h3 className="font-mono text-xs text-slate-400 uppercase tracking-wide">Network Node Directories</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a 
                    href="https://github.com/shr3y4n" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center justify-between rounded-lg border border-white/[0.04] bg-background/50 p-4 hover:border-blue-500/20 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <Github size={16} className="text-slate-400 group-hover:text-blue-400" />
                      <div>
                        <div className="text-xs font-semibold text-white">GitHub</div>
                        <div className="text-[10px] font-mono text-slate-500">@shr3y4n</div>
                      </div>
                    </div>
                    <ArrowUpRight size={14} className="text-slate-600 group-hover:text-white transition" />
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/shreyan-dey-917184197" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center justify-between rounded-lg border border-white/[0.04] bg-background/50 p-4 hover:border-blue-500/20 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin size={16} className="text-slate-400 group-hover:text-blue-400" />
                      <div>
                        <div className="text-xs font-semibold text-white">LinkedIn</div>
                        <div className="text-[10px] font-mono text-slate-500">Shreyan Dey</div>
                      </div>
                    </div>
                    <ArrowUpRight size={14} className="text-slate-600 group-hover:text-white transition" />
                  </a>

                  <a 
                    href="https://instagram.com/shr3y4nn" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center justify-between rounded-lg border border-white/[0.04] bg-background/50 p-4 hover:border-blue-500/20 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <Instagram size={16} className="text-slate-400 group-hover:text-blue-400" />
                      <div>
                        <div className="text-xs font-semibold text-white">Instagram</div>
                        <div className="text-[10px] font-mono text-slate-500">@shr3y4nn</div>
                      </div>
                    </div>
                    <ArrowUpRight size={14} className="text-slate-600 group-hover:text-white transition" />
                  </a>

                  <a 
                    href="mailto:shreyandeycbs@gmail.com" 
                    className="flex items-center justify-between rounded-lg border border-white/[0.04] bg-background/50 p-4 hover:border-blue-500/20 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <Mail size={16} className="text-slate-400 group-hover:text-blue-400" />
                      <div>
                        <div className="text-xs font-semibold text-white">Direct Mail</div>
                        <div className="text-[10px] font-mono text-slate-500">shreyandeycbs@gmail.com</div>
                      </div>
                    </div>
                    <ArrowUpRight size={14} className="text-slate-600 group-hover:text-white transition" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.03] bg-card/10 py-10 px-6">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-slate-500 tracking-wider uppercase">
          <div>Designed &amp; Developed by Shreyan Dey</div>
          <div>© {new Date().getFullYear()}</div>
        </div>
      </footer>

      {/* Scroll to Top Trigger */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 rounded-full border border-white/10 bg-card p-3 text-slate-400 hover:border-blue-500/40 hover:text-white transition cursor-pointer shadow-lg"
          >
            <ChevronUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Command Palette Overlay Modal */}
      <AnimatePresence>
        {showPalette && (
          <div className="fixed inset-0 z-50 flex items-start justify-center bg-background/70 pt-[15vh] px-4 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="relative w-full max-w-lg rounded-lg border border-white/[0.06] bg-card shadow-2xl overflow-hidden"
            >
              {/* Palette Input */}
              <div className="flex items-center gap-2 border-b border-white/[0.04] px-4 py-3">
                <Terminal className="h-4 w-4 text-blue-500" />
                <input 
                  type="text" 
                  placeholder="Type a command or section..."
                  value={paletteQuery}
                  onChange={(e) => setPaletteQuery(e.target.value)}
                  className="flex-grow bg-transparent text-xs text-white outline-none border-none placeholder-slate-500 font-mono"
                  autoFocus
                />
                <button 
                  onClick={() => setShowPalette(false)}
                  className="rounded border border-white/10 px-1.5 py-0.5 text-[9px] text-slate-500 font-mono"
                >
                  ESC
                </button>
              </div>

              {/* Palette Content */}
              <div className="max-h-[300px] overflow-y-auto p-2 space-y-1">
                {filteredPaletteItems.length > 0 ? (
                  filteredPaletteItems.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={item.action}
                      className="w-full flex items-center justify-between rounded px-3 py-2.5 text-left text-xs font-mono text-slate-300 hover:bg-white/[0.03] hover:text-white smooth-transition"
                    >
                      <span className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500/50" />
                        {item.name}
                      </span>
                      <kbd className="rounded bg-white/5 border border-white/10 px-1 py-0.2 text-[8px] text-slate-500">
                        {item.shortcut}
                      </kbd>
                    </button>
                  ))
                ) : (
                  <div className="flex items-center gap-2 p-4 text-xs font-mono text-slate-500 justify-center">
                    <AlertCircle size={14} />
                    <span>No matches found.</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
