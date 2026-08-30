'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{
      padding: '2rem 3rem 3rem',
      display: 'flex',
      justifyContent: 'center',
    }}>
      {/* BARRA FLOTANTE REDONDEADA */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '900px',
        padding: '1.2rem 2.5rem',
        background: 'rgba(10,8,5,0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '60px',
        border: '1px solid rgba(201,168,76,0.18)',
        boxShadow: '0 0 60px rgba(201,168,76,0.06), inset 0 1px 0 rgba(201,168,76,0.08)',
      }}>

        {/* LOGO izquierda */}
        <Link href="/" style={{
          display: 'flex', alignItems: 'center',
          gap: '0.8rem', textDecoration: 'none',
        }}>
          <Image
            src="/marca/logo-huevo-t.png"
            alt="Mamotis huevo"
            width={28}
            height={32}
            style={{ objectFit: 'contain' }}
          />
          <Image
            src="/marca/logo-texto-t.png"
            alt="Mamotis"
            width={90}
            height={32}
            style={{ objectFit: 'contain', opacity: 0.85 }}
          />
        </Link>

        {/* LINKS centro */}
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {[
            { l: 'La Marca', h: '/' },
            { l: 'Historia', h: '/#historia' },
            { l: 'Colección', h: '/coleccion' },
          ].map(({ l, h }) => (
            <Link key={l} href={h} style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '.5rem', letterSpacing: '.2em',
              color: 'var(--crema)', opacity: .4,
              textDecoration: 'none', textTransform: 'uppercase',
              transition: 'opacity .3s, color .3s',
            }}
              onMouseEnter={e => { const t = e.currentTarget; t.style.opacity='1'; t.style.color='var(--oro)'; }}
              onMouseLeave={e => { const t = e.currentTarget; t.style.opacity='0.4'; t.style.color='var(--crema)'; }}
            >{l}</Link>
          ))}
        </div>

        {/* HUEVO decorativo derecha */}
        <div style={{ opacity: 0.3 }}>
          <Image
            src="/marca/logo-huevo-t.png"
            alt=""
            width={24}
            height={28}
            style={{ objectFit: 'contain' }}
          />
        </div>

      </div>
    </footer>
  );
}
