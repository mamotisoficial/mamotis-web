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
      {/* Imagen principal */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '1755 / 896' }}>
        <Image
          src="/fotos/Hero copia.png"
          alt="Un bolso artesano tiene un nombre — MAMOTIS"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>

      {/* Botón — absoluto en desktop, estático bajo la imagen en móvil */}
      <div className="hero-cta-wrap">
        <Link href="#coleccion" className="hero-cta">
          Descubrir colección →
        </Link>
      </div>

      <style>{`
        /* Desktop: superpuesto sobre la foto, alineado con el texto izquierdo */
        .hero-cta-wrap {
          position: absolute;
          bottom: 8%;
          left: 25%;
          transform: translateX(-50%);
          z-index: 2;
        }
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

        /* Móvil: fuera del flujo absoluto, centrado debajo de la imagen */
        @media (max-width: 600px) {
          .hero-cta-wrap {
            position: static;
            transform: none;
            display: flex;
            justify-content: center;
            padding: 20px 24px 28px;
            background: #e8e0d4;
          }
          .hero-cta {
            font-size: 8px;
            padding: 12px 24px;
          }
        }
      `}</style>
    </section>
  );
}
