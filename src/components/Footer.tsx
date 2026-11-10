'use client';
import Link from 'next/link';

const REDES = [
  { label:'Instagram', href:'https://www.instagram.com/mamotis_/' },
  { label:'TikTok', href:'https://www.tiktok.com/@mamotis_' },
  { label:'WhatsApp', href:'https://wa.me/34605764097' },
];

export default function Footer() {
  return (
    <footer className="on-negro2" style={{
      borderTop:'1px solid var(--borde-n)',
      padding:'2.5rem clamp(2rem,8vw,8rem)',
    }}>
      <div style={{
        display:'flex', flexWrap:'wrap', alignItems:'center',
        justifyContent:'space-between', gap:'1.5rem',
      }}>
        {/* logo texto */}
        <span style={{
          fontFamily:'var(--serif)', fontStyle:'italic', fontWeight:300,
          fontSize:'1.3rem', color:'rgba(242,232,212,0.4)', letterSpacing:'0.04em',
        }}>Mamotis</span>

        {/* redes */}
        <div style={{ display:'flex', gap:'2.5rem', alignItems:'center' }}>
          {REDES.map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener"
              style={{
                fontFamily:'var(--mono)', fontSize:'0.52rem', letterSpacing:'0.28em',
                textTransform:'uppercase', color:'rgba(242,232,212,0.35)',
                textDecoration:'none', transition:'color 0.3s',
              }}
              onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.color='var(--crema)'; }}
              onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.color='rgba(242,232,212,0.35)'; }}>
              {label}
            </a>
          ))}
        </div>

        {/* legal */}
        <div style={{ display:'flex', gap:'2rem', alignItems:'center' }}>
          <span style={{ fontFamily:'var(--mono)', fontSize:'0.46rem', letterSpacing:'0.2em',
            textTransform:'uppercase', color:'rgba(242,232,212,0.2)' }}>
            © MAMOTIS 2024
          </span>
          <Link href="/legal" style={{ fontFamily:'var(--mono)', fontSize:'0.46rem', letterSpacing:'0.2em',
            textTransform:'uppercase', color:'rgba(242,232,212,0.2)', textDecoration:'none' }}>
            Aviso legal
          </Link>
        </div>
      </div>

      <style>{`
        @media(max-width:640px){
          footer > div { flex-direction:column; align-items:flex-start; gap:1.2rem; }
        }
      `}</style>
    </footer>
  );
}
