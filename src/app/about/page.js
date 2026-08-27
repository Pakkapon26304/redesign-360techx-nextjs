import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HomeTimelineSection from '../(home)/components/HomeTimelineSection';


export const metadata = {
  title: 'เกี่ยวกับเรา (About Us) | 360TECHX',
  description: 'รู้จักกับ 360TECHX ผู้พัฒนาเทคโนโลยีระดับองค์กรที่ช่วยยกระดับธุรกิจขนส่ง โลจิสติกส์ และซัพพลายเชนในประเทศไทย'
};

export default function AboutUsPage() {
  return (
    <main style={{ background: 'var(--bg-main)', minHeight: '100vh', color: 'var(--text-main)' }}>
      {/* ================= HERO SECTION ================= */}
      <div className="hero-scroll-wrapper" style={{ height: '100vh', minHeight: '600px' }}>
          <header className="hero" style={{ height: '100%' }}>
          <div className="hero-bg">
              <img src="/Office-360TRUCK/S__283992105.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: '0', left: '0' }} alt="About 360TECHX Background" />
              <div className="hero-gradient-overlay" style={{ background: 'radial-gradient(circle, rgba(10,15,29,0.2) 0%, rgba(10,15,29,0.7) 100%)' }}></div>
              <div className="glow-orb orb-1" style={{ zIndex: '2' }}></div>
              <div className="glow-orb orb-2" style={{ zIndex: '2' }}></div>
          </div>
          <div className="hero-content" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'center', height: '100%', zIndex: '3' }}>
              <div style={{ maxWidth: '800px', paddingTop: '4rem' }}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', marginBottom: '1.5rem', lineHeight: 1.2, letterSpacing: '-1px', textAlign: 'center', color: 'white' }}>
                  เรื่องราวของเรา <br />
                  <span style={{ background: 'linear-gradient(135deg, #32ff98 0%, #03665e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>360TECHX</span>
                </h1>
              </div>
          </div>
          </header>
      </div>

      {/* ================= SIMPLE TEXT CONTENT ================= */}
      <section style={{ padding: '6rem 2rem 4rem 2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left' }}>
          
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1.5rem', background: 'linear-gradient(135deg, #32ff98 0%, #03665e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>เกี่ยวกับเรา (About Us) — 360TECHX</h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-main)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            360TECHX คือผู้นำนวัตกรรมแพลตฟอร์มระบบบริหารจัดการการขนส่ง (Transportation Management System: TMS) และโลจิสติกส์อัจฉริยะในประเทศไทย ที่ขับเคลื่อนด้วยเทคโนโลยีปัญญาประดิษฐ์ (AI) เพื่อยกระดับภาคธุรกิจขนส่งให้มีประสิทธิภาพ โปร่งใส และเติบโตได้อย่างยั่งยืนในยุคดิจิทัล
          </p>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-main)', lineHeight: 1.8, marginBottom: '3rem' }}>
            เรามุ่งมั่นพัฒนาโซลูชันที่เข้ามาแก้ไขปัญหาการจัดแผนงานและการดำเนินงานขนส่ง เปลี่ยนกระบวนการทำงานแบบดั้งเดิมที่ซับซ้อนให้กลายเป็นระบบอัตโนมัติที่ง่าย แม่นยำ และช่วยลดต้นทุนได้อย่างแท้จริง
          </p>

          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', background: 'linear-gradient(135deg, #32ff98 0%, #03665e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>วิสัยทัศน์ของเรา (Our Vision)</h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-main)', lineHeight: 1.8, marginBottom: '3rem' }}>
            มุ่งสู่การเป็นพันธมิตรทางเทคโนโลยีชั้นนำระดับภูมิภาค ในการขับเคลื่อนนวัตกรรมการจัดการซัพพลายเชนและโลจิสติกส์ด้วย AI เพื่อสร้างมาตรฐานใหม่ด้านความรวดเร็วและประสิทธิภาพสูงสุด
          </p>

          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', background: 'linear-gradient(135deg, #32ff98 0%, #03665e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>พันธกิจของเรา (Our Mission)</h2>
          <ul style={{ fontSize: '1.15rem', color: 'var(--text-main)', lineHeight: 1.8, marginBottom: '3rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.8rem' }}><strong>Transform:</strong> ปรับเปลี่ยนและยกระดับระบบการขนส่งของไทยด้วยซอฟต์แวร์ที่ทันสมัย</li>
            <li style={{ marginBottom: '0.8rem' }}><strong>Optimize:</strong> ลดต้นทุนและเวลาในกระบวนการทำงานด้วยระบบ AI อัจฉริยะ</li>
            <li style={{ marginBottom: '0.8rem' }}><strong>Connect:</strong> เชื่อมโยงทุกภาคส่วนในห่วงโซ่อุปทาน ตั้งแต่คนขับรถไปจนถึงระบบบริหารจัดการองค์กรขนาดใหญ่</li>
          </ul>

          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', background: 'linear-gradient(135deg, #32ff98 0%, #03665e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>สิ่งที่ทำให้ 360TECHX แตกต่าง (Core Innovation)</h2>
          <ul style={{ fontSize: '1.15rem', color: 'var(--text-main)', lineHeight: 1.8, marginBottom: '3rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.8rem' }}><strong>FASP (Full Automation of Shipment Planning):</strong> เทคโนโลยีระบบวางแผนขนส่งอัตโนมัติด้วย AI ที่ช่วยลดเวลาการจัดแผนงานจาก 3 ชั่วโมง ให้เหลือเพียง 3 นาที</li>
            <li style={{ marginBottom: '0.8rem' }}><strong>VRP (Vertical Routing Planning):</strong> ระบบวิเคราะห์สภาพจราจรเพื่อคำนวณและเลือกเส้นทางขนส่งที่มีประสิทธิภาพสูงสุด</li>
            <li style={{ marginBottom: '0.8rem' }}><strong>Seamless Integration:</strong> รองรับการเชื่อมต่อ API ร่วมกับระบบ ERP ชั้นนำ ระบบคลังสินค้า (WMS) และ GPS Tracking จากทุกแบรนด์ในไทยอย่างไร้รอยต่อ</li>
            <li style={{ marginBottom: '0.8rem' }}><strong>All-in-One Platform:</strong> รองรับธุรกิจทุกขนาด ตั้งแต่ผู้ประกอบการรายย่อย (SMEs) ผ่านระบบใช้งานฟรี ไปจนถึงระบบ 360TECHX Enterprise สำหรับองค์กรขนาดใหญ่</li>
          </ul>

          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', background: 'linear-gradient(135deg, #32ff98 0%, #03665e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>พันธมิตรและความไว้วางใจ (Partners & Success)</h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-main)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            เราได้รับความไว้วางใจจากองค์กรชั้นนำในประเทศไทย อาทิ การได้รับแต่งตั้งเป็นพันธมิตรเชิงกลยุทธ์ร่วมกับ <a href="https://www.facebook.com/360techx/" target="_blank" style={{ background: 'linear-gradient(135deg, #32ff98 0%, #03665e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block', textDecoration: 'underline' }}>SPC (Saha Pathanapibul)</a> ในการจัดการซัพพลายเชน และการช่วยขับเคลื่อนระบบขนส่งให้แก่ <a href="https://360techx.co/ข่าวสารอัพเดต/ระบบ-tms/" target="_blank" style={{ background: 'linear-gradient(135deg, #32ff98 0%, #03665e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block', textDecoration: 'underline' }}>บริษัท เฌอร่า จำกัด (มหาชน)</a> ซึ่งพิสูจน์แล้วว่าสามารถเพิ่มความแม่นยำในการส่งสินค้าตรงเวลาได้มากกว่า 95%
          </p>

        </div>
      </section>

      {/* ================= TIMELINE SECTION ================= */}
      <HomeTimelineSection />

      {/* ================= CTA ================= */}
      <section style={{ background: 'linear-gradient(rgba(10, 15, 29, 0.75), rgba(10, 15, 29, 0.75)), url("/Office-360TRUCK/S__283992105.jpg") center/cover no-repeat', padding: '8rem 2rem', textAlign: 'center', color: 'white', position: 'relative' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: '700', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.4', marginBottom: '1.5rem', letterSpacing: '-1px' }}>พร้อมยกระดับธุรกิจของคุณหรือยัง?</h2>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            ให้ทีมผู้เชี่ยวชาญของเราช่วยออกแบบระบบโลจิสติกส์ที่เหมาะกับคุณที่สุด ปรึกษาฟรี ไม่มีค่าใช้จ่าย
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn hover-lift" style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', color: 'white', padding: '1.25rem 3.5rem', fontSize: '1.15rem', borderRadius: '50px', textDecoration: 'none', fontWeight: '700', boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)', border: 'none' }}>ติดต่อผู้เชี่ยวชาญ</Link>
          </div>
      </section>

    </main>
  );
}
