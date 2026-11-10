'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="inicio" style={{
      position: 'relative',
      height: '100vh',
      minHeight: 600,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      background: '#060402',
    }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <Image src="/marca/bolso-hero-seda.png" alt="Bolso MAMOTIS" fill
          style={{ objectFit: 'cover', objectPosition: 'center center' }} priority />
        <div style={{ position: 'absolute', inset: 0,
          background: 'linear-gradient(100deg, rgba(4,2,1,0.92) 0%, rgba(4,2,1,0.75) 38%, rgba(4,2,1,0.2) 65%, transparent 85%)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1, width: 'min(1320px,88vw)', margin: '0 auto' }}>
        <div style={{ maxWidth: 520 }}>
          <div style={{ fontSize: 10, letterSpacing: '0.5em', textTransform: 'uppercase',
            color: 'var(--gold)', fontFamily: 'var(--sans)', fontWeight: 400, marginBottom: 20 }}>
            MAMOTIS
          </div>
          <div style={{ width: 44, height: 1, background: 'var(--gold)', opacity: 0.6, marginBottom: 36 }} />
          <h1 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(44px,6vw,82px)',
            fontWeight: 400, lineHeight: 1.08, color: '#f0e8d4', margin: '0 0 18px', letterSpacing: '-0.01em' }}>
            Bolsos de piel
          </h1>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(44px,6vw,82px)',
            fontWeight: 300, fontStyle: 'italic', lineHeight: 1.08, color: 'var(--gold)', margin: '0 0 44px' }}>
            con historia.
          </h1>
          <Link href="#coleccion" style={{
            display: 'inline-flex', alignItems: 'center', gap: 14,
            border: '1px solid rgba(201,168,76,0.55)', padding: '14px 26px',
            fontSize: 9, letterSpacing: '0.28em', textTransform: 'uppercase',
            color: '#c8b88a', fontFamily: 'var(--sans)', textDecoration: 'none', transition: '.25s',
          }}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.cssText+='border-color:var(--gold);color:var(--gold)'}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor='rgba(201,168,76,0.55)';(e.currentTarget as HTMLElement).style.color='#c8b88a'}}>
            Descubrir colección →
          </Link>
        </div>
      </div>
    </section>
  );
}
