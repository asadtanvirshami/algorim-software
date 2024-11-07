import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';

const BASE_URL = 'https://algorimsoftware.io'; // Replace with your site's URL

async function generateSitemap() {
  const smStream = new SitemapStream({ hostname: BASE_URL });
  const filePath = path.join(process.cwd(), 'public', 'sitemap.xml');
  const writeStream = createWriteStream(filePath);

  smStream.pipe(writeStream);

  // List of paths to include in the sitemap. Modify as needed.
  const paths = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/home', changefreq: 'monthly', priority: 0.8 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.7 },
    { url: '/portfolio', changefreq: 'monthly', priority: 0.7 },
    { url: '/services', changefreq: 'monthly', priority: 0.7 },
    { url: '/tos', changefreq: 'monthly', priority: 0.7 },
  ];

  paths.forEach((path) => smStream.write(path));

  // End sitemap stream
  smStream.end();

  // Wait until the sitemap is written
  await streamToPromise(smStream);
  console.log('Sitemap created successfully at', filePath);
}

// Execute the script
generateSitemap().catch((error) => {
  console.error('Error creating sitemap:', error);
});
