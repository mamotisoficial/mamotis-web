'use client';
import { useState } from 'react';
import Link from 'next/link';
import { productos } from '@/data/productos';

export default function ColeccionGrid() {
  const [hovered, setHovered] = useState<string|null>(null);

  return (
    <div>
      {/* Filtros */}
      <div style={{ padding:'2rem 5rem', display:'flex', alignItems:'center', gap:'2.5rem',
        borderBottom:'1px solid rgba(201,168,76,.06)' }}>
        <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'.52rem',
          letterSpacing:'.3em', opacity:.28, textTransform:'uppercase' }}>Filtrar</span>
        {['Todas','Visón','Astracán','Rex'].map(f => (
          <button key={f} style={{ fontFamily:"'DM Mono',monospace", fontSize:'.52rem',
            letterSpacing:'.18em', color: f==='Todas'?'var(--oro)':'var(--crema)', opacity: f==='Todas'?1:.38,
            textTransform:'uppercase', background:'none', border:'none',
            borderBottom: f==='Todas'?'1px solid rgba(201,168,76,.4)':'1px solid transparent',
            padding:'.4rem 0', cursor:'pointer' }}>
            {f}
          </button>
        ))}
        <span style={{ marginLeft:'auto', fontFamily:"'DM Mono',monospace",
          fontSize:'.5rem', letterSpacing:'.2em', opacity:.2 }}>
          {productos.length} piezas disponibles
        </span>
      </div>

      {/* Grid */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)',
        gap:'3px', background:'rgba(201,168,76,.05)', padding:'3px' }}>
        {productos.map(p => (
          <Link key={p.id} href={`/coleccion/${p.id}`}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            style={{ background:'var(--negro)', textDecoration:'none', display:'block' }}>
            {/* Imagen placeholder */}
            <div style={{ aspectRatio:'4/5', overflow:'hidden', position:'relative',
              background:'#0f0c08', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <div style={{ textAlign:'center', opacity:.07 }}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'6rem', color:'var(--oro)' }}>M</div>
                <div style={{ fontFamily:"'DM Mono',monospace", fontSize:'.4rem',
                  letterSpacing:'.2em', color:'var(--oro)', marginTop:'.5rem' }}>{p.nombre}</div>
              </div>
              <div style={{ position:'absolute', inset:0,
                background:'linear-gradient(to top,rgba(0,0,0,.65) 0%,transparent 55%)',
                opacity: hovered===p.id?1:0, transition:'opacity .5s' }} />
            </div>
            {/* Info */}
            <div style={{ padding:'1.8rem 2rem 2.2rem',
              borderTop:'1px solid var(--borde)',
              display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <div>
                <div style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontStyle:'italic',
                  fontSize:'1.5rem', color: hovered===p.id?'var(--oro)':'var(--crema)',
                  marginBottom:'.25rem', transition:'color .3s' }}>{p.nombre}</div>
                <div style={{ fontFamily:"'DM Mono',monospace", fontSize:'.48rem',
                  letterSpacing:'.2em', color:'var(--oro)', opacity:.5,
                  textTransform:'uppercase', marginBottom:'.35rem' }}>{p.lugar}</div>
                <div style={{ fontFamily:"'DM Mono',monospace", fontSize:'.46rem',
                  letterSpacing:'.18em', opacity:.22, textTransform:'uppercase' }}>
                  Pieza única · Nº {p.num}
                </div>
              </div>
              <span style={{ fontSize:'1.1rem', color:'var(--oro)',
                opacity: hovered===p.id?0.7:0,
                transform: hovered===p.id?'translateX(4px)':'translateX(0)',
                transition:'opacity .3s,transform .3s' }}>→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
