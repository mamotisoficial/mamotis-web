'use client';
import { useEffect } from 'react';

export default function InstagramFeed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://w.behold.so/widget.js';
    script.type = 'module';
    document.head.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return (
    <section className="on-crema2" style={{ padding:'7rem clamp(2rem,8vw,8rem)', textAlign:'center', borderTop:'1px solid var(--borde-c)' }}>
      <span className="eyebrow eyebrow-c" style={{ marginBottom:'1.5rem' }}>— Síguenos —</span>
      <span style={{ fontFamily:'var(--serif)',fontStyle:'italic',fontWeight:300,fontSize:'clamp(2rem,4vw,3.2rem)',color:'var(--txt-crema)',display:'block',marginBottom:'3.5rem' }}>@mamotis_</span>

      {/* widget Behold — conectar ID cuando tengas cuenta */}
      <div data-behold-id="PENDIENTE_ID_BEHOLD" style={{ width:'100%' }}/>

      <div style={{ marginTop:'3rem' }}>
        <a href="https://www.instagram.com/mamotis_/" target="_blank" rel="noopener noreferrer"
          style={{ fontFamily:'var(--serif)',fontStyle:'italic',fontSize:'1.1rem',
            color:'var(--txt-crema)',textDecoration:'none',
            borderBottom:'1px solid rgba(42,30,14,0.2)',paddingBottom:'3px',
            transition:'opacity 0.3s' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity='0.6'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity='1'; }}>
          Ver más en Instagram →
        </a>
      </div>
    </section>
  );
}
