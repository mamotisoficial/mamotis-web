'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let raf: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const { width: w, height: h } = canvas;
      ctx.clearRect(0, 0, w, h);

      // Dark satin base
      const bg = ctx.createRadialGradient(w * 0.72, h * 0.45, 0, w * 0.5, h * 0.5, w * 0.9);
      bg.addColorStop(0, '#3a2214');
      bg.addColorStop(0.3, '#1c1510');
      bg.addColorStop(0.7, '#0d0a07');
      bg.addColorStop(1, '#080604');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // Silk ripple waves
      for (let i = 0; i < 22; i++) {
        const x = (i / 22) * w * 2.2 - w * 0.6 + Math.sin(t * 0.4 + i * 0.5) * 80;
        const a = 0.03 + Math.sin(t * 0.6 + i * 0.8) * 0.018;
        const grad = ctx.createLinearGradient(x, 0, x + w * 0.18, h);
        grad.addColorStop(0, `rgba(180,140,60,0)`);
        grad.addColorStop(0.35, `rgba(200,160,70,${a})`);
        grad.addColorStop(0.5, `rgba(240,210,140,${a * 0.5})`);
        grad.addColorStop(0.65, `rgba(200,160,70,${a})`);
        grad.addColorStop(1, `rgba(180,140,60,0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      }

      // Vignette
      const vig = ctx.createRadialGradient(w * 0.5, h * 0.5, h * 0.2, w * 0.5, h * 0.5, w * 0.9);
      vig.addColorStop(0, 'rgba(0,0,0,0)');
      vig.addColorStop(1, 'rgba(0,0,0,0.65)');
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, w, h);

      t += 0.008;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section id="inicio" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      {/* Canvas silk background */}
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />

      {/* Content grid */}
      <div className="wrap hero-grid" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', alignItems: 'center', paddingTop: 20, width: '100%' }}>

        {/* LEFT: copy */}
        <div style={{ padding: '45px 0 65px' }}>
          {/* Golden egg SVG */}
          <svg viewBox="0 0 70 90" aria-label="Emblema MAMOTIS" style={{ width: 50, height: 60, marginBottom: 28, filter: 'drop-shadow(0 7px 14px rgba(0,0,0,0.7))' }}>
            <defs>
              <linearGradient id="eggG" x1="0" x2="1">
                <stop stopColor="#8c6424"/>
                <stop offset=".45" stopColor="#f5d987"/>
                <stop offset="1" stopColor="#a77928"/>
              </linearGradient>
            </defs>
            <path d="M35 4 C23 22 9 38 11 55 C13 76 25 85 35 85 C48 85 60 75 60 56 C60 39 47 20 35 4Z" fill="url(#eggG)" stroke="#e7c66f" strokeWidth="1.2"/>
            <path d="M22 48 Q35 35 49 49" fill="none" stroke="#fff0b7" strokeOpacity=".55"/>
          </svg>

          <h1 style={{ font: `clamp(42px,5.2vw,76px)/1.08 var(--serif)`, margin: '0 0 0', maxWidth: 560, letterSpacing: '-0.035em', color: 'var(--cream)' }}>
            Un bolso artesano<br />tiene un <em style={{ color: 'var(--gold2)', fontWeight: 400 }}>nombre.</em>
          </h1>

          {/* Gold rule */}
          <div style={{ height: 1, width: 180, background: 'linear-gradient(90deg,transparent,var(--gold),transparent)', margin: '28px 0 20px' }} />

          {/* MAMOTIS in Italiana */}
          <div style={{ font: `clamp(42px,5.8vw,80px) var(--display)`, letterSpacing: '0.34em', color: '#e7d6ad', lineHeight: 1 }}>
            MAMOTIS
          </div>

          <p style={{ font: `italic 16px var(--serif)`, color: '#b9ad98', marginTop: 20, marginBottom: 0 }}>
            Una segunda vida. Una pieza irrepetible.
          </p>

          <Link href="#coleccion" className="btn-gold" style={{ marginTop: 32, display: 'inline-flex', alignItems: 'center', gap: 20 }}>
            Descubre la colección <span>⟶</span>
          </Link>
        </div>

        {/* RIGHT: bolso */}
        <div className="hero-product" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 610, position: 'relative' }}>
          {/* Shadow under bag */}
          <div style={{ position: 'absolute', bottom: 52, left: '12%', width: '75%', height: 25, borderRadius: '50%', background: '#000', filter: 'blur(28px)' }} />
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
              src="/marca/bolso-hero.png"
              alt="Bolso artesanal MAMOTIS de pelo marrón con asas fucsias"
              fill
              style={{ objectFit: 'contain', filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.85))', position: 'relative', zIndex: 1 }}
              priority
            />
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:640px){
          .hero-grid { grid-template-columns: 1fr !important; padding-top: 24px !important; }
          .hero-product { height: 380px !important; }
        }
        @media(max-width:900px){
          .hero-grid { grid-template-columns: 1fr 1fr !important; }
          .hero-product { height: 460px !important; }
        }
      `}</style>
    </section>
  );
}
