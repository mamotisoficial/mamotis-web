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

    // Efecto seda: líneas diagonales suaves que se mueven
    let t = 0;
    function resize() {
      canvas!.width = canvas!.offsetWidth;
      canvas!.height = canvas!.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    function draw() {
      const w = canvas!.width;
      const h = canvas!.height;
      ctx.clearRect(0, 0, w, h);
      t += 0.003;

      // Ondas de seda diagonales
      for (let i = 0; i < 18; i++) {
        const x = (i / 18) * w * 2 - w * 0.5 + Math.sin(t + i * 0.4) * 60;
        const grad = ctx.createLinearGradient(x, 0, x + w * 0.15, h);
        const a = 0.012 + Math.sin(t * 0.7 + i) * 0.006;
        grad.addColorStop(0, `rgba(201,168,76,0)`);
        grad.addColorStop(0.4, `rgba(201,168,76,${a})`);
        grad.addColorStop(0.6, `rgba(242,232,212,${a * 0.7})`);
        grad.addColorStop(1, `rgba(201,168,76,0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      }

      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section className="hero-section" style={{
      minHeight: '100vh',
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      background: '#0a0806',
      overflow: 'hidden',
    }}>
      {/* Canvas seda */}
      <canvas ref={canvasRef} style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        zIndex: 0,
      }} />

      {/* Gradiente radial fondo para profundidad */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'radial-gradient(ellipse 80% 80% at 65% 50%, rgba(40,25,10,0.0) 0%, rgba(6,4,2,0.85) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Viñeta bordes */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to right, rgba(6,4,2,0.75) 0%, transparent 40%, transparent 60%, rgba(6,4,2,0.6) 100%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%', zIndex: 1,
        background: 'linear-gradient(to top, #0a0806, transparent)',
        pointerEvents: 'none',
      }} />

      {/* IZQUIERDA — texto */}
      <div className="hero-text" style={{
        position: 'relative', zIndex: 2,
        padding: 'clamp(6rem,10vw,10rem) clamp(2.5rem,6vw,7rem)',
        paddingTop: 'max(9rem, 16vh)',
      }}>
        <span style={{
          fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.55em',
          textTransform: 'uppercase', color: 'var(--oro)', opacity: 0.7,
          display: 'block', marginBottom: '2.5rem',
        }}>
          Madrid · Artesanía de lujo
        </span>

        <h1 style={{
          fontFamily: 'var(--serif)', fontWeight: 300, fontStyle: 'italic',
          fontSize: 'clamp(3rem, 6.5vw, 8.5rem)', lineHeight: 1.0,
          letterSpacing: '-0.02em', color: 'var(--crema)', margin: '0 0 1.8rem',
        }}>
          Un bolso artesano<br/>
          tiene un{' '}
          <em style={{ color: 'var(--oro)', fontStyle: 'normal' }}>nombre.</em>
        </h1>

        {/* línea dorada ornamental */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem',
        }}>
          <div style={{ flex: 1, maxWidth: '80px', height: '1px', background: 'var(--oro)', opacity: 0.4 }} />
          <svg width="12" height="6" viewBox="0 0 12 6" fill="none">
            <path d="M0 3 Q6 0 12 3 Q6 6 0 3Z" fill="rgba(201,168,76,0.5)" />
          </svg>
          <div style={{ flex: 1, maxWidth: '80px', height: '1px', background: 'var(--oro)', opacity: 0.4 }} />
        </div>

        <div style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic',
          fontSize: 'clamp(2.2rem, 4vw, 5.5rem)', fontWeight: 300,
          letterSpacing: '0.12em', color: 'var(--oro)',
          marginBottom: '3rem', lineHeight: 1,
        }}>
          MAMOTIS
        </div>

        <p style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic',
          fontSize: 'clamp(0.95rem, 1.3vw, 1.2rem)',
          lineHeight: 1.9, color: 'rgba(242,232,212,0.55)',
          maxWidth: '38ch', marginBottom: '3.5rem',
        }}>
          Piel vintage rescatada. Transformada a mano en Madrid.
          Piezas únicas que llevan dos historias dentro.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="#historia" style={{
            fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.35em',
            textTransform: 'uppercase', color: 'var(--negro)', background: 'var(--oro)',
            padding: '0.85rem 2rem', textDecoration: 'none', transition: 'opacity 0.3s',
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
            Descubrir
          </a>
          <a href="https://wa.me/34605764097" target="_blank" rel="noopener" style={{
            fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.35em',
            textTransform: 'uppercase', color: 'rgba(242,232,212,0.5)',
            textDecoration: 'none', borderBottom: '1px solid rgba(242,232,212,0.2)',
            paddingBottom: '2px', transition: 'color 0.3s',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--oro)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(242,232,212,0.5)')}>
            Contactar →
          </a>
        </div>
      </div>

      {/* DERECHA — bolso */}
      <div className="hero-bolso" style={{
        position: 'relative', zIndex: 2,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '0 clamp(1rem,4vw,5rem)',
        paddingTop: 'max(5rem, 10vh)',
        paddingBottom: '4rem',
      }}>
        {/* Halo dorado detrás del bolso */}
        <div style={{
          position: 'absolute',
          width: '55%', paddingBottom: '55%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          width: 'min(520px, 50vw)',
          position: 'relative',
          animation: 'heroFloat 9s ease-in-out infinite',
          filter: 'drop-shadow(0 60px 100px rgba(0,0,0,0.95)) drop-shadow(0 0 60px rgba(201,168,76,0.12))',
        }}>
          <Image
            src="/marca/hero-bolso.jpeg"
            alt="Bolso MAMOTIS"
            width={700}
            height={700}
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            priority
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
      }}>
        <div style={{
          width: '1px', height: '50px',
          background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.6), transparent)',
          animation: 'scrollPulse 2.4s ease-in-out infinite',
        }} />
      </div>

      <style>{`
        @keyframes heroFloat {
          0%,100% { transform: translateY(0) rotate(-0.3deg); }
          50% { transform: translateY(-22px) rotate(0.3deg); }
        }
        @keyframes scrollPulse {
          0%,100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @media (max-width: 768px) {
          .hero-section {
            grid-template-columns: 1fr !important;
            min-height: 100svh !important;
          }
          .hero-text {
            padding: 7rem 1.5rem 1.5rem !important;
          }
          .hero-bolso {
            padding: 0 2rem 3rem !important;
          }
          .hero-bolso > div:last-child {
            width: min(280px, 72vw) !important;
          }
        }
        @media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
      `}</style>
    </section>
  );
}
