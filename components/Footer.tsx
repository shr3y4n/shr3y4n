"use client";

import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
}

export function Footer({ onScrollToTop }: FooterProps) {
  return (
    <footer className="bg-[#050505] py-12 px-6 border-t border-white/[0.05]">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-[11px] text-slate-500">
        <div>
          <div className="text-slate-300 font-semibold mb-1">
            SHREYAN DEY &bull; PORTFOLIO
          </div>
          <p className="text-[10px] text-slate-500">
            B.Tech Electronics &amp; Communication Engineering &bull; Techno India University
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-[10px]">
          <span>Next.js 15 &bull; React 19 &bull; TypeScript &bull; Tailwind CSS</span>
          <span className="text-white/10 hidden sm:inline">|</span>
          <span>© {new Date().getFullYear()} Shreyan Dey</span>
        </div>

        <button
          onClick={onScrollToTop}
          className="flex items-center gap-1.5 rounded border border-white/10 px-3 py-1.5 text-slate-400 hover:text-white hover:border-white/25 transition cursor-pointer"
          aria-label="Back to top"
        >
          <span>TOP</span>
          <ArrowUp size={12} />
        </button>
      </div>
    </footer>
  );
}
