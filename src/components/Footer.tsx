'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ background:'#050403', borderTop:'1px solid #1e150a', padding:'28px 0 20px' }}>
      <div className="wrap">
        {/* Fila principal */}
        <div style={{
          display:'flex', alignItems:'center', justifyContent:'space-between',
          gap:24, flexWrap:'wrap',
        }} className="footer-inner">

          {/* Logo + dominio */}
          <div style={{ display:'flex', alignItems:'center', gap:12 }}>
            <div style={{ width:18, height:22, position:'relative', flexShrink:0 }}>
              <Image src="/marca/logo-huevo-nuevo.png" alt="MAMOTIS" fill
                style={{ objectFit:'contain', opacity:0.7 }} />
            </div>
            <span style={{ fontFamily:'var(--sans)', fontSize:10,
              letterSpacing:'0.18em', color:'#5a4a30', textTransform:'uppercase' }}>
              mamotis.es
            </span>
          </div>

          {/* Iconos sociales */}
          <div style={{ display:'flex', alignItems:'center', gap:20 }}>
            {/* TikTok */}
            <Link href="https://tiktok.com/@mamotisoficial" target="_blank"
              aria-label="TikTok"
              style={{ color:'#4a3c26', transition:'color 0.2s' }}
              onMouseEnter={e=>(e.currentTarget as HTMLElement).style.color='#c9a64c'}
              onMouseLeave={e=>(e.currentTarget as HTMLElement).style.color='#4a3c26'}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.14a8.19 8.19 0 0 0 4.78 1.52V7.21a4.85 4.85 0 0 1-1.01-.52z"/>
              </svg>
            </Link>

            {/* Instagram */}
            <Link href="https://instagram.com/mamotisoficial" target="_blank"
              aria-label="Instagram"
              style={{ color:'#4a3c26', transition:'color 0.2s' }}
              onMouseEnter={e=>(e.currentTarget as HTMLElement).style.color='#c9a64c'}
              onMouseLeave={e=>(e.currentTarget as HTMLElement).style.color='#4a3c26'}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
                stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </Link>

            {/* WhatsApp */}
            <Link href="https://wa.me/34605764097" target="_blank"
              aria-label="WhatsApp"
              style={{ color:'#4a3c26', transition:'color 0.2s' }}
              onMouseEnter={e=>(e.currentTarget as HTMLElement).style.color='#c9a64c'}
              onMouseLeave={e=>(e.currentTarget as HTMLElement).style.color='#4a3c26'}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
                stroke="currentColor" strokeWidth="1.8">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
              </svg>
            </Link>
          </div>

          {/* Copyright */}
          <span style={{ fontFamily:'var(--sans)', fontSize:9,
            letterSpacing:'0.15em', color:'rgba(201,168,76,0.35)', textTransform:'uppercase' }}>
            © MAMOTIS 2026
          </span>
        </div>

        {/* Fila legal */}
        <div style={{
          display:'flex', alignItems:'center', justifyContent:'center',
          gap:24, marginTop:16, flexWrap:'wrap',
        }}>
          {[
            ['/aviso-legal','Aviso Legal'],
            ['/privacidad','Privacidad'],
            ['/cookies','Cookies'],
          ].map(([href, label]) => (
            <Link key={href} href={href}
              style={{ fontFamily:'var(--sans)', fontSize:9, letterSpacing:'0.15em',
                textTransform:'uppercase', color:'rgba(201,168,76,0.5)', textDecoration:'none',
                transition:'color 0.2s' }}
              onMouseEnter={e=>(e.currentTarget as HTMLElement).style.color='rgba(201,168,76,0.9)'}
              onMouseLeave={e=>(e.currentTarget as HTMLElement).style.color='rgba(201,168,76,0.5)'}>
              {label}
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:580px){
          .footer-inner{ justify-content:center!important; text-align:center; }
        }
      `}</style>
    </footer>
  );
}
