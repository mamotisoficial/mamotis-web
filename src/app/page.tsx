import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Historia from '@/components/Historia';
import Pilares from '@/components/Pilares';
import Cita from '@/components/Cita';
import PreviewColeccion from '@/components/PreviewColeccion';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <Historia />
      <Pilares />
      <Cita />
      <PreviewColeccion />
      <Footer />
    </main>
  );
}
