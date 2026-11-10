import Link from 'next/link';
import Image from 'next/image';

export default function Contacto() {
  return (
    <section id="contacto" style={{ position:'relative', overflow:'hidden', minHeight:600 }}>
      {/* Foto de fondo: proceso-02 (artesano cosiendo) */}
      <div style={{ position:'absolute', inset:0 }}>
        <Image src="/proceso/proceso-02.jpg" alt="Artesanía MAMOTIS" fill
          style={{ objectFit:'cover', objectPosition:'center', filter:'brightness(0.28)' }} />
        <div style={{ position:'absolute', inset:0,
          background:'linear-gradient(135deg, rgba(5,3,2,0.90) 0%, rgba(15,8,4,0.55) 100%)' }} />
      </div>

      {/* Huevo + frase + botones */}
      <div style={{ position:'relative', zIndex:1,
        display:'flex', flexDirection:'column', alignItems:'center',
        textAlign:'center', padding:'100px 24px 110px' }}>

        {/* Huevo dorado */}
        <div style={{ width:140, height:170, position:'relative', marginBottom:40 }}>
          <Image src="/marca/logo-huevo-nuevo.png" alt="MAMOTIS" fill
            style={{ objectFit:'contain', opacity:0.95 }} />
        </div>

        {/* Título */}
        <h2 style={{ fontFamily:'var(--display)', fontSize:'clamp(32px,4.5vw,58px)',
          fontWeight:400, lineHeight:1.08, color:'var(--cream)', margin:'0 0 10px' }}>
          Más que un bolso,
        </h2>
        <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(32px,4.5vw,58px)',
          fontWeight:300, fontStyle:'italic', lineHeight:1.08,
          color:'var(--gold)', margin:'0 0 32px' }}>
          una pieza con alma.
        </h2>
        <p style={{ fontFamily:'var(--sans)', fontSize:16, lineHeight:1.9,
          color:'#9a8e7a', margin:'0 0 48px', maxWidth:520, fontWeight:300 }}>
          Cada MAMOTIS es irrepetible. Lleva dentro la historia de un abrigo que vivió una vida entera,
          transformada ahora en un objeto de belleza, consciencia y carácter propio.
        </p>

        {/* Botones */}
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:14, width:'100%', maxWidth:340 }}>
          <Link href="https://wa.me/34605764097" target="_blank"
            style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', gap:14,
              border:'1px solid var(--gold)', padding:'18px 28px',
              fontSize:9, letterSpacing:'0.26em', textTransform:'uppercase',
              color:'var(--cream)', fontFamily:'var(--sans)',
              textDecoration:'none', width:'100%' }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none"
              stroke="currentColor" strokeWidth="1.5">
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
            </svg>
            Encargar la tuya — WhatsApp
          </Link>
          <Link href="https://instagram.com/mamotisoficial" target="_blank"
            style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', gap:14,
              border:'1px solid rgba(201,168,76,0.35)', padding:'18px 28px',
              fontSize:9, letterSpacing:'0.26em', textTransform:'uppercase',
              color:'#c4b494', fontFamily:'var(--sans)',
              textDecoration:'none', width:'100%' }}>
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
    </section>
  );
}
