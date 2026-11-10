import Image from 'next/image';
import Link from 'next/link';

const BOLSOS = Array.from({length:14},(_,i)=>({
  src: `/bolsos/bolso-${String(i+1).padStart(3,'0')}.jpeg`,
  alt: `Bolso MAMOTIS pieza ${i+1}`,
  label: 'Una sola pieza',
  num: String(i+1).padStart(2,'0'),
}));

export default function Coleccion() {
  return (
    <section id="coleccion" style={{ background: '#f1e8d3', color: '#21180f', padding: '100px 0 115px' }}>
      <div className="wrap">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 42, flexWrap: 'wrap', gap: 20 }}>
          <div>
            <span className="eyebrow eyebrow-c" style={{ color: '#aa8a42' }}>Las piezas</span>
            <h2 style={{ font: `italic clamp(38px,4.5vw,60px)/1.08 var(--serif)`, margin: '8px 0 0' }}>
              Bolsos únicos,<br /><span style={{ color: '#ae8737' }}>como tú.</span>
            </h2>
          </div>
          <p style={{ maxWidth: 360, color: '#746958', font: `14px/1.8 var(--serif)`, margin: 0 }}>
            Cada bolso nace de una pieza anterior. Ninguno es igual a otro. Descubre una selección de creaciones MAMOTIS y encuentra la que continuará su historia.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18 }} className="bolsos-grid">
          {BOLSOS.map(b => (
            <article key={b.num} style={{ minWidth: 0 }}>
              <div style={{ background: '#ded3bd', overflow: 'hidden', aspectRatio: '0.78', position: 'relative' }}>
                <Image src={b.src} alt={b.alt} fill style={{ objectFit: 'cover', transition: 'transform .7s' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, padding: '14px 2px 0', fontSize: 9, letterSpacing: '0.17em', textTransform: 'uppercase', color: '#85765b' }}>
                <span>{b.label}</span><span>{b.num}</span>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 42 }}>
          <Link href="https://wa.me/34605764097" target="_blank" className="btn-gold" style={{ color: '#241b12', borderColor: '#9f7c37', display: 'inline-flex', alignItems: 'center', gap: 20 }}>
            Consultar piezas disponibles <span>⟶</span>
          </Link>
        </div>
      </div>
      <style>{`
        @media(max-width:640px){ .bolsos-grid{grid-template-columns:repeat(2,1fr)!important;gap:12px!important} }
        @media(max-width:900px){ .bolsos-grid{grid-template-columns:repeat(2,1fr)!important} }
      `}</style>
    </section>
  );
}
