import Image from 'next/image';

export default function Cita() {
  return (
    <section style={{ background: '#f1e8d3' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', minHeight: 520 }} className="cita-grid">

        {/* Foto izquierda */}
        <div style={{ position: 'relative', minHeight: 440, overflow: 'hidden' }}>
          <Image src="/historia/manifiesto-piel.jpg" alt="Piel vintage MAMOTIS" fill
            style={{ objectFit: 'cover', objectPosition: 'center' }} />
          <div style={{ position:'absolute', inset:0,
            background:'linear-gradient(90deg, transparent 50%, #f1e8d3 100%)' }} />
        </div>

        {/* Texto derecha */}
        <div style={{ display:'flex', alignItems:'center',
          padding:'clamp(60px,8vw,110px) clamp(40px,7vw,100px)' }}>
          <div>
            <div style={{ fontSize:9, letterSpacing:'0.5em', textTransform:'uppercase',
              color:'var(--gold)', fontFamily:'var(--sans)', marginBottom:18 }}>
              La historia
            </div>
            <div style={{ width:40, height:1, background:'var(--gold)', opacity:0.6, marginBottom:38 }} />
            <h2 style={{ fontFamily:'var(--display)', fontSize:'clamp(30px,3.8vw,54px)',
              fontWeight:400, lineHeight:1.1, color:'#241b12', margin:'0 0 10px' }}>
              Del pasado,
            </h2>
            <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(30px,3.8vw,54px)',
              fontWeight:300, fontStyle:'italic', lineHeight:1.1, color:'#a07830', margin:'0 0 38px' }}>
              una nueva historia.
            </h2>
            <div style={{ borderLeft:'2px solid rgba(201,168,76,0.4)', paddingLeft:22,
              display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0 28px' }} className="cita-cols">
              <p style={{ margin:0, fontFamily:'var(--sans)', fontSize:14, lineHeight:1.9,
                color:'#5a4f42', fontWeight:300 }}>
                MAMOTIS nace de la idea de dar una segunda vida a pieles con historia. Transformamos abrigos vintage en bolsos únicos.
              </p>
              <p style={{ margin:0, fontFamily:'var(--sans)', fontSize:14, lineHeight:1.9,
                color:'#5a4f42', fontWeight:300 }}>
                Artesanía, sostenibilidad y diseño que se unen para crear piezas con carácter propio.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:720px){
          .cita-grid{grid-template-columns:1fr!important;}
          .cita-grid>div:first-child{min-height:280px!important;}
          .cita-cols{grid-template-columns:1fr!important;gap:14px!important;}
        }
      `}</style>
    </section>
  );
}
