export default function Cookies() {
  const h2style = {
    fontFamily:'var(--display)', fontSize:20, fontWeight:400,
    color:'#1a1208', margin:'0 0 10px' as const,
  };
  const pstyle = {
    fontSize:15, lineHeight:1.95, margin:'0 0 36px' as const,
    color:'#3a3028', fontFamily:'var(--sans)', fontWeight:300,
  };
  return (
    <main style={{ background:'#f7f2ea', minHeight:'100vh', padding:'120px 0 80px' }}>
      <div style={{ width:'min(720px,90vw)', margin:'0 auto' }}>
        <div style={{ fontSize:9, letterSpacing:'0.5em', textTransform:'uppercase',
          color:'var(--gold)', marginBottom:14, fontFamily:'var(--sans)' }}>Legal</div>
        <h1 style={{ fontFamily:'var(--display)', fontSize:'clamp(32px,4vw,52px)',
          fontWeight:400, color:'#1a1208', margin:'0 0 48px' }}>Política de Cookies</h1>

        <h2 style={h2style}>1. ¿Qué son las cookies?</h2>
        <p style={pstyle}>
          Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando
          visitas un sitio web. Nos permiten recordar tus preferencias y mejorar tu experiencia
          de navegación.
        </p>

        <h2 style={h2style}>2. Cookies que utilizamos</h2>
        <p style={{ ...pstyle, margin:'0 0 16px' }}>
          Este sitio web puede utilizar los siguientes tipos de cookies:
        </p>
        <table style={{ width:'100%', borderCollapse:'collapse', marginBottom:36,
          fontSize:14, color:'#3a3028', fontFamily:'var(--sans)', fontWeight:300 }}>
          <thead>
            <tr style={{ borderBottom:'1px solid #c8b896' }}>
              <th style={{ textAlign:'left', padding:'10px 0', fontWeight:400,
                color:'#1a1208', fontFamily:'var(--display)', paddingRight:24 }}>Tipo</th>
              <th style={{ textAlign:'left', padding:'10px 0', fontWeight:400,
                color:'#1a1208', fontFamily:'var(--display)' }}>Finalidad</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom:'1px solid rgba(180,160,120,0.3)' }}>
              <td style={{ padding:'12px 0', verticalAlign:'top', paddingRight:24 }}>Técnicas</td>
              <td style={{ padding:'12px 0' }}>Necesarias para el funcionamiento básico del sitio.</td>
            </tr>
            <tr style={{ borderBottom:'1px solid rgba(180,160,120,0.3)' }}>
              <td style={{ padding:'12px 0', verticalAlign:'top', paddingRight:24 }}>Analíticas</td>
              <td style={{ padding:'12px 0' }}>Nos permiten conocer cómo los usuarios interactúan con el sitio para mejorar su funcionamiento.</td>
            </tr>
          </tbody>
        </table>

        <h2 style={h2style}>3. Gestión de cookies</h2>
        <p style={pstyle}>
          Puedes configurar tu navegador para rechazar o eliminar las cookies. Ten en cuenta
          que deshabilitar las cookies puede afectar al funcionamiento del sitio web. Para más
          información sobre cómo gestionar las cookies, consulta la ayuda de tu navegador.
        </p>

        <h2 style={h2style}>4. Responsable</h2>
        <p style={pstyle}>
          <strong style={{ color:'#1a1208' }}>Soluciones de Artesanos para Capilares y Estética, S.L.</strong><br/>
          CIF: B88427463 · C/ López de Hoyos, 66, 28002, Madrid<br/>
          Email: mamotis.oficial@gmail.com
        </p>

        <h2 style={h2style}>5. Actualización</h2>
        <p style={pstyle}>
          Esta política puede actualizarse en cualquier momento. Recomendamos revisarla
          periódicamente. Última actualización: noviembre de 2026.
        </p>
      </div>
    </main>
  );
}
