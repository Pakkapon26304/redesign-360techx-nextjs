import React from 'react';
import Link from 'next/link';

export default function HeroSectionIbid() {
  return (
    <>
      {/* 1. Hero Section (TMS Enterprise Style) */}
      <div className="hero-scroll-wrapper" style={{ height: '100vh' }}>
          <header className="hero">
          <div className="hero-bg">
              {/* Using Mockup Background Image instead of solid color + floating image */}
              <img src="/Logo-interface/mockup-วางแผนการขนส่ง.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: '0', left: '0' }} alt="Hero Background" />
              {/* Adaptive Gradient Overlay matching TMS Enterprise */}
              <div className="hero-gradient-overlay"></div>
              <div className="glow-orb orb-1" style={{ zIndex: '2' }}></div>
          </div>
          <div className="hero-content" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', zIndex: '3' }}>
              <div style={{ maxWidth: '750px' }}>
                  {/* iBID Logo for Dark/Light Mode */}
                  <style dangerouslySetInnerHTML={{__html: `
                    .hero-ibid-logo .logo-light { display: none; }
                    .hero-ibid-logo .logo-dark { display: block; }
                    [data-theme="light"] .hero-ibid-logo .logo-light { display: block; }
                    [data-theme="light"] .hero-ibid-logo .logo-dark { display: none; }
                  `}} />
                  <div className="hero-ibid-logo" style={{ marginBottom: '1.5rem', display: 'flex' }}>
                      <img src="/Logo-interface/ibid_horizontal_darkmode.png" alt="iBID Logo" className="logo-dark" style={{ height: '72px', width: 'auto' }} />
                      <img src="/Logo-interface/ibid_horizontal_lightmode.png" alt="iBID Logo" className="logo-light" style={{ height: '72px', width: 'auto' }} />
                  </div>

                  {/* Title using ent-hero-title for perfect sizing */}
                  <h1 className="ent-hero-title">
                    ระบบ iBID จัดการเปิดประมูล <br />
                    <span className="text-gradient">งานโลจิสติกส์ออนไลน์</span>
                  </h1>
                  
                  {/* Summarized Detail using ent-hero-sub */}
                  <p className="hero-sub ent-hero-sub">
                    แพลตฟอร์มประมูลงานขนส่งออนไลน์ที่ช่วยยกระดับกระบวนการจัดประมูล จากเดิมที่ต้องเตรียมเอกสาร ใช้เวลานาน และไม่โปร่งใส มาเป็นระบบออนไลน์ที่จัดการได้ด้วยต้นทุนต่ำ
                  </p>

                  {/* Buttons */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '3rem' }}>
                      <Link href="https://ibid.360techx.co/Signin" target="_blank" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', borderRadius: '50px' }}>
                        สมัครใช้บริการ
                      </Link>
                  </div>
              </div>
          </div>
          </header>
      </div>

      
    </>
  );
}
