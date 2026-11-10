'use client';
import Image from 'next/image';
import Link from 'next/link';

// bolso-asa (asa rosa/azul) va primero — es la imagen del hero
const BOLSOS = [
  { id:'asa', nombre:'Bolso Asa Rosa', img:'/fotos/bolso-hero-asa.jpeg' },
  { id:'001', nombre:'Visón Negro',    img:'/bolsos/bolso-001.jpeg' },
  { id:'002', nombre:'Visón Camel',    img:'/bolsos/bolso-002.jpeg' },
  { id:'003', nombre:'Astracán',       img:'/bolsos/bolso-003.jpeg' },
  { id:'004', nombre:'Visón Arena',    img:'/bolsos/bolso-004.jpeg' },
  { id:'005', nombre:'Piel Vintage',   img:'/bolsos/bolso-005.jpeg' },
  { id:'006', nombre:'Noche Oscura',   img:'/bolsos/bolso-006.jpeg' },
  { id:'007', nombre:'Tierra Siena',   img:'/bolsos/bolso-007.jpeg' },
  { id:'008', nombre:'Crepúsculo',     img:'/bolsos/bolso-008.jpeg' },
  { id:'009', nombre:'Pieza 009',      img:'/bolsos/bolso-009.jpeg' },
  { id:'010', nombre:'Pieza 010',      img:'/bolsos/bolso-010.jpeg' },
  { id:'011', nombre:'Pieza 011',      img:'/bolsos/bolso-011.jpeg' },
  { id:'012', nombre:'Pieza 012',      img:'/bolsos/bolso-012.jpeg' },
  { id:'013', nombre:'Pieza 013',      img:'/bolsos/bolso-013.jpeg' },
  { id:'014', nombre:'Pieza 014',      img:'/bolsos/bolso-014.jpeg' },
];

export default function PreviewColeccion() {
  return (
    <section id="coleccion" style={{ background:'var(--cream)', padding:'90px 0 100px', overflow:'hidden' }}>
      {/* Header */}
      <div style={{ width:'min(1320px,90vw)', margin:'0 auto', marginBottom:52 }}>
        <div style={{ fontSize:9, letterSpacing:'0.5em', textTransform:'uppercase',
          color:'var(--gold)', fontFamily:'var(--sans)', marginBottom:16 }}>La colección</div>
        <h2 style={{ fontFamily:'var(--display)', fontSize:'clamp(34px,4.5vw,58px)',
          fontWeight:400, lineHeight:1.08, color:'#241b12', margin:'0 0 6px' }}>
          La colección
        </h2>
      </div>

      {/* Carrusel — scroll horizontal suave */}
      <div style={{ overflowX:'auto', overflowY:'hidden', paddingBottom:12,
        scrollbarWidth:'none', msOverflowStyle:'none' }} className="carrusel-track">
        <div style={{ display:'flex', gap:16,
          paddingLeft:'max(16px, calc((100vw - min(1320px,90vw)) / 2))',
          paddingRight:'max(16px, calc((100vw - min(1320px,90vw)) / 2))',
          width:'max-content' }}>
          {BOLSOS.map(b => (
            <Link href="https://instagram.com/mamotisoficial" key={b.id} target="_blank"
              style={{ textDecoration:'none', flexShrink:0, width:280 }} className="carrusel-item">
              <div style={{ position:'relative', width:280, height:340,
                overflow:'hidden', background:'#e4d9c4', borderRadius:2 }}>
                <Image src={b.img} alt={b.nombre} fill
                  style={{ objectFit:'cover', transition:'transform 0.6s ease' }}
                  className="carrusel-img" />
              </div>
              <div style={{ marginTop:12, display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
                <span style={{ fontFamily:'var(--serif)', fontSize:15, fontStyle:'italic',
                  color:'#241b12', fontWeight:300 }}>{b.nombre}</span>
                <span style={{ fontSize:9, letterSpacing:'0.3em',
                  color:'var(--gold)', fontFamily:'var(--sans)' }}>{b.id}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Instagram */}
      <div style={{ width:'min(1320px,90vw)', margin:'48px auto 0', textAlign:'center' }}>
        <Link href="https://instagram.com/mamotisoficial" target="_blank" style={{
          display:'inline-flex', alignItems:'center', gap:10,
          border:'1px solid rgba(160,120,48,0.5)', padding:'14px 32px',
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

      <style>{`
        .carrusel-track::-webkit-scrollbar{display:none;}
        .carrusel-item:hover .carrusel-img{transform:scale(1.04)!important;}
      `}</style>
    </section>
  );
}
