import Link from 'next/link';

export default function RelatedPosts({ post }) {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1rem' }}>
      {/* 1. Tags */}
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
        <span style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>Tags:</span>
        {post.tags.map(tag => (
          <span key={tag} style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 14px', borderRadius: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>#{tag}</span>
        ))}
      </div>

      {/* 2. Related Posts */}
      <div>
        <h3 style={{ color: 'var(--text-main)', fontSize: '1.5rem', marginBottom: '1.5rem', borderLeft: '4px solid var(--primary)', paddingLeft: '1rem' }}>บทความที่เกี่ยวข้อง (Related Posts)</h3>
        <div className="related-posts-grid">
          
          <Link href="#" className="news-card">
            <div className="news-img-wrap">
              <span className="card-tag">คลังสินค้า</span>
              <img src="/Logo-interface/CONVERGENT_PROCESSES.jpeg" alt="News" />
            </div>
            <div className="news-content">
              <div className="news-title-row">
                <h3 className="news-title">ทำความรู้จักระบบ WMS คลังสินค้าอัจฉริยะ</h3>
                <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
              <p className="news-snippet">เรียนรู้ว่าระบบจัดการคลังสินค้าหรือ WMS ช่วยลดต้นทุนและเพิ่มประสิทธิภาพได้อย่างไรในยุค 4.0</p>
            </div>
          </Link>

          <Link href="#" className="news-card">
            <div className="news-img-wrap">
              <span className="card-tag">เทรนด์ธุรกิจ</span>
              <img src="/Office-360TRUCK/310931835_786540258976223_1593692212990799741_n.jpeg" alt="News" />
            </div>
            <div className="news-content">
              <div className="news-title-row">
                <h3 className="news-title">เทรนด์ Logistics 2026 ที่ต้องจับตา</h3>
                <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
              <p className="news-snippet">อัปเดตเทรนด์เทคโนโลยีด้านการขนส่งที่จะเข้ามามีบทบาทสำคัญในปี 2026 เพื่อเตรียมความพร้อมให้ธุรกิจคุณ</p>
            </div>
          </Link>

          <Link href="#" className="news-card">
            <div className="news-img-wrap">
              <span className="card-tag">Logistics Strategy</span>
              <img src="/Office-360TRUCK/310452082_786540268976222_702777566473144756_n.jpeg" alt="News" />
            </div>
            <div className="news-content">
              <div className="news-title-row">
                <h3 className="news-title">วิธีลดต้นทุนด้วยการคำนวณเส้นทาง</h3>
                <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
              <p className="news-snippet">เผยเทคนิคการบริหารจัดการเส้นทางเดินรถที่ช่วยลดค่าน้ำมันและเวลาการขนส่งอย่างเป็นรูปธรรม</p>
            </div>
          </Link>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .related-posts-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 768px) {
          .related-posts-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </div>
  );
}
