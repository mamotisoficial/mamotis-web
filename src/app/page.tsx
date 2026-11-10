import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Cita from '@/components/Cita';
import Historia from '@/components/Historia';
import Proceso from '@/components/Proceso';
import Coleccion from '@/components/Coleccion';
import Pilares from '@/components/Pilares';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Cita />
        <Historia />
        <Proceso />
        <Coleccion />
        <Pilares />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
