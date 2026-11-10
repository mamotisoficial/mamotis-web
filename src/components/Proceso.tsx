import Image from 'next/image';

const CARDS = [
  { n:'01', title:'Selección', desc:'Elegimos piezas vintage con historia y carácter.', img:'/proceso/proceso-01.jpg' },
  { n:'02', title:'Transformación', desc:'Diseño y confección artesanal, una a una.', img:'/proceso/proceso-02.jpg' },
  { n:'03', title:'Pieza única', desc:'Un bolso irrepetible, listo para su nueva vida.', img:'/proceso/proceso-03.jpg' },
];

export default function Proceso() {
  return (
    <section id="proceso" style={{ padding:'90px 0 100px', background:'#090705' }}>
      <div className="wrap">
        <div className="section-label">El proceso</div>
        <div style={{ textAlign:'center', marginTop:20, marginBottom:64 }}>
          <h2 style={{ fontFamily:'var(--display)', fontSize:'clamp(34px,4.2vw,58px)',
            fontWeight:400, lineHeight:1.08, color:'var(--cream)', margin:0, display:'inline' }}>
            Artesanía que{' '}
          </h2>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(34px,4.2vw,58px)',
            fontWeight:300, fontStyle:'italic', lineHeight:1.08, color:'var(--gold)', margin:0, display:'inline' }}>
            transforma.
          </h2>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20 }} className="proceso-grid">
          {CARDS.map((c) => (
            <article key={c.n} style={{ overflow:'hidden', background:'#1a1108', borderRadius:2 }}>
              {/* Foto sin gap — directamente encima del texto */}
              <div style={{ position:'relative', width:'100%', height:280 }}>
                <Image src={c.img} alt={c.title} fill
                  style={{ objectFit:'cover', filter:'brightness(0.52)' }} />
                <div style={{ position:'absolute', inset:'25% 0 0',
                  background:'linear-gradient(to bottom, transparent 55%, rgba(26,17,8,0.75) 80%, rgba(26,17,8,0.95) 100%)' }} />
              </div>
              {/* Texto pegado a la foto */}
              <div style={{ padding:'20px 28px 32px' }}>
                <div style={{ fontFamily:'var(--serif)', fontSize:54, fontStyle:'italic',
                  fontWeight:300, color:'var(--gold)', lineHeight:1, opacity:0.85, marginBottom:14 }}>
                  {c.n}
                </div>
                <h3 style={{ fontFamily:'var(--display)', fontSize:22, fontWeight:400,
                  letterSpacing:'0.04em', margin:'0 0 10px', color:'var(--cream)' }}>
                  {c.title}
                </h3>
                <p style={{ fontFamily:'var(--serif)', fontSize:16, fontStyle:'italic',
                  color:'#c4b89a', margin:0, lineHeight:1.8 }}>
                  {c.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:720px){
          .proceso-grid{grid-template-columns:1fr!important; gap:14px!important;}
        }
      `}</style>
    </section>
  );
}
