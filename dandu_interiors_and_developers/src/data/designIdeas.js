import kitchenRenovationImage from '../assets/Services/Kitchen Renovation.webp';
import livingRoomRenovationImage from '../assets/Services/Living Room Renovation.webp';
import bathroomRenovationImage from '../assets/Services/Bathroom Renovation.webp';
import bathTubInstallationImage from '../assets/Services/Bath Tub Installation.webp';
import poojaroomImage from '../assets/DesignIdeas/Pooja Room02.webp';
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
import flooringImage from '../assets/Services/Flooring.webp';
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

// Dining Room updated content
import diningRoom01Image from '../assets/DesignIdeas/Dining Room01.webp';
import diningRoom02Image from '../assets/DesignIdeas/Dining Room02.webp';
import diningRoom03Image from '../assets/DesignIdeas/Dining Room03.webp';

// Pooja Room updated content
import poojaRoom01Image from '../assets/DesignIdeas/Pooja Room01.webp';
import poojaRoom02Image from '../assets/DesignIdeas/Pooja Room02.webp';
import poojaRoom03Image from '../assets/DesignIdeas/Pooja Room03.webp';
import poojaRoom04Image from '../assets/DesignIdeas/Pooja Room04.webp';
import poojaRoom05Image from '../assets/DesignIdeas/Pooja Room05.webp';

// Space Saving updated content
import spaceSaving01Image from '../assets/DesignIdeas/Space Saving01.webp';
import spaceSaving02Image from '../assets/DesignIdeas/Space Saving02.webp';
import spaceSaving03Image from '../assets/DesignIdeas/Space Saving03.webp';
import spaceSaving04Image from '../assets/DesignIdeas/Space Saving04.webp';
import spaceSaving05Image from '../assets/DesignIdeas/Space Saving05.webp';
import spaceSaving06Image from '../assets/DesignIdeas/Space Saving06.webp';

// Home Office updated content
import homeOffice01Image from '../assets/DesignIdeas/Home Office01.webp';
import homeOffice02Image from '../assets/DesignIdeas/Home Office02.webp';
import homeOffice03Image from '../assets/DesignIdeas/Home Office03.webp';
import homeOffice04Image from '../assets/DesignIdeas/Home Office04.webp';
import homeOffice05Image from '../assets/DesignIdeas/Home Office05.webp';

// Bathroom updated content
import bathroom01Image from '../assets/DesignIdeas/Bathroom01.webp';
import bathroom02Image from '../assets/DesignIdeas/Bathroom02.webp';
import toiletRepairsAndInstallationsImage from '../assets/Services/Toilet Repairs and Installations.webp';
import washbasinUnitImage from '../assets/Services/Washbasin Unit.webp';

// Balcony updated content
import balcony01Image from '../assets/DesignIdeas/Balcony01.webp';
import balcony02Image from '../assets/DesignIdeas/Balcony02.webp';
import balcony03Image from '../assets/DesignIdeas/Balcony03.webp';
import balcony04Image from '../assets/DesignIdeas/Balcony04.webp';
import balcony05Image from '../assets/DesignIdeas/Balcony05.webp';
import balcony06Image from '../assets/DesignIdeas/Balcony06.webp';

// 1, 2, 3 BHK Plans updated content
import bhkPlans01Image from '../assets/DesignIdeas/1, 2, 3 BHK Plans01.webp';
import bhkPlans02Image from '../assets/DesignIdeas/1, 2, 3 BHK Plans02.webp';
import bhkPlans03Image from '../assets/DesignIdeas/1, 2, 3 BHK Plans03.webp';
import bhkPlans04Image from '../assets/DesignIdeas/1, 2, 3 BHK Plans04.webp';
import bhkPlans05Image from '../assets/DesignIdeas/1, 2, 3 BHK Plans05.webp';
import bhkPlans06Image from '../assets/DesignIdeas/1, 2, 3 BHK Plans06.webp';

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
      getProjectImage('project-gallery-69.webp'),
      getProjectImage('project-gallery-13.webp'),
      diningRoom01Image,
      diningRoom02Image,
      diningRoom03Image
    ]
  },
  {
    title: 'Pooja Room',
    image: poojaroomImage,
    count: '12 Designs',
    gallery: [
      poojaRoom01Image,
      poojaRoom02Image,
      poojaRoom03Image,
      poojaRoom04Image,
      poojaRoom05Image
    ]
  },
  {
    title: 'Space Saving',
    image: spaceSaving01Image,
    count: '28 Designs',
    gallery: [
      spaceSaving01Image,
      spaceSaving02Image,
      spaceSaving03Image,
      spaceSaving04Image,
      spaceSaving05Image,
      spaceSaving06Image
    ]
  },
  {
    title: 'Home Office',
    image: homeOffice01Image,
    count: '19 Designs',
    gallery: [
      homeOffice01Image,
      homeOffice02Image,
      homeOffice03Image,
      homeOffice04Image,
      homeOffice05Image
    ]
  },
  {
    title: 'Bathroom',
    image: bathroomRenovationImage,
    count: '34 Designs',
    gallery: [
      bathTubInstallationImage,
      toiletRepairsAndInstallationsImage,
      washbasinUnitImage,
      bathroom01Image,
      bathroom02Image
    ]
  },
  {
    title: 'Balcony',
    image: balcony01Image,
    count: '14 Designs',
    gallery: [
      balcony01Image,
      balcony02Image,
      balcony03Image,
      balcony04Image,
      balcony05Image,
      balcony06Image
    ]
  },
  {
    title: '1, 2, 3 BHK Plans',
    image: bhkPlans01Image,
    count: '40 Designs',
    gallery: [
      bhkPlans01Image,
      bhkPlans02Image,
      bhkPlans03Image,
      bhkPlans04Image,
      bhkPlans05Image,
      bhkPlans06Image
    ]
  }
];
