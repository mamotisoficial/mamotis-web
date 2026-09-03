'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
        vy: -Math.random()*.25-.04, life, maxL: life };
    });
    let id: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        p.x+=p.vx; p.y+=p.vy; p.life--;
        if (p.life<=0||p.y<-5) { p.x=Math.random()*canvas.width; p.y=canvas.height+5; p.life=Math.random()*300+80; p.maxL=p.life; }
        ctx.beginPath(); ctx.arc(p.x,p.y,p.sz,0,Math.PI*2);
        ctx.fillStyle=`rgba(201,168,76,${(p.life/p.maxL)*.25})`; ctx.fill();
      });
      id = requestAnimationFrame(draw);
    };
    draw();
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(id); };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} style={{
        position: 'fixed', inset: 0,
        pointerEvents: 'none', zIndex: 0, opacity: .5,
      }} />

      <section id="hero" style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr',
        position: 'relative', zIndex: 1,
        overflow: 'hidden',
      }}>

        {/* Textura */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(45deg, rgba(201,168,76,.015) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(201,168,76,.01) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />

        {/* IZQUIERDA — texto */}
        <div className="hero-text" style={{
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center',
          padding: '10rem 4rem 6rem 5rem',
          position: 'relative', zIndex: 2,
          background: 'linear-gradient(to right, var(--negro) 80%, transparent)',
        }}>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300, fontStyle: 'italic',
            fontSize: 'clamp(2.8rem, 5vw, 5.5rem)',
            lineHeight: 1.15,
            color: 'var(--crema)',
            marginBottom: '1.5rem',
          }}>
            Cada piel tiene<br />
            una vida anterior.
          </h1>

          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300, fontStyle: 'italic',
            fontSize: 'clamp(2.8rem, 5vw, 5.5rem)',
            lineHeight: 1.15,
            color: 'var(--oro)',
            marginBottom: '3rem',
          }}>
            Nosotras le damos otra.
          </h2>

          <div style={{
            width: '60px', height: '1px',
            background: 'linear-gradient(to right, var(--oro), transparent)',
            marginBottom: '2.5rem',
            opacity: 0.6,
          }} />

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300, fontStyle: 'italic',
            fontSize: '1.15rem', lineHeight: 1.9,
            opacity: 0.5, maxWidth: '380px',
            marginBottom: '3.5rem',
          }}>
            Abrigos que vivieron una vida entera.<br />
            Transformados en piezas que vivirán otra.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
            <Link href="/coleccion" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic', fontSize: '1.05rem',
              letterSpacing: '0.06em',
              color: 'var(--negro)', background: 'var(--oro)',
              padding: '0.9rem 2.5rem', textDecoration: 'none',
              display: 'inline-block',
            }}>
              Descubrir la colección
            </Link>
            <Link href="/#historia" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic', fontSize: '1rem',
              letterSpacing: '0.06em',
              color: 'var(--crema)', opacity: 0.4,
              textDecoration: 'none',
            }}>
              Nuestra historia →
            </Link>
          </div>
        </div>

        {/* DERECHA — huevo */}
        <div className="hero-visual" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', zIndex: 2,
          padding: '8rem 3rem',
        }}>
          {/* Glow detrás del huevo */}
          <div style={{
            position: 'absolute',
            width: '320px', height: '320px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
            animation: 'glowP 3s ease-in-out infinite',
          }} />

          {/* Huevo flotante */}
          <div style={{
            position: 'relative', zIndex: 2,
            animation: 'floatAnim 5s ease-in-out infinite',
            filter: 'drop-shadow(0 0 30px rgba(201,168,76,0.3)) drop-shadow(0 20px 40px rgba(0,0,0,0.5))',
          }}>
            <Image
              src="/marca/logo-huevo-t.png"
              alt="MAMOTIS"
              width={220}
              height={250}
              className="hero-egg-img"
              style={{ objectFit: 'contain', height: '260px', width: 'auto' }}
              preload
            />
          </div>

          {/* Anillos */}
          <div style={{
            position: 'absolute', borderRadius: '50%',
            width: '300px', height: '300px',
            border: '1px solid rgba(201,168,76,0.06)',
            animation: 'rotS 35s linear infinite',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', borderRadius: '50%',
            width: '420px', height: '420px',
            border: '1px solid rgba(201,168,76,0.03)',
            animation: 'rotS 55s linear infinite reverse',
            pointerEvents: 'none',
          }} />
        </div>

        {/* SCROLL */}
        <div style={{
          position: 'absolute', bottom: '2.5rem', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '0.8rem',
          zIndex: 3, opacity: 0.3,
        }}>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.44rem', letterSpacing: '0.45em',
            textTransform: 'uppercase', writingMode: 'vertical-rl',
          }}>Scroll</span>
          <div style={{
            width: '1px', height: '50px',
            background: 'linear-gradient(to bottom, var(--oro), transparent)',
          }} />
        </div>

        <style>{`
          @keyframes floatAnim {
            0%,100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          @keyframes glowP {
            0%,100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
          }
          @keyframes rotS {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @media (max-width: 768px) {
            #hero {
              grid-template-columns: 1fr !important;
              grid-template-rows: auto auto;
            }
            #hero .hero-text {
              padding: 9rem 2rem 3rem !important;
              background: var(--negro) !important;
              order: 2;
            }
            #hero .hero-visual {
              order: 1;
              padding: 4rem 2rem 1rem !important;
            }
            #hero .hero-egg-img {
              height: 160px !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}
