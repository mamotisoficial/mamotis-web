'use client';
import { useRef, useEffect } from 'react';

const items = [
  { text: 'Renace', style: 'italic' },
  { text: '·', style: 'normal' },
  { text: 'Una sola', style: 'italic' },
  { text: '·', style: 'normal' },
  { text: 'Existió antes', style: 'italic' },
  { text: '·', style: 'normal' },
  { text: 'Irrepetible', style: 'italic' },
  { text: '·', style: 'normal' },
  { text: 'Vivió una vida', style: 'italic' },
  { text: '·', style: 'normal' },
  { text: 'Ahora vive otra', style: 'italic' },
  { text: '·', style: 'normal' },
];

export default function Marquee() {
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);
  const speedRef = useRef(0.4);
  const targetSpeedRef = useRef(0.4);
  const posRef = useRef(0);
  const animRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = () => {
      targetSpeedRef.current = 2.5;
      clearTimeout((handleMouseMove as any)._t);
      (handleMouseMove as any)._t = setTimeout(() => {
        targetSpeedRef.current = 0.4;
      }, 300);
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.05;
      posRef.current -= speedRef.current;
      const track = track1Ref.current;
      if (track) {
        const w = track.scrollWidth / 2;
        if (Math.abs(posRef.current) >= w) posRef.current = 0;
        const val = `translateX(${posRef.current}px)`;
        if (track1Ref.current) track1Ref.current.style.transform = val;
        if (track2Ref.current) track2Ref.current.style.transform = val;
      }
      animRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const renderItems = () => [...items, ...items, ...items].map((item, i) => (
    <span key={i} style={{
      fontFamily: item.style === 'italic'
        ? "'Cormorant Garamond', serif"
        : "'DM Mono', monospace",
      fontWeight: 300,
      fontStyle: item.style as 'italic' | 'normal',
      fontSize: item.text === '·' ? '1rem' : 'clamp(1.8rem, 3.5vw, 3rem)',
      color: item.text === '·' ? 'rgba(201,168,76,0.3)' : 'transparent',
      WebkitTextStroke: item.text === '·'
        ? 'none'
        : '1px rgba(201,168,76,0.35)',
      padding: item.text === '·' ? '0 1.2rem' : '0 2rem',
      whiteSpace: 'nowrap' as const,
      userSelect: 'none' as const,
      letterSpacing: item.style === 'italic' ? '0.05em' : '0.3em',
      transition: 'color 0.3s, -webkit-text-stroke 0.3s',
    }}
      onMouseEnter={e => {
        const t = e.target as HTMLElement;
        if (item.text !== '·') {
          t.style.color = 'rgba(201,168,76,0.7)';
          t.style.WebkitTextStroke = '1px transparent';
        }
      }}
      onMouseLeave={e => {
        const t = e.target as HTMLElement;
        if (item.text !== '·') {
          t.style.color = 'transparent';
          t.style.WebkitTextStroke = '1px rgba(201,168,76,0.35)';
        }
      }}
    >{item.text}</span>
  ));

  return (
    <div style={{
      overflow: 'hidden',
      borderTop: '1px solid rgba(201,168,76,0.1)',
      borderBottom: '1px solid rgba(201,168,76,0.1)',
      padding: '1.8rem 0',
      position: 'relative',
    }}>
      {/* Degradado izquierda */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', zIndex: 2,
        background: 'linear-gradient(to right, var(--negro), transparent)',
        pointerEvents: 'none',
      }} />
      {/* Degradado derecha */}
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', zIndex: 2,
        background: 'linear-gradient(to left, var(--negro), transparent)',
        pointerEvents: 'none',
      }} />

      <div ref={track1Ref} style={{ display: 'flex', willChange: 'transform' }}>
        {renderItems()}
      </div>
    </div>
  );
}
