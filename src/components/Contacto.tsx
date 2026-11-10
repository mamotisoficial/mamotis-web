'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Contacto() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('visible'); io.disconnect(); }
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="contacto" ref={ref} className="on-negro reveal" style={{
      padding: '5rem clamp(2rem,8vw,8rem) 5rem',
      borderTop: '1px solid var(--borde-n)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Fondo radiante sutil */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none',
        background:'radial-gradient(ellipse 70% 90% at 80% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)' }}/>

      {/* Huevo flotante derecha — decorativo */}
      <div style={{
        position: 'absolute', right: 'clamp(2rem,8vw,8rem)', top: '50%',
        transform: 'translateY(-50%)',
        width: 'min(380px, 32vw)',
        opacity: 0.18,
        pointerEvents: 'none',
        animation: 'contactFloat 10s ease-in-out infinite',
        zIndex: 0,
      }}>
        <Image src="/marca/logo-huevo-nuevo.png" alt="" width={380} height={380}
          style={{ width:'100%', height:'auto', objectFit:'contain',
            filter:'drop-shadow(0 0 60px rgba(201,168,76,0.3))' }} />
      </div>

      {/* Layout: texto izquierda, CTA centro */}
      <div style={{ position:'relative', zIndex:1, maxWidth:'700px' }}>
        <span style={{ fontFamily:'var(--mono)', fontSize:'0.52rem', letterSpacing:'0.45em',
          textTransform:'uppercase', color:'var(--oro)', opacity:0.6,
          display:'block', marginBottom:'1.5rem' }}>
          Cada pieza tiene una historia
        </span>

        <h2 style={{ fontFamily:'var(--serif)', fontWeight:300, fontStyle:'italic',
          fontSize:'clamp(2.8rem,5vw,6rem)', color:'var(--crema)', lineHeight:1.05,
          marginBottom:'1.5rem' }}>
          Cuéntanos<br/>
          <em style={{ color:'var(--oro)', fontStyle:'normal' }}>la tuya.</em>
        </h2>

        <p style={{ fontFamily:'var(--serif)', fontStyle:'italic',
          fontSize:'clamp(1rem,1.3vw,1.2rem)', lineHeight:1.9,
          color:'rgba(242,232,212,0.55)', maxWidth:'42ch', marginBottom:'3rem' }}>
          Todas nuestras piezas son únicas. Cuando se agotan, desaparecen para siempre.
          Escríbenos y te contamos qué tenemos disponible.
        </p>

        <div style={{ display:'flex', alignItems:'center', gap:'2rem', flexWrap:'wrap' }}>
          <a href="https://wa.me/34605764097" target="_blank" rel="noopener" style={{
            display:'inline-flex', alignItems:'center', gap:'0.8rem',
            fontFamily:'var(--serif)', fontStyle:'italic', fontSize:'1.05rem',
            color:'var(--negro)',
            background:'linear-gradient(135deg, var(--oro) 0%, var(--oro2) 100%)',
            padding:'1.1rem 2.8rem', textDecoration:'none', whiteSpace:'nowrap',
            transition:'opacity 0.3s, transform 0.3s',
          }}
            onMouseEnter={e=>{const t=e.currentTarget as HTMLElement;t.style.opacity='0.85';t.style.transform='translateY(-2px)';}}
            onMouseLeave={e=>{const t=e.currentTarget as HTMLElement;t.style.opacity='1';t.style.transform='none';}}>
            Contactar por WhatsApp
            <svg width="16" height="6" viewBox="0 0 16 6" fill="none">
              <path d="M0 3h14M11 1l3 2-3 2" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
          </a>
          <span style={{ fontFamily:'var(--mono)', fontSize:'0.5rem', letterSpacing:'0.15em',
            color:'rgba(242,232,212,0.25)' }}>
            605 764 097
          </span>
        </div>
      </div>

      <style>{`
        @keyframes contactFloat {
          0%,100% { transform: translateY(-50%) rotate(-1deg); }
          50% { transform: translateY(calc(-50% - 18px)) rotate(1deg); }
        }
        @media(max-width:768px){
          #contacto div[style*="position: absolute"][style*="right"] { display: none; }
        }
      `}</style>
    </section>
  );
}
