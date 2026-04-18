
import sharp from 'sharp';
import path from 'path';

const input = 'src/assets/herosection_banners/hero1.webp';
const output = 'src/assets/herosection_banners/hero1_mobile.webp';

sharp(input)
  .resize(800) // Mobile width
  .webp({ quality: 80 })
  .toFile(output)
  .then(() => console.log('Created mobile hero image'))
  .catch(err => console.error('Error creating mobile hero image:', err));
