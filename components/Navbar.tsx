"use client";

import React, { useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenPalette: () => void;
  onNavigate: (sectionId: string) => void;
}

export function Navbar({ onOpenPalette, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.06] bg-[#050505]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="font-mono text-xs font-semibold tracking-tight text-white flex items-center gap-2 group focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 rounded px-1.5 py-1"
          aria-label="Scroll to home top"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>
          <span className="text-slate-200 group-hover:text-blue-400 transition-colors">
            shreyan<span className="text-blue-500">.dey</span>()
          </span>
          <span className="hidden sm:inline-block text-[10px] text-slate-500 font-normal">
            // ECE &bull; Systems
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-7 text-[11px] font-mono tracking-wider uppercase"
        >
          <button
            onClick={() => handleNavClick('about')}
            className="text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:text-white"
          >
            /About
          </button>
          <button
            onClick={() => handleNavClick('projects')}
            className="text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:text-white"
          >
            /Projects
          </button>
          <button
            onClick={() => handleNavClick('tech')}
            className="text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:text-white"
          >
            /Stack
          </button>
          <button
            onClick={() => handleNavClick('github')}
            className="text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:text-white"
          >
            /GitHub
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="text-slate-400 hover:text-white transition-colors focus:outline-none focus-visible:text-white"
          >
            /Contact
          </button>
        </nav>

        {/* Actions: Command Palette & Mobile Menu */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenPalette}
            className="flex items-center gap-2 rounded border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] text-slate-300 hover:border-blue-500/40 hover:text-white transition cursor-pointer"
            aria-label="Open command palette"
          >
            <Terminal size={12} className="text-blue-400" />
            <span className="hidden sm:inline">Palette</span>
            <kbd className="hidden sm:inline-block rounded bg-white/10 px-1.5 py-0.5 text-[9px] text-slate-400">
              Ctrl K
            </kbd>
          </button>

          {/* Mobile Hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/[0.06] bg-[#0a0a0a] px-6 py-4 flex flex-col gap-3 font-mono text-xs uppercase tracking-wider">
          <button
            onClick={() => handleNavClick('about')}
            className="text-left py-2 text-slate-300 hover:text-blue-400 border-b border-white/5"
          >
            /About
          </button>
          <button
            onClick={() => handleNavClick('projects')}
            className="text-left py-2 text-slate-300 hover:text-blue-400 border-b border-white/5"
          >
            /Projects
          </button>
          <button
            onClick={() => handleNavClick('tech')}
            className="text-left py-2 text-slate-300 hover:text-blue-400 border-b border-white/5"
          >
            /Stack
          </button>
          <button
            onClick={() => handleNavClick('github')}
            className="text-left py-2 text-slate-300 hover:text-blue-400 border-b border-white/5"
          >
            /GitHub
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="text-left py-2 text-slate-300 hover:text-blue-400"
          >
            /Contact
          </button>
        </div>
      )}
    </header>
  );
}
