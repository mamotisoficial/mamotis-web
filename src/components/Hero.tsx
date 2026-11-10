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
      {/* Imagen principal — ocupa todo el ancho */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '1755 / 896' }}>
        <Image
          src="/fotos/Hero copia.png"
          alt="Un bolso artesano tiene un nombre — MAMOTIS"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>

      {/* Botón "Descubrir colección" alineado con el bloque de texto izquierdo */}
      {/* El texto en la imagen ocupa ~43% del ancho, centrado verticalmente en la mitad inferior */}
      <div style={{
        position: 'absolute',
        bottom: '8%',
        left: '6%',
        zIndex: 2,
      }}>
        <Link href="#coleccion" style={{
          display: 'inline-flex', alignItems: 'center', gap: 14,
          border: '1.5px solid #a07830',
          padding: '14px 28px',
          fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase',
          color: '#7a5520',
          fontFamily: 'var(--sans)',
          fontWeight: 400,
          textDecoration: 'none',
          background: 'rgba(232,224,212,0.6)',
          backdropFilter: 'blur(4px)',
          transition: 'background 0.25s, color 0.25s',
        }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background='rgba(160,120,48,0.12)'; el.style.color='#5a3d10'; }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background='rgba(232,224,212,0.6)'; el.style.color='#7a5520'; }}>
          Descubrir colección →
        </Link>
      </div>
    </section>
  );
}
