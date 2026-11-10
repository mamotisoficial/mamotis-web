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
        return (
          <div key={i} style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            minHeight: 540,
          }} className="historia-row">

            {/* Columna texto */}
            <div style={{
              order: r.reverse ? 2 : 1,
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              padding: 'clamp(50px,7vw,100px) clamp(36px,6vw,100px)',
              background: i % 2 === 1 ? '#ede4cf' : '#f1e8d3',
            }}>
              {/* Eyebrow */}
              <div style={{ fontSize: 9, letterSpacing: '0.48em', textTransform: 'uppercase', color: '#a38b5c', marginBottom: 14 }}>
                {r.eyebrow}
              </div>
              {/* Línea dorada */}
              <div style={{ width: 42, height: 1, background: '#c9a64c', marginBottom: 32 }} />

              {/* Título Cormorant */}
              <h3 style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(32px,3.4vw,54px)',
                fontStyle: 'italic',
                fontWeight: 300,
                lineHeight: 1.18,
                margin: '0 0 28px',
                color: '#241b12',
              }}>
                {lines[0]}<br />
                <span style={{ color: '#a07830' }}>{lines[1]}</span>
              </h3>

              {/* Cuerpo */}
              <p style={{ fontFamily: 'var(--sans)', fontSize: 14, lineHeight: 1.95, color: '#5a4f42', margin: '0 0 36px', maxWidth: 440, fontWeight: 300 }}>
                {r.body}
              </p>

              {/* Fecha con línea */}
              <div style={{ fontSize: 9, letterSpacing: '0.3em', color: '#a69a82', display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ whiteSpace: 'nowrap' }}>{r.fecha}</span>
                <div style={{ flex: 1, height: 1, background: '#d2c4a6' }} />
              </div>
            </div>

            {/* Columna foto */}
            <div style={{
              order: r.reverse ? 1 : 2,
              position: 'relative',
              minHeight: 480,
              overflow: 'hidden',
              margin: 'clamp(24px,3.5vw,52px)',
              borderRadius: 2,
            }} className="historia-foto">
              <Image
                src={r.img}
                alt={r.alt}
                fill
                style={{ objectFit: 'cover', filter: 'grayscale(0.85) contrast(1.05)' }}
              />
            </div>

          </div>
        );
      })}

      <style>{`
        @media(max-width:640px){
          .historia-row{ grid-template-columns:1fr!important; min-height:auto!important; }
          .historia-row > div{ order:unset!important; }
          .historia-foto{ min-height:280px!important; margin:16px!important; order:1!important; }
        }
      `}</style>
    </section>
  );
}
