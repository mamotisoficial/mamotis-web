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
      {/* La imagen ya tiene el diseño completo: fondo lino, bolso, huevo, texto MAMOTIS */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '1755 / 896' }}>
        <Image
          src="/fotos/Hero copia.png"
          alt="Un bolso artesano tiene un nombre — MAMOTIS"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>

      {/* CTA flotante abajo izquierda */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        zIndex: 2,
      }}>
        <Link href="#coleccion" style={{
          display: 'inline-flex', alignItems: 'center', gap: 14,
          border: '1px solid rgba(160,120,48,0.6)', padding: '13px 24px',
          fontSize: 9, letterSpacing: '0.28em', textTransform: 'uppercase',
          color: '#7a5c28', fontFamily: 'var(--sans)', textDecoration: 'none',
          background: 'rgba(232,224,212,0.5)',
          backdropFilter: 'blur(4px)',
        }}>
          Descubrir colección →
        </Link>
      </div>
    </section>
  );
}
