import React from 'react';

export default function OutcomesSection() {
  const outcomes = [
    {
      title: 'Plan Better: ใช้รถทุกคันให้คุ้มค่า',
      description:
        'ใช้ Optimization จัดออเดอร์และรถที่มีให้เหมาะสม ครอบคลุม Load Planning, Routing, Truck Utilization และ Delivery Constraints',
    },
    {
      title: 'Execute Faster: เปลี่ยนแผนเป็นงานจริง',
      description:
        'จองรถ จัดการ Shipment และประสานงาน Transporter ใน workflow เดียว',
    },
    {
      title: 'See What’s Happening: รู้สถานะทุกเที่ยว',
      description:
        'ติดตามสถานะตั้งแต่รถออกจนส่งสำเร็จ ผ่าน Operational Dashboard',
    },
    {
      title: 'Connect Your Operation: เชื่อมระบบเดิม',
      description:
        'เชื่อมข้อมูลออเดอร์และการขนส่งผ่าน API กับ ERP และระบบอื่นขององค์กร',
    },
  ];

  return (
    <section className="landing-outcomes-section">
      <div className="landing-container">
        <h2 className="section-title">ขายผลลัพธ์ ไม่ใช่รายการฟีเจอร์</h2>
        <div className="outcomes-grid">
          {outcomes.map((item, index) => (
            <div key={index} className="outcome-card">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

