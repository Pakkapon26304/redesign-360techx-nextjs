import React from 'react';

export default function BasicStartStepsSection() {
  const steps = [
    {
      title: 'Register',
      description: 'สมัครบัญชีใช้งานออนไลน์ภายใน 1 นาที',
    },
    {
      title: 'Add Fleet',
      description: 'ลงทะเบียนข้อมูลรถและดาวน์โหลดแอปคนขับ',
    },
    {
      title: 'Dispatch & Earn',
      description: 'เริ่มสร้างงานบริษัท หรือเลือกหางานเสริมจาก 360TRUCK ได้ทันที',
    },
  ];

  return (
    <section id="bstart" className="basic-start-steps-section">
      <div className="landing-container">
        <h2 className="section-title">เริ่มใช้งานได้ใน 3 ขั้นตอน</h2>

        <div className="start-steps-grid">
          {steps.map((item, index) => (
            <div key={index} className="start-step-card">
              <span className="step-badge">ขั้นที่ {index + 1}</span>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

