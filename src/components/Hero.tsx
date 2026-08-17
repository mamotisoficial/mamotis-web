'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Partículas doradas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      sz: Math.random() * 1.1 + 0.2,
      vx: (Math.random() - 0.5) * 0.18,
      vy: -Math.random() * 0.28 - 0.04,
      life: Math.random() * 300 + 80,
      maxL: 300,
    }));
    particles.forEach(p => p.maxL = p.life);

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.life--;
        const op = (p.life / p.maxL) * 0.28;
        if (p.life <= 0 || p.y < -5) {
          p.x = Math.random() * canvas.width;
          p.y = canvas.height + 5;
          p.life = Math.random() * 300 + 80;
          p.maxL = p.life;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.sz, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${op})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      overflow: 'hidden',
    }}>
      {/* Partículas */}
      <canvas ref={canvasRef} style={{
        position: 'absolute', inset: 0,
        pointerEvents: 'none', zIndex: 1, opacity: 0.5,
      }} />

      {/* Textura */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(45deg, rgba(201,168,76,0.018) 1px, transparent 1px),
          linear-gradient(-45deg, rgba(201,168,76,0.012) 1px, transparent 1px)
        `,
        backgroundSize: '55px 55px',
      }} />

      {/* Lado izquierdo — texto */}
      <div style={{
        display: 'flex', flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 4rem 7rem 5rem',
        position: 'relative', zIndex: 2,
        background: 'linear-gradient(to right, var(--negro) 70%, transparent)',
      }}>
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.56rem', letterSpacing: '0.5em',
          color: 'var(--oro)', opacity: 0.55,
          textTransform: 'uppercase', marginBottom: '2rem',
          display: 'flex', alignItems: 'center', gap: '1.2rem',
        }}>
          <span style={{ width: '35px', height: '1px', background: 'var(--oro)', display: 'block', opacity: 0.5 }} />
          Arqueología del lujo · Madrid
        </div>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300, fontStyle: 'italic',
          fontSize: 'clamp(3rem, 6.5vw, 7rem)',
          lineHeight: 1.04, color: 'var(--crema)',
          marginBottom: '2.5rem',
        }}>
          No fabricamos<br />
          pieles.<br />
          <em style={{ color: 'var(--oro)', fontStyle: 'normal' }}>Rescatamos</em><br />
          memorias.
        </h1>

        <p style={{
          fontSize: '1.05rem', lineHeight: 1.95,
          opacity: 0.5, maxWidth: '380px',
          marginBottom: '3.5rem',
        }}>
          Cada bolso MAMOTIS nació antes que nosotras.<br />
          Piel rescatada de otra época.<br />
          Una historia que merece continuar.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <Link href="/coleccion" style={{
            display: 'inline-block',
            padding: '1.1rem 3rem',
            background: 'var(--oro)',
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.56rem', letterSpacing: '0.22em',
            color: 'var(--negro)', textTransform: 'uppercase',
            textDecoration: 'none',
          }}>
            Descubrir la colección
          </Link>

          <Link href="/#historia" style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.54rem', letterSpacing: '0.2em',
            color: 'var(--crema)', textDecoration: 'none',
            textTransform: 'uppercase', opacity: 0.4,
          }}>
            Nuestra historia →
          </Link>
        </div>
      </div>

      {/* Lado derecho — imagen */}
      <div style={{
        position: 'relative', overflow: 'hidden',
        background: '#0a0807',
      }}>
        <img
          src="/bolsos/vison-negro.jpg"
          alt="MAMOTIS Visón Negro"
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center top',
            filter: 'saturate(0.55) brightness(0.75)',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, var(--negro) 0%, transparent 40%), linear-gradient(to top, var(--negro) 0%, transparent 30%)',
        }} />
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2.5rem', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: '0.8rem',
        zIndex: 3, opacity: 0.3,
      }}>
        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.48rem', letterSpacing: '0.4em',
          textTransform: 'uppercase', writingMode: 'vertical-rl',
        }}>Scroll</span>
        <div style={{
          width: '1px', height: '55px',
          background: 'linear-gradient(to bottom, var(--oro), transparent)',
        }} />
      </div>
    </section>
  );
}
