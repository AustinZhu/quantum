"use client";

/**
 * Taoist cosmos — dual-vortex particle animation.
 *
 * Additive ("lighter") compositing means particle density becomes luminosity —
 * spiral arms glow bright where many particles overlap, just like a real galaxy.
 *
 * Constant change     : particles born, spiral, dissolve, reborn — endlessly
 * Circular uprising   : spiral arms rise outward; the cycle has no seam
 * Transcendental ∞    : phase resets without discontinuity; star field unbounded
 * Self-reference      : inner vortex = outer at ¼ scale, 3× faster rotation
 * Galactic            : differential rotation, nebulae, star field, dust haze
 * Taoism              : yin (inward/cool) ↔ yang (outward/warm); taijitu seeds;
 *                       single golden centre — the Tao, the undivided source
 */

import { useEffect, useRef } from "react";

const OUTER_N     = 420;
const INNER_N     = 160;
const STAR_N      = 100;
const OUTER_TURNS = 3.0;
const INNER_TURNS = 2.2;
const OUTER_ROT   = 0.065;  // rad/sec  outer ring
const INNER_ROT   = 0.21;   // rad/sec  inner ring  (differential rotation)
const SEED_ROT    = 0.36;   // rad/sec  taijitu seeds
const BREATHE_HZ  = 0.18;   // Hz       cosmic pulse

type Particle = {
  yang:   boolean; // outward/warm vs inward/cool
  outer:  boolean; // outer ring vs inner (self-referential)
  bright: boolean; // ~6% are oversized bright stars
  t:      number;  // phase  0..1
  speed:  number;
  spread: number;  // arm-width angular offset
};

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * Math.max(0, Math.min(1, t));
}

export function AnimatedPriceChart() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0, raf = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const r   = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Stars with warm ↔ cool colour variation (yellow-white → blue-white)
    const stars = Array.from({ length: STAR_N }, () => {
      const warmth = Math.random();
      return {
        x:  Math.random(), y: Math.random(),
        r:  0.2 + Math.random() * 1.4,
        a:  0.05 + Math.random() * 0.30,
        ph: Math.random() * Math.PI * 2,
        ts: 0.35 + Math.random() * 0.85,
        rC: Math.round(lerp(195, 255, warmth)),
        gC: Math.round(lerp(210, 240, warmth * 0.6)),
        bC: Math.round(lerp(255, 195, warmth)),
      };
    });

    // Particle pool
    const particles: Particle[] = [];
    for (let i = 0; i < OUTER_N; i++) {
      particles.push({
        yang:   i < OUTER_N / 2,
        outer:  true,
        bright: Math.random() < 0.055,
        t:      Math.random(),
        speed:  0.048 + Math.random() * 0.042,
        spread: (Math.random() - 0.5) * 0.14,   // tight arms
      });
    }
    for (let i = 0; i < INNER_N; i++) {
      particles.push({
        yang:   i < INNER_N / 2,
        outer:  false,
        bright: Math.random() < 0.07,
        t:      Math.random(),
        speed:  0.085 + Math.random() * 0.065,
        spread: (Math.random() - 0.5) * 0.20,
      });
    }

    let time = 0, lastTs = 0;

    const drawNebula = (
      ox: number, oy: number, rad: number,
      R: number, G: number, B: number, a: number,
    ) => {
      const cx = w / 2, cy = h / 2;
      const g  = ctx.createRadialGradient(cx + ox, cy + oy, 0, cx + ox, cy + oy, rad);
      g.addColorStop(0,   `rgba(${R},${G},${B},${a})`);
      g.addColorStop(0.5, `rgba(${R},${G},${B},${a * 0.28})`);
      g.addColorStop(1,   "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    };

    const draw = (ts: number) => {
      const dt = Math.min((ts - lastTs) / 1000, 0.05);
      lastTs = ts;
      time  += dt;

      ctx.clearRect(0, 0, w, h);

      const cx = w / 2, cy = h / 2;
      // Breathing outerR — cosmic heartbeat
      const breathe = 1 + 0.022 * Math.sin(time * BREATHE_HZ * Math.PI * 2);
      const outerR  = Math.min(w, h) * 0.43 * breathe;
      const innerR  = outerR * 0.22;
      const seedR   = innerR * 1.55;

      // ── Star field ──
      for (const s of stars) {
        const a = s.a * (0.55 + 0.45 * Math.sin(time * s.ts + s.ph));
        ctx.beginPath();
        ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.rC},${s.gC},${s.bC},${Math.max(0, a)})`;
        ctx.fill();
      }

      // ── Nebula atmosphere  (three drifting clouds) ──
      const pa = 0.52 + 0.48 * Math.sin(time * 0.52);
      const pb = 0.52 + 0.48 * Math.sin(time * 0.71 + 1.9);
      const pc = 0.52 + 0.48 * Math.sin(time * 0.61 + 3.7);
      const nd = outerR * 0.045;
      const na = time * 0.068;
      drawNebula(  outerR * 0.30 + nd * Math.cos(na),         -outerR * 0.20 + nd * Math.sin(na),         outerR * 0.80, 205, 105,  18, 0.062 * pa); // warm amber
      drawNebula( -outerR * 0.30 - nd * Math.cos(na + 1.5),   outerR * 0.20 - nd * Math.sin(na + 1.5),   outerR * 0.80,  18,  95, 205, 0.068 * pb); // cool blue
      drawNebula(  outerR * 0.04 + nd * Math.cos(na + 3.1),   outerR * 0.07 + nd * Math.sin(na + 3.1),   outerR * 0.52,  85,  28, 185, 0.030 * pc); // violet — the transcendent third

      // ── Centre glow — the Tao ──
      const cp = 0.68 + 0.32 * Math.sin(time * 1.8);
      const cOuter = ctx.createRadialGradient(cx, cy, 0, cx, cy, outerR * 0.48);
      cOuter.addColorStop(0,   `rgba(255,185,75,${0.14 * cp})`);
      cOuter.addColorStop(0.5, `rgba(100,55,220,${0.05 * cp})`);
      cOuter.addColorStop(1,   "rgba(0,0,0,0)");
      ctx.fillStyle = cOuter;
      ctx.fillRect(0, 0, w, h);

      const cInner = ctx.createRadialGradient(cx, cy, 0, cx, cy, outerR * 0.11);
      cInner.addColorStop(0, `rgba(255,225,145,${0.38 * cp})`);
      cInner.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = cInner;
      ctx.fillRect(0, 0, w, h);

      // Outer halo ring — the cosmic horizon
      ctx.save();
      ctx.globalAlpha = 0.032 + 0.014 * Math.sin(time * 0.38);
      ctx.strokeStyle = "rgba(160,195,255,1)";
      ctx.lineWidth   = 0.6;
      ctx.beginPath();
      ctx.arc(cx, cy, outerR * 1.045, 0, Math.PI * 2);
      ctx.stroke();
      // Inner eye ring — recursive depth; the Tao within the Tao
      ctx.globalAlpha = 0.045 + 0.020 * Math.sin(time * 1.05);
      ctx.strokeStyle = "rgba(200,170,255,1)";
      ctx.lineWidth   = 0.4;
      ctx.beginPath();
      ctx.arc(cx, cy, innerR * 0.52, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // ── Particles — additive blending ──
      // Particle density → luminosity: arms glow naturally without shadows.
      // Yang + yin overlapping near centre → white (all opposites unite in the Tao).
      ctx.globalCompositeOperation = "lighter";

      for (const p of particles) {
        p.t += p.speed * dt;
        if (p.t >= 1) p.t -= 1;

        const maxR  = p.outer ? outerR : innerR;
        const turns = p.outer ? OUTER_TURNS : INNER_TURNS;
        const rot   = p.outer ? time * OUTER_ROT : time * INNER_ROT;

        // Yang: outward 0→outerR | Yin: inward outerR→0
        const radialT = p.yang ? p.t : 1 - p.t;
        const r       = radialT * maxR;

        // Yang clockwise, yin counter-clockwise, offset by π
        const dir = p.yang ? 1 : -1;
        const θ   = dir * p.t * turns * Math.PI * 2 + rot + p.spread + (p.yang ? 0 : Math.PI);

        const x = cx + r * Math.cos(θ);
        const y = cy + r * Math.sin(θ);

        // Smooth appear/dissolve envelope
        const fade = radialT < 0.08 ? radialT / 0.08
                   : radialT > 0.88 ? (1 - radialT) / 0.12
                   : 1;

        // Colour bell: dim at birth/death, bright at mid-journey
        const lum = Math.sin(radialT * Math.PI);
        let R: number, G: number, B: number;
        if (p.yang) {
          R = Math.round(lerp(148, 255, lum));
          G = Math.round(lerp( 44, 186, lum));
          B = Math.round(lerp(  4,  84, lum));
        } else {
          R = Math.round(lerp(  4, 113, lum));
          G = Math.round(lerp(113, 208, lum));
          B = Math.round(lerp(193, 255, lum));
        }

        const alpha = fade * (p.bright ? 0.65 : p.outer ? 0.19 : 0.25);
        const size  = p.bright
          ? 1.8 + radialT * 2.5
          : p.outer ? 0.48 + radialT * 1.55 : 0.34 + radialT * 1.05;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${R},${G},${B},${alpha})`;
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";

      // ── Taijitu seeds — two bright stars tracing opposing orbits ──
      const sa = time * SEED_ROT;
      ctx.save();
      ctx.shadowColor = "#ffbb3a";
      ctx.shadowBlur  = 18;
      ctx.beginPath();
      ctx.arc(cx + seedR * Math.cos(sa), cy + seedR * Math.sin(sa), 3.2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,195,65,0.95)";
      ctx.fill();
      ctx.shadowColor = "#35e0ff";
      ctx.shadowBlur  = 18;
      ctx.beginPath();
      ctx.arc(cx + seedR * Math.cos(-sa + Math.PI), cy + seedR * Math.sin(-sa + Math.PI), 3.2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(48,210,255,0.95)";
      ctx.fill();
      ctx.restore();

      // ── Centre point — the undivided source ──
      const cp1 = 0.62 + 0.38 * Math.sin(time * 1.75);
      const cp2 = 0.58 + 0.42 * Math.sin(time * 2.45 + 1.1);
      ctx.save();
      ctx.globalAlpha = 0.38 * cp2;
      ctx.strokeStyle = "rgba(255,218,115,0.75)";
      ctx.lineWidth   = 0.8;
      ctx.beginPath();
      ctx.arc(cx, cy, 8.5, 0, Math.PI * 2);
      ctx.stroke();
      ctx.globalAlpha = 1;
      ctx.shadowColor = "#ffe085";
      ctx.shadowBlur  = 22 * cp1;
      ctx.beginPath();
      ctx.arc(cx, cy, 2.8, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,240,188,${0.97 * cp1})`;
      ctx.fill();
      ctx.restore();

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame((ts) => { lastTs = ts; raf = requestAnimationFrame(draw); });
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}
