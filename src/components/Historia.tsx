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
    reverse: false,
  },
];

export default function Historia() {
  return (
    <section id="historia" style={{ background: '#f1e8d3' }}>
      {ROWS.map((r, i) => (
        <div key={i} style={{ display:'grid', gridTemplateColumns:'1fr 1fr', minHeight:560 }}
          className="historia-row">

          {/* Texto */}
          <div style={{
            order: r.reverse ? 2 : 1,
            display:'flex', flexDirection:'column', justifyContent:'center',
            padding:'clamp(50px,7vw,100px) clamp(36px,6vw,100px)',
            background: i % 2 === 1 ? '#ede4cf' : '#f1e8d3',
          }}>
            <div style={{ fontSize:9, letterSpacing:'0.5em', textTransform:'uppercase',
              color:'var(--gold)', fontFamily:'var(--sans)', marginBottom:14 }}>
              {r.eyebrow}
            </div>
            <div style={{ width:40, height:1, background:'var(--gold)', opacity:0.6, marginBottom:34 }} />
            <h3 style={{ fontFamily:'var(--display)', fontSize:'clamp(30px,3.4vw,52px)',
              fontWeight:400, lineHeight:1.1, margin:'0 0 6px', color:'#241b12' }}>
              {r.tituloA}
            </h3>
            <h3 style={{ fontFamily:'var(--serif)', fontSize:'clamp(30px,3.4vw,52px)',
              fontWeight:300, fontStyle:'italic', lineHeight:1.1, margin:'0 0 30px', color:'#a07830' }}>
              {r.tituloB}
            </h3>
            <p style={{ fontFamily:'var(--sans)', fontSize:14, lineHeight:1.95,
              color:'#5a4f42', margin:'0 0 36px', maxWidth:430, fontWeight:300 }}>
              {r.body}
            </p>
            <div style={{ fontSize:9, letterSpacing:'0.3em', color:'#b8a888',
              display:'flex', alignItems:'center', gap:16 }}>
              <span style={{ whiteSpace:'nowrap' }}>{r.fecha}</span>
              <div style={{ flex:1, height:1, background:'#d2c4a6' }} />
            </div>
          </div>

          {/* Foto */}
          <div style={{
            order: r.reverse ? 1 : 2,
            background: i % 2 === 1 ? '#ede4cf' : '#f1e8d3',
            display:'flex', alignItems:'center', justifyContent:'center',
            padding:'clamp(28px,4vw,60px)',
          }} className="historia-foto-col">
            <div style={{ position:'relative', width:'100%',
              height:'clamp(360px,46vw,560px)', borderRadius:2, overflow:'hidden' }}>
              <Image src={r.img} alt={r.alt} fill
                style={{ objectFit:'cover', filter:'grayscale(0.7) contrast(1.05)' }} />
            </div>
          </div>

        </div>
      ))}
      <style>{`
        @media(max-width:720px){
          .historia-row{grid-template-columns:1fr!important;}
          .historia-row>div{order:unset!important;}
          .historia-foto-col{padding:16px!important;}
          .historia-foto-col>div{height:260px!important;}
        }
      `}</style>
    </section>
  );
}
