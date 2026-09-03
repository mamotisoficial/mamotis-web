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
    <span key={`w-${i}`} className="mq-word" style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 300,
      fontStyle: 'italic',
      fontSize: 'clamp(1.6rem, 5.5vw, 2.8rem)',
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
    <span key={`egg-${i}`} className="mq-egg" style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0 2rem',
      flexShrink: 0,
    }}>
      <Image
        src="/marca/logo-huevo-t.png"
        alt=""
        width={72}
        height={82}
        style={{
          objectFit: 'contain',
          height: '72px',
          width: 'auto',
          opacity: 1,
        }}
      />
    </span>,
  ]);

  return (
    <div className="marquee-bar" style={{
      overflow: 'hidden',
      borderTop: '1px solid rgba(201,168,76,0.1)',
      borderBottom: '1px solid rgba(201,168,76,0.1)',
      padding: '1.6rem 0',
      position: 'relative',
      background: 'var(--negro)',
    }}>
      <div className="marquee-fade" style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', zIndex: 2,
        background: 'linear-gradient(to right, var(--negro), transparent)',
        pointerEvents: 'none',
      }} />
      <div className="marquee-fade" style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', zIndex: 2,
        background: 'linear-gradient(to left, var(--negro), transparent)',
        pointerEvents: 'none',
      }} />

      <div ref={trackRef} style={{ display: 'flex', alignItems: 'center', willChange: 'transform' }}>
        {content}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .marquee-bar { padding: 1.1rem 0 !important; }
          .marquee-fade { width: 42px !important; }
          .mq-word { padding: 0 0.9rem !important; }
          .mq-egg { padding: 0 1rem !important; }
          .mq-egg img { height: 46px !important; }
        }
      `}</style>
    </div>
  );
}
