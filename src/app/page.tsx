import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Ribbon from '@/components/Ribbon';
import Cita from '@/components/Cita';
import Historia from '@/components/Historia';
import Proceso from '@/components/Proceso';
import PreviewColeccion from '@/components/PreviewColeccion';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ribbon />
        <Cita />
        <Historia />
        <Proceso />
        <PreviewColeccion />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
