export default async function sitemap() {
  const baseUrl = 'https://www.360techx.co';

  // 1. Static Pages (หน้า Landing Page หลักๆ)
  const staticPages = [
    '',
    '/360techx-basic',
    '/360techx-enterprise',
    '/ibid',
    '/news',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
    '/complaint-resolution-policy',
    '/data-protection-policy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : (['/privacy-policy', '/terms-and-conditions', '/complaint-resolution-policy', '/data-protection-policy'].includes(route) ? 0.5 : 0.8),
  }));

  // 2. Dynamic Pages (ดึงข้อมูลจาก WordPress API - ตัวอย่างโค้ดสำหรับ Agency)
  /*
  const wpPosts = await fetch('https://blog.360techx.co/wp-json/wp/v2/posts').then(res => res.json());
  const dynamicPosts = wpPosts.map((post) => ({
    url: `${baseUrl}/news/${post.slug}`,
    lastModified: new Date(post.modified).toISOString(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));
  */
  
  // (ชั่วคราว: จำลอง URL ของบทความ)
  const dynamicPosts = [
    {
      url: `${baseUrl}/news/route-planning-save-cost`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.6,
    }
  ];

  return [...staticPages, ...dynamicPosts];
}
