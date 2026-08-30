'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <Link href="/" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 400,
          fontStyle: 'italic',
          fontSize: '1.8rem',
          letterSpacing: '0.05em',
          color: '#C9A84C',
          textDecoration: 'none',
        }}>
          Mamotis
        </Link>

        {/* LINKS */}
        <ul style={{ display: 'flex', gap: '3rem', listStyle: 'none' }}>
          {[
            { label: 'La Marca', href: '/' },
            { label: 'Historia', href: '/#historia' },
            { label: 'Colección', href: '/coleccion' },
          ].map(({ label, href }) => (
            <li key={label} style={{ position: 'relative' }}>
              <Link href={href} style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.56rem', letterSpacing: '0.22em',
                color: 'var(--crema)', textDecoration: 'none',
                textTransform: 'uppercase', opacity: 0.5,
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
                  t.style.opacity = '0.5';
                  t.style.color = 'var(--crema)';
                }}
              >{label}</Link>
              {/* Línea hover bajo cada link */}
              <span style={{
                position: 'absolute', bottom: 0, left: 0,
                height: '1px', width: '0%',
                background: 'var(--oro)',
                transition: 'width 0.3s ease',
              }} className="nav-underline" />
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link href="/coleccion" style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.54rem', letterSpacing: '0.18em',
          color: 'var(--oro)', textDecoration: 'none',
          textTransform: 'uppercase',
          border: '1px solid rgba(201,168,76,0.35)',
          padding: '0.65rem 1.6rem',
          transition: 'background 0.3s, color 0.3s',
          opacity: scrolled ? 0.7 : 1,
        }}
          onMouseEnter={e => {
            const t = e.currentTarget;
            t.style.background = 'var(--oro)';
            t.style.color = 'var(--negro)';
          }}
          onMouseLeave={e => {
            const t = e.currentTarget;
            t.style.background = 'transparent';
            t.style.color = 'var(--oro)';
          }}
        >Ver colección →</Link>
      </nav>

      <style>{`
        li:hover .nav-underline {
          width: 100% !important;
        }
        @media (max-width: 768px) {
          nav ul, nav a:last-child { display: none !important; }
          nav { padding: 1.5rem 2rem !important; }
        }
      `}</style>
    </>
  );
}
