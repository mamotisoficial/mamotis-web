'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ padding: '4rem 5rem 3rem', borderTop: '1px solid rgba(201,168,76,0.08)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Image src="/marca/logo-huevo-t.png" alt="MAMOTIS" width={36} height={42}
            style={{ objectFit: 'contain' }} />
          <Image src="/marca/mamotis-t.png" alt="Mamotis" width={120} height={44}
            style={{ objectFit: 'contain' }} />
        </div>

        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { l: 'La Marca', h: '/' },
            { l: 'Historia', h: '/#historia' },
            { l: 'Colección', h: '/coleccion' },
          ].map(({ l, h }) => (
            <Link key={l} href={h} style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic', fontSize: '1rem',
              color: 'var(--crema)', opacity: 0.45,
              textDecoration: 'none', transition: 'opacity .3s',
            }}>{l}</Link>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="https://www.instagram.com/mamotis_/" target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--oro)', opacity: 0.6, textDecoration: 'none',
              fontFamily: "'DM Mono', monospace", fontSize: '0.5rem', letterSpacing: '0.3em',
              textTransform: 'uppercase', transition: 'opacity .3s' }}>
            Instagram
          </a>
          <span style={{ color: 'rgba(201,168,76,0.2)' }}>·</span>
          <a href="https://www.tiktok.com/@mamotis_" target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--oro)', opacity: 0.6, textDecoration: 'none',
              fontFamily: "'DM Mono', monospace", fontSize: '0.5rem', letterSpacing: '0.3em',
              textTransform: 'uppercase', transition: 'opacity .3s' }}>
            TikTok
          </a>
          <span style={{ color: 'rgba(201,168,76,0.2)' }}>·</span>
          <a href="https://wa.me/34605764097" target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--oro)', opacity: 0.6, textDecoration: 'none',
              fontFamily: "'DM Mono', monospace", fontSize: '0.5rem', letterSpacing: '0.3em',
              textTransform: 'uppercase', transition: 'opacity .3s' }}>
            WhatsApp
          </a>
        </div>

        <div style={{ borderTop: '1px solid rgba(201,168,76,0.06)', paddingTop: '1.5rem',
          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.42rem',
            letterSpacing: '0.2em', opacity: 0.2 }}>© MAMOTIS</span>
          <Link href="/legal" style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.42rem',
            letterSpacing: '0.2em', opacity: 0.2, color: 'var(--crema)', textDecoration: 'none',
            textTransform: 'uppercase' }}>Aviso legal</Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer { padding: 3rem 2rem 2rem !important; }
        }
      `}</style>
    </footer>
  );
}
