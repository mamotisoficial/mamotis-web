'use client';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let raf: number;
    const pts = Array.from({ length: 55 }, () => ({
      x: Math.random() * 1400, y: Math.random() * 900,
      r: Math.random() * 1.1 + 0.3,
      vx: (Math.random() - 0.5) * 0.18, vy: (Math.random() - 0.5) * 0.18,
      a: Math.random() * 0.5 + 0.1,
    }));
    function resize() {
      canvas!.width = canvas!.offsetWidth;
      canvas!.height = canvas!.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });
    function draw() {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas!.width;
        if (p.x > canvas!.width) p.x = 0;
        if (p.y < 0) p.y = canvas!.height;
        if (p.y > canvas!.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.a})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section style={{
      height: '100vh', minHeight: '640px', position: 'relative',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: 'var(--negro)', textAlign: 'center', overflow: 'hidden',
    }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.35, zIndex: 0 }} />

      {/* gradientes */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1,
        background: 'radial-gradient(ellipse 60% 55% at 50% 50%, transparent 25%, rgba(6,5,4,0.55) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to bottom, rgba(6,5,4,0.4) 0%, transparent 20%, transparent 70%, rgba(6,5,4,1) 100%)' }} />

      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Huevo SVG */}
        <svg style={{ width: 'min(280px,46vw)', marginBottom: '3rem',
            animation: 'heroFloat 7s ease-in-out infinite',
            filter: 'drop-shadow(0 0 60px rgba(201,168,76,0.3)) drop-shadow(0 28px 80px rgba(0,0,0,0.9))' }}
          viewBox="0 0 400 490" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <radialGradient id="heg" cx="38%" cy="26%" r="66%">
              <stop offset="0%"   stopColor="#FAE990"/>
              <stop offset="20%"  stopColor="#E8C96A"/>
              <stop offset="50%"  stopColor="#C9A84C"/>
              <stop offset="78%"  stopColor="#A07830"/>
              <stop offset="100%" stopColor="#7A5618"/>
            </radialGradient>
            <radialGradient id="hhi" cx="30%" cy="20%" r="40%">
              <stop offset="0%" stopColor="rgba(255,255,220,0.72)"/>
              <stop offset="100%" stopColor="rgba(255,255,220,0)"/>
            </radialGradient>
            <filter id="hglow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="9" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <clipPath id="eggClip"><ellipse cx="200" cy="295" rx="148" ry="188"/></clipPath>
          </defs>
          <ellipse cx="200" cy="468" rx="90" ry="16" fill="rgba(0,0,0,0.42)"/>
          <ellipse cx="200" cy="295" rx="148" ry="188" fill="url(#heg)" filter="url(#hglow)"/>
          <g clipPath="url(#eggClip)" opacity="0.13" stroke="#6B4810" strokeWidth="0.9" fill="none">
            <path d="M140,215 Q155,205 162,222 Q172,236 164,252"/>
            <path d="M235,335 Q252,322 260,342 Q266,356 254,366"/>
            <path d="M168,364 Q180,352 174,372 Q170,386 160,380"/>
            <path d="M252,248 Q266,236 272,256 Q276,270 266,278"/>
          </g>
          <path d="M152,124 Q155,104 164,90 Q180,66 200,60 Q220,66 236,90 Q245,104 248,124 Q235,116 218,113 Q210,110 200,111 Q190,110 182,113 Q165,116 152,124Z" fill="url(#heg)"/>
          <path d="M152,124 L166,112 L179,126 L192,106 L200,120 L208,102 L221,116 L234,108 L248,124" stroke="#5A3C0A" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <ellipse cx="158" cy="246" rx="54" ry="92" fill="url(#hhi)"/>
        </svg>

        <span style={{ fontFamily: 'var(--mono)', fontSize: '0.55rem',
          letterSpacing: '0.55em', textTransform: 'uppercase',
          color: 'var(--oro)', opacity: 0.5, marginBottom: '2rem', display: 'block' }}>
          Madrid · Artesanía de lujo
        </span>

        <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontStyle: 'italic',
          fontSize: 'clamp(3.4rem,8.5vw,9rem)', lineHeight: 0.92,
          letterSpacing: '-0.01em', color: 'var(--crema)', marginBottom: '2.5rem' }}>
          Un bolso que<br/>
          <em style={{ color: 'var(--oro)', fontStyle: 'normal' }}>existió</em> antes<br/>
          de ti.
        </h1>

        <p style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem',
          letterSpacing: '0.28em', textTransform: 'uppercase',
          color: 'rgba(242,232,212,0.35)', lineHeight: 2.2 }}>
          Piel vintage rescatada · Piezas únicas · Hecho a mano
        </p>
      </div>

      {/* scroll indicator */}
      <div style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
        zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem',
        fontFamily: 'var(--mono)', fontSize: '0.46rem', letterSpacing: '0.42em',
        color: 'rgba(242,232,212,0.28)', textTransform: 'uppercase' }}>
        <div style={{ width: '1px', height: '44px',
          background: 'linear-gradient(to bottom, var(--oro), transparent)',
          animation: 'scrollLine 2.2s ease-in-out infinite' }} />
        <span>Descubrir</span>
      </div>

      <style>{`
        @keyframes heroFloat {
          0%,100% { transform: translateY(0) rotate(-.4deg); }
          50%      { transform: translateY(-22px) rotate(.4deg); }
        }
        @keyframes scrollLine {
          0%   { transform: scaleY(0); transform-origin: top; opacity:1; }
          50%  { transform: scaleY(1); transform-origin: top; opacity:1; }
          100% { transform: scaleY(1); transform-origin: bottom; opacity:0; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
