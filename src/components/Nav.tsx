'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
      padding: scrolled ? '1.4rem 5rem' : '2rem 5rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: 'linear-gradient(to bottom, rgba(5,5,5,0.97) 60%, transparent)',
      transition: 'padding 0.4s ease',
    }}>
      <Link href="/" style={{
        fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
        fontSize: '1.35rem', letterSpacing: '0.55em',
        color: 'var(--oro)', textDecoration: 'none', textTransform: 'uppercase',
      }}>MAMOTIS</Link>

      <ul style={{ display: 'flex', gap: '3rem', listStyle: 'none' }}>
        {[
          { label: 'La Marca', href: '/' },
          { label: 'Historia', href: '/#historia' },
          { label: 'Colección', href: '/coleccion' },
        ].map(({ label, href }) => (
          <li key={label}>
            <Link href={href} style={{
              fontFamily: "'DM Mono', monospace", fontSize: '0.56rem',
              letterSpacing: '0.22em', color: 'var(--crema)', textDecoration: 'none',
              textTransform: 'uppercase', opacity: 0.45,
            }}>{label}</Link>
          </li>
        ))}
      </ul>

      <Link href="/coleccion" style={{
        fontFamily: "'DM Mono', monospace", fontSize: '0.54rem',
        letterSpacing: '0.18em', color: 'var(--oro)', textDecoration: 'none',
        textTransform: 'uppercase', border: '1px solid rgba(201,168,76,0.35)',
        padding: '0.65rem 1.6rem',
      }}>Ver colección →</Link>
    </nav>
  );
}
