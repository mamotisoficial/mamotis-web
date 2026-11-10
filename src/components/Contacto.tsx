import Link from 'next/link';
import Image from 'next/image';

export default function Contacto() {
  return (
    <section id="contacto" style={{ position:'relative', overflow:'hidden', minHeight:520 }}>
      <div style={{ position:'absolute', inset:0 }}>
        <Image src="/proceso/proceso-03.jpg" alt="Artesanía MAMOTIS" fill
          style={{ objectFit:'cover', filter:'brightness(0.35)' }} />
        <div style={{ position:'absolute', inset:0,
          background:'linear-gradient(135deg, rgba(5,3,2,0.92) 0%, rgba(15,8,4,0.7) 100%)' }} />
      </div>
      <div className="wrap" style={{ position:'relative', zIndex:1, padding:'100px 0 110px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr',
          alignItems:'center', gap:60 }} className="contacto-grid">
          <div>
            <div className="section-label" style={{ justifyContent:'flex-start', marginBottom:28 }}>
              La experiencia MAMOTIS
            </div>
            <h2 style={{ fontFamily:'var(--display)', fontSize:'clamp(32px,4.5vw,60px)',
              fontWeight:400, lineHeight:1.1, color:'var(--cream)', margin:'0 0 8px' }}>
              Más que un bolso,
            </h2>
            <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(32px,4.5vw,60px)',
              fontWeight:300, fontStyle:'italic', lineHeight:1.1,
              color:'var(--gold)', margin:'0 0 28px' }}>
              es una pieza con alma.
            </h2>
            <p style={{ fontFamily:'var(--sans)', fontSize:15, lineHeight:1.9,
              color:'#b0a492', margin:0, maxWidth:400, fontWeight:300 }}>
              Artesanía, diseño y compromiso real con el planeta. Escríbenos y te contamos qué tenemos disponible.
            </p>
          </div>
          <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-start', gap:16 }}
            className="contacto-actions">
            <Link href="https://wa.me/34605764097" target="_blank"
              style={{ color:'var(--cream)', textDecoration:'none',
                display:'inline-flex', alignItems:'center', gap:16,
                border:'1px solid var(--gold)', padding:'18px 28px',
                fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase',
                fontFamily:'var(--sans)', width:'100%', maxWidth:340 }}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none"
                stroke="currentColor" strokeWidth="1.5">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
              </svg>
              Escribir por WhatsApp
            </Link>
            <Link href="https://instagram.com/mamotisoficial" target="_blank"
              style={{ color:'#c4b494', textDecoration:'none',
                display:'inline-flex', alignItems:'center', gap:16,
                border:'1px solid rgba(201,168,76,0.35)', padding:'18px 28px',
                fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase',
                fontFamily:'var(--sans)', width:'100%', maxWidth:340 }}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none"
                stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
              </svg>
              Seguir en Instagram
            </Link>
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:720px){
          .contacto-grid{grid-template-columns:1fr!important;gap:36px!important;}
          .contacto-actions a{max-width:100%!important;}
        }
      `}</style>
    </section>
  );
}
