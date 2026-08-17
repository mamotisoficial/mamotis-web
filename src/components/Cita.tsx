export default function Cita() {
  return (
    <section style={{ padding: '11rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      {[500, 800, 1100].map((size, i) => (
        <div key={i} style={{
          position: 'absolute', borderRadius: '50%',
          border: '1px solid rgba(201,168,76,.04)',
          width: `${size}px`, height: `${size}px`,
          top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          animation: i > 0 ? `rotS ${i===1?40:65}s linear infinite ${i===2?'reverse':''}` : undefined,
        }} />
      ))}
      <style>{`@keyframes rotS { from { transform: translate(-50%,-50%) rotate(0); } to { transform: translate(-50%,-50%) rotate(360deg); } }`}</style>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: 'italic',
          fontSize: 'clamp(2rem, 4.5vw, 4rem)', lineHeight: 1.3,
          maxWidth: '780px', margin: '0 auto 1.5rem', color: 'var(--crema)',
        }}>
          "No estás comprando un bolso.<br />
          Estás <em style={{ color: 'var(--oro)', fontStyle: 'normal' }}>continuando</em> una historia."
        </p>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '.52rem', letterSpacing: '.4em', opacity: .22 }}>
          — MAMOTIS
        </p>
      </div>
    </section>
  );
}
