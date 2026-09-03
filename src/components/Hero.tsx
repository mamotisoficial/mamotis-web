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
        if (p.life<=0||p.y<-5) {
          p.x=Math.random()*canvas.width;
          p.y=canvas.height+5;
          p.life=Math.random()*300+80;
          p.maxL=p.life;
        }
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.sz,0,Math.PI*2);
        ctx.fillStyle=`rgba(201,168,76,${(p.life/p.maxL)*.25})`;
        ctx.fill();
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
        gridTemplateColumns: '2fr 1fr',
        position: 'relative', zIndex: 1,
        overflow: 'hidden',
      }}>

        {/* Textura diagonal */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(45deg, rgba(201,168,76,.015) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(201,168,76,.01) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />

        {/* IZQUIERDA — texto protagonista */}
        <div className="hero-text" style={{
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center',
          padding: '10rem 5rem 6rem 6rem',
          position: 'relative', zIndex: 2,
        }}>

          {/* Frase principal — grande y con peso */}
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300, fontStyle: 'italic',
            fontSize: 'clamp(3.2rem, 5.5vw, 7rem)',
            lineHeight: 1.12,
            color: 'var(--crema)',
            marginBottom: '0.3rem',
            letterSpacing: '-0.01em',
          }}>
            Cada piel tiene<br />
            una vida anterior.
          </h1>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300, fontStyle: 'italic',
            fontSize: 'clamp(3.2rem, 5.5vw, 7rem)',
            lineHeight: 1.12,
            color: 'var(--oro)',
            marginBottom: '3rem',
            letterSpacing: '-0.01em',
          }}>
            Nosotras le damos otra.
          </h1>

          {/* Subtexto editorial */}
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.52rem',
            letterSpacing: '0.45em',
            color: 'var(--crema)',
            opacity: 0.3,
            textTransform: 'uppercase',
            marginBottom: '4rem',
          }}>
            Piel rescatada · Pieza única
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex', alignItems: 'center',
            gap: '3rem', flexWrap: 'wrap',
          }}>
            <Link href="/coleccion" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: '1.15rem',
              letterSpacing: '0.06em',
              color: 'var(--negro)',
              background: 'var(--oro)',
              padding: '1rem 3.5rem',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'opacity .3s, transform .3s',
            }}>
              Descubrir la colección
            </Link>
            <Link href="/#historia" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: '1.1rem',
              letterSpacing: '0.06em',
              color: 'var(--crema)',
              opacity: 0.65,
              textDecoration: 'none',
              transition: 'opacity .3s, color .3s',
            }}>
              Nuestra historia →
            </Link>
          </div>
        </div>

        {/* DERECHA — huevo pegado abajo a la derecha */}
        <div className="hero-visual" style={{
          position: 'relative', zIndex: 2,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          padding: '0 2rem 3rem 0',
        }}>
          {/* Glow suave detrás */}
          <div style={{
            position: 'absolute',
            bottom: '3rem', right: '2rem',
            width: '280px', height: '280px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
            animation: 'glowP 3s ease-in-out infinite',
          }} />

          {/* Huevo */}
          <div style={{
            position: 'relative', zIndex: 2,
            animation: 'floatAnim 5s ease-in-out infinite',
            filter: 'drop-shadow(0 0 30px rgba(201,168,76,0.25)) drop-shadow(0 20px 50px rgba(0,0,0,0.6))',
          }}>
            <Image
              src="/marca/logo-huevo-t.png"
              alt="MAMOTIS"
              width={280}
              height={320}
              className="hero-egg-img"
              style={{
                objectFit: 'contain',
                height: '320px',
                width: 'auto',
              }}
              preload
            />
          </div>
        </div>

        <style>{`
          @keyframes floatAnim {
            0%,100% { transform: translateY(0px); }
            50% { transform: translateY(-14px); }
          }
          @keyframes glowP {
            0%,100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.08); }
          }
          @media (max-width: 768px) {
            #hero {
              grid-template-columns: 1fr !important;
            }
            #hero .hero-text {
              padding: 9rem 2rem 2rem !important;
              order: 1;
            }
            #hero .hero-visual {
              order: 2;
              padding: 0 0 3rem !important;
              justify-content: center !important;
              align-items: center !important;
            }
            #hero .hero-egg-img {
              height: 180px !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}
