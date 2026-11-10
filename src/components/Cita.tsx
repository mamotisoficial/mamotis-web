import Image from 'next/image';

export default function Cita() {
  return (
    <section style={{ position: 'relative', background: '#080604', overflow: 'hidden', minHeight: 600 }}>
      {/* Fur photo — right half */}
      <div style={{ position: 'absolute', right: 0, top: 0, width: '48%', height: '100%' }}>
        <Image
          src="/historia/manifiesto-piel.jpg"
          alt="Detalle de piel vintage"
          fill
          style={{ objectFit: 'cover' }}
        />
        {/* left fade to dark */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,#080604 0%,#08060480 40%,transparent 70%)' }} />
      </div>

      {/* Content */}
      <div className="wrap" style={{ position: 'relative', zIndex: 1, padding: '90px 0 100px' }}>
        {/* Eyebrow */}
        <div style={{ fontSize: 10, letterSpacing: '0.42em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 18 }}>El manifiesto</div>
        <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg,var(--gold),transparent)', marginBottom: 48 }} />

        {/* Big quote */}
        <h2 style={{ font: `italic clamp(36px,5vw,70px)/1.18 var(--serif)`, maxWidth: 620, margin: '0 0 56px', letterSpacing: '-0.02em', color: 'var(--cream)' }}>
          "Hubo una época en que<br />vestirse<br />era un <span style={{ color: 'var(--gold2)' }}>acto de poder."</span>
        </h2>

        {/* Two-column text */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 40px', maxWidth: 560 }} className="cita-cols">
          {/* Divider between columns */}
          <p style={{ margin: 0, font: `15px/1.85 var(--serif)`, color: '#b9ae9b', borderRight: '1px solid #3a2e1a', paddingRight: 32 }}>
            Las mujeres lo sabían. Un abrigo de piel no era ropa — era una declaración. Se compraba una vez. Se llevaba toda una vida.
          </p>
          <p style={{ margin: 0, font: `15px/1.85 var(--serif)`, color: '#b9ae9b', paddingLeft: 8 }}>
            Hoy esos abrigos esperan, olvidados en armarios.{' '}
            <strong style={{ fontWeight: 400, color: 'var(--gold2)' }}>MAMOTIS los encuentra. Y les da otra vida.</strong>
          </p>
        </div>
      </div>

      <style>{`
        @media(max-width:640px){
          .cita-cols{grid-template-columns:1fr!important;gap:20px!important}
          .cita-cols p:first-child{border-right:none!important;padding-right:0!important;border-bottom:1px solid #3a2e1a;padding-bottom:20px}
        }
        @media(max-width:640px){
          section .fur-half{width:100%!important;height:260px!important;position:relative!important;top:0!important}
        }
      `}</style>
    </section>
  );
}
