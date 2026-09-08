import React from 'react';
import Link from 'next/link';
import LoadMoreButton from '@/components/LoadMoreButton';

export default async function Page() {
  // ดึงข้อมูลบทความทั้งหมดจาก WordPress API
  const res = await fetch('https://www.360techx.co/wp-json/wp/v2/posts?_embed&per_page=9', { next: { revalidate: 60 } });
  const posts = await res.json();

  return (
    <>


    <main className="news-page-container">

        {/* Header & Filters */}
        <div className="section-heading" style={{ marginBottom: '0.5rem' }}>
            <h2><span className="text-gradient">ข่าวสารและโปรโมชั่น</span></h2>
        </div>

        <div className="filter-tabs">
            <button className="filter-btn active">ทั้งหมด</button>
            <button className="filter-btn">อัปเดตระบบ</button>
            <button className="filter-btn">โปรโมชั่น</button>
            <button className="filter-btn">ข่าวสารองค์กร</button>
            <button className="filter-btn">เกร็ดความรู้ (Tips)</button>
            <button className="filter-btn">กิจกรรม</button>
        </div>
        
        {/* Featured Bento Section */}
        <section className="featured-bento">
            {/* Large Left */}
            <a href="#" className="bento-card bento-large">
                <img src="/Office-360TRUCK/310497074_786540285642887_6994208460385202528_n.jpeg" alt="Featured News" />
                <div className="bento-overlay"></div>
                <div className="bento-content">
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <span className="tag-pill">ข่าวสาร</span>
                    </div>
                    <h2 className="bento-title">360TECHX เปิดตัว TMS โฉมใหม่<br />ยกระดับวงการโลจิสติกส์ไทย</h2>
                    <div className="bento-meta">
                        <div>
                            <span>ผู้เขียน</span>
                            <strong>ทีมพัฒนา 360TECHX</strong>
                        </div>
                        <div>
                            <span>วันที่เผยแพร่</span>
                            <strong>15 สิงหาคม 2026</strong>
                        </div>
                    </div>
                </div>
            </a>
            
            {/* Small Top Right */}
            <a href="#" className="bento-card bento-small">
                <img src="/Office-360TRUCK/310561578_786540598976189_7453248759151350282_n.jpeg" alt="Event" />
                <div className="bento-overlay"></div>
                <div className="bento-content">
                    <span className="tag-pill">Event</span>
                    <h3 className="bento-title">ภาพบรรยากาศงาน Tech Logistics Summit 2026</h3>
                </div>
            </a>

            {/* Small Bottom Right */}
            <a href="#" className="bento-card bento-small">
                <img src="/Office-360TRUCK/310613192_786540602309522_3620945077409691797_n.jpeg" alt="Promotion" />
                <div className="bento-overlay"></div>
                <div className="bento-content">
                    <span className="tag-pill">Promotion</span>
                    <h3 className="bento-title">โปรโมชั่นพิเศษ! สมัครใช้งาน TMS รับสิทธิ์ฟรี 3 เดือนแรก</h3>
                </div>
            </a>
        </section>


        {/* News Grid (Dynamic from WP API) */}
        <div className="news-grid">
            
            {posts && posts.map((post) => {
                const dateObj = new Date(post.date);
                const formattedDate = dateObj.toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' });
                const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/Logo-interface/CONVERGENT_PROCESSES.jpeg';
                const categoryName = post._embedded?.['wp:term']?.[0]?.[0]?.name || 'ข่าวสาร';
                const authorName = post._embedded?.author?.[0]?.name || 'Admin';
                const authorAvatar = post._embedded?.author?.[0]?.avatar_urls?.['96'] || '/Authors/Pakkapon-Chuensuwan.JPG';
                const plainExcerpt = post.excerpt?.rendered?.replace(/<[^>]+>/g, '').substring(0, 100) + '...' || '';

                return (
                    <Link href={`/news/${post.slug}`} className="news-card" key={post.id}>
                        <div className="news-img-wrap">
                            <span className="card-tag">{categoryName}</span>
                            <img src={featuredMedia} alt={post.title.rendered} />
                        </div>
                        <div className="news-content">
                            <div className="news-title-row">
                                <h3 className="news-title" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h3>
                                <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </div>
                            <p className="news-snippet" dangerouslySetInnerHTML={{ __html: plainExcerpt }}></p>
                            <div className="news-footer">
                                <img className="author-avatar" src={authorAvatar} alt={authorName} style={{ padding: 0, objectFit: 'cover', background: 'transparent' }} />
                                <div className="author-info">
                                    {authorName} <span className="dot"></span> {formattedDate}
                                </div>
                            </div>
                        </div>
                    </Link>
                );
            })}

        </div>

        <LoadMoreButton />

    </main>

    </>
  );
}