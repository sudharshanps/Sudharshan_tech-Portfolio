import React, { useRef, useState, useEffect } from 'react';
import { Cpu, ShieldCheck, Database, Layers, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/portfolioData';

export const Hero3DVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 0, y: 0 });
  };

  const rotX = prefersReducedMotion ? 0 : -coords.y * 12;
  const rotY = prefersReducedMotion ? 0 : coords.x * 12;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center perspective-1000 select-none"
    >
      {/* 3D Transform Stage */}
      <div
        className="w-full h-full relative preserve-3d transition-transform duration-300 ease-out flex items-center justify-center p-4"
        style={{
          transform: `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`,
        }}
      >
        {/* Layer 0: Ambient Tech Glow Backing */}
        <div className="absolute inset-8 rounded-full bg-blue-500/10 blur-3xl -z-10 pointer-events-none" />

        {/* Layer 1: Concentric 3D Geometric Calibration Rings */}
        <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-slate-300/60 [transform:translateZ(-20px)] flex items-center justify-center pointer-events-none">
          <div className="w-56 h-56 rounded-full border border-dashed border-brand-blue/30 animate-[spin_60s_linear_infinite]" />
        </div>

        {/* Layer 2: Main Isometric Technology Monolith Card */}
        <div className="relative w-full max-w-sm bg-brand-navy rounded-2xl border border-slate-700/80 shadow-2xl p-6 text-white preserve-3d [transform:translateZ(20px)] overflow-hidden">
          {/* Subtle grid in dark mode */}
          <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />

          {/* Header Bar */}
          <div className="relative z-10 flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-medium text-slate-300 tracking-wide">
                ST // ARCHITECTURE_V2
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-brand-blue-glow border border-slate-700">
              3D ISOMETRIC CORE
            </span>
          </div>

          {/* Middle: Digital System Nodes */}
          <div className="relative z-10 py-5 space-y-3.5">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 [transform:translateZ(10px)]">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-blue-600/20 text-brand-blue-glow flex items-center justify-center border border-blue-500/30">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold block text-slate-200">Vision & AI Pipeline</span>
                  <span className="text-[10px] text-slate-400 font-mono">Edge Heuristics Active</span>
                </div>
              </div>
              <span className="text-xs font-mono text-emerald-400 font-semibold">&lt; 32ms</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 [transform:translateZ(15px)]">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-purple-600/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold block text-slate-200">Full-Stack Systems</span>
                  <span className="text-[10px] text-slate-400 font-mono">React · TypeScript · Spring</span>
                </div>
              </div>
              <span className="text-xs font-mono text-blue-400 font-semibold">Verified</span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 [transform:translateZ(20px)]">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-emerald-600/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold block text-slate-200">OWASP Hardened</span>
                  <span className="text-[10px] text-slate-400 font-mono">Zero Speculative Bloat</span>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-300 font-semibold">100%</span>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="relative z-10 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-brand-blue-glow" />
              <span>Coimbatore, India</span>
            </span>
            <div className="h-5 w-auto">
              <img
                src={COMPANY_INFO.officialLogoUrl}
                alt="ST Logo"
                className="h-full w-auto object-contain brightness-110"
              />
            </div>
          </div>
        </div>

        {/* Layer 3: Floating Satellite Floating Depth Badges */}
        <div
          className="absolute -top-2 -right-4 px-3 py-1.5 rounded-xl bg-white text-brand-navy shadow-soft-lg border border-slate-200 text-xs font-mono font-semibold preserve-3d [transform:translateZ(45px)] hidden sm:flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
          <span>Interactive 3D Depth</span>
        </div>

        <div
          className="absolute -bottom-2 -left-4 px-3 py-1.5 rounded-xl bg-white text-brand-navy shadow-soft-lg border border-slate-200 text-xs font-mono font-semibold preserve-3d [transform:translateZ(40px)] hidden sm:flex items-center gap-2"
        >
          <Layers className="w-3.5 h-3.5 text-brand-blue" />
          <span>Subtle Parallax</span>
        </div>
      </div>
    </div>
  );
};
