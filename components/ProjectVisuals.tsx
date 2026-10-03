"use client";

import React from 'react';

// 1. Legal Clarity Visual
export function LegalClarityVisual() {
  return (
    <div className="relative w-full h-full bg-[#0a0d14] p-4 flex flex-col justify-between select-none overflow-hidden font-mono text-[11px]">
      {/* Subtle blueprint grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      {/* Header Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-blue-500/20 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-slate-300 font-semibold tracking-tight text-[11px]">Master_Services_Agmt.pdf</span>
        </div>
        <span className="rounded bg-blue-500/10 border border-blue-500/30 px-2 py-0.5 text-[9px] text-blue-400 font-medium">
          GROUNDED ANALYSIS
        </span>
      </div>

      {/* Document Analysis Simulation */}
      <div className="relative z-10 space-y-2.5 my-auto">
        <div className="rounded border border-white/5 bg-black/40 p-2.5">
          <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1.5">
            <span className="text-blue-400 font-semibold">§ 14.2 Termination &amp; Indemnity</span>
            <span className="text-emerald-400">98.4% Confidence</span>
          </div>
          <p className="text-[10px] text-slate-300 leading-relaxed font-sans line-clamp-2">
            &ldquo;Neither party shall be liable for consequential damages exceeding aggregate fees paid...&rdquo;
          </p>
          <div className="mt-2 flex items-center gap-1.5 text-[9px]">
            <span className="rounded bg-emerald-500/15 border border-emerald-500/30 px-1.5 py-0.5 text-emerald-300">
              [Citation § 14.2.1 Verified]
            </span>
            <span className="text-slate-500">Context Window: 8.2k tokens</span>
          </div>
        </div>

        {/* Structured Extraction Chips */}
        <div className="grid grid-cols-2 gap-2 text-[9px]">
          <div className="rounded border border-white/5 bg-white/[0.02] p-1.5 text-slate-400">
            <span className="text-slate-500 block text-[8px] uppercase">Obligation</span>
            30-day notice period
          </div>
          <div className="rounded border border-white/5 bg-white/[0.02] p-1.5 text-slate-400">
            <span className="text-slate-500 block text-[8px] uppercase">Jurisdiction</span>
            Neutral arbitration
          </div>
        </div>
      </div>

      {/* Footer Status */}
      <div className="relative z-10 flex items-center justify-between text-[9px] text-slate-500 pt-2 border-t border-white/5">
        <span>Grounded Retrieval Pipeline</span>
        <span className="text-slate-400">GenAI • Non-Advisory</span>
      </div>
    </div>
  );
}

// 2. Flight Control System Visual
export function FlightControlVisual() {
  return (
    <div className="relative w-full h-full bg-[#070b12] p-4 flex flex-col justify-between select-none overflow-hidden font-mono text-[11px]">
      {/* Blueprint grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,165,233,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.06)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      {/* Header Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-sky-500/20 pb-2">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          <span className="text-slate-200 text-[10px] tracking-wider uppercase">Aircraft Pitch Step Response θ(t)</span>
        </div>
        <span className="text-[9px] text-cyan-400">SIM // 100Hz</span>
      </div>

      {/* Controller Comparison Curve Chart */}
      <div className="relative z-10 my-auto h-28 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 280 110" fill="none">
          {/* Target setpoint line (10 deg pitch) */}
          <line x1="20" y1="35" x2="270" y2="35" stroke="rgba(255,255,255,0.2)" strokeDasharray="3 3" strokeWidth="1" />
          <text x="24" y="30" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">Setpoint θ_ref = +10°</text>

          {/* Axes */}
          <line x1="20" y1="10" x2="20" y2="95" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <line x1="20" y1="95" x2="270" y2="95" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

          {/* PID curve: fast rise, overshoot, dampens */}
          <path
            d="M20,95 C45,95 50,15 70,22 C90,30 110,42 140,36 C170,33 220,35 270,35"
            stroke="#ef4444"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />

          {/* LQR curve: smooth, optimal, slight rise */}
          <path
            d="M20,95 C55,95 80,48 120,38 C160,34 210,35 270,35"
            stroke="#3b82f6"
            strokeWidth="2"
          />

          {/* MPC curve: constrained horizon, predictive tight track */}
          <path
            d="M20,95 C45,85 70,36 100,35 C150,35 200,35 270,35"
            stroke="#10b981"
            strokeWidth="2"
          />

          {/* Aircraft attitude wireframe preview */}
          <g transform="translate(225, 60)">
            <line x1="-15" y1="0" x2="15" y2="0" stroke="#38bdf8" strokeWidth="1" />
            <polygon points="15,0 5,-3 5,3" fill="#38bdf8" />
            <line x1="0" y1="-8" x2="0" y2="8" stroke="#38bdf8" strokeWidth="1" />
          </g>
        </svg>
      </div>

      {/* Legend & Metrics */}
      <div className="relative z-10 flex items-center justify-between text-[9px] border-t border-white/5 pt-2">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-red-400 font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400" /> PID (Mp=18%)
          </span>
          <span className="flex items-center gap-1 text-blue-400 font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" /> LQR (Optimal)
          </span>
          <span className="flex items-center gap-1 text-emerald-400 font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> MPC (Constrained)
          </span>
        </div>
      </div>
    </div>
  );
}

// 3. Autonomous Aircraft Landing RL Visual
export function AircraftLandingVisual() {
  return (
    <div className="relative w-full h-full bg-[#06090f] p-4 flex flex-col justify-between select-none overflow-hidden font-mono text-[11px]">
      {/* 3D Glide-slope Corridor wireframe */}
      <div className="relative z-10 flex items-center justify-between border-b border-blue-500/20 pb-2">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-ping" />
          <span className="text-slate-200 text-[10px] tracking-wide uppercase">ILS Glide Slope &bull; -3.0&deg; Approach</span>
        </div>
        <span className="rounded bg-sky-500/10 border border-sky-500/25 px-1.5 py-0.5 text-[8px] text-sky-400">
          TD3 REINFORCEMENT LEARNING
        </span>
      </div>

      {/* Perspective Runway & Glideslope */}
      <div className="relative z-10 my-auto h-28 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 280 110" fill="none">
          {/* Horizon line */}
          <line x1="0" y1="45" x2="280" y2="45" stroke="rgba(255,255,255,0.08)" strokeDasharray="2 2" />

          {/* Perspective Runway */}
          <polygon points="120,45 160,45 220,105 60,105" fill="#0d1117" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
          {/* Runway Centerline */}
          <line x1="140" y1="45" x2="140" y2="105" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="6 4" />
          {/* Touchdown Zone bars */}
          <line x1="110" y1="75" x2="130" y2="75" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
          <line x1="150" y1="75" x2="170" y2="75" stroke="#ffffff" strokeWidth="1" opacity="0.6" />

          {/* 3D Glide Slope Descent Tunnel */}
          <line x1="25" y1="20" x2="140" y2="78" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="25" cy="20" r="3" fill="#38bdf8" />
          <circle cx="85" cy="50" r="2.5" fill="#38bdf8" opacity="0.8" />
          
          {/* Aircraft schematic at current descent waypoint */}
          <g transform="translate(85, 48)">
            {/* Plane icon */}
            <path d="M-10,0 L10,0 M0,-6 L0,6 M-8,-3 L-8,3" stroke="#60a5fa" strokeWidth="1.5" />
            {/* Velocity vector */}
            <line x1="0" y1="0" x2="12" y2="6" stroke="#10b981" strokeWidth="1" markerEnd="url(#arrow)" />
          </g>

          {/* Flare Envelope threshold boundary */}
          <rect x="115" y="70" width="50" height="15" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" />
          <text x="175" y="80" fill="#10b981" fontSize="7" fontFamily="monospace">Flare H_flare=15m</text>
        </svg>
      </div>

      {/* Flight Telemetry readout */}
      <div className="relative z-10 grid grid-cols-3 gap-2 text-[9px] border-t border-white/5 pt-2">
        <div className="text-slate-400">
          <span className="text-slate-500 block text-[8px]">ALTITUDE</span>
          h = 42.5 m
        </div>
        <div className="text-slate-400">
          <span className="text-slate-500 block text-[8px]">SINK RATE</span>
          -2.4 m/s (Nominal)
        </div>
        <div className="text-slate-400 text-right">
          <span className="text-slate-500 block text-[8px]">CROSSWIND</span>
          14 kt Dynamic
        </div>
      </div>
    </div>
  );
}

// 4. Wiiew Visual
export function WiiewVisual() {
  return (
    <div className="relative w-full h-full bg-[#070a0e] p-4 flex flex-col justify-between select-none overflow-hidden font-mono text-[11px]">
      {/* RF sensing Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-emerald-500/20 pb-2">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-200 text-[10px] tracking-wide uppercase">ESP32 CSI RF Subcarriers (56 Channels)</span>
        </div>
        <span className="rounded bg-emerald-500/10 border border-emerald-500/30 px-1.5 py-0.5 text-[8px] text-emerald-400">
          HUMAN PRESENCE DETECTED
        </span>
      </div>

      {/* CSI Subcarrier Matrix / Disturbance Wave */}
      <div className="relative z-10 my-auto space-y-2">
        {/* RF Waveform disturbance */}
        <div className="h-16 w-full rounded border border-white/5 bg-black/40 p-2 flex items-center justify-center overflow-hidden relative">
          <svg className="w-full h-full" viewBox="0 0 260 50" fill="none">
            {/* Base carrier static */}
            <path
              d="M0,25 Q20,15 40,25 T80,25 T120,25 T160,25 T200,25 T240,25 T260,25"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1"
            />
            {/* Active human perturbation signal */}
            <path
              d="M0,25 Q25,20 50,25 T90,10 T130,42 T170,12 T210,32 T260,25"
              stroke="#10b981"
              strokeWidth="1.75"
              fill="none"
            />
            {/* Doppler perturbation centroid */}
            <circle cx="130" cy="42" r="3" fill="#34d399" />
            <circle cx="130" cy="42" r="8" stroke="#34d399" strokeWidth="0.5" opacity="0.6" className="animate-ping" />
          </svg>
        </div>

        {/* 56 Subcarrier Amplitude Bars Matrix */}
        <div className="flex items-end justify-between h-7 px-1 gap-[2px]">
          {Array.from({ length: 28 }).map((_, i) => {
            const height = 20 + Math.sin(i * 0.4) * 50 + (i >= 12 && i <= 18 ? 25 : 0);
            return (
              <div
                key={i}
                className={`w-full rounded-t-sm transition-all ${
                  i >= 12 && i <= 18 ? 'bg-emerald-400' : 'bg-emerald-900/50'
                }`}
                style={{ height: `${Math.min(95, Math.max(15, height))}%` }}
              />
            );
          })}
        </div>
      </div>

      {/* Telemetry info */}
      <div className="relative z-10 flex items-center justify-between text-[9px] text-slate-500 border-t border-white/5 pt-2">
        <span>Wi-Fi CSI • No Optical Cameras</span>
        <span className="text-emerald-400 font-semibold">FastAPI &bull; RuView</span>
      </div>
    </div>
  );
}

// 5. Aeris AI Visual
export function AerisAiVisual() {
  return (
    <div className="relative w-full h-full bg-[#080d12] p-4 flex flex-col justify-between select-none overflow-hidden font-mono text-[11px]">
      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-teal-500/20 pb-2">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
          <span className="text-slate-200 text-[10px] tracking-wide uppercase">Arduino UNO R4 WiFi &bull; Aeris-AI Node</span>
        </div>
        <span className="text-[9px] text-teal-300">CLOUD SYNCED</span>
      </div>

      {/* Main Environmental Instrument HUD */}
      <div className="relative z-10 my-auto grid grid-cols-12 gap-3 items-center">
        {/* Circular AQI Dial */}
        <div className="col-span-5 flex flex-col items-center justify-center p-2 rounded-lg bg-black/40 border border-white/5">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-slate-800"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-teal-400"
                strokeDasharray="42, 100"
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-base font-bold text-white leading-none">42</span>
              <span className="text-[8px] text-teal-400 uppercase mt-0.5 font-semibold">GOOD</span>
            </div>
          </div>
          <span className="text-[8px] text-slate-500 mt-1 uppercase">US-EPA AQI Index</span>
        </div>

        {/* Telemetry Sensor Metrics */}
        <div className="col-span-7 space-y-1.5 text-[9px]">
          <div className="flex items-center justify-between rounded bg-white/[0.02] border border-white/5 px-2 py-1">
            <span className="text-slate-400">SDS011 PM2.5</span>
            <span className="text-slate-200 font-semibold">12.4 µg/m³</span>
          </div>
          <div className="flex items-center justify-between rounded bg-white/[0.02] border border-white/5 px-2 py-1">
            <span className="text-slate-400">SDS011 PM10</span>
            <span className="text-slate-200 font-semibold">24.1 µg/m³</span>
          </div>
          <div className="flex items-center justify-between rounded bg-white/[0.02] border border-white/5 px-2 py-1">
            <span className="text-slate-400">DHT22 Temp / Hum</span>
            <span className="text-slate-200 font-semibold">24°C / 58%</span>
          </div>
        </div>
      </div>

      {/* Gemini AI Integration Banner */}
      <div className="relative z-10 flex items-center justify-between text-[9px] text-slate-400 border-t border-white/5 pt-2">
        <span className="text-teal-400">Gemini API Advisory Engine</span>
        <span className="text-slate-500">Firebase &bull; ThingSpeak</span>
      </div>
    </div>
  );
}

// 6. Arduino Radar System Visual
export function RadarVisual() {
  return (
    <div className="relative w-full h-full bg-[#040c06] p-4 flex flex-col justify-between select-none overflow-hidden font-mono text-[11px]">
      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-emerald-500/20 pb-2">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-slate-200 text-[10px] tracking-wide uppercase">Ultrasonic Radar PPI &bull; 180&deg;</span>
        </div>
        <span className="text-[9px] text-emerald-400">SERVO: 127&deg;</span>
      </div>

      {/* Sweeping Radar Grid & Blip */}
      <div className="relative z-10 my-auto h-28 flex items-center justify-center">
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* Concentric distance rings */}
          <div className="absolute inset-0 rounded-full border border-emerald-500/20" />
          <div className="absolute inset-3 rounded-full border border-emerald-500/20" />
          <div className="absolute inset-6 rounded-full border border-emerald-500/25" />
          <div className="absolute inset-9 rounded-full border border-emerald-500/30" />

          {/* Crosshair lines */}
          <div className="absolute inset-x-0 top-1/2 h-[1px] bg-emerald-500/20" />
          <div className="absolute inset-y-0 left-1/2 w-[1px] bg-emerald-500/20" />

          {/* Sweeping radar sector beam */}
          <div className="absolute inset-0 rounded-full animate-radar pointer-events-none">
            <div className="w-1/2 h-1/2 origin-bottom-right bg-gradient-to-tr from-transparent via-emerald-500/20 to-emerald-400/40 rounded-tl-full" />
          </div>

          {/* Target Obstacle Blip at (r=24cm, 127 deg) */}
          <div className="absolute top-6 left-8 flex items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            <span className="absolute text-[8px] text-emerald-300 left-3 whitespace-nowrap bg-black/60 px-1 py-0.5 rounded border border-emerald-500/30">
              d=24cm
            </span>
          </div>

          {/* Center Origin Dot */}
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] z-10" />
        </div>
      </div>

      {/* Hardware Telemetry */}
      <div className="relative z-10 flex items-center justify-between text-[9px] text-slate-500 border-t border-white/5 pt-2">
        <span>HC-SR04 &bull; SG90 Servo</span>
        <span className="text-emerald-400">Processing GUI Visualization</span>
      </div>
    </div>
  );
}

// 7. Display-fy Visual
export function DisplayfyVisual() {
  return (
    <div className="relative w-full h-full bg-[#050608] p-4 flex flex-col justify-between select-none overflow-hidden font-mono text-[11px]">
      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-indigo-500/20 pb-2">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
          <span className="text-slate-200 text-[10px] tracking-wide uppercase">SSD1306 OLED (128x64 px)</span>
        </div>
        <span className="rounded bg-indigo-500/10 border border-indigo-500/30 px-1.5 py-0.5 text-[8px] text-indigo-300">
          SPOTIFY + GENIUS API
        </span>
      </div>

      {/* Simulated Monochrome OLED Display */}
      <div className="relative z-10 my-auto rounded border border-sky-400/30 bg-[#00050c] p-2.5 shadow-[0_0_12px_rgba(56,189,248,0.15)]">
        {/* Track info line */}
        <div className="flex items-center justify-between text-[9px] text-sky-300 border-b border-sky-400/20 pb-1">
          <div className="flex items-center gap-1.5 truncate">
            <span className="text-sky-400">▶</span>
            <span className="font-semibold text-sky-200 truncate">Starboy &bull; The Weeknd</span>
          </div>
          <span className="text-sky-400/70 text-[8px]">02:14 / 03:50</span>
        </div>

        {/* Scrolling Lyrics Screen */}
        <div className="py-2 text-center">
          <p className="text-[10px] text-sky-100 font-semibold tracking-wide drop-shadow-[0_0_4px_rgba(56,189,248,0.8)]">
            &ldquo;I&apos;m tryna put you in the worst mood, ah...&rdquo;
          </p>
          <p className="text-[8px] text-sky-400/50 mt-0.5">
            P1 cleaner than your church shoes, ah...
          </p>
        </div>

        {/* Audio Equalizer bars animation */}
        <div className="flex items-end justify-center gap-1 h-3 pt-1 border-t border-sky-400/20">
          <div className="w-1 bg-sky-400 rounded-sm animate-eq-1" />
          <div className="w-1 bg-sky-400 rounded-sm animate-eq-2" />
          <div className="w-1 bg-sky-400 rounded-sm animate-eq-3" />
          <div className="w-1 bg-sky-400 rounded-sm animate-eq-4" />
          <div className="w-1 bg-sky-400 rounded-sm animate-eq-2" />
          <div className="w-1 bg-sky-400 rounded-sm animate-eq-1" />
          <div className="w-1 bg-sky-400 rounded-sm animate-eq-3" />
        </div>
      </div>

      {/* Hardware Telemetry */}
      <div className="relative z-10 flex items-center justify-between text-[9px] text-slate-500 border-t border-white/5 pt-2">
        <span>Arduino I2C Display</span>
        <span className="text-sky-400">Synchronized Lyric Buffer</span>
      </div>
    </div>
  );
}

// 8. Obstacle Avoiding Car Visual
export function ObstacleCarVisual() {
  return (
    <div className="relative w-full h-full bg-[#0a0808] p-4 flex flex-col justify-between select-none overflow-hidden font-mono text-[11px]">
      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-amber-500/20 pb-2">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-slate-200 text-[10px] tracking-wide uppercase">Autonomous Mobile Chassis &bull; 2WD</span>
        </div>
        <span className="text-[9px] text-amber-400">AVOIDANCE: ACTIVE</span>
      </div>

      {/* Kinematics & Sonar Beam Visualization */}
      <div className="relative z-10 my-auto h-28 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 280 110" fill="none">
          {/* Obstacle Box */}
          <rect x="200" y="30" width="30" height="50" rx="3" fill="#1f1815" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="204" y="58" fill="#f59e0b" fontSize="8" fontFamily="monospace">WALL</text>

          {/* Ultrasonic sonar cone rays */}
          <path d="M110,55 L198,35 M110,55 L198,75" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          <path d="M140,48 A30,30 0 0,1 140,62" stroke="#f59e0b" strokeWidth="1.25" fill="none" />
          <path d="M165,42 A55,55 0 0,1 165,68" stroke="#f59e0b" strokeWidth="1.25" fill="none" />
          
          <text x="142" y="58" fill="#fbbf24" fontSize="8" fontFamily="monospace">18cm</text>

          {/* Mobile Chassis wireframe */}
          <rect x="50" y="35" width="60" height="40" rx="4" fill="#141419" stroke="#3b82f6" strokeWidth="1.5" />
          {/* Left / Right Wheels */}
          <rect x="42" y="30" width="16" height="10" rx="2" fill="#334155" />
          <rect x="42" y="70" width="16" height="10" rx="2" fill="#334155" />
          <rect x="88" y="30" width="16" height="10" rx="2" fill="#334155" />
          <rect x="88" y="70" width="16" height="10" rx="2" fill="#334155" />

          {/* Sensor Eyes on Front */}
          <circle cx="110" cy="50" r="3.5" fill="#f59e0b" />
          <circle cx="110" cy="60" r="3.5" fill="#f59e0b" />

          {/* Steering Correction Vector (Turn Left) */}
          <path d="M75,35 Q60,18 45,25" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow)" fill="none" />
          <text x="35" y="15" fill="#10b981" fontSize="7" fontFamily="monospace">Pivot Left</text>
        </svg>
      </div>

      {/* Hardware Telemetry */}
      <div className="relative z-10 flex items-center justify-between text-[9px] text-slate-500 border-t border-white/5 pt-2">
        <span>L298N Motor Driver &bull; HC-SR04</span>
        <span className="text-amber-400">PWM Differential Drive</span>
      </div>
    </div>
  );
}
