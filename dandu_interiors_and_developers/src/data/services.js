import { Paintbrush, Hammer, Wrench, Zap, SplitSquareHorizontal, Grid, Home } from 'lucide-react';
import civilWorksRootImage from '../assets/Home/civil_works.webp';
import allPaintingWorkImage from '../assets/Services/All Painting Work.webp';
import additionOfFloorImage from '../assets/Services/Addition of Floor.webp';
import aluminumPartitionsImage from '../assets/Services/Aluminum Partitions.webp';
import apartmentPaintingImage from '../assets/Services/Apartment Painting.webp';
import bathTubInstallationImage from '../assets/Services/Bath Tub Installation.webp';
import bathroomRenovationImage from '../assets/Services/Bathroom Renovation.webp';
import blockedPipesAndDrainsRemovingAndInstallationImage from '../assets/Services/Blocked Pipes and Drains removing and installation.webp';
import brickworkImage from '../assets/Services/Brickwork.webp';
import chandelierHangingImage from '../assets/Services/Chandelier Hanging.webp';
import commercialDesignImage from '../assets/Services/Commercial Design.webp';
import commercialRenovationImage from '../assets/Services/Commercial Renovation.webp';
import completeNewElectricSystemsInstallationImage from '../assets/Services/Complete New Electric Systems Installation.webp';
import completeNewPlumbingSystemInstallationImage from '../assets/Services/Complete New Plumbing System Installation.webp';
import demountablePartitionsImage from '../assets/Services/Demountable partitions.webp';
import dishwasherConnectionMakingImage from '../assets/Services/Dishwasher Connection Making.webp';
import dPBoxBreakerTripFixingImage from '../assets/Services/DP Box Breaker Trip Fixing.webp';
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
import lightAndLampFixingImage from '../assets/Services/Light & Lamp Fixing.webp';
import lightDimmerInstallationImage from '../assets/Services/Light Dimmer Installation.webp';
import livingRoomRenovationImage from '../assets/Services/Living Room Renovation.webp';
import marbleFixingImage from '../assets/Services/Marble Fixing.webp';
import metalStudPartitionsImage from '../assets/Services/Metal Stud Partitions.webp';
import officeDesignImage from '../assets/Services/Office Design.webp';
import officePaintingImage from '../assets/Services/Office Painting.webp';
import plasteringImage from '../assets/Services/Plastering.webp';
import plumbingSystemDiagnosisAndInspectionsImage from '../assets/Services/Plumbing System Diagnosis and Inspections.webp';
import residentialDesignImage from '../assets/Services/Residential Design.webp';
import solidPartitionImage from '../assets/Services/Solid Partition.webp';
import switchAndSocketInstallationImage from '../assets/Services/Switch & Socket Installation.webp';
import tapRepairsAndInstallationsImage from '../assets/Services/Tap Repairs and Installations.webp';
import tileFixingImage from '../assets/Services/Tile Fixing.webp';
import tileGroutingImage from '../assets/Services/Tile Grouting.webp';
import toiletRepairsAndInstallationsImage from '../assets/Services/Toilet Repairs and Installations.webp';
import tVBracketMountingImage from '../assets/Services/TV Bracket Mounting.webp';
import villaPaintingImage from '../assets/Services/Villa Painting.webp';
import wallPartitionMakingImage from '../assets/Services/Wall Partition Making.webp';
import washingMachineInstallationImage from '../assets/Services/Washing Machine Installation.webp';
import waterLeakRepairImage from '../assets/Services/Water Leak Repair.webp';

import plumbingBasinImage from '../assets/Services/plumbing_basin.webp';
import plumbingDiagnosisImage from '../assets/Services/plumbing_diagnosis.webp';
import plumbingLeakImage from '../assets/Services/plumbing_leak.webp';
import plumbingTapImage from '../assets/Services/plumbing_tap.webp';
import plumbingPipesImage from '../assets/Services/plumbing_pipes.webp';
import plumbingWashingMachineImage from '../assets/Services/plumbing_washing_machine.webp';
import plumbingKitchenSinkImage from '../assets/Services/plumbing_kitchen_sink.webp';
import plumbingBathTubImage from '../assets/Services/plumbing_bath_tub.webp';
import plumbingToiletImage from '../assets/Services/plumbing_toilet.webp';

const serviceImageByName = {
  'All Painting Work': allPaintingWorkImage,
  'Addition of Floor': additionOfFloorImage,
  'Aluminum Partitions': aluminumPartitionsImage,
  'Apartment Painting': apartmentPaintingImage,
  'Bath Tub Installation': bathTubInstallationImage,
  'Bathroom Renovation': bathroomRenovationImage,
  'Blocked Pipes and Drains removing and installation': blockedPipesAndDrainsRemovingAndInstallationImage,
  Brickwork: brickworkImage,
  'Chandelier Hanging': chandelierHangingImage,
  'Commercial Design': commercialDesignImage,
  'Commercial Renovation': commercialRenovationImage,
  'Complete New Electric Systems Installation': completeNewElectricSystemsInstallationImage,
  'Complete New Plumbing System Installation': completeNewPlumbingSystemInstallationImage,
  'Demountable partitions': demountablePartitionsImage,
  'Dishwasher Connection Making': dishwasherConnectionMakingImage,
  'DP Box Breaker Trip Fixing': dPBoxBreakerTripFixingImage,
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
  'Light & Lamp Fixing': lightAndLampFixingImage,
  'Light Dimmer Installation': lightDimmerInstallationImage,
  'Living Room Renovation': livingRoomRenovationImage,
  'Marble Fixing': marbleFixingImage,
  'Metal Stud Partitions': metalStudPartitionsImage,
  'Office Design': officeDesignImage,
  'Office Painting': officePaintingImage,
  Plastering: plasteringImage,
  'Plumbing System Diagnosis and Inspections': plumbingSystemDiagnosisAndInspectionsImage,
  'Residential Design': residentialDesignImage,
  'Solid Partition': solidPartitionImage,
  'Switch & Socket Installation': switchAndSocketInstallationImage,
  'Tap Repairs and Installations': tapRepairsAndInstallationsImage,
  'Tile Fixing': tileFixingImage,
  'Tile Grouting': tileGroutingImage,
  'Toilet Repairs and Installations': toiletRepairsAndInstallationsImage,
  'TV Bracket Mounting': tVBracketMountingImage,
  'Villa Painting': villaPaintingImage,
  'Wall Partition Making': wallPartitionMakingImage,
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
    id: 'interior-works',
    title: 'Interior Works',
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
    id: 'civil-works',
    title: 'Civil Works',
    icon: Grid,
    image: civilWorksRootImage,
    shortDesc: 'Precision tile fixing, grouting, and marble installation for durable and aesthetic finishes.',
    description: 'Precision structural and aesthetic masonry, specializing in flawless marble flooring, expert tile fixing, and robust brickwork. We ensure every surface is perfectly leveled and built to last with professional-grade finishing.',
    fullDesc: 'Our masonry division provides the structural and aesthetic backbone of your property. We employ seasoned masons who take pride in precision and structural integrity. From flawless marble flooring that elevates a lobby\'s grandeur to heavy duty brickwork, our masonry works are executed with rigorous quality control, ensuring longevity and impeccable finishes.',
    benefits: ['High Durability', 'Premium Materials', 'Flawless Finish', 'Timely Execution'],
    subServices: [
      {
        name: 'Tiles Work',
        desc: 'Complete tile and stone surface solutions for floors, walls, kitchens, bathrooms, and premium finish zones. From layout planning to joint finishing, we handle the full tiling workflow with precision and durability.',
        image: tileFixingImage,
        linkId: 'tiles-work'
      },
      { name: 'Brickwork', desc: 'Structural brick laying for exterior facades, retaining walls, and internal exposed-brick aesthetic walls. Done with precise mortar jointing for structural integrity.', image: brickworkImage },
      { name: 'Plastering', desc: 'Smooth and flawless plastering for interior and exterior walls. Creating the perfect canvas for painting or wallpapering by eliminating surface undulations.', image: plasteringImage, linkId: 'plastering' },
      { name: 'Flooring', desc: 'Comprehensive flooring solutions including stone, interlocking pavers, and polished concrete for patios, driveways, and industrial spaces.', image: flooringImage, linkId: 'flooring' },
      { name: 'Partitions', desc: 'Expert installation of drywall, glass, and aluminum partitions for optimal space utilization and soundproofing.', image: aluminumPartitionsImage, linkId: 'office-partitions' },
      { name: 'Painting', desc: 'Premium interior and exterior painting services with high-quality finishes and weather-resistant coatings.', image: interiorPaintingImage, linkId: 'painting' },
      { name: 'Electrical Works', desc: 'Comprehensive electrical installations, rewiring, and smart home lighting integrations by certified electricians.', image: completeNewElectricSystemsInstallationImage, linkId: 'electrical' },
      { name: 'Plumbing Works', desc: 'Professional plumbing solutions from new pipe installations to leak repairs and complete bathroom fittings.', image: completeNewPlumbingSystemInstallationImage, linkId: 'plumbing' }
    ]
  },
  {
    id: 'tiles-work',
    title: 'Tiles Work',
    icon: Grid,
    shortDesc: 'Specialized tile and marble installation, grouting, repair, and finish work for durable premium surfaces.',
    description: 'Dedicated tile and stone finishing solutions for walls, floors, kitchens, bathrooms, and feature surfaces. We handle installation, alignment, grouting, marble fixing, and repair work with precision craftsmanship.',
    fullDesc: 'Our tile and stone specialists deliver clean layouts, durable bonding, and refined finishing for every surface. From fresh tile installation to marble fixing and repair work, we focus on precision alignment, long-lasting adhesion, and a polished final look that elevates your space.',
    benefits: ['Precise Alignment', 'Durable Bonding', 'Premium Finish', 'Repair Expertise'],
    subServices: [
      { name: 'Tile Fixing', desc: 'Expert installation of ceramic, porcelain, and vitrified tiles for walls and floors. We ensure perfect leveling, symmetrical patterns, and zero-hollow sounding tiles for a flawless, long-lasting surface.', image: tileFixingImage },
      { name: 'Tile Grouting', desc: 'Precision grouting to seal tile joints, preventing moisture penetration and dirt accumulation. We use high-quality, mold-resistant epoxy and cementitious grouts color-matched to your aesthetic.', image: tileGroutingImage },
      { name: 'Marble Fixing', desc: 'Premium marble processing and installation. Handling heavy stone requires mastery; our team ensures rigorous substrate preparation and seamless joint matching for luxurious, mirror-polished floors and walls.', image: marbleFixingImage },
      { name: 'Tile Replacement & Repair', desc: 'Careful removal and replacement of cracked, hollow, or damaged tiles while preserving surrounding finishes as much as possible for a clean repaired surface.', image: tileFixingImage }
    ]
  },
  {
    id: 'plastering',
    title: 'Plastering Services',
    icon: Grid,
    shortDesc: 'Expert plastering solutions for flawless walls and ceilings, preparing surfaces for premium finishes.',
    description: 'We deliver perfectly smooth, durable plastering for both interior setups and exterior facades. Our work ensures surface undulations are eliminated, preparing your property for high-end paint or wallpaper.',
    fullDesc: 'Quality plastering is the critical foundation for any premium interior. Our specialists provide comprehensive plastering solutions, from repairing damaged historical walls to applying fresh gypsum plaster on new blockwork. We focus on laser-straight edges, seamless joints, and zero cracking.',
    benefits: ['Flawless Surfaces', 'Crack Resistance', 'Laser-Straight Edges', 'Durable Base'],
    subServices: [
      { name: 'Internal Gypsum Plastering', desc: 'Applying high-quality gypsum plaster over blockwork or bare concrete to create perfectly smooth, ready-to-paint interior walls with rapid setting times.', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=75&w=800' },
      { name: 'Exterior Cement Plastering', desc: 'Heavy-duty sand and cement plastering formulated to withstand harsh weather conditions, protecting the structural brickwork from moisture and thermal expansion.', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=75&w=800' },
      { name: 'Plaster Repair and Patching', desc: 'Careful removal and patching of blown, cracked, or water-damaged plaster. We blend new repairs seamlessly into existing historical or standard walls.', image: 'https://images.unsplash.com/photo-1513694203232-719a2807022f?auto=format&fit=crop&q=75&w=800' },
      { name: 'Skimming Services', desc: 'Applying a final, ultra-thin coat of finishing plaster over plasterboard or uneven walls to achieve a glass-like finish ideal for premium silk paints.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=75&w=800' }
    ]
  },
  {
    id: 'flooring',
    title: 'Flooring Solutions',
    icon: Grid,
    shortDesc: 'Premium flooring installations including hardwood, polished concrete, and durable interlocking pavers.',
    description: 'Specialized flooring services for residential, commercial, and industrial spaces. We handle everything from elegant wooden floors to heavy-duty concrete finishes, ensuring longevity and stunning aesthetics.',
    fullDesc: 'A floor sets the tone for an entire space. We offer comprehensive, high-quality flooring installations, focusing on precision substrate leveling, premium material sourcing, and expert layout execution. Whether you need an acoustic wooden floor for an office or load-bearing concrete for a warehouse, our teams deliver immaculate results.',
    benefits: ['Precision Leveling', 'Premium Materials', 'Acoustic Insulation', 'High Durability'],
    subServices: [
      { name: 'Hardwood & Laminate Flooring', desc: 'Installation of high-end engineered wood, solid oak, and durable laminates. Includes moisture barrier laying and acoustic underlayment for a silent step.', image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=75&w=800' },
      { name: 'Polished Concrete', desc: 'Industrial-chic polished and sealed concrete floors. Extremely durable, easy to maintain, and perfect for modern retail spaces, lofts, or high-traffic zones.', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=75&w=800' },
      { name: 'Interlocking Pavers', desc: 'Heavy-duty exterior paving for driveways, patios, and walkways. Designed to withstand vehicular loads while maintaining excellent water drainage.', image: 'https://images.unsplash.com/photo-1584433144859-1e185aece048?auto=format&fit=crop&q=75&w=800' },
      { name: 'Epoxy Resin Flooring', desc: 'Seamless, chemical-resistant flooring solutions ideal for garages, laboratories, and commercial kitchens, available in various colors and metallic finishes.', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=75&w=800' }
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
    title: 'Partitions',
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
      { name: 'Solid Partition', desc: 'Opaque partitions using wood veneers or laminated panels for absolute privacy. Ideal for HR departments, server rooms, and executive boardrooms.', image: 'https://images.unsplash.com/photo-1556761175-5973b0f612d7?auto=format&fit=crop&q=75&w=800' },
      { name: 'Wall Partition Making', desc: 'Solid blockwork and brick partitioning to redefine your interior spaces. Providing excellent sound insulation and structural strength compared to standard drywall.', image: wallPartitionMakingImage }
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
      { name: 'Complete New Plumbing System Installation', desc: 'Designing and laying out the entire water supply and drainage network for new buildings. Utilizing high-grade UPVC and CPVC pipes for corrosion-free longevity.', image: plumbingBasinImage },
      { name: 'Plumbing System Diagnosis and Inspections', desc: 'Using advanced pressure testing and thermal imaging to locate hidden leaks within walls or underground without unnecessary digging or tile breaking.', image: plumbingDiagnosisImage },
      { name: 'Water Leak Repair', desc: 'Immediate sealing of leaking pipes, seeping ceilings, and damp walls. We fix the root cause and ensure the surrounding area is waterproofed.', image: plumbingLeakImage },
      { name: 'Extend Water Connection', desc: 'Running new water lines to garden hose bibs, new kitchen islands, or outdoor sinks securely and safely.', image: plumbingTapImage },
      { name: 'Dishwasher Connection Making', desc: 'Tapping into existing under-sink water lines and drainage pipes to securely hook up new dishwashers seamlessly.', image: plumbingPipesImage },
      { name: 'Washing Machine Installation', desc: 'Setting up dedicated water inlet valves, safe drainage standpipes, and ensuring the machine is perfectly leveled to prevent vibration.', image: plumbingWashingMachineImage },
      { name: 'Hand Wash Basin Repair and Installation', desc: 'Fixing wobbly basins, replacing cracked ceramic sinks, and installing modern vanity units with pristine silicone sealing.', image: plumbingBasinImage },
      { name: 'Kitchen Sink Repair and Installation', desc: 'Mounting heavy stainless steel or granite sinks, fixing leaky traps, and installing modern pull-down mixer faucets.', image: plumbingKitchenSinkImage },
      { name: 'Bath Tub Installation', desc: 'Setting up luxurious bathtubs, connecting complex overflow and pop-up waste drains, and ensuring zero-leak integration with floor traps.', image: plumbingBathTubImage },
      { name: 'Toilet Repairs and Installations', desc: 'Fixing constantly running flushes, replacing broken seats, resolving weak flushes, and installing modern wall-hung commodes with concealed cisterns.', image: plumbingToiletImage },
      { name: 'Tap Repairs and Installations', desc: 'Fixing dripping faucets by replacing worn-out ceramic cartridges. Upgrading old taps to modern, aerated, water-saving mixers.', image: plumbingTapImage },
      { name: 'Blocked Pipes and Drains removing and installation', desc: 'Using powerful drain snakes and high-pressure jetting to clear stubborn hair, grease, and blockages from floor traps and main sewer lines.', image: plumbingPipesImage }
    ]
  },
];

export const services = rawServices.map((service) => ({
  ...service,
  subServices: service.subServices.map((subService) => ({
    ...subService,
    image: getServiceImage(subService.name, subService.image)
  }))
}));
