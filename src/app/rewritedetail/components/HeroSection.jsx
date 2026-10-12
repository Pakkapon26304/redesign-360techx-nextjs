import React from 'react';

export default function HeroSection() {
  return (
    <section className="landing-hero-section">
      <div className="landing-container">
        <div className="hero-content">
          <p className="hero-badge-text">
            Move More. Plan Smarter. Spend Less.
          </p>
          <h1 className="hero-title">
            360TechX TMS — ระบบบริหารการขนส่งระดับ Enterprise ปลดล็อกการขยาย Fleet และขับเคลื่อนธุรกิจให้เติบโตอย่างยั่งยืน
          </h1>
          <p className="hero-description">
            ยกระดับการวางแผนจัดส่งด้วย AI Engine, บริหารเครือข่าย Sub-contractors, รวมการเชื่อมต่อสัญญาณ GPS Multi-brand กว่า 20+ เจ้า และรองรับการเชื่อมต่อ ERP/WMS แบบไร้รอยต่อ พร้อมโมเดลคุ้มค่าที่สุด ไร้ข้อจำกัด ไม่จำกัดจำนวนรถและคนขับ (Unlimited Truck & Driver)
          </p>
          <div className="hero-cta-group">
            <a href="#calc" className="btn btn-primary">
              Calculate Your Potential Savings
            </a>
            <a href="#flow" className="btn btn-outline">
              ดูว่า 360 TMS ทำงานอย่างไร
            </a>
          </div>
          <div className="hero-feature-tags">
            <span className="tag-item">AI Route Planning</span>
            <span className="tag-item">GPS 20+ แบรนด์</span>
            <span className="tag-item">เชื่อมต่อ ERP/WMS</span>
            <span className="tag-item">Unlimited Truck & Driver</span>
          </div>
        </div>

        {/* Dashboard Real-time Mockup / Map Status Card */}
        <div className="hero-dashboard-mockup" role="img" aria-label="ตัวอย่างหน้าจอ Dashboard แผนที่ Real-time">
          <div className="map-grid-preview">
            <svg viewBox="0 0 300 150" preserveAspectRatio="none">
              <path d="M10 120 C60 100 80 40 140 60 S230 110 290 30" fill="none" stroke="currentColor" strokeWidth="3" />
              <path d="M20 30 C80 50 120 20 170 90 S250 130 290 110" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="6 5" />
              <circle cx="140" cy="60" r="6" fill="currentColor" />
              <circle cx="170" cy="90" r="6" fill="currentColor" />
              <circle cx="290" cy="30" r="6" fill="currentColor" />
            </svg>
          </div>
          <div className="dashboard-status-row">
            <span>เที่ยว BKK-0142 · 6 จุดส่ง</span>
            <span className="status-badge running">กำลังวิ่ง</span>
          </div>
          <div className="dashboard-status-row">
            <span>เที่ยว CNX-0987 · รถร่วม</span>
            <span className="status-badge epod">e-POD แล้ว</span>
          </div>
          <div className="dashboard-status-row">
            <span>งานส่วนเกิน 12 เที่ยว</span>
            <span className="status-badge crowdsource">เรียกรถ 360TRUCK</span>
          </div>
        </div>
      </div>
    </section>
  );
}

