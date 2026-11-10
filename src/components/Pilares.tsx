'use client';
import { useEffect, useRef } from 'react';

const PILARES = [
  {
    n: '01',
    t: 'Rescate',
    sub: 'El abrigo que esperaba',
    p: 'Cada pieza fue un abrigo con historia. Lo buscamos, lo elegimos y lo escuchamos. Nunca compramos piel nueva: todo lo que usamos existía antes que nosotras.',
  },
  {
    n: '02',
    t: 'Artesanía',
    sub: 'Manos expertas en Madrid',
    p: 'Artesanas madrileñas transforman cada pieza a mano. Sin cadenas de producción. Sin prisa. Cada costura es una decisión tomada con conciencia y respeto.',
  },
  {
    n: '03',
    t: 'Unicidad',
    sub: 'La única en el mundo',
    p: 'Si el abrigo fue único, el bolso también lo es. Nunca fabricamos dos iguales. Tu pieza lleva dos historias dentro: la de quien la llevó antes, y la tuya.',
  },
];

export default function Pilares() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const cards = el.querySelectorAll('.pilar-card');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => (e.target as HTMLElement).style.opacity = '1', i * 150);
          setTimeout(() => (e.target as HTMLElement).style.transform = 'translateY(0)', i * 150);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    cards.forEach(c => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="on-negro" style={{ padding: '8rem clamp(2rem,8vw,8rem)' }}>
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '6rem' }}>
        <div style={{ flex: 1, height: '1px', background: 'var(--borde-n)' }} />
        <span style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.45em',
          textTransform: 'uppercase', color: 'var(--oro)', opacity: 0.65, whiteSpace: 'nowrap' }}>
          Nuestra filosofía
        </span>
        <div style={{ flex: 1, height: '1px', background: 'var(--borde-n)' }} />
      </div>

      {/* 3 pilares — layout horizontal editorial */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0' }}>
        {PILARES.map(({ n, t, sub, p }, i) => (
          <div key={n} className="pilar-card" style={{
            padding: '4rem 3.5rem',
            borderRight: i < 2 ? '1px solid var(--borde-n)' : 'none',
            opacity: 0, transform: 'translateY(24px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}>
            {/* número enorme translúcido */}
            <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 300,
              fontSize: 'clamp(5rem, 9vw, 11rem)', lineHeight: 1, marginBottom: '2rem',
              color: 'transparent', WebkitTextStroke: '1px rgba(201,168,76,0.18)' }}>
              {n}
            </div>
            {/* título dorado */}
            <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 300,
              fontSize: 'clamp(2rem, 3vw, 2.8rem)', color: 'var(--oro)', lineHeight: 1.1, marginBottom: '0.6rem' }}>
              {t}
            </div>
            {/* subtítulo mono */}
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.56rem', letterSpacing: '0.3em',
              textTransform: 'uppercase', color: 'rgba(242,232,212,0.4)', marginBottom: '2rem' }}>
              {sub}
            </div>
            {/* separador */}
            <div style={{ width: '2.5rem', height: '1px', background: 'var(--oro)', opacity: 0.3, marginBottom: '2rem' }} />
            {/* texto */}
            <p style={{ fontSize: '1.1rem', lineHeight: 2, color: 'rgba(242,232,212,0.72)', margin: 0 }}>{p}</p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pilar-card { border-right: none !important; border-bottom: 1px solid var(--borde-n); }
          section[style*="padding: 8rem"] > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
