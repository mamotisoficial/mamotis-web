'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// Huevito SVG inline para el ribbon
const EggSeed = () => (
  <svg viewBox="0 0 70 90" style={{width:14,height:18,display:'inline-block',verticalAlign:'middle',flexShrink:0}} aria-hidden="true">
    <defs>
      <linearGradient id="eggR" x1="0" x2="1">
        <stop stopColor="#8c6424"/>
        <stop offset=".45" stopColor="#c9a84c"/>
        <stop offset="1" stopColor="#a77928"/>
      </linearGradient>
    </defs>
    <path d="M35 4 C23 22 9 38 11 55 C13 76 25 85 35 85 C48 85 60 75 60 56 C60 39 47 20 35 4Z" fill="url(#eggR)"/>
  </svg>
);

const SEEDS = ['Una sola','Existió antes','Irrepetible','Vivió una vida','Ahora vive otra','Renace'];
const DOUBLE = [...SEEDS, ...SEEDS];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── Ribbon fijo en el top ── */}
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 60,
        height: 38, overflow: 'hidden',
        background: 'var(--cream)', color: '#6d5b3b',
        borderBottom: '1px solid #d7c7a4',
        display: 'flex', alignItems: 'center', whiteSpace: 'nowrap',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 28,
          minWidth: 'max-content',
          animation: 'marquee 42s linear infinite',
          font: `italic 14px var(--serif)`, letterSpacing: '0.08em',
        }}>
          {DOUBLE.map((t, i) => (
            <span key={i} style={{display:'flex',alignItems:'center',gap:12}}>
              {t} <EggSeed />
            </span>
          ))}
        </div>
      </div>

      {/* ── Header fijo bajo el ribbon ── */}
      <header style={{
        position: 'fixed', top: 38, left: 0, width: '100%', zIndex: 50,
        height: 72,
        borderBottom: '1px solid rgba(255,255,255,0.10)',
        background: 'rgba(8,6,4,0.82)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}>
        <div style={{
          width: 'min(1320px,88vw)', margin: '0 auto',
          height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo: huevo + script mamotis */}
          <Link href="/" style={{display:'flex',alignItems:'center',gap:'0.8rem',textDecoration:'none'}}>
            <div style={{width:32,height:38,position:'relative',flexShrink:0}}>
              <Image src="/marca/logo-huevo-nuevo.png" alt="MAMOTIS emblema" fill style={{objectFit:'contain'}} />
            </div>
            <div style={{position:'relative',width:110,height:34}}>
              <Image src="/marca/mamotis-t.png" alt="Mamotis" fill
                style={{objectFit:'contain',objectPosition:'left center',filter:'brightness(0.95) sepia(0.1)',opacity:0.92}} />
            </div>
          </Link>

          {/* Nav links */}
          <nav className={`mamotis-nav${open?' nav-open':''}`} style={{display:'flex',gap:30,font:`13px var(--serif)`,color:'#e7dcc8'}}>
            {[['#inicio','Inicio'],['#historia','La historia'],['#proceso','El proceso'],['#coleccion','Colección'],['#filosofia','Filosofía'],['#contacto','Contacto']].map(([h,l])=>(
              <Link key={h} href={h} onClick={()=>setOpen(false)}
                style={{transition:'color .2s',whiteSpace:'nowrap'}}
                onMouseEnter={e=>e.currentTarget.style.color='var(--gold2)'}
                onMouseLeave={e=>e.currentTarget.style.color=''}>
                {l}
              </Link>
            ))}
          </nav>

          <div style={{display:'flex',alignItems:'center',gap:16}}>
            <Link href="#coleccion"
              style={{border:'1px solid #c6a65e',padding:'9px 16px',fontSize:9,letterSpacing:'0.16em',textTransform:'uppercase',whiteSpace:'nowrap'}}>
              Descubre las piezas
            </Link>
            <button onClick={()=>setOpen(o=>!o)} className="hamburger"
              style={{display:'none',background:'none',border:0,color:'var(--cream)',fontSize:22,cursor:'pointer',lineHeight:1}}
              aria-label="Menú">☰</button>
          </div>
        </div>
      </header>

      {/* Spacer para contenido debajo del nav fijo */}
      <div style={{height: 38 + 72}} />

      <style>{`
        @keyframes marquee { to { transform: translateX(-50%); } }
        @media(max-width:900px){
          .mamotis-nav{ gap:16px!important; font-size:11px!important; }
        }
        @media(max-width:640px){
          .hamburger{ display:block!important; }
          .mamotis-nav{ display:none!important; }
          .mamotis-nav.nav-open{
            display:flex!important;
            position:fixed;
            top:110px; left:0; right:0;
            flex-direction:column;
            background:#0b0907;
            padding:20px 6vw;
            gap:18px;
            border-bottom:1px solid #80642e;
            z-index:49;
          }
        }
      `}</style>
    </>
  );
}
