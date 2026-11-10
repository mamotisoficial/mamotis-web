'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

const BOLSOS = [
  { id:'001', nombre:'Visón Negro', material:'Visón rescatado · Madrid, 1973', historia:'"El abrigo original llegó de una peletería madrileña. Llevado más de veinte años."', wa:'https://wa.me/34605764097?text=Hola%2C%20me%20interesa%20el%20Vis%C3%B3n%20Negro%20001', fill1:'#2a2218', fill2:'#0d0a06' },
  { id:'002', nombre:'Visón Camel', material:'Visón natural · Barcelona, 1968', historia:'"Perteneció a una actriz de teatro. Viajó por toda Europa antes de quedar guardado."', wa:'https://wa.me/34605764097?text=Hola%2C%20me%20interesa%20el%20Vis%C3%B3n%20Camel%20002', fill1:'#352a18', fill2:'#100c06' },
  { id:'003', nombre:'Astracán', material:'Astracán persa · Bilbao, 1971', historia:'"Encontrado en un rastro italiano. Conserva etiqueta original de peletería florentina."', wa:'https://wa.me/34605764097?text=Hola%2C%20me%20interesa%20el%20Astraci%C3%A1n%20003', fill1:'#201a14', fill2:'#0c0a08' },
  { id:'004', nombre:'Rex Gris', material:'Rex gris plata · Centroeuropa, 1965', historia:'"Hallado en subasta. El corte y el brocado sitúan su confección en los primeros sesenta."', wa:'https://wa.me/34605764097?text=Hola%2C%20me%20interesa%20el%20Rex%20Gris%20004', fill1:'#1e1e22', fill2:'#0a0a0e' },
];

export default function PreviewColeccion() {
  const introRef = useRef<HTMLDivElement>(null);
  const gridRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [introRef.current, ...(gridRef.current ? Array.from(gridRef.current.children) : [])].filter(Boolean) as Element[];
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) { setTimeout(() => e.target.classList.add('visible'), i * 100); io.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    els.forEach(el => { el.classList.add('reveal'); io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <section id="coleccion" className="on-negro">
      {/* intro */}
      <div ref={introRef} style={{ padding:'9rem clamp(2rem,8vw,8rem) 5rem', textAlign:'center' }}>
        <span className="eyebrow eyebrow-n">— La colección —</span>
        <h2 style={{ fontFamily:'var(--serif)',fontWeight:300,fontStyle:'italic',
          fontSize:'clamp(2.8rem,6vw,6.5rem)',color:'var(--crema)',lineHeight:1.0,marginBottom:'1.5rem' }}>
          Piezas disponibles
        </h2>
        <p style={{ fontFamily:'var(--mono)',fontSize:'0.62rem',letterSpacing:'0.25em',textTransform:'uppercase',
          color:'rgba(242,232,212,0.32)',lineHeight:2.4 }}>
          Cada bolso es único e irrepetible.<br/>Al agotarse, desaparece para siempre.
        </p>
      </div>

      {/* grid 2×2 sin fotos */}
      <div ref={gridRef} style={{ display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'2px',background:'var(--borde-n)',borderTop:'1px solid var(--borde-n)' }}>
        {BOLSOS.map(({ id, nombre, material, historia, wa, fill1, fill2 }) => (
          <div key={id} className="bolso-card" style={{ position:'relative',overflow:'hidden',cursor:'pointer',aspectRatio:'4/5',background:'var(--negro2)' }}>
            {/* fondo SVG artístico en lugar de foto */}
            <svg style={{ position:'absolute',inset:0,width:'100%',height:'100%' }} viewBox="0 0 500 625" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <radialGradient id={`bg${id}`} cx="40%" cy="30%" r="65%">
                  <stop offset="0%" stopColor={fill1}/>
                  <stop offset="100%" stopColor={fill2}/>
                </radialGradient>
              </defs>
              <rect width="500" height="625" fill={`url(#bg${id})`}/>
              <ellipse cx="250" cy="92" rx="58" ry="50" fill="none" stroke="#C9A84C" strokeWidth="1.5" opacity=".15"/>
              <path d="M75,165 Q155,138 250,145 Q345,138 425,165 L438,440 Q350,428 250,432 Q150,428 62,440Z" fill="rgba(201,168,76,0.03)" stroke="#C9A84C" strokeWidth="1.2" opacity=".18"/>
              <text x="250" y="300" textAnchor="middle" fontFamily="'Cormorant Garamond',serif" fontStyle="italic" fontSize="22" fill="rgba(201,168,76,0.12)" letterSpacing="4">{nombre}</text>
              <text x="250" y="340" textAnchor="middle" fontFamily="'DM Mono',monospace" fontSize="10" fill="rgba(201,168,76,0.08)" letterSpacing="6">{id}</text>
            </svg>

            <div className="bolso-overlay" style={{ position:'absolute',inset:0,
              background:'linear-gradient(to top, rgba(6,5,4,0.96) 0%, rgba(6,5,4,0.15) 55%, transparent 100%)',
              transition:'background 0.4s' }}/>

            <div style={{ position:'absolute',bottom:0,left:0,right:0,padding:'2.5rem' }}>
              <span style={{ fontFamily:'var(--mono)',fontSize:'0.5rem',letterSpacing:'0.38em',color:'var(--oro)',opacity:0.5,textTransform:'uppercase',display:'block',marginBottom:'0.8rem' }}>{id}</span>
              <span style={{ fontFamily:'var(--serif)',fontStyle:'italic',fontWeight:300,fontSize:'2.2rem',color:'var(--crema)',display:'block',marginBottom:'0.5rem',lineHeight:1 }}>{nombre}</span>
              <span style={{ fontFamily:'var(--mono)',fontSize:'0.5rem',letterSpacing:'0.2em',color:'rgba(242,232,212,0.4)',textTransform:'uppercase',display:'block' }}>{material}</span>
              <span className="bolso-historia" style={{ fontFamily:'var(--serif)',fontStyle:'italic',fontSize:'0.95rem',color:'rgba(242,232,212,0.55)',lineHeight:1.8,display:'block',marginTop:'1rem',maxHeight:0,overflow:'hidden',transition:'max-height 0.5s ease, opacity 0.4s',opacity:0 }}>{historia}</span>
              <div className="bolso-cta" style={{ display:'flex',alignItems:'center',gap:'1rem',marginTop:'1.2rem',opacity:0,transition:'opacity 0.4s 0.1s' }}>
                <span style={{ flex:1,height:'1px',background:'rgba(201,168,76,0.25)' }}/>
                <a href={wa} target="_blank" rel="noopener" style={{ fontFamily:'var(--serif)',fontStyle:'italic',fontSize:'0.9rem',color:'var(--oro)',textDecoration:'none',whiteSpace:'nowrap' }}>Consultar disponibilidad →</a>
              </div>
            </div>

            <style>{`
              .bolso-card:hover .bolso-historia { max-height:90px !important; opacity:1 !important; }
              .bolso-card:hover .bolso-cta { opacity:1 !important; }
              .bolso-card:hover .bolso-overlay { background: linear-gradient(to top, rgba(6,5,4,1) 0%, rgba(6,5,4,0.4) 58%, rgba(6,5,4,0.08) 100%) !important; }
              @media (max-width: 768px) {
                .bolso-historia { max-height:90px !important; opacity:1 !important; }
                .bolso-cta { opacity:1 !important; }
              }
            `}</style>
          </div>
        ))}
      </div>

      {/* CTA ver más */}
      <div style={{ padding:'4rem', textAlign:'center', borderTop:'1px solid var(--borde-n)' }}>
        <Link href="/coleccion" style={{ fontFamily:'var(--serif)',fontStyle:'italic',fontSize:'1.1rem',
          color:'var(--oro)',textDecoration:'none',letterSpacing:'0.06em',
          borderBottom:'1px solid rgba(201,168,76,0.3)',paddingBottom:'3px',transition:'opacity 0.3s' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity='0.6'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity='1'; }}>
          Ver colección completa →
        </Link>
      </div>
    </section>
  );
}
