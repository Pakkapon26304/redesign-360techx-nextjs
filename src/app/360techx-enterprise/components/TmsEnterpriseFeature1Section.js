import React from 'react';

export default function TmsEnterpriseFeature1Section() {
  return (
    <>
      {/* Standard Enterprise Section TMS Enterprise */}
    <section className="split-section reveal" style={{ padding: '4rem 2rem 4rem 2rem', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        {/* Light decorative background */}
        <div style={{ position: 'absolute', top: '0', right: '-5%', width: '50%', height: '100%', background: 'radial-gradient(circle, var(--primary) 0%, transparent 60%)', opacity: '0.05', zIndex: '-1', filter: 'blur(60px)', pointerEvents: 'none' }}></div>

        <div className="split-container glass-card hover-lift" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'stretch', borderRadius: '32px', overflow: 'hidden', padding: '0', position: 'relative' }}>
            
            {/* Decorative Line-X Background */}
            <img src="/Logo-interface/Line-X.png" alt="" style={{ position: 'absolute', bottom: '0', left: '0', width: '80%', opacity: '0.15', zIndex: '0', pointerEvents: 'none', transform: 'translate(-30%, 30%)' }} />

            {/* Left Header */}
            <div className="split-header" style={{ padding: '4rem 4rem 0 4rem', position: 'relative', zIndex: '1' }}>
                <h2 style={{ fontSize: '2.8rem', lineHeight: '1.15', marginBottom: '1.5rem', letterSpacing: '-1px' }}><span className="text-gradient">CENTRALIZED ECOSYSTEM</span></h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginBottom: '2rem', lineHeight: '1.6' }}>บริหารจัดการการขนส่งของคุณแบบออนไลน์ 100% ตอบโจทย์การทำงานที่ซับซ้อนของธุรกิจขนาดใหญ่ได้อย่างสมบูรณ์แบบ</p>
            </div>
            
            {/* Left Grid */}
            <div className="split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem 2rem', padding: '0 4rem 4rem 4rem', position: 'relative', zIndex: '1' }}>
                
                {/* Point 1 */}
                <div className="minimal-card">
                    <div className="minimal-icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}><strong style={{ color: 'var(--text-main)', fontSize: '1.05rem', display: 'block', marginBottom: '0.25rem' }}>บริหารจัดการ Online 100%</strong>ออกแบบกระบวนการทำงานเป็นมาตรฐาน จัดการข้อมูลและงานขนส่งครบจบในระบบเดียว</p>
                </div>

                {/* Point 2 */}
                <div className="minimal-card">
                    <div className="minimal-icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}><strong style={{ color: 'var(--text-main)', fontSize: '1.05rem', display: 'block', marginBottom: '0.25rem' }}>เชื่อมต่อโลกภายนอก</strong>รองรับการทำงานร่วมกับระบบ ERP ชั้นนำระดับโลก พร้อมเชื่อมต่อเครือข่ายธุรกิจของคุณ</p>
                </div>

                {/* Point 3 */}
                <div className="minimal-card">
                    <div className="minimal-icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}><strong style={{ color: 'var(--text-main)', fontSize: '1.05rem', display: 'block', marginBottom: '0.25rem' }}>ปรับแต่งได้ตามสเกลธุรกิจ</strong>ระบบมีความยืดหยุ่น รองรับ Customization เพื่อให้เหมาะสมกับกระบวนการของธุรกิจขนาดใหญ่</p>
                </div>

                {/* Point 4 */}
                <div className="minimal-card">
                    <div className="minimal-icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path><polyline points="8 12 12 8 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}><strong style={{ color: 'var(--text-main)', fontSize: '1.05rem', display: 'block', marginBottom: '0.25rem' }}>วิเคราะห์และอัปเดตบน Cloud</strong>วิเคราะห์ข้อมูลเพื่อปรับปรุง Supply Chain พร้อมรับฟีเจอร์ใหม่เสมอผ่านระบบ Cloud</p>
                </div>

            </div>

            {/* Right Content (Mockup Image) */}
            <div className="split-image" style={{ position: 'relative', height: '100%', minHeight: '400px' }}>
                <img src="/Logo-interface/CENTRALIZED_ECOSYSTEM.jpeg" alt="Enterprise Feature" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0', display: 'block' }} />
            </div>

        </div>
    </section>

    
    </>
  );
}
