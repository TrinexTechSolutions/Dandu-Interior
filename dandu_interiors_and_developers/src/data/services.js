import { Paintbrush, Hammer, Wrench, Zap, SplitSquareHorizontal, Ruler, Grid, Home } from 'lucide-react';
import allPaintingWorkImage from '../assets/Services/All Painting Work.webp';
import additionOfFloorImage from '../assets/Services/Addition of Floor.webp';
import aluminumPartitionsImage from '../assets/Services/Aluminum Partitions.webp';
import apartmentPaintingImage from '../assets/Services/Apartment Painting.webp';
import bathTubInstallationImage from '../assets/Services/Bath Tub Installation.webp';
import bathroomRenovationImage from '../assets/Services/Bathroom Renovation.webp';
import blindsInstallationImage from '../assets/Services/Blinds Installation.webp';
import blockedPipesAndDrainsRemovingAndInstallationImage from '../assets/Services/Blocked Pipes and Drains removing and installation.webp';
import boundaryWallsImage from '../assets/Services/Boundary Walls.webp';
import brickworkImage from '../assets/Services/Brickwork.webp';
import chandelierHangingImage from '../assets/Services/Chandelier Hanging.webp';
import commercialDesignImage from '../assets/Services/Commercial Design.webp';
import commercialRenovationImage from '../assets/Services/Commercial Renovation.webp';
import completeNewElectricSystemsInstallationImage from '../assets/Services/Complete New Electric Systems Installation.webp';
import completeNewPlumbingSystemInstallationImage from '../assets/Services/Complete New Plumbing System Installation.webp';
import curtainBracketFixingImage from '../assets/Services/Curtain Bracket Fixing.webp';
import curtainHangingImage from '../assets/Services/Curtain Hanging.webp';
import curtainReelingInstallationImage from '../assets/Services/Curtain Reeling Installation.webp';
import curtainRodsAndBlindFixingImage from '../assets/Services/Curtain Rods & Blind Fixing.webp';
import curtainRodsInstallationImage from '../assets/Services/Curtain Rods Installation.webp';
import demountablePartitionsImage from '../assets/Services/Demountable partitions.webp';
import dishwasherConnectionMakingImage from '../assets/Services/Dishwasher Connection Making.webp';
import dPBoxBreakerTripFixingImage from '../assets/Services/DP Box Breaker Trip Fixing.webp';
import drillingAndHangingWorkImage from '../assets/Services/Drilling & Hanging Work.webp';
import electricShortCircuitFixingImage from '../assets/Services/Electric Short Circuit Fixing.webp';
import extensionOfAreasImage from '../assets/Services/Extension of Areas.webp';
import extendWaterConnectionImage from '../assets/Services/Extend Water Connection.webp';
import exteriorPaintingImage from '../assets/Services/Exterior Painting.webp';
import flooringImage from '../assets/Services/Flooring.webp';
import framelessGlassPartitionsImage from '../assets/Services/Frameless Glass Partitions.webp';
import fullHomeRenovationImage from '../assets/Services/Full Home Renovation.webp';
import handWashBasinRepairAndInstallationImage from '../assets/Services/Hand Wash Basin Repair and Installation.webp';
import hideCablesOrganizerDuctingImage from '../assets/Services/Hide Cables Organizer Ducting.webp';
import homeAppliancesFixingImage from '../assets/Services/Home Appliances Fixing.webp';
import housePaintingImage from '../assets/Services/House Painting.webp';
import industrialPaintingImage from '../assets/Services/Industrial Painting.webp';
import industrialSuspendedCeilingsImage from '../assets/Services/Industrial Suspended Ceilings.webp';
import interiorPaintingImage from '../assets/Services/Interior Painting.webp';
import kitchenSinkRepairAndInstallationImage from '../assets/Services/Kitchen Sink Repair and Installation.webp';
import kitchenRenovationImage from '../assets/Services/Kitchen Renovation.webp';
import levelingImage from '../assets/Services/Leveling.webp';
import lightAndLampFixingImage from '../assets/Services/Light & Lamp Fixing.webp';
import lightDimmerInstallationImage from '../assets/Services/Light Dimmer Installation.webp';
import livingRoomRenovationImage from '../assets/Services/Living Room Renovation.webp';
import marbleFixingImage from '../assets/Services/Marble Fixing.webp';
import metalStudPartitionsImage from '../assets/Services/Metal Stud Partitions.webp';
import mirrorInstallationImage from '../assets/Services/Mirror Installation.webp';
import mountBracketsOnWallImage from '../assets/Services/Mount Brackets on Wall.webp';
import officeDesignImage from '../assets/Services/Office Design.webp';
import officePaintingImage from '../assets/Services/Office Painting.webp';
import pictureFrameHangingImage from '../assets/Services/Picture Frame Hanging.webp';
import plasteringImage from '../assets/Services/Plastering.webp';
import plumbingSystemDiagnosisAndInspectionsImage from '../assets/Services/Plumbing System Diagnosis and Inspections.webp';
import residentialDesignImage from '../assets/Services/Residential Design.webp';
import shelvesFixingImage from '../assets/Services/Shelves Fixing.webp';
import solidPartitionImage from '../assets/Services/Solid Partition.webp';
import switchAndSocketInstallationImage from '../assets/Services/Switch & Socket Installation.webp';
import tapRepairsAndInstallationsImage from '../assets/Services/Tap Repairs and Installations.webp';
import tileFixingImage from '../assets/Services/Tile Fixing.webp';
import tileGroutingImage from '../assets/Services/Tile Grouting.webp';
import toiletRepairsAndInstallationsImage from '../assets/Services/Toilet Repairs and Installations.webp';
import tVBracketMountingImage from '../assets/Services/TV Bracket Mounting.webp';
import villaPaintingImage from '../assets/Services/Villa Painting.webp';
import wallPartitionMakingImage from '../assets/Services/Wall Partition Making.webp';
import wallpaperFixingImage from '../assets/Services/Wallpaper Fixing.webp';
import washingMachineInstallationImage from '../assets/Services/Washing Machine Installation.webp';
import waterLeakRepairImage from '../assets/Services/Water Leak Repair.webp';

const serviceImageByName = {
  'All Painting Work': allPaintingWorkImage,
  'Addition of Floor': additionOfFloorImage,
  'Aluminum Partitions': aluminumPartitionsImage,
  'Apartment Painting': apartmentPaintingImage,
  'Bath Tub Installation': bathTubInstallationImage,
  'Bathroom Renovation': bathroomRenovationImage,
  'Blinds Installation': blindsInstallationImage,
  'Blocked Pipes and Drains removing and installation': blockedPipesAndDrainsRemovingAndInstallationImage,
  'Boundary Walls': boundaryWallsImage,
  Brickwork: brickworkImage,
  'Chandelier Hanging': chandelierHangingImage,
  'Commercial Design': commercialDesignImage,
  'Commercial Renovation': commercialRenovationImage,
  'Complete New Electric Systems Installation': completeNewElectricSystemsInstallationImage,
  'Complete New Plumbing System Installation': completeNewPlumbingSystemInstallationImage,
  'Curtain Bracket Fixing': curtainBracketFixingImage,
  'Curtain Hanging': curtainHangingImage,
  'Curtain Reeling Installation': curtainReelingInstallationImage,
  'Curtain Rods & Blind Fixing': curtainRodsAndBlindFixingImage,
  'Curtain Rods Installation': curtainRodsInstallationImage,
  'Demountable partitions': demountablePartitionsImage,
  'Dishwasher Connection Making': dishwasherConnectionMakingImage,
  'DP Box Breaker Trip Fixing': dPBoxBreakerTripFixingImage,
  'Drilling & Hanging Work': drillingAndHangingWorkImage,
  'Electric Short Circuit Fixing': electricShortCircuitFixingImage,
  'Extension of Areas': extensionOfAreasImage,
  'Extend Water Connection': extendWaterConnectionImage,
  'Exterior Painting': exteriorPaintingImage,
  Flooring: flooringImage,
  'Frameless Glass Partitions': framelessGlassPartitionsImage,
  'Full Home Renovation': fullHomeRenovationImage,
  'Hand Wash Basin Repair and Installation': handWashBasinRepairAndInstallationImage,
  'Hide Cables Organizer Ducting': hideCablesOrganizerDuctingImage,
  'Home Appliances Fixing': homeAppliancesFixingImage,
  'House Painting': housePaintingImage,
  'Industrial Painting': industrialPaintingImage,
  'Industrial Suspended Ceilings': industrialSuspendedCeilingsImage,
  'Interior Painting': interiorPaintingImage,
  'Kitchen Sink Repair and Installation': kitchenSinkRepairAndInstallationImage,
  'Kitchen Renovation': kitchenRenovationImage,
  Leveling: levelingImage,
  'Light & Lamp Fixing': lightAndLampFixingImage,
  'Light Dimmer Installation': lightDimmerInstallationImage,
  'Living Room Renovation': livingRoomRenovationImage,
  'Marble Fixing': marbleFixingImage,
  'Metal Stud Partitions': metalStudPartitionsImage,
  'Mirror Installation': mirrorInstallationImage,
  'Mount Brackets on Wall': mountBracketsOnWallImage,
  'Office Design': officeDesignImage,
  'Office Painting': officePaintingImage,
  'Picture Frame Hanging': pictureFrameHangingImage,
  Plastering: plasteringImage,
  'Plumbing System Diagnosis and Inspections': plumbingSystemDiagnosisAndInspectionsImage,
  'Residential Design': residentialDesignImage,
  'Shelves Fixing': shelvesFixingImage,
  'Solid Partition': solidPartitionImage,
  'Switch & Socket Installation': switchAndSocketInstallationImage,
  'Tap Repairs and Installations': tapRepairsAndInstallationsImage,
  'Tile Fixing': tileFixingImage,
  'Tile Grouting': tileGroutingImage,
  'Toilet Repairs and Installations': toiletRepairsAndInstallationsImage,
  'TV Bracket Mounting': tVBracketMountingImage,
  'Villa Painting': villaPaintingImage,
  'Wall Partition Making': wallPartitionMakingImage,
  'Wallpaper Fixing': wallpaperFixingImage,
  'Washing Machine Installation': washingMachineInstallationImage,
  'Water Leak Repair': waterLeakRepairImage
};

const serviceImageAliases = {
  'Bath Tub Install': 'Bath Tub Installation',
};

const getServiceImage = (name, fallback) =>
  serviceImageByName[name] ||
  serviceImageByName[serviceImageAliases[name]] ||
  fallback;

const rawServices = [
  {
    id: 'interior-design',
    title: 'Interior Design',
    icon: Home,
    shortDesc: 'Transform your space into a stunning, functional environment with our expert interior design solutions.',
    description: 'From luxurious residential sanctuaries to dynamic corporate offices, we blend high-end aesthetics with functional utility. Our expert designers use premium materials and innovative layouts to transform your vision into a stunning reality.',
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
    description: 'Precision structural and aesthetic masonry, specializing in flawless marble flooring, expert tile fixing, and robust brickwork. We ensure every surface is perfectly leveled and built to last with professional-grade finishing.',
    fullDesc: 'Our masonry division provides the structural and aesthetic backbone of your property. We employ seasoned masons who take pride in precision and structural integrity. From flawless marble flooring that elevates a lobby\'s grandeur to heavy duty brickwork, our masonry works are executed with rigorous quality control, ensuring longevity and impeccable finishes.',
    benefits: ['High Durability', 'Premium Materials', 'Flawless Finish', 'Timely Execution'],
    subServices: [
      { name: 'Tile Fixing', desc: 'Expert installation of ceramic, porcelain, and vitrified tiles for walls and floors. We ensure perfect leveling, symmetrical patterns, and zero-hollow sounding tiles for a flawless, long-lasting surface.', image: tileFixingImage },
      { name: 'Tile Grouting', desc: 'Precision grouting to seal tile joints, preventing moisture penetration and dirt accumulation. We use high-quality, mold-resistant epoxy and cementitious grouts color-matched to your aesthetic.', image: tileGroutingImage },
      { name: 'Marble Fixing', desc: 'Premium marble processing and installation. Handling heavy stone requires mastery; our team ensures rigorous substrate preparation and seamless joint matching for luxurious, mirror-polished floors and walls.', image: marbleFixingImage },
      { name: 'Bath Tub Install', desc: 'Secure and watertight bathtub masonry encasements. We build rigorous support structures essential for heavy tubs, ensuring perfect drainage gradients and seamless integration with surrounding tiles.', image: bathTubInstallationImage },
      { name: 'Wall Partition Making', desc: 'Solid blockwork and brick partitioning to redefine your interior spaces. Providing excellent sound insulation and structural strength compared to standard drywall.', image: wallPartitionMakingImage },
      { name: 'Brickwork', desc: 'Structural brick laying for exterior facades, retaining walls, and internal exposed-brick aesthetic walls. Done with precise mortar jointing for structural integrity.', image: brickworkImage },
      { name: 'Boundary Walls', desc: 'Construction of robust boundary and perimeter walls. We ensure deep foundation laying and strong blockwork to secure your property effectively.', image: boundaryWallsImage },
      { name: 'Plastering', desc: 'Smooth and flawless plastering for interior and exterior walls. Creating the perfect canvas for painting or wallpapering by eliminating surface undulations.', image: plasteringImage },
      { name: 'Leveling', desc: 'Floor substrate leveling using self-leveling compounds and sand-cement screeds. A critical preparatory step before the installation of premium flooring materials.', image: levelingImage },
      { name: 'Flooring', desc: 'Comprehensive flooring solutions including stone, interlocking pavers, and polished concrete for patios, driveways, and industrial spaces.', image: flooringImage }
    ]
  },
  {
    id: 'renovation',
    title: 'Renovation',
    icon: Hammer,
    shortDesc: 'Complete home, bathroom, and kitchen makeovers designed to elevate your living experience.',
    description: 'Complete property transformations including modern kitchen makeovers, waterproofed bathroom sanctuaries, and vertical floor additions. We manage the entire lifecycle from structural modifications to high-end final finishes.',
    fullDesc: 'Revitalize your aging property with our comprehensive renovation services. We manage the entire lifecycle from tearing down the old structure to upgrading the plumbing/electrical lines, and applying the final modern finishes. Our renovations dramatically improve the utility, aesthetic, and market value of your property.',
    benefits: ['Increased Home Value', 'Modernized Systems', 'Better Space Utilization', 'Energy Efficiency'],
    subServices: [
      { name: 'Full Home Renovation', desc: 'A complete transformation of your entire house. We handle civil modifications, flooring, ceiling, painting, and complete utility upgrades to turn an old house into a modern masterpiece.', image: fullHomeRenovationImage },
      { name: 'Commercial Renovation', desc: 'Upgrading retail outlets, offices, and warehouses. We minimize downtime and execute rapid refurbishments to keep your business running smoothly while delivering a fresh new look.', image: commercialRenovationImage },
      { name: 'Bathroom Renovation', desc: 'Tearing out old, leaky bathrooms and installing waterproofed, modern sanctuaries. Includes new tiling, vanity installations, concealed cisterns, and premium shower enclosures.', image: bathroomRenovationImage },
      { name: 'Kitchen Renovation', desc: 'Transforming cramped cuisines into spacious modular kitchens. We optimize the work triangle, upgrade plumbing and gas lines, and install custom cabinetry and elegant countertops.', image: kitchenRenovationImage },
      { name: 'Extension of Areas', desc: 'Expanding your living space horizontally. Whether it\'s pushing out a living room, adding a sunroom, or enlarging a garage, we ensure seamless integration with the existing structure.', image: extensionOfAreasImage },
      { name: 'Addition of Floor', desc: 'Vertical expansion to add entirely new living levels. We conduct rigorous structural load testing and manage the complex engineering required to safely add a new floor to your property.', image: additionOfFloorImage },
      { name: 'Living Room Renovation', desc: 'Redesigning the heart of your home. Incorporating false ceilings, ambient lighting, custom TV units, and premium wall finishes to create a welcoming, luxurious space.', image: livingRoomRenovationImage }
    ]
  },
  {
    id: 'office-partitions',
    title: 'Office Partitions',
    icon: SplitSquareHorizontal,
    shortDesc: 'Intelligent spatial division using glass, aluminum, and demountable systems for modern workspaces.',
    description: 'Intelligent spatial division for modern workspaces using premium frameless glass, durable aluminum, and demountable systems. Achieve superior acoustic insulation while maintaining natural light flow and corporate elegance.',
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
    description: 'Flawless color transformations using premium low-VOC interior emulsions and weather-shielding exterior coatings. Our 4-step preparation process ensures silky smooth surfaces and long-lasting protection for your property.',
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
    description: 'Certified safety-first electrical solutions including complete new system wiring, smart home integration, and rapid fault diagnosis. We ensure absolute compliance with safety regulations and energy-efficient lighting.',
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
    description: 'Expert leak prevention and high-pressure water supply networks. From precision sanitary fitting installations to complex drainage systems, we use premium materials to keep your property\'s systems flowing smoothly.',
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
    description: 'Professional mounting, drilling, and furniture assembly services. Whether it\'s heavy TV bracket mounting, secure curtain rod installation, or perfect wallpaper fixing, we handle your to-do list with surgical precision.',
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

export const services = rawServices.map((service) => ({
  ...service,
  subServices: service.subServices.map((subService) => ({
    ...subService,
    image: getServiceImage(subService.name, subService.image)
  }))
}));
