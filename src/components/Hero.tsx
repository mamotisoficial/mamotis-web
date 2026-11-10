'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

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
        {/* Huevo PNG real */}
        <div style={{
          width: 'min(260px,42vw)', marginBottom: '3rem',
          animation: 'heroFloat 7s ease-in-out infinite',
          filter: 'drop-shadow(0 0 60px rgba(201,168,76,0.28)) drop-shadow(0 28px 80px rgba(0,0,0,0.9))',
          position: 'relative',
        }}>
          <Image
            src="/marca/logo-huevo-t.png"
            alt="MAMOTIS — el huevo"
            width={260}
            height={320}
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            priority
          />
        </div>

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
