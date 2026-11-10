import Image from 'next/image';

const CARDS = [
  { n: '01', title: 'Selección', desc: 'Piezas vintage con historia.', img: '/proceso/proceso-01.jpg' },
  { n: '02', title: 'Transformación', desc: 'Diseño y confección artesanal.', img: '/proceso/proceso-02.jpg' },
  { n: '03', title: 'Pieza única', desc: 'Un bolso irrepetible.', img: '/proceso/proceso-03.jpg' },
];

export default function Proceso() {
  return (
    <section id="proceso" style={{ padding: '90px 0 100px', background: '#080604' }}>
      <div className="wrap">
        <div className="section-label">El proceso</div>
        <h2 style={{ textAlign: 'center', fontFamily: 'var(--display)', fontSize: 'clamp(32px,4vw,52px)', fontWeight: 400, lineHeight: 1.15, margin: '18px 0 56px', color: 'var(--cream)' }}>
          Artesanía que<br /><em style={{ fontFamily:'var(--serif)', fontStyle:'italic', fontWeight:300, color:'var(--gold)' }}>transforma.</em>
        </h2>

        {/* Grid con flechas entre cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr', alignItems: 'stretch', gap: 0 }} className="proceso-grid">
          {CARDS.map((c, i) => (
            <>
              <article key={c.n} style={{ position: 'relative', overflow: 'hidden', background: '#1a1108' }} className="proceso-card">
                <div style={{ position: 'relative', width: '100%', height: 280 }}>
                  <Image src={c.img} alt={c.title} fill style={{ objectFit: 'cover', filter: 'brightness(0.6)' }} />
                </div>
                <div style={{ position: 'absolute', inset: '35% 0 0', background: 'linear-gradient(transparent,rgba(8,5,2,0.9))' }} />
                <div style={{ position: 'absolute', bottom: 22, left: 22, right: 22, zIndex: 1 }}>
                  <div style={{ font: `italic 44px var(--serif)`, color: 'var(--gold)', lineHeight: 1, opacity: 0.9 }}>{c.n}</div>
                  <h3 style={{ font: `12px var(--sans)`, letterSpacing: '0.18em', textTransform: 'uppercase', margin: '6px 0 4px', color: 'var(--cream)', fontWeight: 400 }}>{c.title}</h3>
                  <p style={{ font: `italic 13px var(--serif)`, color: '#d4c9b2', margin: 0 }}>{c.desc}</p>
                </div>
              </article>
              {i < 2 && (
                <div key={`arrow-${i}`} style={{ display: 'flex', alignItems: 'center', padding: '0 10px', color: 'var(--gold)', fontSize: 24, opacity: 0.5 }}>→</div>
              )}
            </>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:640px){
          .proceso-grid{grid-template-columns:1fr!important; gap:12px!important;}
          .proceso-grid > div{ display:none!important; }
        }
        @media(max-width:900px){
          .proceso-grid{grid-template-columns:1fr!important; gap:12px!important;}
          .proceso-grid > div{ display:none!important; }
        }
      `}</style>
    </section>
  );
}
