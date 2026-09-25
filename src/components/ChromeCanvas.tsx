import React, { useEffect, useRef } from 'react';

export type ChromeTheme = 'chrome' | 'obsidian' | 'iridescent' | 'gold';
export type ChromeGeometry = 'interlocking' | 'torus' | 'gyro';

interface ChromeCanvasProps {
  className?: string;
  size?: number; // base diameter
  interactive?: boolean;
  theme?: ChromeTheme;
  geometry?: ChromeGeometry;
  speed?: number;
  onStatsUpdate?: (stats: { x: number; y: number; fps: number; angleX: number; angleY: number }) => void;
}

export const ChromeCanvas: React.FC<ChromeCanvasProps> = ({
  className = '',
  size = 480,
  interactive = true,
  theme = 'chrome',
  geometry = 'interlocking',
  speed = 1,
  onStatsUpdate,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const isHovered = useRef(false);
  const isDragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    let lastTime = performance.now();
    let frameCount = 0;
    let currentFps = 60;

    // Set high-DPI canvas resolution
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;

    // Mouse tracker
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);

      if (isDragging.current) {
        const deltaX = (e.clientX - lastMouse.current.x) * 0.01;
        const deltaY = (e.clientY - lastMouse.current.y) * 0.01;
        mousePos.current.targetX += deltaX * 2;
        mousePos.current.targetY += deltaY * 2;
        lastMouse.current = { x: e.clientX, y: e.clientY };
      } else {
        mousePos.current.targetX = Math.max(-1.5, Math.min(1.5, dx));
        mousePos.current.targetY = Math.max(-1.5, Math.min(1.5, dy));
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      lastMouse.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    const handleMouseEnter = () => { isHovered.current = true; };
    const handleMouseLeave = () => {
      isHovered.current = false;
      isDragging.current = false;
      mousePos.current.targetX = 0;
      mousePos.current.targetY = 0;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      canvas.addEventListener('mousedown', handleMouseDown);
      canvas.addEventListener('mouseenter', handleMouseEnter);
      canvas.addEventListener('mouseleave', handleMouseLeave);
    }

    // 3D Point transformation & projection helper
    type Point3D = { x: number; y: number; z: number };

    const rotateX = (p: Point3D, angle: number): Point3D => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return { x: p.x, y: p.y * cos - p.z * sin, z: p.y * sin + p.z * cos };
    };

    const rotateY = (p: Point3D, angle: number): Point3D => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return { x: p.x * cos + p.z * sin, y: p.y, z: -p.x * sin + p.z * cos };
    };

    const rotateZ = (p: Point3D, angle: number): Point3D => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return { x: p.x * cos - p.y * sin, y: p.x * sin + p.y * cos, z: p.z };
    };

    // Render loop
    const render = () => {
      time += 0.015 * speed;

      // FPS calculation
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 500) {
        currentFps = Math.round((frameCount * 1000) / (now - lastTime));
        frameCount = 0;
        lastTime = now;
      }

      // Smooth mouse interpolation with inertia
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.06;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.06;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, size, size);

      const centerX = size / 2;
      const centerY = size / 2;

      // Ambient chromatic glow
      const glowGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        size * 0.08,
        centerX,
        centerY,
        size * 0.48
      );

      if (theme === 'gold') {
        glowGrad.addColorStop(0, 'rgba(234, 179, 8, 0.12)');
        glowGrad.addColorStop(0.5, 'rgba(245, 158, 11, 0.06)');
      } else if (theme === 'obsidian') {
        glowGrad.addColorStop(0, 'rgba(120, 113, 108, 0.08)');
        glowGrad.addColorStop(0.5, 'rgba(50, 50, 55, 0.04)');
      } else if (theme === 'iridescent') {
        glowGrad.addColorStop(0, 'rgba(168, 85, 247, 0.14)');
        glowGrad.addColorStop(0.5, 'rgba(236, 72, 153, 0.08)');
      } else {
        glowGrad.addColorStop(0, 'rgba(56, 189, 248, 0.12)');
        glowGrad.addColorStop(0.5, 'rgba(236, 72, 153, 0.06)');
      }
      glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, size * 0.48, 0, Math.PI * 2);
      ctx.fill();

      // Radii metrics
      const majorRadius = size * 0.28;
      const minorRadius = size * 0.038;
      const numRings = 46;
      const numSegments = 18;

      const rotX1 = 0.4 + mousePos.current.y * 0.6 + Math.sin(time * 0.7) * 0.1;
      const rotY1 = time * 0.5 + mousePos.current.x * 0.8;
      const rotZ1 = Math.cos(time * 0.4) * 0.15;

      const rotX2 = -0.5 + mousePos.current.y * 0.5 + Math.cos(time * 0.6) * 0.1;
      const rotY2 = -time * 0.4 - mousePos.current.x * 0.7 + 1.2;
      const rotZ2 = 0.8 + Math.sin(time * 0.5) * 0.1;

      // Gyro third ring
      const rotX3 = Math.cos(time * 0.3) * 0.2;
      const rotY3 = time * 0.35 + 2.0;
      const rotZ3 = -0.6 + Math.sin(time * 0.4) * 0.1;

      if (onStatsUpdate && frameCount % 10 === 0) {
        onStatsUpdate({
          x: Number(mousePos.current.x.toFixed(2)),
          y: Number(mousePos.current.y.toFixed(2)),
          fps: currentFps,
          angleX: Math.round(((rotX1 * 180) / Math.PI) % 360),
          angleY: Math.round(((rotY1 * 180) / Math.PI) % 360),
        });
      }

      interface SegmentData {
        p1: Point3D;
        p2: Point3D;
        normal: Point3D;
        avgZ: number;
        ringId: number;
      }

      const segments: SegmentData[] = [];

      const generateTorus = (
        rMajor: number,
        rMinor: number,
        rotAngles: { x: number; y: number; z: number },
        ringId: number
      ) => {
        for (let i = 0; i < numRings; i++) {
          const u1 = (i / numRings) * Math.PI * 2;
          const u2 = ((i + 1) / numRings) * Math.PI * 2;

          for (let j = 0; j < numSegments; j++) {
            const v = (j / numSegments) * Math.PI * 2;

            let pt1: Point3D = {
              x: (rMajor + rMinor * Math.cos(v)) * Math.cos(u1),
              y: (rMajor + rMinor * Math.cos(v)) * Math.sin(u1),
              z: rMinor * Math.sin(v),
            };

            let pt2: Point3D = {
              x: (rMajor + rMinor * Math.cos(v)) * Math.cos(u2),
              y: (rMajor + rMinor * Math.cos(v)) * Math.sin(u2),
              z: rMinor * Math.sin(v),
            };

            let norm: Point3D = {
              x: Math.cos(v) * Math.cos(u1),
              y: Math.cos(v) * Math.sin(u1),
              z: Math.sin(v),
            };

            pt1 = rotateZ(rotateY(rotateX(pt1, rotAngles.x), rotAngles.y), rotAngles.z);
            pt2 = rotateZ(rotateY(rotateX(pt2, rotAngles.x), rotAngles.y), rotAngles.z);
            norm = rotateZ(rotateY(rotateX(norm, rotAngles.x), rotAngles.y), rotAngles.z);

            const avgZ = (pt1.z + pt2.z) / 2;
            segments.push({
              p1: pt1,
              p2: pt2,
              normal: norm,
              avgZ,
              ringId,
            });
          }
        }
      };

      if (geometry === 'torus') {
        generateTorus(majorRadius * 1.1, minorRadius * 1.2, { x: rotX1, y: rotY1, z: rotZ1 }, 1);
      } else if (geometry === 'gyro') {
        generateTorus(majorRadius * 1.2, minorRadius * 0.8, { x: rotX1, y: rotY1, z: rotZ1 }, 1);
        generateTorus(majorRadius * 0.95, minorRadius * 0.8, { x: rotX2, y: rotY2, z: rotZ2 }, 2);
        generateTorus(majorRadius * 0.72, minorRadius * 0.8, { x: rotX3, y: rotY3, z: rotZ3 }, 3);
      } else {
        // Interlocking
        generateTorus(majorRadius, minorRadius, { x: rotX1, y: rotY1, z: rotZ1 }, 1);
        generateTorus(majorRadius * 0.95, minorRadius * 0.95, { x: rotX2, y: rotY2, z: rotZ2 }, 2);
      }

      // Sort back to front for depth ordering
      segments.sort((a, b) => a.avgZ - b.avgZ);

      // Light vector
      const light: Point3D = { x: 0.5, y: -0.7, z: 0.8 };
      const lightMag = Math.hypot(light.x, light.y, light.z);
      const lx = light.x / lightMag;
      const ly = light.y / lightMag;
      const lz = light.z / lightMag;

      for (const seg of segments) {
        const fov = 350;
        const scale1 = fov / (fov + seg.p1.z);
        const scale2 = fov / (fov + seg.p2.z);

        const x1 = centerX + seg.p1.x * scale1;
        const y1 = centerY + seg.p1.y * scale1;
        const x2 = centerX + seg.p2.x * scale2;
        const y2 = centerY + seg.p2.y * scale2;

        const dot = Math.max(0, seg.normal.x * lx + seg.normal.y * ly + seg.normal.z * lz);
        const spec = Math.pow(dot, 16);

        let rShift = 200;
        let gShift = 215;
        let bShift = 230;

        if (theme === 'gold') {
          rShift = Math.floor(220 + spec * 35);
          gShift = Math.floor(180 + spec * 55);
          bShift = Math.floor(90 + spec * 60);
        } else if (theme === 'obsidian') {
          rShift = Math.floor(70 + dot * 50 + spec * 120);
          gShift = Math.floor(75 + dot * 50 + spec * 120);
          bShift = Math.floor(85 + dot * 50 + spec * 120);
        } else if (theme === 'iridescent') {
          const iridAngle = Math.atan2(seg.normal.y, seg.normal.x) + time * 0.5;
          rShift = Math.floor(190 + Math.sin(iridAngle) * 65 + spec * 60);
          gShift = Math.floor(120 + Math.sin(iridAngle + 2) * 65 + spec * 60);
          bShift = Math.floor(255 - Math.cos(iridAngle) * 40 + spec * 20);
        } else {
          // Classic Chrome
          const iridAngle = Math.atan2(seg.normal.y, seg.normal.x) + time * 0.4;
          rShift = Math.floor(190 + Math.sin(iridAngle) * 45 + spec * 65);
          gShift = Math.floor(220 + Math.sin(iridAngle + 2) * 35 + spec * 35);
          bShift = Math.floor(255 - Math.cos(iridAngle) * 20 + spec * 10);
        }

        const alpha = Math.max(0.2, Math.min(0.95, 0.5 + dot * 0.45 + (seg.avgZ / (majorRadius * 1.5)) * 0.2));

        ctx.strokeStyle = `rgba(${Math.min(255, rShift)}, ${Math.min(255, gShift)}, ${Math.min(255, bShift)}, ${alpha})`;
        ctx.lineWidth = Math.max(1.2, 3.2 * scale1);
        ctx.lineCap = 'round';

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        if (spec > 0.75) {
          ctx.fillStyle = `rgba(255, 255, 255, ${spec * 0.9})`;
          ctx.beginPath();
          ctx.arc(x1, y1, 2.5 * scale1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Aesthetic cyber orbit rings
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 8]);
      ctx.beginPath();
      ctx.arc(centerX, centerY, majorRadius * 1.45, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        canvas.removeEventListener('mousedown', handleMouseDown);
        canvas.removeEventListener('mouseenter', handleMouseEnter);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [size, interactive, theme, geometry, speed, onStatsUpdate]);

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <canvas
        ref={canvasRef}
        className="cursor-grab active:cursor-grabbing drop-shadow-[0_0_45px_rgba(56,189,248,0.22)] transition-transform duration-300"
        title="Interactive 3D Chrome Rings (Drag & Tilt)"
      />
      {/* Corner crosshairs */}
      <div className="absolute top-2 left-2 text-[10px] text-zinc-600 font-mono tracking-widest pointer-events-none">+</div>
      <div className="absolute top-2 right-2 text-[10px] text-zinc-600 font-mono tracking-widest pointer-events-none">+</div>
      <div className="absolute bottom-2 left-2 text-[10px] text-zinc-600 font-mono tracking-widest pointer-events-none">+</div>
      <div className="absolute bottom-2 right-2 text-[10px] text-zinc-600 font-mono tracking-widest pointer-events-none">+</div>
    </div>
  );
};
