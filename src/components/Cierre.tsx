import Image from 'next/image';
import Link from 'next/link';

export default function Cierre() {
  return (
    <section style={{
      background: '#0c0906',
      padding: '110px 0 120px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Huevo grande — fondo decorativo */}
      <div style={{
        position: 'relative',
        width: 180,
        height: 220,
        margin: '0 auto 52px',
        opacity: 0.92,
      }}>
        <Image
          src="/marca/logo-huevo-nuevo.png"
          alt="MAMOTIS"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Texto cierre */}
      <div style={{ width: 'min(700px, 90vw)', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'var(--display)',
          fontSize: 'clamp(32px,4.5vw,58px)',
          fontWeight: 400,
          lineHeight: 1.08,
          color: 'var(--cream)',
          margin: '0 0 10px',
        }}>
          Más que un bolso,
        </h2>
        <h2 style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(32px,4.5vw,58px)',
          fontWeight: 300,
          fontStyle: 'italic',
          lineHeight: 1.08,
          color: 'var(--gold)',
          margin: '0 0 36px',
        }}>
          una pieza con alma.
        </h2>
        <p style={{
          fontFamily: 'var(--sans)',
          fontSize: 17,
          lineHeight: 1.9,
          color: '#9a8e7a',
          fontWeight: 300,
          margin: '0 0 48px',
        }}>
          Cada MAMOTIS es irrepetible. Lleva dentro la historia de un abrigo que vivió una vida entera,
          transformada ahora en un objeto de belleza, consciencia y carácter propio.
        </p>
        <Link href="https://wa.me/34605764097" target="_blank" style={{
          display: 'inline-flex', alignItems: 'center', gap: 12,
          border: '1px solid rgba(201,168,76,0.5)', padding: '14px 32px',
          fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'rgba(201,168,76,0.9)', fontFamily: 'var(--sans)', textDecoration: 'none',
        }}>
          Encargar la tuya — WhatsApp
        </Link>
      </div>
    </section>
  );
}
