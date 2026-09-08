import React from 'react';
import Link from 'next/link';
import ContactInfoFormSection from '../../contact/components/ContactInfoFormSection';
import RelatedPosts from '../components/RelatedPosts';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  // ดึงข้อมูลจาก WordPress API ของจริง
  const res = await fetch(`https://www.360techx.co/wp-json/wp/v2/posts?slug=${slug}&_embed`, { cache: 'no-store' });
  const posts = await res.json();
  const post = posts[0];

  if (!post) {
    return { title: 'Post Not Found | 360TECHX' };
  }

  // หารูปภาพหน้าปก (Featured Image) จาก _embedded
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/Logo-interface/CONVERGENT_PROCESSES.jpeg';
  // ตัดแท็ก HTML ออกจาก Excerpt สำหรับ Description
  const plainExcerpt = post.excerpt?.rendered?.replace(/<[^>]+>/g, '') || '';

  return {
    title: `${post.title.rendered} | 360TECHX`,
    description: plainExcerpt,
    alternates: {
      canonical: `https://www.360techx.co/news/${params.slug}`,
    },
    openGraph: {
      title: post.title.rendered,
      description: plainExcerpt,
      images: [
        {
          url: featuredMedia,
          alt: post.title.rendered,
        },
      ],
      type: 'article',
      publishedTime: post.date,
    },
    robots: {
      index: true,
      follow: true,
    }
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;

  // ดึงข้อมูลบทความจริงๆ จาก WordPress REST API
  const res = await fetch(`https://www.360techx.co/wp-json/wp/v2/posts?slug=${slug}&_embed`, { cache: 'no-store' });
  const posts = await res.json();
  const post = posts[0];
  
  console.log("Fetching slug:", slug, "Found post:", !!post);

  if (!post) {
    return <div style={{ paddingTop: '150px', textAlign: 'center', minHeight: '50vh' }}><h1>ไม่พบบทความที่คุณค้นหา</h1></div>;
  }

  // แปลงวันที่ให้อ่านง่าย
  const dateObj = new Date(post.date);
  const formattedDate = dateObj.toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' });

  // หารูปภาพหน้าปก
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
  
  // หาหมวดหมู่
  const categoryName = post._embedded?.['wp:term']?.[0]?.[0]?.name || 'News';

  // หาข้อมูลผู้เขียน
  const authorName = post._embedded?.author?.[0]?.name || '360TECHX Team';
  const authorAvatar = post._embedded?.author?.[0]?.avatar_urls?.['96'] || '/Authors/Pakkapon-Chuensuwan.JPG';

  // ส่งข้อมูลจำลองไปให้ RelatedPosts ชั่วคราวก่อน หรือถ้าอยากดึงจริงก็ทำได้
  const postDataForRelated = {
    title: post.title.rendered,
    category: categoryName,
    featuredImage: featuredMedia || '/Logo-interface/CONVERGENT_PROCESSES.jpeg',
    tags: []
  };

  return (
    <main style={{ background: 'var(--bg-main)', minHeight: '100vh' }}>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '10rem 2rem 6rem 2rem', display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
        
        {/* ================= LEFT CONTENT COLUMN ================= */}
        <article style={{ flex: '1 1 65%', minWidth: '300px' }}>
          
          {/* Title and Meta (Left Aligned) */}
          <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, #32ff98 0%, #03665e 100%)', color: '#ffffff', padding: '6px 16px', borderRadius: '50px', fontSize: '0.95rem', fontWeight: '700', marginBottom: '1.5rem', boxShadow: '0 4px 12px rgba(3, 102, 94, 0.3)' }}>{categoryName}</div>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', marginBottom: '1.5rem', lineHeight: 1.3, color: 'var(--text-main)', letterSpacing: '-0.5px' }} dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h1>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', color: 'var(--text-muted)', fontSize: '1rem', flexWrap: 'wrap', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img src={authorAvatar} alt={authorName} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '50%' }} />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: '600', color: 'var(--text-main)', lineHeight: 1.2 }}>{authorName}</span>
                    <span style={{ fontSize: '0.85rem' }}>สร้างเมื่อวันที่ : {formattedDate}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginLeft: 'auto' }}>
                  <button style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#1877F2', color: '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem' }}>f</button>
                  <button style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#000000', color: '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem' }}>X</button>
                  <button style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#0A66C2', color: '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem' }}>in</button>
                </div>
              </div>
          </div>

          {/* Featured Image */}
          {featuredMedia && (
            <div style={{ marginBottom: '3rem', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
              <img src={featuredMedia} alt="Featured" style={{ width: '100%', maxHeight: '500px', objectFit: 'cover', display: 'block' }} />
            </div>
          )}

          {/* WordPress Content Rendered Here */}
          <div 
            className="wp-content"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

        </article>

        <aside style={{ flex: '1 1 30%', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Custom Contact Card */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', background: '#ffffff' }}>
            {/* Banner Image */}
            <img src="/banner-cta/วางแผนงานขนส่งจาก3ชั่วโมงเหลือ3นาที.jpg" alt="Banner" style={{ width: '100%', height: 'auto', display: 'block', aspectRatio: '16/9', objectFit: 'cover' }} />
            
            {/* Contact Form Section */}
            <div className="sidebar-contact">
              <ContactInfoFormSection />
            </div>
          </div>

        </aside>
      </div>
      {/* 4. Tags and Related Posts Full Width Section */}
      <RelatedPosts post={postDataForRelated} />

      {/* สไตล์สำหรับจัดการ HTML ที่ได้มาจาก WordPress (wp-content) */}
      <style dangerouslySetInnerHTML={{__html: `
        .sidebar-contact .tms-tiers {
          padding: 0 !important;
        }
        .sidebar-contact .tier-row {
          margin: 0 !important;
          padding: 2rem 0 0 0 !important;
        }
        .sidebar-contact .reveal {
          opacity: 1 !important;
          transform: none !important;
          transition: none !important;
        }
        .sidebar-contact .tier-container {
          display: flex !important;
          flex-direction: column !important;
          gap: 2rem !important;
          width: 100% !important;
        }
        .sidebar-contact {
          /* no extra padding needed here */
        }
        .sidebar-contact .tier-info {
          display: none !important;
        }
        .sidebar-contact .tier-title {
          font-size: 1.8rem !important;
        }
        .sidebar-contact .tier-benefits .benefit {
          font-size: 0.9rem !important;
        }
        .sidebar-contact .contact-form-wrapper {
          width: 100% !important;
        }
        .sidebar-contact .contact-form-wrapper form {
          display: flex !important;
          flex-direction: column !important;
          width: 100% !important;
        }
        .sidebar-contact .contact-form-wrapper > div {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          padding: 0 1.5rem 1.5rem 1.5rem !important;
          width: 100% !important;
        }
        
        .wp-content {
          font-size: 1.15rem;
          line-height: 1.8;
          color: var(--text-muted);
        }
        .wp-content p {
          margin-bottom: 1.5rem;
        }
        .wp-content h2 {
          color: var(--text-main);
          font-size: 1.8rem;
          margin-bottom: 1rem;
          margin-top: 2.5rem;
          font-weight: 700;
        }
        .wp-content h3 {
          color: var(--text-main);
          font-size: 1.5rem;
          margin-bottom: 1rem;
          margin-top: 2rem;
          font-weight: 600;
        }
        .wp-content a {
          color: var(--primary);
          text-decoration: underline;
        }
        .wp-content ul, .wp-content ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        .wp-content li {
          margin-bottom: 0.5rem;
        }
        .wp-content img {
          max-width: 100%;
          height: auto;
          border-radius: 16px;
          margin: 2rem 0;
        }
        .wp-content blockquote {
          border-left: 4px solid var(--primary);
          padding-left: 1.5rem;
          font-style: italic;
          margin: 2rem 0;
          color: var(--text-main);
          background: rgba(255,255,255,0.02);
          padding: 1.5rem;
          border-radius: 0 8px 8px 0;
        }

      `}} />
    </main>
  );
}
