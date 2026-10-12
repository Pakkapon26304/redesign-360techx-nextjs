import React from 'react';

export default function WhyEnterpriseSection() {
  const reasons = [
    {
      title: '1. AI-Powered Route Planning & Dispatch Optimization',
      topic: 'ระบบวางแผนการจัดส่งสินค้าและเส้นทางอัจฉริยะด้วย AI:',
      description:
        'คำนวณการจัดเที่ยวรถ (FTL/LTL) และจัดสายส่งหลายจุด (Multi-drop) โดยคำนึงถึงเงื่อนไขทางธุรกิจจริง เช่น น้ำหนัก/ปริมาตรบรรทุก, ช่วงเวลาเข้า-ส่งสินค้า (Time-Slot Constraints) และประเภทรถ',
      impact: '📉 ลดต้นทุนน้ำมัน 15-20% | ⏱️ ลดเวลาวางแผนจาก 3 ชม. เหลือ 15 นาที',
    },
    {
      title: '2. Sub-contractor Vendor Management',
      topic: 'ระบบบริหารรถร่วมและผู้รับเหมาช่วง:',
      description:
        'จัดสรรงานให้อย่างเป็นระบบ กระจายงานตามสัญญาจ้าง (SLA) ออกใบสั่งจ้าง ติดตามสถานะ e-POD แบบ Real-time และคำนวณค่าเที่ยวให้อัตโนมัติ',
      impact: '🤝 ควบคุมมาตรฐานการบริการและตรวจสอบต้นทุน Sub-contractor ได้แม่นยำเทียบเท่า Fleet ของตนเอง',
    },
    {
      title: '3. Seamless Integration - Enterprise Standard RESTful API',
      topic: 'ระบบ API มาตรฐานระดับองค์กร พร้อมเชื่อมต่อ ERP & WMS:',
      description:
        'รองรับการเชื่อมต่อข้อมูลสองทาง (Bi-directional Data Exchange) เข้ากับ SAP, Oracle, Microsoft Dynamics และ WMS ชั้นนำได้อย่างราบรื่น',
      impact: '🔄 เชื่อมโยงข้อมูล Sales Order/Delivery Order และอัปเดต e-POD กลับไปยังระบบหลักโดยอัตโนมัติ ลดข้อผิดพลาดจากการคีย์ข้อมูล Manual 100%',
    },
    {
      title: '4. Centralized Multi-Brand GPS Monitoring',
      topic: 'ระบบศูนย์รวมการติดตาม GPS หลากหลายแบรนด์ (20+ Providers):',
      description:
        'ดึงสัญญาณ GPS จากผู้ให้บริการชั้นนำกว่า 20+ เจ้า มารวมแสดงผลบน Dashboard เดียวแบบ Real-time ไม่ต้องสลับหน้าจอ',
      impact: '📍 เห็นภาพรวมการเคลื่อนที่ของ Fleet ทั้งหมดบนแผนที่เดียว เพิ่มประสิทธิภาพในการควบคุมติดตามและความปลอดภัย',
    },
    {
      title: '5. Unlimited Truck License & Driver App',
      topic: 'โมเดลราคาคุ้มค่า:',
      description:
        'ไม่คิดค่าลิขสิทธิ์เพิ่มตามจำนวนทะเบียนรถหรือจำนวนคนขับ เพิ่ม fleet ได้ไม่จำกัด',
      impact: '💰 ควบคุม TCO (Total Cost of Ownership) ได้คงที่ ตอบโจทย์องค์กรที่ต้องการขยาย Fleet หรือใช้รถร่วมจำนวนมากโดยไม่มีภาระค่าใช้จ่ายแอบแฝง',
    },
    {
      title: '6. 360TRUCK Crowdsourcing Integration (Asset-Light Fleet)',
      topic: 'เชื่อมต่อ Platform รถเสริม:',
      description:
        'กดเรียกรถเสริมเมื่อเข้าช่วง Peak Season หรือ Fleet ไม่พอได้ทันทีผ่านระบบ ดึงข้อมูลรถบรรทุกในเครือข่ายมากกว่า 100,000+ คันทั่วประเทศ',
      impact: '📈 Zero Capacity Risk: หมดปัญหารถไม่พอส่งสินค้า ไม่เสียโอกาสทางธุรกิจช่วง Peak Period',
    },
  ];

  return (
    <section id="why" className="landing-why-enterprise-section">
      <div className="landing-container">
        <h2 className="section-title">6 เหตุผลที่องค์กรขนาดใหญ่เลือก 360TechX TMS</h2>
        <p className="section-lead">
          ตั้งแต่การวางแผน การควบคุม ไปจนถึงการเพิ่มกำลังรถ ครบในระบบเดียว
        </p>

        <div className="why-enterprise-grid">
          {reasons.map((item, index) => (
            <div key={index} className="why-enterprise-card">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">
                <strong>{item.topic}</strong> {item.description}
              </p>
              <div className="card-impact-highlight">{item.impact}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

