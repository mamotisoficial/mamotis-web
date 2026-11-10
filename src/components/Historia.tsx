'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const CARDS = [
  {
    anyo: 'c. 1960 — Década prodigiosa',
    h2: 'Un abrigo comprado para toda la vida.',
    em: 'para toda la vida.',
    p: 'Las mujeres de los años sesenta lo sabían: la piel era la inversión definitiva. No se compraba un abrigo — se adquiría un legado. Se llevaba a la ópera, al paseo, a las cenas. Se cuidaba como se cuidan las cosas importantes.',
    origen: 'Piel rescatada · Artesanía Madrid · Pieza única',
    img: '/fotos/1940s-Fashion-Forecast-Coats-New-York-Worlds-Fair-1939d.jpg',
    reverse: false,
  },
  {
    anyo: 'c. 1967 — La herencia',
    h2: 'Guardado en un armario lleno de historia.',
    em: 'lleno de historia.',
    p: 'Muchos de estos abrigos llevan décadas en el mismo lugar. La dueña original los dejó un día y nunca volvieron a usarse. Demasiado valiosos para tirar. Demasiado olvidados para usar. Cuando los encontramos, les damos voz.',
    origen: 'Visón rescatado · Forro seda brocada · Madrid 2024',
    img: '/fotos/1940s-Fashion-Forecast-Coats-New-York-Worlds-Fair-1939e.jpg',
    reverse: true,
  },
  {
    anyo: 'c. 1972 — La transformación',
    h2: 'La misma piel. Otra vida.',
    em: 'Otra vida.',
    p: 'Nuestras artesanas transforman cada abrigo a mano, con respeto y lentitud. El resultado es un bolso que lleva dos historias dentro: la de quien lo llevó antes. Y la que tú escribirás.',
    origen: 'Astracán persa · Jacquard turquesa · Artesanía Madrid',
    img: '/fotos/1940s-Fashion-Forecast-Coats-New-York-Worlds-Fair-1939f.jpg',
    reverse: false,
  },
];

const BOLSOS = [
  { src: '/bolsos/bolso-001.jpeg', label: 'Visón rescatado · Forro seda' },
  { src: '/bolsos/bolso-002.jpeg', label: 'Astracán persa · Jacquard' },
  { src: '/bolsos/bolso-003.jpeg', label: 'Piel clásica · Madrid' },
  { src: '/bolsos/bolso-004.jpeg', label: 'Pieza única · 2024' },
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
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '5rem',
      alignItems: 'center',
      padding: '4.5rem 0',
      borderBottom: '1px solid var(--borde-c)',
      direction: card.reverse ? 'rtl' : 'ltr',
    }}>
      {/* foto */}
      <div style={{ direction:'ltr', position:'relative', aspectRatio:'3/4', overflow:'hidden',
        boxShadow: card.reverse ? '-10px 10px 0 var(--crema3)' : '10px 10px 0 var(--crema3)' }}>
        <Image src={card.img} alt={card.anyo} fill sizes="40vw"
          style={{ objectFit:'cover', objectPosition:'center top', filter:'sepia(0.15) contrast(1.06)' }} />
        <div style={{ position:'absolute',inset:0,
          background:'linear-gradient(to bottom,rgba(242,232,212,0.04) 0%,transparent 30%,transparent 70%,rgba(242,232,212,0.1) 100%)',
          pointerEvents:'none' }}/>
        <span style={{ position:'absolute',top:0,left:0,width:'18px',height:'18px',
          borderTop:'1px solid rgba(201,168,76,0.5)',borderLeft:'1px solid rgba(201,168,76,0.5)' }}/>
        <span style={{ position:'absolute',bottom:0,right:0,width:'18px',height:'18px',
          borderBottom:'1px solid rgba(201,168,76,0.5)',borderRight:'1px solid rgba(201,168,76,0.5)' }}/>
      </div>

      {/* texto */}
      <div style={{ direction:'ltr' }}>
        <span style={{ fontFamily:'var(--mono)',fontSize:'0.5rem',letterSpacing:'0.4em',
          textTransform:'uppercase',color:'var(--oro)',display:'block',marginBottom:'2rem',opacity:0.7 }}>
          {card.anyo}
        </span>
        <h2 style={{ fontFamily:'var(--serif)',fontWeight:300,fontStyle:'italic',
          fontSize:'clamp(1.9rem,3vw,3.2rem)',lineHeight:1.15,color:'var(--txt-crema)',marginBottom:'2rem' }}>
          {card.h2.replace(card.em, '')}
          <em style={{ color:'var(--oro)',fontStyle:'normal' }}>{card.em}</em>
        </h2>
        <p style={{ fontSize:'clamp(1rem,1.2vw,1.15rem)',lineHeight:1.9,color:'var(--txt-crema)',
          borderLeft:'2px solid rgba(201,168,76,0.35)',paddingLeft:'1.5rem',
          marginBottom:'2rem',opacity:0.8 }}>
          {card.p}
        </p>
        <p style={{ fontFamily:'var(--mono)',fontSize:'0.48rem',letterSpacing:'0.18em',
          color:'var(--txt-crema)',opacity:0.35,lineHeight:2 }}>
          {card.origen}
        </p>
      </div>
    </div>
  );
}

export default function Historia() {
  const bolsosRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = bolsosRef.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('visible'); io.disconnect(); }
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="historia" className="on-crema" style={{ padding:'5rem clamp(2rem,8vw,8rem) 0' }}>

      {/* título sección */}
      <div style={{ display:'flex',alignItems:'center',gap:'2rem',marginBottom:'4rem' }}>
        <div style={{ flex:1,height:'1px',background:'var(--borde-c)' }}/>
        <span style={{ fontFamily:'var(--mono)',fontSize:'0.5rem',letterSpacing:'0.45em',
          textTransform:'uppercase',color:'var(--txt-crema)',opacity:0.45,whiteSpace:'nowrap' }}>
          El origen
        </span>
        <div style={{ flex:1,height:'1px',background:'var(--borde-c)' }}/>
      </div>

      {/* 3 tarjetas foto+historia */}
      {CARDS.map((card, i) => <HistoriaCard key={i} card={card} index={i} />)}

      {/* bolsos — después de las historias */}
      <div ref={bolsosRef} className="reveal" style={{ padding:'4.5rem 0 5rem' }}>
        <div style={{ display:'flex',alignItems:'center',gap:'2rem',marginBottom:'3rem' }}>
          <div style={{ flex:1,height:'1px',background:'var(--borde-c)' }}/>
          <span style={{ fontFamily:'var(--mono)',fontSize:'0.5rem',letterSpacing:'0.45em',
            textTransform:'uppercase',color:'var(--txt-crema)',opacity:0.45,whiteSpace:'nowrap' }}>
            Las piezas
          </span>
          <div style={{ flex:1,height:'1px',background:'var(--borde-c)' }}/>
        </div>

        <div style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'1.2rem' }}>
          {BOLSOS.map((b, i) => (
            <div key={i}>
              <div style={{ position:'relative',aspectRatio:'3/4',overflow:'hidden',marginBottom:'0.8rem' }}>
                <Image src={b.src} alt={b.label} fill sizes="25vw"
                  style={{ objectFit:'cover',transition:'transform 0.6s ease' }}
                  onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform='scale(1.05)'}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform='scale(1)'}} />
              </div>
              <p style={{ fontFamily:'var(--mono)',fontSize:'0.46rem',letterSpacing:'0.18em',
                textTransform:'uppercase',color:'var(--txt-crema)',opacity:0.45,textAlign:'center',margin:0 }}>
                {b.label}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign:'center',marginTop:'2.5rem' }}>
          <a href="https://www.instagram.com/mamotisoficial" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily:'var(--mono)',fontSize:'0.56rem',letterSpacing:'0.35em',
              textTransform:'uppercase',color:'var(--txt-crema)',opacity:0.45,textDecoration:'none',
              borderBottom:'1px solid var(--borde-c)',paddingBottom:'2px',transition:'opacity 0.3s' }}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.opacity='0.85'}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.opacity='0.45'}}>
            Ver todas en Instagram →
          </a>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .historia-card{ grid-template-columns:1fr !important; gap:3rem !important; direction:ltr !important; padding:3.5rem 0 !important; }
          .historia-card > div:first-child { box-shadow:6px 6px 0 var(--crema3) !important; }
        }
        @media(max-width:640px){
          .reveal.historia-card ~ .reveal > div { grid-template-columns:repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}
