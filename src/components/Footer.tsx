'use client';
import Link from 'next/link';
import Image from 'next/image';

const NAV = ['Historia','Colección','Contacto'];
const REDES = [
  { label:'Instagram', href:'https://www.instagram.com/mamotis_/' },
  { label:'TikTok', href:'https://www.tiktok.com/@mamotis_' },
  { label:'WhatsApp', href:'https://wa.me/34605764097' },
];

export default function Footer() {
  return (
    <footer className="on-negro2" style={{ borderTop:'1px solid var(--borde-n)', padding:'6rem clamp(2rem,8vw,8rem) 3.5rem' }}>
      <div className="footer-top" style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr 1fr 1fr', gap:'4rem', marginBottom:'5rem', alignItems:'start' }}>
        {/* logo */}
        <div>
          <div style={{ display:'flex',alignItems:'center',gap:'1rem',marginBottom:'1.5rem' }}>
            <Image src="/marca/mamotis-t.png" alt="Mamotis" width={160} height={60}
              style={{ objectFit:'contain', height:'44px', width:'auto',
                filter:'drop-shadow(0 0 8px rgba(201,168,76,0.4))' }}/>
          </div>
          <p style={{ fontFamily:'var(--mono)',fontSize:'0.52rem',letterSpacing:'0.28em',textTransform:'uppercase',color:'rgba(242,232,212,0.3)',lineHeight:2.1 }}>
            Bolsos de lujo artesanos<br/>Piel vintage rescatada<br/>Madrid
          </p>
        </div>
        {/* nav */}
        <div>
          <h4 style={{ fontFamily:'var(--mono)',fontSize:'0.5rem',letterSpacing:'0.42em',textTransform:'uppercase',color:'var(--oro)',opacity:0.4,marginBottom:'1.8rem' }}>Navegación</h4>
          <ul style={{ listStyle:'none',display:'flex',flexDirection:'column',gap:'1rem' }}>
            {NAV.map(l => (
              <li key={l}><Link href={l === 'Colección' ? '/coleccion' : `/#${l.toLowerCase()}`}
                style={{ fontFamily:'var(--serif)',fontStyle:'italic',fontSize:'1.05rem',color:'rgba(242,232,212,0.5)',textDecoration:'none',transition:'color 0.3s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color='var(--crema)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color='rgba(242,232,212,0.5)'; }}
              >{l}</Link></li>
            ))}
          </ul>
        </div>
        {/* redes */}
        <div>
          <h4 style={{ fontFamily:'var(--mono)',fontSize:'0.5rem',letterSpacing:'0.42em',textTransform:'uppercase',color:'var(--oro)',opacity:0.4,marginBottom:'1.8rem' }}>Redes sociales</h4>
          <ul style={{ listStyle:'none',display:'flex',flexDirection:'column',gap:'1rem' }}>
            {REDES.map(({ label, href }) => (
              <li key={label}><a href={href} target="_blank" rel="noopener"
                style={{ fontFamily:'var(--serif)',fontStyle:'italic',fontSize:'1.05rem',color:'rgba(242,232,212,0.5)',textDecoration:'none',transition:'color 0.3s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color='var(--crema)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color='rgba(242,232,212,0.5)'; }}
              >{label}</a></li>
            ))}
          </ul>
        </div>
        {/* contacto */}
        <div>
          <h4 style={{ fontFamily:'var(--mono)',fontSize:'0.5rem',letterSpacing:'0.42em',textTransform:'uppercase',color:'var(--oro)',opacity:0.4,marginBottom:'1.8rem' }}>Contacto</h4>
          <p style={{ fontFamily:'var(--mono)',fontSize:'0.54rem',letterSpacing:'0.12em',color:'rgba(242,232,212,0.4)',lineHeight:2,marginBottom:'0.6rem' }}>
            <strong style={{ color:'var(--oro)',fontWeight:400 }}>WhatsApp</strong><br/>605 764 097
          </p>
          <p style={{ fontFamily:'var(--mono)',fontSize:'0.54rem',letterSpacing:'0.12em',color:'rgba(242,232,212,0.4)',lineHeight:2 }}>Solo por mensaje</p>
        </div>
      </div>

      <div className="footer-bottom" style={{ borderTop:'1px solid var(--borde-n)',paddingTop:'2.5rem',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'1rem' }}>
        <span style={{ fontFamily:'var(--mono)',fontSize:'0.46rem',letterSpacing:'0.2em',textTransform:'uppercase',color:'rgba(242,232,212,0.22)' }}>© MAMOTIS 2024</span>
        <Link href="/legal" style={{ fontFamily:'var(--mono)',fontSize:'0.46rem',letterSpacing:'0.2em',textTransform:'uppercase',color:'rgba(242,232,212,0.22)',textDecoration:'none' }}>Aviso legal</Link>
      </div>
    </footer>
  );
}
