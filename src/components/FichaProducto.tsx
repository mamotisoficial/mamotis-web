'use client';
import Link from 'next/link';
import { Producto } from '@/data/productos';

export default function FichaProducto({ producto: p }: { producto: Producto }) {
  const msg = encodeURIComponent(`Hola, me interesa el bolso ${p.nombre} (Nº ${p.num}) — ¿está disponible?`);
  const waUrl = `https://wa.me/34600000000?text=${msg}`;

  const attrs = [
    { label: 'Material', value: p.material },
    { label: 'Forro interior', value: p.forro },
    { label: 'Asa', value: p.asa },
    { label: 'Medidas', value: p.medidas },
  ];

  return (
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', minHeight:'calc(100vh - 0px)' }}>
      {/* FOTO */}
      <div style={{ position:'relative', overflow:'hidden', background:'#0a0807',
        display:'flex', alignItems:'center', justifyContent:'center' }}>
        <div style={{ textAlign:'center', opacity:.07 }}>
          <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'12rem', color:'var(--oro)', lineHeight:1 }}>M</div>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:'.5rem',
            letterSpacing:'.3em', color:'var(--oro)', marginTop:'1rem' }}>{p.nombre}</div>
        </div>
        <div style={{ position:'absolute', inset:0,
          background:'linear-gradient(to right,transparent 70%,var(--negro))' }} />
      </div>

      {/* INFO */}
      <div style={{ padding:'10rem 5rem 5rem 4.5rem', display:'flex',
        flexDirection:'column', justifyContent:'center',
        borderLeft:'1px solid var(--borde)' }}>
        <Link href="/coleccion" style={{ fontFamily:"'DM Mono',monospace", fontSize:'.52rem',
          letterSpacing:'.2em', color:'var(--crema)', opacity:.3, textTransform:'uppercase',
          textDecoration:'none', display:'flex', alignItems:'center', gap:'.7rem',
          marginBottom:'3rem' }}>
          ← Volver a la colección
        </Link>

        <div style={{ fontFamily:"'DM Mono',monospace", fontSize:'.52rem',
          letterSpacing:'.35em', color:'var(--oro)', opacity:.4,
          textTransform:'uppercase', marginBottom:'.8rem' }}>
          Pieza única · Nº {p.num}
        </div>
        <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontStyle:'italic',
          fontSize:'clamp(2.5rem,4vw,3.8rem)', lineHeight:1.08, color:'var(--crema)', marginBottom:'.5rem' }}>
          {p.nombre}
        </h1>
        <div style={{ fontFamily:"'DM Mono',monospace", fontSize:'.54rem',
          letterSpacing:'.25em', color:'var(--oro)', opacity:.55,
          textTransform:'uppercase', marginBottom:'3rem' }}>{p.lugar}</div>

        <div style={{ width:'100%', height:'1px', background:'var(--borde)', marginBottom:'2.5rem' }} />

        {/* ATRIBUTOS */}
        <div style={{ marginBottom:'2.5rem' }}>
          {attrs.map(({ label, value }) => (
            <div key={label} style={{ display:'grid', gridTemplateColumns:'140px 1fr',
              gap:'1rem', padding:'1rem 0', borderBottom:'1px solid rgba(201,168,76,.06)' }}>
              <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'.5rem',
                letterSpacing:'.25em', color:'var(--crema)', opacity:.3, textTransform:'uppercase' }}>
                {label}
              </span>
              <span style={{ fontFamily:"'Cormorant Garamond',serif",
                fontSize:'1.05rem', color:'var(--crema)', opacity:.8, lineHeight:1.5 }}>
                {value}
              </span>
            </div>
          ))}
        </div>

        <div style={{ width:'100%', height:'1px', background:'var(--borde)', marginBottom:'2.5rem' }} />

        {/* HISTORIA */}
        <div style={{ fontFamily:"'DM Mono',monospace", fontSize:'.5rem',
          letterSpacing:'.3em', color:'var(--oro)', opacity:.4,
          textTransform:'uppercase', marginBottom:'1rem' }}>Historia del abrigo</div>
        <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:'italic',
          fontSize:'1.05rem', lineHeight:2, opacity:.55,
          borderLeft:'1px solid rgba(201,168,76,.2)', paddingLeft:'1.5rem', marginBottom:'3rem' }}>
          {p.origen}
        </p>

        {/* ÚNICA */}
        <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'2.5rem' }}>
          <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'var(--oro)', opacity:.7 }} />
          <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'.5rem',
            letterSpacing:'.25em', color:'var(--oro)', opacity:.55, textTransform:'uppercase' }}>
            Pieza única irrepetible · Solo existe una unidad
          </span>
        </div>

        {/* WHATSAPP */}
        <a href={waUrl} target="_blank" rel="noreferrer" style={{
          display:'flex', alignItems:'center', justifyContent:'center', gap:'1rem',
          padding:'1.3rem 2.5rem', width:'100%', background:'transparent',
          border:'1px solid rgba(201,168,76,.4)',
          fontFamily:"'DM Mono',monospace", fontSize:'.58rem',
          letterSpacing:'.22em', color:'var(--oro)', textTransform:'uppercase',
          textDecoration:'none', marginBottom:'1rem',
          transition:'background .4s, color .4s',
        }}
          onMouseEnter={e => { const t=e.currentTarget; t.style.background='var(--oro)'; t.style.color='var(--negro)'; }}
          onMouseLeave={e => { const t=e.currentTarget; t.style.background='transparent'; t.style.color='var(--oro)'; }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Consultar disponibilidad
        </a>
        <p style={{ fontFamily:"'DM Mono',monospace", fontSize:'.46rem',
          letterSpacing:'.18em', opacity:.2, textAlign:'center', lineHeight:1.8 }}>
          Cada pieza MAMOTIS es irrepetible.<br />Una vez vendida, no vuelve.
        </p>
      </div>
    </div>
  );
}
