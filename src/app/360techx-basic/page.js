import React from 'react';
import Link from 'next/link';
import Redesign1SectionBasic from './components/Redesign1SectionBasic';
import StatsSummarySectionBasic from './components/StatsSummarySectionBasic';
import TestimonialSectionBasic from './components/TestimonialSectionBasic';
import FaqSectionBasic from './components/FaqSectionBasic';
import HomePricingSectionBasic from './components/HomePricingSectionBasic';
import HomeCustomerLogosSectionBasic from './components/HomeCustomerLogosSectionBasic';

export const metadata = {
  title: '360TECHX Basic | ระบบจัดการขนส่งสำหรับ SME',
  description: 'เริ่มต้นจัดการงานขนส่งอย่างเป็นระบบด้วย 360TECHX Basic เหมาะสำหรับธุรกิจ SME จัดการง่าย จ่ายงานสะดวก ผ่าน 360TRUCKER App',
  keywords: 'TMS SME, 360TECHX Basic, ระบบขนส่งฟรี, แอปจ่ายงานคนขับ',
  alternates: {
    canonical: 'https://www.360techx.co/360techx-basic',
  },
  openGraph: {
    title: '360TECHX Basic | ระบบจัดการขนส่งสำหรับ SME',
    description: 'จัดการงานขนส่งสำหรับ SME จัดการง่าย จ่ายงานสะดวก',
    url: 'https://www.360techx.co/360techx-basic',
    siteName: '360TECHX',
    locale: 'th_TH',
    type: 'website',
  }
};

export default function BasicPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "360TECHX Basic",
      "operatingSystem": "Web Application, Cloud",
      "applicationCategory": "BusinessApplication",
      "description": "ระบบ Transport Management System (TMS) สำหรับ SME เริ่มต้นใช้งานฟรี",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "THB"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.360techx.co/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "360TECHX Basic",
          "item": "https://www.360techx.co/360techx-basic"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "TMS ของ 360TECHX แตกต่างจาก TMS ในตลาดอย่างไรบ้าง ทำไมถึงควรใช้",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "เราได้นำประสบการณ์การบริหารการขนส่งบน Platform 360TRUCK มาออกแบบระบบ TMS ของ 360TECHX โดยมีจุดเด่น คือ รองรับการใช้งานร่วมกับ 360TRUCK, ใช้งานง่าย และสามารถใช้งาน 360TRUCKER แอปพลิเคชัน สำหรับคนขับรถใช้รายงานสถานะขนส่งได้ไม่จำกัด"
          }
        },
        {
          "@type": "Question",
          "name": "การใช้งาน TECHX TMS จำเป็นต้องมีจำนวนการขนส่งขั้นต่ำ หรือถ้าขนของไม่เต็มคันรถ สามารถใช้งานได้หรือไม่",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "สามารถใช้ได้ทั้งแบบขนเต็มคัน และขนไม่เต็มคันรถ โดยสามารถเริ่มใช้งานได้ฟรีโดยไม่มีการใช้งานขั้นต่ำ"
          }
        },
        {
          "@type": "Question",
          "name": "TECHX TMS สามารถจัดการงานขนส่งได้สูงสุดกี่งาน และในกรณีที่มีการขนส่งเป็นประจำ สามารถสร้างงานขนส่งใหม่จากประวัติการวิ่งงานผ่านระบบ ได้หรือไม่",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "สามารถใช้งานขนส่งได้สูงสุด 100 งานต่อเดือนได้ฟรี โดยสามารถซื้อจำนวนงานเพิ่มเติมได้ และสามารถบันทึกงานประจำและสร้างงานจากงานประจำได้"
          }
        },
        {
          "@type": "Question",
          "name": "อยากใช้งาน 360TECHX TMS จะต้องทำอย่างไรบ้าง",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "สามารถทดลองใช้งานได้ฟรี ผ่านทาง https://tms.360techx.co/signup"
          }
        }
      ]
    }
  ];

  return (
    <main style={{ background: 'var(--bg-main)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style dangerouslySetInnerHTML={{__html: `
        .basic-hero-overlay {
            background: linear-gradient(90deg, rgba(10,15,29,0.95) 0%, rgba(10,15,29,0.7) 50%, rgba(10,15,29,0.1) 100%);
        }
        [data-theme="light"] .basic-hero-overlay {
            background: linear-gradient(90deg, rgba(248,250,252,0.95) 0%, rgba(248,250,252,0.8) 50%, rgba(248,250,252,0.2) 100%);
        }
        .cta-section-basic {
            color: white;
        }
        .cta-overlay {
            background: rgba(10, 15, 29, 0.75);
        }
        .breakout-right {
            padding-left: max(2rem, calc((100vw - 1200px) / 2));
            padding-right: 2rem;
            display: grid;
            grid-template-columns: 1fr 1.3fr;
            gap: 4rem;
            align-items: center;
        }
        .breakout-left {
            padding-left: 2rem;
            padding-right: max(2rem, calc((100vw - 1200px) / 2));
            display: grid;
            grid-template-columns: 1.3fr 1fr;
            gap: 4rem;
            align-items: center;
        }
        @media(max-width: 1024px) {
            .breakout-right, .breakout-left {
                grid-template-columns: 1fr;
                padding-left: 2rem;
                padding-right: 2rem;
                gap: 2.5rem;
            }
            .text-content { order: 2; }
            .image-content { order: 1; }
        }

        .basic-interface-img {
            transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
            transform-style: preserve-3d;
        }
        .breakout-right .basic-interface-img {
            transform: rotateY(-12deg) rotateX(5deg);
        }
        .breakout-left .basic-interface-img {
            transform: rotateY(12deg) rotateX(5deg);
        }
        .basic-interface-img:hover {
            transform: rotateY(0deg) rotateX(0deg) translateY(-5px) scale(1.03) !important;
        }
        @media(max-width: 1024px) {
            .breakout-right .basic-interface-img,
            .breakout-left .basic-interface-img {
                transform: rotateY(0deg) rotateX(0deg) !important;
            }
        }

      `}} />
      
      {/* Hero Section */}
      <div className="hero-scroll-wrapper" style={{ height: '90vh' }}>
          <header className="hero">
          <div className="hero-bg">
              <img src="/tms-picture/sme-transportation-2.jpeg" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center right', position: 'absolute', top: '0', left: '0' }} alt="Hero Background" />
              <div className="hero-gradient-overlay basic-hero-overlay" style={{}}></div>
              <div className="glow-orb orb-1" style={{ zIndex: '2' }}></div>
          </div>
          <div className="hero-content" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', zIndex: '3' }}>
              <div style={{ maxWidth: '750px' }}>
                  <img src="/Logo-interface/360techx-basic.png" className="dark-logo" alt="360TECHX Basic" style={{ height: '60px', marginBottom: '2rem' }} />
                  <img src="/Logo-interface/360techx-basic-black.png" className="light-logo" alt="360TECHX Basic" style={{ height: '60px', marginBottom: '2rem' }} />
                  
                  <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
                      จัดการงานขนส่งอย่างมืออาชีพ <br/><span className="text-gradient">สำหรับธุรกิจ SME</span>
                  </h1>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', lineHeight: '1.6', marginBottom: '3rem' }}>
                      จัดการงานขนส่งสูงสุด 100 งาน/เดือน ไม่จำกัดจำนวนรถและคนขับ พร้อมระบบจ่ายงานผ่าน 360TRUCKER App ให้คุณเริ่มต้นใช้งานได้ฟรีทันที
                  </p>
                  
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <a href="#" className="btn btn-primary hover-lift" style={{ padding: '1rem 3rem', fontSize: '1.1rem', borderRadius: '50px' }}>เริ่มต้นใช้งานฟรี</a>
                  </div>
              </div>
          </div>
          </header>
      </div>

      {/* Core Features / Bento Grid */}
      <section className="reveal" style={{ padding: '8rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-header text-center" style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src="/Logo-interface/360techx-basic.png" className="dark-logo" alt="360TECHX Basic" style={{ height: '50px', marginBottom: '1.5rem' }} />
              <img src="/Logo-interface/360techx-basic-black.png" className="light-logo" alt="360TECHX Basic" style={{ height: '50px', marginBottom: '1.5rem' }} />
              <h2 style={{ fontSize: '2.8rem', lineHeight: '1.3', letterSpacing: '-1px', marginBottom: '1.5rem' }}>ระบบสำหรับ<span className="text-gradient">บริหารจัดการงานขนส่ง</span></h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '900px', margin: '0 auto', lineHeight: '1.6' }}>ระบบ Transportation Management System หรือ TMS ระบบที่ช่วยบริหารและจัดการการขนส่งพื้นฐานที่ช่วยให้มองเห็นภาพรวมธุรกิจโดยรวมของงานขนส่งทั้งหมดไว้ในที่เดียว</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', gap: '2rem' }}>
              {/* Service 1 */}
              <div className="glass-card hover-lift" style={{ padding: '3rem', borderRadius: '32px' }}>
                  <div style={{ background: 'rgba(6, 182, 212, 0.1)', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>จัดการงานขนส่งทั้งหมดไว้ในระบบเดียว</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1.05rem' }}><a href="https://www.360techx.co/tms/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>ระบบ TMS</a> สามารถเช็คสถานะงานเป็นอย่างไร รายจ่ายกี่บาท รายได้เท่าไหร่ รู้ได้ทันทีทำงานร่วมกันในที่เดียวทั้งเจ้าของงาน ลูกค้า รถ และคนขับ</p>
              </div>
              
              {/* Service 2 */}
              <div className="glass-card hover-lift" style={{ padding: '3rem', borderRadius: '32px' }}>
                  <div style={{ background: 'rgba(6, 182, 212, 0.1)', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>ระบบติดตามงาน และช่วยแจ้งเตือนอัตโนมัติ</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1.05rem' }}>อัพเดตสถานะงานเมื่อคนขับเข้าใกล้จุด รับ/ส่งสินค้า เมื่อรถมีแนวโน้มรับ-ส่งสินค้า ช้ากว่ากำหนด</p>
              </div>

              {/* Service 3 */}
              <div className="glass-card hover-lift" style={{ padding: '3rem', borderRadius: '32px' }}>
                  <div style={{ background: 'rgba(6, 182, 212, 0.1)', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>ตรวจเช็กค่าขนส่ง ขาเก็บ/ขาจ่าย ได้ทั้งภาพรวมและรายเที่ยว</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1.05rem' }}>ระบบตะกร้าบิล บันทึกบิล และ กระจายค่าใช้จ่ายได้สะดวก คำนวณค่าเที่ยว/คนรถ ให้อัตโนมัติไม่ขาดตกบกพร่อง จัดการจ่ายเงินเดือน ค่าเที่ยวคนขับอย่างเป็นระบบ ระบบ TMS ที่โปร่งใส ใส่ใจความเป็นส่วนตัวและมีความปลอดภัยสูง</p>
              </div>

              {/* Service 4 */}
              <div className="glass-card hover-lift" style={{ padding: '3rem', borderRadius: '32px' }}>
                  <div style={{ background: 'rgba(6, 182, 212, 0.1)', width: '60px', height: '60px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700' }}>เหมาะกับธุรกิจ SME ขนส่ง รายเล็กและรายย่อย</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1.05rem' }}>รวมถึงธุรกิจที่กำลังตั้งไข่ ที่มีเครือข่ายเจ้าของสินค้าเป็นจำนวนมาก เป็นตัวช่วยที่ให้คุณทำงานผ่านระบบที่ไหนก็ได้ ตำแหน่งไหน ก็สามารถทำงานร่วมกันได้ในระบบเดียว</p>
              </div>
          </div>
      </section>

      {/* Split Features Section 1 */}
      <section className="breakout-right reveal" style={{ marginBottom: '6rem', marginTop: '4rem' }}>
          <div className="text-content">
              <h2 style={{ fontSize: '2.5rem', lineHeight: '1.25', marginBottom: '2.5rem', letterSpacing: '-0.5px' }}>สร้างงานขนส่งได้เร็ว <br/><span className="text-gradient">จ่ายงานง่าย จบงานไว</span></h2>
              <ul style={{ listStyle: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ background: 'rgba(6, 182, 212, 0.1)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: 'var(--primary)', flexShrink: '0' }}>
                          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.15rem' }}>บันทึกรายชื่อลูกค้า สถานที่รับส่งให้อัตโนมัติ</span>
                  </li>
                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ background: 'rgba(6, 182, 212, 0.1)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: 'var(--primary)', flexShrink: '0' }}>
                          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.15rem' }}>เห็นราคาจากตารางงานขนส่งได้ทันที</span>
                  </li>
                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ background: 'rgba(6, 182, 212, 0.1)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: 'var(--primary)', flexShrink: '0' }}>
                          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.15rem' }}>สะดวก รวดเร็ว จบงานไว ไม่ซับซ้อน</span>
                  </li>
              </ul>
          </div>
          <div className="image-content">
              <img src="/interface-page-basic/createbooking-basic.png" alt="สร้างงานขนส่งได้เร็ว" className="basic-interface-img" style={{ width: '100%', display: 'block', objectFit: 'cover', borderRadius: '16px' }} />
          </div>
      </section>

      {/* Split Features Section 2 */}
      <section className="breakout-left reveal" style={{ marginBottom: '6rem' }}>
          <div className="image-content">
              <img src="/interface-page-basic/update-status-basic.png" alt="Check-in อัตโนมัติ" className="basic-interface-img" style={{ width: '100%', display: 'block', objectFit: 'cover', borderRadius: '16px' }} />
          </div>
          <div className="text-content">
              <h2 style={{ fontSize: '2.5rem', lineHeight: '1.25', marginBottom: '2.5rem', letterSpacing: '-0.5px' }}>ตัวช่วย <span className="text-gradient">Check-in อัตโนมัติ</span></h2>
              <ul style={{ listStyle: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ background: 'rgba(6, 182, 212, 0.1)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: 'var(--primary)', flexShrink: '0' }}>
                          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.15rem' }}>นั่งเฉยๆ ก็รู้ความเคลื่อนไหว</span>
                  </li>
                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ background: 'rgba(6, 182, 212, 0.1)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: 'var(--primary)', flexShrink: '0' }}>
                          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.15rem' }}>อัปเดตสถานะงานขนส่งอัตโนมัติ</span>
                  </li>
                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ background: 'rgba(6, 182, 212, 0.1)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: 'var(--primary)', flexShrink: '0' }}>
                          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.15rem' }}>เมื่อคนขับเข้าใกล้จุดรับส่ง ระบบจะบันทึกเวลาและพิกัดให้อัตโนมัติ หมดปัญหาการลืมอัปเดตงาน</span>
                  </li>
              </ul>
          </div>
      </section>

      {/* Split Features Section 3 */}
      <section className="breakout-right reveal" style={{ marginBottom: '8rem' }}>
          <div className="text-content">
              <h2 style={{ fontSize: '2.5rem', lineHeight: '1.25', marginBottom: '2.5rem', letterSpacing: '-0.5px' }}>แชร์ลิงก์และ<span className="text-gradient">ติดตามสถานะงานขนส่งได้เอง</span></h2>
              <ul style={{ listStyle: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ background: 'rgba(6, 182, 212, 0.1)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: 'var(--primary)', flexShrink: '0' }}>
                          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.15rem' }}>ลูกค้ารู้สถานะได้เองในลิงก์ของระบบ</span>
                  </li>
                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ background: 'rgba(6, 182, 212, 0.1)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: 'var(--primary)', flexShrink: '0' }}>
                          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.15rem' }}>ลดการโทรถามพนักงานจัดส่งโดยตรง</span>
                  </li>
                  <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ background: 'rgba(6, 182, 212, 0.1)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: 'var(--primary)', flexShrink: '0' }}>
                          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1.15rem' }}>ประหยัดเวลาทั้งฝั่งลูกค้าและทีมงาน พร้อมยกระดับบริการขนส่งให้ดูเป็นมืออาชีพยิ่งขึ้น</span>
                  </li>
              </ul>
          </div>
          <div className="image-content">
              <img src="/interface-page-basic/share-booking-basic.png" alt="ติดตามสถานะงานขนส่ง" className="basic-interface-img" style={{ width: '100%', display: 'block', objectFit: 'cover', borderRadius: '16px' }} />
          </div>
      </section>

            <Redesign1SectionBasic />
      {/* <StatsSummarySectionBasic /> */}
      <HomePricingSectionBasic />
      <HomeCustomerLogosSectionBasic />
      {/* <TestimonialSectionBasic /> */}
      {/* <FaqSectionBasic /> */}

      {/* CTA */}
      <section className="cta-section-basic" style={{ padding: '8rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
              <img src="/tms-picture/sme-transportation.jpeg" alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="cta-overlay" style={{ position: 'absolute', inset: 0 }}></div>
          </div>
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '2.8rem', fontWeight: '700', marginBottom: '2rem', color: 'white' }}>พร้อม<span className="text-gradient">ยกระดับธุรกิจขนส่ง</span>ของคุณหรือยัง?</h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto', color: 'white' }}>
                  สมัครใช้งาน 360TECHX Basic วันนี้ ฟรี! ไม่มีค่าใช้จ่ายแอบแฝง
              </p>
              <a href="#" className="btn hover-lift" style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', color: 'white', padding: '1.25rem 3.5rem', fontSize: '1.15rem', borderRadius: '50px', textDecoration: 'none', fontWeight: '700', border: 'none', display: 'inline-block' }}>สมัครใช้งานฟรี</a>
          </div>
      </section>
    </main>
  );
}
