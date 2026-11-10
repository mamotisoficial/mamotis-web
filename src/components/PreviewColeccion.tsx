import Image from 'next/image';
import Link from 'next/link';

const BOLSOS = [
  { id:'001', nombre:'Visón Negro', img:'/bolsos/bolso-001.jpeg', wa:'https://wa.me/34605764097?text=Hola%2C%20me%20interesa%20el%20Vis%C3%B3n%20Negro%20001' },
  { id:'002', nombre:'Visón Camel', img:'/bolsos/bolso-002.jpeg', wa:'https://wa.me/34605764097?text=Hola%2C%20me%20interesa%20el%20Vis%C3%B3n%20Camel%20002' },
  { id:'003', nombre:'Astracán', img:'/bolsos/bolso-003.jpeg', wa:'https://wa.me/34605764097?text=Hola%2C%20me%20interesa%20el%20Astraci%C3%A1n%20003' },
];

export default function PreviewColeccion() {
  return (
    <section id="coleccion" style={{ background:'var(--cream)', padding:'90px 0 100px' }}>
      <div className="wrap">
        <div style={{ display:'grid', gridTemplateColumns:'1fr auto',
          alignItems:'flex-end', gap:24, marginBottom:60 }} className="coleccion-header">
          <div>
            <div style={{ fontSize:9, letterSpacing:'0.5em', textTransform:'uppercase',
              color:'var(--gold)', fontFamily:'var(--sans)', marginBottom:16 }}>La colección</div>
            <h2 style={{ fontFamily:'var(--display)', fontSize:'clamp(32px,4.5vw,58px)',
              fontWeight:400, lineHeight:1.08, color:'#241b12', margin:'0 0 6px' }}>
              Bolsos únicos,
            </h2>
            <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(32px,4.5vw,58px)',
              fontWeight:300, fontStyle:'italic', lineHeight:1.08, color:'#a07830', margin:0 }}>
              como tú.
            </h2>
          </div>
          <Link href="/coleccion" style={{
            display:'inline-flex', alignItems:'center', gap:12,
            border:'1px solid rgba(160,120,48,0.5)', padding:'14px 22px',
            fontSize:9, letterSpacing:'0.22em', textTransform:'uppercase',
            color:'#7a5c28', fontFamily:'var(--sans)', textDecoration:'none',
            whiteSpace:'nowrap', transition:'.2s',
          }}>
            Ver colección →
          </Link>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:22 }}
          className="coleccion-grid">
          {BOLSOS.map(b => (
            <Link href={b.wa} key={b.id} target="_blank"
              style={{ textDecoration:'none', display:'block' }} className="coleccion-item">
              <div style={{ position:'relative', aspectRatio:'0.8', overflow:'hidden',
                background:'#e4d9c4', marginBottom:16, borderRadius:2 }}>
                <Image src={b.img} alt={b.nombre} fill
                  style={{ objectFit:'cover', transition:'transform 0.6s ease' }}
                  className="bolso-img" />
              </div>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
                <span style={{ fontFamily:'var(--serif)', fontSize:17, fontStyle:'italic',
                  color:'#241b12', fontWeight:300 }}>{b.nombre}</span>
                <span style={{ fontSize:9, letterSpacing:'0.3em',
                  color:'var(--gold)', fontFamily:'var(--sans)' }}>{b.id}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        .coleccion-item:hover .bolso-img{transform:scale(1.04)!important;}
        @media(max-width:720px){
          .coleccion-header{grid-template-columns:1fr!important;}
          .coleccion-grid{grid-template-columns:1fr!important;gap:16px!important;}
        }
      `}</style>
    </section>
  );
}
