'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const FOTOS_VINTAGE = [
  '/fotos/1940s-Fashion-Forecast-Coats-New-York-Worlds-Fair-1939d.jpg',
  '/fotos/1940s-Fashion-Forecast-Coats-New-York-Worlds-Fair-1939e.jpg',
  '/fotos/1940s-Fashion-Forecast-Coats-New-York-Worlds-Fair-1939f.jpg',
];

const BOLSOS = [
  { src: '/bolsos/bolso-001.jpeg', label: 'Visón rescatado · Forro seda' },
  { src: '/bolsos/bolso-002.jpeg', label: 'Astracán persa · Jacquard' },
  { src: '/bolsos/bolso-003.jpeg', label: 'Piel clásica · Artesanía Madrid' },
  { src: '/bolsos/bolso-004.jpeg', label: 'Pieza única · Colección 2024' },
];

export default function Historia() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const items = el.querySelectorAll('.h-reveal');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = '1';
          (e.target as HTMLElement).style.transform = 'translateY(0)';
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    items.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="historia" ref={ref} className="on-crema" style={{ padding: '5rem 0 0' }}>

      {/* — TÍTULO — */}
      <div style={{ display:'flex',alignItems:'center',gap:'2rem',marginBottom:'4rem', padding:'0 clamp(2rem,8vw,8rem)' }}>
        <div style={{ flex:1,height:'1px',background:'var(--borde-c)' }}/>
        <span style={{ fontFamily:'var(--mono)',fontSize:'0.52rem',letterSpacing:'0.45em',textTransform:'uppercase',color:'var(--txt-crema)',opacity:0.5,whiteSpace:'nowrap' }}>El origen</span>
        <div style={{ flex:1,height:'1px',background:'var(--borde-c)' }}/>
      </div>

      {/* — INTRO GRANDE — */}
      <div className="h-reveal" style={{ padding:'0 clamp(2rem,8vw,8rem) 4rem', opacity:0, transform:'translateY(28px)', transition:'opacity 0.9s, transform 0.9s' }}>
        <h2 style={{ fontFamily:'var(--serif)',fontWeight:300,fontStyle:'italic',
          fontSize:'clamp(2.4rem,4.5vw,5.5rem)',lineHeight:1.1,
          color:'var(--txt-crema)',maxWidth:'18ch',marginBottom:'1.5rem' }}>
          Un abrigo<br/>que <em style={{color:'var(--oro)',fontStyle:'normal'}}>esperaba</em><br/>ser bolso.
        </h2>
        <p style={{ fontFamily:'var(--serif)',fontStyle:'italic',fontSize:'clamp(1.05rem,1.4vw,1.3rem)',
          lineHeight:1.85,color:'var(--txt-crema2)',maxWidth:'52ch',opacity:0.8 }}>
          Cada pieza fue un abrigo con historia. Nuestras artesanas madrileñas lo transforman a mano, sin prisa, sin cadenas de producción. El resultado lleva dos historias dentro.
        </p>
      </div>

      {/* — FOTOS VINTAGE 3 COL — */}
      <div className="h-reveal" style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'0',marginBottom:'0',
        opacity:0,transform:'translateY(28px)',transition:'opacity 0.9s 0.2s, transform 0.9s 0.2s' }}>
        {FOTOS_VINTAGE.map((src, i) => (
          <div key={i} style={{ position:'relative',aspectRatio:'2/3',overflow:'hidden' }}>
            <Image src={src} alt="Vintage" fill sizes="33vw"
              style={{ objectFit:'cover',objectPosition:'center top',filter:'sepia(0.2) contrast(1.05)' }} />
            <div style={{ position:'absolute',inset:0,background:'linear-gradient(to bottom,transparent 60%,rgba(242,232,212,0.5))' }}/>
            {i===1 && (
              <div style={{ position:'absolute',bottom:'2rem',left:'50%',transform:'translateX(-50%)',
                fontFamily:'var(--mono)',fontSize:'0.45rem',letterSpacing:'0.4em',textTransform:'uppercase',
                color:'var(--txt-crema)',opacity:0.6,whiteSpace:'nowrap' }}>
                Madrid · desde 1940
              </div>
            )}
          </div>
        ))}
      </div>

      {/* — SEPARADOR NEGRO — */}
      <div className="on-negro" style={{ padding:'4rem clamp(2rem,8vw,8rem)', textAlign:'center' }}>
        <p style={{ fontFamily:'var(--mono)',fontSize:'0.52rem',letterSpacing:'0.45em',textTransform:'uppercase',
          color:'var(--oro)',opacity:0.6,marginBottom:'1.5rem' }}>El proceso</p>
        <div style={{ display:'flex',justifyContent:'center',gap:'clamp(2rem,6vw,6rem)',flexWrap:'wrap' }}>
          {['Rescate\nde pieles','Artesanía\nMadrid','Pieza única\nal mundo'].map((t,i) => (
            <div key={i} style={{ textAlign:'center' }}>
              <div style={{ fontFamily:'var(--serif)',fontStyle:'italic',
                fontSize:'clamp(2.5rem,4vw,4.5rem)',color:'transparent',
                WebkitTextStroke:'1px rgba(201,168,76,0.25)',lineHeight:1,marginBottom:'0.8rem' }}>
                0{i+1}
              </div>
              <div style={{ fontFamily:'var(--serif)',fontStyle:'italic',
                fontSize:'clamp(1.1rem,1.6vw,1.5rem)',color:'var(--oro)',lineHeight:1.3 }}>
                {t.split('\n').map((l,j)=><span key={j} style={{display:'block'}}>{l}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* — BOLSOS — */}
      <div className="on-crema" style={{ padding:'4rem clamp(2rem,8vw,8rem) 5rem' }}>
        <div style={{ display:'flex',alignItems:'center',gap:'2rem',marginBottom:'3rem' }}>
          <div style={{ flex:1,height:'1px',background:'var(--borde-c)' }}/>
          <span style={{ fontFamily:'var(--mono)',fontSize:'0.52rem',letterSpacing:'0.45em',
            textTransform:'uppercase',color:'var(--txt-crema)',opacity:0.5,whiteSpace:'nowrap' }}>
            Las piezas
          </span>
          <div style={{ flex:1,height:'1px',background:'var(--borde-c)' }}/>
        </div>

        <div className="h-reveal" style={{ display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'1.5rem',
          opacity:0,transform:'translateY(28px)',transition:'opacity 0.9s 0.1s, transform 0.9s 0.1s' }}>
          {BOLSOS.map((b, i) => (
            <div key={i}>
              <div style={{ position:'relative',aspectRatio:'3/4',overflow:'hidden',marginBottom:'1rem' }}>
                <Image src={b.src} alt={b.label} fill sizes="25vw"
                  style={{ objectFit:'cover',objectPosition:'center',transition:'transform 0.7s ease' }}
                  onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform='scale(1.04)'}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform='scale(1)'}} />
              </div>
              <p style={{ fontFamily:'var(--mono)',fontSize:'0.48rem',letterSpacing:'0.2em',
                textTransform:'uppercase',color:'var(--txt-crema)',opacity:0.5,textAlign:'center' }}>
                {b.label}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign:'center',marginTop:'3rem' }}>
          <a href="https://www.instagram.com/mamotisoficial" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily:'var(--mono)',fontSize:'0.6rem',letterSpacing:'0.4em',textTransform:'uppercase',
              color:'var(--txt-crema)',opacity:0.5,textDecoration:'none',
              borderBottom:'1px solid var(--borde-c)',paddingBottom:'3px',
              transition:'opacity 0.3s' }}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.opacity='0.9'}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.opacity='0.5'}}>
            Ver todas en Instagram →
          </a>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .historia-vintage-grid { grid-template-columns: 1fr !important; }
          .historia-bolsos-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}
