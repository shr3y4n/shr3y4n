"use client";

import React from 'react';
import { Cpu, Activity, Radio, FileText } from 'lucide-react';

const TELEMETRY_ITEMS = [
  {
    icon: FileText,
    title: "Legal Clarity",
    tag: "GenAI & Web",
    detail: "Grounded retrieval & citation validation pipeline",
    status: "Active Iteration",
    color: "text-blue-400",
  },
  {
    icon: Activity,
    title: "Flight Control Simulation",
    tag: "Control Systems",
    detail: "PID vs LQR vs MPC aircraft pitch dynamics comparison",
    status: "Simulation Bench",
    color: "text-cyan-400",
  },
  {
    icon: Cpu,
    title: "Aircraft Landing RL",
    tag: "Aerospace & RL",
    detail: "TD3 agent approach guidance & touchdown flare envelope",
    status: "Reward Tuning",
    color: "text-sky-400",
  },
  {
    icon: Radio,
    title: "Wiiew",
    tag: "ESP32 RF Sensing",
    detail: "CSI 56-subcarrier human presence disturbance detection",
    status: "Hardware Testbed",
    color: "text-emerald-400",
  },
];

export function LiveStatus() {
  return (
    <section
      aria-label="Current Engineering Status"
      className="border-b border-white/[0.05] bg-[#08080a] py-6 px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-slate-400 uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-white font-medium">Currently Engineering</span>
            <span className="text-slate-600 hidden sm:inline">&bull; Real-time Project Telemetry</span>
          </div>
          <span className="font-mono text-[9px] text-slate-500 hidden sm:inline">
            SYSTEM_CLK // NOMINAL
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {TELEMETRY_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-lg border border-white/[0.06] bg-[#0d0f12] p-3.5 font-mono text-xs hover:border-blue-500/30 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-white font-medium text-xs group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </span>
                    <Icon size={13} className={item.color} />
                  </div>
                  <div className="text-[10px] text-slate-400 leading-snug line-clamp-2">
                    {item.detail}
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[9px] text-slate-500">
                  <span className="uppercase text-slate-400">{item.tag}</span>
                  <span className="flex items-center gap-1 text-slate-400 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    {item.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
