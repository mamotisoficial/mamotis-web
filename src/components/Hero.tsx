'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="inicio" style={{
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      background: '#e8e0d4',
    }}>
      {/* ── DESKTOP: imagen completa con ratio natural ── */}
      <div className="hero-desktop" style={{ position:'relative', width:'100%', aspectRatio:'1755/896' }}>
        <Image
          src="/fotos/Hero copia.png"
          alt="Un bolso artesano tiene un nombre — MAMOTIS"
          fill style={{ objectFit:'contain' }} priority
        />
      </div>
      <div className="hero-cta-wrap">
        <Link href="#coleccion" className="hero-cta">Descubrir colección →</Link>
      </div>

      {/* ── MÓVIL: dos columnas — texto izquierda / bolso derecha ── */}
      <div className="hero-mobile">
        {/* Columna texto */}
        <div style={{
          flex:'0 0 48%', display:'flex', flexDirection:'column',
          justifyContent:'center', padding:'40px 0 40px 24px',
          background:'#e8e0d4', zIndex:1,
        }}>
          <div style={{ fontSize:7, letterSpacing:'0.3em', textTransform:'uppercase',
            color:'#a07830', fontFamily:'var(--sans)', marginBottom:16, lineHeight:1.6 }}>
            Un bolso artesano<br/>tiene un nombre
          </div>
          <div style={{ fontFamily:'var(--display)', fontSize:44, fontWeight:400,
            lineHeight:1.0, color:'#241b12' }}>MAM</div>
          <div style={{ fontFamily:'var(--serif)', fontSize:44, fontWeight:300,
            fontStyle:'italic', lineHeight:1.0, color:'#241b12', marginBottom:32 }}>OTIS</div>
          <Link href="#coleccion" className="hero-cta">Descubrir →</Link>
        </div>

        {/* Columna foto — recorta solo el bolso */}
        <div style={{ flex:'0 0 52%', position:'relative', overflow:'hidden' }}>
          <Image
            src="/fotos/Hero copia.png"
            alt="Bolso MAMOTIS"
            fill
            style={{ objectFit:'cover', objectPosition:'72% center' }}
            priority
          />
        </div>
      </div>

      <style>{`
        .hero-mobile {
          display: none;
          flex-direction: row;
          width: 100%;
          min-height: 460px;
        }
        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 1.5px solid #a07830;
          padding: 12px 20px;
          font-size: 8px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #7a5520;
          font-family: var(--sans);
          font-weight: 400;
          text-decoration: none;
          background: rgba(232,224,212,0.6);
          backdrop-filter: blur(4px);
          transition: background 0.25s, color 0.25s;
          white-space: nowrap;
        }
        .hero-cta:hover {
          background: rgba(160,120,48,0.12);
          color: #5a3d10;
        }
        .hero-cta-wrap {
          position: absolute;
          bottom: 8%;
          left: 25%;
          transform: translateX(-50%);
          z-index: 2;
        }
        @media (max-width: 600px) {
          .hero-desktop  { display: none !important; }
          .hero-cta-wrap { display: none !important; }
          .hero-mobile   { display: flex !important; }
        }
      `}</style>
    </section>
  );
}
