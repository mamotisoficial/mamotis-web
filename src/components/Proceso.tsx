import Image from 'next/image';

const CARDS = [
  { n:'01', title:'Selección', desc:'Elegimos piezas vintage con historia y carácter.', img:'/proceso/proceso-01.jpg' },
  { n:'02', title:'Transformación', desc:'Diseño y confección artesanal, una a una.', img:'/proceso/proceso-02.jpg' },
  { n:'03', title:'Pieza única', desc:'Un bolso irrepetible, listo para su nueva vida.', img:'/proceso/proceso-03.jpg' },
];

export default function Proceso() {
  return (
    <section id="proceso" style={{ padding:'72px 0 80px', background:'#090705' }}>
      <div className="wrap">
        <div className="section-label">El proceso</div>
        <div style={{ textAlign:'center', marginTop:16, marginBottom:48 }}>
          <h2 style={{ fontFamily:'var(--display)', fontSize:'clamp(32px,4.2vw,54px)',
            fontWeight:400, lineHeight:1.08, color:'var(--cream)', margin:0, display:'inline' }}>
            Artesanía que{' '}
          </h2>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(32px,4.2vw,54px)',
            fontWeight:300, fontStyle:'italic', lineHeight:1.08, color:'var(--gold)', margin:0, display:'inline' }}>
            transforma.
          </h2>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16 }} className="proceso-grid">
          {CARDS.map((c) => (
            <article key={c.n} style={{ overflow:'hidden', background:'#2a1f10', borderRadius:2 }}>
              <div style={{ position:'relative', width:'100%', height:260 }}>
                <Image src={c.img} alt={c.title} fill
                  style={{ objectFit:'cover', filter:'brightness(0.72)' }} />
                <div style={{ position:'absolute', inset:'30% 0 0',
                  background:'linear-gradient(to bottom, transparent 50%, rgba(26,15,5,0.80) 80%, rgba(26,15,5,0.95) 100%)' }} />
              </div>
              <div style={{ padding:'18px 24px 28px' }}>
                <div style={{ fontFamily:'var(--serif)', fontSize:48, fontStyle:'italic',
                  fontWeight:300, color:'var(--gold)', lineHeight:1, opacity:0.85, marginBottom:10 }}>
                  {c.n}
                </div>
                <h3 style={{ fontFamily:'var(--display)', fontSize:20, fontWeight:400,
                  letterSpacing:'0.04em', margin:'0 0 8px', color:'var(--cream)' }}>
                  {c.title}
                </h3>
                <p style={{ fontFamily:'var(--serif)', fontSize:15, fontStyle:'italic',
                  color:'#c4b89a', margin:0, lineHeight:1.7 }}>
                  {c.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:860px){
          .proceso-grid{grid-template-columns:1fr!important; gap:16px!important; max-width:520px; margin:0 auto;}
        }
      `}</style>
    </section>
  );
}
