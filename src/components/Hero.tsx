'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="inicio" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', background: '#080604' }}>

      {/* Foto de fondo completa — el bolso sobre pedestal con seda */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <Image
          src="/marca/bolso-hero-seda.png"
          alt="Bolso MAMOTIS sobre pedestal con fondo seda"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        {/* Degradado oscuro sobre la izquierda para que el texto sea legible */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, rgba(5,3,2,0.88) 0%, rgba(5,3,2,0.65) 45%, rgba(5,3,2,0.1) 70%, rgba(5,3,2,0) 100%)',
        }} />
      </div>

      {/* Contenido encima */}
      <div style={{ position: 'relative', zIndex: 1, width: 'min(1320px,88vw)', margin: '0 auto', padding: '0 0 60px' }}>
        <div style={{ maxWidth: 580 }}>

          {/* Huevo dorado SVG */}
          <svg viewBox="0 0 70 90" aria-label="Emblema MAMOTIS" style={{ width: 50, height: 60, marginBottom: 28, filter: 'drop-shadow(0 7px 14px rgba(0,0,0,0.7))' }}>
            <defs>
              <linearGradient id="eggG" x1="0" x2="1">
                <stop stopColor="#8c6424"/>
                <stop offset=".45" stopColor="#f5d987"/>
                <stop offset="1" stopColor="#a77928"/>
              </linearGradient>
            </defs>
            <path d="M35 4 C23 22 9 38 11 55 C13 76 25 85 35 85 C48 85 60 75 60 56 C60 39 47 20 35 4Z" fill="url(#eggG)" stroke="#e7c66f" strokeWidth="1.2"/>
            <path d="M22 48 Q35 35 49 49" fill="none" stroke="#fff0b7" strokeOpacity=".55"/>
          </svg>

          {/* Titular */}
          <h1 style={{ font: `clamp(42px,5.2vw,76px)/1.08 var(--serif)`, margin: '0 0 0', letterSpacing: '-0.035em', color: 'var(--cream)' }}>
            Un bolso artesano<br />tiene un <em style={{ color: 'var(--gold2)', fontWeight: 400 }}>nombre.</em>
          </h1>

          {/* Línea dorada */}
          <div style={{ height: 1, width: 180, background: 'linear-gradient(90deg,transparent,var(--gold),transparent)', margin: '28px 0 20px' }} />

          {/* MAMOTIS en Italiana */}
          <div style={{ font: `clamp(42px,5.8vw,80px) var(--display)`, letterSpacing: '0.34em', color: '#e7d6ad', lineHeight: 1 }}>
            MAMOTIS
          </div>

          <p style={{ font: `italic 16px var(--serif)`, color: '#b9ad98', marginTop: 20, marginBottom: 0 }}>
            Una segunda vida. Una pieza irrepetible.
          </p>

          <Link href="#coleccion" style={{
            display: 'inline-flex', alignItems: 'center', gap: 20,
            border: '1px solid var(--gold)', padding: '16px 23px',
            marginTop: 32, fontSize: 10, letterSpacing: '0.2em',
            textTransform: 'uppercase', transition: '.25s', color: 'var(--cream)',
          }}
            onMouseEnter={e => { e.currentTarget.style.background='var(--gold)'; e.currentTarget.style.color='#100d08'; }}
            onMouseLeave={e => { e.currentTarget.style.background=''; e.currentTarget.style.color='var(--cream)'; }}>
            Descubre la colección <span>⟶</span>
          </Link>
        </div>
      </div>

      <style>{`
        @media(max-width:640px){
          #inicio h1{ font-size:38px!important; }
          #inicio > div:last-child{ padding-bottom:40px!important; }
        }
      `}</style>
    </section>
  );
}
