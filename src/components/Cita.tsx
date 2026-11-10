import Image from 'next/image';

export default function Cita() {
  return (
    <section style={{ position: 'relative', background: '#f1e8d3', overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', minHeight: 480 }} className="cita-grid">

        {/* Foto izquierda */}
        <div style={{ position: 'relative', minHeight: 440 }}>
          <Image
            src="/historia/manifiesto-piel.jpg"
            alt="Detalle de piel vintage"
            fill
            style={{ objectFit: 'cover' }}
          />
          {/* fade derecha suave */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,transparent 60%,#f1e8d3 100%)' }} />
        </div>

        {/* Texto derecha: centro + columna */}
        <div style={{ display: 'flex', alignItems: 'center', padding: 'clamp(40px,6vw,90px) clamp(30px,5vw,80px)' }}>
          <div>
            {/* Eyebrow */}
            <div style={{ fontSize: 9, letterSpacing: '0.48em', textTransform: 'uppercase', color: '#a38b5c', marginBottom: 20 }}>La historia</div>
            <div style={{ width: 36, height: 1, background: '#a38b5c', marginBottom: 36 }} />

            {/* Gran titular */}
            <h2 style={{ font: `italic clamp(30px,4vw,50px)/1.2 var(--serif)`, color: '#241b12', margin: '0 0 36px', letterSpacing: '-0.01em' }}>
              Del pasado,<br />una nueva historia.
            </h2>

            {/* Dos columnas de texto */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 32px', borderLeft: '3px solid #c9a64c', paddingLeft: 24 }} className="cita-cols">
              <p style={{ margin: 0, font: `14px/1.9 var(--sans)`, color: '#5a4f42', fontWeight: 300 }}>
                MAMOTIS nace de la idea de dar una segunda vida a pieles con historia. Transformamos abrigos vintage en bolsos únicos.
              </p>
              <p style={{ margin: 0, font: `14px/1.9 var(--sans)`, color: '#5a4f42', fontWeight: 300 }}>
                Donde la artesanía, la sostenibilidad y el diseño se unen para crear piezas con carácter.
              </p>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media(max-width:640px){
          .cita-grid{grid-template-columns:1fr!important;}
          .cita-grid > div:first-child{min-height:260px!important;}
          .cita-cols{grid-template-columns:1fr!important;gap:14px!important;}
        }
      `}</style>
    </section>
  );
}
