export default function ColeccionHero() {
  return (
    <div style={{ padding:'12rem 5rem 5rem', position:'relative', overflow:'hidden',
      borderBottom:'1px solid var(--borde)' }}>
      <div style={{ position:'absolute', right:'3rem', top:'50%', transform:'translateY(-50%)',
        fontFamily:"'Cormorant Garamond',serif", fontSize:'22vw', fontWeight:300,
        color:'transparent', WebkitTextStroke:'1px rgba(201,168,76,.04)',
        pointerEvents:'none', userSelect:'none', lineHeight:1 }}>C</div>
      <div style={{ position:'relative', zIndex:1, maxWidth:'580px' }}>
        <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'.56rem', letterSpacing:'.5em',
          color:'var(--oro)', opacity:.45, textTransform:'uppercase', marginBottom:'1.2rem', display:'block' }}>
          — La colección · 2024 —
        </span>
        <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:300, fontStyle:'italic',
          fontSize:'clamp(2.8rem,5.5vw,5rem)', lineHeight:1.06, marginBottom:'1.2rem' }}>
          Cada una tiene<br /><em style={{ color:'var(--oro)', fontStyle:'normal' }}>su historia.</em>
        </h1>
        <p style={{ fontSize:'1.05rem', lineHeight:1.9, opacity:.45, maxWidth:'440px' }}>
          Piezas únicas. Irrepetibles. Cada bolso MAMOTIS nació de un abrigo con vida propia
          — y solo existe una unidad.
        </p>
      </div>
    </div>
  );
}
