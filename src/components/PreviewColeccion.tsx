'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BOLSOS = [
  '/fotos/bolso-hero-asa.jpeg',
  '/bolsos/bolso-001.jpeg',
  '/bolsos/bolso-002.jpeg',
  '/bolsos/bolso-003.jpeg',
  '/bolsos/bolso-004.jpeg',
  '/bolsos/bolso-005.jpeg',
  '/bolsos/bolso-006.jpeg',
  '/bolsos/bolso-007.jpeg',
  '/bolsos/bolso-008.jpeg',
  '/bolsos/bolso-009.jpeg',
  '/bolsos/bolso-010.jpeg',
  '/bolsos/bolso-011.jpeg',
  '/bolsos/bolso-012.jpeg',
  '/bolsos/bolso-013.jpeg',
  '/bolsos/bolso-014.jpeg',
];

const DOUBLE = [...BOLSOS, ...BOLSOS];

export default function PreviewColeccion() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const posRef = useRef(0);
  const SPEED = 0.5;
  const ITEM_W = 268; // card 252px + gap 16px

  useEffect(() => {
    const half = BOLSOS.length * ITEM_W;
    const animate = () => {
      posRef.current += SPEED;
      if (posRef.current >= half) posRef.current = 0;
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section id="coleccion" style={{ background:'var(--cream)', padding:'64px 0 72px', overflow:'hidden' }}>
      {/* Header */}
      <div style={{ width:'min(1320px,90vw)', margin:'0 auto 40px' }}>
        <div style={{ fontSize:9, letterSpacing:'0.5em', textTransform:'uppercase',
          color:'var(--gold)', fontFamily:'var(--sans)', marginBottom:12 }}>
          La colección
        </div>
        <h2 style={{ fontFamily:'var(--display)', fontSize:'clamp(30px,4vw,52px)',
          fontWeight:400, lineHeight:1.08, color:'#241b12', margin:0 }}>
          Piezas únicas
        </h2>
      </div>

      {/* Carrusel */}
      <div style={{ overflow:'hidden', width:'100%' }}>
        <div ref={trackRef} style={{ display:'flex', gap:16, width:'max-content', willChange:'transform' }}>
          {DOUBLE.map((src, i) => (
            <div key={i} style={{ flexShrink:0, width:252, height:310,
              position:'relative', overflow:'hidden', background:'#e4d9c4', borderRadius:2 }}>
              <Image src={src} alt={`MAMOTIS bolso ${i + 1}`} fill
                style={{ objectFit:'cover' }} sizes="252px" />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ width:'min(1320px,90vw)', margin:'36px auto 0', textAlign:'center' }}>
        <Link href="https://instagram.com/mamotisoficial" target="_blank" style={{
          display:'inline-flex', alignItems:'center', gap:10,
          border:'1px solid rgba(160,120,48,0.5)', padding:'13px 28px',
          fontSize:9, letterSpacing:'0.22em', textTransform:'uppercase',
          color:'#7a5c28', fontFamily:'var(--sans)', textDecoration:'none',
        }}>
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none"
            stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="2" width="20" height="20" rx="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
          </svg>
          Ver todas las piezas en Instagram
        </Link>
      </div>
    </section>
  );
}
