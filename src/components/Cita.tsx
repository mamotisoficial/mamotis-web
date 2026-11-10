import Image from 'next/image';

export default function Cita() {
  return (
    <section style={{ background: '#f1e8d3', overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', minHeight: 500 }} className="cita-grid">

        {/* Foto izquierda: piel ocupa toda la mitad */}
        <div style={{ position: 'relative', minHeight: 440 }}>
          <Image
            src="/historia/manifiesto-piel.jpg"
            alt="Detalle de piel vintage MAMOTIS"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          {/* fade derecha suave hacia crema */}
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(90deg, transparent 55%, #f1e8d3 100%)' }} />
        </div>

        {/* Texto derecha */}
        <div style={{ display:'flex', alignItems:'center', padding:'clamp(50px,7vw,100px) clamp(32px,6vw,90px)' }}>
          <div>
            <div style={{ fontSize:9, letterSpacing:'0.48em', textTransform:'uppercase', color:'#a38b5c', marginBottom:16 }}>
              La historia
            </div>
            <div style={{ width:40, height:1, background:'#c9a64c', marginBottom:36 }} />

            <h2 style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(28px,3.5vw,50px)',
              fontStyle: 'italic',
              fontWeight: 300,
              lineHeight: 1.22,
              color: '#241b12',
              margin: '0 0 36px',
            }}>
              Del pasado,<br />una nueva historia.
            </h2>

            {/* Dos columnas con borde izquierdo dorado */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0 28px', borderLeft:'2px solid #c9a64c', paddingLeft:22 }} className="cita-cols">
              <p style={{ margin:0, fontFamily:'var(--sans)', fontSize:14, lineHeight:1.9, color:'#5a4f42', fontWeight:300 }}>
                MAMOTIS nace de la idea de dar una segunda vida a pieles con historia. Transformamos abrigos vintage en bolsos únicos.
              </p>
              <p style={{ margin:0, fontFamily:'var(--sans)', fontSize:14, lineHeight:1.9, color:'#5a4f42', fontWeight:300 }}>
                Donde la artesanía, la sostenibilidad y el diseño se unen para crear piezas con carácter.
              </p>
            </div>
          </div>
        </div>

      </div>
      <style>{`
        @media(max-width:640px){
          .cita-grid{ grid-template-columns:1fr!important; }
          .cita-grid > div:first-child{ min-height:260px!important; }
          .cita-cols{ grid-template-columns:1fr!important; gap:14px!important; }
        }
      `}</style>
    </section>
  );
}
