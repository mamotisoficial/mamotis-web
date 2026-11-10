'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="inicio" style={{
      position: 'relative',
      height: '100vh',
      minHeight: 580,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      background: '#060402',
    }}>
      {/* Foto de fondo — bolso asa rosa centrado, no recortado */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <Image
          src="/marca/bolso-hero-asa.jpeg"
          alt="Bolso MAMOTIS"
          fill
          style={{
            objectFit: 'contain',
            objectPosition: 'center center',
          }}
          priority
        />
        {/* Gradiente izquierda fuerte, derecha suave */}
        <div style={{ position: 'absolute', inset: 0,
          background: 'linear-gradient(105deg, rgba(4,2,1,0.97) 0%, rgba(4,2,1,0.88) 32%, rgba(4,2,1,0.55) 55%, rgba(4,2,1,0.15) 75%, transparent 90%)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1, width: 'min(1320px,88vw)', margin: '0 auto' }}>
        <div style={{ maxWidth: 480 }}>
          <div style={{ width: 44, height: 1, background: 'var(--gold)', opacity: 0.6, marginBottom: 36 }} />
          <h1 style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(42px,5.5vw,78px)',
            fontWeight: 400, lineHeight: 1.08,
            color: '#f0e8d4', margin: '0 0 14px',
            letterSpacing: '-0.01em',
          }}>
            Bolsos de piel
          </h1>
          <h1 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(42px,5.5vw,78px)',
            fontWeight: 300, fontStyle: 'italic', lineHeight: 1.08,
            color: 'var(--gold)', margin: '0 0 50px',
          }}>
            con historia.
          </h1>
          <Link href="#coleccion" style={{
            display: 'inline-flex', alignItems: 'center', gap: 14,
            border: '1px solid rgba(201,168,76,0.55)', padding: '14px 26px',
            fontSize: 9, letterSpacing: '0.28em', textTransform: 'uppercase',
            color: '#c8b88a', fontFamily: 'var(--sans)', textDecoration: 'none',
          }}>
            Descubrir colección →
          </Link>
        </div>
      </div>
    </section>
  );
}
