import React from 'react';

export default function CrowdsourcingSection() {
  const steps = [
    { title: 'วางแผนใน TMS ตามปกติ' },
    { title: 'กดจ่ายงานส่วนเกินเข้า 360TRUCK' },
    { title: 'ติดตามสถานะและ e-POD บน Dashboard เดียวกับรถของคุณ' },
  ];

  return (
    <section id="truck" className="landing-crowdsourcing-section">
      <div className="landing-container">
        <h2 className="section-title">รถไม่พอ ไม่ใช่ปัญหาอีกต่อไป</h2>
        <p className="section-lead">
          เมื่อ Fleet หลักเต็มหรือเข้าช่วง Peak Season เรียกรถเสริมจากเครือข่าย 360TRUCK ที่ผ่านการคัดกรองกว่า 100,000 คัน ได้จากหน้าจอ TMS เดิม โดยไม่ต้องลงทุนซื้อรถเพิ่ม
        </p>

        <div className="crowdsourcing-steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="crowdsourcing-step-item">
              <span className="step-counter-label">ขั้นที่ {index + 1}</span>
              <strong className="step-title">{step.title}</strong>
            </div>
          ))}
        </div>

        <div className="crowdsourcing-cta">
          <a href="#demo" className="btn btn-secondary">
            ดูการทำงานในการสาธิตระบบ
          </a>
        </div>
      </div>
    </section>
  );
}

