import React from 'react';

export default function TmsEnterpriseFeature3Section() {
  return (
    <>
      {/* Section 3: LOGISTICS DIGITAL COMMUNITY */}
    <section className="split-section reveal" style={{ padding: '0 2rem 4rem 2rem', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        {/* Light decorative background */}
        <div style={{ position: 'absolute', top: '0', right: '-5%', width: '50%', height: '100%', background: 'radial-gradient(circle, var(--primary) 0%, transparent 60%)', opacity: '0.05', zIndex: '-1', filter: 'blur(60px)', pointerEvents: 'none' }}></div>

        <div className="split-container glass-card hover-lift" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'stretch', borderRadius: '32px', overflow: 'hidden', padding: '0', position: 'relative' }}>
            
            {/* Decorative Line-X Background */}
            <img src="/Logo-interface/Line-X.png" alt="" style={{ position: 'absolute', bottom: '0', left: '0', width: '80%', opacity: '0.15', zIndex: '0', pointerEvents: 'none', transform: 'translate(-30%, 30%)' }} />

            {/* Left Header */}
            <div className="split-header" style={{ padding: '4rem 4rem 0 4rem', position: 'relative', zIndex: '1' }}>
                <h2 style={{ fontSize: '2.8rem', lineHeight: '1.15', marginBottom: '1.5rem', letterSpacing: '-1px' }}><span className="text-gradient">LOGISTICS DIGITAL COMMUNITY</span></h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginBottom: '2rem', lineHeight: '1.6' }}>มากกว่า ระบบ TMS แต่เป็นการเข้าร่วม Logistics Digital Community</p>
            </div>
            
            {/* Left Grid */}
            <div className="split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem 2rem', padding: '0 4rem 4rem 4rem', position: 'relative', zIndex: '1' }}>
                
                {/* Point 1 */}
                <div className="minimal-card">
                    <div className="minimal-icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}><strong style={{ color: 'var(--text-main)', fontSize: '1.05rem', display: 'block', marginBottom: '0.25rem' }}>เครือข่ายหารถขนส่ง</strong>ขยายขีดความสามารถในการหารถขนส่งได้อย่างรวดเร็วผ่านเครือข่ายของ 360TRUCK</p>
                </div>

                {/* Point 2 */}
                <div className="minimal-card">
                    <div className="minimal-icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}><strong style={{ color: 'var(--text-main)', fontSize: '1.05rem', display: 'block', marginBottom: '0.25rem' }}>สร้างรายได้จากรถว่าง</strong>เพิ่มโอกาสในการรับงานและสร้างรายได้เสริมโดยนำรถบรรทุกที่ว่างเข้าร่วมเครือข่าย</p>
                </div>

                {/* Point 3 */}
                <div className="minimal-card">
                    <div className="minimal-icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}><strong style={{ color: 'var(--text-main)', fontSize: '1.05rem', display: 'block', marginBottom: '0.25rem' }}>เชื่อมต่อ TMS Basic for Carrier</strong>รองรับการทำงานร่วมกับพาร์ทเนอร์ผู้ขนส่งที่ใช้งานระบบ TMS Basic ได้อย่างสมบูรณ์แบบ</p>
                </div>

                {/* Point 4 */}
                <div className="minimal-card">
                    <div className="minimal-icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}><strong style={{ color: 'var(--text-main)', fontSize: '1.05rem', display: 'block', marginBottom: '0.25rem' }}>แอปพลิเคชัน 360TRUCKER</strong>เข้าถึงและสั่งงานคนขับรถได้ง่ายดาย รวดเร็ว และไม่มีค่าใช้จ่ายผ่าน Mobile Application</p>
                </div>

            </div>

            {/* Right Content (Mockup Image) */}
            <div className="split-image" style={{ position: 'relative', height: '100%', minHeight: '400px' }}>
                <img src="/Logo-interface/LOGISTICS DIGITAL_COMMUNITY.jpeg" alt="Enterprise Feature" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0', display: 'block' }} />
            </div>

        </div>
    </section>

    
    </>
  );
}
