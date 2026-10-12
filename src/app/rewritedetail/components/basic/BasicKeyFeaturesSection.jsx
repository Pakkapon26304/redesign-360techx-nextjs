import React from 'react';

export default function BasicKeyFeaturesSection() {
  const features = [
    {
      title: 'Easy Dispatching (สร้างและจ่ายงานใน 1 นาที)',
      items: [
        'บันทึกข้อมูลงานขนส่ง คลังสินค้า ต้นทาง-ปลายทาง ได้รวดเร็ว',
        'กระจายงานเข้าสมาร์ทโฟนของคนขับผ่านแอป 360TRUCKER ได้ทันที',
      ],
    },
    {
      title: 'Mobile App Tracking Location (ติดตามสถานะสินค้าได้ทุกที่)',
      items: [
        'ตรวจสอบตำแหน่งรถและสถานะการจัดส่ง (กำลังไปส่ง / ถึงจุดส่ง / ส่งเสร็จสิ้น) บนหน้าจอเดียว',
        'ไม่ต้องติดตั้งอุปกรณ์ GPS อัปเดตสถานะการเดินทางแบบ Real-time ผ่าน Mobile App บนสมาร์ทโฟนของคนขับโดยตรง',
        'แชร์ลิงก์ติดตามสถานะ (Tracking Link) ให้ลูกค้าปลายทางดูได้โดยไม่ต้องโทรสอบถาม',
      ],
    },
    {
      title: 'Digital POD & Signature (หลักฐานการส่งมอบดิจิทัล)',
      items: [
        'คนขับถ่ายรูปสินค้าตอนส่งมอบและให้ลูกค้าเซ็นรับผ่านหน้าจอมือถือ',
        'ข้อมูลอัปเดตกลับมาที่ระบบกลางทันที ทีมงานสำนักงานและลูกค้าตรวจสอบภาพหลักฐานได้รวดเร็ว ไม่ต้องส่งผ่านไลน์ ลดขั้นตอนจัดเก็บรูป',
      ],
    },
    {
      title: 'Basic Performance Dashboard (สรุปภาพรวมธุรกิจ)',
      items: [
        'แดชบอร์ดสรุปจำนวนเที่ยววิ่ง รายงานการจัดส่ง รายได้และค่าใช้จ่ายพื้นฐาน Export เป็นไฟล์ Excel ได้ง่ายๆ',
      ],
    },
  ];

  return (
    <section id="bfeat" className="basic-features-section">
      <div className="landing-container">
        <h2 className="section-title">4 เครื่องมือสำคัญ ที่ SMEs ใช้ได้ทันที</h2>
        <p className="section-lead">
          ฟังก์ชันที่เรียบง่ายและทันสมัย เหมาะกับธุรกิจขนส่งขนาดเล็ก
        </p>

        <div className="basic-features-grid">
          {features.map((feat, index) => (
            <div key={index} className="basic-feature-card">
              <h3 className="card-title">{feat.title}</h3>
              <ul className="card-list">
                {feat.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

