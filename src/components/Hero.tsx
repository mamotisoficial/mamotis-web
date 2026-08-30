'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Partículas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resize = () => { canvas.width = innerWidth; canvas.height = innerHeight; };
    resize();
    window.addEventListener('resize', resize);
    const pts = Array.from({ length: 60 }, () => {
      const life = Math.random() * 300 + 80;
      return { x: Math.random()*innerWidth, y: Math.random()*innerHeight,
        sz: Math.random()*1.1+0.2, vx: (Math.random()-.5)*.18,
        vy: -Math.random()*.28-.04, life, maxL: life };
    });
    let id: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        p.x+=p.vx; p.y+=p.vy; p.life--;
        if (p.life<=0||p.y<-5) { p.x=Math.random()*canvas.width; p.y=canvas.height+5; p.life=Math.random()*300+80; p.maxL=p.life; }
        ctx.beginPath(); ctx.arc(p.x,p.y,p.sz,0,Math.PI*2);
        ctx.fillStyle=`rgba(201,168,76,${(p.life/p.maxL)*.28})`; ctx.fill();
      });
      id = requestAnimationFrame(draw);
    };
    draw();
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(id); };
  }, []);

  // Parallax mouse
  useEffect(() => {
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      targetX = (e.clientX / innerWidth - 0.5) * 20;
      targetY = (e.clientY / innerHeight - 0.5) * 12;
    };
    window.addEventListener('mousemove', onMove);

    const animate = () => {
      currentX += (targetX - currentX) * 0.04;
      currentY += (targetY - currentY) * 0.04;
      setOffset({ x: currentX, y: currentY });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section id="hero-grid" style={{
      position: 'relative',
      height: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      overflow: 'hidden',
    }}>
      <canvas ref={canvasRef} style={{
        position: 'absolute', inset: 0,
        pointerEvents: 'none', zIndex: 1, opacity: .5,
      }} />

      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(45deg, rgba(201,168,76,.018) 1px, transparent 1px),
          linear-gradient(-45deg, rgba(201,168,76,.012) 1px, transparent 1px)`,
        backgroundSize: '55px 55px',
      }} />

      {/* IZQUIERDA — texto centrado verticalmente */}
      <div style={{
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center',
        padding: '8rem 4rem 6rem 5rem',
        position: 'relative', zIndex: 2,
        background: 'linear-gradient(to right, var(--negro) 75%, transparent)',
      }}>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300, fontStyle: 'italic',
          fontSize: 'clamp(2.8rem, 5.5vw, 6rem)',
          lineHeight: 1.08, color: 'var(--crema)',
          marginBottom: '2.5rem',
        }}>
          Cada piel tiene<br />
          una vida anterior.<br />
          <em style={{ color: 'var(--oro)', fontStyle: 'normal' }}>Nosotras</em><br />
          le damos otra.
        </h1>

        <p style={{
          fontSize: '1rem', lineHeight: 1.95,
          opacity: .5, maxWidth: '360px', marginBottom: '3rem',
        }}>
          Abrigos que vivieron una vida entera.<br />
          Transformados en piezas que vivirán otra.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link href="/coleccion" style={{
            display: 'inline-block', padding: '1rem 2.5rem',
            background: 'var(--oro)', fontFamily: "'DM Mono', monospace",
            fontSize: '.54rem', letterSpacing: '.22em',
            color: 'var(--negro)', textTransform: 'uppercase', textDecoration: 'none',
          }}>
            Descubrir la colección
          </Link>
          <Link href="/#historia" style={{
            fontFamily: "'DM Mono', monospace", fontSize: '.52rem',
            letterSpacing: '.2em', color: 'var(--crema)',
            textDecoration: 'none', textTransform: 'uppercase', opacity: .4,
          }}>
            Nuestra historia →
          </Link>
        </div>
      </div>

      {/* DERECHA — huevo logo flotante */}
      <div style={{
        position: 'relative', zIndex: 2,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {/* Glow de fondo detrás del huevo */}
        <div style={{
          position: 'absolute',
          width: '400px', height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
          animation: 'glowPulse 3s ease-in-out infinite',
          pointerEvents: 'none',
        }} />

        {/* Huevo con parallax y flotación */}
        <div style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          transition: 'transform 0.1s linear',
          animation: 'floatEgg 4s ease-in-out infinite',
          position: 'relative',
        }}>
          <Image
            src="/marca/logo-huevo-t.png"
            alt="MAMOTIS"
            width={320}
            height={380}
            style={{
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 40px rgba(201,168,76,0.3))',
              userSelect: 'none',
            }}
            preload
          />
        </div>

        {/* Anillos decorativos */}
        <div style={{
          position: 'absolute',
          width: '340px', height: '340px',
          borderRadius: '50%',
          border: '1px solid rgba(201,168,76,0.06)',
          animation: 'rotSlow 30s linear infinite',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          width: '460px', height: '460px',
          borderRadius: '50%',
          border: '1px solid rgba(201,168,76,0.04)',
          animation: 'rotSlow 45s linear infinite reverse',
          pointerEvents: 'none',
        }} />
      </div>

      {/* SCROLL */}
      <div style={{
        position: 'absolute', bottom: '2.5rem', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: '.8rem', zIndex: 3, opacity: .3,
      }}>
        <span style={{
          fontFamily: "'DM Mono', monospace", fontSize: '.48rem',
          letterSpacing: '.4em', textTransform: 'uppercase', writingMode: 'vertical-rl',
        }}>Scroll</span>
        <div style={{ width: '1px', height: '55px', background: 'linear-gradient(to bottom, var(--oro), transparent)' }} />
      </div>

      <style>{`
        @keyframes floatEgg {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-18px) rotate(1deg); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes rotSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          #hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
