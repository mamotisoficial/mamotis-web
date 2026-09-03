'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LINKS = [
  { label: 'La Marca', href: '/' },
  { label: 'Historia', href: '/#historia' },
  { label: 'Colección', href: '/coleccion' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear el scroll del body con el menú abierto
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
        padding: scrolled ? '1.2rem 5rem' : '1.8rem 5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'linear-gradient(to bottom, rgba(5,5,5,0.95) 60%, transparent)',
        transition: 'padding 0.4s ease',
      }}>

        {/* LOGO */}
        <Link href="/" onClick={() => setMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image
            src="/marca/mamotis-t.png"
            alt="Mamotis"
            width={220}
            height={80}
            style={{
              objectFit: 'contain',
              height: scrolled ? '55px' : '70px',
              width: 'auto',
              transition: 'height 0.4s ease, opacity 0.4s ease',
              opacity: scrolled ? 0.75 : 1,
            }}
          />
        </Link>

        {/* LINKS — escritorio */}
        <ul className="nav-links" style={{ display: 'flex', gap: '3rem', listStyle: 'none' }}>
          {LINKS.map(({ label, href }) => (
            <li key={label} style={{ position: 'relative' }}>
              <Link href={href} style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic', fontWeight: 300,
                fontSize: '1.1rem', letterSpacing: '0.05em',
                color: 'var(--crema)', textDecoration: 'none',
                textTransform: 'none', opacity: 0.6,
                transition: 'opacity 0.3s, color 0.3s',
                paddingBottom: '4px',
                display: 'block',
              }}
                onMouseEnter={e => {
                  const t = e.currentTarget;
                  t.style.opacity = '1';
                  t.style.color = 'var(--oro)';
                }}
                onMouseLeave={e => {
                  const t = e.currentTarget;
                  t.style.opacity = '0.6';
                  t.style.color = 'var(--crema)';
                }}
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

        {/* CTA — escritorio */}
        <Link href="/coleccion" className="nav-cta" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: '1rem', letterSpacing: '0.08em',
          color: 'var(--oro)', textDecoration: 'none',
          padding: 0,
          transition: 'opacity 0.3s',
          opacity: 0.8,
        }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '1'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '0.8'; }}
        >Ver colección →</Link>

        {/* Hamburguesa — móvil */}
        <button
          className="nav-burger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          style={{
            display: 'none',
            flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end',
            gap: '6px', width: '30px', height: '30px',
            background: 'none', border: 'none', cursor: 'pointer', padding: 0,
            zIndex: 501,
          }}
        >
          <span style={{
            display: 'block', height: '1.5px', background: 'var(--oro)',
            width: menuOpen ? '24px' : '26px',
            transformOrigin: 'center',
            transition: 'transform 0.3s ease, opacity 0.3s ease',
            transform: menuOpen ? 'translateY(7.5px) rotate(45deg)' : 'none',
          }} />
          <span style={{
            display: 'block', height: '1.5px', width: '26px', background: 'var(--oro)',
            transition: 'opacity 0.2s ease',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block', height: '1.5px', background: 'var(--oro)',
            width: menuOpen ? '24px' : '20px',
            transformOrigin: 'center',
            transition: 'transform 0.3s ease, width 0.3s ease',
            transform: menuOpen ? 'translateY(-7.5px) rotate(-45deg)' : 'none',
          }} />
        </button>
      </nav>

      {/* Overlay menú — móvil */}
      <div className="nav-overlay" style={{
        position: 'fixed', inset: 0, zIndex: 490,
        background: 'rgba(5,5,5,0.98)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: '2.5rem',
        opacity: menuOpen ? 1 : 0,
        visibility: menuOpen ? 'visible' : 'hidden',
        pointerEvents: menuOpen ? 'auto' : 'none',
        transition: 'opacity 0.4s ease, visibility 0.4s ease',
      }}>
        {LINKS.map(({ label, href }) => (
          <Link key={label} href={href} onClick={() => setMenuOpen(false)} style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic', fontWeight: 300,
            fontSize: '2rem', letterSpacing: '0.03em',
            color: 'var(--crema)', textDecoration: 'none',
          }}>{label}</Link>
        ))}
        <Link href="/coleccion" onClick={() => setMenuOpen(false)} style={{
          marginTop: '1rem',
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.56rem', letterSpacing: '0.22em',
          color: 'var(--oro)', textDecoration: 'none', textTransform: 'uppercase',
          border: '1px solid rgba(201,168,76,0.35)',
          padding: '0.9rem 2.4rem',
        }}>Ver colección →</Link>
      </div>

      <style>{`
        li:hover .nav-underline { width: 100% !important; }
        @media (min-width: 769px) {
          .nav-overlay { display: none !important; }
        }
        @media (max-width: 768px) {
          nav { padding: 1.1rem 1.4rem !important; }
          .nav-links, .nav-cta { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
