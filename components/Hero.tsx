"use client";

import React from 'react';
import { ArrowUpRight, Github, Mail, Layers } from 'lucide-react';

interface HeroProps {
  onScrollTo: (id: string) => void;
}

export function Hero({ onScrollTo }: HeroProps) {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-[88vh] flex flex-col justify-center px-6 overflow-hidden border-b border-white/[0.05]"
    >
      {/* Background blueprint grid layer */}
      <div className="absolute inset-0 z-0 blueprint-grid opacity-70 pointer-events-none" />

      {/* Radial vignette mask */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.12),transparent)] pointer-events-none" />

      {/* Engineering Blueprint HUD Wireframe in Hero Background */}
      <div className="absolute right-0 bottom-0 top-0 w-full lg:w-7/12 opacity-[0.22] lg:opacity-[0.35] pointer-events-none z-0">
        <svg
          className="h-full w-full"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Concentric Polar Grid */}
          <circle cx="380" cy="300" r="80" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="3 3" />
          <circle cx="380" cy="300" r="140" stroke="#3B82F6" strokeWidth="0.5" />
          <circle cx="380" cy="300" r="210" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="6 4" />
          <circle cx="380" cy="300" r="280" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="2 4" />

          {/* Coordinate Crosshairs */}
          <line x1="80" y1="300" x2="680" y2="300" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="4 4" />
          <line x1="380" y1="20" x2="380" y2="580" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="4 4" />

          {/* Precision Flight Vehicle Schematic (Isometric Wireframe) */}
          {/* Fuselage & Wings */}
          <path
            className="pcb-trace"
            d="M380,180 L220,310 L380,285 L540,310 Z"
            stroke="#3B82F6"
            strokeWidth="1"
          />
          {/* Center Spine & Horizontal Stabilizers */}
          <path
            className="pcb-trace"
            d="M380,285 L380,410 M340,420 L420,420"
            stroke="#3B82F6"
            strokeWidth="0.75"
          />
          {/* Wingtip Endplates */}
          <path
            className="pcb-trace"
            d="M220,310 L180,320 L220,335 Z"
            stroke="#3B82F6"
            strokeWidth="0.75"
          />
          <path
            className="pcb-trace"
            d="M540,310 L580,320 L540,335 Z"
            stroke="#3B82F6"
            strokeWidth="0.75"
          />
          {/* Trailing Control Surfaces */}
          <path
            className="pcb-trace"
            d="M380,285 L350,440 L380,430 L410,440 Z"
            stroke="#3B82F6"
            strokeWidth="0.75"
          />

          {/* Circuit / Signal Trace Traces */}
          <path
            d="M120,160 L180,160 L240,220 L240,300"
            stroke="#3B82F6"
            strokeWidth="0.75"
            strokeDasharray="3 3"
          />
          <circle cx="240" cy="300" r="2.5" fill="#3B82F6" />

          <path
            d="M500,460 L450,460 L410,420"
            stroke="#3B82F6"
            strokeWidth="0.75"
          />
          <circle cx="410" cy="420" r="2.5" fill="#3B82F6" />

          {/* HUD Telemetry text markings */}
          <text x="390" y="170" fill="rgba(59,130,246,0.6)" fontSize="9" fontFamily="monospace">
            PITCH_VECT // REF_3.0°
          </text>
          <text x="390" y="445" fill="rgba(59,130,246,0.6)" fontSize="9" fontFamily="monospace">
            LAT 22.57N LONG 88.36E
          </text>
        </svg>
      </div>

      <div className="mx-auto max-w-6xl w-full z-10 py-16 lg:py-24">
        <div className="max-w-3xl">
          {/* Domain / Academic Header Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="rounded border border-blue-500/25 bg-blue-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-blue-400 font-medium">
              B.Tech ECE &bull; Techno India University
            </span>
            <a
              href="https://study.iitm.ac.in/ae/"
              target="_blank"
              rel="noreferrer"
              className="rounded border border-sky-500/25 bg-sky-500/10 hover:border-sky-500/40 px-3 py-1 font-mono text-[10px] tracking-wider text-sky-400 transition-colors inline-flex items-center gap-1"
            >
              <span>BS Aeronautics &amp; Space Technology &bull; IIT Madras</span>
              <ArrowUpRight size={10} />
            </a>
          </div>

          {/* Primary Name & Roles */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-3">
            SHREYAN <span className="text-blue-500">DEY</span>
          </h1>

          <div className="font-mono text-xs sm:text-sm tracking-wider uppercase text-slate-400 mb-6 flex items-center gap-2">
            <span className="text-blue-400 font-semibold">Developer</span>
            <span className="text-white/20">&bull;</span>
            <span className="text-slate-200 font-semibold">Builder</span>
            <span className="text-white/20">&bull;</span>
            <span className="text-blue-400 font-semibold">Engineer</span>
          </div>

          {/* Supporting Statement (Exact instruction from prompt) */}
          <p className="font-mono text-base sm:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed border-l-2 border-blue-500/60 pl-4">
            &ldquo;I build at the intersection of software, AI, embedded systems and aerospace.&rdquo;
          </p>

          <p className="text-xs sm:text-sm text-slate-400 mb-10 max-w-xl leading-relaxed">
            ECE undergraduate at Techno India University pursuing a BS in Aeronautics and Space Technology from IIT Madras, working across aerospace, control systems, embedded systems, and AI.
          </p>

          {/* Primary Call-To-Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5">
            <button
              onClick={() => onScrollTo('projects')}
              className="flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowUpRight size={14} />
            </button>

            <a
              href="https://github.com/shr3y4n"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/10 hover:border-white/25 bg-white/[0.02] hover:bg-white/[0.05] px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-white transition-all"
            >
              <Github size={14} />
              <span>GitHub</span>
            </a>

            <button
              onClick={() => onScrollTo('contact')}
              className="flex items-center gap-2 rounded-lg border border-white/10 hover:border-blue-500/40 bg-white/[0.02] hover:bg-blue-500/5 px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              <Mail size={14} className="text-blue-400" />
              <span>Contact Me</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
