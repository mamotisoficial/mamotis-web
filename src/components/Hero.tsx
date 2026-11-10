'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="inicio" style={{ position:'relative', minHeight:'100vh', overflow:'hidden', display:'flex', alignItems:'center', background:'#060402' }}>

      {/* Foto de fondo */}
      <div style={{ position:'absolute', inset:0 }}>
        <Image
          src="/marca/bolso-hero-seda.png"
          alt="Bolso MAMOTIS sobre pedestal con fondo seda"
          fill
          style={{ objectFit:'cover', objectPosition:'center 20%' }}
          priority
        />
        {/* Degradado: oscuro izquierda, casi transparente derecha */}
        <div style={{
          position:'absolute', inset:0,
          background:'linear-gradient(90deg, rgba(4,2,1,0.93) 0%, rgba(4,2,1,0.78) 38%, rgba(4,2,1,0.35) 62%, rgba(4,2,1,0) 100%)',
        }} />
        {/* Degradado extra: oscuro abajo */}
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(4,2,1,0.5) 0%, transparent 40%)' }} />
      </div>

      {/* Contenido encima */}
      <div style={{ position:'relative', zIndex:1, width:'min(1320px,88vw)', margin:'0 auto', padding:'0 0 80px' }}>
        <div style={{ maxWidth: 620 }}>

          {/* Huevo dorado */}
          <div style={{ marginBottom: 32 }}>
            <svg viewBox="0 0 60 76" aria-label="Emblema MAMOTIS" style={{ width:56, height:71, filter:'drop-shadow(0 8px 20px rgba(0,0,0,0.6))' }}>
              <defs>
                <linearGradient id="eggH" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"   stopColor="#8c6424"/>
                  <stop offset="40%"  stopColor="#f5d987"/>
                  <stop offset="70%"  stopColor="#d4a93c"/>
                  <stop offset="100%" stopColor="#8c6424"/>
                </linearGradient>
              </defs>
              <path d="M30 3 C20 18 7 32 9 48 C11 65 21 73 30 73 C41 73 52 64 52 48 C52 32 40 18 30 3Z"
                fill="url(#eggH)" stroke="#e7c66f" strokeWidth="0.8"/>
              <path d="M18 42 Q30 32 43 43" fill="none" stroke="rgba(255,240,180,0.5)" strokeWidth="1.4"/>
            </svg>
          </div>

          {/* Titular Cormorant */}
          <h1 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(44px, 5.5vw, 80px)',
            fontWeight: 300,
            fontStyle: 'normal',
            lineHeight: 1.08,
            letterSpacing: '-0.01em',
            margin: '0 0 0',
            color: 'var(--cream)',
          }}>
            Un bolso artesano<br />
            tiene un <em style={{ color:'var(--gold2)', fontStyle:'italic' }}>nombre.</em>
          </h1>

          {/* Línea dorada */}
          <div style={{ height:1, width:200, background:'linear-gradient(90deg,var(--gold),rgba(201,168,76,0.2))', margin:'28px 0 24px' }} />

          {/* MAMOTIS en Italiana — grande */}
          <div style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(52px, 7vw, 100px)',
            letterSpacing: '0.3em',
            color: '#e8d9b8',
            lineHeight: 1,
            textShadow: '0 2px 20px rgba(0,0,0,0.4)',
          }}>
            MAMOTIS
          </div>

          <p style={{
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(16px, 1.6vw, 20px)',
            fontWeight: 300,
            color: '#a99d87',
            marginTop: 20,
            marginBottom: 36,
          }}>
            Una segunda vida. Una pieza irrepetible.
          </p>

          <Link href="#coleccion" style={{
            display:'inline-flex', alignItems:'center', gap:18,
            border:'1px solid var(--gold)', padding:'16px 26px',
            fontSize:10, letterSpacing:'0.22em',
            textTransform:'uppercase', color:'var(--cream)',
            transition:'.25s', textDecoration:'none', fontFamily:'var(--sans)',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background='var(--gold)'; (e.currentTarget as HTMLElement).style.color='#100d08'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background=''; (e.currentTarget as HTMLElement).style.color='var(--cream)'; }}>
            Descubre la colección <span style={{ fontSize:14 }}>⟶</span>
          </Link>
        </div>
      </div>

      <style>{`
        @media(max-width:640px){
          #inicio h1{ font-size:38px!important; }
          #inicio .mamotis-display{ font-size:52px!important; letter-spacing:0.2em!important; }
        }
      `}</style>
    </section>
  );
}
