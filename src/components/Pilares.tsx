'use client';
import { useState, useEffect, useRef, useCallback } from 'react';

const pilares = [
  { num: '01', titulo: 'El origen', texto: 'Buscamos piel con historia — mercados vintage, armarios heredados, colecciones olvidadas. Cada pieza tiene nombre, tiene año.' },
  { num: '02', titulo: 'La transformación', texto: 'Manos artesanas dan nueva forma a la piel. Sin prisa. Sin moldes industriales. El huevo dorado — nuestra firma — nace en el asa.' },
  { num: '03', titulo: 'Irrepetible', texto: 'Nunca dos iguales. Porque nunca hubo dos abrigos iguales. Tu bolso es único — como lo fue la mujer que llevó esa piel.' },
];

const POSICIONES = [16.6, 50, 83.3];

export default function Pilares() {
  const [actual, setActual] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const sectionRef = useRef<HTMLElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const irA = useCallback((idx: number) => {
    setActual(idx);
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setActual(prev => (prev + 1) % 3);
    }, 3000);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          setTimeout(() => irA(0), 300);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      clearInterval(autoRef.current);
    };
  }, [irA]);

  const pos = actual >= 0 ? POSICIONES[actual] : 0;

  return (
    <section ref={sectionRef} id="pilares" style={{ padding: '6rem 5rem', background: 'var(--negro)' }}>

      <div className="pilares-stage" style={{ position: 'relative' }}>

        {/* LÍNEA CON TIJERAS — horizontal en escritorio, vertical en móvil */}
        <div style={isMobile ? {
          position: 'absolute', left: '14px', top: 0, bottom: 0, width: '52px', zIndex: 1,
        } : {
          position: 'relative', height: '52px', margin: '0 80px 4rem',
        }}>

          {/* Línea base */}
          <div style={isMobile ? {
            position: 'absolute', left: '50%', top: 0, bottom: 0,
            width: '1px', transform: 'translateX(-50%)',
            background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.15), rgba(201,168,76,0.35), rgba(201,168,76,0.15), transparent)',
          } : {
            position: 'absolute', top: '50%', left: 0, right: 0,
            height: '1px', transform: 'translateY(-50%)',
            background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.15), rgba(201,168,76,0.35), rgba(201,168,76,0.15), transparent)',
          }} />

          {/* Línea cortada */}
          <div style={isMobile ? {
            position: 'absolute', left: '50%', top: 0,
            width: '1px', transform: 'translateX(-50%)',
            height: actual >= 0 ? `${pos}%` : '0%',
            background: 'linear-gradient(to bottom, var(--oro), rgba(201,168,76,0.6))',
            boxShadow: '0 0 8px rgba(201,168,76,0.5)',
            transition: 'height 1.2s cubic-bezier(.25,.46,.45,.94)',
          } : {
            position: 'absolute', top: '50%', left: 0,
            height: '1px', transform: 'translateY(-50%)',
            width: actual >= 0 ? `${pos}%` : '0%',
            background: 'linear-gradient(to right, var(--oro), rgba(201,168,76,0.6))',
            boxShadow: '0 0 8px rgba(201,168,76,0.5)',
            transition: 'width 1.2s cubic-bezier(.25,.46,.45,.94)',
          }} />

          {/* Puntos de parada */}
          {POSICIONES.map((p, i) => (
            <div key={i} style={{
              position: 'absolute',
              ...(isMobile
                ? { left: '50%', top: `${p}%`, transform: 'translate(-50%, -50%)' }
                : { top: '50%', left: `${p}%`, transform: 'translate(-50%, -50%)' }),
              width: actual >= i ? '10px' : '7px',
              height: actual >= i ? '10px' : '7px',
              borderRadius: '50%',
              background: actual >= i ? 'var(--oro)' : 'var(--negro)',
              border: `1px solid ${actual >= i ? 'var(--oro)' : 'rgba(201,168,76,0.3)'}`,
              boxShadow: actual >= i ? '0 0 10px rgba(201,168,76,0.7)' : 'none',
              transition: 'all 0.5s ease',
              zIndex: 5,
            }} />
          ))}

          {/* TIJERAS SVG */}
          <div style={{
            position: 'absolute',
            ...(isMobile
              ? { left: '50%', top: actual >= 0 ? `${pos}%` : '0%', transform: 'translate(-50%, -50%)', transition: 'top 1.2s cubic-bezier(.25,.46,.45,.94)' }
              : { top: '50%', left: actual >= 0 ? `${pos}%` : '0%', transform: 'translate(-50%, -50%)', transition: 'left 1.2s cubic-bezier(.25,.46,.45,.94)' }),
            zIndex: 10,
          }}>
            <svg width="52" height="52" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(201,168,76,0.5))',
                animation: 'tijerasGlow 3s ease-in-out infinite',
                transform: isMobile ? 'rotate(90deg)' : undefined,
              }}>
              <defs>
                <linearGradient id="gt1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F0D97A"/>
                  <stop offset="50%" stopColor="#C9A84C"/>
                  <stop offset="100%" stopColor="#8B6914"/>
                </linearGradient>
                <linearGradient id="gt2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#F0D97A"/>
                  <stop offset="50%" stopColor="#C9A84C"/>
                  <stop offset="100%" stopColor="#8B6914"/>
                </linearGradient>
              </defs>

              {/* Pivote */}
              <circle cx="50" cy="50" r="5" fill="url(#gt1)" opacity="0.9"/>
              <circle cx="50" cy="50" r="2.5" fill="#2a1800"/>
              <circle cx="48.5" cy="48.5" r="1.2" fill="rgba(255,255,255,0.4)"/>

              {/* Hoja superior */}
              <g style={{ transformOrigin: '50px 50px', animation: actual >= 0 ? 'cutTop 0.6s ease-in-out' : 'none' }}>
                <ellipse cx="28" cy="25" rx="14" ry="10" fill="none"
                  stroke="url(#gt1)" strokeWidth="2.5"
                  transform="rotate(-20, 28, 25)"/>
                <circle cx="36" cy="32" r="2" fill="url(#gt1)" opacity="0.7"/>
                <path d="M 36 32 L 50 50 L 85 42" stroke="url(#gt1)" strokeWidth="3" strokeLinecap="round" fill="none"/>
                <path d="M 50 50 L 85 42" stroke="#F0D97A" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.6"/>
                <path d="M 58 48 L 75 44" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5" fill="none"/>
              </g>

              {/* Hoja inferior */}
              <g style={{ transformOrigin: '50px 50px', animation: actual >= 0 ? 'cutBottom 0.6s ease-in-out' : 'none' }}>
                <ellipse cx="28" cy="75" rx="14" ry="10" fill="none"
                  stroke="url(#gt2)" strokeWidth="2.5"
                  transform="rotate(20, 28, 75)"/>
                <circle cx="36" cy="68" r="2" fill="url(#gt2)" opacity="0.7"/>
                <path d="M 36 68 L 50 50 L 85 58" stroke="url(#gt2)" strokeWidth="3" strokeLinecap="round" fill="none"/>
                <path d="M 50 50 L 85 58" stroke="#F0D97A" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.6"/>
                <path d="M 58 52 L 75 56" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5" fill="none"/>
              </g>
            </svg>
          </div>
        </div>

        {/* CARDS */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)',
          gap: '2rem',
          paddingLeft: isMobile ? '58px' : 0,
        }}>
          {pilares.map((p, i) => (
            <div key={i}
              onClick={() => irA(i)}
              style={{
                padding: '2.5rem 2rem',
                position: 'relative',
                opacity: actual >= i ? 1 : 0.25,
                transform: actual >= i ? 'translateY(0)' : 'translateY(10px)',
                cursor: 'pointer',
                borderTop: `1px solid ${actual >= i ? 'rgba(201,168,76,0.3)' : 'rgba(201,168,76,0.08)'}`,
                transition: 'all 0.6s ease',
              }}>

              {/* Línea izquierda animada */}
              <div style={{
                position: 'absolute', top: '2.5rem', left: 0,
                width: '1px',
                height: actual >= i ? '60px' : '0px',
                background: 'linear-gradient(to bottom, var(--oro), transparent)',
                transition: 'height 0.6s ease 0.3s',
              }} />

              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300, fontSize: '5.5rem', lineHeight: 1,
                color: 'transparent',
                WebkitTextStroke: `1px rgba(201,168,76,${actual >= i ? 0.35 : 0.1})`,
                marginBottom: '1.2rem',
                transition: '-webkit-text-stroke 0.5s',
              }}>{p.num}</div>

              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300, fontSize: '1.5rem',
                color: 'var(--oro)', marginBottom: '1rem',
                letterSpacing: '0.02em',
              }}>{p.titulo}</div>

              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '0.95rem', lineHeight: 2, opacity: 0.55,
              }}>{p.texto}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Controles */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '3.5rem' }}>
        {pilares.map((p, i) => (
          <button key={i} onClick={() => irA(i)} style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.48rem', letterSpacing: '0.3em',
            color: actual === i ? 'var(--oro)' : 'var(--crema)',
            opacity: actual === i ? 1 : 0.35,
            textTransform: 'uppercase',
            background: 'none',
            border: `1px solid ${actual === i ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.15)'}`,
            padding: '0.5rem 1.4rem', cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}>{p.num}</button>
        ))}
      </div>

      <style>{`
        @keyframes tijerasGlow {
          0%,100% { filter: drop-shadow(0 0 6px rgba(201,168,76,0.4)); }
          50% { filter: drop-shadow(0 0 14px rgba(201,168,76,0.8)); }
        }
        @keyframes cutTop {
          0%,100% { transform: rotate(0deg); }
          50% { transform: rotate(-12deg); }
        }
        @keyframes cutBottom {
          0%,100% { transform: rotate(0deg); }
          50% { transform: rotate(12deg); }
        }
        @media (max-width: 768px) {
          #pilares { padding: 4rem 1.2rem 4rem 1rem !important; }
        }
      `}</style>
    </section>
  );
}
