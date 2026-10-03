"use client";

import React from 'react';
import { Code2, Globe, Cpu, Wrench } from 'lucide-react';

interface TechCategory {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  items: {
    name: string;
    description: string;
  }[];
}

const STACK_CATEGORIES: TechCategory[] = [
  {
    title: "LANGUAGES",
    subtitle: "Core syntax & computational programming",
    icon: Code2,
    color: "text-blue-400",
    items: [
      { name: "Python", description: "RL training, data analysis, FastAPI microservices" },
      { name: "JavaScript / TypeScript", description: "Modern web applications & UI components" },
      { name: "C / C++", description: "Bare-metal microcontroller firmware & Arduino sketches" },
      { name: "MATLAB", description: "Flight dynamics modeling, ODE solving, control loops" },
      { name: "SQL", description: "Relational database querying & data storage" },
    ],
  },
  {
    title: "WEB & DEPLOYMENT",
    subtitle: "Modern full-stack interfaces & cloud runtimes",
    icon: Globe,
    color: "text-cyan-400",
    items: [
      { name: "HTML & CSS", description: "Semantic document structure & responsive layout" },
      { name: "FastAPI", description: "High-performance Python backends & async endpoints" },
      { name: "Firebase", description: "Real-time document storage & sensor synchronization" },
      { name: "Vercel & GitHub Pages", description: "Static site export & automated CI/CD deployment" },
      { name: "ThingSpeak", description: "IoT telemetric channels and time-series logging" },
    ],
  },
  {
    title: "AI / ML & SENSING",
    subtitle: "Model training, inference pipelines & signal sensing",
    icon: Cpu,
    color: "text-emerald-400",
    items: [
      { name: "Generative AI", description: "Context-grounded reasoning & document analysis" },
      { name: "Reinforcement Learning", description: "Continuous control policies (TD3 actor-critic)" },
      { name: "Computer Vision / Sensing", description: "Wi-Fi CSI RF disturbance analysis & spatial sensing" },
      { name: "Machine Learning", description: "Regression, clustering & predictive environmental modeling" },
    ],
  },
  {
    title: "ENGINEERING & EMBEDDED",
    subtitle: "Physical computing, control theory & flight dynamics",
    icon: Wrench,
    color: "text-amber-400",
    items: [
      { name: "Control Systems", description: "PID loop shaping, state-space LQR, and constrained MPC" },
      { name: "Arduino & ESP32", description: "Hardware timers, interrupts, I2C/SPI and RF CSI radios" },
      { name: "Sensors & Actuators", description: "Laser particulate SDS011, MQ gases, ultrasonic sonar, servos" },
      { name: "Embedded Systems", description: "Power budgeting, serial telemetries, and hardware-in-the-loop" },
    ],
  },
];

export function TechStack() {
  return (
    <section
      id="tech"
      aria-label="Technical Stack and Tooling"
      className="py-24 px-6 border-b border-white/[0.05]"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12">
          <span className="font-mono text-xs text-blue-400 tracking-widest uppercase block mb-2">
            03 // Competencies &amp; Tooling
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Technical Stack
          </h2>
          <p className="text-xs text-slate-400 mt-2 max-w-lg leading-relaxed">
            Technologies actively utilized across completed hardware builds, aerospace simulations, and AI web applications.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STACK_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/[0.07] bg-[#0c0e12] p-6 hover:border-blue-500/30 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/5">
                  <div className="h-8 w-8 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center">
                    <Icon size={16} className={cat.color} />
                  </div>
                  <div>
                    <h3 className="font-mono text-xs font-semibold text-white tracking-wider">
                      {cat.title}
                    </h3>
                    <p className="text-[10px] text-slate-500">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {cat.items.map((item, i) => (
                    <div
                      key={i}
                      className="group flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 p-2 rounded-lg bg-white/[0.015] border border-white/[0.03] hover:border-white/10 transition-colors"
                    >
                      <span className="font-mono text-xs font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">
                        {item.name}
                      </span>
                      <span className="text-[11px] text-slate-500 sm:text-right">
                        {item.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
