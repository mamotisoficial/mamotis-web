'use client';
import { useEffect } from 'react';

export default function InstagramFeed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://w.behold.so/widget.js';
    script.type = 'module';
    document.head.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return (
    <section className="instagram-section" style={{ padding: '6rem 5rem', background: 'var(--negro)' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.52rem',
          letterSpacing: '0.4em', color: 'var(--oro)', opacity: 0.5,
          textTransform: 'uppercase', display: 'block', marginBottom: '1.2rem' }}>
          — Síguenos —
        </span>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
          fontStyle: 'italic', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: 'var(--crema)' }}>
          @mamotis_
        </h2>
      </div>

      <div
        data-behold-id="PENDIENTE_ID_BEHOLD"
        style={{ width: '100%' }}
      />

      <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <a href="https://www.instagram.com/mamotis_/" target="_blank" rel="noopener noreferrer"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
            fontSize: '1rem', color: 'var(--oro)', opacity: 0.7,
            textDecoration: 'none', letterSpacing: '0.06em' }}>
          Ver más en Instagram →
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .instagram-section { padding: 4rem 2rem !important; }
        }
      `}</style>
    </section>
  );
}
