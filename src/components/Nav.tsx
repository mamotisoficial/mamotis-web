'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50,
        height: 68,
        background: scrolled ? 'rgba(6,4,2,0.55)' : 'rgba(6,4,2,0.82)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.06)' : '1px solid rgba(201,168,76,0.14)',
        transition: 'background 0.5s ease, border-color 0.5s ease',
      }}>
        <div style={{
          width: 'min(1320px,90vw)', margin: '0 auto',
          height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>

          {/* Solo el huevo */}
          <Link href="/" style={{ display:'flex', alignItems:'center', textDecoration:'none' }}>
            <div style={{ width: 26, height: 32, position:'relative', flexShrink: 0 }}>
              <Image src="/marca/logo-huevo-nuevo.png" alt="MAMOTIS" fill
                style={{ objectFit:'contain' }} priority />
            </div>
          </Link>

          {/* Nav links */}
          <nav className={`mamotis-nav${open?' nav-open':''}`} style={{
            display:'flex', gap: 44,
            fontSize: 10,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontFamily: 'var(--serif)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#d4c4a0',
          }}>
            {[
              ['#historia','Historia'],
              ['#proceso','Proceso'],
              ['#coleccion','Colección'],
              ['#contacto','Contacto'],
            ].map(([h,l]) => (
              <Link key={h} href={h} onClick={() => setOpen(false)} style={{
                textDecoration:'none', color:'inherit',
                transition:'color 0.25s, opacity 0.25s',
                whiteSpace:'nowrap',
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color='#c9a64c'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color=''}>
                {l}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div style={{ display:'flex', alignItems:'center', gap:16 }}>
            <Link href="https://wa.me/34605764097" target="_blank" style={{
              border:'1px solid rgba(201,168,76,0.45)',
              padding:'9px 20px',
              fontSize: 9, letterSpacing:'0.22em', textTransform:'uppercase',
              color:'rgba(201,168,76,0.9)', fontFamily:'var(--sans)',
              textDecoration:'none', whiteSpace:'nowrap',
              transition:'border-color 0.25s, color 0.25s',
            }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor='var(--gold)'; el.style.color='var(--gold)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor='rgba(201,168,76,0.45)'; el.style.color='rgba(201,168,76,0.9)'; }}>
              WhatsApp
            </Link>
            <button onClick={() => setOpen(o => !o)} className="hamburger" aria-label="Menú"
              style={{ display:'none', background:'none', border:0,
                color:'#d4c4a0', fontSize:20, cursor:'pointer', lineHeight:1, padding:'4px 0' }}>
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>

      <div style={{ height: 68 }} />

      <style>{`
        @media(max-width:760px){
          .mamotis-nav{ gap:20px!important; font-size:9px!important; }
        }
        @media(max-width:580px){
          .hamburger{ display:block!important; }
          .mamotis-nav{
            display:none!important;
            position:fixed; top:68px; left:0; right:0;
            flex-direction:column;
            background:rgba(6,4,2,0.97);
            padding:28px 7vw; gap:24px;
            border-bottom:1px solid rgba(201,168,76,0.18);
            z-index:49;
          }
          .mamotis-nav.nav-open{ display:flex!important; }
        }
      `}</style>
    </>
  );
}
