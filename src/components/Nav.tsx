'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── Header simple y elegante ── */}
      <header style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50,
        height: 70,
        background: 'rgba(6,4,2,0.90)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(201,168,76,0.12)',
      }}>
        <div style={{
          width: 'min(1320px,90vw)', margin: '0 auto',
          height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <Link href="/" style={{ display:'flex', alignItems:'center', gap:'0.7rem', textDecoration:'none' }}>
            <div style={{ width: 28, height: 34, position:'relative', flexShrink: 0 }}>
              <Image src="/marca/logo-huevo-nuevo.png" alt="MAMOTIS" fill style={{ objectFit:'contain' }} />
            </div>
            <div style={{ position:'relative', width: 100, height: 28 }}>
              <Image src="/marca/mamotis-t.png" alt="Mamotis" fill
                style={{ objectFit:'contain', objectPosition:'left center', opacity: 0.9 }} />
            </div>
          </Link>

          {/* Nav links — desktop */}
          <nav className={`mamotis-nav${open?' nav-open':''}`} style={{
            display:'flex', gap: 32,
            fontSize: 11, letterSpacing: '0.08em',
            fontFamily: 'var(--sans)', fontWeight: 300,
            color: '#c8bba8',
          }}>
            {[
              ['#historia','La historia'],
              ['#proceso','El proceso'],
              ['#coleccion','Colección'],
              ['#filosofia','Filosofía'],
              ['#contacto','Contacto'],
            ].map(([h,l])=>(
              <Link key={h} href={h} onClick={()=>setOpen(false)} style={{
                textDecoration:'none', color:'inherit', transition:'color .2s',
                whiteSpace:'nowrap',
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color='var(--gold)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color=''}>
                {l}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div style={{ display:'flex', alignItems:'center', gap: 16 }}>
            <Link href="https://wa.me/34605764097" target="_blank" style={{
              border:'1px solid rgba(201,168,76,0.5)', padding:'9px 18px',
              fontSize: 9, letterSpacing:'0.18em', textTransform:'uppercase',
              color:'var(--gold)', fontFamily:'var(--sans)', textDecoration:'none',
              whiteSpace:'nowrap',
            }}>
              Escribir
            </Link>
            <button onClick={()=>setOpen(o=>!o)} className="hamburger" aria-label="Menú"
              style={{ display:'none', background:'none', border:0,
                color:'var(--cream)', fontSize: 20, cursor:'pointer', lineHeight: 1, padding:'4px 0' }}>
              {open ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div style={{ height: 70 }} />

      <style>{`
        @media(max-width:860px){
          .mamotis-nav{ gap:18px!important; font-size:10px!important; }
        }
        @media(max-width:640px){
          .hamburger{ display:block!important; }
          .mamotis-nav{
            display:none!important;
            position:fixed;
            top:70px; left:0; right:0;
            flex-direction:column;
            background:rgba(6,4,2,0.97);
            padding:24px 7vw;
            gap:22px;
            border-bottom:1px solid rgba(201,168,76,0.2);
            z-index:49;
          }
          .mamotis-nav.nav-open{ display:flex!important; }
        }
      `}</style>
    </>
  );
}
