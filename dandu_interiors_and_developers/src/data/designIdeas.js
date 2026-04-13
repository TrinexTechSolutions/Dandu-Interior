import residentialDesignImage from '../assets/Services/Residential Design.webp';
import officeDesignImage from '../assets/Services/Office Design.webp';
import commercialDesignImage from '../assets/Services/Commercial Design.webp';
import kitchenRenovationImage from '../assets/Services/Kitchen Renovation.webp';
import livingRoomRenovationImage from '../assets/Services/Living Room Renovation.webp';
import bathroomRenovationImage from '../assets/Services/Bathroom Renovation.webp';
import bathTubInstallationImage from '../assets/Services/Bath Tub Installation.webp';
import interiorPaintingImage from '../assets/Services/Interior Painting.webp';
import wallpaperFixingImage from '../assets/Services/Wallpaper Fixing.webp';
import poojaroomImage from '../assets/Projects/project-gallery-28.webp';
import shelvesFixingImage from '../assets/Services/Shelves Fixing.webp';
import officePaintingImage from '../assets/Services/Office Painting.webp';
import fullHomeRenovationImage from '../assets/Services/Full Home Renovation.webp';
import extensionOfAreasImage from '../assets/Services/Extension of Areas.webp';
import spaceSavingIdeaImage from '../assets/DesignIdeas/Space saving.webp';
import flooringImage from '../assets/Services/Flooring.webp';
import kitchenSinkRepairAndInstallationImage from '../assets/Services/Kitchen Sink Repair and Installation.webp';
import mirrorInstallationImage from '../assets/Services/Mirror Installation.webp';
import curtainRodsAndBlindFixingImage from '../assets/Services/Curtain Rods & Blind Fixing.webp';
import handWashBasinRepairAndInstallationImage from '../assets/Services/Hand Wash Basin Repair and Installation.webp';
import homeAppliancesFixingImage from '../assets/Services/Home Appliances Fixing.webp';
import solidPartitionImage from '../assets/Services/Solid Partition.webp';
import lightAndLampFixingImage from '../assets/Services/Light & Lamp Fixing.webp';
import wallPartitionMakingImage from '../assets/Services/Wall Partition Making.webp';
import exteriorPaintingImage from '../assets/Services/Exterior Painting.webp';
import tileFixingImage from '../assets/Services/Tile Fixing.webp';
import tileGroutingImage from '../assets/Services/Tile Grouting.webp';
import diningRoomIdeaImage from '../assets/DesignIdeas/Dining Room.webp';
import kidsBedroomIdeaImage from '../assets/DesignIdeas/Kids Bedroom.webp';
import wardrobeIdeaImage from '../assets/DesignIdeas/Wardrobe.webp';

// New Imports for Updated Content
import kitchenCabinetsImage from '../assets/Services/Kitchen Cabinets.webp';
import modularKitchenAndWardrobesImage from '../assets/Services/Modular Kitchen & Wardrobes.webp';
import plumbingToiletImage from '../assets/Services/plumbing_toilet.webp';
import plumbingBasinImage from '../assets/Services/plumbing_basin.webp';
import marbleImage from '../assets/Services/Marble.webp';
import decoImage from '../assets/Services/Deco.webp';
import allPaintingWorkImage from '../assets/Services/All Painting Work.webp';
import housePaintingImage from '../assets/Services/House Painting.webp';
import interiorImage from '../assets/Services/Interior.webp';
import bedRoom01Image from '../assets/DesignIdeas/BedRoom01.webp';
import bedRoom02Image from '../assets/DesignIdeas/BedRoom02.webp';
import bedRoom03Image from '../assets/DesignIdeas/BedRoom03.webp';
import bedRoom04Image from '../assets/DesignIdeas/BedRoom04.webp';
import kidsBedroom01Image from '../assets/DesignIdeas/KidsBedroom01.webp';
import kidsBedroom02Image from '../assets/DesignIdeas/KidsBedroom02.webp';
import kidsBedroom03Image from '../assets/DesignIdeas/KidsBedroom03.webp';
import kidsBedroom04Image from '../assets/DesignIdeas/KidsBedroom04.webp';
import kidsBedroom05Image from '../assets/DesignIdeas/KidsBedroom05.webp';
import crockeryUnitImage from '../assets/Services/Crockery Unit.webp';
import wardrobeServiceImage from '../assets/Services/Wardrobe.webp';

const projectImageMap = Object.fromEntries(
  Object.entries(import.meta.glob('../assets/Projects/*.webp', { eager: true, import: 'default' })).map(
    ([path, image]) => [path.split('/').pop(), image]
  )
);

const getProjectImage = (fileName) => projectImageMap[fileName];

export const designIdeas = [
  {
    title: 'Modular Kitchen',
    image: kitchenRenovationImage,
    count: '24 Designs',
    gallery: [
      getProjectImage('project-gallery-03.webp'),
      getProjectImage('project-gallery-24.webp'),
      getProjectImage('project-gallery-62.webp'),
      kitchenCabinetsImage,
      kitchenRenovationImage,
      modularKitchenAndWardrobesImage
    ]
  },
  {
    title: 'Living Room',
    image: livingRoomRenovationImage,
    count: '45 Designs',
    gallery: [
      plumbingToiletImage,
      plumbingBasinImage,
      marbleImage,
      livingRoomRenovationImage,
      flooringImage,
      decoImage,
      allPaintingWorkImage
    ]
  },
  {
    title: 'Bedroom',
    image: housePaintingImage,
    count: '38 Designs',
    gallery: [
      interiorImage,
      getProjectImage('project-gallery-02.webp'),
      bedRoom01Image,
      bedRoom02Image,
      bedRoom03Image,
      bedRoom04Image
    ]
  },
  {
    title: 'Kids Bedroom',
    image: kidsBedroomIdeaImage,
    count: '15 Designs',
    gallery: [
      kidsBedroom01Image,
      kidsBedroom02Image,
      kidsBedroom03Image,
      kidsBedroom04Image,
      kidsBedroom05Image
    ]
  },
  {
    title: 'Wardrobe',
    image: wardrobeIdeaImage,
    count: '31 Designs',
    gallery: [
      wardrobeServiceImage,
      crockeryUnitImage,
      getProjectImage('project-gallery-60.webp'),
      getProjectImage('project-gallery-59.webp'),
      getProjectImage('project-gallery-57.webp'),
      getProjectImage('project-gallery-52.webp'),
      getProjectImage('project-gallery-45.webp')
    ]
  },
  {
    title: 'Dining Room',
    image: diningRoomIdeaImage,
    count: '22 Designs',
    gallery: [
      commercialDesignImage,
      livingRoomRenovationImage,
      lightAndLampFixingImage,
      flooringImage,
      getProjectImage('project-gallery-45.webp')
    ]
  },
  {
    title: 'Pooja Room',
    image: poojaroomImage,
    count: '12 Designs',
    gallery: [
      residentialDesignImage,
      interiorPaintingImage,
      lightAndLampFixingImage,
      flooringImage,
      getProjectImage('project-gallery-46.webp')
    ]
  },
  {
    title: 'Space Saving',
    image: spaceSavingIdeaImage,
    count: '28 Designs',
    gallery: [
      wallPartitionMakingImage,
      solidPartitionImage,
      shelvesFixingImage,
      curtainRodsAndBlindFixingImage,
      mirrorInstallationImage
    ]
  },
  {
    title: 'Home Office',
    image: officeDesignImage,
    count: '19 Designs',
    gallery: [
      officePaintingImage,
      solidPartitionImage,
      wallPartitionMakingImage,
      lightAndLampFixingImage,
      getProjectImage('project-gallery-63.webp')
    ]
  },
  {
    title: 'Bathroom',
    image: bathroomRenovationImage,
    count: '34 Designs',
    gallery: [
      handWashBasinRepairAndInstallationImage,
      bathTubInstallationImage,
      tileFixingImage,
      tileGroutingImage,
      getProjectImage('project-gallery-58.webp')
    ]
  },
  {
    title: 'Balcony',
    image: extensionOfAreasImage,
    count: '14 Designs',
    gallery: [
      flooringImage,
      exteriorPaintingImage,
      curtainRodsAndBlindFixingImage,
      lightAndLampFixingImage,
      getProjectImage('project-gallery-59.webp')
    ]
  },
  {
    title: '1, 2, 3 BHK Plans',
    image: fullHomeRenovationImage,
    count: '40 Designs',
    gallery: [
      residentialDesignImage,
      livingRoomRenovationImage,
      kitchenRenovationImage,
      bathroomRenovationImage,
      getProjectImage('project-gallery-60.webp')
    ]
  }
];
