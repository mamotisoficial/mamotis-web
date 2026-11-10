import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#050403', borderTop: '1px solid #2a1f10', padding: '50px 0 30px' }}>
      <div className="wrap">
        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: 32, paddingBottom: 36, borderBottom: '1px solid #2a1f10' }} className="footer-top">
          {/* Logo + tagline */}
          <div>
            <div style={{ font: `28px var(--display)`, letterSpacing: '0.3em', color: '#e4d4b4', marginBottom: 8 }}>MAMOTIS</div>
            <p style={{ font: `italic 13px var(--serif)`, color: '#6f624d', margin: 0 }}>
              Una segunda vida. Una pieza única.
            </p>
          </div>

          {/* Contact heading */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ font: `italic clamp(22px,3vw,32px)/1.3 var(--serif)`, color: '#e4d4b4', margin: '0 0 6px' }}>¿Hablamos?</p>
            <p style={{ font: `13px/1.7 var(--sans)`, color: '#6f624d', margin: 0, maxWidth: 240, fontWeight: 300 }}>
              Estamos aquí para ayudarte y acompañarte en tu próxima pieza única.
            </p>
          </div>

          {/* Social buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10 }}>
            <Link href="https://instagram.com/mamotisoficial" target="_blank"
              style={{ display: 'flex', alignItems: 'center', gap: 12, border: '1px solid #3a2e1a', padding: '11px 20px', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c4b494', minWidth: 220 }}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
              </svg>
              Síguenos en Instagram
            </Link>
            <Link href="https://wa.me/34605764097" target="_blank"
              style={{ display: 'flex', alignItems: 'center', gap: 12, border: '1px solid #3a2e1a', padding: '11px 20px', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c4b494', minWidth: 220 }}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
                <path d="M9 10c0 5 3.5 7.5 6 8"/>
              </svg>
              Escríbenos por WhatsApp
            </Link>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 24, fontSize: 9, letterSpacing: '0.2em', color: '#40321e', flexWrap: 'wrap', gap: 12 }} className="footer-bottom">
          <span>© MAMOTIS 2026</span>
          <div style={{ display: 'flex', gap: 24 }}>
            <Link href="#historia" style={{ color: '#40321e' }}>Historia</Link>
            <Link href="#proceso" style={{ color: '#40321e' }}>El proceso</Link>
            <Link href="#coleccion" style={{ color: '#40321e' }}>Colección</Link>
            <Link href="#contacto" style={{ color: '#40321e' }}>Contacto</Link>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:640px){
          .footer-top{grid-template-columns:1fr!important; text-align:center!important;}
          .footer-top > div:last-child{align-items:center!important;}
          .footer-top > div:last-child a{min-width:0!important; width:100%!important; justify-content:center!important;}
          .footer-bottom{flex-direction:column!important; align-items:center!important; text-align:center!important;}
        }
      `}</style>
    </footer>
  );
}
