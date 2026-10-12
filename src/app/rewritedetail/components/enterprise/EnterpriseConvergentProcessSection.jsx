import React from 'react';

export default function EnterpriseConvergentProcessSection() {
  const steps = [
    {
      title: 'Automated Order Processing',
      description: 'ดึงคำสั่งซื้อจาก ERP/WMS ผ่าน API 100% แทนการคีย์ Manual',
    },
    {
      title: 'AI-Driven Dispatching & Optimization',
      description: 'AI คำนวณจัดเที่ยวรถ (FTL/LTL) และลำดับจุดส่ง (Multi-drop) อัตโนมัติในไม่กี่นาที',
    },
    {
      title: 'Real-Time Centralized Tracking',
      description: 'มอนิเตอร์รถทุกคันจาก GPS 20+ แบรนด์ในหน้าจอเดียว พร้อมระบบ ETA Delay Alerts',
    },
    {
      title: 'Digital ePOD & Fast Billing',
      description: 'คนขับส่งหลักฐานผ่านแอป 360TRUCKER เพื่อออกใบแจ้งหนี้ (Billing) ได้ทันที',
    },
    {
      title: 'On-Demand Fleet Capacity',
      description: 'กดปล่อยงานส่วนเกินเข้าเครือข่าย 360TRUCK เมื่อ Fleet หลักเต็ม ลดความเสี่ยงช่วง Peak Season',
    },
    {
      title: 'Data-Driven Analytics',
      description: 'แดชบอร์ดสรุป KPI (On-Time Delivery, Utilization Rate) แบบ Real-time',
    },
  ];

  return (
    <section id="process" className="enterprise-convergent-process-section">
      <div className="landing-container">
        <h2 className="section-title">Convergent Processes &amp; Operational Excellence</h2>
        <p className="section-lead">
          TMS ไม่ใช่แค่ซอฟต์แวร์จัดรถ แต่คือการรวมศูนย์การทำงานของทุกฝ่าย (คลัง, จัดส่ง, Sub-contractor, คนขับ) ไว้ในระบบเดียว ทำงานได้จากทุกที่ (Work From Anywhere)
        </p>

        <div className="process-steps-grid">
          {steps.map((item, index) => (
            <div key={index} className="process-step-card">
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

