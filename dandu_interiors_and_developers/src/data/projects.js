const projectImageMap = Object.fromEntries(
  Object.entries(import.meta.glob('../assets/Projects/*.webp', { eager: true, import: 'default' })).map(
    ([path, image]) => [path.split('/').pop(), image]
  )
);

const getProjectImage = (fileName) => projectImageMap[fileName];

export const projects = [
  {
    id: '1',
    title: 'Modern Minimalist Villa',
    location: 'Jubilee Hills, Hyderabad',
    category: 'Interior Design',
    image: getProjectImage('project-gallery-58.webp'),
    galleryImages: [
      getProjectImage('project-gallery-52.webp'),
      getProjectImage('project-gallery-53.webp')
    ],
    description: 'A complete interior overhaul focusing on clean lines, natural light, and a neutral color palette with bold accents.',
    servicesUsed: ['Interior Design', 'Painting', 'Electrical']
  },
  {
    id: '2',
    title: 'Corporate Tech Office',
    location: 'HITEC City, Hyderabad',
    category: 'Office Partitions',
    image: getProjectImage('project-gallery-63.webp'),
    galleryImages: [
      getProjectImage('project-gallery-69.webp'),
      getProjectImage('project-gallery-70.webp')
    ],
    description: 'A dynamic workspace designed for collaboration, featuring acoustic glass partitions and smart lighting.',
    servicesUsed: ['Office Partitions', 'Electrical', 'Interior Design']
  },
  {
    id: '3',
    title: 'Luxury Apartment Renovation',
    location: 'Banjara Hills, Hyderabad',
    category: 'Renovation',
    image: getProjectImage('project-gallery-54.webp'),
    galleryImages: [
      getProjectImage('project-gallery-56.webp'),
      getProjectImage('project-gallery-57.webp')
    ],
    description: 'Transformed an outdated apartment into a modern luxury living space with Italian marble and custom woodwork.',
    servicesUsed: ['Renovation', 'Masonry', 'Plumbing']
  },
  {
    id: '4',
    title: 'Boutique Cafe Setup',
    location: 'Gachibowli, Hyderabad',
    category: 'Commercial',
    image: getProjectImage('project-gallery-60.webp'),
    galleryImages: [
      getProjectImage('project-gallery-61.webp'),
      getProjectImage('project-gallery-62.webp')
    ],
    description: 'End-to-end interior execution for a premium coffee shop, including custom barista counters and ambient lighting.',
    servicesUsed: ['Interior Design', 'Electrical', 'Handyman']
  },
  {
    id: '5',
    title: 'Contemporary Kitchen Makeover',
    location: 'Madhapur, Hyderabad',
    category: 'Renovation',
    image: getProjectImage('project-gallery-36.webp'),
    galleryImages: [
      getProjectImage('project-gallery-37.webp'),
      getProjectImage('project-gallery-38.webp')
    ],
    description: 'A structural kitchen remodel featuring custom cabinetry, high-end tiling, and modern plumbing fixtures.',
    servicesUsed: ['Masonry', 'Plumbing', 'Renovation']
  },
  {
    id: '6',
    title: 'Smart Home Automation Integration',
    location: 'Kukatpally, Hyderabad',
    category: 'Electrical',
    image: getProjectImage('project-gallery-03.webp'),
    galleryImages: [
      getProjectImage('project-gallery-18.webp'),
      getProjectImage('project-gallery-04.webp')
    ],
    description: 'Complete electrical rewiring and smart home system integration for a three-story residence.',
    servicesUsed: ['Electrical', 'Handyman']
  },
  {
    id: '7',
    title: 'Minimalist Office Space',
    location: 'Banjara Hills, Hyderabad',
    category: 'Commercial',
    image: getProjectImage('project-gallery-16.webp'),
    galleryImages: [
      getProjectImage('project-gallery-17.webp'),
      getProjectImage('project-gallery-19.webp')
    ],
    description: 'A bespoke minimalist office with extensive natural light.',
    servicesUsed: ['Interior Design']
  },
  {
    id: '8',
    title: 'Vintage Cafe Resto',
    location: 'Jubilee Hills, Hyderabad',
    category: 'Commercial',
    image: getProjectImage('project-gallery-26.webp'),
    galleryImages: [
      getProjectImage('project-gallery-25.webp'),
      getProjectImage('project-gallery-34.webp')
    ],
    description: 'A cozy vintage-themed cafe with custom wooden paneling.',
    servicesUsed: ['Interior Design', 'Masonry', 'Electrical']
  },
  {
    id: '9',
    title: 'High-rise Condo Remodel',
    location: 'Financial District, Hyderabad',
    category: 'Renovation',
    image: getProjectImage('project-gallery-21.webp'),
    galleryImages: [
      getProjectImage('project-gallery-22.webp'),
      getProjectImage('project-gallery-23.webp')
    ],
    description: 'A premium condo remodel focusing on modern luxury.',
    servicesUsed: ['Renovation', 'Painting']
  },
  {
    id: '10',
    title: 'Open Concept Kitchen',
    location: 'Kokapet, Hyderabad',
    category: 'Renovation',
    image: getProjectImage('project-gallery-27.webp'),
    galleryImages: [
      getProjectImage('project-gallery-30.webp'),
      getProjectImage('project-gallery-31.webp')
    ],
    description: 'Transforming a closed kitchen into a fluid open-concept living space.',
    servicesUsed: ['Plumbing', 'Renovation', 'Masonry']
  },
  {
    id: '11',
    title: 'Industrial Design Loft',
    location: 'Madhapur, Hyderabad',
    category: 'Interior Design',
    image: getProjectImage('project-gallery-37.webp'),
    galleryImages: [
      getProjectImage('project-gallery-33.webp'),
      getProjectImage('project-gallery-35.webp')
    ],
    description: 'An aggressive industrial theme featuring exposed brick walls and plumbing.',
    servicesUsed: ['Interior Design', 'Masonry', 'Plumbing']
  },
  {
    id: '12',
    title: 'Retail Storefront Styling',
    location: 'Secunderabad',
    category: 'Commercial',
    image: getProjectImage('project-gallery-02.webp'),
    galleryImages: [
      getProjectImage('project-gallery-29.webp'),
      getProjectImage('project-gallery-28.webp')
    ],
    description: 'Custom retail shelving, lighting, and layout execution.',
    servicesUsed: ['Electrical', 'Interior Design']
  },
  {
    id: '13',
    title: 'Scandinavian Living Room',
    location: 'Lingampally, Hyderabad',
    category: 'Interior Design',
    image: getProjectImage('project-gallery-28.webp'),
    galleryImages: [
      getProjectImage('project-gallery-29.webp'),
      getProjectImage('project-gallery-39.webp')
    ],
    description: 'A cozy, light-filled living space following Nordic design principles.',
    servicesUsed: ['Interior Design', 'Painting']
  },
  {
    id: '14',
    title: 'Art Deco Studio',
    location: 'Somajiguda, Hyderabad',
    category: 'Interior Design',
    image: getProjectImage('project-gallery-14.webp'),
    galleryImages: [
      getProjectImage('project-gallery-13.webp'),
      getProjectImage('project-gallery-24.webp')
    ],
    description: 'A bold, geometric studio space with luxury gold accents.',
    servicesUsed: ['Interior Design', 'Electrical']
  },
  {
    id: '15',
    title: 'Modern Terrace Garden',
    location: 'Pragati Nagar, Hyderabad',
    category: 'Exterior',
    image: getProjectImage('project-gallery-01.webp'),
    galleryImages: [
      getProjectImage('project-gallery-05.webp'),
      getProjectImage('project-gallery-06.webp')
    ],
    description: 'Innovative outdoor living space with integrated seating and custom lighting.',
    servicesUsed: ['Masonry', 'Electrical', 'Handyman']
  },
  {
    id: '16',
    title: 'Zen Spa Interior',
    location: 'Begumpet, Hyderabad',
    category: 'Commercial',
    image: getProjectImage('project-gallery-09.webp'),
    galleryImages: [
      getProjectImage('project-gallery-10.webp'),
      getProjectImage('project-gallery-11.webp')
    ],
    description: 'A serene and calming spa environment using natural materials and hidden lighting.',
    servicesUsed: ['Interior Design', 'Renovation', 'Plumbing']
  },
  {
    id: '17',
    title: 'Rustic Farmhouse Kitchen',
    location: 'Moinabad',
    category: 'Renovation',
    image: getProjectImage('project-gallery-41.webp'),
    galleryImages: [
      getProjectImage('project-gallery-42.webp'),
      getProjectImage('project-gallery-44.webp')
    ],
    description: 'Reclaiming traditional charm with modern efficiency in this structural kitchen remodel.',
    servicesUsed: ['Renovation', 'Plumbing', 'Masonry']
  },
  {
    id: '18',
    title: 'Gaming Den Setup',
    location: 'Kukatpally, Hyderabad',
    category: 'Electrical',
    image: getProjectImage('project-gallery-18.webp'),
    galleryImages: [
      getProjectImage('project-gallery-55.webp'),
      getProjectImage('project-gallery-56.webp')
    ],
    description: 'Custom RGB lighting, cable management, and soundproofing for the ultimate gaming room.',
    servicesUsed: ['Electrical', 'Handyman']
  },
  {
    id: '19',
    title: 'Mid-Century Modern Bedroom',
    location: 'Nallagandla, Hyderabad',
    category: 'Interior Design',
    image: getProjectImage('project-gallery-49.webp'),
    galleryImages: [
      getProjectImage('project-gallery-47.webp'),
      getProjectImage('project-gallery-46.webp')
    ],
    description: 'Iconic furniture pieces meet warm wood tones in this peaceful bedroom retreat.',
    servicesUsed: ['Interior Design', 'Painting']
  },
  {
    id: '20',
    title: 'Co-working Vibrant Hub',
    location: 'Uppal, Hyderabad',
    category: 'Office Partitions',
    image: getProjectImage('project-gallery-34.webp'),
    galleryImages: [
      getProjectImage('project-gallery-59.webp'),
      getProjectImage('project-gallery-60.webp')
    ],
    description: 'Using modular partitions to create flexible workspace zones in a large open hall.',
    servicesUsed: ['Office Partitions', 'Interior Design', 'Electrical']
  }
];
