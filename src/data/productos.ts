export type Producto = {
  id: string;
  num: string;
  nombre: string;
  lugar: string;
  material: string;
  forro: string;
  asa: string;
  medidas: string;
  origen: string;
  tipo: string;
  imagen: string;
};

export const productos: Producto[] = [
  {
    id: 'vison-negro',
    num: '001',
    nombre: 'Visón Negro',
    lugar: 'Madrid · 1973',
    material: 'Visón rescatado',
    forro: 'Seda brocada negra',
    asa: 'Cuero amarillo artesanal',
    medidas: '28 × 20 × 12 cm',
    origen: 'Abrigo de señora adquirido en un mercado vintage de Malasaña. Llevado durante más de veinte años por su dueña original.',
    tipo: 'Visón',
    imagen: '/bolsos/vison-negro.jpg',
  },
  {
    id: 'vison-camel',
    num: '002',
    nombre: 'Visón Camel',
    lugar: 'Madrid · 1968',
    material: 'Visón natural camel',
    forro: 'Raso brocado dorado',
    asa: 'Piel de serpiente vintage',
    medidas: '32 × 22 × 10 cm',
    origen: 'Procedente de una peletería de la Gran Vía. El abrigo original perteneció a una actriz de teatro en sus años de éxito.',
    tipo: 'Visón',
    imagen: '/bolsos/vison-camel.jpg',
  },
  {
    id: 'astracan',
    num: '003',
    nombre: 'Astracán',
    lugar: 'Italia · 1971',
    material: 'Astracán persa rizado',
    forro: 'Jacquard turquesa y bronce',
    asa: 'Terciopelo turquesa bordado',
    medidas: '24 × 18 × 10 cm',
    origen: 'Abrigo de procedencia italiana encontrado en un rastro de Milán. Conserva etiqueta original de peletería florentina.',
    tipo: 'Astracán',
    imagen: '/bolsos/astracan.jpg',
  },
  {
    id: 'rex-gris',
    num: '004',
    nombre: 'Rex Gris',
    lugar: 'Checoslovaquia · 1965',
    material: 'Rex gris plata',
    forro: 'Damasco granate y oro',
    asa: 'Brocado rojo con hilo dorado',
    medidas: '35 × 14 × 8 cm',
    origen: 'Abrigo de origen centroeuropeo hallado en una subasta de Madrid. El corte y el brocado sitúan su confección en los años sesenta.',
    tipo: 'Rex',
    imagen: '/bolsos/rex-gris.jpg',
  },
];
