import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      padding: '3rem 5rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      borderTop: '1px solid var(--borde)',
    }}>
      <span style={{
        fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
        fontSize: '1.2rem', letterSpacing: '.55em', color: 'var(--oro)',
      }}>MAMOTIS</span>

      <div style={{ display: 'flex', gap: '2.5rem' }}>
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
            transition: 'opacity .3s',
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
