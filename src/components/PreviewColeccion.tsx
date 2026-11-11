'use client';
import { useEffect, useRef, useState } from 'react';
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
  const pausedRef = useRef(false);
  const SPEED = 0.5;
  const ITEM_W = 268;

  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const half = BOLSOS.length * ITEM_W;
    const animate = () => {
      if (!pausedRef.current) {
        posRef.current += SPEED;
        if (posRef.current >= half) posRef.current = 0;
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const openPieza = (idx: number) => {
    pausedRef.current = true;
    setSelected(idx % BOLSOS.length);
  };

  const close = () => {
    pausedRef.current = false;
    setSelected(null);
  };

  const waUrl = selected !== null
    ? `https://wa.me/34605764097?text=${encodeURIComponent(`Hola, me interesa la pieza nº${selected + 1} que vi en la web de MAMOTIS. ¿Está disponible?`)}`
    : '#';

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
            <button key={i} onClick={() => openPieza(i)}
              style={{ flexShrink:0, width:252, height:310, position:'relative',
                overflow:'hidden', background:'#e4d9c4', borderRadius:2,
                border:'none', padding:0, cursor:'pointer', display:'block' }}
              aria-label={`Ver pieza ${(i % BOLSOS.length) + 1}`}>
              <Image src={src} alt={`MAMOTIS bolso ${(i % BOLSOS.length) + 1}`} fill
                style={{ objectFit:'cover', transition:'transform 0.4s ease' }} sizes="252px" />
              <div className="card-hover-overlay" style={{
                position:'absolute', inset:0,
                background:'rgba(9,7,5,0)',
                transition:'background 0.3s ease',
                display:'flex', alignItems:'flex-end', justifyContent:'center',
                paddingBottom:16,
              }}>
                <span style={{
                  fontFamily:'var(--sans)', fontSize:8, letterSpacing:'0.22em',
                  textTransform:'uppercase', color:'rgba(255,255,255,0)',
                  background:'rgba(0,0,0,0.0)',
                  padding:'7px 14px',
                  border:'1px solid rgba(255,255,255,0)',
                  transition: 'all 0.3s ease',
                }}>
                  Preguntar por esta pieza
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ width:'min(1320px,90vw)', margin:'36px auto 0', textAlign:'center' }}>
        <Link href="https://wa.me/34605764097" target="_blank" style={{
          display:'inline-flex', alignItems:'center', gap:10,
          border:'1px solid rgba(160,120,48,0.5)', padding:'13px 28px',
          fontSize:9, letterSpacing:'0.22em', textTransform:'uppercase',
          color:'#7a5c28', fontFamily:'var(--sans)', textDecoration:'none',
        }}>
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none"
            stroke="currentColor" strokeWidth="1.5">
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
          </svg>
          Encargar tu pieza — WhatsApp
        </Link>
      </div>

      {/* Modal lightbox */}
      {selected !== null && (
        <div onClick={close} style={{
          position:'fixed', inset:0, zIndex:200,
          background:'rgba(6,4,2,0.88)',
          display:'flex', alignItems:'center', justifyContent:'center',
          padding:'24px',
          backdropFilter:'blur(8px)',
          WebkitBackdropFilter:'blur(8px)',
          animation:'fadeIn 0.25s ease',
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            position:'relative', maxWidth:520, width:'100%',
            display:'flex', flexDirection:'column', alignItems:'center', gap:20,
          }}>
            {/* Cerrar */}
            <button onClick={close} style={{
              position:'absolute', top:-12, right:-12, zIndex:1,
              background:'rgba(201,168,76,0.12)', border:'1px solid rgba(201,168,76,0.3)',
              color:'var(--gold)', width:36, height:36, borderRadius:'50%',
              cursor:'pointer', fontSize:16, lineHeight:1,
              display:'flex', alignItems:'center', justifyContent:'center',
            }}>✕</button>

            {/* Foto */}
            <div style={{ position:'relative', width:'100%', aspectRatio:'1/1',
              borderRadius:2, overflow:'hidden', background:'#1a1208' }}>
              <Image src={BOLSOS[selected]} alt={`MAMOTIS pieza ${selected + 1}`} fill
                style={{ objectFit:'contain' }} sizes="520px" />
            </div>

            {/* Info */}
            <div style={{ textAlign:'center' }}>
              <div style={{ fontFamily:'var(--serif)', fontSize:11, letterSpacing:'0.3em',
                textTransform:'uppercase', color:'rgba(201,168,76,0.6)', marginBottom:6 }}>
                Pieza nº{String(selected + 1).padStart(2,'0')}
              </div>
              <p style={{ fontFamily:'var(--serif)', fontSize:14, fontStyle:'italic',
                color:'#c4b49a', margin:'0 0 20px', lineHeight:1.6 }}>
                Pieza única hecha a mano. Disponibilidad bajo consulta.
              </p>
              <Link href={waUrl} target="_blank" style={{
                display:'inline-flex', alignItems:'center', gap:10,
                background:'var(--gold)', color:'#1a1208',
                padding:'14px 32px', textDecoration:'none',
                fontFamily:'var(--sans)', fontSize:9,
                letterSpacing:'0.22em', textTransform:'uppercase',
                fontWeight:500,
              }}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none"
                  stroke="currentColor" strokeWidth="2">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
                </svg>
                Preguntar por esta pieza
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
        button:hover .card-hover-overlay {
          background: rgba(9,7,5,0.45) !important;
        }
        button:hover .card-hover-overlay span {
          color: rgba(255,255,255,0.9) !important;
          border-color: rgba(255,255,255,0.4) !important;
        }
      `}</style>
    </section>
  );
}
