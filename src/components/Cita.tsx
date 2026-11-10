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
    <section ref={ref} className="on-negro reveal" style={{ padding: '7rem clamp(2rem,8vw,8rem)', textAlign: 'center' }}>
      <span className="eyebrow eyebrow-n">— La historia —</span>
      <blockquote style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontStyle: 'italic',
        fontSize: 'clamp(2.2rem, 5.5vw, 5.5rem)', lineHeight: 1.2,
        color: 'var(--crema)', marginBottom: '4rem', maxWidth: '900px', margin: '0 auto 4rem' }}>
        "Hubo una época en que vestirse<br/>
        era un <em style={{ color: 'var(--oro)', fontStyle: 'normal' }}>acto de poder.</em>"
      </blockquote>
      <p style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', letterSpacing: '0.18em',
        lineHeight: 2.4, color: 'rgba(242,232,212,0.38)', maxWidth: '52ch', margin: '0 auto' }}>
        Las mujeres lo sabían. Un abrigo de piel no era ropa — era una declaración.<br/>
        Se compraba una vez. Se llevaba toda una vida. Se heredaba como un secreto.<br/><br/>
        Hoy esos abrigos esperan, olvidados en armarios.<br/>
        MAMOTIS los encuentra. Y les da otra vida.
      </p>
    </section>
  );
}
