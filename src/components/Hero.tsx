'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="inicio" style={{
      position: 'relative',
      height: '100vh',
      minHeight: 560,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'flex-start',
      background: '#060402',
    }}>

      {/* Foto de fondo completa */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <Image
          src="/marca/bolso-hero-seda.png"
          alt="Bolso MAMOTIS sobre fondo seda"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
          priority
        />
        {/* Degradado oscuro izquierda → transparente derecha */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, rgba(3,2,1,0.88) 0%, rgba(3,2,1,0.72) 32%, rgba(3,2,1,0.28) 58%, transparent 80%)',
        }} />
      </div>

      {/* Contenido — alineado arriba izquierda como la referencia */}
      <div style={{
        position: 'relative', zIndex: 1,
        width: 'min(1320px,88vw)', margin: '0 auto',
        paddingTop: 'clamp(48px, 8vh, 90px)',
      }}>
        <div style={{ maxWidth: 480 }}>

          {/* Nombre de marca — letra fina espaciada, como en la referencia */}
          <div style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(13px, 1.1vw, 16px)',
            fontWeight: 400,
            letterSpacing: '0.38em',
            textTransform: 'uppercase',
            color: '#c4b68e',
            marginBottom: 16,
          }}>
            MAMOTIS
          </div>

          {/* Línea dorada corta */}
          <div style={{ width: 48, height: 1, background: 'var(--gold)', marginBottom: 32, opacity: 0.7 }} />

          {/* Titular principal — Cormorant italic, grande, peso ligero */}
          <h1 style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(40px, 5.2vw, 74px)',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 1.12,
            letterSpacing: '-0.01em',
            color: '#f0e8d4',
            margin: '0 0 36px',
          }}>
            Bolsos de piel<br />con historia.
          </h1>

          {/* CTA */}
          <Link href="#coleccion" style={{
            display: 'inline-flex', alignItems: 'center', gap: 16,
            border: '1px solid rgba(201,168,76,0.65)',
            padding: '12px 22px',
            fontSize: 9, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: '#c4b68e',
            transition: '.25s', textDecoration: 'none',
            fontFamily: 'var(--sans)', fontWeight: 400,
          }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'var(--gold)';
              el.style.color = 'var(--gold)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(201,168,76,0.65)';
              el.style.color = '#c4b68e';
            }}>
            Descubrir colección →
          </Link>

        </div>
      </div>

    </section>
  );
}
