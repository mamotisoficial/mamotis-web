import Link from 'next/link';
import Image from 'next/image';

export default function Contacto() {
  return (
    <section id="contacto" style={{ position:'relative', overflow:'hidden', minHeight:560 }}>
      <div style={{ position:'absolute', inset:0 }}>
        <Image src="/proceso/proceso-02.jpg" alt="Artesanía MAMOTIS" fill
          style={{ objectFit:'cover', objectPosition:'center', filter:'brightness(0.28)' }} />
        <div style={{ position:'absolute', inset:0,
          background:'linear-gradient(135deg, rgba(5,3,2,0.90) 0%, rgba(15,8,4,0.55) 100%)' }} />
      </div>

      <div style={{ position:'relative', zIndex:1,
        display:'flex', flexDirection:'column', alignItems:'center',
        textAlign:'center', padding:'72px 24px 80px' }}>

        {/* Huevo */}
        <div style={{ width:110, height:134, position:'relative', marginBottom:28 }}>
          <Image src="/marca/logo-huevo-nuevo.png" alt="MAMOTIS" fill
            style={{ objectFit:'contain', opacity:0.95 }} />
        </div>

        <h2 style={{ fontFamily:'var(--display)', fontSize:'clamp(28px,4vw,52px)',
          fontWeight:400, lineHeight:1.08, color:'var(--cream)', margin:'0 0 10px' }}>
          Más que un bolso,
        </h2>
        <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(28px,4vw,52px)',
          fontWeight:300, fontStyle:'italic', lineHeight:1.08,
          color:'var(--gold)', margin:'0 0 24px' }}>
          una pieza con alma.
        </h2>
        <p style={{ fontFamily:'var(--sans)', fontSize:15, lineHeight:1.85,
          color:'#9a8e7a', margin:'0 0 36px', maxWidth:480, fontWeight:300 }}>
          Cada MAMOTIS es irrepetible. Lleva dentro la historia de un abrigo que vivió una vida entera,
          transformada ahora en un objeto de belleza, consciencia y carácter propio.
        </p>

        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:12,
          width:'100%', maxWidth:320 }}>
          <Link href="https://wa.me/34605764097" target="_blank"
            style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', gap:12,
              border:'1px solid var(--gold)', padding:'15px 24px',
              fontSize:9, letterSpacing:'0.24em', textTransform:'uppercase',
              color:'var(--cream)', fontFamily:'var(--sans)',
              textDecoration:'none', width:'100%' }}>
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none"
              stroke="currentColor" strokeWidth="1.5">
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
            </svg>
            Encargar la tuya — WhatsApp
          </Link>
          <Link href="https://www.instagram.com/mamotis_/" target="_blank"
            style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', gap:12,
              border:'1px solid rgba(201,168,76,0.35)', padding:'15px 24px',
              fontSize:9, letterSpacing:'0.24em', textTransform:'uppercase',
              color:'#c4b494', fontFamily:'var(--sans)',
              textDecoration:'none', width:'100%' }}>
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none"
              stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
            Seguir en Instagram
          </Link>
        </div>
      </div>
    </section>
  );
}
