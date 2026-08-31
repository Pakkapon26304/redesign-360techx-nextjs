import React from 'react';
import Link from 'next/link';
import ContactInfoFormSection from '../../contact/components/ContactInfoFormSection';
import RelatedPosts from '../components/RelatedPosts';

export async function generateMetadata({ params }) {
  // ข้อมูลจำลองสำหรับ Metadata
  const post = {
    title: 'ทำไมการวางแผนเส้นทางขนส่งให้แม่นยำ ถึงช่วยประหยัดเงินได้มหาศาล?',
    excerpt: 'ไขความลับธุรกิจขนส่งที่เติบโตอย่างก้าวกระโดด ด้วยการวางแผนเส้นทางที่ช่วยประหยัดค่าน้ำมัน ลดชั่วโมง OT และเพิ่มกำไรด้วยระบบ TMS',
    featuredImage: '/Logo-interface/CONVERGENT_PROCESSES.jpeg',
    publishedTime: new Date().toISOString()
  };

  return {
    title: `${post.title} | 360TECHX`,
    description: post.excerpt,
    alternates: {
      canonical: `https://360techx.co/news/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.featuredImage,
          alt: post.title,
        },
      ],
      type: 'article',
      publishedTime: post.publishedTime,
    },
    robots: {
      index: true,
      follow: true,
    }
  };
}

export default async function ArticlePage({ params }) {
  // ข้อมูลจำลองของบทความ ที่จำลองมาจากโครงสร้าง WordPress REST API
  const post = {
    title: 'ทำไมการวางแผนเส้นทางขนส่งให้แม่นยำถึงช่วยประหยัดเงินได้มหาศาล?',
    date: '18 สิงหาคม 2026',
    category: 'Logistics Strategy',
    featuredImage: '/Logo-interface/CONVERGENT_PROCESSES.jpeg',
    tags: ['TMS', 'Logistics', 'CostSaving'],
    author: {
      name: 'Pakkapon Chuensuwan',
      avatar: '/Authors/Pakkapon-Chuensuwan.JPG',
      description: 'ผู้เชี่ยวชาญด้านระบบ Logistics และ Supply Chain Management พร้อมแบ่งปันเทคโนโลยีและเทรนด์ใหม่ๆ เพื่อยกระดับธุรกิจขนส่งไทย'
    },
    content: `
      <p>ทราบกันไหมครับว่ากุญแจของความสำเร็จคืออะไร? ในยุคที่มีนักธุรกิจหน้าใหม่เติบโตแบบพุ่งทะยานขึ้นอย่างรวดเร็ว ตลาดเต็มไปด้วยการแข่งขัน ไม่ว่าจะหันไปทางไหนก็มีแต่คู่แข่งที่น่ากลัว แต่ก็มีหลากธุรกิจที่ขายดีจนเจ๊งก็มีครับ แต่นั่นไม่ได้หมายความว่าธุรกิจเหล่านี้ไม่น่าสนใจนะครับ แต่อาจเป็นเพราะระบบหลังบ้านที่ยังไม่แกร่งพอจะรับมือกับการเติบโตอย่างก้าวกระโดดขนาดนั้น จึงทำให้มีทั้งธุรกิจที่รุ่งและธุรกิจที่ร่วง ดังนั้นถ้าอยากล้วงความลับของเหล่าธุรกิจที่เติบโตอย่างแข็งแกร่งต้องไม่พลาดบทความนี้ครับ</p>
      
      <p>การวางแผนเส้นทาง อย่างแม่นยำเป็นหัวใจสำคัญที่ช่วยให้ธุรกิจประหยัดเงินได้อย่างมหาศาล เพราะการจัดการเส้นทางที่ดี จะช่วยลดค่าใช้จ่ายที่ไม่จำเป็นออกไปได้อย่างมหาศาล ไม่ว่าจะเป็นค่าน้ำมันที่ลดลงจากการขับรถในระยะทางที่สั้นลงหรือเส้นทางที่ไม่มีอุปสรรค รวมถึงการจัดสรรเวลาทำงานของพนักงานขับรถได้อย่างมีประสิทธิภาพมากขึ้น ทำให้ชั่วโมงแรงงานที่ใช้ลดน้อยลง แต่ยังคงส่งมอบงานได้ครบถ้วนตามเป้าหมาย นั่นหมายความว่าทรัพยากรทุกอย่างที่มี จะถูกใช้อย่างคุ้มค่าที่สุด ไม่เกิดความสูญเปล่าหรือการทำงานซ้ำซ้อน</p>
      
      <p>นอกจากเรื่องของต้นทุนที่ลดลงแล้ว การวางแผนเส้นทาง ขนส่งอย่างรัดกุมยังช่วยลดความผิดพลาดที่อาจนำไปสู่ค่าเสียหายต่าง ๆ เช่น การส่งของล่าช้าหรือส่งผิดที่ ซึ่งไม่เพียงแต่ทำให้เสียเงิน แต่ยังส่งผลกระทบต่อความน่าเชื่อถือของธุรกิจด้วย นอกจากนี้ การมีข้อมูลเส้นทางที่แม่นยำยังทำให้เจ้าของกิจการสามารถวิเคราะห์ต้นทุนและกำไรได้อย่างชัดเจนขึ้น ช่วยวางแผนและปรับปรุงกลยุทธ์การขนส่งได้ดียิ่งขึ้นในระยะยาว ทำให้ภาพรวมธุรกิจแข็งแรงและเติบโตอย่างมั่นคงในอนาคตครับ บทความนี้เราจะมาพูดถึงการวางแผนเส้นทางขนส่งให้แม่นยำ ว่าทำไมถึงช่วยประหยัดเงินได้อย่างมหาศาล</p>
      
      <h2>1. ลดค่าน้ำมัน (Fuel Cost)</h2>
      <p>ทุกวันนี้ค่าน้ำมันก็แพงขึ้นทุกปี ถือว่าเป็นภาระหลักของธุรกิจขนส่งเลยก็ว่าได้ ดังนั้นการวางแผนเส้นทางแบบอัตโนมัติ จะช่วยให้เรากำจัดปัญหาเรื่องการ วิ่งซ้ำเส้นทางเดิม หรือการวิ่งแบบไร้ทิศทางออกไปได้เลยครับ เพราะระบบจะจัดเส้นทางที่สั้นและคุ้มค่าที่สุดไว้ให้ตั้งแต่ต้น ซึ่งต่างจากการวางแผนแบบเดิมที่ใช้ประสบการณ์ล้วน ๆ และอาจทำให้มีการวนรถกลับไปกลับมาโดยไม่จำเป็น พอระยะทางลดลงจริง ๆ ก็ทำให้ ค่าน้ำมันลดลงตามทันที แบบที่ไม่ต้องรอดูผลในระยะยาว</p>
      
      <h2>2. ลดชั่วโมงแรงงาน (Labor Hours)</h2>
      <p>เวลา คือ อีกหนึ่งต้นทุนที่หลายคนไม่ค่อยนึกถึงตอนแรกครับ แต่ความจริงแล้วเป็นต้นทุนแฝงที่แอบกินอยู่เงียบ ๆ พอรู้ตัวอีกทีก็ไม่น้อยเลยครับ โดยเฉพาะในธุรกิจที่ต้องใช้แรงงานคนขับรถ พนักงานจัดรอบ หรือแม้แต่แอดมินที่ต้องมานั่งไล่แผนงานทุกวัน</p>
      
      <h2>3. ใช้ทรัพยากรได้คุ้มขึ้น (Optimize Resources)</h2>
      <p>ถ้าพูดถึงต้นทุนการขนส่ง หลายคนอาจจะโฟกัสแค่ค่าน้ำมันหรือค่าแรงคนขับ แต่จริง ๆ แล้วทรัพยากรที่เรามีทั้งหมด ไม่ว่าจะเป็นจำนวนรถ คนขับ หรือแม้แต่เวลาในแต่ละวัน ล้วนเป็นต้นทุนที่เราควรใช้ให้คุ้มค่าที่สุดครับ</p>
      
      <h2>4. ลดความผิดพลาดและค่าเสียหาย</h2>
      <p>ปัญหาคลาสสิกที่หลายบริษัทเจอบ่อยคือ ไปส่งผิดที่ ทำให้เสียเวลาวิ่งกลับ ทั้งที่ข้อมูลก็มีครบ แต่พอถึงเวลาจริง คนขับอาจเปิดผิดออเดอร์ หรืองงกับเส้นทางจนขับเลย พอรู้ตัวอีกทีก็ต้องวนกลับไปส่งใหม่ เสียเวลา เสียน้ำมัน แถมยังทำให้รอบต่อ ๆ ไปเลทกันหมด</p>
      
      <h2>5. วิเคราะห์ต้นทุนและผลกำไรได้แม่นขึ้น</h2>
      <p>ทุกเส้นทางที่รถวิ่งล้วนมีต้นทุนซ่อนอยู่ ทั้งค่าน้ำมัน ค่าแรง ชั่วโมงทำงาน หรือแม้แต่เวลาที่ใช้ <a href="/360techx-enterprise">ระบบ TMS</a> ช่วยเก็บข้อมูลเหล่านี้ให้แบบอัตโนมัติ ทำให้เรารู้ได้เลยว่าเส้นทางไหนกำไรดี เส้นทางไหนวิ่งแล้วแทบไม่เหลืออะไร</p>
    `
  };

  return (
    <main style={{ background: 'var(--bg-main)', minHeight: '100vh' }}>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '10rem 2rem 6rem 2rem', display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
        
        {/* ================= LEFT CONTENT COLUMN ================= */}
        <article style={{ flex: '1 1 65%', minWidth: '300px' }}>
          
          {/* Title and Meta (Left Aligned) */}
          <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, #32ff98 0%, #03665e 100%)', color: '#ffffff', padding: '6px 16px', borderRadius: '50px', fontSize: '0.95rem', fontWeight: '700', marginBottom: '1.5rem', boxShadow: '0 4px 12px rgba(3, 102, 94, 0.3)' }}>{post.category}</div>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', marginBottom: '1.5rem', lineHeight: 1.3, color: 'var(--text-main)', letterSpacing: '-0.5px' }} dangerouslySetInnerHTML={{ __html: post.title }}></h1>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', color: 'var(--text-muted)', fontSize: '1rem', flexWrap: 'wrap', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img src={post.author.avatar} alt={post.author.name} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '50%' }} />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: '600', color: 'var(--text-main)', lineHeight: 1.2 }}>{post.author.name}</span>
                    <span style={{ fontSize: '0.85rem' }}>สร้างเมื่อวันที่ : {post.date}</span>
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
          {post.featuredImage && (
            <div style={{ marginBottom: '3rem', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
              <img src={post.featuredImage} alt="Featured" style={{ width: '100%', maxHeight: '500px', objectFit: 'cover', display: 'block' }} />
            </div>
          )}

          {/* WordPress Content Rendered Here */}
          <div 
            className="wp-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
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
      <RelatedPosts post={post} />

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
