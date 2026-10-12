import React from 'react';

export default function PainPointsSection() {
  const painPoints = [
    {
      title: 'ใช้รถเกินจำเป็น',
      description: 'รถวิ่งไม่เต็ม capacity หรือรวมงาน (consolidate) ได้ไม่ดี',
    },
    {
      title: 'วางแผนนาน',
      description: 'Planner ใช้ Excel หรือขั้นตอน manual มากเกินไป',
    },
    {
      title: 'มองไม่เห็นสถานะ',
      description: 'ต้องโทรตามรถหรือถาม transporter เพื่อเช็กสถานะ',
    },
    {
      title: 'ข้อมูลกระจัดกระจาย',
      description: 'Order, planning, booking และ tracking อยู่คนละระบบ',
    },
  ];

  return (
    <section className="landing-pain-points-section">
      <div className="landing-container">
        <h2 className="section-title">ปัญหาที่ทีมขนส่งเจอทุกวัน</h2>
        <div className="pain-points-grid">
          {painPoints.map((item, index) => (
            <div key={index} className="pain-point-card">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

