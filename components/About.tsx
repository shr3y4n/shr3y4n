"use client";

import React from 'react';
import { Cpu, Plane, Compass, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';

const DISCIPLINES = [
  {
    icon: Cpu,
    title: "Embedded Systems & Sensing",
    description:
      "Low-level firmware on Arduino & ESP32, Wi-Fi CSI RF channel sensing, sensor fusion (SDS011, MQ-series, ultrasonic transducers), and hardware/software interfaces.",
    tags: ["Arduino UNO R4", "ESP32 CSI", "I2C / SPI", "Sensors"],
  },
  {
    icon: Plane,
    title: "Aerospace & Control Systems",
    description:
      "Classical and modern control theory applied to flight dynamics. Comparative controller benchmarking (PID, LQR, MPC) and RL-based autonomous approach trajectories.",
    tags: ["PID Loop Shaping", "LQR State-Space", "MPC", "Aircraft Dynamics"],
  },
  {
    icon: Sparkles,
    title: "AI / ML & Document Intelligence",
    description:
      "Context-grounded GenAI systems, reinforcement learning (TD3 actor-critic), semantic legal document analysis with strict citations, and localized inference.",
    tags: ["Generative AI", "TD3 Algorithm", "Grounded Retrieval", "FastAPI"],
  },
  {
    icon: Terminal,
    title: "Modern Web & Creative Frontend",
    description:
      "Production-ready web applications, interactive technical dashboards, responsive interfaces, and developer tools combining performance with creative design.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Data Vis"],
  },
];

export function About() {
  return (
    <section
      id="about"
      aria-label="About Shreyan Dey"
      className="py-24 px-6 border-b border-white/[0.05]"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Section Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <span className="font-mono text-xs text-blue-400 tracking-widest uppercase block mb-2">
              01 // Profile &amp; Approach
            </span>
            <h2 className="text-3xl font-bold text-white tracking-tight leading-tight">
              An engineer who builds real systems.
            </h2>
            <p className="text-xs text-slate-400 mt-3 leading-relaxed">
              Bridging low-level hardware registers, flight dynamics equations, and modern web architectures into functioning software.
            </p>

            <div className="mt-6 p-4 rounded-lg border border-white/5 bg-[#0d0f12] font-mono text-[11px] space-y-2 text-slate-400">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">DEGREE</span>
                <span className="text-slate-200">B.Tech ECE</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">INSTITUTION</span>
                <span className="text-slate-200">Techno India University</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">DISCIPLINE</span>
                <span className="text-slate-200">Electronics &amp; Comm.</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">LOCATION</span>
                <span className="text-slate-200">Kolkata, India</span>
              </div>
            </div>
          </div>

          {/* Section Content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="text-sm text-slate-300 space-y-4 leading-relaxed font-sans">
              <p>
                I am a <strong className="text-white">B.Tech Electronics &amp; Communication Engineering</strong> student at <strong className="text-white">Techno India University</strong>. Rather than confining myself to frontend web templates, I build integrated systems across hardware, machine learning, control theory, and web technologies.
              </p>
              <p>
                My work spans physical breadboards and microcontrollers up to high-dimensional simulations and AI applications. On the hardware and sensing side, I prototype low-level systems like Wi-Fi Channel State Information (CSI) human presence detectors on ESP32, environmental AQI monitoring stations, and ultrasonic radar sweeps.
              </p>
              <p>
                In control systems and aerospace, I simulate multivariable aircraft dynamics, comparing classical PID, optimal LQR, and model predictive control (MPC), and train reinforcement learning agents (TD3) for autonomous landing guidance. In web and AI development, I build grounded document companions and real-time dashboards with clean, accessible interfaces.
              </p>
            </div>

            {/* Disciplines Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {DISCIPLINES.map((d, idx) => {
                const Icon = d.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/[0.06] bg-[#0d0f12] p-5 hover:border-blue-500/30 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div className="h-7 w-7 rounded-md border border-blue-500/30 bg-blue-500/10 flex items-center justify-center">
                          <Icon size={14} className="text-blue-400" />
                        </div>
                        <h3 className="text-xs font-semibold text-white tracking-tight">
                          {d.title}
                        </h3>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
                        {d.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                      {d.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded bg-white/[0.03] border border-white/5 px-2 py-0.5 font-mono text-[9px] text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
