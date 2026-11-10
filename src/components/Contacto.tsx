import Link from 'next/link';

export default function Contacto() {
  return (
    <section id="contacto" style={{ padding: '100px 0', background: 'radial-gradient(ellipse at 80% 30%,#352015,#090706 60%)', position: 'relative', overflow: 'hidden' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: 40 }} className="contacto-grid">
          <div>
            <span className="eyebrow">Cada pieza tiene una historia</span>
            <h2 style={{ font: `italic clamp(48px,6vw,78px)/1.02 var(--serif)`, margin: '18px 0', color: 'var(--cream)' }}>
              Cuéntanos<br /><span style={{ color: 'var(--gold2)' }}>la tuya.</span>
            </h2>
            <p style={{ maxWidth: 450, font: `italic 17px/1.9 var(--serif)`, color: '#b8ad9a', margin: 0 }}>
              Todas nuestras piezas son únicas. Cuando se agotan, desaparecen para siempre. Escríbenos y te contamos qué tenemos disponible.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 14 }} className="contacto-actions">
            <Link href="https://wa.me/34605764097" target="_blank" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 18, background: 'linear-gradient(110deg,#b9953e,#e2c66d)', color: '#171108', padding: '19px 28px', minWidth: 280, font: `italic 17px var(--serif)`, border: 0, textDecoration: 'none' }}>
              Escribir por WhatsApp <span>⟶</span>
            </Link>
            <div style={{ fontSize: 10, letterSpacing: '0.2em', color: '#6f624d' }}>ATENCIÓN PERSONALIZADA · PIEZAS ÚNICAS</div>
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:640px){
          .contacto-grid{grid-template-columns:1fr!important;gap:28px!important}
          .contacto-actions{align-items:stretch!important}
          .contacto-actions a{min-width:0!important;width:100%!important}
        }
      `}</style>
    </section>
  );
}
