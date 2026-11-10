import Link from 'next/link';

export default function Legal() {
  return (
    <main style={{ minHeight: '100vh', padding: '10rem 5rem 6rem', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/" style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.5rem',
        letterSpacing: '0.3em', color: 'var(--oro)', opacity: 0.6, textDecoration: 'none',
        textTransform: 'uppercase', display: 'block', marginBottom: '3rem' }}>
        ← Volver
      </Link>

      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: 'italic',
        fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--crema)', marginBottom: '3rem' }}>
        Aviso legal
      </h1>

      {[
        { titulo: 'Datos identificativos', contenido: `Soluciones de Artesanos para Capilares y Estética, S.L.\nCIF: B88427463\nDomicilio social: C/ López de Hoyos, 66, 28002, Madrid` },
        { titulo: 'Contacto', contenido: `Teléfono / WhatsApp: 605 764 097\nInstagram: @mamotis_` },
        { titulo: 'Objeto', contenido: `El presente aviso legal regula el uso del sitio web de MAMOTIS, marca comercial de Soluciones de Artesanos para Capilares y Estética, S.L., dedicada a la creación artesanal de bolsos únicos elaborados con pieles rescatadas.` },
        { titulo: 'Propiedad intelectual', contenido: `Todos los contenidos de este sitio web — textos, imágenes, diseños y logotipos — son propiedad de MAMOTIS o sus licenciantes y están protegidos por la legislación española e internacional de propiedad intelectual.` },
        { titulo: 'Protección de datos', contenido: `Los datos personales facilitados a través de este sitio serán tratados conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales.` },
      ].map(({ titulo, contenido }) => (
        <div key={titulo} style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.52rem',
            letterSpacing: '0.4em', color: 'var(--oro)', opacity: 0.6,
            textTransform: 'uppercase', marginBottom: '1rem' }}>{titulo}</h2>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem',
            lineHeight: 2, opacity: 0.6, whiteSpace: 'pre-line' }}>{contenido}</p>
        </div>
      ))}
    </main>
  );
}
