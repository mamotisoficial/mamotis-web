import Image from 'next/image';
import Link from 'next/link';

const BOLSOS = [
  { id:'001', nombre:'Visón Negro', img:'/bolsos/bolso-001.jpeg', wa:'https://wa.me/34605764097?text=Hola%2C%20me%20interesa%20el%20bolso%20001' },
  { id:'002', nombre:'Visón Camel', img:'/bolsos/bolso-002.jpeg', wa:'https://wa.me/34605764097?text=Hola%2C%20me%20interesa%20el%20bolso%20002' },
  { id:'003', nombre:'Astracán', img:'/bolsos/bolso-003.jpeg', wa:'https://wa.me/34605764097?text=Hola%2C%20me%20interesa%20el%20bolso%20003' },
  { id:'004', nombre:'Visón Arena', img:'/bolsos/bolso-004.jpeg', wa:'https://wa.me/34605764097?text=Hola%2C%20me%20interesa%20el%20bolso%20004' },
  { id:'005', nombre:'Piel Vintage', img:'/bolsos/bolso-005.jpeg', wa:'https://wa.me/34605764097?text=Hola%2C%20me%20interesa%20el%20bolso%20005' },
  { id:'006', nombre:'Noche Oscura', img:'/bolsos/bolso-006.jpeg', wa:'https://wa.me/34605764097?text=Hola%2C%20me%20interesa%20el%20bolso%20006' },
  { id:'007', nombre:'Tierra Siena', img:'/bolsos/bolso-007.jpeg', wa:'https://wa.me/34605764097?text=Hola%2C%20me%20interesa%20el%20bolso%20007' },
  { id:'008', nombre:'Crepúsculo', img:'/bolsos/bolso-008.jpeg', wa:'https://wa.me/34605764097?text=Hola%2C%20me%20interesa%20el%20bolso%20008' },
];

export default function PreviewColeccion() {
  return (
    <section id="coleccion" style={{ background:'var(--cream)', padding:'90px 0 100px' }}>
      <div className="wrap" style={{ width:'min(1320px,90vw)', margin:'0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 56 }}>
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

        {/* Grid de bolsos — 4 columnas desktop, 2 mobile */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:20 }}
          className="coleccion-grid">
          {BOLSOS.map(b => (
            <Link href={b.wa} key={b.id} target="_blank"
              style={{ textDecoration:'none', display:'block' }} className="coleccion-item">
              <div style={{ position:'relative', aspectRatio:'0.85', overflow:'hidden',
                background:'#e4d9c4', marginBottom:12, borderRadius:2 }}>
                <Image src={b.img} alt={b.nombre} fill
                  style={{ objectFit:'cover', transition:'transform 0.6s ease' }}
                  className="bolso-img" />
              </div>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
                <span style={{ fontFamily:'var(--serif)', fontSize:15, fontStyle:'italic',
                  color:'#241b12', fontWeight:300 }}>{b.nombre}</span>
                <span style={{ fontSize:9, letterSpacing:'0.3em',
                  color:'var(--gold)', fontFamily:'var(--sans)' }}>{b.id}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA ver más */}
        <div style={{ marginTop:48, textAlign:'center' }}>
          <Link href="https://wa.me/34605764097?text=Hola%2C%20quiero%20ver%20toda%20la%20colección%20MAMOTIS"
            target="_blank" style={{
              display:'inline-flex', alignItems:'center', gap:12,
              border:'1px solid rgba(160,120,48,0.5)', padding:'14px 28px',
              fontSize:9, letterSpacing:'0.22em', textTransform:'uppercase',
              color:'#7a5c28', fontFamily:'var(--sans)', textDecoration:'none',
            }}>
            Ver todas las piezas → WhatsApp
          </Link>
        </div>
      </div>
      <style>{`
        .coleccion-item:hover .bolso-img{transform:scale(1.04)!important;}
        @media(max-width:900px){.coleccion-grid{grid-template-columns:repeat(2,1fr)!important;gap:14px!important;}}
        @media(max-width:480px){.coleccion-grid{grid-template-columns:1fr 1fr!important;gap:10px!important;}}
      `}</style>
    </section>
  );
}
