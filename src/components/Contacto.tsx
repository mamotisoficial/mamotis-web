'use client';
import { useEffect, useRef } from 'react';

export default function Contacto() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="contacto" ref={ref} className="on-negro reveal" style={{
      padding: '4.5rem clamp(2rem,8vw,8rem)',
      borderTop: '1px solid var(--borde-n)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position:'absolute',inset:0,
        background:'radial-gradient(ellipse 60% 80% at 70% 50%, rgba(201,168,76,0.04) 0%, transparent 65%)',
        pointerEvents:'none' }}/>

      {/* layout horizontal: texto izquierda, CTA derecha */}
      <div style={{ position:'relative',zIndex:1, display:'grid',
        gridTemplateColumns:'1fr auto', gap:'4rem', alignItems:'center' }}>

        {/* izquierda */}
        <div>
          <span style={{ fontFamily:'var(--mono)',fontSize:'0.5rem',letterSpacing:'0.4em',
            textTransform:'uppercase',color:'var(--oro)',opacity:0.6,display:'block',marginBottom:'1.2rem' }}>
            Cada pieza tiene una historia
          </span>
          <h2 style={{ fontFamily:'var(--serif)',fontWeight:300,fontStyle:'italic',
            fontSize:'clamp(2.4rem,4.5vw,5rem)',color:'var(--crema)',lineHeight:1.05,
            marginBottom:'1.2rem' }}>
            Cuéntanos<br/>
            <em style={{ color:'var(--oro)',fontStyle:'normal' }}>la tuya.</em>
          </h2>
          <p style={{ fontFamily:'var(--serif)',fontStyle:'italic',
            fontSize:'clamp(0.95rem,1.2vw,1.15rem)',lineHeight:1.85,
            color:'rgba(242,232,212,0.55)',maxWidth:'44ch',margin:0 }}>
            Todas nuestras piezas son únicas. Cuando se agotan, desaparecen para siempre. Escríbenos y te contamos qué tenemos disponible.
          </p>
        </div>

        {/* derecha — CTA */}
        <div style={{ display:'flex',flexDirection:'column',alignItems:'center',gap:'1.2rem',flexShrink:0 }}>
          <a href="https://wa.me/34605764097" target="_blank" rel="noopener" style={{
            display:'inline-flex',alignItems:'center',gap:'0.8rem',
            fontFamily:'var(--serif)',fontStyle:'italic',fontSize:'1.1rem',letterSpacing:'0.04em',
            color:'var(--negro)',
            background:'linear-gradient(135deg, var(--oro) 0%, var(--oro2) 100%)',
            padding:'1.1rem 2.8rem',textDecoration:'none',whiteSpace:'nowrap',
            transition:'opacity 0.3s, transform 0.3s',
          }}
            onMouseEnter={e=>{const t=e.currentTarget as HTMLElement;t.style.opacity='0.85';t.style.transform='translateY(-2px)';}}
            onMouseLeave={e=>{const t=e.currentTarget as HTMLElement;t.style.opacity='1';t.style.transform='none';}}
          >
            Contactar por WhatsApp
            <svg width="16" height="6" viewBox="0 0 16 6" fill="none">
              <path d="M0 3h14M11 1l3 2-3 2" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
          </a>
          <span style={{ fontFamily:'var(--mono)',fontSize:'0.5rem',letterSpacing:'0.15em',
            color:'rgba(242,232,212,0.25)' }}>
            605 764 097
          </span>
        </div>
      </div>

      <style>{`
        @media(max-width:640px){
          #contacto > div > div { grid-template-columns:1fr !important; gap:2.5rem !important; text-align:center; }
          #contacto > div > div > div:last-child { align-items:center; }
        }
      `}</style>
    </section>
  );
}
