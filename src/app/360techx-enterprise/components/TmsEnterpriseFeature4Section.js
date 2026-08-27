import React from 'react';

export default function TmsEnterpriseFeature4Section() {
  return (
    <>
      {/* Section 4: ENTERPRISE ERP/WMS INTEGRATION */}
    <section className="split-section reveal" style={{ padding: '0 2rem 8rem 2rem', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        {/* Light decorative background */}
        <div style={{ position: 'absolute', top: '0', left: '-5%', width: '50%', height: '100%', background: 'radial-gradient(circle, var(--primary) 0%, transparent 60%)', opacity: '0.05', zIndex: '-1', filter: 'blur(60px)', pointerEvents: 'none' }}></div>

        <div className="split-container reverse glass-card hover-lift" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'stretch', borderRadius: '32px', overflow: 'hidden', padding: '0', position: 'relative' }}>
            
            {/* Decorative Line-X Background */}
            <img src="/Logo-interface/Line-X.png" alt="" style={{ position: 'absolute', bottom: '0', right: '0', width: '80%', opacity: '0.15', zIndex: '0', pointerEvents: 'none', transform: 'translate(30%, 30%)' }} />

            {/* Left Header */}
            <div className="split-header" style={{ padding: '4rem 4rem 0 4rem', position: 'relative', zIndex: '1' }}>
                <h2 style={{ fontSize: '2.8rem', lineHeight: '1.15', marginBottom: '1.5rem', letterSpacing: '-1px' }}><span className="text-gradient">ERP/WMS INTEGRATION</span></h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginBottom: '2rem', lineHeight: '1.6' }}>เชื่อมต่อระบบ ERP/WMS ชั้นนำได้ทุกแบรนด์ด้วย 360 lntegration Agent (PROXY)</p>
            </div>
            
            {/* Left Grid */}
            <div className="split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem 2rem', padding: '0 4rem 4rem 4rem', position: 'relative', zIndex: '1' }}>
                
                {/* Point 1 */}
                <div className="minimal-card">
                    <div className="minimal-icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><line x1="12" y1="12" x2="12" y2="8"></line></svg>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}><strong style={{ color: 'var(--text-main)', fontSize: '1.05rem', display: 'block', marginBottom: '0.25rem' }}>ผสานข้อมูล ERP ไร้รอยต่อ</strong>รองรับการผสานข้อมูลกับระบบ ERP ในทุกจุดของกระบวนการธุรกิจอย่างสมบูรณ์</p>
                </div>

                {/* Point 2 */}
                <div className="minimal-card">
                    <div className="minimal-icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line></svg>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}><strong style={{ color: 'var(--text-main)', fontSize: '1.05rem', display: 'block', marginBottom: '0.25rem' }}>ซิงค์ออเดอร์อัตโนมัติ</strong>ดึงข้อมูล Sales Order และ Delivery Order มาใช้ในการวางแผนการขนส่งได้ทันที</p>
                </div>

                {/* Point 3 */}
                <div className="minimal-card">
                    <div className="minimal-icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}><strong style={{ color: 'var(--text-main)', fontSize: '1.05rem', display: 'block', marginBottom: '0.25rem' }}>ติดตามสถานะ Shipment</strong>อัปเดตข้อมูลและสถานะการจัดส่งแบบเรียลไทม์กลับไปยังระบบหลักขององค์กรอย่างแม่นยำ</p>
                </div>

                {/* Point 4 */}
                <div className="minimal-card">
                    <div className="minimal-icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}><strong style={{ color: 'var(--text-main)', fontSize: '1.05rem', display: 'block', marginBottom: '0.25rem' }}>จัดการค่าขนส่งครบวงจร</strong>จัดการข้อมูลการวางบิล รับ-จ่ายค่าขนส่ง และกระทบยอดบัญชีร่วมกับระบบการเงินได้อย่างถูกต้อง</p>
                </div>

            </div>

            {/* Right Content (Mockup Image) */}
            <div className="split-image" style={{ position: 'relative', height: '100%', minHeight: '400px' }}>
                <img src="/Logo-interface/BG-headline-Feature.jpeg" alt="Enterprise Feature" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0', display: 'block' }} />
            </div>

        </div>
    </section>



        </>
  );
}
