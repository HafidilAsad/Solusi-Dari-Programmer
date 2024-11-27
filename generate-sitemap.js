const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: 'https://solusiprogrammer.my.id/' });

  // Tambahkan URL halaman ke sitemap
  sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
  sitemap.write({ url: '/about', changefreq: 'weekly', priority: 0.8 });
  sitemap.write({ url: '/services', changefreq: 'monthly', priority: 0.6 });

  // Tutup stream dan simpan file
  sitemap.end();
  const data = await streamToPromise(sitemap);
  fs.writeFileSync('./public/sitemap.xml', data);
};

generateSitemap().then(() => {
  console.log('Sitemap generated!');
});
