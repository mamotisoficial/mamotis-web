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
      {/* Desktop: ratio natural de la imagen */}
      <div className="hero-img-desktop" style={{ position: 'relative', width: '100%', aspectRatio: '1755 / 896' }}>
        <Image
          src="/fotos/Hero copia.png"
          alt="Un bolso artesano tiene un nombre — MAMOTIS"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>

      {/* Botón desktop — superpuesto sobre la foto */}
      <div className="hero-cta-wrap">
        <Link href="#coleccion" className="hero-cta">
          Descubrir colección →
        </Link>
      </div>

      {/* Móvil: bolso a la derecha + texto propio encima */}
      <div className="hero-img-mobile">
        {/* Imagen recortada mostrando el bolso (lado derecho) */}
        <div style={{ position:'relative', width:'100%', height:'100%' }}>
          <Image
            src="/fotos/Hero copia.png"
            alt="MAMOTIS"
            fill
            style={{ objectFit:'cover', objectPosition:'70% center' }}
            priority
          />
          {/* Degradado izquierdo para leer el texto */}
          <div style={{ position:'absolute', inset:0,
            background:'linear-gradient(to right, rgba(232,224,212,0.82) 0%, rgba(232,224,212,0.4) 55%, transparent 100%)' }} />
          {/* Degradado abajo para el botón */}
          <div style={{ position:'absolute', inset:0,
            background:'linear-gradient(to bottom, transparent 50%, rgba(232,224,212,0.65) 80%, rgba(232,224,212,0.95) 100%)' }} />
        </div>

        {/* Texto encima */}
        <div style={{ position:'absolute', top:0, left:0, right:0, bottom:0,
          display:'flex', flexDirection:'column', justifyContent:'center',
          padding:'0 28px', zIndex:2 }}>
          <div style={{ fontSize:8, letterSpacing:'0.35em', textTransform:'uppercase',
            color:'#a07830', fontFamily:'var(--sans)', marginBottom:14 }}>
            Un bolso artesano tiene un nombre
          </div>
          <div style={{ fontFamily:'var(--display)', fontSize:52, fontWeight:400,
            lineHeight:1.0, color:'#241b12', marginBottom:2 }}>
            MAM
          </div>
          <div style={{ fontFamily:'var(--serif)', fontSize:52, fontWeight:300,
            fontStyle:'italic', lineHeight:1.0, color:'#241b12', marginBottom:28 }}>
            OTIS
          </div>
          <Link href="#coleccion" className="hero-cta" style={{ alignSelf:'flex-start' }}>
            Descubrir colección →
          </Link>
        </div>
      </div>

      <style>{`
        .hero-img-mobile {
          display: none;
          position: relative;
          width: 100%;
          height: 500px;
          overflow: hidden;
        }
        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          border: 1.5px solid #a07830;
          padding: 13px 24px;
          font-size: 8px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #7a5520;
          font-family: var(--sans);
          font-weight: 400;
          text-decoration: none;
          background: rgba(232,224,212,0.55);
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
          .hero-img-desktop { display: none !important; }
          .hero-img-mobile  { display: block !important; }
          .hero-cta-wrap    { display: none !important; }
        }
      `}</style>
    </section>
  );
}
