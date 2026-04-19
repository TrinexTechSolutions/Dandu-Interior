import heroArchitectureImg from '../assets/About/hero_architecture.webp';
import structuralIntegrityImg from '../assets/About/structural_integrity.webp';
import visionaryReachImg from '../assets/About/visionary_reach.webp';
import designIdeasImg from '../assets/DesignIdeas/BedRoom01.webp';
import drawingDemoImg from '../assets/About/engineering_mastery.webp';

export const blogs = [
  {
    id: 'modern-minimalist-villa-jubilee-hills',
    title: 'Modern Minimalist Villa: A Case Study in Jubilee Hills',
    author: 'D. Anudeep',
    date: 'April 15, 2026',
    category: 'Luxury Interiors',
    image: heroArchitectureImg,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Demo Link
    excerpt: 'Deep dive into our full interior execution for a premium villa in Jubilee Hills, focusing on structural elegance and high-end finishes.',
    content: [
      {
        type: 'paragraph',
        text: 'This project in Jubilee Hills represented a unique challenge: creating a space that felt expansive and "light" while maintaining the heavy structural requirements of a multi-level villa. Our team focused on a "Zero-Polish" brutalist interior style, using raw concrete textures and concealed structural supports.'
      },
      {
        type: 'heading',
        text: 'The Precision of Engineering'
      },
      {
        type: 'paragraph',
        text: 'By utilizing cantilevered slabs and hidden steel reinforcements, we were able to create a 40-foot clear span in the living area, allowing for floor-to-ceiling glass that integrates the interior with the lush exterior surroundings.'
      },
      {
        type: 'quote',
        text: 'In luxury residential construction, the best engineering is the kind you never see.'
      },
      {
        type: 'heading',
        text: 'Design & Blueprints'
      },
      {
        type: 'paragraph',
        text: 'Below, you can see the initial technical design for the spatial flow and lighting grid. This level of detail ensures that every electrical conduit and HVAC duct is integrated into the architecture rather than added as an afterthought.'
      },
      {
        type: 'drawing',
        image: drawingDemoImg,
        caption: 'Technical Layout & Lighting Schematic - Main Hall'
      }
    ]
  },
  {
    id: 'corporate-tech-office-hitec-city',
    title: 'Designing for Productivity: The HITEC City Tech Hub',
    author: 'Ar. T. Nikhil',
    date: 'April 10, 2026',
    category: 'Design Trends',
    image: visionaryReachImg,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Demo Link
    excerpt: 'How we used acoustic glass partitions and smart lighting to redefine the corporate workspace in Hyderabad.',
    content: [
      {
        type: 'paragraph',
        text: 'The modern corporate office is no longer just a place to work; it is a tool for recruitment and retention. For this 10,000 sq.ft. space in HITEC City, we moved away from cubicle culture towards a fluid, zone-based layout.'
      },
      {
        type: 'heading',
        text: 'Industrial Honesty'
      },
      {
        type: 'paragraph',
        text: 'We celebrated the building\'s industrial skeleton by leaving the HVAC systems exposed and using brushed steel for all partitions. This not only provided an aggressive, modern look but also allowed for easier maintenance and future flexibility.'
      },
      {
        type: 'drawing',
        image: drawingDemoImg,
        caption: 'Partition Grid & HVAC Integration Plan'
      }
    ]
  },
  {
    id: 'luxury-apartment-banjara-hills',
    title: 'Spatial Luxury in Banjara Hills Apartments',
    author: 'D. Anudeep',
    date: 'March 28, 2026',
    category: 'Luxury Interiors',
    image: structuralIntegrityImg,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Demo Link
    excerpt: 'An exploration of editorial space management in high-rise residences.',
    content: [
      {
        type: 'paragraph',
        text: 'Luxury in high-rise living is often restricted by the existing structural shell. In this Banjara Hills remodel, we removed non-load-bearing walls to create a singular, unified social space that prioritizes the city skyline views.'
      },
      {
        type: 'quote',
        text: 'Luxury is the freedom to move through a space without obstruction.'
      }
    ]
  },
  {
    id: 'monochrome-mastery-kokapet',
    title: 'Mastering the Monochrome: The Kokapet Residence',
    author: 'Ar. T. Nikhil',
    date: 'March 15, 2026',
    category: 'Design Trends',
    image: designIdeasImg,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Demo Link
    excerpt: 'A study on how to achieve endless depth using only three shades of grey.',
    content: [
      {
        type: 'paragraph',
        text: 'Working within a monochrome palette requires a masterful understanding of light. In the Kokapet project, we used different finishes—matte, gloss, and sandblasted—to ensure the space felt dynamic throughout the day as the sun moved.'
      },
      {
        type: 'drawing',
        image: drawingDemoImg,
        caption: '3D Volumetric Study - Kitchen & Dining Area'
      }
    ]
  }
];
