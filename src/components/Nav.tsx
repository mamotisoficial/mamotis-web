'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
        padding: scrolled ? '1.2rem 5rem 1.2rem 5rem' : '1.8rem 5rem 1.8rem 5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'linear-gradient(to bottom, rgba(5,5,5,0.95) 60%, transparent)',
        transition: 'padding 0.4s ease',
      }}>

        {/* LOGO */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
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

        {/* LINKS */}
        <ul style={{ display: 'flex', gap: '3rem', listStyle: 'none' }}>
          {[
            { label: 'La Marca', href: '/' },
            { label: 'Historia', href: '/#historia' },
            { label: 'Colección', href: '/coleccion' },
          ].map(({ label, href }) => (
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
