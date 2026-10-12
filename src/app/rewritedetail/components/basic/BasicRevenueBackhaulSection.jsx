import React from 'react';

export default function BasicRevenueBackhaulSection() {
  const points = [
    {
      title: '1. Unlock Backhaul Revenue (ลดรถเที่ยวเปล่า หารายได้เพิ่ม)',
      description:
        'ในกรณีที่บริษัทขนส่งมีรถว่าง หรือต้องการหางานขากลับ (Return Trip) ระบบจะเชื่อมต่อไปยัง 360TRUCK Platform ที่มีงานขนส่งกระจายอยู่ทั่วประเทศ ช่วยลดปัญหารถว่างงานและสร้างรายได้เพิ่มให้ธุรกิจ',
    },
    {
      title: '2. 360TRUCKER Driver Mobile App',
      description:
        'แอปพลิเคชันฝั่งคนขับที่ใช้ง่าย ทำหน้าที่ทั้งรับงานในบริษัท และกดรับงานเสริมจากเครือข่าย 360TRUCK ได้อย่างไร้รอยต่อ ไม่มีค่าใช้จ่ายเพิ่มเติมต่อคัน',
    },
    {
      title: '3. Easy Upgrade Path',
      description:
        'เมื่อธุรกิจเติบโตขึ้นและมียอดจัดส่งเกิน 100 เที่ยว/เดือน สามารถอัปเกรดขึ้นไปใช้เวอร์ชัน Enterprise เพื่อใช้งาน AI Route Optimization และเชื่อมต่อระบบ ERP ได้อย่างไร้รอยต่อ',
    },
  ];

  return (
    <section id="brev" className="basic-revenue-section">
      <div className="landing-container">
        <h2 className="section-title">
          หารายได้เพิ่มจากรถว่าง ด้วยเครือข่าย 360TRUCK
        </h2>

        <div className="revenue-points-grid">
          {points.map((item, index) => (
            <div key={index} className="revenue-point-card">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>

        <h3 className="additional-tools-title">ตัวช่วยอื่นในระบบ</h3>
        <div className="additional-tools-box">
          <div className="tool-card">
            <h4 className="card-title">บันทึกค่าขนส่ง ขาเก็บ/ขาจ่าย ได้ทั้งภาพรวมและรายเที่ยว</h4>
            <p className="card-description">
              ระบบตะกร้าบิล บันทึกบิล และ ค่าใช้จ่ายเพิ่มเติมได้สะดวก
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

