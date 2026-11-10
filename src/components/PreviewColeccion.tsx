import Image from 'next/image';
import Link from 'next/link';

const BOLSOS = [
  { id:'001', nombre:'Visón Negro', img:'/bolsos/bolso-001.jpeg', wa:'https://wa.me/34605764097?text=Hola%2C%20me%20interesa%20el%20Vis%C3%B3n%20Negro%20001' },
  { id:'002', nombre:'Visón Camel', img:'/bolsos/bolso-002.jpeg', wa:'https://wa.me/34605764097?text=Hola%2C%20me%20interesa%20el%20Vis%C3%B3n%20Camel%20002' },
  { id:'003', nombre:'Astracán', img:'/bolsos/bolso-003.jpeg', wa:'https://wa.me/34605764097?text=Hola%2C%20me%20interesa%20el%20Astraci%C3%A1n%20003' },
];

export default function PreviewColeccion() {
  return (
    <section id="coleccion" style={{ background: 'var(--cream)', padding: '80px 0 90px' }}>
      <div className="wrap">
        {/* Header: texto izquierda + botón derecha */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'flex-end', gap: 24, marginBottom: 56 }} className="coleccion-header">
          <div>
            <div style={{ fontSize: 9, letterSpacing: '0.48em', textTransform: 'uppercase', color: '#a38b5c', marginBottom: 14 }}>La colección</div>
            <h2 style={{ font: `italic clamp(32px,4.5vw,58px)/1.08 var(--serif)`, color: '#241b12', margin: 0 }}>
              Bolsos únicos,<br />como tú.
            </h2>
          </div>
          <Link href="/coleccion"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 14, border: '1px solid #9a7d4a', padding: '14px 20px', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6b5530', whiteSpace: 'nowrap', textDecoration: 'none' }}>
            Ver colección →
          </Link>
        </div>

        {/* 3 bolsos en fila */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="coleccion-grid">
          {BOLSOS.map(b => (
            <Link href={b.wa} key={b.id} target="_blank" style={{ textDecoration: 'none', display: 'block' }} className="coleccion-item">
              <div style={{ position: 'relative', aspectRatio: '0.8', overflow: 'hidden', background: '#e8ddc5', marginBottom: 14 }}>
                <Image src={b.img} alt={b.nombre} fill style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }} className="bolso-img" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ font: `italic 17px var(--serif)`, color: '#241b12' }}>{b.nombre}</span>
                <span style={{ fontSize: 9, letterSpacing: '0.3em', color: '#a38b5c' }}>{b.id}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .coleccion-item:hover .bolso-img { transform: scale(1.04) !important; }
        @media(max-width:640px){
          .coleccion-header{grid-template-columns:1fr!important;}
          .coleccion-grid{grid-template-columns:1fr!important; gap:14px!important;}
        }
        @media(max-width:900px) and (min-width:641px){
          .coleccion-grid{grid-template-columns:1fr 1fr!important;}
        }
      `}</style>
    </section>
  );
}
