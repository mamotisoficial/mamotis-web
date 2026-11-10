import Image from 'next/image';

const ROWS = [
  {
    eyebrow: 'El origen',
    fecha: 'C. 1960  —  DÉCADA PRODIGIOSA',
    tituloA: 'Un abrigo comprado',
    tituloB: 'para toda la vida.',
    body: 'Las mujeres de los años sesenta lo sabían: la piel era la inversión definitiva. No se compraba un abrigo — se adquiría un legado. Se llevaba a la ópera, al paseo, a las cenas. Se cuidaba como se cuidan las cosas importantes.',
    img: '/historia/historia-01.jpg',
    alt: 'Mujeres con abrigos de piel vintage, años 60',
    // Panorámica 1774x887 — centrar verticalmente en la parte superior donde están las señoras
    pos: 'center top',
    reverse: false,
  },
  {
    eyebrow: 'El pasado',
    fecha: 'C. 1950  —  UNA ÉPOCA DE ESTILO',
    tituloA: 'Elegancia',
    tituloB: 'que perdura.',
    body: 'Más que una prenda, el abrigo de piel era un símbolo de distinción. Acompañaba a las mujeres en sus viajes, en sus logros, en los momentos que importaban. Su belleza y su calidad trascendían modas y generaciones.',
    img: '/historia/historia-02.jpg',
    alt: 'Mujer elegante con abrigo de piel, años 50',
    pos: 'center top',
    reverse: true,
  },
  {
    eyebrow: 'El presente',
    fecha: 'HOY  —  LA TRANSFORMACIÓN',
    tituloA: 'La misma piel.',
    tituloB: 'Otra vida.',
    body: 'Nuestras artesanas transforman cada abrigo a mano, con respeto y lentitud. El resultado es un bolso que lleva dos historias dentro: la de quien lo llevó antes y la que tú escribirás.',
    img: '/historia/historia-03.jpg',
    alt: 'Artesana transformando abrigo en bolso MAMOTIS',
    pos: 'center center',
    reverse: false,
  },
];

export default function Historia() {
  return (
    <section id="historia" style={{ background: '#f1e8d3' }}>
      {ROWS.map((r, i) => (
        <div key={i} style={{ display:'grid', gridTemplateColumns:'1fr 1fr', minHeight:620 }}
          className="historia-row">

          {/* Texto */}
          <div style={{
            order: r.reverse ? 2 : 1,
            display:'flex', flexDirection:'column', justifyContent:'center',
            padding:'clamp(50px,7vw,100px) clamp(36px,6vw,100px)',
            background: i % 2 === 1 ? '#ede4cf' : '#f1e8d3',
          }}>
            <div style={{ fontSize:10, letterSpacing:'0.5em', textTransform:'uppercase',
              color:'var(--gold)', fontFamily:'var(--sans)', marginBottom:16 }}>
              {r.eyebrow}
            </div>
            <div style={{ width:40, height:1, background:'var(--gold)', opacity:0.6, marginBottom:36 }} />
            <h3 style={{ fontFamily:'var(--display)', fontSize:'clamp(34px,3.8vw,58px)',
              fontWeight:400, lineHeight:1.08, margin:'0 0 8px', color:'#241b12' }}>
              {r.tituloA}
            </h3>
            <h3 style={{ fontFamily:'var(--serif)', fontSize:'clamp(34px,3.8vw,58px)',
              fontWeight:300, fontStyle:'italic', lineHeight:1.08, margin:'0 0 36px', color:'#a07830' }}>
              {r.tituloB}
            </h3>
            <p style={{ fontFamily:'var(--sans)', fontSize:16, lineHeight:2,
              color:'#5a4f42', margin:'0 0 40px', maxWidth:'100%', fontWeight:300 }}>
              {r.body}
            </p>
            <div style={{ fontSize:9, letterSpacing:'0.3em', color:'#b8a888',
              display:'flex', alignItems:'center', gap:16 }}>
              <span style={{ whiteSpace:'nowrap' }}>{r.fecha}</span>
              <div style={{ flex:1, height:1, background:'#d2c4a6' }} />
            </div>
          </div>

          {/* Foto — ocupa toda la columna sin padding extra */}
          <div style={{
            order: r.reverse ? 1 : 2,
            position: 'relative',
            minHeight: 'clamp(400px,50vw,600px)',
            overflow: 'hidden',
            background: i % 2 === 1 ? '#ede4cf' : '#f1e8d3',
          }} className="historia-foto-col">
            <Image
              src={r.img}
              alt={r.alt}
              fill
              style={{
                objectFit: 'cover',
                objectPosition: r.pos,
                filter: 'sepia(0.15) contrast(1.05) brightness(0.97)',
              }}
            />
          </div>

        </div>
      ))}
      <style>{`
        @media(max-width:720px){
          .historia-row{grid-template-columns:1fr!important;}
          .historia-row>div{order:unset!important;}
          .historia-foto-col{min-height:260px!important;}
        }
      `}</style>
    </section>
  );
}
