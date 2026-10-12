import React from 'react';

export default function EnterpriseCloudIntegrationSection() {
  const features = [
    {
      title: 'Cloud-Native Architecture',
      description: 'ระบบทำงานบน Cloud 100% ประมวลผลเสถียร รองรับ Transaction ปริมาณมหาศาล',
    },
    {
      title: 'Enterprise Standard RESTful API',
      description:
        'เชื่อมต่อข้อมูลสองทาง (Bi-directional Data Sync) ร่วมกับ SAP (S/4HANA), Microsoft Dynamics 365, Oracle และ WMS',
    },
    {
      title: 'Centralized Multi-GPS Gateway',
      description:
        'รวมสัญญาณ GPS Multi-brand กว่า 20+ เจ้าเข้ามาที่แดชบอร์ดเดียวโดยไม่ต้องเปลี่ยนอุปกรณ์เดิม',
    },
  ];

  return (
    <section id="cloud" className="enterprise-cloud-section">
      <div className="landing-container">
        <h2 className="section-title">Centralized Cloud Ecosystem &amp; Integration</h2>
        <p className="section-lead">
          สถาปัตยกรรมระบบที่ปลอดภัยและเชื่อมต่อได้ สำหรับทีม IT และผู้บริหาร
        </p>

        <div className="cloud-features-grid">
          {features.map((item, index) => (
            <div key={index} className="cloud-feature-card">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Integration Diagram */}
        <div
          className="integration-flow-diagram"
          role="img"
          aria-label="ERP/WMS เชื่อมกับ 360TechX API Gateway และ TMS Core Engine"
        >
          <div className="diagram-node">ERP / WMS</div>
          <span className="diagram-arrow">↔</span>
          <div className="diagram-node">360TechX API Gateway</div>
          <span className="diagram-arrow">↔</span>
          <div className="diagram-node">TMS Core Engine</div>
        </div>
      </div>
    </section>
  );
}

