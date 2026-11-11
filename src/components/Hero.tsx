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
      {/* La imagen mantiene su ratio natural en todos los dispositivos */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '1755 / 896' }}>
        <Image
          src="/fotos/Hero copia.png"
          alt="Un bolso artesano tiene un nombre — MAMOTIS"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>

      {/* Botón desktop — flotando sobre la foto */}
      <div className="hero-cta-wrap">
        <Link href="#coleccion" className="hero-cta">
          Descubrir colección →
        </Link>
      </div>

      {/* Botón móvil — debajo de la imagen, centrado */}
      <div className="hero-cta-mobile">
        <Link href="#coleccion" className="hero-cta">
          Descubrir colección →
        </Link>
      </div>

      <style>{`
        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          border: 1.5px solid #a07830;
          padding: 14px 28px;
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #7a5520;
          font-family: var(--sans);
          font-weight: 400;
          text-decoration: none;
          background: rgba(232,224,212,0.65);
          backdrop-filter: blur(4px);
          transition: background 0.25s, color 0.25s;
          white-space: nowrap;
        }
        .hero-cta:hover {
          background: rgba(160,120,48,0.12);
          color: #5a3d10;
        }

        /* Desktop: botón sobre la foto */
        .hero-cta-wrap {
          position: absolute;
          bottom: 8%;
          left: 25%;
          transform: translateX(-50%);
          z-index: 2;
        }
        .hero-cta-mobile { display: none; }

        /* Móvil: imagen completa + botón debajo en franja crema */
        @media (max-width: 600px) {
          .hero-cta-wrap   { display: none !important; }
          .hero-cta-mobile {
            display: flex;
            justify-content: center;
            padding: 22px 24px 30px;
            background: #e8e0d4;
          }
          .hero-cta-mobile .hero-cta {
            width: 100%;
            justify-content: center;
            font-size: 8px;
            padding: 15px 20px;
          }
        }
      `}</style>
    </section>
  );
}
