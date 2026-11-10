import Image from 'next/image';

const ROWS = [
  {
    eyebrow: 'El origen',
    fecha: 'C. 1960  —  DÉCADA PRODIGIOSA',
    titulo: 'Un abrigo comprado\npara toda la vida.',
    body: 'Las mujeres de los años sesenta lo sabían: la piel era la inversión definitiva. No se compraba un abrigo — se adquiría un legado. Se llevaba a la ópera, al paseo, a las cenas. Se cuidaba como se cuidan las cosas importantes.',
    img: '/historia/historia-01.jpg',
    alt: 'Mujeres con abrigos de piel vintage, años 60',
    reverse: false,
  },
  {
    eyebrow: 'El pasado',
    fecha: 'C. 1950  —  UNA ÉPOCA DE ESTILO',
    titulo: 'Elegancia\nque perdura.',
    body: 'Más que una prenda, el abrigo de piel era un símbolo de distinción. Acompañaba a las mujeres en sus viajes, en sus logros, en los momentos que importaban. Su belleza y su calidad trascendían modas y generaciones.',
    img: '/historia/historia-02.jpg',
    alt: 'Mujer elegante con abrigo de piel, años 50',
    reverse: true,
  },
  {
    eyebrow: 'El presente',
    fecha: 'HOY  —  LA TRANSFORMACIÓN',
    titulo: 'La misma piel.\nOtra vida.',
    body: 'Nuestras artesanas transforman cada abrigo a mano, con respeto y lentitud. El resultado es un bolso que lleva dos historias dentro: la de quien lo llevó antes y la que tú escribirás.',
    img: '/historia/historia-03.jpg',
    alt: 'Transformación artesanal de abrigo vintage en bolso',
    reverse: false,
  },
];

export default function Historia() {
  return (
    <section id="historia" style={{ background: '#f1e8d3', color: '#241b12' }}>

      {ROWS.map((r, i) => {
        const lines = r.titulo.split('\n');
        const bgText = i % 2 === 1 ? '#ede4cf' : '#f1e8d3';
        return (
          <div key={i} style={{
            display: 'grid',
            gridTemplateColumns: r.reverse ? '1fr 1fr' : '1fr 1fr',
            minHeight: 560,
          }} className="historia-row">

            {/* Columna TEXTO */}
            <div style={{
              order: r.reverse ? 2 : 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: 'clamp(50px,7vw,100px) clamp(36px,6vw,100px)',
              background: bgText,
            }}>
              <div style={{ fontSize: 9, letterSpacing: '0.48em', textTransform: 'uppercase', color: '#a38b5c', marginBottom: 14 }}>
                {r.eyebrow}
              </div>
              <div style={{ width: 42, height: 1, background: '#c9a64c', marginBottom: 32 }} />

              <h3 style={{
                fontFamily: 'var(--display)',
                fontSize: 'clamp(32px,3.4vw,54px)',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 1.18,
                margin: '0 0 28px',
                color: '#241b12',
              }}>
                {lines[0]}<br />
                <em style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 300, color: '#a07830' }}>
                  {lines[1]}
                </em>
              </h3>

              <p style={{ fontFamily: 'var(--sans)', fontSize: 14, lineHeight: 1.95, color: '#5a4f42', margin: '0 0 36px', maxWidth: 440, fontWeight: 300 }}>
                {r.body}
              </p>

              <div style={{ fontSize: 9, letterSpacing: '0.3em', color: '#a69a82', display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ whiteSpace: 'nowrap' }}>{r.fecha}</span>
                <div style={{ flex: 1, height: 1, background: '#d2c4a6' }} />
              </div>
            </div>

            {/* Columna FOTO — altura fija, foto contenida */}
            <div style={{
              order: r.reverse ? 1 : 2,
              background: bgText,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(24px,3.5vw,52px)',
            }} className="historia-foto-col">
              <div style={{
                position: 'relative',
                width: '100%',
                height: 'clamp(340px,45vw,540px)',
                borderRadius: 2,
                overflow: 'hidden',
              }}>
                <Image
                  src={r.img}
                  alt={r.alt}
                  fill
                  style={{ objectFit: 'cover', filter: 'grayscale(0.75) contrast(1.05)' }}
                />
              </div>
            </div>

          </div>
        );
      })}

      <style>{`
        @media(max-width:640px){
          .historia-row { grid-template-columns: 1fr !important; }
          .historia-row > div { order: unset !important; }
          .historia-foto-col { padding: 16px !important; }
          .historia-foto-col > div { height: 280px !important; }
        }
      `}</style>
    </section>
  );
}
