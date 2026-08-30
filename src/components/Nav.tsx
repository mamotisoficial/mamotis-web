'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lineRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    let lastY = 0;

    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);

      // Mostrar nav si scrolleas hacia arriba o estás arriba del todo
      if (y < 80 || y < lastY) {
        setVisible(true);
        clearTimeout(timeoutRef.current);
        // Ocultar después de 3s de inactividad si estás scrolleado
        if (y > 80) {
          timeoutRef.current = setTimeout(() => setVisible(false), 3000);
        }
      }
      lastY = y;
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Mostrar si el cursor está en el tercio superior
      if (e.clientY < window.innerHeight * 0.15) {
        setVisible(true);
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          if (window.scrollY > 80) setVisible(false);
        }, 3000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  // Animar la línea dorada cuando aparece
  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;

    if (visible && scrolled) {
      let raf = 0;
      const start = performance.now();
      const animate = (now: number) => {
        const p = Math.min((now - start) / 600, 1);
        el.style.transform = `scaleX(${p})`;
        if (p < 1) raf = requestAnimationFrame(animate);
      };
      raf = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(raf);
    }

    el.style.transform = 'scaleX(0)';
  }, [visible, scrolled]);

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
        background: scrolled
          ? 'rgba(5,5,5,0.0)'
          : 'linear-gradient(to bottom, rgba(5,5,5,0.95) 60%, transparent)',
        backdropFilter: scrolled ? 'none' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.6s cubic-bezier(.76,0,.24,1), padding 0.4s ease, opacity 0.4s ease',
        opacity: visible ? 1 : 0,
      }}>

        {/* LOGO */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image
            src="/marca/logo-texto-t.png"
            alt="Mamotis"
            width={160}
            height={60}
            style={{
              objectFit: 'contain',
              height: scrolled ? '42px' : '55px',
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

      {/* LÍNEA DE LUZ DORADA — aparece al scrollear */}
      {scrolled && (
        <div style={{
          position: 'fixed',
          top: visible ? '72px' : '-2px',
          left: 0, right: 0,
          height: '1px',
          zIndex: 499,
          overflow: 'hidden',
          transition: 'top 0.6s cubic-bezier(.76,0,.24,1)',
          pointerEvents: 'none',
        }}>
          <div ref={lineRef} style={{
            height: '1px',
            background: 'linear-gradient(to right, transparent 0%, rgba(201,168,76,0.6) 20%, rgba(232,201,106,0.8) 50%, rgba(201,168,76,0.6) 80%, transparent 100%)',
            transform: 'scaleX(0)',
            transformOrigin: 'left',
            transition: 'none',
          }} />
        </div>
      )}

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
