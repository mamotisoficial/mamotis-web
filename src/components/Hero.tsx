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
    const pts = Array.from({ length: 40 }, () => ({
      x: Math.random() * 1400, y: Math.random() * 900,
      r: Math.random() * 1.4 + 0.4,
      vx: (Math.random() - 0.5) * 0.14, vy: (Math.random() - 0.5) * 0.14,
      a: Math.random() * 0.4 + 0.08,
    }));
    function resize() { canvas!.width = canvas!.offsetWidth; canvas!.height = canvas!.offsetHeight; }
    resize();
    window.addEventListener('resize', resize, { passive: true });
    function draw() {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas!.width; if (p.x > canvas!.width) p.x = 0;
        if (p.y < 0) p.y = canvas!.height; if (p.y > canvas!.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.a})`; ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section className="hero-section" style={{
      minHeight: '100vh', position: 'relative',
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      background: 'var(--negro)', overflow: 'hidden',
    }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.25, zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to right, rgba(6,5,4,0.6) 0%, transparent 50%, rgba(6,5,4,0.3) 100%)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%', zIndex: 1,
        background: 'linear-gradient(to top, var(--negro), transparent)' }} />

      {/* IZQUIERDA — texto */}
      <div className="hero-text" style={{ position: 'relative', zIndex: 2,
        padding: 'clamp(6rem,10vw,10rem) clamp(2.5rem,6vw,7rem)',
        paddingTop: 'max(8rem, 15vh)' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.5em',
          textTransform: 'uppercase', color: 'var(--oro)', opacity: 0.65,
          display: 'block', marginBottom: '3rem' }}>
          Madrid · Artesanía de lujo
        </span>
        <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontStyle: 'italic',
          fontSize: 'clamp(3.2rem, 7vw, 9.5rem)', lineHeight: 0.9,
          letterSpacing: '-0.02em', color: 'var(--crema)', margin: '0 0 3.5rem' }}>
          Un bolso<br/>
          que <em style={{ color: 'var(--oro)', fontStyle: 'normal' }}>existió</em><br/>
          antes de ti.
        </h1>
        <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(1rem, 1.4vw, 1.3rem)',
          lineHeight: 1.9, color: 'rgba(242,232,212,0.6)', maxWidth: '36ch', marginBottom: '3.5rem' }}>
          Piel vintage rescatada. Transformada a mano en Madrid.<br/>
          Piezas únicas que llevan dos historias dentro.
        </p>
        <a href="#historia" style={{ display: 'inline-flex', alignItems: 'center', gap: '1.2rem',
          fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.35em',
          textTransform: 'uppercase', color: 'var(--oro)', textDecoration: 'none',
          borderBottom: '1px solid rgba(201,168,76,0.3)', paddingBottom: '4px',
          transition: 'opacity 0.3s' }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
          Descubrir la historia
          <svg width="20" height="8" viewBox="0 0 20 8" fill="none" style={{ marginBottom: '1px' }}>
            <path d="M0 4h18M14 1l4 3-4 3" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </a>
      </div>

      {/* DERECHA — huevo */}
      <div className="hero-egg" style={{ position: 'relative', zIndex: 2, display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        padding: '0 clamp(1rem,4vw,4rem)', paddingTop: 'max(5rem, 10vh)' }}>
        <div style={{
          width: 'min(560px, 52vw)',
          animation: 'heroFloat 8s ease-in-out infinite',
          filter: 'drop-shadow(0 40px 120px rgba(0,0,0,0.9)) drop-shadow(0 0 80px rgba(201,168,76,0.15))',
        }}>
          <Image src="/marca/logo-huevo-nuevo.png" alt="MAMOTIS"
            width={500} height={500}
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            priority />
        </div>
      </div>

      {/* scroll indicator */}
      <div style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
        zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '1px', height: '50px',
          background: 'linear-gradient(to bottom, transparent, var(--oro), transparent)',
          animation: 'scrollPulse 2.4s ease-in-out infinite' }} />
      </div>

      <style>{`
        @keyframes heroFloat { 0%,100% { transform: translateY(0) rotate(-.5deg); } 50% { transform: translateY(-28px) rotate(.5deg); } }
        @keyframes scrollPulse { 0%,100% { opacity:0.3; } 50% { opacity:1; } }

        @media (max-width: 768px) {
          .hero-section {
            grid-template-columns: 1fr !important;
            min-height: 100svh !important;
            padding-bottom: 4rem;
          }
          .hero-text {
            padding: 7rem 1.5rem 2rem !important;
          }
          .hero-egg {
            padding: 0 2rem 3rem !important;
          }
          .hero-egg > div {
            width: min(260px, 65vw) !important;
          }
        }
        @media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
      `}</style>
    </section>
  );
}
