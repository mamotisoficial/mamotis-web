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
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center',
        position: 'relative', zIndex: 1,
        padding: '8rem 2rem 5rem',
        gap: 0,
      }}>

        {/* Textura diagonal */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(45deg, rgba(201,168,76,.015) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(201,168,76,.01) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />

        {/* Glow central */}
        <div style={{
          position: 'absolute', width: '550px', height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
          top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          pointerEvents: 'none',
        }} />

        {/* Anillos decorativos */}
        {[520, 780, 1040].map((size, i) => (
          <div key={i} style={{
            position: 'absolute', borderRadius: '50%',
            width: `${size}px`, height: `${size}px`,
            border: `1px solid rgba(201,168,76,${0.04 - i*0.01})`,
            top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            animation: i > 0 ? `rotS ${i===1?50:70}s linear infinite ${i===2?'reverse':''}` : undefined,
            pointerEvents: 'none',
          }} />
        ))}

        {/* HUEVO — protagonista */}
        <div style={{
          position: 'relative', zIndex: 2,
          marginBottom: '2.5rem',
          animation: 'fadeUpAnim 1.2s ease 0.3s both, floatAnim 5s ease-in-out 1.5s infinite',
          filter: 'drop-shadow(0 0 40px rgba(201,168,76,0.35)) drop-shadow(0 0 80px rgba(201,168,76,0.12))',
        }}>
          <Image
            src="/marca/logo-huevo-t.png"
            alt="MAMOTIS"
            width={180}
            height={200}
            className="hero-egg-img"
            style={{ objectFit: 'contain', width: 'auto', height: '180px' }}
            preload
          />
        </div>

        {/* LÍNEA DORADA */}
        <div style={{
          height: '1px', width: '260px',
          background: 'linear-gradient(to right, transparent, var(--oro), transparent)',
          marginBottom: '2.8rem',
          animation: 'lineGrow 1s ease 1s both',
        }} />

        {/* TAGLINE — con más presencia */}
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300, fontStyle: 'italic',
          fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
          letterSpacing: '0.04em',
          color: 'var(--crema)',
          lineHeight: 1.6,
          maxWidth: '600px',
          marginBottom: '1.2rem',
          animation: 'fadeUpAnim 1s ease 1.2s both',
        }}>
          Cada piel tiene una vida anterior.<br />
          <em style={{ color: 'var(--oro)', fontStyle: 'normal' }}>Nosotras</em> le damos otra.
        </h1>

        {/* SUBTEXTO */}
        <p style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.52rem', letterSpacing: '0.42em',
          color: 'var(--crema)', opacity: 0.35,
          textTransform: 'uppercase',
          marginBottom: '3.5rem',
          animation: 'fadeUpAnim 1s ease 1.5s both',
        }}>
          Piel rescatada · Pieza única
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex', alignItems: 'center',
          gap: '2.5rem', flexWrap: 'wrap', justifyContent: 'center',
          animation: 'fadeUpAnim 1s ease 1.8s both',
        }}>
          <Link href="/coleccion" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic', fontSize: '1.1rem',
            letterSpacing: '0.08em',
            color: 'var(--negro)', background: 'var(--oro)',
            padding: '0.9rem 2.8rem', textDecoration: 'none',
            display: 'inline-block',
            transition: 'opacity .3s, transform .3s',
          }}>
            Descubrir la colección
          </Link>
          <Link href="/#historia" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic', fontSize: '1rem',
            letterSpacing: '0.08em',
            color: 'var(--crema)', opacity: 0.45,
            textDecoration: 'none',
            transition: 'opacity .3s, color .3s',
          }}>
            Nuestra historia →
          </Link>
        </div>

        {/* SCROLL */}
        <div style={{
          position: 'absolute', bottom: '2.5rem', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '0.8rem',
          opacity: 0.3,
          animation: 'fadeUpAnim 1s ease 2.5s both',
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
          @keyframes fadeUpAnim {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes floatAnim {
            0%,100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
          }
          @keyframes lineGrow {
            from { transform: scaleX(0); opacity: 0; }
            to { transform: scaleX(1); opacity: 1; }
          }
          @keyframes rotS {
            from { transform: translate(-50%,-50%) rotate(0); }
            to { transform: translate(-50%,-50%) rotate(360deg); }
          }
          @media (max-width: 768px) {
            #hero { padding: 7rem 1.5rem 5rem !important; }
            #hero h1 { font-size: 1.6rem !important; }
            .hero-egg-img { height: 140px !important; }
          }
        `}</style>
      </section>
    </>
  );
}
