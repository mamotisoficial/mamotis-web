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
    lugar: '1973',
    material: 'Visón rescatado',
    forro: 'Seda brocada negra',
    asa: 'Cuero amarillo artesanal',
    medidas: '28 × 20 × 12 cm',
    origen: 'Abrigo de señora adquirido en un mercado vintage. Llevado durante más de veinte años por su dueña original antes de encontrarnos.',
    tipo: 'Visón',
    imagen: '/bolsos/vison-negro.jpg',
  },
  {
    id: 'vison-camel',
    num: '002',
    nombre: 'Visón Camel',
    lugar: '1968',
    material: 'Visón natural camel',
    forro: 'Raso brocado dorado',
    asa: 'Piel de serpiente vintage',
    medidas: '32 × 22 × 10 cm',
    origen: 'El abrigo original perteneció a una actriz de teatro en sus años de éxito. Viajó por toda Europa antes de quedar guardado.',
    tipo: 'Visón',
    imagen: '/bolsos/vison-camel.jpg',
  },
  {
    id: 'astracan',
    num: '003',
    nombre: 'Astracán',
    lugar: '1971',
    material: 'Astracán persa rizado',
    forro: 'Jacquard turquesa y bronce',
    asa: 'Terciopelo turquesa bordado',
    medidas: '24 × 18 × 10 cm',
    origen: 'Encontrado en un rastro italiano. Conserva etiqueta original de peletería florentina. Una pieza que cruzó fronteras.',
    tipo: 'Astracán',
    imagen: '/bolsos/astracan.jpg',
  },
  {
    id: 'rex-gris',
    num: '004',
    nombre: 'Rex Gris',
    lugar: '1965',
    material: 'Rex gris plata',
    forro: 'Damasco granate y oro',
    asa: 'Brocado rojo con hilo dorado',
    medidas: '35 × 14 × 8 cm',
    origen: 'Origen centroeuropeo, hallado en una subasta. El corte y el brocado sitúan su confección en los primeros años sesenta.',
    tipo: 'Rex',
    imagen: '/bolsos/rex-gris.jpg',
  },
];
