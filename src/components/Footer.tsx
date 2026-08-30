import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{
      padding: '4rem 5rem 3rem',
      borderTop: '1px solid var(--borde)',
    }}>

      {/* Logo centrado arriba */}
      <div style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', marginBottom: '3rem',
        gap: '1rem',
      }}>
        <Image
          src="/marca/logo-huevo-t.png"
          alt="Mamotis"
          width={60}
          height={60}
          style={{ objectFit: 'contain', height: '52px', width: 'auto', opacity: 0.9 }}
        />
        <Image
          src="/marca/logo-texto-t.png"
          alt="Mamotis"
          width={140}
          height={44}
          style={{ objectFit: 'contain', height: '32px', width: 'auto', opacity: 0.7 }}
        />
      </div>

      {/* Links */}
      <div style={{
        display: 'flex', justifyContent: 'center',
        gap: '3rem', marginBottom: '3rem',
      }}>
        {[
          { l: 'La Marca', h: '/' },
          { l: 'Historia', h: '/#historia' },
          { l: 'Colección', h: '/coleccion' },
        ].map(({ l, h }) => (
          <Link key={l} href={h} style={{
            fontFamily: "'DM Mono', monospace", fontSize: '.5rem',
            letterSpacing: '.2em', color: 'var(--crema)',
            opacity: .3, textDecoration: 'none', textTransform: 'uppercase',
          }}>{l}</Link>
        ))}
      </div>

      {/* Copyright */}
      <div style={{
        textAlign: 'center',
        borderTop: '1px solid rgba(201,168,76,.05)',
        paddingTop: '2rem',
      }}>
        <span style={{
          fontFamily: "'DM Mono', monospace", fontSize: '.46rem',
          letterSpacing: '.2em', opacity: .15,
        }}>© MAMOTIS</span>
      </div>
    </footer>
  );
}
