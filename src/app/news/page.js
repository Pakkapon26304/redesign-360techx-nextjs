import React from 'react';
import Link from 'next/link';
import NewsList from '@/components/NewsList';

export default async function Page() {
  // ดึงข้อมูลบทความทั้งหมดจาก WordPress API (ดึง 9 บทความสำหรับ Grid)
  let posts = [];
  let categories = [];
  try {
    const [postsRes, catRes] = await Promise.all([
      fetch('https://www.360techx.co/wp-json/wp/v2/posts?_embed&per_page=9', { 
        next: { revalidate: 60 },
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
      }),
      fetch('https://www.360techx.co/wp-json/wp/v2/categories?hide_empty=true', {
        next: { revalidate: 3600 },
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
      })
    ]);

    if (postsRes.ok) posts = await postsRes.json();
    if (catRes.ok) categories = await catRes.json();
  } catch (error) {
    console.error('Fetch failed:', error);
  }

  return (
    <>
    <main className="news-page-container">

        {/* Header */}
        <div className="section-heading" style={{ marginBottom: '1.5rem' }}>
            <h2><span className="text-gradient">ข่าวสารและโปรโมชั่น</span></h2>
        </div>

        {/* News Grid and Filter Tabs (Dynamic from WP API) */}
        <NewsList initialPosts={posts} categories={categories} />

    </main>
    </>
  );
}