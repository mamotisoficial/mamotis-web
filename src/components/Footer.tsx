import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer-inner" style={{
      padding: '3rem 5rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      borderTop: '1px solid var(--borde)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
        <Image
          src="/marca/logo-huevo.png"
          alt="Mamotis"
          width={44}
          height={44}
          style={{ objectFit: 'contain', height: '40px', width: 'auto', opacity: 0.9, mixBlendMode: 'screen' }}
        />
        <Image
          src="/marca/logo-texto.png"
          alt="Mamotis"
          width={110}
          height={38}
          style={{ objectFit: 'contain', height: '26px', width: 'auto', opacity: 0.8, mixBlendMode: 'screen', filter: 'brightness(1.1)' }}
        />
      </div>

      <div className="footer-links" style={{ display: 'flex', gap: '2.5rem' }}>
        {[
          { l: 'La Marca', h: '/' },
          { l: 'Colección', h: '/coleccion' },
          { l: 'WhatsApp', h: 'https://wa.me/34600000000' },
          { l: 'Instagram', h: '#' },
        ].map(({ l, h }) => (
          <Link key={l} href={h} style={{
            fontFamily: "'DM Mono', monospace", fontSize: '.5rem',
            letterSpacing: '.2em', color: 'var(--crema)',
            opacity: .3, textDecoration: 'none', textTransform: 'uppercase',
          }}>{l}</Link>
        ))}
      </div>

      <span style={{
        fontFamily: "'DM Mono', monospace", fontSize: '.48rem',
        letterSpacing: '.2em', opacity: .15,
      }}>© 2024 MAMOTIS</span>
    </footer>
  );
}
