export default function Cookies() {
  return (
    <main style={{ background:'#f7f2ea', minHeight:'100vh', padding:'120px 0 80px' }}>
      <div style={{ width:'min(760px,90vw)', margin:'0 auto',
        fontFamily:'var(--sans)', color:'#5a4f42', fontWeight:300 }}>
        <div style={{ fontSize:9, letterSpacing:'0.5em', textTransform:'uppercase',
          color:'var(--gold)', marginBottom:16 }}>Legal</div>
        <h1 style={{ fontFamily:'var(--display)', fontSize:'clamp(32px,4vw,52px)',
          fontWeight:400, color:'#241b12', margin:'0 0 48px' }}>Política de Cookies</h1>

        <h2 style={{ fontFamily:'var(--display)', fontSize:20, fontWeight:400,
          color:'#241b12', margin:'0 0 10px' }}>1. ¿Qué son las cookies?</h2>
        <p style={{ fontSize:15, lineHeight:1.9, margin:'0 0 36px' }}>
          Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando
          visitas un sitio web. Nos permiten recordar tus preferencias y mejorar tu experiencia
          de navegación.
        </p>

        <h2 style={{ fontFamily:'var(--display)', fontSize:20, fontWeight:400,
          color:'#241b12', margin:'0 0 10px' }}>2. Cookies que utilizamos</h2>
        <p style={{ fontSize:15, lineHeight:1.9, margin:'0 0 16px' }}>
          Este sitio web puede utilizar los siguientes tipos de cookies:
        </p>
        <table style={{ width:'100%', borderCollapse:'collapse', marginBottom:36, fontSize:14 }}>
          <thead>
            <tr style={{ borderBottom:'1px solid #d4c4a0' }}>
              <th style={{ textAlign:'left', padding:'10px 0', fontWeight:400,
                color:'#241b12', fontFamily:'var(--display)' }}>Tipo</th>
              <th style={{ textAlign:'left', padding:'10px 0', fontWeight:400,
                color:'#241b12', fontFamily:'var(--display)' }}>Finalidad</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom:'1px solid rgba(201,168,76,0.15)' }}>
              <td style={{ padding:'12px 0', verticalAlign:'top', paddingRight:24 }}>Técnicas</td>
              <td style={{ padding:'12px 0' }}>Necesarias para el funcionamiento básico del sitio.</td>
            </tr>
            <tr style={{ borderBottom:'1px solid rgba(201,168,76,0.15)' }}>
              <td style={{ padding:'12px 0', verticalAlign:'top', paddingRight:24 }}>Analíticas</td>
              <td style={{ padding:'12px 0' }}>Nos permiten conocer cómo los usuarios interactúan con el sitio para mejorar su funcionamiento.</td>
            </tr>
          </tbody>
        </table>

        <h2 style={{ fontFamily:'var(--display)', fontSize:20, fontWeight:400,
          color:'#241b12', margin:'0 0 10px' }}>3. Gestión de cookies</h2>
        <p style={{ fontSize:15, lineHeight:1.9, margin:'0 0 36px' }}>
          Puedes configurar tu navegador para rechazar o eliminar las cookies. Ten en cuenta
          que deshabilitar las cookies puede afectar al funcionamiento del sitio web. Para más
          información sobre cómo gestionar las cookies, consulta la ayuda de tu navegador.
        </p>

        <h2 style={{ fontFamily:'var(--display)', fontSize:20, fontWeight:400,
          color:'#241b12', margin:'0 0 10px' }}>4. Responsable</h2>
        <p style={{ fontSize:15, lineHeight:1.9, margin:'0 0 36px' }}>
          <strong style={{ color:'#241b12' }}>Soluciones de Artesanos para Capilares y Estética, S.L.</strong><br/>
          CIF: B88427463 · C/ López de Hoyos, 66, 28002, Madrid<br/>
          Email: hola@mamotis.es
        </p>

        <h2 style={{ fontFamily:'var(--display)', fontSize:20, fontWeight:400,
          color:'#241b12', margin:'0 0 10px' }}>5. Actualización</h2>
        <p style={{ fontSize:15, lineHeight:1.9, margin:'0 0 36px' }}>
          Esta política puede actualizarse en cualquier momento. Recomendamos revisarla
          periódicamente. Última actualización: noviembre de 2026.
        </p>
      </div>
    </main>
  );
}
