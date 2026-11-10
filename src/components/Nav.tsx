'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LINKS = [
  { label: 'Historia', href: '/#historia' },
  { label: 'Colección', href: '/coleccion' },
  { label: 'Contacto', href: '/#contacto' },
];

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [prevY, setPrevY]         = useState(0);
  const [hidden, setHidden]       = useState(false);
  const ticking                   = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 60);
        // ocultar al bajar, mostrar al subir
        if (y > prevY && y > 200) setHidden(true);
        else setHidden(false);
        setPrevY(y);
        ticking.current = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [prevY]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 500,
        padding: scrolled ? '0.9rem 5rem' : '1.6rem 5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: scrolled
          ? 'rgba(6,5,4,0.97)'
          : 'linear-gradient(to bottom, rgba(6,5,4,0.92) 0%, transparent 100%)',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.08)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transform: hidden && !menuOpen ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'padding 0.4s ease, background 0.4s ease, transform 0.4s cubic-bezier(0.4,0,0.2,1), border-color 0.4s',
      }}>

        {/* LOGO */}
        <Link href="/" onClick={() => setMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image
            src="/marca/mamotis-t.png"
            alt="Mamotis"
            width={220} height={80}
            style={{
              objectFit: 'contain',
              height: scrolled ? '48px' : '64px',
              width: 'auto',
              transition: 'height 0.4s ease',
            }}
          />
        </Link>

        {/* LINKS — escritorio */}
        <ul style={{ display: 'flex', gap: '3rem', listStyle: 'none' }} className="nav-desktop-links">
          {LINKS.map(({ label, href }) => (
            <li key={label} style={{ position: 'relative' }}>
              <Link href={href} style={{
                fontFamily: 'var(--serif)',
                fontStyle: 'italic', fontWeight: 300,
                fontSize: '1.08rem', letterSpacing: '0.04em',
                color: 'var(--crema)', textDecoration: 'none',
                opacity: 0.6,
                transition: 'opacity 0.3s, color 0.3s',
                display: 'block', paddingBottom: '4px',
              }}
                onMouseEnter={e => { const t = e.currentTarget as HTMLElement; t.style.opacity='1'; t.style.color='var(--oro)'; }}
                onMouseLeave={e => { const t = e.currentTarget as HTMLElement; t.style.opacity='0.6'; t.style.color='var(--crema)'; }}
              >{label}</Link>
              <span style={{
                position: 'absolute', bottom: 0, left: 0,
                height: '1px', width: '0%',
                background: 'var(--oro)',
                transition: 'width 0.3s ease',
              }} className="nav-underline" />
            </li>
          ))}
        </ul>

        {/* CTA escritorio */}
        <a href="https://wa.me/34605764097" target="_blank" rel="noopener" className="nav-desktop-links" style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic',
          fontSize: '1rem', letterSpacing: '0.06em',
          color: 'var(--oro)', textDecoration: 'none', opacity: 0.8,
          transition: 'opacity 0.3s',
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity='1'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity='0.8'; }}
        >Contactar →</a>

        {/* Hamburguesa — móvil */}
        <button className="nav-burger" onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          style={{ display: 'none', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end',
            gap: '5px', background: 'none', border: 'none', cursor: 'pointer', padding: '4px', zIndex: 501 }}>
          <span style={{ display: 'block', height: '1.5px', background: 'var(--oro)', width: '26px',
            transition: 'transform 0.3s',
            transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' }} />
          <span style={{ display: 'block', height: '1.5px', width: '26px', background: 'var(--oro)',
            transition: 'opacity 0.2s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', height: '1.5px', background: 'var(--oro)', width: menuOpen ? '26px' : '18px',
            transition: 'transform 0.3s, width 0.3s',
            transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }} />
        </button>
      </nav>

      {/* Menú móvil — se desliza desde arriba */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 490,
        background: 'rgba(6,5,4,0.99)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: '3rem', height: '100vh',
        transform: menuOpen ? 'translateY(0)' : 'translateY(-105%)',
        transition: 'transform 0.55s cubic-bezier(0.76,0,0.24,1)',
      }} className="nav-mobile-panel">
        {LINKS.map(({ label, href }, i) => (
          <Link key={label} href={href} onClick={() => setMenuOpen(false)} style={{
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 300,
            fontSize: 'clamp(2rem, 7vw, 3rem)', letterSpacing: '0.03em',
            color: 'var(--crema)', textDecoration: 'none',
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.4s ${0.1 + i*0.08}s ease, transform 0.4s ${0.1 + i*0.08}s ease`,
          }}>{label}</Link>
        ))}
        <a href="https://wa.me/34605764097" target="_blank" rel="noopener"
          onClick={() => setMenuOpen(false)}
          style={{
            marginTop: '1.5rem',
            fontFamily: 'var(--mono)', fontSize: '0.56rem',
            letterSpacing: '0.3em', color: 'var(--oro)', textDecoration: 'none',
            textTransform: 'uppercase',
            border: '1px solid rgba(201,168,76,0.3)', padding: '1rem 2.8rem',
            opacity: menuOpen ? 1 : 0,
            transition: `opacity 0.4s 0.34s ease`,
          }}>Contactar por WhatsApp</a>
      </div>

      <style>{`
        li:hover .nav-underline { width: 100% !important; }
        @media (max-width: 768px) {
          nav { padding: 1rem 1.4rem !important; }
          .nav-desktop-links { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
