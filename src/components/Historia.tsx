'use client';
import { useEffect, useRef } from 'react';

const CARDS = [
  { anyo: 'c. 1960 — Década prodigiosa', h2: ['Un abrigo comprado', 'para toda la vida.'], em: 'para toda la vida.', p1: 'Las mujeres de los años sesenta lo sabían: la piel era la inversión definitiva. No se compraba un abrigo — se adquiría un legado. Se llevaba a la ópera, al paseo, a las cenas. Se cuidaba como se cuidan las cosas importantes.', p2: 'Décadas después, esos abrigos siguen aquí. MAMOTIS los encuentra antes de que desaparezcan.', origen: 'Piel rescatada · Artesanía Madrid · Pieza única', reverse: false },
  { anyo: 'c. 1967 — La herencia', h2: ['Guardado en un armario.', 'Lleno de historia.'], em: 'Lleno de historia.', p1: 'Muchos de estos abrigos llevan décadas en el mismo lugar. La dueña original los dejó un día y nunca volvieron a usarse. Demasiado valiosos para tirar. Demasiado olvidados para usar.', p2: 'Cuando los encontramos, escuchamos su historia. Y decidimos que merecen seguir viviéndola.', origen: 'Visón rescatado · Forro seda brocada · Madrid 2024', reverse: true },
  { anyo: 'c. 1972 — La transformación', h2: ['La misma piel.', 'Otra vida.'], em: 'Otra vida.', p1: 'Nuestras artesanas transforman cada abrigo a mano. Con respeto. Con lentitud. Sin cadenas de producción. Cada costura es una decisión tomada a conciencia.', p2: 'El resultado es un bolso que lleva dos historias dentro: la de quien lo llevó antes. Y la que tú escribirás.', origen: 'Astracán persa · Jacquard turquesa · Artesanía Madrid', reverse: false },
];

function HistoriaCard({ card, index }: { card: typeof CARDS[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); io.disconnect(); } }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const accent = ['#c0a878','#b09870','#a08860'][index];
  const yr = ['Madrid, c. 1960','Barcelona, c. 1967','Bilbao, c. 1972'][index];

  return (
    <div ref={ref} className="reveal" style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem',
      alignItems: 'center', padding: '7rem 0',
      borderBottom: '1px solid var(--borde-c)',
      direction: card.reverse ? 'rtl' : 'ltr',
    }}>
      {/* visual */}
      <div style={{ direction: 'ltr', position: 'relative', aspectRatio: '3/4',
        background: 'var(--negro2)', border: '1px solid rgba(201,168,76,0.08)',
        boxShadow: '12px 12px 0 var(--crema3)', overflow: 'hidden' }}>
        <svg viewBox="0 0 400 533" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
          <rect width="400" height="533" fill="#100e0a"/>
          <g opacity="0.42" fill={accent}>
            <ellipse cx="200" cy="82" rx="30" ry="36"/>
            <path d={`M170,116 Q200,106 230,116 Q255,162 260,260 Q265,352 258,430 L142,430 Q135,352 140,260 Q145,162 170,116Z`}/>
          </g>
          <text x="200" y="498" textAnchor="middle" fontFamily="Georgia,serif" fontStyle="italic" fontSize="12" fill="rgba(201,168,76,0.4)" letterSpacing="4">{yr}</text>
        </svg>
        {/* corner marks */}
        <span style={{ position:'absolute',top:'-1px',left:'-1px',width:'20px',height:'20px',borderTop:'1px solid rgba(201,168,76,0.4)',borderLeft:'1px solid rgba(201,168,76,0.4)' }}/>
        <span style={{ position:'absolute',bottom:'-1px',right:'-1px',width:'20px',height:'20px',borderBottom:'1px solid rgba(201,168,76,0.4)',borderRight:'1px solid rgba(201,168,76,0.4)' }}/>
      </div>

      {/* texto */}
      <div style={{ direction: 'ltr' }}>
        <span style={{ fontFamily:'var(--mono)',fontSize:'0.52rem',letterSpacing:'0.4em',textTransform:'uppercase',color:'var(--oro)',display:'block',marginBottom:'2.5rem',opacity:0.7 }}>{card.anyo}</span>
        <h2 style={{ fontFamily:'var(--serif)',fontWeight:300,fontStyle:'italic',fontSize:'clamp(2rem,3.5vw,3.6rem)',lineHeight:1.15,color:'var(--txt-crema)',marginBottom:'2.5rem' }}>
          {card.h2[0]}<br/>
          <em style={{ color:'var(--oro)',fontStyle:'normal' }}>{card.h2[1]}</em>
        </h2>
        <p style={{ fontSize:'1.15rem',lineHeight:2.2,color:'var(--txt-crema2)',borderLeft:'2px solid rgba(201,168,76,0.3)',paddingLeft:'2rem',marginBottom:'1.5rem' }}>{card.p1}</p>
        <p style={{ fontSize:'1.15rem',lineHeight:2.2,color:'var(--txt-crema2)',borderLeft:'2px solid rgba(201,168,76,0.3)',paddingLeft:'2rem',marginBottom:'2rem' }}>{card.p2}</p>
        <p style={{ fontFamily:'var(--mono)',fontSize:'0.52rem',letterSpacing:'0.18em',color:'var(--txt-crema2)',opacity:0.45,lineHeight:2 }}>{card.origen}</p>
      </div>
    </div>
  );
}

export default function Historia() {
  return (
    <section id="historia" className="on-crema" style={{ padding: '8rem clamp(2rem,8vw,8rem)' }}>
      {/* separador título */}
      <div style={{ display:'flex',alignItems:'center',gap:'2.5rem',marginBottom:'6rem' }}>
        <div style={{ flex:1,height:'1px',background:'var(--borde-c)' }}/>
        <span style={{ fontFamily:'var(--mono)',fontSize:'0.52rem',letterSpacing:'0.45em',textTransform:'uppercase',color:'var(--txt-crema)',opacity:0.35,whiteSpace:'nowrap' }}>El origen</span>
        <div style={{ flex:1,height:'1px',background:'var(--borde-c)' }}/>
      </div>
      {CARDS.map((card, i) => <HistoriaCard key={i} card={card} index={i} />)}

      <style>{`
        @media (max-width: 768px) {
          #historia > div:not(:first-child) { grid-template-columns: 1fr !important; gap: 3rem !important; padding: 4rem 0 !important; direction: ltr !important; }
        }
      `}</style>
    </section>
  );
}
