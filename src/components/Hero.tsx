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
          objectFit: 'cover',
          objectPosition: 'center right',
          filter: 'brightness(0.72) contrast(1.05) saturate(0.85)',
        }}
        preload
      />

      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(5,5,5,0.82) 0%, rgba(5,5,5,0.5) 45%, rgba(5,5,5,0.05) 100%)',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(5,5,5,0.7) 0%, transparent 45%)',
        zIndex: 1,
      }} />

      <div className="hero-content" style={{
        position: 'relative', zIndex: 2,
        padding: '0 5rem',
        maxWidth: '58%',
        display: 'flex',
        flexDirection: 'column',
      }}>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300, fontStyle: 'italic',
          fontSize: 'clamp(2.8rem, 5vw, 6rem)',
          lineHeight: 1.1,
          color: 'var(--crema)',
          marginBottom: '0.15rem',
          letterSpacing: '-0.01em',
        }}>
          Cada piel tiene una vida anterior.
        </h1>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300, fontStyle: 'italic',
          fontSize: 'clamp(2.8rem, 5vw, 6rem)',
          lineHeight: 1.1,
          color: 'var(--oro)',
          marginBottom: '3rem',
          letterSpacing: '-0.01em',
        }}>
          Nosotras le damos otra.
        </h2>

        <div style={{
          width: '40px', height: '1px',
          background: 'var(--oro)',
          marginBottom: '1.2rem',
          opacity: 0.6,
        }} />

        <p style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.48rem',
          letterSpacing: '0.38em',
          color: 'var(--crema)',
          opacity: 0.4,
          textTransform: 'uppercase',
          marginBottom: '3.5rem',
          lineHeight: 1.9,
        }}>
          Piezas únicas. Historias reales.<br />
          Lujo con propósito.
        </p>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2.5rem',
          flexWrap: 'wrap',
        }}>
          <Link href="/coleccion" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontSize: '1.05rem',
            letterSpacing: '0.06em',
            color: 'var(--negro)',
            background: 'var(--oro)',
            padding: '0.85rem 2.8rem',
            textDecoration: 'none',
            display: 'inline-block',
          }}>
            Descubrir la colección
          </Link>
          <Link href="/#historia" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontSize: '1rem',
            letterSpacing: '0.06em',
            color: 'var(--crema)',
            opacity: 0.55,
            textDecoration: 'none',
          }}>
            Nuestra historia →
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #hero .hero-content {
            max-width: 90% !important;
            padding: 0 2rem !important;
          }
          #hero .hero-content h1,
          #hero .hero-content h2 {
            font-size: 2.2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
