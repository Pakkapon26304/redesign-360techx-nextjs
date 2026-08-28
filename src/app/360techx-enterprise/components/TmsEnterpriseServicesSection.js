import React from 'react';

export default function TmsEnterpriseServicesSection() {
  return (
    <>
      {/* Enterprise Services Section */}
    <section className="reveal" style={{ padding: '4rem 2rem 8rem 2rem', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.8rem', lineHeight: '1.2', letterSpacing: '-1px' }}>360TECHX Enterprise <br /><span className="text-gradient">ให้บริการด้านใดบ้าง</span></h2>
        </div>

        <div className="services-bento">
            
            {/* Card 1: CONSULTATION (Wide) */}
            <div className="glass-card hover-lift bento-wide" style={{ display: 'flex', padding: '0', overflow: 'hidden', borderRadius: '32px', position: 'relative' }}>
                <div className="bento-content">
                    <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '0.5rem', letterSpacing: '-0.5px' }}><span className="text-gradient">CONSULTATION</span></h3>
                    <p style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '2rem', fontWeight: '500' }}>บริการให้คำปรึกษาสำหรับระบบจัดการงานขนส่ง</p>
                    <ul style={{ listStyle: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="bento-check-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <span style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1rem' }}>บริการให้คำปรึกษาเรื่องการประยุกต์การใช้ TMS สำหรับองค์กรขนาดใหญ่</span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="bento-check-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <span style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1rem' }}>บริการวางสถาปัตยกรรมระบบและพิมพ์เขียวธุรกิจ (Business Blueprint) สำหรับระบบขนส่งสินค้า</span>
                        </li>
                    </ul>
                </div>
                <div className="bento-image-wrap">
                    <img src="/interface-page-enterprise/service-consultation.jpg" alt="Consultation Mockup" />
                </div>
            </div>

            {/* Card 2: CUSTOMIZATION (Square) */}
            <div className="glass-card hover-lift bento-square" style={{ display: 'flex', padding: '0', overflow: 'hidden', borderRadius: '32px', position: 'relative' }}>
                <div className="bento-content">
                    <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '0.5rem', letterSpacing: '-0.5px' }}><span className="text-gradient">CUSTOMIZATION</span></h3>
                    <p style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '2rem', fontWeight: '500' }}>บริการปรับแต่งระบบให้เข้าองค์กร</p>
                    <ul style={{ listStyle: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="bento-check-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <span style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1rem' }}>บริการปรับแต่ง (Customization) ระบบ 360TECHX Enterprise เพื่อปรับให้เข้ากับการทำงาน</span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="bento-check-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <span style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1rem' }}>บริการเชื่อมต่อระบบกับ ERP, WMS และระบบที่เกี่ยวข้อง</span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="bento-check-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <span style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1rem' }}>บริการบริหารโครงการให้แล้วเสร็จได้ตามแผนงาน</span>
                        </li>
                    </ul>
                </div>
                <div className="bento-image-wrap">
                    <img src="/interface-page-enterprise/service-customization.jpg" alt="Customization Mockup" />
                </div>
            </div>

            {/* Card 3: SUPPORT (Square) */}
            <div className="glass-card hover-lift bento-square" style={{ display: 'flex', padding: '0', overflow: 'hidden', borderRadius: '32px', position: 'relative' }}>
                <div className="bento-content">
                    <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '0.5rem', letterSpacing: '-0.5px' }}><span className="text-gradient">SUPPORT</span></h3>
                    <p style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '2rem', fontWeight: '500' }}>บริการดูแลและสนับสนุนการใช้งานระบบ</p>
                    <ul style={{ listStyle: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="bento-check-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <span style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1rem' }}>บริการบริหารการทำงานของระบบ ด้วยผู้เชี่ยวชาญเฉพาะทาง</span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="bento-check-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <span style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1rem' }}>สนับสนุนการใช้งาน 360TECHX TMS (Support Service) ให้กับธุรกิจ</span>
                        </li>
                    </ul>
                </div>
                <div className="bento-image-wrap">
                    <img src="/interface-page-enterprise/service-support.jpg" alt="Support Mockup" />
                </div>
            </div>

            {/* Card 4: SYSTEM INTEGRATION (Wide) */}
            <div className="glass-card hover-lift bento-wide" style={{ display: 'flex', padding: '0', overflow: 'hidden', borderRadius: '32px', position: 'relative' }}>
                <div className="bento-content">
                    <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '0.5rem', letterSpacing: '-0.5px' }}><span className="text-gradient">SYSTEM INTEGRATION</span></h3>
                    <p style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '2rem', fontWeight: '500' }}>บริการอีกมากมายของพันธมิตรธุรกิจ 360TECHX</p>
                    <ul style={{ listStyle: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="bento-check-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <span style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1rem' }}>บริการปรับแต่ง ERP ชั้นนำเช่น SAP, MS Dynamic AX กับบริษัทที่ปรึกษาระดับประเทศ</span>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="bento-check-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <span style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1rem' }}>บริการให้คำแนะนำ และติดตั้งระบบบน Cloud ชั้นนำ เช่น AWS, Google</span>
                        </li>
                    </ul>
                </div>
                <div className="bento-image-wrap">
                    <img src="/interface-page-enterprise/service-system-integration.jpeg" alt="Integration Mockup" />
                </div>
            </div>

        </div>
    </section>

        </>
  );
}
