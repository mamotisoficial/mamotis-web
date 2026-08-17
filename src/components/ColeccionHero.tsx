export default function ColeccionHero() {
  return (
    <div style={{
      padding: '12rem 5rem 5rem', position: 'relative',
      overflow: 'hidden', borderBottom: '1px solid var(--borde)',
    }}>
      <div style={{
        position: 'absolute', right: '3rem', top: '50%', transform: 'translateY(-50%)',
        fontFamily: "'Cormorant Garamond', serif", fontSize: '22vw', fontWeight: 300,
        color: 'transparent', WebkitTextStroke: '1px rgba(201,168,76,.04)',
        pointerEvents: 'none', userSelect: 'none', lineHeight: 1,
      }}>C</div>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '580px' }}>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: 'italic',
          fontSize: 'clamp(2.8rem, 5.5vw, 5rem)', lineHeight: 1.06, marginBottom: '1.5rem',
        }}>
          Cada pieza{' '}
          <em style={{ color: 'var(--oro)', fontStyle: 'normal' }}>existió antes.</em>
        </h1>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.9, opacity: .45, maxWidth: '440px' }}>
          Piezas únicas. Irrepetibles. Cada bolso MAMOTIS
          nació de un abrigo con vida propia.
          Solo existe una unidad de cada uno.
        </p>
      </div>
    </div>
  );
}
