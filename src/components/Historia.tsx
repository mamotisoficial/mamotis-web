'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

function CarruselBolso() {
  const fotos = [
    '/historia/bolso-azul-01.jpg',
    '/historia/bolso-azul-02.jpg',
    '/historia/bolso-azul-03.jpg',
  ];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % fotos.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ position:'relative', width:'100%', height:'100%', minHeight:'clamp(320px,45vw,560px)' }}>
      {fotos.map((src, i) => (
        <div key={src} style={{
          position:'absolute', inset:0,
          opacity: i === idx ? 1 : 0,
          transition: 'opacity 0.9s ease',
        }}>
          <Image src={src} alt={`MAMOTIS bolso detalle ${i + 1}`} fill
            style={{ objectFit:'cover', objectPosition:'center' }} />
        </div>
      ))}
      {/* Dots */}
      <div style={{
        position:'absolute', bottom:16, left:'50%', transform:'translateX(-50%)',
        display:'flex', gap:8, zIndex:2,
      }}>
        {fotos.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)}
            style={{
              width: i === idx ? 20 : 7, height:7, borderRadius:4,
              background: i === idx ? 'var(--gold)' : 'rgba(255,255,255,0.4)',
              border:'none', cursor:'pointer', padding:0,
              transition:'all 0.3s ease',
            }} />
        ))}
      </div>
    </div>
  );
}

export default function Historia() {
  return (
    <section id="historia" style={{ background: '#f1e8d3' }}>

      {/* FILA 1 — El pasado: texto izquierda, foto derecha */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', minHeight:560 }}
        className="historia-row">
        <div style={{
          order:1,
          display:'flex', flexDirection:'column', justifyContent:'center',
          padding:'clamp(44px,6vw,88px) clamp(32px,5vw,88px)',
          background:'#f1e8d3',
        }}>
          <div style={{ fontSize:10, letterSpacing:'0.5em', textTransform:'uppercase',
            color:'var(--gold)', fontFamily:'var(--sans)', marginBottom:14 }}>
            El pasado
          </div>
          <div style={{ width:36, height:1, background:'var(--gold)', opacity:0.6, marginBottom:28 }} />
          <h3 style={{ fontFamily:'var(--display)', fontSize:'clamp(28px,3.5vw,52px)',
            fontWeight:400, lineHeight:1.08, margin:'0 0 6px', color:'#241b12' }}>
            Elegancia
          </h3>
          <h3 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,3.5vw,52px)',
            fontWeight:300, fontStyle:'italic', lineHeight:1.08, margin:'0 0 28px', color:'#a07830' }}>
            que perdura.
          </h3>
          <p style={{ fontFamily:'var(--sans)', fontSize:16, lineHeight:1.9,
            color:'#5a4f42', margin:'0 0 32px', fontWeight:300 }}>
            Más que una prenda, el abrigo de piel era un símbolo de distinción. Acompañaba a las mujeres en sus viajes, en sus logros, en los momentos que importaban. Su belleza y su calidad trascendían modas y generaciones.
          </p>
          <div style={{ fontSize:9, letterSpacing:'0.3em', color:'#b8a888',
            display:'flex', alignItems:'center', gap:14 }}>
            <span style={{ whiteSpace:'nowrap' }}>C. 1940  —  ELEGANCIA QUE PERDURA</span>
            <div style={{ flex:1, height:1, background:'#d2c4a6' }} />
          </div>
        </div>
        <div style={{ order:2, position:'relative', minHeight:'clamp(320px,45vw,560px)', overflow:'hidden' }}
          className="historia-foto-col">
          <Image src="/historia/historia-02.jpg" alt="Mujeres elegantes con abrigos de piel, años 40" fill
            style={{ objectFit:'cover', objectPosition:'center top',
              filter:'sepia(0.08) contrast(1.02) brightness(0.98)' }} />
        </div>
      </div>

      {/* FILA 2 — El presente: foto izquierda (carrusel), texto derecha */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', minHeight:560 }}
        className="historia-row">
        <div style={{ order:1, overflow:'hidden' }} className="historia-foto-col presente-foto">
          <CarruselBolso />
        </div>
        <div className="presente-texto" style={{
          order:2,
          display:'flex', flexDirection:'column', justifyContent:'center',
          padding:'clamp(44px,6vw,88px) clamp(32px,5vw,88px)',
          background:'#ede4cf',
        }}>
          <div style={{ fontSize:10, letterSpacing:'0.5em', textTransform:'uppercase',
            color:'var(--gold)', fontFamily:'var(--sans)', marginBottom:14 }}>
            El presente
          </div>
          <div style={{ width:36, height:1, background:'var(--gold)', opacity:0.6, marginBottom:28 }} />
          <h3 style={{ fontFamily:'var(--display)', fontSize:'clamp(28px,3.5vw,52px)',
            fontWeight:400, lineHeight:1.08, margin:'0 0 6px', color:'#241b12' }}>
            La misma piel.
          </h3>
          <h3 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,3.5vw,52px)',
            fontWeight:300, fontStyle:'italic', lineHeight:1.08, margin:'0 0 28px', color:'#a07830' }}>
            Otra vida.
          </h3>
          <p style={{ fontFamily:'var(--sans)', fontSize:16, lineHeight:1.9,
            color:'#5a4f42', margin:'0 0 32px', fontWeight:300 }}>
            Nuestras artesanas transforman cada abrigo a mano, con respeto y lentitud. El resultado es un bolso que lleva dos historias dentro: la de quien lo llevó antes y la que tú escribirás.
          </p>
          <div style={{ fontSize:9, letterSpacing:'0.3em', color:'#b8a888',
            display:'flex', alignItems:'center', gap:14 }}>
            <span style={{ whiteSpace:'nowrap' }}>HOY  —  LA TRANSFORMACIÓN</span>
            <div style={{ flex:1, height:1, background:'#d2c4a6' }} />
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:860px){
          .historia-row{grid-template-columns:1fr!important; min-height:auto!important;}
          .historia-foto-col{min-height:320px!important;}
          .presente-foto{order:3!important;}
          .presente-texto{order:2!important;}
        }
      `}</style>
    </section>
  );
}
