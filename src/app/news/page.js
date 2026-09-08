import React from 'react';
import Link from 'next/link';
import NewsList from '@/components/NewsList';

export default async function Page() {
  // ดึงข้อมูลบทความทั้งหมดจาก WordPress API พร้อมจัดการ Error
  let posts = [];
  try {
    const res = await fetch('https://www.360techx.co/wp-json/wp/v2/posts?_embed&per_page=9', { 
      next: { revalidate: 60 },
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } // ป้องกันบอทบล็อก
    });
    if (res.ok) {
      posts = await res.json();
    } else {
      console.error('WP API Error:', res.status);
    }
  } catch (error) {
    console.error('Fetch failed:', error);
  }

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
        <NewsList initialPosts={posts} />

    </main>

    </>
  );
}