import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#050403', borderTop: '1px solid #40331d', padding: '30px 0', color: '#938875' }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 10, letterSpacing: '0.15em', flexWrap: 'wrap', gap: 16 }}>
        <Link href="/" style={{ font: `23px var(--display)`, letterSpacing: '0.3em', color: '#e4d4b4' }}>MAMOTIS</Link>
        <span>Una sola. Existió antes. Irrepetible.</span>
        <div style={{ display: 'flex', gap: 24 }}>
          <Link href="#historia">Historia</Link>
          <Link href="#coleccion">Colección</Link>
          <Link href="#contacto">Contacto</Link>
        </div>
        <span>© MAMOTIS 2026</span>
      </div>
      <style>{`
        @media(max-width:640px){
          footer .wrap{flex-direction:column!important;text-align:center!important;gap:12px!important}
        }
      `}</style>
    </footer>
  );
}
