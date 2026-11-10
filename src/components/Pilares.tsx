'use client';
import { useEffect, useRef } from 'react';

const PILARES = [
  { n:'01', t:'Rescate', p:'Cada pieza fue un abrigo con historia. Nunca compramos piel nueva: todo lo que usamos existía antes que nosotras.' },
  { n:'02', t:'Artesanía', p:'Artesanas madrileñas transforman cada pieza a mano, sin prisa. Cada costura es una decisión tomada con conciencia.' },
  { n:'03', t:'Unicidad', p:'Si el abrigo fue único, el bolso también lo es. Nunca fabricamos dos iguales. Tu pieza lleva dos historias dentro.' },
];

export default function Pilares() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const cards = el.querySelectorAll('.pilar-card');
    const io = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => {
            (e.target as HTMLElement).style.opacity = '1';
            (e.target as HTMLElement).style.transform = 'translateY(0)';
          }, i * 120);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    cards.forEach(c => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="on-negro" style={{ padding: '5rem clamp(2rem,8vw,8rem)' }}>
      <div style={{ display:'flex',alignItems:'center',gap:'2rem',marginBottom:'4rem' }}>
        <div style={{ flex:1,height:'1px',background:'var(--borde-n)' }}/>
        <span style={{ fontFamily:'var(--mono)',fontSize:'0.52rem',letterSpacing:'0.45em',
          textTransform:'uppercase',color:'var(--oro)',opacity:0.65,whiteSpace:'nowrap' }}>
          Nuestra filosofía
        </span>
        <div style={{ flex:1,height:'1px',background:'var(--borde-n)' }}/>
      </div>

      <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'0' }}>
        {PILARES.map(({ n, t, p }, i) => (
          <div key={n} className="pilar-card" style={{
            padding:'3rem 3rem',
            borderRight: i < 2 ? '1px solid var(--borde-n)' : 'none',
            opacity:0, transform:'translateY(24px)',
            transition:'opacity 0.8s, transform 0.8s',
          }}>
            <div style={{ fontFamily:'var(--serif)',fontStyle:'italic',
              fontSize:'clamp(5rem,8vw,9rem)',lineHeight:1,
              color:'transparent',WebkitTextStroke:'1px rgba(201,168,76,0.18)',
              marginBottom:'1.5rem' }}>{n}</div>
            <h3 style={{ fontFamily:'var(--serif)',fontStyle:'italic',
              fontSize:'clamp(1.8rem,2.5vw,2.5rem)',color:'var(--oro)',
              fontWeight:300,marginBottom:'1.5rem',lineHeight:1.1 }}>{t}</h3>
            <p style={{ fontSize:'1.05rem',lineHeight:1.9,
              color:'rgba(242,232,212,0.72)',margin:0 }}>{p}</p>
          </div>
        ))}
      </div>

      <style>{`
        @media(max-width:768px){
          .pilar-card { border-right:none !important; border-bottom:1px solid var(--borde-n); padding:2.5rem 1.5rem !important; }
          section .pilar-card:last-child { border-bottom:none; }
        }
      `}</style>
    </section>
  );
}
