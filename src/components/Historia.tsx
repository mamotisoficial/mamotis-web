'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const CARDS = [
  {
    anyo: 'c. 1960 — Década prodigiosa',
    h2: ['Un abrigo comprado', 'para toda la vida.'],
    em: 'para toda la vida.',
    p1: 'Las mujeres de los años sesenta lo sabían: la piel era la inversión definitiva. No se compraba un abrigo — se adquiría un legado. Se llevaba a la ópera, al paseo, a las cenas. Se cuidaba como se cuidan las cosas importantes.',
    p2: 'Décadas después, esos abrigos siguen aquí. MAMOTIS los encuentra antes de que desaparezcan.',
    origen: 'Piel rescatada · Artesanía Madrid · Pieza única',
    img: '/fotos/1940s-Fashion-Forecast-Coats-New-York-Worlds-Fair-1939d.jpg',
    reverse: false,
  },
  {
    anyo: 'c. 1967 — La herencia',
    h2: ['Guardado en un armario.', 'Lleno de historia.'],
    em: 'Lleno de historia.',
    p1: 'Muchos de estos abrigos llevan décadas en el mismo lugar. La dueña original los dejó un día y nunca volvieron a usarse. Demasiado valiosos para tirar. Demasiado olvidados para usar.',
    p2: 'Cuando los encontramos, escuchamos su historia. Y decidimos que merecen seguir viviéndola.',
    origen: 'Visón rescatado · Forro seda brocada · Madrid 2024',
    img: '/fotos/1940s-Fashion-Forecast-Coats-New-York-Worlds-Fair-1939e.jpg',
    reverse: true,
  },
  {
    anyo: 'c. 1972 — La transformación',
    h2: ['La misma piel.', 'Otra vida.'],
    em: 'Otra vida.',
    p1: 'Nuestras artesanas transforman cada abrigo a mano. Con respeto. Con lentitud. Sin cadenas de producción. Cada costura es una decisión tomada a conciencia.',
    p2: 'El resultado es un bolso que lleva dos historias dentro: la de quien lo llevó antes. Y la que tú escribirás.',
    origen: 'Astracán persa · Jacquard turquesa · Artesanía Madrid',
    img: '/fotos/1940s-Fashion-Forecast-Coats-New-York-Worlds-Fair-1939f.jpg',
    reverse: false,
  },
];

function HistoriaCard({ card, index }: { card: typeof CARDS[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('visible'); io.disconnect(); }
    }, { threshold: 0.08 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal historia-card" style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem',
      alignItems: 'center', padding: '7rem 0',
      borderBottom: '1px solid var(--borde-c)',
      direction: card.reverse ? 'rtl' : 'ltr',
    }}>
      {/* foto real */}
      <div style={{
        direction: 'ltr', position: 'relative', aspectRatio: '3/4',
        overflow: 'hidden',
        boxShadow: '14px 14px 0 var(--crema3)',
      }}>
        <Image
          src={card.img}
          alt={`Foto vintage — ${card.anyo}`}
          fill
          sizes="(max-width:768px) 90vw, 40vw"
          style={{ objectFit: 'cover', objectPosition: 'center top', filter: 'sepia(0.18) contrast(1.06)' }}
        />
        {/* viñeta editorial */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(242,232,212,0.08) 0%, transparent 35%, transparent 65%, rgba(242,232,212,0.12) 100%)',
          pointerEvents: 'none',
        }}/>
        {/* corner marks dorados */}
        <span style={{ position:'absolute',top:0,left:0,width:'20px',height:'20px',borderTop:'1px solid rgba(201,168,76,0.5)',borderLeft:'1px solid rgba(201,168,76,0.5)' }}/>
        <span style={{ position:'absolute',bottom:0,right:0,width:'20px',height:'20px',borderBottom:'1px solid rgba(201,168,76,0.5)',borderRight:'1px solid rgba(201,168,76,0.5)' }}/>
      </div>

      {/* texto */}
      <div style={{ direction: 'ltr' }}>
        <span style={{ fontFamily:'var(--mono)',fontSize:'0.52rem',letterSpacing:'0.4em',textTransform:'uppercase',color:'var(--oro)',display:'block',marginBottom:'2.5rem',opacity:0.75 }}>{card.anyo}</span>
        <h2 style={{ fontFamily:'var(--serif)',fontWeight:300,fontStyle:'italic',fontSize:'clamp(2rem,3.5vw,3.6rem)',lineHeight:1.15,color:'var(--txt-crema)',marginBottom:'2.5rem' }}>
          {card.h2[0]}<br/>
          <em style={{ color:'var(--oro)',fontStyle:'normal' }}>{card.h2[1]}</em>
        </h2>
        <p style={{ fontSize:'1.1rem',lineHeight:2,color:'var(--txt-crema)',borderLeft:'2px solid rgba(201,168,76,0.4)',paddingLeft:'2rem',marginBottom:'1.5rem',opacity:0.78 }}>{card.p1}</p>
        <p style={{ fontSize:'1.1rem',lineHeight:2,color:'var(--txt-crema)',borderLeft:'2px solid rgba(201,168,76,0.4)',paddingLeft:'2rem',marginBottom:'2rem',opacity:0.78 }}>{card.p2}</p>
        <p style={{ fontFamily:'var(--mono)',fontSize:'0.52rem',letterSpacing:'0.18em',color:'var(--txt-crema)',opacity:0.38,lineHeight:2 }}>{card.origen}</p>
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
        <span style={{ fontFamily:'var(--mono)',fontSize:'0.52rem',letterSpacing:'0.45em',textTransform:'uppercase',color:'var(--txt-crema)',opacity:0.5,whiteSpace:'nowrap' }}>El origen</span>
        <div style={{ flex:1,height:'1px',background:'var(--borde-c)' }}/>
      </div>
      {CARDS.map((card, i) => <HistoriaCard key={i} card={card} index={i} />)}

      <style>{`
        @media (max-width: 768px) {
          .historia-card { grid-template-columns: 1fr !important; gap: 3rem !important; padding: 4rem 0 !important; direction: ltr !important; }
        }
      `}</style>
    </section>
  );
}
