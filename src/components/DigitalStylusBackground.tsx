import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const DigitalStylusBackground: React.FC = () => {
  // Smooth interactive mouse parallax offset
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 45, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normalizedX = (e.clientX / innerWidth - 0.5) * 60;
      const normalizedY = (e.clientY / innerHeight - 0.5) * 40;
      mouseX.set(normalizedX);
      mouseY.set(normalizedY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-visible z-0 select-none">
      {/* Ambient Pulsing Aurora Behind Text */}
      <motion.div
        className="absolute w-[600px] h-[220px] rounded-full blur-[90px] pointer-events-none opacity-40 mix-blend-screen"
        animate={{
          scale: [0.85, 1.15, 0.95, 1.2, 0.85],
          opacity: [0.25, 0.45, 0.3, 0.5, 0.25],
          x: [-60, 80, -40, 60, -60],
          y: [-20, 20, -10, 15, -20],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: 'radial-gradient(ellipse at center, rgba(16,185,129,0.4) 0%, rgba(6,182,212,0.3) 45%, rgba(139,92,246,0.15) 75%, transparent 100%)',
        }}
      />

      {/* Cyber Drafting SVG Grid & Vector Bezier Splines */}
      <svg
        className="absolute w-[940px] h-[400px] max-w-none opacity-80 overflow-visible"
        viewBox="0 0 940 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main Neon Ink Ribbon Gradient */}
          <linearGradient id="neonInkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.9" />
            <stop offset="35%" stopColor="#06b6d4" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
          </linearGradient>

          {/* Electric Glow Filter */}
          <filter id="hyperGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" result="glow1" />
            <feGaussianBlur stdDeviation="4" result="glow2" />
            <feMerge>
              <feMergeNode in="glow1" />
              <feMergeNode in="glow2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient id="sparkGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="1" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer Geometric Drafting Coordinate Circles */}
        <circle cx="210" cy="190" r="45" stroke="#06b6d4" strokeWidth="0.8" strokeDasharray="3 4" strokeOpacity="0.25" />
        <circle cx="730" cy="180" r="55" stroke="#10b981" strokeWidth="0.8" strokeDasharray="4 6" strokeOpacity="0.2" />

        {/* Vector Tangent Anchor Coordinates (Vector Design Tool Aesthetic) */}
        <g stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.4">
          <line x1="180" y1="210" x2="240" y2="160" />
          <circle cx="180" cy="210" r="2.5" fill="#38bdf8" />
          <rect x="238" y="158" width="5" height="5" fill="#06b6d4" />

          <line x1="700" y1="160" x2="760" y2="210" />
          <circle cx="760" cy="210" r="2.5" fill="#10b981" />
          <rect x="698" y="158" width="5" height="5" fill="#10b981" />
        </g>

        {/* Primary Glowing Calligraphic Vector Stroke (Double Pass for Intense Core & Glow) */}
        <motion.path
          d="M 110 210 C 230 110, 390 280, 520 170 S 760 120, 830 200 C 690 280, 340 310, 160 220"
          stroke="url(#neonInkGradient)"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          filter="url(#hyperGlow)"
          animate={{
            pathOffset: [0, 1],
            strokeDasharray: ["120 400", "200 300", "120 400"],
            opacity: [0.6, 0.95, 0.6],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Core Laser Needle Line */}
        <motion.path
          d="M 110 210 C 230 110, 390 280, 520 170 S 760 120, 830 200 C 690 280, 340 310, 160 220"
          stroke="#ffffff"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          animate={{
            pathOffset: [0, 1],
            strokeDasharray: ["60 460", "100 420", "60 460"],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Dynamic Secondary Drafting Arc with Counter Flow */}
        <motion.path
          d="M 170 170 C 310 90, 620 270, 780 160 C 640 60, 300 250, 190 230"
          stroke="#06b6d4"
          strokeWidth="1"
          strokeDasharray="6 8"
          strokeOpacity="0.35"
          fill="none"
          animate={{
            strokeDashoffset: [0, -200],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating Drafting Particle Sparks */}
        <motion.circle
          cx="280"
          cy="150"
          r="3"
          fill="url(#sparkGlow)"
          animate={{
            y: [-15, 15, -15],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="510"
          cy="210"
          r="4"
          fill="url(#sparkGlow)"
          animate={{
            y: [20, -20, 20],
            opacity: [0.3, 0.9, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.circle
          cx="710"
          cy="170"
          r="3"
          fill="url(#sparkGlow)"
          animate={{
            y: [-25, 20, -25],
            opacity: [0.2, 0.85, 0.2],
            scale: [0.7, 1.3, 0.7],
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </svg>

      {/* Cyber 3D Digital Stylus with Realistic Dynamic Tilt, Parallax & Light Bloom */}
      <motion.div
        className="absolute pointer-events-none overflow-visible"
        style={{
          x: springX,
          y: springY,
          transformOrigin: '26px 26px',
        }}
      >
        <motion.div
          animate={{
            x: [-240, 190, 70, -200, 240, -240],
            y: [-45, 35, -50, 40, -25, -45],
            rotate: [-32, -48, -26, -44, -30, -32],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative overflow-visible"
        >
          {/* Active Laser Contact Spark Halo at Nib Tip */}
          <div className="absolute top-[26px] left-[26px] -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-cyan-400/20 rounded-full blur-lg animate-pulse" />
          <div className="absolute top-[26px] left-[26px] -translate-x-1/2 -translate-y-1/2 w-7 h-7 bg-emerald-400/40 rounded-full blur-md" />
          <div className="absolute top-[26px] left-[26px] -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_12px_#38bdf8]" />

          {/* Precision 3D Vector Digital Stylus Body */}
          <svg
            width="320"
            height="260"
            viewBox="0 0 320 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-visible drop-shadow-[0_16px_36px_rgba(0,0,0,0.9)] filter"
          >
            <defs>
              {/* Obsidian & Titanium Metallic Gradient */}
              <linearGradient id="stylusBody" x1="0" y1="0" x2="0" y2="100%">
                <stop offset="0%" stopColor="#64748b" />
                <stop offset="18%" stopColor="#1e2430" />
                <stop offset="48%" stopColor="#0b0d12" />
                <stop offset="78%" stopColor="#334155" />
                <stop offset="100%" stopColor="#090b0e" />
              </linearGradient>

              {/* Matte Rubberized Grip Gradient */}
              <linearGradient id="stylusGrip" x1="0" y1="0" x2="0" y2="100%">
                <stop offset="0%" stopColor="#2c323d" />
                <stop offset="45%" stopColor="#15171d" />
                <stop offset="85%" stopColor="#0c0e12" />
                <stop offset="100%" stopColor="#1c2027" />
              </linearGradient>

              {/* Mirror Chrome Bevel & Ring Accent */}
              <linearGradient id="chromeBevel" x1="0" y1="0" x2="0" y2="100%">
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="35%" stopColor="#94a3b8" />
                <stop offset="65%" stopColor="#f1f5f9" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>

              {/* Laser Core Nib Gradient */}
              <linearGradient id="laserNib" x1="0" y1="0" x2="100%" y2="0">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="40%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>

              {/* Illuminated Cyan Laser Ring */}
              <linearGradient id="neonRing" x1="0" y1="0" x2="0" y2="100%">
                <stop offset="0%" stopColor="#67e8f9" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#0891b2" />
              </linearGradient>
            </defs>

            {/* Rotated drafting orientation (42 degrees) with full padding */}
            <g transform="translate(26, 26) rotate(42)">
              {/* Ultra-Fine Precision Diamond Nib */}
              <path d="M 0 0 L 16 -3 L 16 3 Z" fill="url(#laserNib)" />
              {/* Nib Spark Reflection */}
              <circle cx="1.5" cy="0" r="1.6" fill="#ffffff" />

              {/* Front Tapered Nose Cone */}
              <path d="M 16 -3.5 L 38 -6.5 L 38 6.5 L 16 3.5 Z" fill="url(#stylusGrip)" />

              {/* Glowing Laser Collar Accent Ring */}
              <rect x="38" y="-6.5" width="2.5" height="13" fill="url(#neonRing)" />
              <rect x="38" y="-6.5" width="2.5" height="13" fill="#38bdf8" opacity="0.6" className="animate-pulse" />

              {/* Ergonomic Textured Grip Section */}
              <rect x="40.5" y="-7.5" width="62" height="15" rx="2" fill="url(#stylusGrip)" />

              {/* Tactile Rocker Switch (Dual Chamfered Buttons) */}
              <rect x="54" y="-5.5" width="34" height="4.5" rx="2" fill="#07090c" stroke="#334155" strokeWidth="0.8" />
              <line x1="71" y1="-5.5" x2="71" y2="-1" stroke="#64748b" strokeWidth="0.8" />
              <circle cx="62" cy="-3.2" r="1.2" fill="#10b981" />
              <circle cx="80" cy="-3.2" r="1.2" fill="#38bdf8" />

              {/* Grip Micro-Grooves for Precision Tactility */}
              <line x1="45" y1="-7" x2="45" y2="7" stroke="#232731" strokeWidth="1" />
              <line x1="49" y1="-7" x2="49" y2="7" stroke="#232731" strokeWidth="1" />
              <line x1="93" y1="-7" x2="93" y2="7" stroke="#232731" strokeWidth="1" />
              <line x1="97" y1="-7" x2="97" y2="7" stroke="#232731" strokeWidth="1" />

              {/* Mid-body Chrome Bevel Ring */}
              <rect x="102.5" y="-7.5" width="3.5" height="15" fill="url(#chromeBevel)" />

              {/* Main Titanium/Obsidian Barrel */}
              <rect x="106" y="-7" width="112" height="14" rx="1.5" fill="url(#stylusBody)" />

              {/* Longitudinal Mirror Specular Glint */}
              <rect x="106" y="-4.8" width="112" height="1.6" fill="#ffffff" opacity="0.32" />
              <rect x="106" y="-2" width="112" height="0.8" fill="#ffffff" opacity="0.1" />

              {/* Subtle Laser-Etched Cyber Branding */}
              <text
                x="132"
                y="1.5"
                fill="#cbd5e1"
                opacity="0.75"
                fontSize="4.8"
                fontFamily="monospace"
                fontWeight="bold"
                letterSpacing="1"
              >
                SAKIB ALAM // SPATIAL STYLUS
              </text>

              {/* Power / Status Indicator Light Ring */}
              <rect x="198" y="-1.5" width="8" height="3" rx="1.5" fill="#10b981" opacity="0.95" />
              <circle cx="202" cy="0" r="1" fill="#ffffff" />

              {/* Rear Accent Chrome Collar */}
              <rect x="218" y="-7" width="3" height="14" fill="url(#chromeBevel)" />

              {/* Magnetic Fast-Charge Tail / Digital Eraser */}
              <path d="M 221 -6.5 L 234 -5 C 237 -4.5 238 4.5 234 5 L 221 6.5 Z" fill="#151921" />
              <circle cx="233" cy="0" r="2.2" fill="#0b0d12" stroke="#475569" strokeWidth="0.8" />
              <circle cx="233" cy="0" r="1" fill="#06b6d4" opacity="0.8" />
            </g>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};
