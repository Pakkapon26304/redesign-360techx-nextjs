import React from 'react';

export default function EnterpriseBuiltToSuitSection() {
  const domainKnowledge = [
    {
      title: 'Logistics & Supply Chain Expertise',
      description:
        'เรานำความเชี่ยวชาญเชิงลึกในอุตสาหกรรมมาช่วยยกระดับและออกแบบกระบวนการทำงาน (Process Transformation)',
    },
    {
      title: 'Custom Workflows & Business Rules',
      description:
        'ปรับเงื่อนไขการอนุมัติงาน และระบบจัดคิวรถเข้า-ออกคลัง (Dock Management)',
    },
    {
      title: 'Advanced Costing & Tariff Rules',
      description:
        'กำหนดสูตรคำนวณค่าน้ำมัน ค่าเที่ยว และสัญญารถร่วม (Sub-contractors) ที่ซับซ้อนตามจริง',
    },
    {
      title: 'Multi-Branch & Multi-Entity Hierarchy',
      description:
        'รองรับโครงสร้างองค์กรใหญ่ที่มีหลายบริษัทในเครือ หลาย DC พร้อมระบบสิทธิ์ผู้ใช้งาน (RBAC)',
    },
  ];

  const enterpriseServices = [
    {
      title: 'Consultation',
      description:
        'ให้คำปรึกษาการประยุกต์ใช้ TMS และวางสถาปัตยกรรมระบบ/Business Blueprint',
    },
    {
      title: 'Customization',
      description:
        'ปรับแต่งระบบ เชื่อมต่อ ERP/WMS และบริหารโครงการให้แล้วเสร็จตามแผน',
    },
    {
      title: 'Support',
      description:
        'ผู้เชี่ยวชาญดูแลการทำงานของระบบและสนับสนุนการใช้งาน (Support Service)',
    },
    {
      title: 'System Integration',
      description:
        'บริการของพันธมิตร เช่น ปรับแต่ง ERP (SAP, MS Dynamics) และติดตั้งบน Cloud เช่น AWS, Google',
    },
  ];

  return (
    <section id="suit" className="enterprise-built-to-suit-section">
      <div className="landing-container">
        <h2 className="section-title">
          Logistics Domain Knowledge &amp; Built-to-Suit Flexibility
        </h2>
        <p className="section-lead">
          ออกแบบระบบให้ลงตัวกับความเฉพาะตัวของธุรกิจ
        </p>

        <div className="built-to-suit-grid">
          {domainKnowledge.map((item, index) => (
            <div key={index} className="built-to-suit-card">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>

        <h3 className="services-subtitle">
          360TECHX Enterprise ให้บริการด้านใดบ้าง
        </h3>

        <div className="enterprise-services-grid">
          {enterpriseServices.map((item, index) => (
            <div key={index} className="service-card">
              <h4 className="card-title">{item.title}</h4>
              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

