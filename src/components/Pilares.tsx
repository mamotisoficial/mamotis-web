'use client';

const pilares = [
  { num: '01', titulo: 'El origen', texto: 'Buscamos piel con historia — mercados vintage, armarios heredados, colecciones olvidadas. Cada pieza tiene nombre, tiene año.' },
  { num: '02', titulo: 'La transformación', texto: 'Manos artesanas dan nueva forma a la piel. Sin prisa. Sin moldes industriales. El huevo dorado — nuestra firma — nace en el asa.' },
  { num: '03', titulo: 'Irrepetible', texto: 'Nunca dos iguales. Porque nunca hubo dos abrigos iguales. Tu bolso es único — como lo fue la mujer que llevó esa piel.' },
];

export default function Pilares() {
  return (
    <section id="pilares" style={{ padding: '6rem 5rem', background: 'var(--negro)' }}>

      {/* TIJERAS DECORATIVAS — estáticas en la línea */}
      <div style={{ position: 'relative', height: '40px', margin: '0 80px 4rem', display: 'flex', alignItems: 'center' }}>

        {/* Línea completa */}
        <div style={{
          position: 'absolute', top: '50%', left: 0, right: 0,
          height: '1px', transform: 'translateY(-50%)',
          background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.3) 10%, rgba(201,168,76,0.5) 50%, rgba(201,168,76,0.3) 90%, transparent)',
          boxShadow: '0 0 6px rgba(201,168,76,0.2)',
        }} />

        {/* Tijeras centradas — decorativas */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
        }}>
          <svg width="44" height="44" viewBox="0 0 100 100" fill="none"
            style={{ filter: 'drop-shadow(0 0 10px rgba(201,168,76,0.6))', animation: 'tijerasGlow 3s ease-in-out infinite' }}>
            <defs>
              <linearGradient id="gt1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F0D97A"/>
                <stop offset="50%" stopColor="#C9A84C"/>
                <stop offset="100%" stopColor="#8B6914"/>
              </linearGradient>
              <linearGradient id="gt2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F0D97A"/>
                <stop offset="50%" stopColor="#C9A84C"/>
                <stop offset="100%" stopColor="#8B6914"/>
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="5" fill="url(#gt1)" opacity="0.9"/>
            <circle cx="50" cy="50" r="2.5" fill="#2a1800"/>
            <circle cx="48.5" cy="48.5" r="1.2" fill="rgba(255,255,255,0.4)"/>
            <g>
              <ellipse cx="28" cy="25" rx="14" ry="10" fill="none" stroke="url(#gt1)" strokeWidth="2.5" transform="rotate(-20, 28, 25)"/>
              <circle cx="36" cy="32" r="2" fill="url(#gt1)" opacity="0.7"/>
              <path d="M 36 32 L 50 50 L 85 42" stroke="url(#gt1)" strokeWidth="3" strokeLinecap="round" fill="none"/>
              <path d="M 50 50 L 85 42" stroke="#F0D97A" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.6"/>
            </g>
            <g>
              <ellipse cx="28" cy="75" rx="14" ry="10" fill="none" stroke="url(#gt2)" strokeWidth="2.5" transform="rotate(20, 28, 75)"/>
              <circle cx="36" cy="68" r="2" fill="url(#gt2)" opacity="0.7"/>
              <path d="M 36 68 L 50 50 L 85 58" stroke="url(#gt2)" strokeWidth="3" strokeLinecap="round" fill="none"/>
              <path d="M 50 50 L 85 58" stroke="#F0D97A" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.6"/>
            </g>
          </svg>
        </div>

        {/* Puntos decorativos */}
        {[16.6, 83.3].map((pos, i) => (
          <div key={i} style={{
            position: 'absolute', top: '50%', left: `${pos}%`,
            transform: 'translate(-50%, -50%)',
            width: '7px', height: '7px', borderRadius: '50%',
            background: 'var(--negro)',
            border: '1px solid rgba(201,168,76,0.4)',
            zIndex: 5,
          }} />
        ))}
      </div>

      {/* CARDS — siempre visibles, sin transparencia */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '1px',
        background: 'rgba(201,168,76,0.07)',
      }}>
        {pilares.map((p, i) => (
          <div key={i} style={{
            background: 'var(--negro)',
            padding: '4rem 3rem',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)',
            }} />

            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300, fontSize: '5rem', lineHeight: 1,
              color: 'transparent',
              WebkitTextStroke: '1px rgba(201,168,76,0.2)',
              marginBottom: '1.5rem',
            }}>{p.num}</div>

            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300, fontSize: '1.7rem',
              color: 'var(--oro)', marginBottom: '1.2rem',
              letterSpacing: '0.02em',
            }}>{p.titulo}</div>

            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.05rem', lineHeight: 2.1, opacity: 0.6,
            }}>{p.texto}</p>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes tijerasGlow {
          0%,100% { filter: drop-shadow(0 0 8px rgba(201,168,76,0.5)); }
          50% { filter: drop-shadow(0 0 16px rgba(201,168,76,0.9)); }
        }
        @media (max-width: 768px) {
          #pilares { padding: 4rem 2rem !important; }
          #pilares > div:first-child { margin: 0 20px 3rem !important; }
          #pilares > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
