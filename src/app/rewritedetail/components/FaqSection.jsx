import React from 'react';

export default function FaqSection() {
  const faqs = [
    {
      question: '360TechX TMS เชื่อมต่อกับ SAP หรือ WMS เดิมขององค์กรได้อย่างไร?',
      answer:
        'เชื่อมต่อผ่าน Enterprise RESTful API แบบสองทาง กับ SAP, Microsoft Dynamics, Oracle และ WMS ระบบดึง Delivery Order มาวางแผนด้วย AI และส่งสถานะ e-POD กลับ ERP แบบ Real-time',
    },
    {
      question: 'รองรับ GPS แบรนด์ใดบ้าง ต้องติด GPS ใหม่หรือไม่?',
      answer:
        'ไม่ต้องติดใหม่ ระบบเชื่อมต่อ API กับผู้ให้บริการ GPS มากกว่า 20 รายในไทย แล้วแสดงทุกคันบน Dashboard เดียว',
    },
    {
      question: 'คิดค่าบริการอย่างไร จำกัดจำนวนรถหรือไม่?',
      answer:
        'ไม่จำกัด ใช้โมเดล Unlimited Truck License and Driver App ไม่คิดค่าลิขสิทธิ์เพิ่มตามจำนวนทะเบียนรถหรือผู้ใช้แอปคนขับ ช่วยควบคุม TCO ได้คงที่',
    },
    {
      question: 'แก้ปัญหารถไม่พอช่วง Peak Season ได้อย่างไร?',
      answer:
        'เชื่อมต่อ 360TRUCK Crowdsourcing Platform ที่มีรถบรรทุกผ่านการคัดกรองกว่า 100,000 คันทั่วประเทศ กดเรียกรถเสริมจากหน้าจอ TMS ได้ทันที',
    },
    {
      question: 'Enterprise ต่างจาก Basic อย่างไร?',
      answer:
        'Enterprise รองรับมากกว่า 2,000 งานต่อเดือน มี AI วางแผนอัตโนมัติ เชื่อมต่อ ERP/WMS บริหารผู้รับเหมา และปรับแต่งระบบได้',
    },
  ];

  return (
    <section id="faq" className="landing-faq-section">
      <div className="landing-container">
        <h2 className="section-title">คำถามที่พบบ่อย</h2>

        <div className="faq-accordion-list">
          {faqs.map((item, index) => (
            <details key={index} className="faq-item" open={index === 0}>
              <summary className="faq-question">{item.question}</summary>
              <p className="faq-answer">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

