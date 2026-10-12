import React from 'react';

export default function PricingComparisonSection() {
  const plans = [
    {
      name: 'Basic',
      badge: 'ธุรกิจขนส่งขนาดเล็กถึงกลาง (SME)',
      recommended: false,
      features: [
        'สูงสุด 100 งานต่อเดือน',
        'จ่ายงานผ่านแอป 360TRUCKER',
        'คำนวณค่าเที่ยวในระบบเดียว',
      ],
      ctaText: 'เริ่มต้นใช้งานฟรี',
      ctaLink: '#demo',
      ctaVariant: 'btn-outline',
    },
    {
      name: 'Enterprise',
      badge: 'องค์กรขนาดใหญ่ โรงงาน DC และ 3PL',
      recommended: true,
      features: [
        'มากกว่า 2,000 งานต่อเดือน',
        'AI วางแผนและจัดขนส่งอัตโนมัติ',
        'เชื่อมต่อ ERP/WMS และปรับแต่งระบบ',
        'เรียกรถเสริมผ่าน 360TRUCK',
      ],
      ctaText: 'นัดหมายสาธิตระบบ',
      ctaLink: '#demo',
      ctaVariant: 'btn-primary',
    },
  ];

  return (
    <section id="plans" className="landing-pricing-section">
      <div className="landing-container">
        <h2 className="section-title">แพ็กเกจ 360TECHX</h2>
        <p className="section-lead">ทุกแพ็กเกจไม่จำกัดจำนวนผู้ใช้งาน รถ และคนขับ</p>

        <div className="pricing-cards-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-plan-card ${plan.recommended ? 'recommended' : ''}`}
            >
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-target">{plan.badge}</p>
              <ul className="plan-features-list">
                {plan.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
              <div className="plan-cta-wrapper">
                <a href={plan.ctaLink} className={`btn ${plan.ctaVariant}`}>
                  {plan.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

