import { Paintbrush, Hammer, Wrench, Zap, SplitSquareHorizontal, Ruler, Grid, Home } from 'lucide-react';

export const services = [
  {
    id: 'interior-design',
    title: 'Interior Design',
    icon: Home,
    shortDesc: 'Transform your space into a stunning, functional environment with our expert interior design solutions.',
    fullDesc: 'Our interior design service covers everything from concept to completion. We listen to your vision and bring it to life, creating spaces that are both beautiful and practical. Whether it is a cozy residential home or a modern corporate office, we use premium materials and innovative layouts to maximize the potential of your property.',
    benefits: ['Space Optimization', 'Custom Furniture Design', 'Color Psychology', 'Lighting Consultation'],
    subServices: [
      { name: 'Residential Design', desc: 'Crafting personalized living spaces tailored to your lifestyle.' },
      { name: 'Office Design', desc: 'Optimizing workspaces for productivity and brand identity.' },
      { name: 'Commercial Design', desc: 'Engaging environments for retail and hospitality.' }
    ]
  },
  {
    id: 'masonry',
    title: 'Masonry Works',
    icon: Grid,
    shortDesc: 'Precision tile fixing, grouting, and marble installation for durable and aesthetic finishes.',
    fullDesc: 'Our skilled masons deliver flawless execution for all your structural and decorative masonry needs. From intricate tile patterns to heavy-duty block work, we ensure high-quality craftsmanship that stands the test of time.',
    benefits: ['High Durability', 'Premium Materials', 'Flawless Finish', 'Timely Execution'],
    subServices: [
      { name: 'Tile Fixing', desc: 'Ceramic, porcelain, and mosaic tiling for floors and walls.' },
      { name: 'Marble Installation', desc: 'Luxurious marble fitting for high-end interiors.' },
      { name: 'Grouting', desc: 'Seamless and durable joint filling.' },
      { name: 'Block Work', desc: 'Sturdy wall construction and modifications.' }
    ]
  },
  {
    id: 'renovation',
    title: 'Renovation',
    icon: Hammer,
    shortDesc: 'Complete home, bathroom, and kitchen makeovers designed to elevate your living experience.',
    fullDesc: 'Breathe new life into your old spaces. Our comprehensive renovation services handle tearing down the old and building the new, upgrading everything from layout and plumbing to final decorative finishes. We specialize in increasing property value and daily comfort.',
    benefits: ['Increased Home Value', 'Modernized Systems', 'Better Space Utilization', 'Energy Efficiency'],
    subServices: [
      { name: 'Full Home Renovation', desc: 'Complete overhaul of residential properties.' },
      { name: 'Bathroom Remodeling', desc: 'Modernizing fixtures, tiles, and vanity units.' },
      { name: 'Kitchen Makeovers', desc: 'Custom cabinets, countertops, and appliance integration.' }
    ]
  },
  {
    id: 'office-partitions',
    title: 'Office Partitions',
    icon: SplitSquareHorizontal,
    shortDesc: 'Intelligent spatial division using glass, aluminum, and demountable systems for modern workspaces.',
    fullDesc: 'Create privacy without sacrificing natural light. We design and install premium office partitions that define spaces effectively while maintaining an open, collaborative feel. Our acoustic solutions also ensure reduced noise levels for focused work.',
    benefits: ['Acoustic Insulation', 'Natural Light Flow', 'Flexible Layouts', 'Quick Installation'],
    subServices: [
      { name: 'Glass Partitions', desc: 'Frameless and framed glass for a sleek look.' },
      { name: 'Aluminum Partitions', desc: 'Durable and lightweight structural divisions.' },
      { name: 'Demountable Systems', desc: 'Flexible partitions that move with your business.' },
      { name: 'Gypsum Walls', desc: 'Solid, seamless drywall partitioning.' }
    ]
  },
  {
    id: 'painting',
    title: 'Painting',
    icon: Paintbrush,
    shortDesc: 'Professional interior and exterior painting services for residential and commercial properties.',
    fullDesc: 'A fresh coat of paint can completely transform a property. Our professional painters use top-tier, low-VOC brands to deliver smooth, long-lasting finishes. We handle extensive prep work, ensuring flawless execution from primer to the final coat.',
    benefits: ['Surface Preparation', 'Premium Paints', 'Color Consultation', 'Clean Execution'],
    subServices: [
      { name: 'Interior Painting', desc: 'Walls, ceilings, and trim painting.' },
      { name: 'Exterior Painting', desc: 'Weather-resistant coating for facades.' },
      { name: 'Villa Painting', desc: 'Comprehensive painting for large residential properties.' },
      { name: 'Industrial Coating', desc: 'Specialized protective paints for warehouses.' }
    ]
  },
  {
    id: 'electrical',
    title: 'Electrical Works',
    icon: Zap,
    shortDesc: 'Safe, reliable electrical installations, repairs, and lighting solutions by certified professionals.',
    fullDesc: 'From simple light fixture installations to complete home rewiring, our certified electricians ensure your property is safe, efficient, and up to code. We also specialize in smart home integrations and energy-saving lighting setups.',
    benefits: ['Certified Electricians', 'Safety Compliance', 'Smart Home Ready', 'Energy Efficient'],
    subServices: [
      { name: 'Installations', desc: 'New wiring, panels, and circuit breakers.' },
      { name: 'Repairs & Maintenance', desc: 'Troubleshooting faults and fixing shorts.' },
      { name: 'Lighting Design', desc: 'Ambient, task, and accent lighting installation.' },
      { name: 'Switches & Sockets', desc: 'Upgrading to modern, styled faceplates.' }
    ]
  },
  {
    id: 'plumbing',
    title: 'Plumbing',
    icon: Wrench,
    shortDesc: 'Expert leak repair, pipe installations, and sanitary fitting services to keep systems flowing smoothly.',
    fullDesc: 'Water damage can be devastating. Our rapid-response plumbers handle everything from annoying dripping faucets to major pipe bursts. We also install high-end sanitary ware and design robust plumbing layouts for new constructions.',
    benefits: ['24/7 Support Available', 'Leak Detection', 'High-Quality Fittings', 'Water Pressure Optimization'],
    subServices: [
      { name: 'Leak Repair', desc: 'Fixing pipes, faucets, and concealed leaks.' },
      { name: 'Installations', desc: 'Water heaters, pumps, and water tanks.' },
      { name: 'Sanitary Fittings', desc: 'Toilets, sinks, and shower enclosures.' },
      { name: 'Drain Cleaning', desc: 'Unclogging and high-pressure jetting.' }
    ]
  },
  {
    id: 'handyman',
    title: 'Handyman Services',
    icon: Ruler,
    shortDesc: 'Quick, reliable fixes for mounting, drilling, furniture assembly, and general home maintenance.',
    fullDesc: 'For all the small jobs that make a big difference, our professional handymen are at your service. Whether you need a TV mounted, curtains hung, or complex flat-pack furniture assembled, we get it done efficiently and cleanly.',
    benefits: ['Multi-skilled Workers', 'Quick Turnaround', 'Fully Equipped Toolkits', 'Neat Workmanship'],
    subServices: [
      { name: 'Mounting & Drilling', desc: 'TVs, mirrors, and picture frames.' },
      { name: 'Furniture Assembly', desc: 'Building flat-pack and custom furniture.' },
      { name: 'Curtains & Blinds', desc: 'Precise measurement and installation.' },
      { name: 'Shelves & Racks', desc: 'Secure storage solutions.' }
    ]
  }
];
