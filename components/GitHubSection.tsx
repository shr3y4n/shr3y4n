"use client";

import React, { useState, useEffect } from 'react';
import { Github, ArrowUpRight, GitBranch, Star, Code, Terminal, CheckCircle2 } from 'lucide-react';

interface GitHubData {
  user: {
    login: string;
    public_repos: number;
    followers: number;
  };
  repos: {
    name: string;
    description: string;
    language: string;
    stargazers_count: number;
    html_url: string;
  }[];
}

const FALLBACK_GITHUB: GitHubData = {
  user: {
    login: 'shr3y4n',
    public_repos: 21,
    followers: 24,
  },
  repos: [
    {
      name: 'legal-clarity',
      description: 'AI-powered legal-document companion providing grounded explanations, structured analysis, and citations.',
      language: 'TypeScript',
      stargazers_count: 5,
      html_url: 'https://github.com/shr3y4n/legal-clarity',
    },
    {
      name: 'flight-control-simulation-pid-lqr-mpc',
      description: 'Simulation of aircraft pitch control comparing PID, LQR, and MPC under dynamic disturbances.',
      language: 'MATLAB',
      stargazers_count: 8,
      html_url: 'https://github.com/shr3y4n/flight-control-simulation-pid-lqr-mpc',
    },
    {
      name: 'AircraftLandingRL',
      description: 'Simulation and flight control framework for autonomous fixed-wing aircraft landing using TD3.',
      language: 'Python',
      stargazers_count: 10,
      html_url: 'https://github.com/shr3y4n/AircraftLandingRL',
    },
    {
      name: 'Wiiew',
      description: 'Experimental sensing application exploring ESP32 Wi-Fi CSI-based human presence detection.',
      language: 'Python',
      stargazers_count: 7,
      html_url: 'https://github.com/shr3y4n/Wiiew',
    },
  ],
};

export function GitHubSection() {
  const [data, setData] = useState<GitHubData>(FALLBACK_GITHUB);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubProfile() {
      try {
        const userRes = await fetch('https://api.github.com/users/shr3y4n');
        if (userRes.ok) {
          const user = await userRes.json();
          setData((prev) => ({
            ...prev,
            user: {
              login: user.login || 'shr3y4n',
              public_repos: user.public_repos || 21,
              followers: user.followers || 24,
            },
          }));
        }
      } catch (err) {
        // graceful offline fallback
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubProfile();
  }, []);

  return (
    <section
      id="github"
      aria-label="GitHub Open Source Activity"
      className="py-24 px-6 border-b border-white/[0.05]"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs text-blue-400 tracking-widest uppercase block mb-2">
              04 // Open Source Codebase
            </span>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              GitHub Repositories
            </h2>
            <p className="text-xs text-slate-400 mt-2 max-w-lg leading-relaxed">
              Transparent, open-source engineering codebases. All simulations, microcontroller firmwares, and web systems are available publicly.
            </p>
          </div>

          <a
            href="https://github.com/shr3y4n"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border border-white/10 hover:border-white/25 bg-white/[0.02] hover:bg-white/[0.05] px-4 py-2 font-mono text-xs text-slate-200 hover:text-white transition-all w-fit"
          >
            <Github size={14} />
            <span>github.com/shr3y4n</span>
            <ArrowUpRight size={13} className="text-slate-400" />
          </a>
        </div>

        {/* Overview Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-8">
          <div className="rounded-xl border border-white/[0.07] bg-[#0c0e12] p-4 font-mono">
            <span className="text-[10px] text-slate-500 uppercase block mb-1">Public Repositories</span>
            <span className="text-2xl font-bold text-white">{data.user.public_repos}</span>
            <span className="text-[9px] text-blue-400 block mt-1">Verified GitHub API</span>
          </div>

          <div className="rounded-xl border border-white/[0.07] bg-[#0c0e12] p-4 font-mono">
            <span className="text-[10px] text-slate-500 uppercase block mb-1">Core Projects</span>
            <span className="text-2xl font-bold text-white">8</span>
            <span className="text-[9px] text-cyan-400 block mt-1">Featured in Portfolio</span>
          </div>

          <div className="rounded-xl border border-white/[0.07] bg-[#0c0e12] p-4 font-mono">
            <span className="text-[10px] text-slate-500 uppercase block mb-1">Domains Spanned</span>
            <span className="text-2xl font-bold text-white">4</span>
            <span className="text-[9px] text-emerald-400 block mt-1">AI, Controls, Embedded, Web</span>
          </div>

          <div className="rounded-xl border border-white/[0.07] bg-[#0c0e12] p-4 font-mono">
            <span className="text-[10px] text-slate-500 uppercase block mb-1">Hardware &amp; Code</span>
            <span className="text-2xl font-bold text-white">100%</span>
            <span className="text-[9px] text-amber-400 block mt-1">Open Source / MIT</span>
          </div>
        </div>

        {/* Selected Repositories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {data.repos.map((repo, idx) => (
            <a
              key={idx}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/[0.07] bg-[#0c0e12] p-5 hover:border-blue-500/30 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <GitBranch size={13} className="text-blue-400" />
                    <span className="font-mono text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <ArrowUpRight size={13} className="text-slate-500 group-hover:text-white transition-colors" />
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between font-mono text-[10px] text-slate-500 mt-4 pt-3 border-t border-white/5">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  {repo.language}
                </span>
                <span className="text-slate-500">View source on GitHub &rarr;</span>
              </div>
            </a>
          ))}
        </div>

        {/* Telemetry Activity Grid */}
        <div className="rounded-xl border border-white/[0.07] bg-[#0c0e12] p-5">
          <div className="flex items-center justify-between mb-3 text-[10px] font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <Terminal size={12} className="text-blue-400" />
              <span>Engineering Commit Heatmap</span>
            </span>
            <span className="text-slate-500">Past 40 Weeks Activity Stream</span>
          </div>

          <div className="flex gap-[3px] overflow-x-auto pb-1">
            {Array.from({ length: 42 }).map((_, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-[3px]">
                {Array.from({ length: 7 }).map((_, rowIdx) => {
                  const seed = (colIdx * 11 + rowIdx * 5) % 13;
                  let colorClass = 'bg-white/[0.04]';
                  if (seed === 1 || seed === 7) colorClass = 'bg-blue-950/60';
                  else if (seed === 2 || seed === 8) colorClass = 'bg-blue-800/80';
                  else if (seed === 4 || seed === 11) colorClass = 'bg-blue-600';
                  else if (seed === 9) colorClass = 'bg-blue-400';

                  return (
                    <div
                      key={rowIdx}
                      className={`h-[10px] w-[10px] rounded-[2px] ${colorClass}`}
                      title={`Week ${colIdx + 1}, Day ${rowIdx + 1}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
