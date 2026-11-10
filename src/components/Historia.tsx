import Image from 'next/image';

const ROWS = [
  {
    eyebrow: 'El origen',
    fecha: 'C. 1960  —  DÉCADA PRODIGIOSA',
    h3a: 'Un abrigo comprado',
    h3b: 'para toda la vida.',
    body: 'Las mujeres de los años sesenta lo sabían: la piel era la inversión definitiva. No se compraba un abrigo — se adquiría un legado. Se llevaba a la ópera, al paseo, a las cenas. Se cuidaba como se cuidan las cosas importantes.',
    img: '/historia/historia-01.jpg',
    alt: 'Mujeres con abrigos de piel vintage, años 60',
    // texto izquierda, foto derecha
    reverse: false,
  },
  {
    eyebrow: 'El origen',
    fecha: 'C. 1950  —  UNA ÉPOCA DE ESTILO',
    h3a: 'Elegancia',
    h3b: 'que perdura.',
    body: 'Más que una prenda, el abrigo de piel era un símbolo de distinción. Acompañaba a las mujeres en sus viajes, en sus logros, en los momentos que importaban. Su belleza y su calidad trascendían modas y generaciones.',
    img: '/historia/historia-02.jpg',
    alt: 'Mujer elegante con abrigo de piel, años 50',
    // foto izquierda, texto derecha
    reverse: true,
  },
  {
    eyebrow: 'El origen',
    fecha: 'HOY  —  LA TRANSFORMACIÓN',
    h3a: 'La misma piel.',
    h3b: 'Otra vida.',
    body: 'Nuestras artesanas transforman cada abrigo a mano, con respeto y lentitud. El resultado es un bolso que lleva dos historias dentro: la de quien lo llevó antes. Y la que tú escribirás.',
    img: '/historia/historia-03.jpg',
    alt: 'Transformación artesanal de abrigo vintage en bolso',
    reverse: false,
  },
];

export default function Historia() {
  return (
    <section id="historia" style={{ background: '#f1e8d3', color: '#241b12' }}>
      {ROWS.map((r, i) => (
        <div key={i} style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: 520,
        }} className="historia-row">

          {/* Texto */}
          <div style={{
            order: r.reverse ? 2 : 1,
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            padding: 'clamp(40px,6vw,90px) clamp(32px,7vw,110px)',
            background: '#f1e8d3',
          }}>
            {/* Eyebrow */}
            <div style={{ fontSize: 10, letterSpacing: '0.42em', textTransform: 'uppercase', color: '#a38b5c', marginBottom: 16 }}>
              {r.eyebrow}
            </div>
            {/* Línea dorada */}
            <div style={{ width: 48, height: 1, background: '#a38b5c', marginBottom: 36 }} />

            {/* Título dos líneas */}
            <h3 style={{ font: `italic clamp(32px,3.2vw,52px)/1.15 var(--serif)`, margin: '0 0 28px', color: '#241b12' }}>
              {r.h3a}<br />
              <span style={{ color: '#ae8737' }}>{r.h3b}</span>
            </h3>

            {/* Cuerpo */}
            <p style={{ font: `15px/1.9 var(--sans)`, color: '#5a4f42', margin: '0 0 36px', maxWidth: 460 }}>
              {r.body}
            </p>

            {/* Fecha al pie */}
            <div style={{ fontSize: 9, letterSpacing: '0.3em', color: '#a69a82', display: 'flex', alignItems: 'center', gap: 16 }}>
              <span>{r.fecha}</span>
              <div style={{ flex: 1, height: 1, background: '#d2c4a6' }} />
            </div>
          </div>

          {/* Foto */}
          <div style={{
            order: r.reverse ? 1 : 2,
            position: 'relative',
            minHeight: 480,
            overflow: 'hidden',
            margin: 'clamp(20px,3vw,48px)',
            borderRadius: 2,
          }} className="historia-foto">
            <Image
              src={r.img}
              alt={r.alt}
              fill
              style={{ objectFit: 'cover', filter: 'grayscale(1)' }}
            />
          </div>

        </div>
      ))}

      <style>{`
        @media(max-width:640px){
          .historia-row{
            grid-template-columns:1fr!important;
            min-height:auto!important;
          }
          .historia-row > div:first-child{ order:2!important; }
          .historia-row > div:last-child{ order:1!important; }
          .historia-foto{ min-height:280px!important; margin:16px!important; }
        }
        @media(max-width:900px){
          .historia-row{ min-height:400px!important; }
        }
      `}</style>
    </section>
  );
}
