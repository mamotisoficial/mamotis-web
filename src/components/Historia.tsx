import Image from 'next/image';

const ROWS = [
  {
    eyebrow: 'C. 1960 — Década prodigiosa',
    h3: ['Un abrigo comprado ', 'para toda la vida.'],
    body: 'Las mujeres de los años sesenta lo sabían: la piel era la inversión definitiva. No se compraba un abrigo; se adquiría un legado. Se llevaba a la ópera, al paseo, a las cenas. Se cuidaba como se cuidan las cosas importantes.',
    caption: 'UNA PRENDA CON HISTORIA · UNA MATERIA CON MEMORIA',
    img: '/historia/historia-01.jpg',
    alt: 'Fotografía histórica de mujeres con abrigos vintage',
  },
  {
    eyebrow: 'C. 1967 — La herencia',
    h3: ['Guardado en un armario ', 'lleno de historia.'],
    body: 'Muchos de estos abrigos llevan décadas en el mismo lugar. Su dueña original los dejó un día y nunca volvieron a usarse. Demasiado valiosos para tirar. Demasiado olvidados para usar. Cuando los encontramos, les damos voz.',
    caption: 'PIELES VINTAGE RESCATADAS · NUEVOS COMIENZOS',
    img: '/historia/historia-02.jpg',
    alt: 'Imagen de archivo de mujeres con prendas de piel',
  },
  {
    eyebrow: 'Hoy — La transformación',
    h3: ['La misma piel. ', 'Otra vida.'],
    body: 'Nuestras artesanas transforman cada abrigo a mano, con respeto y lentitud. El resultado es un bolso que lleva dos historias dentro: la de quien lo llevó antes. Y la que tú escribirás.',
    caption: 'ARTESANÍA · REUTILIZACIÓN · PIEZAS ÚNICAS',
    img: '/historia/historia-03.jpg',
    alt: 'Fotografía histórica de abrigos y moda vintage',
  },
];

export default function Historia() {
  return (
    <section id="historia" style={{ background: '#f1e8d3', color: '#241b12', paddingTop: 32 }}>
      <div className="wrap">
        <div className="section-label" style={{ color: '#a38b5c' }}>El origen</div>
      </div>

      {ROWS.map((r, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 470, alignItems: 'stretch', marginTop: 55 }} className="historia-row">
          <div style={{ minHeight: 420, overflow: 'hidden', order: i % 2 === 0 ? 0 : 2 }} className="historia-img">
            <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: 420 }}>
              <Image src={r.img} alt={r.alt} fill style={{ objectFit: 'cover', filter: 'grayscale(1)', transition: 'transform .8s' }} />
            </div>
          </div>
          <div style={{ padding: 'clamp(35px,6vw,100px) clamp(32px,6vw,100px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="eyebrow eyebrow-c" style={{ color: '#aa8a42', fontSize: 9 }}>{r.eyebrow}</span>
            <h3 style={{ font: `italic clamp(30px,3vw,43px)/1.2 var(--serif)`, margin: '18px 0 22px' }}>
              {r.h3[0]}<span style={{ color: '#b89548' }}>{r.h3[1]}</span>
            </h3>
            <p style={{ font: `15px/1.9 var(--sans)`, color: '#655a4b', margin: 0, borderLeft: '2px solid #d9c89f', paddingLeft: 22 }}>{r.body}</p>
            <div style={{ fontSize: 9, letterSpacing: '0.16em', color: '#a69a82', marginTop: 26 }}>{r.caption}</div>
          </div>
        </div>
      ))}

      <style>{`
        @media(max-width:640px){
          .historia-row{grid-template-columns:1fr!important;margin-top:35px!important;min-height:auto!important}
          .historia-row .historia-img{order:0!important;min-height:260px!important;height:260px}
        }
        @media(max-width:900px){
          .historia-row{min-height:360px!important}
        }
      `}</style>
    </section>
  );
}
