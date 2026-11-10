'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LINKS = [
  { label: 'Historia', href: '/#historia' },
  { label: 'Colección', href: '/#coleccion' },
  { label: 'Contacto', href: '/#contacto' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
        padding: scrolled ? '0.7rem clamp(1.5rem,5vw,5rem)' : '1.2rem clamp(1.5rem,5vw,5rem)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: scrolled ? 'rgba(6,5,4,0.98)' : 'rgba(6,5,4,0.75)',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.12)' : '1px solid rgba(201,168,76,0)',
        backdropFilter: 'blur(16px)',
        transition: 'padding 0.4s ease, background 0.4s ease, border-color 0.4s ease',
      }}>
        {/* LOGO — huevo + texto */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', textDecoration: 'none' }}>
          <div style={{ width: '36px', height: '38px', position: 'relative', mixBlendMode: 'screen', flexShrink: 0 }}>
            <Image src="/marca/logo-huevo-t.png" alt="MAMOTIS" fill style={{ objectFit: 'contain' }} />
          </div>
          <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 300,
            fontSize: '1.4rem', color: 'var(--crema)', letterSpacing: '0.04em', lineHeight: 1 }}>
            Mamotis
          </span>
        </Link>

        {/* links desktop */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }} className="nav-links">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem',
              letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(242,232,212,0.6)',
              textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--oro)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(242,232,212,0.6)')}>
              {l.label}
            </Link>
          ))}
          <a href="https://wa.me/34605764097" target="_blank" rel="noopener" style={{
            fontFamily: 'var(--mono)', fontSize: '0.58rem', letterSpacing: '0.3em',
            textTransform: 'uppercase', color: 'var(--negro)', background: 'var(--oro)',
            padding: '0.6rem 1.4rem', textDecoration: 'none', transition: 'opacity 0.3s',
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
            WhatsApp
          </a>
        </div>

        {/* hamburger mobile */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', zIndex: 10 }}
          className="nav-burger" aria-label="Menú">
          <div style={{ width: '24px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <span style={{ display: 'block', height: '1px', background: 'var(--crema)',
              transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none', transition: 'transform 0.3s' }} />
            <span style={{ display: 'block', height: '1px', background: 'var(--crema)',
              opacity: menuOpen ? 0 : 1, transition: 'opacity 0.3s' }} />
            <span style={{ display: 'block', height: '1px', background: 'var(--crema)',
              transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none', transition: 'transform 0.3s' }} />
          </div>
        </button>
      </nav>

      {/* menú mobile overlay */}
      {menuOpen && (
        <div onClick={() => setMenuOpen(false)} style={{
          position: 'fixed', inset: 0, zIndex: 400,
          background: 'rgba(6,5,4,0.97)', backdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '3.5rem',
        }}>
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: '3rem',
                color: 'var(--crema)', textDecoration: 'none', fontWeight: 300 }}>
              {l.label}
            </Link>
          ))}
          <a href="https://wa.me/34605764097" target="_blank" rel="noopener"
            style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.35em',
              textTransform: 'uppercase', color: 'var(--negro)', background: 'var(--oro)',
              padding: '1rem 2.5rem', textDecoration: 'none', marginTop: '1rem' }}>
            WhatsApp
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
