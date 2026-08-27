import React from 'react';
import Link from 'next/link';

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
    readTime: '5 นาที',
    views: '1,204',
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
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', color: 'var(--text-muted)', fontSize: '1rem', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>🗓️ {post.date}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>⏱️ อ่าน {post.readTime}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>👀 เข้าชม {post.views} ครั้ง</span>
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

          {/* CTA Section (Appended after WordPress Content) */}
          <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '16px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', margin: '4rem 0' }}>
            <h2 style={{ color: 'var(--primary)', fontSize: '1.8rem', marginBottom: '1rem', fontWeight: 700 }}>ระบบ TMS จาก 360TECHX</h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              ฟีเจอร์เด่นของ 360TECHX TMS ที่มีระบบ Dashboard ที่ใช้งานง่าย สามารถเปิดดูข้อมูลสำคัญ เช่น ต้นทุนค่าแรง ค่าน้ำมัน และรายได้ของแต่ละเส้นทางอย่างละเอียด ช่วยให้ตัดสินใจปรับปรุงแผนงาน เพิ่มประสิทธิภาพ และลดต้นทุนโดยไม่ต้องเสียเวลาคำนวณเอง
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ display: 'inline-block' }}>ติดต่อรับคำปรึกษาฟรี</Link>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: '3rem 0' }} />

          {/* 1. Tags & Social Share */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>Tags:</span>
              {post.tags.map(tag => (
                <span key={tag} style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 14px', borderRadius: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>#{tag}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <span style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>Share:</span>
              <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1877F2', color: '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>f</button>
              <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1DA1F2', color: '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>X</button>
              <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#0A66C2', color: '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>in</button>
              <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#00B900', color: '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold' }}>LINE</button>
            </div>
          </div>

          {/* 2. Writer Info */}
          <div className="glass-card" style={{ display: 'flex', gap: '1.5rem', padding: '2rem', borderRadius: '16px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', marginBottom: '4rem', alignItems: 'flex-start' }}>
            <img src={post.author.avatar} alt={post.author.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%', border: '2px solid var(--primary)' }} />
            <div>
              <h3 style={{ color: 'var(--text-main)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>{post.author.name}</h3>
              <p style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{post.author.description}</p>
              <Link href="#" style={{ color: 'var(--primary)', fontSize: '0.9rem', textDecoration: 'underline' }}>บทความทั้งหมดของผู้เขียน</Link>
            </div>
          </div>

          {/* 3. Related Posts */}
          <div>
            <h3 style={{ color: 'var(--text-main)', fontSize: '1.5rem', marginBottom: '1.5rem', borderLeft: '4px solid var(--primary)', paddingLeft: '1rem' }}>บทความที่เกี่ยวข้อง (Related Posts)</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div className="glass-card hover-lift" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ height: '160px', background: 'url(/Logo-interface/CONVERGENT_PROCESSES.jpeg) center/cover' }}></div>
                <div style={{ padding: '1.5rem' }}>
                  <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem', marginBottom: '1rem', lineHeight: 1.4 }}>ทำความรู้จักระบบ WMS คลังสินค้าอัจฉริยะ</h4>
                  <Link href="#" style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: 600 }}>อ่านต่อ &rarr;</Link>
                </div>
              </div>
              <div className="glass-card hover-lift" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ height: '160px', background: 'url(/Office-360TRUCK/310931835_786540258976223_1593692212990799741_n.jpeg) center/cover' }}></div>
                <div style={{ padding: '1.5rem' }}>
                  <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem', marginBottom: '1rem', lineHeight: 1.4 }}>เทรนด์ Logistics 2026 ที่ต้องจับตา</h4>
                  <Link href="#" style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: 600 }}>อ่านต่อ &rarr;</Link>
                </div>
              </div>
            </div>
          </div>

        </article>

        {/* ================= RIGHT SIDEBAR ================= */}
        <aside style={{ flex: '1 1 30%', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Recent / Popular Posts (Moved to Top, 5 Items) */}
          <div className="glass-card" style={{ padding: '2rem', borderRadius: '16px', background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
            <h3 style={{ color: 'var(--text-main)', fontSize: '1.4rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>🔥 บทความยอดฮิต</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <img src="/Office-360TRUCK/310931835_786540258976223_1593692212990799741_n.jpeg" alt="thumb" style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover' }} />
                <div>
                  <h4 style={{ color: 'var(--text-main)', fontSize: '1rem', marginBottom: '0.2rem', lineHeight: 1.3 }}><Link href="#">เคล็ดลับลดต้นทุนขนส่งปี 2026</Link></h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>10 สิงหาคม 2026</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <img src="/Logo-interface/CONVERGENT_PROCESSES.jpeg" alt="thumb" style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover' }} />
                <div>
                  <h4 style={{ color: 'var(--text-main)', fontSize: '1rem', marginBottom: '0.2rem', lineHeight: 1.3 }}><Link href="#">เจาะลึกระบบ ERP สำหรับขนส่ง</Link></h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>5 สิงหาคม 2026</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <img src="/Logo-interface/360techx_logo_horizontal_nobg_white.png" alt="thumb" style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'contain', background: '#000' }} />
                <div>
                  <h4 style={{ color: 'var(--text-main)', fontSize: '1rem', marginBottom: '0.2rem', lineHeight: 1.3 }}><Link href="#">สัมภาษณ์พิเศษ CEO 360TRUCK</Link></h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>1 สิงหาคม 2026</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <img src="/Logo-interface/CONVERGENT_PROCESSES.jpeg" alt="thumb" style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover', filter: 'hue-rotate(90deg)' }} />
                <div>
                  <h4 style={{ color: 'var(--text-main)', fontSize: '1rem', marginBottom: '0.2rem', lineHeight: 1.3 }}><Link href="#">วิธีคำนวณกำไรต่อรอบให้แม่นยำ</Link></h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>28 กรกฎาคม 2026</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <img src="/Office-360TRUCK/310931835_786540258976223_1593692212990799741_n.jpeg" alt="thumb" style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover', filter: 'grayscale(50%)' }} />
                <div>
                  <h4 style={{ color: 'var(--text-main)', fontSize: '1rem', marginBottom: '0.2rem', lineHeight: 1.3 }}><Link href="#">5 ปัญหาคลาสสิกของธุรกิจขนส่ง</Link></h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>15 กรกฎาคม 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="glass-card" style={{ padding: '2rem', borderRadius: '16px', background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
            <h3 style={{ color: 'var(--text-main)', fontSize: '1.4rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>หมวดหมู่ (Categories)</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                <Link href="#" style={{ color: 'var(--text-muted)' }}>Logistics Strategy</Link>
                <span style={{ background: 'rgba(50,255,152,0.1)', color: 'var(--primary)', padding: '2px 8px', borderRadius: '50px', fontSize: '0.8rem' }}>12</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                <Link href="#" style={{ color: 'var(--text-muted)' }}>TMS Technology</Link>
                <span style={{ background: 'rgba(50,255,152,0.1)', color: 'var(--primary)', padding: '2px 8px', borderRadius: '50px', fontSize: '0.8rem' }}>8</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                <Link href="#" style={{ color: 'var(--text-muted)' }}>Supply Chain</Link>
                <span style={{ background: 'rgba(50,255,152,0.1)', color: 'var(--primary)', padding: '2px 8px', borderRadius: '50px', fontSize: '0.8rem' }}>15</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                <Link href="#" style={{ color: 'var(--text-muted)' }}>Success Stories</Link>
                <span style={{ background: 'rgba(50,255,152,0.1)', color: 'var(--primary)', padding: '2px 8px', borderRadius: '50px', fontSize: '0.8rem' }}>5</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="glass-card" style={{ padding: '2rem', borderRadius: '16px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--text-main)', fontSize: '1.4rem', marginBottom: '0.5rem' }}>📬 รับข่าวสาร (Newsletter)</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>ไม่พลาดทุกเทรนด์และเคล็ดลับจากผู้เชี่ยวชาญ สมัครรับอีเมลได้เลย!</p>
            <input type="email" placeholder="กรอกอีเมลของคุณ..." style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-main)', color: 'var(--text-main)', marginBottom: '1rem' }} />
            <button className="btn btn-primary" style={{ width: '100%' }}>สมัครรับข่าวสาร</button>
          </div>

        </aside>
      </div>

      {/* สไตล์สำหรับจัดการ HTML ที่ได้มาจาก WordPress (wp-content) */}
      <style dangerouslySetInnerHTML={{__html: `
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
