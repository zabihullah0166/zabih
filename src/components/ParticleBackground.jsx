import React, { useEffect, useRef, useCallback } from 'react';

/**
 * ParticleBackground – Full-page fixed canvas layer.
 * Covers the entire site (not just hero) with larger, more visible glowing particles.
 * pointer-events: none → never blocks any interaction.
 * Respects prefers-reduced-motion → returns null (no canvas rendered).
 * Pauses on tab hide to save GPU.
 */
export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const particlesRef = useRef([]);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Larger count & more visible for full-page
  const PARTICLE_COUNT = 90;

  const COLOURS = [
    'rgba(59, 130, 246,',   // blue  – --accent
    'rgba(139, 92, 246,',   // purple
    'rgba(6, 182, 212,',    // cyan
    'rgba(99, 179, 237,',   // sky
    'rgba(165, 132, 254,',  // lavender
  ];

  const rand = (a, b) => Math.random() * (b - a) + a;

  const createParticle = useCallback((w, h) => {
    const colour = COLOURS[Math.floor(Math.random() * COLOURS.length)];
    return {
      x: rand(0, w),
      y: rand(0, h),
      // Bigger radius range (was 1.2-3.8, now 2.5-6)
      r: rand(2.5, 6),
      // Higher base opacity for visibility (was 0.08-0.45, now 0.15-0.65)
      baseOpacity: rand(0.15, 0.65),
      opacity: 0,
      vx: rand(-0.25, 0.25),
      vy: rand(-0.25, 0.25),
      colour,
      phase: rand(0, Math.PI * 2),
      pulseSpeed: rand(0.005, 0.014),
    };
  }, []); // eslint-disable-line

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Resize: canvas tracks full window
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // cap at 2× for perf
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.scale(dpr, dpr);
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () =>
        createParticle(w, h)
      );
    };

    window.addEventListener('resize', resize);
    resize();

    // Subtle mouse tracking
    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Pause when tab is hidden
    const onVisChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animFrameRef.current);
      } else {
        animFrameRef.current = requestAnimationFrame(draw);
      }
    };
    document.addEventListener('visibilitychange', onVisChange);

    const MOUSE_RADIUS = 130;
    const MOUSE_STRENGTH = 0.03;

    function draw() {
      const W = window.innerWidth;
      const H = window.innerHeight;
      ctx.clearRect(0, 0, W, H);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const p of particlesRef.current) {
        // Twinkle pulse
        p.phase += p.pulseSpeed;
        const pulse = (Math.sin(p.phase) + 1) / 2;
        p.opacity = p.baseOpacity * 0.55 + pulse * p.baseOpacity * 0.45;

        // Gentle mouse repulsion
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (1 - dist / MOUSE_RADIUS) * MOUSE_STRENGTH;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // Friction
        p.vx *= 0.994;
        p.vy *= 0.994;
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < -p.r) p.x = W + p.r;
        if (p.x > W + p.r) p.x = -p.r;
        if (p.y < -p.r) p.y = H + p.r;
        if (p.y > H + p.r) p.y = -p.r;

        // Outer soft glow halo
        const glowR = p.r * 4.5;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR);
        grad.addColorStop(0, `${p.colour} ${p.opacity * 0.6})`);
        grad.addColorStop(0.4, `${p.colour} ${p.opacity * 0.3})`);
        grad.addColorStop(1, `${p.colour} 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Crisp bright core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 0.7, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colour} ${Math.min(p.opacity * 1.8, 0.85)})`;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(draw);
    }

    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('visibilitychange', onVisChange);
    };
  }, [prefersReducedMotion, createParticle]);

  if (prefersReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        display: 'block',
      }}
    />
  );
}
