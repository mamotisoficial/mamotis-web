'use client';
import { useEffect, useRef } from 'react';

export default function Cita() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="on-negro reveal" style={{ padding: '5rem clamp(2rem,8vw,8rem) 4rem' }}>
      {/* cita grande */}
      <blockquote style={{
        fontFamily: 'var(--serif)', fontWeight: 300, fontStyle: 'italic',
        fontSize: 'clamp(2.8rem, 6.5vw, 7rem)', lineHeight: 1.1,
        color: 'var(--crema)', maxWidth: '1000px', margin: '0 auto 3rem',
        textAlign: 'center',
      }}>
        "Hubo una época en que vestirse<br/>
        era un <em style={{ color: 'var(--oro)', fontStyle: 'normal' }}>acto de poder.</em>"
      </blockquote>

      {/* texto en 2 columnas — más legible */}
      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', textAlign: 'left' }}>
        <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(1rem,1.3vw,1.25rem)',
          lineHeight: 1.85, color: 'rgba(242,232,212,0.72)', margin: 0 }}>
          Las mujeres lo sabían. Un abrigo de piel no era ropa — era una declaración. Se compraba una vez. Se llevaba toda una vida.
        </p>
        <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(1rem,1.3vw,1.25rem)',
          lineHeight: 1.85, color: 'rgba(242,232,212,0.72)', margin: 0 }}>
          Hoy esos abrigos esperan, olvidados en armarios. <em style={{ color: 'var(--oro)', fontStyle: 'normal' }}>MAMOTIS los encuentra. Y les da otra vida.</em>
        </p>
      </div>

      <style>{`@media(max-width:640px){ .cita-cols { grid-template-columns:1fr !important; } }`}</style>
    </section>
  );
}
