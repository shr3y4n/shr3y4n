"use client";

import React, { useState } from 'react';
import { Mail, Github, Linkedin, Instagram, ArrowUpRight, Copy, Check, Send } from 'lucide-react';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "shreyandeycbs@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Information"
      className="py-24 px-6 border-b border-white/[0.05]"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Header & Direct Copy */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs text-blue-400 tracking-widest uppercase block mb-2">
              05 // Direct Communication
            </span>
            <h2 className="text-3xl font-bold text-white tracking-tight leading-tight">
              Let&apos;s build <span className="text-blue-500">something precise.</span>
            </h2>
            <p className="text-xs text-slate-400 mt-3 leading-relaxed max-w-md">
              Whether you want to discuss flight dynamics simulations, embedded hardware systems, GenAI architectures, or potential engineering collaborations—feel free to reach out.
            </p>

            {/* Quick Action Button */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={handleCopyEmail}
                className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 px-5 py-3 font-mono text-xs font-semibold text-white transition-all cursor-pointer shadow-[0_0_20px_rgba(59,130,246,0.2)]"
              >
                {copied ? <Check size={14} className="text-emerald-300" /> : <Copy size={14} />}
                <span>{copied ? "Email Copied to Clipboard!" : "Copy Email"}</span>
              </button>

              <a
                href={`mailto:${email}`}
                className="flex items-center justify-center gap-2 rounded-lg border border-white/10 hover:border-white/20 bg-white/[0.03] px-5 py-3 font-mono text-xs text-slate-300 hover:text-white transition-all"
              >
                <Mail size={14} className="text-blue-400" />
                <span>Open Mail App</span>
              </a>
            </div>

            <div className="mt-4 font-mono text-[11px] text-slate-500">
              Primary: <span className="text-slate-300">{email}</span>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-white/[0.07] bg-[#0c0e12] p-6">
              <h3 className="font-mono text-xs font-semibold text-white uppercase tracking-wider mb-4 pb-2 border-b border-white/5">
                Verified Communication Channels
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* GitHub */}
                <a
                  href="https://github.com/shr3y4n"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/[0.05] bg-white/[0.02] p-4 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all group flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded border border-white/10 bg-white/[0.04] flex items-center justify-center group-hover:text-blue-400 transition-colors">
                      <Github size={16} />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-semibold text-white block">GitHub</span>
                      <span className="text-[10px] text-slate-500">@shr3y4n</span>
                    </div>
                  </div>
                  <ArrowUpRight size={13} className="text-slate-500 group-hover:text-white transition-colors" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/shreyan-dey-917184197"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/[0.05] bg-white/[0.02] p-4 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all group flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded border border-white/10 bg-white/[0.04] flex items-center justify-center group-hover:text-blue-400 transition-colors">
                      <Linkedin size={16} />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-semibold text-white block">LinkedIn</span>
                      <span className="text-[10px] text-slate-500">Shreyan Dey</span>
                    </div>
                  </div>
                  <ArrowUpRight size={13} className="text-slate-500 group-hover:text-white transition-colors" />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/shr3y4nn"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/[0.05] bg-white/[0.02] p-4 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all group flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded border border-white/10 bg-white/[0.04] flex items-center justify-center group-hover:text-blue-400 transition-colors">
                      <Instagram size={16} />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-semibold text-white block">Instagram</span>
                      <span className="text-[10px] text-slate-500">@shr3y4nn</span>
                    </div>
                  </div>
                  <ArrowUpRight size={13} className="text-slate-500 group-hover:text-white transition-colors" />
                </a>

                {/* Direct Email Link */}
                <a
                  href={`mailto:${email}`}
                  className="rounded-lg border border-white/[0.05] bg-white/[0.02] p-4 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all group flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded border border-white/10 bg-white/[0.04] flex items-center justify-center group-hover:text-blue-400 transition-colors">
                      <Mail size={16} />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-semibold text-white block">Direct Inquiries</span>
                      <span className="text-[10px] text-slate-500">Inbox</span>
                    </div>
                  </div>
                  <ArrowUpRight size={13} className="text-slate-500 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
