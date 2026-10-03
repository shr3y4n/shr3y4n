"use client";

import React, { useState, useEffect } from 'react';
import { Terminal, Search, X, ArrowRight, Copy, Check, ExternalLink } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onCopyEmail: () => void;
}

export function CommandPalette({
  isOpen,
  onClose,
  onNavigate,
  onCopyEmail,
}: CommandPaletteProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      label: 'Jump to Hero / Top',
      category: 'Navigation',
      action: () => { onNavigate('home'); onClose(); },
      shortcut: 'H',
    },
    {
      label: 'Jump to About / Profile',
      category: 'Navigation',
      action: () => { onNavigate('about'); onClose(); },
      shortcut: 'A',
    },
    {
      label: 'Jump to Recent Projects (8)',
      category: 'Navigation',
      action: () => { onNavigate('projects'); onClose(); },
      shortcut: 'P',
    },
    {
      label: 'Jump to Technical Stack',
      category: 'Navigation',
      action: () => { onNavigate('tech'); onClose(); },
      shortcut: 'S',
    },
    {
      label: 'Jump to GitHub Activity',
      category: 'Navigation',
      action: () => { onNavigate('github'); onClose(); },
      shortcut: 'G',
    },
    {
      label: 'Jump to Contact',
      category: 'Navigation',
      action: () => { onNavigate('contact'); onClose(); },
      shortcut: 'C',
    },
    {
      label: 'Copy Email Address (shreyandeycbs@gmail.com)',
      category: 'Action',
      action: () => { onCopyEmail(); onClose(); },
      shortcut: 'E',
    },
    {
      label: 'Open GitHub Profile (shr3y4n)',
      category: 'External',
      action: () => { window.open('https://github.com/shr3y4n', '_blank'); onClose(); },
      shortcut: 'GH',
    },
    {
      label: 'Open LinkedIn Profile',
      category: 'External',
      action: () => { window.open('https://www.linkedin.com/in/shreyan-dey-917184197', '_blank'); onClose(); },
      shortcut: 'IN',
    },
  ];

  const filtered = actions.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/75 px-4 pt-[15vh] backdrop-blur-sm"
    >
      <div className="relative w-full max-w-lg rounded-xl border border-white/10 bg-[#0c0e12] shadow-2xl overflow-hidden font-mono text-xs">
        {/* Search header */}
        <div className="flex items-center gap-2.5 border-b border-white/10 px-4 py-3 bg-[#11141a]">
          <Terminal size={14} className="text-blue-400" />
          <input
            type="text"
            placeholder="Search commands or jump to section..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow bg-transparent text-white placeholder-slate-500 outline-none border-none text-xs"
            autoFocus
          />
          <button
            onClick={onClose}
            className="rounded border border-white/10 px-1.5 py-0.5 text-[9px] text-slate-400 hover:text-white"
          >
            ESC
          </button>
        </div>

        {/* Action list */}
        <div className="max-h-72 overflow-y-auto p-2 space-y-1">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <button
                key={idx}
                onClick={item.action}
                className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-white/[0.05] text-slate-300 hover:text-white transition text-left group cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-blue-400 uppercase bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">
                    {item.category}
                  </span>
                  <span className="text-xs group-hover:text-blue-400 transition-colors">
                    {item.label}
                  </span>
                </div>
                <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[9px] text-slate-400">
                  {item.shortcut}
                </kbd>
              </button>
            ))
          ) : (
            <div className="p-6 text-center text-slate-500">
              No matching commands found.
            </div>
          )}
        </div>

        <div className="border-t border-white/5 px-4 py-2 bg-[#090a0d] flex items-center justify-between text-[10px] text-slate-500">
          <span>Use &uarr;&darr; or mouse to navigate</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}
