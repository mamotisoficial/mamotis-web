'use client';
import { useState, useEffect, useRef } from 'react';

const pilares = [
  { num: '01', titulo: 'El origen', texto: 'Buscamos piel con historia — mercados vintage, armarios heredados, colecciones olvidadas. Cada pieza tiene nombre, tiene año.' },
  { num: '02', titulo: 'La transformación', texto: 'Manos artesanas dan nueva forma a la piel. Sin prisa. Sin moldes industriales. El huevo dorado — nuestra firma — nace en el asa.' },
  { num: '03', titulo: 'Irrepetible', texto: 'Nunca dos iguales. Porque nunca hubo dos abrigos iguales. Tu bolso es único — como lo fue la mujer que llevó esa piel.' },
];

function Pilar({ num, titulo, texto, delay }: { num: string, titulo: string, texto: string, delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [borderProgress, setBorderProgress] = useState(0);
  const [hovered, setHovered] = useState(false);
  const targetNum = parseInt(num);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Contador numérico
  useEffect(() => {
    if (!visible) return;
    const timeout = setTimeout(() => {
      let start = 0;
      const duration = 800;
      const startTime = performance.now();
      const animate = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * targetNum));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, delay);
    return () => clearTimeout(timeout);
  }, [visible, targetNum, delay]);

  // Borde que se dibuja
  useEffect(() => {
    if (!visible) return;
    const timeout = setTimeout(() => {
      const duration = 1000;
      const startTime = performance.now();
      const animate = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setBorderProgress(progress);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, delay);
    return () => clearTimeout(timeout);
  }, [visible, delay]);

  const perimeter = 2 * (300 + 400);
  const dashOffset = perimeter * (1 - borderProgress);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#0a0a0a' : 'var(--negro)',
        padding: '5rem 3.5rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background .5s',
        cursor: 'default',
      }}
    >
      {/* SVG borde que se dibuja */}
      <svg
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          pointerEvents: 'none', zIndex: 1,
          overflow: 'visible',
        }}
        preserveAspectRatio="none"
      >
        <rect
          x="1" y="1"
          width="calc(100% - 2px)" height="calc(100% - 2px)"
          fill="none"
          stroke={hovered ? 'rgba(201,168,76,0.8)' : 'rgba(201,168,76,0.5)'}
          strokeWidth="1"
          strokeDasharray={perimeter}
          strokeDashoffset={dashOffset}
          style={{ transition: 'stroke 0.3s' }}
        />
      </svg>

      {/* Línea superior que se ilumina al hover */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(to right, transparent, var(--oro), transparent)',
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transition: 'transform .6s ease',
        zIndex: 2,
      }} />

      {/* Número contador */}
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 300,
        fontSize: '7rem',
        lineHeight: 1,
        color: 'transparent',
        WebkitTextStroke: `1px rgba(201,168,76,${visible ? (hovered ? 0.45 : 0.18) : 0})`,
        marginBottom: '1.5rem',
        transition: 'opacity .5s, -webkit-text-stroke .5s',
        opacity: visible ? 1 : 0,
        position: 'relative', zIndex: 2,
        fontVariantNumeric: 'tabular-nums',
      }}>
        {String(count).padStart(2, '0')}
      </div>

      {/* Título */}
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 300,
        fontSize: '1.8rem',
        color: 'var(--oro)',
        marginBottom: '1.2rem',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(15px)',
        transition: `opacity .8s ease ${delay + 300}ms, transform .8s ease ${delay + 300}ms`,
        position: 'relative', zIndex: 2,
      }}>
        {titulo}
      </div>

      {/* Texto */}
      <p style={{
        fontSize: '1.05rem',
        lineHeight: 2,
        opacity: visible ? 0.5 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(15px)',
        transition: `opacity .8s ease ${delay + 500}ms, transform .8s ease ${delay + 500}ms`,
        position: 'relative', zIndex: 2,
      }}>
        {texto}
      </p>

      {/* Glow de fondo al hover */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.04) 0%, transparent 70%)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity .5s',
        pointerEvents: 'none',
      }} />
    </div>
  );
}

export default function Pilares() {
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          #pilares-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <section
        id="pilares-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'rgba(201,168,76,0.07)',
        }}
      >
        {pilares.map((p, i) => (
          <Pilar key={i} {...p} delay={i * 150} />
        ))}
      </section>
    </>
  );
}
