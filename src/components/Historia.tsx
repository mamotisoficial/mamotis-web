'use client';

export default function Historia() {
  return (
    <section id="historia" style={{
      padding:'9rem 5rem', display:'grid',
      gridTemplateColumns:'1fr 1.15fr', gap:'7rem', alignItems:'center',
    }}>
      {/* VISUAL */}
      <div style={{ position:'relative', aspectRatio:'3/4',
        border:'1px solid var(--borde)', overflow:'hidden', background:'#0c0a07',
        display:'flex', alignItems:'center', justifyContent:'center' }}>
        <svg width="52%" viewBox="0 0 180 300" fill="#C9A84C" opacity={0.17}>
          <ellipse cx="90" cy="42" rx="25" ry="30"/>
          <ellipse cx="90" cy="15" rx="35" ry="8"/>
          <rect x="75" y="7" width="30" height="20" rx="5"/>
          <path d="M30,75 Q58,65 90,68 Q122,65 150,75 L160,220 Q130,215 90,218 Q50,215 20,220 Z"/>
          <path d="M70,75 L80,110 L90,90 L100,110 L110,75" fill="#050505" opacity={0.55}/>
          <path d="M30,75 L8,170 L25,173 L45,100 Z"/>
          <path d="M150,75 L172,170 L155,173 L135,100 Z"/>
        </svg>
        {/* Esquinas doradas */}
        {['tl','tr','bl','br'].map(pos => (
          <span key={pos} style={{
            position:'absolute', width:'26px', height:'26px',
            borderColor:'var(--oro)', borderStyle:'solid', opacity:.28,
            ...(pos==='tl' ? {top:'-1px',left:'-1px',borderWidth:'1px 0 0 1px'} :
               pos==='tr' ? {top:'-1px',right:'-1px',borderWidth:'1px 1px 0 0'} :
               pos==='bl' ? {bottom:'-1px',left:'-1px',borderWidth:'0 0 1px 1px'} :
               {bottom:'-1px',right:'-1px',borderWidth:'0 1px 1px 0'}),
          }}/>
        ))}
        <div style={{ position:'absolute', bottom:'1.5rem', right:'1.5rem',
          fontFamily:"'DM Mono',monospace", fontSize:'.48rem', letterSpacing:'.25em',
          color:'var(--oro)', opacity:.38, textAlign:'right', lineHeight:1.9, zIndex:3 }}>
          Madrid · 1967<br/>Gran Vía · Peletería<br/>Abrigo rescatado
        </div>
        <div style={{ position:'absolute', top:'1.2rem', left:'1.5rem',
          fontFamily:"'Cormorant Garamond',serif", fontSize:'5rem', fontWeight:300,
          color:'transparent', WebkitTextStroke:'1px rgba(201,168,76,.1)', lineHeight:1, zIndex:3 }}>I</div>
      </div>

      {/* TEXTO */}
      <div>
        <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'.56rem', letterSpacing:'.45em',
          color:'var(--oro)', opacity:.5, textTransform:'uppercase', marginBottom:'2.5rem', display:'block' }}>
          — El origen —
        </span>
        <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontStyle:'italic',
          fontSize:'clamp(2rem,3.5vw,3.6rem)', lineHeight:1.2, marginBottom:'3rem' }}>
          Hubo una época en que vestirse era un{' '}
          <em style={{ color:'var(--oro)', fontStyle:'normal' }}>acto de poder.</em>
        </h2>
        <p style={{ fontSize:'1.05rem', lineHeight:2.1, opacity:.55,
          borderLeft:'1px solid rgba(201,168,76,.22)', paddingLeft:'2rem', marginBottom:'1.5rem' }}>
          Las mujeres lo sabían. Un abrigo de piel no era ropa — era una declaración.
          Se compraba una vez. Se llevaba toda una vida. Se heredaba como un secreto.
        </p>
        <p style={{ fontSize:'1.05rem', lineHeight:2.1, opacity:.55,
          borderLeft:'1px solid rgba(201,168,76,.22)', paddingLeft:'2rem' }}>
          Hoy esos abrigos esperan, olvidados en armarios, cargados de historia sin contar.
          MAMOTIS los encuentra. Y les da otra vida.
        </p>
      </div>
    </section>
  );
}
