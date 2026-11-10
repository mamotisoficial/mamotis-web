'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Ribbon marquee */}
      <div className="ribbon" aria-label="Lema de MAMOTIS">
        <div className="ribbon-track">
          {['Una sola','Existió antes','Irrepetible','Vivió una vida','Ahora vive otra','Renace',
            'Una sola','Existió antes','Irrepetible','Vivió una vida','Ahora vive otra','Renace'].map((t,i) => (
            <span key={i}>{t}<span className="seed" style={{margin:'0 15px'}}>◈</span></span>
          ))}
        </div>
      </div>

      {/* Header */}
      <header style={{
        height: 76,
        position: 'fixed',
        zIndex: 50,
        top: 38,
        left: 0,
        width: '100%',
        borderBottom: '1px solid rgba(255,255,255,0.12)',
        background: 'linear-gradient(#080706cc, transparent)',
        backdropFilter: 'blur(8px)',
      }}>
        <div className="wrap nav" style={{height:'100%',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <Link href="/" style={{font:`26px var(--display)`,letterSpacing:'0.34em',color:'var(--cream)'}}>
            MAMOTIS
          </Link>

          <nav className={`navlinks${open?' mobile-open':''}`} style={{display:'flex',gap:34,font:`13px var(--serif)`,color:'#e7dcc8'}}>
            {[['#inicio','Inicio'],['#historia','La historia'],['#proceso','El proceso'],['#coleccion','Colección'],['#filosofia','Filosofía'],['#contacto','Contacto']].map(([h,l])=>(
              <Link key={h} href={h} onClick={()=>setOpen(false)}
                style={{transition:'color .2s'}}
                onMouseEnter={e=>(e.currentTarget.style.color='var(--gold2)')}
                onMouseLeave={e=>(e.currentTarget.style.color='')}>
                {l}
              </Link>
            ))}
          </nav>

          <Link href="#coleccion" style={{border:'1px solid #c6a65e',padding:'11px 18px',fontSize:10,letterSpacing:'0.16em',textTransform:'uppercase'}}>
            Descubre las piezas
          </Link>

          <button onClick={()=>setOpen(o=>!o)} style={{display:'none',background:'none',border:0,color:'var(--cream)',fontSize:25,cursor:'pointer'}}
            className="menu-btn" aria-label="Abrir menú">☰</button>
        </div>
      </header>

      {/* Spacer for ribbon+header */}
      <div style={{height: 38 + 76}} />

      <style>{`
        @media(max-width:640px){
          .menu-btn{display:block!important}
          .navlinks:not(.mobile-open){display:none!important}
          .navlinks{display:flex;flex-direction:column}
        }
        @media(max-width:900px){
          header nav a{font-size:11px}
        }
      `}</style>
    </>
  );
}
