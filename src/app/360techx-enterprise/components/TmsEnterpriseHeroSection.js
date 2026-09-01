import React from 'react';

export default function TmsEnterpriseHeroSection() {
  return (
    <>
      {/* Hero Section TMS Enterprise */}
    <div className="hero-scroll-wrapper" style={{ height: '100vh' }}>
        <header className="hero">
        <div className="hero-bg">
            <img src="/Logo-interface/CONVERGENT_PROCESSES.jpeg" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: '0', left: '0' }} alt="Hero Background" />
            {/* Adaptive Gradient Overlay */}
            <div className="hero-gradient-overlay"></div>
            <div className="glow-orb orb-1" style={{ zIndex: '2' }}></div>
        </div>
        <div className="hero-content" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', zIndex: '3' }}>
            <div style={{ maxWidth: '750px' }}>
                {/* Logo */}
                <img src="/Logo-interface/360techx-enterprise.png" alt="360TechX Enterprise" className="dark-logo" style={{ height: '60px', marginBottom: '1rem' }} />
                <img src="/Logo-interface/360techx-enterprise-black.png" alt="360TechX Enterprise" className="light-logo" style={{ height: '60px', marginBottom: '1rem' }} />
                
                {/* Title */}
                <h2 className="ent-hero-title">ระบบ TMS วางแผนและจัดการระบบขนส่ง <span className="text-gradient">สำหรับองค์กรขนาดใหญ่</span></h2>
                
                {/* Summarized Detail */}
                <p className="hero-sub ent-hero-sub">
                    บริหารจัดการงานขนส่งแบบครบวงจร เพิ่มประสิทธิภาพและลดต้นทุนด้วยการวางแผนเส้นทางอัจฉริยะ ติดตามสถานะ Real-time พร้อมสรุปผลวิเคราะห์ข้อมูลเชิงลึกแบบอัตโนมัติ
                </p>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '3rem' }}>
                    <a href="/contact" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', borderRadius: '50px' }}>ปรึกษาการใช้งาน</a>
                </div>
            </div>

            {/* Enable Cards (Full width of container) */}
            <div className="enable-cards-grid">
                <div className="enable-card glass-card hover-lift">
                    {/* Monitor/System Icon */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                    <span>บริหารจัดการข้อมูล งานขนส่งครบ จบในระบบเดียว</span>
                </div>
                <div className="enable-card glass-card hover-lift">
                    {/* Globe Icon */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                    <span>รองรับกระบวนการทำงานระบบ ERP ชั้นนำระดับโลก</span>
                </div>
                <div className="enable-card glass-card hover-lift">
                    {/* Sliders Icon */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
                    <span>ปรับแต่งระบบให้เหมาะสมกับธุรกิจขนาดใหญ่</span>
                </div>
                <div className="enable-card glass-card hover-lift">
                    {/* Zap Icon */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                    <span>ไม่พลาดฟีเจอร์สำคัญ และบริการใหม่ๆ</span>
                </div>
                <div className="enable-card glass-card hover-lift">
                    {/* Link Icon */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                    <span>เชื่อมต่อการขนส่งกับโลกภายนอกไร้รอยต่อ</span>
                </div>
            </div>
        </div>
        </header>
    </div>

    
    </>
  );
}
