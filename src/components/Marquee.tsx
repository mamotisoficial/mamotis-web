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
  const trackRef = useRef<HTMLDivElement>(null);
  const speedRef = useRef(0.4);
  const targetSpeedRef = useRef(0.4);
  const posRef = useRef(0);
  const animRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const handleMouseMove = () => {
      targetSpeedRef.current = 2.5;
      clearTimeout(timeout);
      timeout = setTimeout(() => { targetSpeedRef.current = 0.4; }, 300);
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

  const content = [...items, ...items, ...items].map((item, i) => (
    <span key={i} style={{
      fontFamily: item.style === 'italic' ? "'Cormorant Garamond',serif" : "'DM Mono',monospace",
      fontWeight: 300, fontStyle: item.style as 'italic'|'normal',
      fontSize: item.text === '·' ? '1rem' : 'clamp(1.8rem,3.5vw,3rem)',
      color: item.text === '·' ? 'rgba(201,168,76,0.3)' : 'transparent',
      WebkitTextStroke: item.text === '·' ? 'none' : '1px rgba(201,168,76,0.35)',
      padding: item.text === '·' ? '0 1.2rem' : '0 2rem',
      whiteSpace: 'nowrap' as const,
      userSelect: 'none' as const,
      letterSpacing: item.style === 'italic' ? '0.05em' : '0.3em',
      transition: 'color 0.3s',
      cursor: 'default',
    }}>{item.text}</span>
  ));

  return (
    <div style={{ overflow:'hidden', borderTop:'1px solid rgba(201,168,76,0.1)',
      borderBottom:'1px solid rgba(201,168,76,0.1)', padding:'1.8rem 0', position:'relative' }}>
      <div style={{ position:'absolute', left:0, top:0, bottom:0, width:'120px', zIndex:2,
        background:'linear-gradient(to right, var(--negro), transparent)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', right:0, top:0, bottom:0, width:'120px', zIndex:2,
        background:'linear-gradient(to left, var(--negro), transparent)', pointerEvents:'none' }} />
      <div ref={trackRef} style={{ display:'flex', willChange:'transform' }}>
        {content}
      </div>
    </div>
  );
}
