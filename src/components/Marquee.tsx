'use client';
import { useRef, useEffect } from 'react';
import Image from 'next/image';

const words = [
  'Renace',
  'Una sola',
  'Existió antes',
  'Irrepetible',
  'Vivió una vida',
  'Ahora vive otra',
];

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const speedRef = useRef(0.5);
  const targetSpeedRef = useRef(0.5);
  const posRef = useRef(0);
  const animRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const handleMouseMove = () => {
      targetSpeedRef.current = 2.8;
      clearTimeout(timeout);
      timeout = setTimeout(() => { targetSpeedRef.current = 0.5; }, 300);
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.05;
      posRef.current -= speedRef.current;
      const track = trackRef.current;
      if (track) {
        const w = track.scrollWidth / 2;
        if (Math.abs(posRef.current) >= w) posRef.current = 0;
        track.style.transform = `translateX(${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const content = [...words, ...words, ...words].flatMap((word, i) => [
    <span key={`w-${i}`} style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 300,
      fontStyle: 'italic',
      fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
      color: 'transparent',
      WebkitTextStroke: '1px rgba(201,168,76,0.35)',
      whiteSpace: 'nowrap' as const,
      padding: '0 1.5rem',
      userSelect: 'none' as const,
      letterSpacing: '0.04em',
      transition: 'color 0.3s, -webkit-text-stroke 0.3s',
      cursor: 'default',
    }}
      onMouseEnter={e => {
        const t = e.currentTarget;
        t.style.color = 'rgba(201,168,76,0.7)';
        t.style.webkitTextStroke = '1px transparent';
      }}
      onMouseLeave={e => {
        const t = e.currentTarget;
        t.style.color = 'transparent';
        t.style.webkitTextStroke = '1px rgba(201,168,76,0.35)';
      }}
    >{word}</span>,
    <span key={`egg-${i}`} style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0 2rem',
      flexShrink: 0,
      animation: 'eggGlow 2.5s ease-in-out infinite',
      animationDelay: `${i * 0.4}s`,
    }}>
      <Image
        src="/marca/logo-huevo-t.png"
        alt=""
        width={52}
        height={60}
        style={{
          objectFit: 'contain',
          height: '52px',
          width: 'auto',
          opacity: 1,
          filter: 'drop-shadow(0 0 15px rgba(201,168,76,1)) drop-shadow(0 0 30px rgba(201,168,76,0.7)) drop-shadow(0 0 50px rgba(201,168,76,0.4))',
        }}
      />
    </span>,
  ]);

  return (
    <div style={{
      overflow: 'hidden',
      borderTop: '1px solid rgba(201,168,76,0.1)',
      borderBottom: '1px solid rgba(201,168,76,0.1)',
      padding: '1.6rem 0',
      position: 'relative',
      background: 'var(--negro)',
    }}>
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', zIndex: 2,
        background: 'linear-gradient(to right, var(--negro), transparent)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', zIndex: 2,
        background: 'linear-gradient(to left, var(--negro), transparent)',
        pointerEvents: 'none',
      }} />

      <div ref={trackRef} style={{ display: 'flex', alignItems: 'center', willChange: 'transform' }}>
        {content}
      </div>

      <style>{`
        @keyframes eggGlow {
          0%,100% { filter: drop-shadow(0 0 12px rgba(201,168,76,0.8)) drop-shadow(0 0 25px rgba(201,168,76,0.4)); }
          50% { filter: drop-shadow(0 0 20px rgba(201,168,76,1)) drop-shadow(0 0 40px rgba(201,168,76,0.8)) drop-shadow(0 0 70px rgba(201,168,76,0.5)); }
        }
      `}</style>
    </div>
  );
}
