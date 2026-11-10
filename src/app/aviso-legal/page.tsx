export default function AvisoLegal() {
  return (
    <main style={{ background:'#f7f2ea', minHeight:'100vh', padding:'120px 0 80px' }}>
      <div style={{ width:'min(760px,90vw)', margin:'0 auto',
        fontFamily:'var(--sans)', color:'#5a4f42', fontWeight:300 }}>
        <div style={{ fontSize:9, letterSpacing:'0.5em', textTransform:'uppercase',
          color:'var(--gold)', marginBottom:16 }}>Legal</div>
        <h1 style={{ fontFamily:'var(--display)', fontSize:'clamp(32px,4vw,52px)',
          fontWeight:400, color:'#241b12', margin:'0 0 48px' }}>Aviso Legal</h1>

        <h2 style={{ fontFamily:'var(--display)', fontSize:20, fontWeight:400,
          color:'#241b12', margin:'0 0 10px' }}>1. Titular del sitio web</h2>
        <p style={{ fontSize:15, lineHeight:1.9, margin:'0 0 36px' }}>
          En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
          Información y de Comercio Electrónico (LSSI-CE), se informa que el titular de este
          sitio web es:<br/><br/>
          <strong style={{ color:'#241b12' }}>Soluciones de Artesanos para Capilares y Estética, S.L.</strong><br/>
          CIF: B88427463<br/>
          Domicilio social: C/ López de Hoyos, 66, 28002, Madrid<br/>
          Email: hola@mamotis.es<br/>
          Web: mamotis.es
        </p>

        <h2 style={{ fontFamily:'var(--display)', fontSize:20, fontWeight:400,
          color:'#241b12', margin:'0 0 10px' }}>2. Objeto</h2>
        <p style={{ fontSize:15, lineHeight:1.9, margin:'0 0 36px' }}>
          El presente Aviso Legal regula el acceso y uso del sitio web mamotis.es, titularidad de
          Soluciones de Artesanos para Capilares y Estética, S.L., a través del cual se ofrece
          información sobre la marca MAMOTIS y sus productos artesanales.
        </p>

        <h2 style={{ fontFamily:'var(--display)', fontSize:20, fontWeight:400,
          color:'#241b12', margin:'0 0 10px' }}>3. Propiedad intelectual e industrial</h2>
        <p style={{ fontSize:15, lineHeight:1.9, margin:'0 0 36px' }}>
          Todos los contenidos del sitio web (textos, fotografías, diseño, logotipos y demás
          elementos) son propiedad de Soluciones de Artesanos para Capilares y Estética, S.L.
          o de terceros que han autorizado su uso. Queda prohibida su reproducción, distribución
          o modificación sin autorización expresa y por escrito del titular.
        </p>

        <h2 style={{ fontFamily:'var(--display)', fontSize:20, fontWeight:400,
          color:'#241b12', margin:'0 0 10px' }}>4. Responsabilidad</h2>
        <p style={{ fontSize:15, lineHeight:1.9, margin:'0 0 36px' }}>
          La empresa no se hace responsable de los daños que pudieran derivarse del uso
          incorrecto del sitio web ni de la información contenida en él. Se reserva el derecho
          a modificar, suspender o eliminar el sitio web sin previo aviso.
        </p>

        <h2 style={{ fontFamily:'var(--display)', fontSize:20, fontWeight:400,
          color:'#241b12', margin:'0 0 10px' }}>5. Ley aplicable y jurisdicción</h2>
        <p style={{ fontSize:15, lineHeight:1.9, margin:'0 0 36px' }}>
          Este Aviso Legal se rige por la legislación española. Para cualquier controversia
          derivada del uso del sitio web, las partes se someten a los juzgados y tribunales
          de Madrid, con renuncia a cualquier otro fuero que pudiera corresponderles.
        </p>
      </div>
    </main>
  );
}
