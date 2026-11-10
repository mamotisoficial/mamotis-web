import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Cita from '@/components/Cita';
import Historia from '@/components/Historia';
import Pilares from '@/components/Pilares';
import PreviewColeccion from '@/components/PreviewColeccion';
import InstagramFeed from '@/components/InstagramFeed';
import Footer from '@/components/Footer';
import Contacto from '@/components/Contacto';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <Cita />
      <Historia />
      <Pilares />
      <PreviewColeccion />
      <Contacto />
      <InstagramFeed />
      <Footer />
    </main>
  );
}
