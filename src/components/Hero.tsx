'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
        if (p.life<=0||p.y<-5) {
          p.x=Math.random()*canvas.width;
          p.y=canvas.height+5;
          p.life=Math.random()*300+80;
          p.maxL=p.life;
        }
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.sz,0,Math.PI*2);
        ctx.fillStyle=`rgba(201,168,76,${(p.life/p.maxL)*.28})`;
        ctx.fill();
      });
      id = requestAnimationFrame(draw);
    };
    draw();
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(id); };
  }, []);

  return (
    <section style={{
      position: 'relative', height: '100vh',
      display: 'grid', gridTemplateColumns: '1fr 1fr',
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

      {/* IZQUIERDA */}
      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '10rem 4rem 7rem 5rem', position: 'relative', zIndex: 2,
        background: 'linear-gradient(to right, var(--negro) 70%, transparent)',
      }}>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300, fontStyle: 'italic',
          fontSize: 'clamp(3rem, 6.5vw, 7rem)',
          lineHeight: 1.04, color: 'var(--crema)', marginBottom: '2.5rem',
        }}>
          Cada piel tiene<br />
          una vida anterior.<br />
          <em style={{ color: 'var(--oro)', fontStyle: 'normal' }}>Nosotras</em><br />
          le damos otra.
        </h1>

        <p style={{
          fontSize: '1.05rem', lineHeight: 1.95,
          opacity: .5, maxWidth: '380px', marginBottom: '3.5rem',
        }}>
          Abrigos que vivieron una vida entera.<br />
          Transformados en piezas que vivirán otra.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <Link href="/coleccion" style={{
            display: 'inline-block', padding: '1.1rem 3rem',
            background: 'var(--oro)', fontFamily: "'DM Mono', monospace",
            fontSize: '.56rem', letterSpacing: '.22em',
            color: 'var(--negro)', textTransform: 'uppercase', textDecoration: 'none',
          }}>
            Descubrir la colección
          </Link>
          <Link href="/#historia" style={{
            fontFamily: "'DM Mono', monospace", fontSize: '.54rem',
            letterSpacing: '.2em', color: 'var(--crema)',
            textDecoration: 'none', textTransform: 'uppercase', opacity: .4,
          }}>
            Nuestra historia →
          </Link>
        </div>
      </div>

      {/* DERECHA */}
      <div style={{
        position: 'relative', overflow: 'hidden', background: '#0f0c08',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ textAlign: 'center', opacity: .06 }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '18rem', color: 'var(--oro)', lineHeight: 1,
          }}>M</div>
        </div>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, var(--negro) 0%, transparent 40%), linear-gradient(to top, var(--negro) 0%, transparent 30%)',
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
    </section>
  );
}
