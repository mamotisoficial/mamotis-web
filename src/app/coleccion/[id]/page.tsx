import Nav from '@/components/Nav';
import FichaProducto from '@/components/FichaProducto';
import Footer from '@/components/Footer';
import { productos } from '@/data/productos';

export function generateStaticParams() {
  return productos.map((p) => ({ id: p.id }));
}

export default function Producto({ params }: { params: { id: string } }) {
  const producto = productos.find((p) => p.id === params.id);
  if (!producto) return <div style={{ color: 'white', padding: '10rem', textAlign: 'center' }}>Producto no encontrado</div>;
  return (
    <main>
      <Nav />
      <FichaProducto producto={producto} />
      <Footer />
    </main>
  );
}
