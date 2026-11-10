import Image from 'next/image';

export default function Marquee() {
  const words = ['Renace','Una sola','Existió antes','Irrepetible','Vivió una vida','Ahora vive otra'];
  const items = [...words, ...words, ...words];
  return (
    <div className="on-crema" style={{ overflow: 'hidden', borderTop: '1px solid var(--borde-c)', borderBottom: '1px solid var(--borde-c)', padding: '1.2rem 0', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '80px', background: 'linear-gradient(to right, var(--crema), transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '80px', background: 'linear-gradient(to left, var(--crema), transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ display: 'flex', whiteSpace: 'nowrap', animation: 'marquee 40s linear infinite', alignItems: 'center' }}>
        {items.map((w, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0' }}>
            <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 300,
              fontSize: '1.1rem', letterSpacing: '0.1em', color: 'var(--txt-crema2)', padding: '0 1.8rem' }}>
              {w}
            </span>
            <span style={{ display: 'inline-block', width: '18px', height: '22px', position: 'relative', verticalAlign: 'middle', flexShrink: 0 }}>
              <Image src="/marca/logo-huevo-nuevo.png" alt="" fill style={{ objectFit: 'contain', mixBlendMode: 'multiply', opacity: 0.7 }} unoptimized />
            </span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }`}</style>
    </div>
  );
}
