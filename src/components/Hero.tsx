'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" style={{
      position: 'relative',
      height: '100vh',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
    }}>

      <Image
        src="/fotos/hero.png"
        alt="MAMOTIS"
        fill
        style={{
          objectFit: 'contain',
          objectPosition: '75% center',
          background: '#0a0806',
          filter: 'brightness(0.92) contrast(1.02) saturate(0.9)',
        }}
        preload
      />

      {/* Overlay izquierda para legibilidad */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(5,5,5,0.88) 0%, rgba(5,5,5,0.6) 40%, rgba(5,5,5,0.1) 100%)',
        zIndex: 1,
      }} />

      {/* Overlay abajo */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(5,5,5,0.65) 0%, transparent 40%)',
        zIndex: 1,
      }} />

      {/* CONTENIDO — padding-top para respetar el nav */}
      <div className="hero-content" style={{
        position: 'relative', zIndex: 2,
        padding: '0 5rem',
        paddingTop: '120px',
        width: '100%',
        maxWidth: '700px',
        display: 'flex',
        flexDirection: 'column',
      }}>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300, fontStyle: 'italic',
          fontSize: 'clamp(2.4rem, 4.2vw, 5.2rem)',
          lineHeight: 1.15,
          color: 'var(--crema)',
          marginBottom: '0.1rem',
          letterSpacing: '-0.01em',
        }}>
          Cada piel tiene una vida anterior.
        </h1>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300, fontStyle: 'italic',
          fontSize: 'clamp(2.4rem, 4.2vw, 5.2rem)',
          lineHeight: 1.15,
          color: 'var(--oro)',
          marginBottom: '2.5rem',
          letterSpacing: '-0.01em',
        }}>
          Nosotras le damos otra.
        </h2>

        <div style={{
          width: '36px', height: '1px',
          background: 'var(--oro)',
          marginBottom: '1rem',
          opacity: 0.6,
        }} />

        <p style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.46rem',
          letterSpacing: '0.35em',
          color: 'var(--crema)',
          opacity: 0.38,
          textTransform: 'uppercase',
          marginBottom: '3rem',
          lineHeight: 1.9,
        }}>
          Piezas únicas. Historias reales.<br />
          Lujo con propósito.
        </p>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
        }}>
          <Link href="/coleccion" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontSize: '1rem',
            letterSpacing: '0.06em',
            color: 'var(--negro)',
            background: 'var(--oro)',
            padding: '0.8rem 2.5rem',
            textDecoration: 'none',
            display: 'inline-block',
            whiteSpace: 'nowrap',
          }}>
            Descubrir la colección
          </Link>
          <Link href="/#historia" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontSize: '0.95rem',
            letterSpacing: '0.06em',
            color: 'var(--crema)',
            opacity: 0.55,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}>
            Nuestra historia →
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #hero .hero-content {
            padding: 0 1.8rem !important;
            padding-top: 90px !important;
            max-width: 100% !important;
          }
          #hero .hero-content h1,
          #hero .hero-content h2 {
            font-size: 2rem !important;
          }
          #hero .hero-content p {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
