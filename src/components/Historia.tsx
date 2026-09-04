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
    <>
      <section id="historia" style={{
        padding: '7rem 5rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1.3fr',
        gap: '5rem',
        alignItems: 'center',
      }}>

        {/* FOTO */}
        <div style={{
          position: 'relative',
          height: '480px',
          overflow: 'hidden',
          background: '#0c0a07',
        }}>
          <Image
            src={FOTOS[current]}
            alt="Moda años 40"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center 20%',
              filter: 'sepia(0.35) brightness(0.62) contrast(1.1)',
              opacity: fading ? 0 : 1,
              transition: 'opacity 0.6s ease',
            }}
          />

          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(5,5,5,0.6) 0%, transparent 50%)',
            pointerEvents: 'none',
          }} />

          {/* Esquinas doradas */}
          {(['tl','tr','bl','br'] as const).map(pos => (
            <span key={pos} style={{
              position: 'absolute', width: '22px', height: '22px',
              borderColor: 'var(--oro)', borderStyle: 'solid', opacity: .4,
              ...(pos==='tl'?{top:0,left:0,borderWidth:'1px 0 0 1px'}:
                 pos==='tr'?{top:0,right:0,borderWidth:'1px 1px 0 0'}:
                 pos==='bl'?{bottom:0,left:0,borderWidth:'0 0 1px 1px'}:
                 {bottom:0,right:0,borderWidth:'0 1px 1px 0'}),
            }}/>
          ))}

          <div style={{
            position: 'absolute', bottom: '1.2rem', right: '1.2rem',
            fontFamily: "'DM Mono', monospace", fontSize: '.42rem',
            letterSpacing: '.22em', color: 'var(--oro)', opacity: .45,
            textAlign: 'right', lineHeight: 1.8,
          }}>
            c. 1939<br/>Piel rescatada
          </div>

          {/* Indicadores */}
          <div style={{
            position: 'absolute', bottom: '1.4rem', left: '1.4rem',
            display: 'flex', gap: '.4rem',
          }}>
            {FOTOS.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} style={{
                width: i === current ? '18px' : '4px',
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
            fontFamily: "'DM Mono', monospace",
            fontSize: '.58rem', letterSpacing: '.4em',
            color: 'var(--oro)', opacity: .5,
            textTransform: 'uppercase',
            marginBottom: '2rem', display: 'block',
          }}>— El origen —</span>

          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300, fontStyle: 'italic',
            fontSize: 'clamp(2rem, 3vw, 3.4rem)',
            lineHeight: 1.25,
            marginBottom: '2.5rem',
          }}>
            Hubo una época en que vestirse era un{' '}
            <em style={{ color: 'var(--oro)', fontStyle: 'normal' }}>acto de poder.</em>
          </h2>

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.1rem', lineHeight: 2, opacity: .58,
            borderLeft: '1px solid rgba(201,168,76,.2)',
            paddingLeft: '1.8rem', marginBottom: '1.5rem',
          }}>
            Las mujeres lo sabían. Un abrigo de piel no era ropa — era una declaración.
            Se compraba una vez. Se llevaba toda una vida. Se heredaba como un secreto.
          </p>

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.1rem', lineHeight: 2, opacity: .58,
            borderLeft: '1px solid rgba(201,168,76,.2)',
            paddingLeft: '1.8rem',
          }}>
            Hoy esos abrigos esperan, olvidados en armarios, cargados de historia sin contar.
            MAMOTIS los encuentra. Y les da otra vida.
          </p>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          #historia {
            grid-template-columns: 1fr !important;
            padding: 4rem 1.5rem !important;
            gap: 2.25rem !important;
          }
          #historia > div:first-child {
            height: 340px !important;
          }
          #historia h2 { font-size: 1.7rem !important; margin-bottom: 1.6rem !important; }
          #historia p { font-size: 0.98rem !important; line-height: 1.85 !important; padding-left: 1.4rem !important; }
        }
      `}</style>
    </>
  );
}
