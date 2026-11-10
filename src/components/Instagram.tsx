import Link from 'next/link';

// Fotos de los bolsos para la preview de Instagram (últimas 6)
const POSTS = [
  '/bolsos/bolso-009.jpeg',
  '/bolsos/bolso-010.jpeg',
  '/bolsos/bolso-011.jpeg',
  '/bolsos/bolso-012.jpeg',
  '/bolsos/bolso-013.jpeg',
  '/bolsos/bolso-014.jpeg',
];

export default function Instagram() {
  return (
    <section style={{ background:'var(--ink)', padding:'80px 0' }}>
      <div style={{ width:'min(1320px,90vw)', margin:'0 auto' }}>
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between',
          marginBottom:40, flexWrap:'wrap', gap:20 }}>
          <div>
            <div style={{ fontSize:9, letterSpacing:'0.5em', textTransform:'uppercase',
              color:'var(--gold)', fontFamily:'var(--sans)', marginBottom:14 }}>Síguenos</div>
            <h2 style={{ fontFamily:'var(--display)', fontSize:'clamp(26px,3.5vw,46px)',
              fontWeight:400, color:'var(--cream)', margin:'0 0 6px' }}>
              @mamotisoficial
            </h2>
            <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(26px,3.5vw,46px)',
              fontWeight:300, fontStyle:'italic', color:'var(--gold)', margin:0 }}>
              en Instagram.
            </h2>
          </div>
          <Link href="https://instagram.com/mamotisoficial" target="_blank" style={{
            display:'inline-flex', alignItems:'center', gap:10,
            border:'1px solid rgba(201,168,76,0.4)', padding:'12px 20px',
            fontSize:9, letterSpacing:'0.2em', textTransform:'uppercase',
            color:'var(--gold)', fontFamily:'var(--sans)', textDecoration:'none',
            flexShrink:0,
          }}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none"
              stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
            Seguir
          </Link>
        </div>

        {/* Grid de fotos cuadradas */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(6,1fr)', gap:4 }}
          className="ig-grid">
          {POSTS.map((src, i) => (
            <Link key={i} href="https://instagram.com/mamotisoficial" target="_blank"
              style={{ display:'block', aspectRatio:'1', overflow:'hidden',
                position:'relative', background:'#1a1410' }}
              className="ig-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={`MAMOTIS Instagram ${i+1}`}
                style={{ width:'100%', height:'100%', objectFit:'cover',
                  transition:'transform 0.5s ease, filter 0.5s ease',
                  filter:'brightness(0.85)',
                }}
                className="ig-img"
              />
              <div className="ig-overlay" style={{
                position:'absolute', inset:0,
                background:'rgba(201,168,76,0.0)',
                display:'flex', alignItems:'center', justifyContent:'center',
                transition:'background 0.3s ease',
              }}>
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none"
                  stroke="white" strokeWidth="1.5" style={{ opacity:0, transition:'opacity 0.3s' }}
                  className="ig-heart">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:720px){.ig-grid{grid-template-columns:repeat(3,1fr)!important;gap:3px!important;}}
        @media(max-width:400px){.ig-grid{grid-template-columns:repeat(2,1fr)!important;}}
        .ig-item:hover .ig-img{transform:scale(1.06);filter:brightness(0.65)!important;}
        .ig-item:hover .ig-overlay{background:rgba(201,168,76,0.15)!important;}
        .ig-item:hover .ig-heart{opacity:1!important;}
      `}</style>
    </section>
  );
}
