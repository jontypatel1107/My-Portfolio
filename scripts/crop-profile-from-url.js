// Usage:
// node scripts/crop-profile-from-url.js <image-url>
// If no URL is provided, the script uses the defaultURL below.
// Produces:
// - public/profile.png   (512x512 circular)
// - public/profile@2x.png (1024x1024 circular)

import sharp from 'sharp';
import * as fs from 'fs';
import path from 'path';
import https from 'https';

const defaultURL = 'https://res.cloudinary.com/dhsotri6d/image/upload/v1770271413/LMS_ibdlld.jpg';
const url = process.argv[2] || defaultURL;
const OUT_DIR = path.join(process.cwd(), 'public');
const OUT_PATH_1x = path.join(OUT_DIR, 'profile.png');
const OUT_PATH_2x = path.join(OUT_DIR, 'profile@2x.png');

async function fetchBuffer(imageUrl) {
  return new Promise((resolve, reject) => {
    https.get(imageUrl, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error('Failed to fetch image, status ' + res.statusCode));
        return;
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

(async () => {
  try {
    console.log('Downloading image from:', url);
    const buffer = await fetchBuffer(url);

    if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR);

    // We use 'cover' with position 'north' to favor the upper area (face region)
    // Create high-res 1024 and a 512 fallback
    const SIZE_2X = 1024;
    const SIZE_1X = 512;

    const resized2x = await sharp(buffer)
      .resize(SIZE_2X, SIZE_2X, { fit: 'cover', position: 'north' })
      .png()
      .toBuffer();

    const svg = `<svg width="${SIZE_2X}" height="${SIZE_2X}"><rect x="0" y="0" width="${SIZE_2X}" height="${SIZE_2X}" rx="${SIZE_2X/2}" ry="${SIZE_2X/2}" fill="#fff"/></svg>`;

    await sharp(resized2x)
      .composite([{ input: Buffer.from(svg), blend: 'dest-in' }])
      .png()
      .toFile(OUT_PATH_2x);

    // Create 1x from 2x (better quality)
    await sharp(resized2x)
      .resize(SIZE_1X, SIZE_1X)
      .composite([{ input: Buffer.from(`<svg width="${SIZE_1X}" height="${SIZE_1X}"><rect x="0" y="0" width="${SIZE_1X}" height="${SIZE_1X}" rx="${SIZE_1X/2}" ry="${SIZE_1X/2}" fill="#fff"/></svg>`), blend: 'dest-in' }])
      .png()
      .toFile(OUT_PATH_1x);

    console.log('Saved:', OUT_PATH_2x);
    console.log('Saved:', OUT_PATH_1x);
    console.log('Done. Restart dev server if running to see the updated hero image.');
  } catch (err) {
    console.error('Error:', err.message || err);
    process.exit(1);
  }
})();
