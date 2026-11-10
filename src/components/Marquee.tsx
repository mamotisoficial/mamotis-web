export default function Marquee() {
  const words = ['Renace','Una sola','Existió antes','Irrepetible','Vivió una vida','Ahora vive otra'];
  const eggSVG = (
    <svg viewBox="0 0 50 62" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="25" cy="38" rx="17" ry="22" fill="#C9A84C" opacity=".6"/>
      <path d="M14,10 L17,5 L21,9 L25,4 L29,8 L33,4 L37,9 L41,5 L44,10" stroke="#8B6820" strokeWidth="1.1" fill="none" strokeLinecap="round"/>
      <ellipse cx="17" cy="28" rx="5" ry="9" fill="rgba(255,250,210,0.32)"/>
    </svg>
  );
  const items = [...words, ...words];
  return (
    <div className="on-crema" style={{ overflow: 'hidden', borderTop: '1px solid var(--borde-c)', borderBottom: '1px solid var(--borde-c)', padding: '1.5rem 0', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '100px', background: 'linear-gradient(to right, var(--crema), transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '100px', background: 'linear-gradient(to left, var(--crema), transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ display: 'flex', whiteSpace: 'nowrap', animation: 'marquee 34s linear infinite' }}>
        {items.map((w, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0' }}>
            <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 300,
              fontSize: '1.15rem', letterSpacing: '0.12em', color: 'var(--txt-crema2)', padding: '0 2rem' }}>
              {w}
            </span>
            <span style={{ padding: '0 0.4rem' }}>{eggSVG}</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}
