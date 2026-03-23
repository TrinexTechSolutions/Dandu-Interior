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
      { 
        name: 'Residential Design', 
        desc: 'Your home should be a reflection of your personality and a sanctuary for relaxation. Our residential interior design services focus on creating spaces that are aesthetically pleasing, highly functional, and comfortable. From conceptualizing the layout to selecting the perfect furniture, fabrics, and lighting, we handle everything. We blend modern trends with timeless elegance to ensure your living room, bedrooms, and dining areas feel uniquely yours. Our team pays meticulous attention to every detail, ensuring the final result exceeds your expectations while staying within your budget.',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=75&w=800'
      },
      { 
        name: 'Office Design', 
        desc: 'A well-designed office does more than just look good; it boosts productivity, enhances employee morale, and leaves a lasting impression on clients. We specialize in creating dynamic, ergonomic, and inspiring workspaces. Whether you need a collaborative open-plan layout or private, focused zones, our designs incorporate the latest in office ergonomics, smart lighting, and acoustic management. We understand the importance of your brand identity and weave your corporate colors and ethos into the physical fabric of the workspace.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=75&w=800'
      },
      { 
        name: 'Commercial Design', 
        desc: 'In the commercial sector, the design of your space directly impacts customer experience and your bottom line. We provide comprehensive interior design solutions for restaurants, retail stores, boutiques, and hospitality venues. Our approach focuses on customer flow, spatial psychology, and striking visual elements that draw people in. We source durable, high-traffic materials that maintain their premium look over time. Let us help you create an inviting commercial environment that accurately represents your brand\'s narrative and engages your target audience.',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=75&w=800'
      }
    ]
  },
  {
    id: 'masonry',
    title: 'Masonry Works',
    icon: Grid,
    shortDesc: 'Precision tile fixing, grouting, and marble installation for durable and aesthetic finishes.',
    fullDesc: 'Our masonry division provides the structural and aesthetic backbone of your property. We employ seasoned masons who take pride in precision and structural integrity. From flawless marble flooring that elevates a lobby\'s grandeur to heavy duty brickwork, our masonry works are executed with rigorous quality control, ensuring longevity and impeccable finishes.',
    benefits: ['High Durability', 'Premium Materials', 'Flawless Finish', 'Timely Execution'],
    subServices: [
      { name: 'Tile Fixing', desc: 'Expert installation of ceramic, porcelain, and vitrified tiles for walls and floors. We ensure perfect leveling, symmetrical patterns, and zero-hollow sounding tiles for a flawless, long-lasting surface.', image: 'https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?auto=format&fit=crop&q=75&w=800' },
      { name: 'Tile Grouting', desc: 'Precision grouting to seal tile joints, preventing moisture penetration and dirt accumulation. We use high-quality, mold-resistant epoxy and cementitious grouts color-matched to your aesthetic.', image: 'https://images.unsplash.com/photo-1588854337221-4cfb8ce2878b?auto=format&fit=crop&q=75&w=800' },
      { name: 'Marble Fixing', desc: 'Premium marble processing and installation. Handling heavy stone requires mastery; our team ensures rigorous substrate preparation and seamless joint matching for luxurious, mirror-polished floors and walls.', image: 'https://images.unsplash.com/photo-1600566753086-00f18efc2065?auto=format&fit=crop&q=75&w=800' },
      { name: 'Bath Tub Install', desc: 'Secure and watertight bathtub masonry encasements. We build rigorous support structures essential for heavy tubs, ensuring perfect drainage gradients and seamless integration with surrounding tiles.', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=75&w=800' },
      { name: 'Wall Partition Making', desc: 'Solid blockwork and brick partitioning to redefine your interior spaces. Providing excellent sound insulation and structural strength compared to standard drywall.', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=75&w=800' },
      { name: 'Brickwork', desc: 'Structural brick laying for exterior facades, retaining walls, and internal exposed-brick aesthetic walls. Done with precise mortar jointing for structural integrity.', image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=75&w=800' },
      { name: 'Boundary Walls', desc: 'Construction of robust boundary and perimeter walls. We ensure deep foundation laying and strong blockwork to secure your property effectively.', image: 'https://images.unsplash.com/photo-1533604100516-77823e590740?auto=format&fit=crop&q=75&w=800' },
      { name: 'Plastering', desc: 'Smooth and flawless plastering for interior and exterior walls. Creating the perfect canvas for painting or wallpapering by eliminating surface undulations.', image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&q=75&w=800' },
      { name: 'Leveling', desc: 'Floor substrate leveling using self-leveling compounds and sand-cement screeds. A critical preparatory step before the installation of premium flooring materials.', image: 'https://images.unsplash.com/photo-1523413631200-fac606558156?auto=format&fit=crop&q=75&w=800' },
      { name: 'Flooring', desc: 'Comprehensive flooring solutions including stone, interlocking pavers, and polished concrete for patios, driveways, and industrial spaces.', image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=75&w=800' }
    ]
  },
  {
    id: 'renovation',
    title: 'Renovation',
    icon: Hammer,
    shortDesc: 'Complete home, bathroom, and kitchen makeovers designed to elevate your living experience.',
    fullDesc: 'Revitalize your aging property with our comprehensive renovation services. We manage the entire lifecycle from tearing down the old structure to upgrading the plumbing/electrical lines, and applying the final modern finishes. Our renovations dramatically improve the utility, aesthetic, and market value of your property.',
    benefits: ['Increased Home Value', 'Modernized Systems', 'Better Space Utilization', 'Energy Efficiency'],
    subServices: [
      { name: 'Full Home Renovation', desc: 'A complete transformation of your entire house. We handle civil modifications, flooring, ceiling, painting, and complete utility upgrades to turn an old house into a modern masterpiece.', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=75&w=800' },
      { name: 'Commercial Renovation', desc: 'Upgrading retail outlets, offices, and warehouses. We minimize downtime and execute rapid refurbishments to keep your business running smoothly while delivering a fresh new look.', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=75&w=800' },
      { name: 'Bathroom Renovation', desc: 'Tearing out old, leaky bathrooms and installing waterproofed, modern sanctuaries. Includes new tiling, vanity installations, concealed cisterns, and premium shower enclosures.', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=75&w=800' },
      { name: 'Kitchen Renovation', desc: 'Transforming cramped cuisines into spacious modular kitchens. We optimize the work triangle, upgrade plumbing and gas lines, and install custom cabinetry and elegant countertops.', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4f?auto=format&fit=crop&q=75&w=800' },
      { name: 'Extension of Areas', desc: 'Expanding your living space horizontally. Whether it\'s pushing out a living room, adding a sunroom, or enlarging a garage, we ensure seamless integration with the existing structure.', image: 'https://images.unsplash.com/photo-1513694203232-719a2807022f?auto=format&fit=crop&q=75&w=800' },
      { name: 'Addition of Floor', desc: 'Vertical expansion to add entirely new living levels. We conduct rigorous structural load testing and manage the complex engineering required to safely add a new floor to your property.', image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=75&w=800' },
      { name: 'Living Room Renovation', desc: 'Redesigning the heart of your home. Incorporating false ceilings, ambient lighting, custom TV units, and premium wall finishes to create a welcoming, luxurious space.', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=75&w=800' }
    ]
  },
  {
    id: 'office-partitions',
    title: 'Office Partitions',
    icon: SplitSquareHorizontal,
    shortDesc: 'Intelligent spatial division using glass, aluminum, and demountable systems for modern workspaces.',
    fullDesc: 'Space optimization is crucial in commercial environments. Our premium partition systems allow you to carve out private meeting rooms, executive offices, and collaborative zones without undertaking heavy, permanent civil construction. We offer visually striking, sound-insulated partition setups tailored for modern corporate aesthetics.',
    benefits: ['Acoustic Insulation', 'Natural Light Flow', 'Flexible Layouts', 'Quick Installation'],
    subServices: [
      { name: 'Aluminum Partitions', desc: 'Lightweight, durable, and cost-effective partitioning using extruded aluminum frames. Excellent for standard office subdivisions and industrial cabins.', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=75&w=800' },
      { name: 'Demountable partitions', desc: 'Highly flexible modular systems that can be dismantled and relocated as your team grows. Perfect for dynamic startups and agile corporate environments.', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=75&w=800' },
      { name: 'Frameless Glass Partitions', desc: 'The pinnacle of modern office design. Seamless floor-to-ceiling glass providing maximum acoustic privacy while allowing natural light to penetrate the entire floorplate.', image: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=75&w=800' },
      { name: 'Industrial Suspended Ceilings', desc: 'Integrating office partitions with robust suspended grid ceilings. Hides complex HVAC and electrical networks while improving overall room acoustics.', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=75&w=800' },
      { name: 'Metal Stud Partitions', desc: 'Fast-track drywall construction using galvanized steel framing. Provides a solid-wall feel, excellent fire resistance, and high acoustic ratings when packed with proper insulation.', image: 'https://images.unsplash.com/photo-1574360743950-c23c1bf329c2?auto=format&fit=crop&q=75&w=800' },
      { name: 'Solid Partition', desc: 'Opaque partitions using wood veneers or laminated panels for absolute privacy. Ideal for HR departments, server rooms, and executive boardrooms.', image: 'https://images.unsplash.com/photo-1556761175-5973b0f612d7?auto=format&fit=crop&q=75&w=800' }
    ]
  },
  {
    id: 'painting',
    title: 'Painting',
    icon: Paintbrush,
    shortDesc: 'Professional interior and exterior painting services for residential and commercial properties.',
    fullDesc: 'A flawless paint job requires 80% preparation and 20% execution. Our professional painting division takes no shortcuts. From intense scraping and sanding to applying premium primers and low-VOC paints, we deliver silky smooth, long-lasting color transformations that drastically uplift the visual appeal of any structure.',
    benefits: ['Surface Preparation', 'Premium Paints', 'Color Consultation', 'Clean Execution'],
    subServices: [
      { name: 'Interior Painting', desc: 'Precision painting for living rooms, bedrooms, and halls. We use washable, anti-fungal, and low-odor emulsion paints to ensure a safe and beautiful indoor environment.', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=75&w=800' },
      { name: 'Exterior Painting', desc: 'Tough, weather-shielding coat applications engineered to withstand harsh sun and driving rain. We ensure deep crack filling and waterproofing before the final coat.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=75&w=800' },
      { name: 'Apartment Painting', desc: 'Quick turnaround repainting for building turnovers and tenant transitions. We protect all floors and fixtures, leaving behind nothing but pristine walls.', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=75&w=800' },
      { name: 'House Painting', desc: 'Comprehensive color overhauls for independent homes. Includes texture painting, wood polishing for doors, and metal enamel painting for grills and gates.', image: 'https://images.unsplash.com/photo-1513694203232-719a2807022f?auto=format&fit=crop&q=75&w=800' },
      { name: 'Villa Painting', desc: 'Large-scale, premium painting services for luxury villas. We offer specialized finishes like stucco, metallic textures, and premium exterior elastomeric coatings.', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=75&w=800' },
      { name: 'Office Painting', desc: 'Corporate painting services scheduled during weekends or nights to ensure zero disruption to your business operations. Clean, sharp, and strictly professional.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=75&w=800' },
      { name: 'Industrial Painting', desc: 'Heavy-duty epoxy floor coating and anti-corrosive metal painting for factories, warehouses, and industrial sheds.', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=75&w=800' },
      { name: 'All Painting Work', desc: 'From touching up a single accent wall to painting a massive residential tower block, our painters are equipped for projects of any scale and complexity.', image: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?auto=format&fit=crop&q=75&w=800' }
    ]
  },
  {
    id: 'electrical',
    title: 'Electrical Works',
    icon: Zap,
    shortDesc: 'Safe, reliable electrical installations, repairs, and lighting solutions by certified professionals.',
    fullDesc: 'Electrical integrity is non-negotiable for safety. Our certified electricians handle everything from complex wiring of new villas to tracing and fixing elusive short circuits. We ensure absolute compliance with local safety regulations while delivering smart, energy-efficient power and lighting solutions.',
    benefits: ['Certified Electricians', 'Safety Compliance', 'Smart Home Ready', 'Energy Efficient'],
    subServices: [
      { name: 'Complete New Electric Systems Installation', desc: 'End-to-end wiring for new constructions. Includes laying conduits, pulling fire-resistant cables, setting up the main distribution boards, and final switch load balancing.', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=75&w=800' },
      { name: 'Electric Short Circuit Fixing', desc: 'Rapid diagnosis and repair of burning smells, sparking outlets, and sudden power losses. We isolate the fault safely without damaging extensive circuitry.', image: 'https://images.unsplash.com/photo-1544724569-5f546fb6f8be?auto=format&fit=crop&q=75&w=800' },
      { name: 'DP Box Breaker Trip Fixing', desc: 'Troubleshooting consistent MCB/ELCB tripping. We identify overloaded circuits or ground faults and replace faulty breakers with precision-rated alternatives.', image: 'https://images.unsplash.com/photo-1558227691-41ea78d1f631?auto=format&fit=crop&q=75&w=800' },
      { name: 'Light Dimmer Installation', desc: 'Upgrading standard switches to smooth rotary or touch dimmers. Ensuring compatibility with your LED fixtures to prevent flickering and humming sounds.', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?auto=format&fit=crop&q=75&w=800' },
      { name: 'Light & Lamp Fixing', desc: 'Installation of wall sconces, ceiling flush mounts, external floodlights, and decorative lamps. Ensuring secure mounting and safe electrical connections.', image: 'https://images.unsplash.com/photo-1507676184212-d0330a15673c?auto=format&fit=crop&q=75&w=800' },
      { name: 'Chandelier Hanging', desc: 'Heavy chandelier installation requires structural ceiling reinforcement and complex wiring. Our experts ensure it is hung perfectly centered, secure, and brightly lit.', image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=75&w=800' },
      { name: 'Switch & Socket Installation', desc: 'Replacing old, yellowed sockets with modern, premium faceplates. Adding new plug points safely to accommodate your shifting appliance needs.', image: 'https://images.unsplash.com/photo-1558442074-3c19857bc1dc?auto=format&fit=crop&q=75&w=800' },
      { name: 'Hide Cables Organizer Ducting', desc: 'Eliminating the eyesore of tangled TV and computer wires. We install sleek PVC trunking or chase cables into the wall for a perfectly clean, wireless look.', image: 'https://images.unsplash.com/photo-1584433144859-1e185aece048?auto=format&fit=crop&q=75&w=800' },
      { name: 'Home Appliances Fixing', desc: 'Electrical connection, grounding, and troubleshooting for heavy appliances like ovens, washing machines, and water heaters.', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=75&w=800' }
    ]
  },
  {
    id: 'plumbing',
    title: 'Plumbing Works',
    icon: Wrench,
    shortDesc: 'Expert leak repair, pipe installations, and sanitary fitting services to keep systems flowing smoothly.',
    fullDesc: 'Water damage is a property\'s worst enemy. Our expert plumbers deliver robust piping solutions that guarantee high pressure, leak-free operation, and efficient drainage. Whether dealing with a midnight pipe burst or designing a complex bathroom plumbing layout from scratch, our team executes with absolute precision and premium materials.',
    benefits: ['24/7 Support Available', 'Leak Detection', 'High-Quality Fittings', 'Water Pressure Optimization'],
    subServices: [
      { name: 'Complete New Plumbing System Installation', desc: 'Designing and laying out the entire water supply and drainage network for new buildings. Utilizing high-grade UPVC and CPVC pipes for corrosion-free longevity.', image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=75&w=800' },
      { name: 'Plumbing System Diagnosis and Inspections', desc: 'Using advanced pressure testing and thermal imaging to locate hidden leaks within walls or underground without unnecessary digging or tile breaking.', image: 'https://images.unsplash.com/photo-1607472586893-edb57cb313ce?auto=format&fit=crop&q=75&w=800' },
      { name: 'Water Leak Repair', desc: 'Immediate sealing of leaking pipes, seeping ceilings, and damp walls. We fix the root cause and ensure the surrounding area is waterproofed.', image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=75&w=800' },
      { name: 'Extend Water Connection', desc: 'Running new water lines to garden hose bibs, new kitchen islands, or outdoor sinks securely and safely.', image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=75&w=800' },
      { name: 'Dishwasher Connection Making', desc: 'Tapping into existing under-sink water lines and drainage pipes to securely hook up new dishwashers seamlessly.', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=75&w=800' },
      { name: 'Washing Machine Installation', desc: 'Setting up dedicated water inlet valves, safe drainage standpipes, and ensuring the machine is perfectly leveled to prevent vibration.', image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&q=75&w=800' },
      { name: 'Hand Wash Basin Repair and Installation', desc: 'Fixing wobbly basins, replacing cracked ceramic sinks, and installing modern vanity units with pristine silicone sealing.', image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=75&w=800' },
      { name: 'Kitchen Sink Repair and Installation', desc: 'Mounting heavy stainless steel or granite sinks, fixing leaky traps, and installing modern pull-down mixer faucets.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=75&w=800' },
      { name: 'Bath Tub Installation', desc: 'Setting up luxurious bathtubs, connecting complex overflow and pop-up waste drains, and ensuring zero-leak integration with floor traps.', image: 'https://images.unsplash.com/photo-1507652313519-d4e9174296fc?auto=format&fit=crop&q=75&w=800' },
      { name: 'Toilet Repairs and Installations', desc: 'Fixing constantly running flushes, replacing broken seats, resolving weak flushes, and installing modern wall-hung commodes with concealed cisterns.', image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=75&w=800' },
      { name: 'Tap Repairs and Installations', desc: 'Fixing dripping faucets by replacing worn-out ceramic cartridges. Upgrading old taps to modern, aerated, water-saving mixers.', image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=75&w=800' },
      { name: 'Blocked Pipes and Drains removing and installation', desc: 'Using powerful drain snakes and high-pressure jetting to clear stubborn hair, grease, and blockages from floor traps and main sewer lines.', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=75&w=800' }
    ]
  },
  {
    id: 'handyman',
    title: 'Handyman Services',
    icon: Ruler,
    shortDesc: 'Quick, reliable fixes for mounting, drilling, furniture assembly, and general home maintenance.',
    fullDesc: 'Don\'t stress over the small stuff. Our professional handyman division is here to tackle your to-do list with speed and precision. Equipped with the right tools and fixings for every wall type, we handle everything from safely mounting massive TVs to assembling complex flat-pack furniture, leaving your home perfectly organized and clean.',
    benefits: ['Multi-skilled Workers', 'Quick Turnaround', 'Fully Equipped Toolkits', 'Neat Workmanship'],
    subServices: [
      { name: 'Drilling & Hanging Work', desc: 'Precision drilling into concrete, tile, and drywall. We use the exact rawlplugs and screws ensuring whatever is hung stays secure without damaging your walls.', image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=75&w=800' },
      { name: 'Mount Brackets on Wall', desc: 'Heavy-duty anchoring for heavy shelves, bicycle racks, and microwave brackets using heavy-duty anchor bolts.', image: 'https://images.unsplash.com/photo-1622372736453-652f1ffeb1cd?auto=format&fit=crop&q=75&w=800' },
      { name: 'TV Bracket Mounting', desc: 'Perfectly leveled installation of fixed, tilted, or full-motion swivel TV brackets. We ensure your expensive screens are safely mounted on strong studs.', image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=75&w=800' },
      { name: 'Picture Frame Hanging', desc: 'Creating beautiful gallery walls with perfectly aligned arrays of photo frames. Say goodbye to crooked pictures and unnecessary wall holes.', image: 'https://images.unsplash.com/photo-1513694203232-719a2807022f?auto=format&fit=crop&q=75&w=800' },
      { name: 'Mirror Installation', desc: 'Safe handling and mounting of heavy, frameless, or decorative mirrors using robust clips or high-strength adhesive mounting tapes.', image: 'https://images.unsplash.com/photo-1618220179428-2b79b180d423?auto=format&fit=crop&q=75&w=800' },
      { name: 'Shelves Fixing', desc: 'Installation of floating shelves and heavy-duty storage racks. We make sure they are laser-level and capable of bearing the intended load.', image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&q=75&w=800' },
      { name: 'Curtain Rods & Blind Fixing', desc: 'Professional installation of window treatments. We measure accurately and drill cleanly to ensure your curtains hang beautifully.', image: 'https://images.unsplash.com/photo-1513694203232-719a2807022f?auto=format&fit=crop&q=75&w=800' },
      { name: 'Curtain Reeling Installation', desc: 'Installing smooth-gliding aluminum curtain tracks securely into the ceiling slab or wall lintels.', image: 'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&q=75&w=800' },
      { name: 'Curtain Rods Installation', desc: 'Fitting wooden or metallic curtain poles securely, ensuring the end finials sit perfectly symmetrical over your windows.', image: 'https://images.unsplash.com/photo-1513694203232-719a2807022f?auto=format&fit=crop&q=75&w=800' },
      { name: 'Curtain Bracket Fixing', desc: 'Replacing loose or broken curtain brackets with stronger, longer wall plugs for enhanced stability.', image: 'https://images.unsplash.com/photo-1513694203232-719a2807022f?auto=format&fit=crop&q=75&w=800' },
      { name: 'Curtain Hanging', desc: 'Hooking and eyeleting heavy blackout drapes or delicate sheer curtains onto the tracks or rods beautifully.', image: 'https://images.unsplash.com/photo-1513694203232-719a2807022f?auto=format&fit=crop&q=75&w=800' },
      { name: 'Blinds Installation', desc: 'Precision mounting of roller, roman, vertical, or venetian blinds within the window recess or on the wall face.', image: 'https://images.unsplash.com/photo-1513694203232-719a2807022f?auto=format&fit=crop&q=75&w=800' },
      { name: 'Light & Lamp Fixing', desc: 'Assembling complex light fittings and securely mounting sconces and pendant lights (Non-wiring handyman jobs).', image: 'https://images.unsplash.com/photo-1507676184212-d0330a15673c?auto=format&fit=crop&q=75&w=800' },
      { name: 'Wallpaper Fixing', desc: 'Flawless application of wallpaper rolls. We match the patterns perfectly and ensure seamless, bubble-free adhesion to your walls.', image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=75&w=800' }
    ]
  }
];
