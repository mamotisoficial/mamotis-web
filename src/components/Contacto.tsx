import Link from 'next/link';
import Image from 'next/image';

export default function Contacto() {
  return (
    <section id="contacto" style={{ position: 'relative', overflow: 'hidden', minHeight: 500 }}>
      {/* Fondo: foto de aguja cosiendo */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <Image src="/proceso/proceso-03.jpg" alt="Artesanía MAMOTIS" fill style={{ objectFit: 'cover', filter: 'brightness(0.4)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(5,3,2,0.9) 0%,rgba(20,10,5,0.75) 100%)' }} />
      </div>

      <div className="wrap" style={{ position: 'relative', zIndex: 1, padding: '100px 0 110px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: 50 }} className="contacto-grid">
          <div>
            <div className="section-label" style={{ justifyContent: 'flex-start', marginBottom: 24 }}>La experiencia MAMOTIS</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px,5vw,64px)', fontWeight: 300, lineHeight: 1.1, color: 'var(--cream)', margin: '0 0 20px' }}>
              Más que un bolso,<br />
              <em style={{ fontStyle:'italic', color:'var(--gold2)' }}>es una pieza con alma.</em>
            </h2>
            <p style={{ font: `15px/1.9 var(--sans)`, color: '#b5aa97', margin: 0, maxWidth: 420, fontWeight: 300 }}>
              Que combina tradición, diseño y un compromiso real con el planeta. Escríbenos y te contamos qué tenemos disponible.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16 }} className="contacto-actions">
            <Link href="https://wa.me/34605764097" target="_blank" className="btn-gold"
              style={{ color: 'var(--cream)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 16, border: '1px solid var(--gold)', padding: '17px 26px', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
              </svg>
              Escribir por WhatsApp
            </Link>
            <Link href="https://instagram.com/mamotisoficial" target="_blank" className="btn-gold"
              style={{ color: 'var(--cream)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 16, border: '1px solid rgba(201,168,76,0.4)', padding: '17px 26px', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
              </svg>
              Seguir en Instagram
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:640px){
          .contacto-grid{grid-template-columns:1fr!important; gap:30px!important;}
          .contacto-actions a{width:100%!important; justify-content:center!important;}
        }
      `}</style>
    </section>
  );
}
