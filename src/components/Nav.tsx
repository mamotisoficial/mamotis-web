'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const links = [
  { label: 'La Marca', href: '/' },
  { label: 'Historia', href: '/#historia' },
  { label: 'Colección', href: '/coleccion' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <nav className="nav-container" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
        padding: scrolled ? '1.4rem 5rem' : '2rem 5rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: 'linear-gradient(to bottom, rgba(5,5,5,0.97) 60%, transparent)',
        transition: 'padding 0.4s ease',
      }}>
        <Link href="/" onClick={() => setMenuOpen(false)} style={{
          display: 'flex', alignItems: 'center', textDecoration: 'none',
        }}>
          <Image
            src="/marca/logo-texto.png"
            alt="Mamotis"
            width={140}
            height={48}
            style={{
              objectFit: 'contain',
              height: scrolled ? '32px' : '40px',
              width: 'auto',
              transition: 'height 0.4s ease',
            }}
            preload
          />
        </Link>

        <ul className="nav-links" style={{ display: 'flex', gap: '3rem', listStyle: 'none' }}>
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} style={{
                fontFamily: "'DM Mono', monospace", fontSize: '0.56rem',
                letterSpacing: '0.22em', color: 'var(--crema)', textDecoration: 'none',
                textTransform: 'uppercase', opacity: 0.45,
              }}>{label}</Link>
            </li>
          ))}
        </ul>

        <Link href="/coleccion" className="nav-cta" style={{
          fontFamily: "'DM Mono', monospace", fontSize: '0.54rem',
          letterSpacing: '0.18em', color: 'var(--oro)', textDecoration: 'none',
          textTransform: 'uppercase', border: '1px solid rgba(201,168,76,0.35)',
          padding: '0.65rem 1.6rem',
        }}>Ver colección →</Link>

        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none', background: 'none', border: 'none', cursor: 'pointer',
          color: 'var(--crema)', fontSize: '1.8rem', lineHeight: 1, padding: 0,
        }}>
          {menuOpen ? '×' : '≡'}
        </button>
      </nav>

      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 499, background: 'var(--negro)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '3rem',
        }}>
          {links.map(({ label, href }) => (
            <Link key={label} href={href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: 'italic',
              fontSize: '2.2rem', color: 'var(--crema)', textDecoration: 'none',
              letterSpacing: '0.05em',
            }}>{label}</Link>
          ))}
          <Link href="/coleccion" onClick={() => setMenuOpen(false)} style={{
            fontFamily: "'DM Mono', monospace", fontSize: '0.54rem',
            letterSpacing: '0.18em', color: 'var(--oro)', textDecoration: 'none',
            textTransform: 'uppercase', border: '1px solid rgba(201,168,76,0.35)',
            padding: '0.8rem 2.5rem', marginTop: '1rem',
          }}>Ver colección →</Link>
        </div>
      )}
    </>
  );
}
