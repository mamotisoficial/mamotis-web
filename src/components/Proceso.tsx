import Image from 'next/image';

const CARDS = [
  { n: '01', title: 'Selección', desc: 'Piezas vintage con historia.', img: '/proceso/proceso-01.jpg' },
  { n: '02', title: 'Transformación', desc: 'Diseño y confección artesanal.', img: '/proceso/proceso-02.jpg' },
  { n: '03', title: 'Pieza única', desc: 'Un bolso irrepetible.', img: '/proceso/proceso-03.jpg' },
];

export default function Proceso() {
  return (
    <section id="proceso" style={{ padding: '105px 0 115px', background: 'linear-gradient(120deg,#0b0907,#17100b 55%,#090806)', position: 'relative', overflow: 'hidden' }}>
      <div className="wrap">
        <div className="section-label" style={{ color: '#a38b5c' }}>El proceso</div>
        <h2 style={{ textAlign: 'center', font: `italic clamp(36px,4vw,54px) var(--serif)`, margin: '18px 0 55px', color: 'var(--cream)' }}>
          Artesanía que <span style={{ color: 'var(--gold2)' }}>transforma.</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 }} className="proceso-grid">
          {CARDS.map(c => (
            <article key={c.n} style={{ position: 'relative', minHeight: 330, overflow: 'hidden', background: '#21180f' }} className="proceso-card">
              <div style={{ position: 'relative', width: '100%', height: 330 }}>
                <Image src={c.img} alt={c.title} fill style={{ objectFit: 'cover', filter: 'brightness(0.64)', transition: '.6s' }} />
              </div>
              {/* Gradient overlay */}
              <div style={{ position: 'absolute', inset: '40% 0 0', background: 'linear-gradient(transparent,rgba(8,6,6,0.82))', pointerEvents: 'none' }} />
              {/* Text */}
              <div style={{ position: 'absolute', bottom: 24, left: 25, right: 25, zIndex: 1 }}>
                <div style={{ font: `italic 38px var(--serif)`, color: 'var(--gold2)', lineHeight: 1 }}>{c.n}</div>
                <h3 style={{ font: `18px var(--serif)`, letterSpacing: '0.12em', textTransform: 'uppercase', margin: '6px 0 4px', color: 'var(--cream)' }}>{c.title}</h3>
                <p style={{ font: `13px var(--serif)`, color: '#e1d6c2', margin: 0 }}>{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:640px){ .proceso-grid{grid-template-columns:1fr!important;gap:15px!important} }
        @media(max-width:900px){ .proceso-grid{grid-template-columns:1fr!important} }
      `}</style>
    </section>
  );
}
