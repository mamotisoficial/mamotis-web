'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const FOTOS = [
  '/fotos/1940s-Fashion-Forecast-Coats-New-York-Worlds-Fair-1939f.jpg',
  '/fotos/1940s-Fashion-Forecast-Coats-New-York-Worlds-Fair-1939d.jpg',
  '/fotos/1940s-Fashion-Forecast-Coats-New-York-Worlds-Fair-1939e.jpg',
];

export default function Historia() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent(c => (c + 1) % FOTOS.length);
        setFading(false);
      }, 600);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="historia" style={{
      padding: '9rem 5rem', display: 'grid',
      gridTemplateColumns: '1fr 1.15fr', gap: '7rem', alignItems: 'center',
    }}>
      {/* VISUAL — CARRUSEL */}
      <div style={{
        position: 'relative',
        aspectRatio: '3/4',
        border: '1px solid var(--borde)',
        overflow: 'hidden',
        background: '#0c0a07',
      }}>
        <Image
          src={FOTOS[current]}
          alt="Moda años 40"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center top',
            filter: 'sepia(0.35) brightness(0.6) contrast(1.15)',
            opacity: fading ? 0 : 1,
            transition: 'opacity 0.6s ease',
          }}
        />

        {/* Overlay degradado abajo */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          background: 'linear-gradient(to top, rgba(5,5,5,0.7) 0%, transparent 50%)',
          pointerEvents: 'none',
        }} />

        {/* Esquinas doradas */}
        {(['tl','tr','bl','br'] as const).map(pos => (
          <span key={pos} style={{
            position: 'absolute', width: '26px', height: '26px',
            borderColor: 'var(--oro)', borderStyle: 'solid', opacity: .4, zIndex: 3,
            ...(pos==='tl' ? {top:'-1px',left:'-1px',borderWidth:'1px 0 0 1px'} :
               pos==='tr' ? {top:'-1px',right:'-1px',borderWidth:'1px 1px 0 0'} :
               pos==='bl' ? {bottom:'-1px',left:'-1px',borderWidth:'0 0 1px 1px'} :
               {bottom:'-1px',right:'-1px',borderWidth:'0 1px 1px 0'}),
          }}/>
        ))}

        {/* Fecha */}
        <div style={{
          position: 'absolute', bottom: '1.5rem', right: '1.5rem',
          fontFamily: "'DM Mono', monospace", fontSize: '.48rem',
          letterSpacing: '.25em', color: 'var(--oro)', opacity: .5,
          textAlign: 'right', lineHeight: 1.9, zIndex: 3,
        }}>
          c. 1939<br/>Piel rescatada
        </div>

        {/* Indicadores */}
        <div style={{
          position: 'absolute', bottom: '1.5rem', left: '1.5rem',
          display: 'flex', gap: '.5rem', zIndex: 3,
        }}>
          {FOTOS.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{
              width: i === current ? '20px' : '5px',
              height: '2px',
              background: i === current ? 'var(--oro)' : 'rgba(201,168,76,0.3)',
              border: 'none', cursor: 'pointer', padding: 0,
              transition: 'all .4s ease',
            }}/>
          ))}
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
