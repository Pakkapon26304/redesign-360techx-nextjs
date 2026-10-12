import React from 'react';

export default function EnterpriseRoiSection() {
  const stats = [
    {
      value: '12–20%',
      label: '📉 ลดต้นทุนค่าน้ำมันและค่าขนส่งรวม',
    },
    {
      value: '15 นาที',
      label: '⏱️ ลดเวลาการวางแผนสายส่งจาก 3 ชม.',
    },
    {
      value: '+25%',
      label: '🚚 เพิ่ม Fleet Utilization Rate',
    },
    {
      value: '98.5%+',
      label: '📦 อัตราการจัดส่งตรงเวลา (OTD)',
    },
  ];

  return (
    <section id="roi" className="enterprise-roi-section">
      <div className="landing-container">
        <h2 className="section-title">ผลตอบแทนการลงทุน (ROI) ที่วัดได้</h2>

        <div className="roi-stats-grid">
          {stats.map((item, index) => (
            <div key={index} className="roi-stat-item">
              <strong className="stat-value">{item.value}</strong>
              <span className="stat-label">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="success-story-card">
          <h3 className="story-title">Enterprise Success Story</h3>
          <p className="story-sub">
            กรณีศึกษาความสำเร็จของศูนย์กระจายสินค้า (DC) และ 3PL รายใหญ่ในการใช้ AI Optimization และรถเสริมช่วง Peak Season
          </p>
          <div className="story-placeholder-box">
            พื้นที่วางกรณีศึกษาจริง (ชื่อลูกค้า โจทย์ ผลลัพธ์)
          </div>
        </div>
      </div>
    </section>
  );
}

