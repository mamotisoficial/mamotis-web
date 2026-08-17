import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ padding:'4rem 5rem', display:'grid',
      gridTemplateColumns:'1.2fr 1fr 1fr', gap:'5rem', alignItems:'start',
      borderTop:'1px solid var(--borde)' }}>
      <div>
        <span style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:300,
          fontSize:'1.4rem', letterSpacing:'.55em', color:'var(--oro)', display:'block', marginBottom:'1rem' }}>
          MAMOTIS
        </span>
        <p style={{ fontStyle:'italic', fontSize:'1rem', opacity:.35, lineHeight:1.7 }}>
          Arqueología del lujo.<br />Piel con memoria. Madrid.
        </p>
      </div>
      <div>
        <h4 style={{ fontFamily:"'DM Mono',monospace", fontSize:'.52rem', letterSpacing:'.35em',
          color:'var(--oro)', opacity:.45, textTransform:'uppercase', marginBottom:'1.5rem' }}>Navegar</h4>
        <ul style={{ listStyle:'none' }}>
          {[{l:'La Marca',h:'/'},{l:'Historia',h:'/#historia'},{l:'Colección',h:'/coleccion'}].map(({l,h})=>(
            <li key={l} style={{ marginBottom:'.8rem' }}>
              <Link href={h} style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'1rem',
                color:'var(--crema)', opacity:.38, textDecoration:'none' }}>{l}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 style={{ fontFamily:"'DM Mono',monospace", fontSize:'.52rem', letterSpacing:'.35em',
          color:'var(--oro)', opacity:.45, textTransform:'uppercase', marginBottom:'1.5rem' }}>Contacto</h4>
        <ul style={{ listStyle:'none' }}>
          {[{l:'WhatsApp',h:'https://wa.me/34600000000'},{l:'Instagram',h:'#'},{l:'Madrid, España',h:'#'}].map(({l,h})=>(
            <li key={l} style={{ marginBottom:'.8rem' }}>
              <Link href={h} style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'1rem',
                color:'var(--crema)', opacity:.38, textDecoration:'none' }}>{l}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ gridColumn:'1/-1', paddingTop:'2rem',
        borderTop:'1px solid rgba(201,168,76,.05)',
        display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'.48rem', letterSpacing:'.2em', opacity:.18 }}>
          © 2024 MAMOTIS · Todos los derechos reservados
        </span>
        <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'.48rem', letterSpacing:'.2em', opacity:.18 }}>
          Piel rescatada · Hecho a mano · Madrid
        </span>
      </div>
    </footer>
  );
}
