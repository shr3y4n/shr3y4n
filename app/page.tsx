"use client";

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { LiveStatus } from '@/components/LiveStatus';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { TechStack } from '@/components/TechStack';
import { GitHubSection } from '@/components/GitHubSection';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { CommandPalette } from '@/components/CommandPalette';
import { ChevronUp, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.pageYOffset / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowScrollTop(window.pageYOffset > 450);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('shreyandeycbs@gmail.com');
    setToastMessage('Email copied: shreyandeycbs@gmail.com');
    setTimeout(() => setToastMessage(null), 2500);
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-slate-200 selection:bg-blue-500/25 selection:text-blue-200">
      {/* Scroll Progress Bar at very top */}
      <div
        className="fixed top-0 left-0 z-50 h-[2.5px] bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-300 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Subtle background dot matrix pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-60 grid-dot-bg" />

      {/* Sticky Header / Navbar */}
      <Navbar
        onOpenPalette={() => setPaletteOpen(true)}
        onNavigate={scrollToSection}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onScrollTo={scrollToSection} />

        {/* Real-time Project Engineering Telemetry */}
        <LiveStatus />

        {/* Biography & Engineering Philosophy */}
        <About />

        {/* Featured Projects Grid with domain visualizers */}
        <Projects />

        {/* Grouped Technical Stack */}
        <TechStack />

        {/* GitHub Repositories & Real Statistics */}
        <GitHubSection />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onScrollToTop={() => scrollToSection('home')} />

      {/* Command Palette Dialog */}
      <CommandPalette
        isOpen={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onNavigate={scrollToSection}
        onCopyEmail={handleCopyEmail}
      />

      {/* Floating Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={() => scrollToSection('home')}
          className="fixed bottom-6 right-6 z-40 rounded-full border border-white/10 bg-[#0c0e12]/90 p-3 text-slate-400 hover:border-blue-500/50 hover:text-white transition-all shadow-xl backdrop-blur-md cursor-pointer group"
          aria-label="Scroll to top"
        >
          <ChevronUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* Temporary Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-[#0c120e] px-4 py-2.5 font-mono text-xs text-emerald-300 shadow-2xl backdrop-blur-md animate-fade-in"
        >
          <CheckCircle2 size={14} className="text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
