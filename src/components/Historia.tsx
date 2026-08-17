'use client';

export default function Historia() {
  return (
    <section id="historia" style={{
      padding: '9rem 5rem', display: 'grid',
      gridTemplateColumns: '1fr 1.15fr', gap: '7rem', alignItems: 'center',
    }}>
      {/* VISUAL — FOTO REAL */}
      <div style={{
        position: 'relative', aspectRatio: '3/4',
        border: '1px solid var(--borde)',
        overflow: 'hidden',
      }}>
        <img
          src="/1940s-Fashion-Forecast-Coats-New-York-Worlds-Fair-1939f.jpg"
          alt="Moda años 40"
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            filter: 'sepia(0.3) brightness(0.65) contrast(1.1)',
            transition: 'transform 1.5s ease',
          }}
        />
        {/* Overlay degradado */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(5,5,5,0.6) 0%, transparent 60%)',
        }} />
        {/* Esquinas doradas */}
        {(['tl','tr','bl','br'] as const).map(pos => (
          <span key={pos} style={{
            position: 'absolute', width: '26px', height: '26px',
            borderColor: 'var(--oro)', borderStyle: 'solid', opacity: .4,
            ...(pos==='tl' ? {top:'-1px',left:'-1px',borderWidth:'1px 0 0 1px'} :
               pos==='tr' ? {top:'-1px',right:'-1px',borderWidth:'1px 1px 0 0'} :
               pos==='bl' ? {bottom:'-1px',left:'-1px',borderWidth:'0 0 1px 1px'} :
               {bottom:'-1px',right:'-1px',borderWidth:'0 1px 1px 0'}),
          }}/>
        ))}
        {/* Fecha en la esquina */}
        <div style={{
          position: 'absolute', bottom: '1.5rem', right: '1.5rem',
          fontFamily: "'DM Mono', monospace", fontSize: '.48rem',
          letterSpacing: '.25em', color: 'var(--oro)', opacity: .6,
          textAlign: 'right', lineHeight: 1.9,
        }}>
          c. 1939<br/>Piel rescatada
        </div>
      </div>

      {/* TEXTO */}
      <div>
        <span style={{
          fontFamily: "'DM Mono', monospace", fontSize: '.56rem',
          letterSpacing: '.45em', color: 'var(--oro)', opacity: .5,
          textTransform: 'uppercase', marginBottom: '2.5rem', display: 'block',
        }}>— El origen —</span>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: 'italic',
          fontSize: 'clamp(2rem, 3.5vw, 3.6rem)', lineHeight: 1.2, marginBottom: '3rem',
        }}>
          Hubo una época en que vestirse era un{' '}
          <em style={{ color: 'var(--oro)', fontStyle: 'normal' }}>acto de poder.</em>
        </h2>
        <p style={{
          fontSize: '1.05rem', lineHeight: 2.1, opacity: .55,
          borderLeft: '1px solid rgba(201,168,76,.22)',
          paddingLeft: '2rem', marginBottom: '1.5rem',
        }}>
          Las mujeres lo sabían. Un abrigo de piel no era ropa — era una declaración.
          Se compraba una vez. Se llevaba toda una vida. Se heredaba como un secreto.
        </p>
        <p style={{
          fontSize: '1.05rem', lineHeight: 2.1, opacity: .55,
          borderLeft: '1px solid rgba(201,168,76,.22)',
          paddingLeft: '2rem',
        }}>
          Hoy esos abrigos esperan, olvidados en armarios, cargados de historia sin contar.
          MAMOTIS los encuentra. Y les da otra vida.
        </p>
      </div>
    </section>
  );
}
