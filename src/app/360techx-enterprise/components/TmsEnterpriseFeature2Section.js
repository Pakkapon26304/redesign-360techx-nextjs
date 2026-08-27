import React from 'react';

export default function TmsEnterpriseFeature2Section() {
  return (
    <>
      {/* Section 2: CONVERGENT PROCESSES */}
    <section className="split-section reveal" style={{ padding: '0 2rem 4rem 2rem', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        {/* Light decorative background */}
        <div style={{ position: 'absolute', top: '0', left: '-5%', width: '50%', height: '100%', background: 'radial-gradient(circle, var(--primary) 0%, transparent 60%)', opacity: '0.05', zIndex: '-1', filter: 'blur(60px)', pointerEvents: 'none' }}></div>

        <div className="split-container reverse glass-card hover-lift" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'stretch', borderRadius: '32px', overflow: 'hidden', padding: '0', position: 'relative' }}>
            
            {/* Decorative Line-X Background */}
            <img src="/Logo-interface/Line-X.png" alt="" style={{ position: 'absolute', bottom: '0', right: '0', width: '80%', opacity: '0.15', zIndex: '0', pointerEvents: 'none', transform: 'translate(30%, 30%)' }} />

            {/* Left Header */}
            <div className="split-header" style={{ padding: '4rem 4rem 0 4rem', position: 'relative', zIndex: '1' }}>
                <h2 style={{ fontSize: '2.8rem', lineHeight: '1.15', marginBottom: '1.5rem', letterSpacing: '-1px' }}><span className="text-gradient">CONVERGENT PROCESSES</span></h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginBottom: '2rem', lineHeight: '1.6' }}>TMS ไม่ใช่แค่ช่วยจัดการงาน แต่คือ การทำงานร่วมกัน</p>
            </div>
            
            {/* Left Grid */}
            <div className="split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem 2rem', padding: '0 4rem 4rem 4rem', position: 'relative', zIndex: '1' }}>
                
                {/* Point 1 */}
                <div className="minimal-card">
                    <div className="minimal-icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}><strong style={{ color: 'var(--text-main)', fontSize: '1.05rem', display: 'block', marginBottom: '0.25rem' }}>ภาพรวมการทำงานชัดเจน</strong>หัวหน้าฝ่ายสามารถติดตามและมองเห็นภาพรวมการทำงานของทั้งองค์กรได้อย่างครอบคลุม</p>
                </div>

                {/* Point 2 */}
                <div className="minimal-card">
                    <div className="minimal-icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}><strong style={{ color: 'var(--text-main)', fontSize: '1.05rem', display: 'block', marginBottom: '0.25rem' }}>ศูนย์กลางการทำงานร่วมกัน</strong>เชื่อมโยงทุกฝ่ายที่เกี่ยวข้องให้สามารถทำงานประสานกันได้อย่างราบรื่นในระบบเดียว</p>
                </div>

                {/* Point 3 */}
                <div className="minimal-card">
                    <div className="minimal-icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}><strong style={{ color: 'var(--text-main)', fontSize: '1.05rem', display: 'block', marginBottom: '0.25rem' }}>สนับสนุน Work From Anywhere</strong>พนักงานจัดส่ง ผู้ขนส่ง และคนขับรถสามารถเข้าถึงระบบและทำงานร่วมกันได้จากทุกที่</p>
                </div>

                {/* Point 4 */}
                <div className="minimal-card">
                    <div className="minimal-icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}><strong style={{ color: 'var(--text-main)', fontSize: '1.05rem', display: 'block', marginBottom: '0.25rem' }}>ข้อมูลอัปเดตแบบเรียลไทม์</strong>ทุกคนในกระบวนการได้รับข้อมูลที่ตรงกันพร้อมกัน ลดข้อผิดพลาดในการสื่อสาร</p>
                </div>

            </div>

            {/* Right Content (Mockup Image) */}
            <div className="split-image" style={{ position: 'relative', height: '100%', minHeight: '400px' }}>
                <img src="/Logo-interface/Employees_looking_at_tablet_2K_202608131136 (1).jpeg" alt="Enterprise Feature" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0', display: 'block' }} />
            </div>

        </div>
    </section>

    
    </>
  );
}
