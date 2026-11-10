'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="inicio" style={{
      position: 'relative',
      minHeight: '92vh',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'stretch',
      background: '#e8e0d4',  /* crema/lino exacto de la imagen */
    }}>
      {/* Layout: texto izquierda, bolso derecha */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.1fr',
        width: '100%',
        minHeight: '92vh',
      }} className="hero-grid">

        {/* Columna izquierda — texto */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(60px,8vw,120px) clamp(40px,6vw,100px) clamp(60px,8vw,120px) clamp(48px,7vw,120px)',
          position: 'relative',
          zIndex: 1,
        }}>
          {/* Huevo dorado arriba */}
          <div style={{ marginBottom: 36 }}>
            <div style={{ position: 'relative', width: 56, height: 68 }}>
              <Image
                src="/marca/logo-huevo-nuevo.png"
                alt="MAMOTIS huevo"
                fill
                style={{ objectFit: 'contain', objectPosition: 'left top' }}
                priority
              />
            </div>
          </div>

          {/* Texto principal */}
          <h1 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(32px,3.8vw,58px)',
            fontWeight: 400,
            fontStyle: 'normal',
            lineHeight: 1.25,
            color: '#2c1f0e',
            margin: '0 0 6px',
            letterSpacing: '-0.01em',
          }}>
            Un bolso artesano
          </h1>
          <h1 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(32px,3.8vw,58px)',
            fontWeight: 300,
            lineHeight: 1.25,
            color: '#2c1f0e',
            margin: '0 0 28px',
          }}>
            tiene un <em style={{ fontStyle: 'italic' }}>nombre.</em>
          </h1>

          {/* Línea decorativa dorada */}
          <div style={{ width: 80, height: 1.5, background: '#a07830', marginBottom: 28, opacity: 0.7 }} />

          {/* MAMOTIS logotipo */}
          <div style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(36px,5vw,72px)',
            fontWeight: 400,
            letterSpacing: '0.22em',
            color: '#a07830',
            lineHeight: 1,
            marginBottom: 52,
          }}>
            MAMOTIS
          </div>

          <Link href="#coleccion" style={{
            display: 'inline-flex', alignItems: 'center', gap: 14,
            border: '1px solid rgba(160,120,48,0.5)', padding: '14px 26px',
            fontSize: 9, letterSpacing: '0.28em', textTransform: 'uppercase',
            color: '#7a5c28', fontFamily: 'var(--sans)', textDecoration: 'none',
            alignSelf: 'flex-start',
          }}>
            Descubrir colección →
          </Link>
        </div>

        {/* Columna derecha — bolso centrado sobre fondo crema */}
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(40px,5vw,80px)',
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: 540,
            aspectRatio: '1',
          }}>
            <Image
              src="/marca/bolso-hero-asa.jpeg"
              alt="Bolso MAMOTIS artesanal"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:720px){
          .hero-grid{
            grid-template-columns:1fr!important;
            min-height:auto!important;
          }
          .hero-grid>div:last-child{
            min-height:300px;
            padding:20px!important;
          }
        }
      `}</style>
    </section>
  );
}
