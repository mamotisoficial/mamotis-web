'use client';

const items = ['Renace', '·', 'MAMOTIS', '·', 'Segunda Vida', '·', 'Arqueología del Lujo', '·'];
const items2 = ['Piel Rescatada', '·', 'Madrid', '·', 'Hecho a Mano', '·', 'Pieza Única', '·'];

function Track({ items, reverse }: { items: string[], reverse?: boolean }) {
  const content = [...items, ...items].map((item, i) => (
    <span key={i} style={{
      fontFamily: item === '·' ? "'DM Mono',monospace" : "'Cormorant Garamond',serif",
      fontWeight: 300, fontStyle: item === '·' ? 'normal' : 'italic',
      fontSize: item === '·' ? '1rem' : 'clamp(2rem,4vw,3.5rem)',
      color: 'transparent',
      WebkitTextStroke: '1px rgba(201,168,76,0.2)',
      padding: '0 1.5rem', whiteSpace: 'nowrap' as const,
      userSelect: 'none' as const,
    }}>{item}</span>
  ));

  return (
    <div style={{ display:'flex', whiteSpace:'nowrap', overflow:'hidden',
      padding:'1.4rem 0', borderBottom:'1px solid rgba(201,168,76,.05)' }}>
      <div style={{
        display:'flex', flexShrink:0,
        animation: `${reverse ? 'mqR' : 'mq'} 28s linear infinite`,
      }}>
        {content}
      </div>
      <div style={{ display:'flex', flexShrink:0,
        animation: `${reverse ? 'mqR' : 'mq'} 28s linear infinite`,
      }} aria-hidden>
        {content}
      </div>
      <style>{`
        @keyframes mq { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes mqR { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `}</style>
    </div>
  );
}

export default function Marquee() {
  return (
    <div style={{ overflow:'hidden', borderTop:'1px solid var(--borde)', borderBottom:'1px solid var(--borde)' }}>
      <Track items={items} />
      <Track items={items2} reverse />
    </div>
  );
}
