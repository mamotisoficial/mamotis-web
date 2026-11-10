'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// Huevo dorado MAMOTIS — forma oval perfecta con brillo
const EggIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 60 76" width={size} height={size * 1.27} aria-hidden="true"
    style={{ display:'inline-block', verticalAlign:'middle', flexShrink: 0 }}>
    <defs>
      <linearGradient id="eggGrad" x1="20%" y1="0%" x2="80%" y2="100%">
        <stop offset="0%"   stopColor="#6b4a18"/>
        <stop offset="30%"  stopColor="#f0c84a"/>
        <stop offset="55%"  stopColor="#e8b830"/>
        <stop offset="80%"  stopColor="#c49020"/>
        <stop offset="100%" stopColor="#7a5215"/>
      </linearGradient>
      <radialGradient id="eggShine" cx="38%" cy="28%" r="35%">
        <stop offset="0%"   stopColor="rgba(255,245,180,0.55)"/>
        <stop offset="100%" stopColor="rgba(255,245,180,0)"/>
      </radialGradient>
    </defs>
    <path d="M30 4 C22 14 8 28 8 46 C8 62 18 73 30 73 C42 73 52 62 52 46 C52 28 38 14 30 4Z"
      fill="url(#eggGrad)"/>
    <path d="M30 4 C22 14 8 28 8 46 C8 62 18 73 30 73 C42 73 52 62 52 46 C52 28 38 14 30 4Z"
      fill="url(#eggShine)"/>
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
          display: 'flex', alignItems: 'center', gap: 24,
          minWidth: 'max-content',
          animation: 'marquee 42s linear infinite',
          font: `italic 14px var(--serif)`, letterSpacing: '0.08em',
        }}>
          {DOUBLE.map((t, i) => (
            <span key={i} style={{ display:'flex', alignItems:'center', gap: 12 }}>
              {t} <EggIcon size={16} />
            </span>
          ))}
        </div>
      </div>

      {/* ── Header fijo bajo el ribbon ── */}
      <header style={{
        position: 'fixed', top: 38, left: 0, width: '100%', zIndex: 50,
        height: 72,
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        background: 'rgba(8,6,4,0.88)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
      }}>
        <div style={{
          width: 'min(1320px,88vw)', margin: '0 auto',
          height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo: huevo + script mamotis */}
          <Link href="/" style={{ display:'flex', alignItems:'center', gap:'0.75rem', textDecoration:'none' }}>
            <div style={{ width: 30, height: 36, position:'relative', flexShrink: 0 }}>
              <Image src="/marca/logo-huevo-nuevo.png" alt="MAMOTIS emblema" fill style={{ objectFit:'contain' }} />
            </div>
            <div style={{ position:'relative', width: 108, height: 32 }}>
              <Image src="/marca/mamotis-t.png" alt="Mamotis" fill
                style={{ objectFit:'contain', objectPosition:'left center', opacity: 0.92 }} />
            </div>
          </Link>

          {/* Nav links */}
          <nav className={`mamotis-nav${open?' nav-open':''}`}
            style={{ display:'flex', gap: 28, font:`13px var(--serif)`, color:'#e7dcc8', fontWeight: 400 }}>
            {[['#inicio','Inicio'],['#historia','La historia'],['#proceso','El proceso'],['#coleccion','Colección'],['#filosofia','Filosofía'],['#contacto','Contacto']].map(([h,l])=>(
              <Link key={h} href={h} onClick={()=>setOpen(false)}
                style={{ transition:'color .2s', whiteSpace:'nowrap', letterSpacing: '0.03em' }}
                onMouseEnter={e => e.currentTarget.style.color='var(--gold2)'}
                onMouseLeave={e => e.currentTarget.style.color=''}>
                {l}
              </Link>
            ))}
          </nav>

          <div style={{ display:'flex', alignItems:'center', gap: 16 }}>
            <Link href="#coleccion"
              style={{ border:'1px solid rgba(201,168,76,0.6)', padding:'9px 16px', fontSize: 9, letterSpacing:'0.16em', textTransform:'uppercase', whiteSpace:'nowrap', color:'var(--cream)', transition:'.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'; (e.currentTarget as HTMLElement).style.color = 'var(--gold)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.6)'; (e.currentTarget as HTMLElement).style.color = 'var(--cream)'; }}>
              Descubre las piezas
            </Link>
            <button onClick={()=>setOpen(o=>!o)} className="hamburger"
              style={{ display:'none', background:'none', border:0, color:'var(--cream)', fontSize: 22, cursor:'pointer', lineHeight: 1 }}
              aria-label="Menú">☰</button>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div style={{ height: 38 + 72 }} />

      <style>{`
        @keyframes marquee { to { transform: translateX(-50%); } }
        @media(max-width:900px){ .mamotis-nav{ gap:14px!important; font-size:11px!important; } }
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
