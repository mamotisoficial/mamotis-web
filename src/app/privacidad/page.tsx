export default function Privacidad() {
  return (
    <main style={{ background:'#f7f2ea', minHeight:'100vh', padding:'120px 0 80px' }}>
      <div style={{ width:'min(760px,90vw)', margin:'0 auto',
        fontFamily:'var(--sans)', color:'#5a4f42', fontWeight:300 }}>
        <div style={{ fontSize:9, letterSpacing:'0.5em', textTransform:'uppercase',
          color:'var(--gold)', marginBottom:16 }}>Legal</div>
        <h1 style={{ fontFamily:'var(--display)', fontSize:'clamp(32px,4vw,52px)',
          fontWeight:400, color:'#241b12', margin:'0 0 48px' }}>Política de Privacidad</h1>

        <h2 style={{ fontFamily:'var(--display)', fontSize:20, fontWeight:400,
          color:'#241b12', margin:'0 0 10px' }}>1. Responsable del tratamiento</h2>
        <p style={{ fontSize:15, lineHeight:1.9, margin:'0 0 36px' }}>
          <strong style={{ color:'#241b12' }}>Soluciones de Artesanos para Capilares y Estética, S.L.</strong><br/>
          CIF: B88427463<br/>
          C/ López de Hoyos, 66, 28002, Madrid<br/>
          Email: hola@mamotis.es
        </p>

        <h2 style={{ fontFamily:'var(--display)', fontSize:20, fontWeight:400,
          color:'#241b12', margin:'0 0 10px' }}>2. Datos que recogemos</h2>
        <p style={{ fontSize:15, lineHeight:1.9, margin:'0 0 36px' }}>
          Podemos recoger los siguientes datos personales cuando interactúas con nosotros:
          nombre y apellidos, dirección de correo electrónico, número de teléfono, y cualquier
          otra información que nos facilites voluntariamente a través de formularios de contacto
          o por WhatsApp.
        </p>

        <h2 style={{ fontFamily:'var(--display)', fontSize:20, fontWeight:400,
          color:'#241b12', margin:'0 0 10px' }}>3. Finalidad del tratamiento</h2>
        <p style={{ fontSize:15, lineHeight:1.9, margin:'0 0 36px' }}>
          Los datos recogidos se utilizan para: atender consultas y solicitudes de información,
          gestionar pedidos y encargos de productos, enviar comunicaciones comerciales cuando
          hayas dado tu consentimiento, y mejorar nuestros servicios.
        </p>

        <h2 style={{ fontFamily:'var(--display)', fontSize:20, fontWeight:400,
          color:'#241b12', margin:'0 0 10px' }}>4. Base legal</h2>
        <p style={{ fontSize:15, lineHeight:1.9, margin:'0 0 36px' }}>
          El tratamiento de tus datos se basa en el consentimiento que nos otorgas al
          contactarnos, en la ejecución del contrato cuando realizas un pedido, y en el
          interés legítimo para el mantenimiento y mejora de nuestros servicios.
        </p>

        <h2 style={{ fontFamily:'var(--display)', fontSize:20, fontWeight:400,
          color:'#241b12', margin:'0 0 10px' }}>5. Conservación de los datos</h2>
        <p style={{ fontSize:15, lineHeight:1.9, margin:'0 0 36px' }}>
          Conservaremos tus datos mientras sean necesarios para los fines para los que fueron
          recogidos y, en todo caso, durante los plazos legalmente establecidos.
        </p>

        <h2 style={{ fontFamily:'var(--display)', fontSize:20, fontWeight:400,
          color:'#241b12', margin:'0 0 10px' }}>6. Tus derechos</h2>
        <p style={{ fontSize:15, lineHeight:1.9, margin:'0 0 36px' }}>
          Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición,
          limitación del tratamiento y portabilidad enviando un correo a hola@mamotis.es.
          También tienes derecho a presentar una reclamación ante la Agencia Española de
          Protección de Datos (www.aepd.es).
        </p>

        <h2 style={{ fontFamily:'var(--display)', fontSize:20, fontWeight:400,
          color:'#241b12', margin:'0 0 10px' }}>7. Comunicación a terceros</h2>
        <p style={{ fontSize:15, lineHeight:1.9, margin:'0 0 36px' }}>
          No cedemos tus datos a terceros salvo obligación legal o cuando sea estrictamente
          necesario para prestar el servicio solicitado.
        </p>
      </div>
    </main>
  );
}
