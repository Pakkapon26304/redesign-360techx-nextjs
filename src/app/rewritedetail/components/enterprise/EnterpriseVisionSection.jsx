import React from 'react';

export default function EnterpriseVisionSection() {
  const cards = [
    {
      title: 'True AI-Driven Planning & Scheduling Optimization',
      description:
        'ประมวลผลและวางแผนเส้นทางจัดสายส่งอัจฉริยะด้วย AI แท้จริง คำนึงถึงข้อจำกัดจริงทุกมิติ (เงื่อนไขเวลา, น้ำหนัก, Multi-drop) ช่วยลดต้นทุนน้ำมันและเวลางานอย่างแม่นยำ',
    },
    {
      title: 'Enterprise Built-to-Suit Flexibility',
      description:
        'พร้อมปรับแต่ง (Customize) และออกแบบสถาปัตยกรรมระบบให้สอดรับกับ Workflow ทางธุรกิจ ระบบ ERP/WMS และโครงสร้างองค์กรที่มีความเฉพาะตัวได้อย่างสมบูรณ์แบบ',
    },
    {
      title: 'Unlimited Fleet & Crowdsourcing Integration',
      description:
        'ดึงข้อมูลอัตโนมัติจาก ERP/WMS พร้อมปลดล็อกข้อจำกัดด้าน Fleet ด้วยการเชื่อมต่อเครือข่ายรถเสริมกว่า 100,000+ คันจาก 360TRUCK เข้ามารับงานช่วง Peak Season ได้ทันที',
    },
  ];

  return (
    <section id="vision" className="enterprise-vision-section">
      <div className="landing-container">
        <h2 className="section-title">TMS Enterprise: ความเป็นที่สุดที่แตกต่างจากคู่แข่ง</h2>
        <div className="vision-intro-text">
          <p>
            ในยุคที่ห่วงโซ่อุปทาน (Supply Chain) ต้องเผชิญกับความผันผวนของต้นทุน ความซับซ้อนของการบริหาร Fleet และความคาดหวังในการจัดส่งที่รวดเร็วขึ้น{' '}
            <strong>องค์กรระดับ Enterprise ทั้งโรงงานผู้ผลิต ศูนย์กระจายสินค้า (DC) และ 3PL รายใหญ่</strong>{' '}
            ต่างต้องเผชิญโจทย์ยากในการบริหารจัดการการขนส่งที่มีเงื่อนไขเฉพาะตัวเกินกว่าที่ระบบ TMS ทั่วไปในตลาดจะรองรับได้
          </p>
          <p>
            <strong>360TechX Enterprise</strong> ถูกพัฒนาขึ้นเพื่อแก้โจทย์ความซับซ้อนนี้โดยเฉพาะ ด้วยการก้าวข้ามการเป็นเพียงซอฟต์แวร์จัดรถแบบเดิม สู่การเป็น{' '}
            <strong>Centralized Logistics Ecosystem</strong> บนคลาวด์แพลตฟอร์มที่รวมความเชี่ยวชาญเชิงลึกด้าน Logistics &amp; Supply Chain เข้ากับเทคโนโลยีระดับพรีเมียม
          </p>
        </div>

        <div className="vision-cards-grid">
          {cards.map((c, i) => (
            <div key={i} className="vision-card">
              <h3 className="card-title">{c.title}</h3>
              <p className="card-description">{c.description}</p>
            </div>
          ))}
        </div>

        <p className="vision-summary-note">
          ช่วยให้องค์กรของคุณบริหารการขนส่งได้อย่างแม่นยำ ยกระดับกระบวนการทำงาน ควบคุมต้นทุน TCO ได้อย่างยั่งยืน และพร้อมสเกลธุรกิจต้อนรับทุกโอกาสการเติบโตอย่างมั่นคง
        </p>
      </div>
    </section>
  );
}

