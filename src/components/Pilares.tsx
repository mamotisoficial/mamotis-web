'use client';
import { useEffect, useRef } from 'react';

const PILARES = [
  { n:'01', t:'Rescate', p:'Cada abrigo tiene historia. Lo buscamos, lo elegimos, lo escuchamos. Nunca compramos piel nueva: todo lo que usamos existía antes que nosotras.' },
  { n:'02', t:'Artesanía', p:'Manos expertas transforman cada pieza a mano, en Madrid. Sin cadenas de producción. Sin prisa. Cada costura es una decisión tomada a conciencia.' },
  { n:'03', t:'Unicidad', p:'Si el abrigo fue único, el bolso también lo es. Nunca fabricamos dos iguales. Tu pieza es la única en el mundo.' },
];

export default function Pilares() {
  const topRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const els = [topRef.current, ...(listRef.current ? Array.from(listRef.current.children) : [])].filter(Boolean) as Element[];
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => { if (e.isIntersecting) { setTimeout(() => e.target.classList.add('visible'), i * 100); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => { el.classList.add('reveal'); io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <section className="on-crema" style={{ padding: '9rem clamp(2rem,8vw,8rem)' }}>
      <div ref={topRef} style={{ display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:'4rem',marginBottom:'5rem',flexWrap:'wrap' }}>
        <div>
          <span className="eyebrow eyebrow-c">— Nuestra filosofía —</span>
          <h2 style={{ fontFamily:'var(--serif)',fontWeight:300,fontStyle:'italic',fontSize:'clamp(2.2rem,4vw,4.4rem)',color:'var(--txt-crema)',lineHeight:1.1,maxWidth:'16ch' }}>
            Tres compromisos irrenunciables
          </h2>
        </div>
        {/* tijeras SVG */}
        <svg width="88" height="56" viewBox="0 0 170 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs><linearGradient id="scg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#E8C96A"/><stop offset="100%" stopColor="#C9A84C"/></linearGradient></defs>
          <circle cx="30" cy="30" r="14" fill="none" stroke="url(#scg)" strokeWidth="3"/>
          <circle cx="30" cy="30" r="5" fill="url(#scg)" opacity=".5"/>
          <circle cx="30" cy="78" r="14" fill="none" stroke="url(#scg)" strokeWidth="3"/>
          <circle cx="30" cy="78" r="5" fill="url(#scg)" opacity=".5"/>
          <path d="M42,36 L144,76" stroke="url(#scg)" strokeWidth="3.5" strokeLinecap="round"/>
          <path d="M42,72 L144,34" stroke="url(#scg)" strokeWidth="3.5" strokeLinecap="round"/>
          <circle cx="93" cy="54" r="4.5" fill="url(#scg)" opacity=".7"/>
        </svg>
      </div>

      <div ref={listRef} style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1px',background:'var(--borde-c)',border:'1px solid var(--borde-c)' }}>
        {PILARES.map(({ n, t, p }) => (
          <div key={n} style={{ background:'var(--crema)',padding:'4rem 3rem',transition:'background 0.3s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background='var(--crema2)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background='var(--crema)'; }}>
            <span style={{ fontFamily:'var(--serif)',fontStyle:'italic',fontSize:'4.5rem',fontWeight:300,
              color:'transparent',WebkitTextStroke:'1px rgba(201,168,76,0.4)',display:'block',lineHeight:1,marginBottom:'1.8rem' }}>{n}</span>
            <div style={{ fontFamily:'var(--serif)',fontStyle:'italic',fontSize:'1.6rem',color:'var(--oro)',marginBottom:'1.2rem' }}>{t}</div>
            <p style={{ fontSize:'1.1rem',lineHeight:2.2,color:'var(--txt-crema)',opacity:0.75 }}>{p}</p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pilares-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
