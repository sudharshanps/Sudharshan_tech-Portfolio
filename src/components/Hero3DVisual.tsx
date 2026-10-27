import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck } from 'lucide-react';

export const Hero3DVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setCoords({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  // Subtle restrained tilt angles (max ~6-8 deg)
  const rotX = prefersReducedMotion ? 0 : -coords.y * 9;
  const rotY = prefersReducedMotion ? 0 : coords.x * 11;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[460px] lg:max-w-[480px] mx-auto py-2 flex items-center justify-center [perspective:1200px] select-none"
    >
      {/* 3D Transform Stage with Parallax & Floating Motion */}
      <motion.div
        animate={
          prefersReducedMotion
            ? { y: 0 }
            : {
                y: isHovered ? [-3, 3, -3] : [-5, 6, -5],
              }
        }
        transition={{
          duration: isHovered ? 4.5 : 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-full relative preserve-3d transition-transform duration-300 ease-out flex items-center justify-center"
        style={{
          transform: `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`,
        }}
      >
        {/* Layer 0: Ambient Radiant Tech Core Glow Backing */}
        <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-blue-500/15 blur-3xl -z-10 pointer-events-none [transform:translateZ(-40px)]" />

        {/* Layer 1: Concentric 3D Geometric Calibration Rings */}
        <div className="absolute w-72 h-72 sm:w-84 sm:h-84 rounded-full border border-slate-200/70 [transform:translateZ(-25px)] flex items-center justify-center pointer-events-none">
          <div className="w-56 h-56 rounded-full border border-dashed border-brand-blue/25 animate-[spin_90s_linear_infinite]" />
        </div>

        {/* Layer 2: Main 3D Isometric Technology Core Image with Edge Blending Mask */}
        <div className="relative w-full aspect-[4/3] flex items-center justify-center preserve-3d [transform:translateZ(15px)]">
          <img
            src="/assets/hero-3d-core.png"
            alt="SUDHARSHAN_TECH 3D Isometric Technology Core"
            className="w-full h-full object-contain pointer-events-none transition-transform duration-300 ease-out"
            style={{
              maskImage:
                'radial-gradient(ellipse 88% 82% at 50% 50%, black 60%, rgba(0,0,0,0.85) 78%, transparent 98%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 88% 82% at 50% 50%, black 60%, rgba(0,0,0,0.85) 78%, transparent 98%)',
            }}
            loading="eager"
          />

          {/* Coordinate Watermark Labels for Technical Atmosphere */}
          <span className="absolute top-2 left-4 text-[9.5px] font-mono text-slate-400 tracking-wider [transform:translateZ(25px)] pointer-events-none hidden sm:inline-block">
            ST-CORE // SYS_01
          </span>
          <span className="absolute bottom-2 right-4 text-[9.5px] font-mono text-slate-400 tracking-wider [transform:translateZ(25px)] pointer-events-none hidden sm:inline-block">
            AI_VISION // CLOUD_NET
          </span>
        </div>

        {/* Layer 3: Floating Satellite Parallax Badges (High Z-planes for Genuine Depth) */}
        
        {/* Top-Right: 3D Isometric Core Tag */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="absolute -top-2 -right-1 sm:right-1 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md shadow-soft-lg border border-slate-200/90 text-brand-navy flex items-center gap-2 [transform:translateZ(45px)] pointer-events-auto cursor-default"
        >
          <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
          <span className="text-[11px] font-mono font-semibold tracking-wide">
            3D Isometric Core
          </span>
        </motion.div>

        {/* Bottom-Left: Digital Systems Architecture Tag */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="absolute -bottom-2 -left-1 sm:left-1 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md shadow-soft-lg border border-slate-200/90 text-brand-navy flex items-center gap-2 [transform:translateZ(40px)] pointer-events-auto cursor-default"
        >
          <Cpu className="w-3.5 h-3.5 text-brand-blue" />
          <span className="text-[11px] font-mono font-semibold text-slate-700">
            Digital Systems Architecture
          </span>
        </motion.div>

        {/* Center-Left Micro Indicator: Verified Security */}
        <div className="absolute top-1/2 -left-4 -translate-y-1/2 hidden md:flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/90 backdrop-blur-xs border border-slate-200/80 shadow-xs [transform:translateZ(30px)] pointer-events-none">
          <ShieldCheck className="w-3 h-3 text-emerald-500" />
          <span className="text-[10px] font-mono text-slate-600 font-medium">OWASP Hardened</span>
        </div>

      </motion.div>
    </div>
  );
};
