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

      {/* Móvil: recortamos la imagen para que tenga más altura */}
      <div className="hero-img-mobile" style={{ display:'none', position:'relative', width:'100%', height:460, overflow:'hidden' }}>
        <Image
          src="/fotos/Hero copia.png"
          alt="Un bolso artesano tiene un nombre — MAMOTIS"
          fill
          style={{ objectFit:'cover', objectPosition:'center top' }}
          priority
        />
        {/* Degradado suave abajo para que el botón flote bien */}
        <div style={{ position:'absolute', inset:0,
          background:'linear-gradient(to bottom, transparent 55%, rgba(232,224,212,0.7) 85%, rgba(232,224,212,0.95) 100%)' }} />

        {/* Botón encima de la foto en móvil */}
        <div style={{ position:'absolute', bottom:28, left:0, right:0,
          display:'flex', justifyContent:'center', zIndex:2 }}>
          <Link href="#coleccion" className="hero-cta">
            Descubrir colección →
          </Link>
        </div>
      </div>

      {/* Botón desktop — superpuesto sobre la foto */}
      <div className="hero-cta-wrap">
        <Link href="#coleccion" className="hero-cta">
          Descubrir colección →
        </Link>
      </div>

      <style>{`
        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          border: 1.5px solid #a07830;
          padding: 14px 28px;
          font-size: 9px;
          letter-spacing: 0.3em;
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
          .hero-img-desktop { display: none !important; }
          .hero-img-mobile  { display: block !important; }
          .hero-cta-wrap    { display: none !important; }
        }
      `}</style>
    </section>
  );
}
