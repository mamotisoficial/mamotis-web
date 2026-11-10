const PILLARS = [
  { n: '01', title: 'Rescate', body: 'Cada pieza fue un abrigo con historia. Recuperamos materiales que ya existen y les damos una nueva vida.' },
  { n: '02', title: 'Artesanía', body: 'Cada bolso se crea de forma manual, con tiempo y cuidado. Cada costura es una decisión tomada con conciencia.' },
  { n: '03', title: 'Unicidad', body: 'Si el abrigo fue único, el bolso también lo es. No fabricamos dos iguales. Tu pieza lleva dos historias dentro.' },
];

export default function Pilares() {
  return (
    <section id="filosofia" style={{ padding: '100px 0 105px', background: '#080706' }}>
      <div className="wrap">
        <div className="section-label" style={{ color: '#a38b5c' }}>Nuestra filosofía</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', marginTop: 65 }} className="pilares-grid">
          {PILLARS.map((p,i) => (
            <article key={p.n} style={{ padding: '20px 55px 15px', borderRight: i < 2 ? '1px solid #4a3b21' : 'none' }} className="pilar">
              <div style={{ font: `italic 68px var(--serif)`, color: '#302513', lineHeight: 1 }}>{p.n}</div>
              <h3 style={{ font: `italic 29px var(--serif)`, color: 'var(--gold)', margin: '12px 0 20px' }}>{p.title}</h3>
              <p style={{ font: `15px/1.9 var(--sans)`, color: '#b5aa97', margin: 0, maxWidth: 300 }}>{p.body}</p>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:640px){
          .pilares-grid{grid-template-columns:1fr!important;margin-top:35px!important}
          .pilar{border-right:none!important;border-bottom:1px solid #4a3b21;padding:28px 8px!important}
          .pilar:last-child{border-bottom:none}
        }
      `}</style>
    </section>
  );
}
