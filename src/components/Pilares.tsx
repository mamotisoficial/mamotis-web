'use client';
import { useState } from 'react';

const pilares = [
  { num: '01', titulo: 'El origen', texto: 'Buscamos piel con historia — mercados vintage, armarios heredados, colecciones olvidadas. Cada pieza tiene nombre, tiene año.' },
  { num: '02', titulo: 'La transformación', texto: 'Manos artesanas dan nueva forma a la piel. Sin prisa. Sin moldes industriales. El huevo dorado — nuestra firma — nace en el asa.' },
  { num: '03', titulo: 'Irrepetible', texto: 'Nunca dos iguales. Porque nunca hubo dos abrigos iguales. Tu bolso es único — como lo fue la mujer que llevó esa piel.' },
];

export default function Pilares() {
  const [hovered, setHovered] = useState<number|null>(null);
  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'rgba(201,168,76,.07)' }}>
      {pilares.map((p, i) => (
        <div key={i}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          style={{
            background: hovered===i ? '#090909' : 'var(--negro)',
            padding: '5rem 3.5rem', position: 'relative',
            overflow: 'hidden', transition: 'background .5s',
          }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
            background: 'linear-gradient(to right, transparent, var(--oro), transparent)',
            transform: hovered===i ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'transform .6s ease',
          }} />
          <div style={{
            fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
            fontSize: '6.5rem', lineHeight: 1,
            color: 'transparent',
            WebkitTextStroke: `1px rgba(201,168,76,${hovered===i ? .3 : .1})`,
            marginBottom: '1.2rem', transition: '-webkit-text-stroke .5s',
          }}>{p.num}</div>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
            fontSize: '1.8rem', color: 'var(--oro)', marginBottom: '1.2rem',
          }}>{p.titulo}</div>
          <p style={{ fontSize: '1.05rem', lineHeight: 2, opacity: .5 }}>{p.texto}</p>
        </div>
      ))}
    </section>
  );
}
