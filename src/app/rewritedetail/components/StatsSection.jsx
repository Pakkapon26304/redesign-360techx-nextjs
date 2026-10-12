import React from 'react';

export default function StatsSection() {
  const stats = [
    {
      value: '15–20%',
      label: 'ลดต้นทุนน้ำมันและระยะทางจัดส่งเฉลี่ย',
    },
    {
      value: '15 นาที',
      label: 'วางแผนสายส่งจากเดิมหลายชั่วโมง',
    },
    {
      value: '98%+',
      label: 'อัตราส่งตรงเวลา (On-time Delivery)',
    },
  ];

  return (
    <section className="landing-stats-section">
      <div className="landing-container">
        <h2 className="section-title">ผลลัพธ์ที่วัดได้จริงกับองค์กรที่ใช้ 360TechX TMS</h2>
        <div className="stats-grid">
          {stats.map((item, index) => (
            <div key={index} className="stat-card">
              <strong className="stat-number">{item.value}</strong>
              <span className="stat-label">{item.label}</span>
            </div>
          ))}
        </div>
        <p className="stats-disclaimer-note">
          ผลลัพธ์อ้างอิงจากการใช้งานจริงของลูกค้า Enterprise ผลที่ได้อาจแตกต่างตามรูปแบบธุรกิจและขนาด Fleet
        </p>
      </div>
    </section>
  );
}

