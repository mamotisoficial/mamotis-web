// Separador animado con huevos dorados — se coloca ENTRE secciones
const SEEDS = ['Una sola','Existió antes','Irrepetible','Vivió una vida','Ahora vive otra','Renace'];
const DOUBLE = [...SEEDS, ...SEEDS];

export default function Ribbon() {
  return (
    <div style={{
      width: '100%', height: 42, overflow: 'hidden',
      background: 'var(--cream)',
      borderTop: '1px solid #d7c7a4',
      borderBottom: '1px solid #d7c7a4',
      display: 'flex', alignItems: 'center', whiteSpace: 'nowrap',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 28,
        minWidth: 'max-content',
        animation: 'ribbon-scroll 44s linear infinite',
        font: `italic 13px var(--serif)`,
        letterSpacing: '0.08em',
        color: '#7a6040',
      }}>
        {DOUBLE.map((t, i) => (
          <span key={i} style={{ display:'flex', alignItems:'center', gap: 14 }}>
            {t}
            {/* Huevo real del logo MAMOTIS */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/marca/logo-huevo-nuevo.png"
              alt=""
              aria-hidden="true"
              width={12}
              height={15}
              style={{ display:'inline-block', verticalAlign:'middle', objectFit:'contain', opacity: 0.85 }}
            />
          </span>
        ))}
      </div>
      <style>{`@keyframes ribbon-scroll { to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}
