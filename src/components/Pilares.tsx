const PILLARS = [
  {
    icon: <svg viewBox="0 0 32 32" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M16 2 C16 2 10 10 10 18 C10 24 13 30 16 30 C19 30 22 24 22 18 C22 10 16 2 16 2Z"/><path d="M16 10 L16 24" strokeOpacity=".4"/><path d="M11 20 Q16 17 21 20" strokeOpacity=".4"/></svg>,
    title: 'Sostenibilidad',
    titleB: 'con conciencia.',
    body: 'Rescatamos materiales nobles y les damos una segunda vida. Nada se pierde.',
  },
  {
    icon: <svg viewBox="0 0 32 32" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M6 26 L16 6 L26 26"/><path d="M9 20 L23 20"/><circle cx="16" cy="6" r="1.5" fill="currentColor"/></svg>,
    title: 'Artesanía',
    titleB: 'hecha a mano.',
    body: 'Cada bolso se crea de forma manual, lenta y cuidada, por manos expertas.',
  },
  {
    icon: <svg viewBox="0 0 32 32" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M16 3 L19.5 12 L29 13.4 L22.5 19.6 L24.1 29 L16 24.6 L7.9 29 L9.5 19.6 L3 13.4 L12.5 12 Z"/></svg>,
    title: 'Exclusividad',
    titleB: 'irrepetible.',
    body: 'Piezas únicas en el mundo. Con historia propia. Que no se fabrican, se encuentran.',
  },
];

export default function Pilares() {
  return (
    <section id="filosofia" style={{ padding:'90px 0 100px', background:'#0c0906' }}>
      <div className="wrap">
        <div className="section-label">Nuestra filosofía</div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', marginTop:64, gap:0 }}
          className="pilares-grid">
          {PILLARS.map((p, i) => (
            <article key={i} style={{
              padding:'8px 48px 8px',
              borderRight: i < 2 ? '1px solid rgba(201,168,76,0.12)' : 'none',
              textAlign:'center',
            }} className="pilar">
              <div style={{ color:'var(--gold)', marginBottom:20, display:'flex', justifyContent:'center' }}>
                {p.icon}
              </div>
              <h3 style={{ fontFamily:'var(--display)', fontSize:22, fontWeight:400,
                color:'var(--cream)', margin:'0 0 4px' }}>
                {p.title}
              </h3>
              <h3 style={{ fontFamily:'var(--serif)', fontSize:22, fontWeight:300,
                fontStyle:'italic', color:'var(--gold)', margin:'0 0 18px' }}>
                {p.titleB}
              </h3>
              <p style={{ fontFamily:'var(--sans)', fontSize:14, lineHeight:1.85,
                color:'#9a8e7a', margin:0, fontWeight:300 }}>
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:720px){
          .pilares-grid{grid-template-columns:1fr!important;}
          .pilar{border-right:none!important;border-bottom:1px solid rgba(201,168,76,0.12);padding:28px 24px!important;}
          .pilar:last-child{border-bottom:none!important;}
        }
      `}</style>
    </section>
  );
}
