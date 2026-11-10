const PILLARS = [
  {
    n: '01',
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 2 C16 2 10 10 10 18 C10 24 13 30 16 30 C19 30 22 24 22 18 C22 10 16 2 16 2Z"/>
        <path d="M16 10 L16 24" strokeOpacity=".5"/>
      </svg>
    ),
    title: 'Sostenibilidad',
    body: 'Rescatamos materiales y les damos una nueva vida.',
  },
  {
    n: '02',
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 28 L16 4 L28 28"/>
        <path d="M4 28 Q16 18 28 28" fill="currentColor" fillOpacity=".1"/>
        <circle cx="16" cy="4" r="1.5" fill="currentColor"/>
      </svg>
    ),
    title: 'Artesanía',
    body: 'Cada bolso se crea de forma manual y cuidada.',
  },
  {
    n: '03',
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 3 L21 12 L30 13.5 L23 20 L24.5 29 L16 24.5 L7.5 29 L9 20 L2 13.5 L11 12 Z"/>
      </svg>
    ),
    title: 'Exclusividad',
    body: 'Piezas únicas, con historia propia.',
  },
];

export default function Pilares() {
  return (
    <section id="filosofia" style={{ padding: '90px 0 100px', background: '#0c0906' }}>
      <div className="wrap">
        <div className="section-label">Nuestra filosofía</div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', marginTop: 60, gap: 0 }} className="pilares-grid">
          {PILLARS.map((p, i) => (
            <article key={p.n}
              style={{ padding: '10px 50px 20px', borderRight: i < 2 ? '1px solid rgba(201,168,76,0.15)' : 'none', textAlign: 'center' }}
              className="pilar">
              {/* Icono dorado */}
              <div style={{ color: 'var(--gold)', marginBottom: 14, display: 'flex', justifyContent: 'center' }}>
                {p.icon}
              </div>
              <h3 style={{ fontFamily: 'var(--display)', fontSize: 26, fontStyle: 'normal', fontWeight: 400, color: 'var(--gold)', margin: '0 0 14px' }}>{p.title}</h3>
              <p style={{ font: `14px/1.85 var(--sans)`, color: '#b5aa97', margin: 0, fontWeight: 300 }}>{p.body}</p>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:640px){
          .pilares-grid{grid-template-columns:1fr!important;}
          .pilar{border-right:none!important;border-bottom:1px solid rgba(201,168,76,0.15);padding:28px 20px!important;}
          .pilar:last-child{border-bottom:none;}
        }
      `}</style>
    </section>
  );
}
