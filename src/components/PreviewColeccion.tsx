'use client';
import { useState } from 'react';
import Link from 'next/link';
import { productos } from '@/data/productos';

export default function PreviewColeccion() {
  const [hovered, setHovered] = useState<number|null>(null);
  const preview = [productos[0], productos[1], productos[2]];

  return (
    <section style={{ padding:'6rem 5rem 9rem' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:'4rem' }}>
        <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontStyle:'italic',
          fontSize:'clamp(2rem,3.5vw,3.2rem)' }}>
          La <em style={{ color:'var(--oro)', fontStyle:'normal' }}>Colección</em>
        </h2>
        <Link href="/coleccion" style={{ fontFamily:"'DM Mono',monospace", fontSize:'.54rem',
          letterSpacing:'.2em', color:'var(--oro)', textDecoration:'none', textTransform:'uppercase' }}>
          Ver todas las piezas →
        </Link>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1.6fr 1fr 1fr',
        gridTemplateRows:'1fr 1fr', gap:'3px', height:'72vh', minHeight:'480px' }}>
        {preview.map((p, i) => (
          <Link key={p.id} href={`/coleccion/${p.id}`}
            onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
            style={{ position:'relative', overflow:'hidden', background:'#0f0c08',
              textDecoration:'none', display:'flex', alignItems:'center', justifyContent:'center',
              ...(i===0?{gridRow:'1/3'}:{}) }}>
            <div style={{ textAlign:'center', opacity:.07 }}>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'5rem', color:'var(--oro)' }}>M</div>
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:'.4rem',
                letterSpacing:'.2em', color:'var(--oro)', marginTop:'.5rem' }}>{p.nombre}</div>
            </div>
            <div style={{ position:'absolute', inset:0,
              background:'linear-gradient(to top,rgba(0,0,0,.82) 0%,transparent 100%)',
              opacity:hovered===i?1:0, transition:'opacity .5s' }} />
            <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'2rem',
              transform:hovered===i?'translateY(0)':'translateY(12px)',
              opacity:hovered===i?1:0, transition:'all .5s ease' }}>
              <div style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontStyle:'italic',
                fontSize:'1.55rem', color:'var(--crema)', marginBottom:'.3rem' }}>{p.nombre}</div>
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:'.48rem',
                letterSpacing:'.2em', color:'var(--oro)', opacity:.65, textTransform:'uppercase' }}>{p.lugar}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
