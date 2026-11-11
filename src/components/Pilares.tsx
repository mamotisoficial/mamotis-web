const PILLARS = [
  {
    num: '01',
    title: 'Sostenibilidad',
    titleB: 'con conciencia.',
    body: 'Rescatamos materiales nobles y les damos una segunda vida. Nada se pierde, todo se transforma.',
  },
  {
    num: '02',
    title: 'Artesanía',
    titleB: 'hecha a mano.',
    body: 'Cada bolso se crea de forma manual, lenta y cuidada, por manos expertas que respetan la piel.',
  },
  {
    num: '03',
    title: 'Exclusividad',
    titleB: 'irrepetible.',
    body: 'Piezas únicas en el mundo. Con historia propia. Que no se fabrican — se encuentran.',
  },
];

export default function Pilares() {
  return (
    <section id="filosofia" style={{ background:'#0c0906', padding:'100px 0 110px' }}>
      <div style={{ width:'min(1320px,90vw)', margin:'0 auto' }}>

        {/* Cabecera editorial */}
        <div style={{ marginBottom:72, maxWidth:600 }}>
          <div style={{ fontSize:10, letterSpacing:'0.5em', textTransform:'uppercase',
            color:'var(--gold)', fontFamily:'var(--sans)', marginBottom:20 }}>
            La experiencia MAMOTIS
          </div>
          <h2 style={{ fontFamily:'var(--display)', fontSize:'clamp(34px,4vw,58px)',
            fontWeight:400, lineHeight:1.08, color:'var(--cream)', margin:'0 0 10px' }}>
            Cada pieza,
          </h2>
          <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(34px,4vw,58px)',
            fontWeight:300, fontStyle:'italic', lineHeight:1.08, color:'var(--gold)', margin:0 }}>
            una historia única.
          </h2>
        </div>

        {/* Tres pilares en fila */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:0 }}
          className="pilares-grid">
          {PILLARS.map((p, i) => (
            <article key={i} style={{
              padding:'40px 44px 44px',
              borderTop:'1px solid rgba(201,168,76,0.18)',
              borderRight: i < 2 ? '1px solid rgba(201,168,76,0.12)' : 'none',
            }} className="pilar">
              {/* Número */}
              <div style={{ fontFamily:'var(--serif)', fontSize:52, fontStyle:'italic',
                fontWeight:300, color:'var(--gold)', lineHeight:1, opacity:0.7, marginBottom:28 }}>
                {p.num}
              </div>
              <h3 style={{ fontFamily:'var(--display)', fontSize:24, fontWeight:400,
                color:'var(--cream)', margin:'0 0 4px', letterSpacing:'0.02em' }}>
                {p.title}
              </h3>
              <h3 style={{ fontFamily:'var(--serif)', fontSize:24, fontWeight:300,
                fontStyle:'italic', color:'var(--gold)', margin:'0 0 24px' }}>
                {p.titleB}
              </h3>
              <p style={{ fontFamily:'var(--sans)', fontSize:16, lineHeight:1.9,
                color:'#9a8e7a', margin:0, fontWeight:300 }}>
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:760px){
          .pilares-grid{grid-template-columns:1fr!important;}
          .pilar{border-right:none!important;border-bottom:1px solid rgba(201,168,76,0.12);padding:32px 24px!important;}
          .pilar:last-child{border-bottom:none!important;}
        }
      `}</style>
    </section>
  );
}
