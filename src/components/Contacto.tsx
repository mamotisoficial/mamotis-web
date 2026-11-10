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
      padding:'7rem clamp(2rem,8vw,8rem)', textAlign:'center', position:'relative', overflow:'hidden',
      borderTop:'1px solid var(--borde-n)',
    }}>
      <div style={{ position:'absolute',inset:0,background:'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(201,168,76,0.03) 0%, transparent 70%)',pointerEvents:'none' }}/>
      <div style={{ position:'relative',zIndex:1 }}>
        <span className="eyebrow eyebrow-n">— Cada pieza tiene una historia —</span>
        <h2 style={{ fontFamily:'var(--serif)',fontWeight:300,fontStyle:'italic',
          fontSize:'clamp(3rem,6.5vw,7rem)',color:'var(--crema)',lineHeight:1.0,marginBottom:'1.5rem' }}>
          Cuéntanos<br/>
          <em style={{ color:'var(--oro)',fontStyle:'normal' }}>la tuya.</em>
        </h2>
        <p style={{ fontFamily:'var(--mono)',fontSize:'0.65rem',letterSpacing:'0.22em',textTransform:'uppercase',
          color:'rgba(242,232,212,0.32)',lineHeight:2.4,maxWidth:'46ch',margin:'0 auto 4.5rem' }}>
          Todas nuestras piezas son únicas.<br/>
          Cuando se agotan, desaparecen para siempre.<br/>
          Escríbenos y te contamos qué tenemos disponible.
        </p>
        <a href="https://wa.me/34605764097" target="_blank" rel="noopener" style={{
          display:'inline-flex',alignItems:'center',gap:'1rem',
          fontFamily:'var(--serif)',fontStyle:'italic',fontSize:'1.15rem',letterSpacing:'0.06em',
          color:'var(--negro)',
          background:'linear-gradient(135deg, var(--oro) 0%, var(--oro2) 100%)',
          padding:'1.2rem 3.5rem',textDecoration:'none',
          transition:'opacity 0.3s, transform 0.3s',
        }}
          onMouseEnter={e => { const t = e.currentTarget as HTMLElement; t.style.opacity='0.85'; t.style.transform='translateY(-3px)'; }}
          onMouseLeave={e => { const t = e.currentTarget as HTMLElement; t.style.opacity='1'; t.style.transform='none'; }}
        >Contactar por WhatsApp →</a>
        <p style={{ fontFamily:'var(--mono)',fontSize:'0.54rem',letterSpacing:'0.15em',color:'rgba(242,232,212,0.28)',marginTop:'1.8rem' }}>
          605 764 097 · Pedidos e información
        </p>
      </div>
    </section>
  );
}
