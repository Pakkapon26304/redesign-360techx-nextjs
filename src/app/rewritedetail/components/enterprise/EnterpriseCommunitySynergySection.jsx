import React from 'react';

export default function EnterpriseCommunitySynergySection() {
  const synergyPoints = [
    {
      title: '1. Asset-Light Capacity Scaling',
      description:
        'เชื่อมต่อ 360TRUCK Platform ดึงรถเสริมคุณภาพสูง 100,000+ คันเข้ามารับงานช่วง Peak Season โดยไม่ต้องลงทุนซื้อรถเพิ่ม',
    },
    {
      title: '2. Backhaul Optimization',
      description:
        'เพิ่มโอกาสสร้างรายได้จากรถเที่ยวว่างด้วยการนำ Fleet ที่ว่างเข้าร่วมรับงานในเครือข่าย 360TRUCK',
    },
    {
      title: '3. Seamless Vendor Management',
      description:
        'เชื่อมต่อการสั่งงานและติดตาม Sub-contractors ที่ใช้ TMS Basic for Carrier ไร้รอยต่อ',
    },
    {
      title: '4. 360TRUCKER Mobile App',
      description:
        'แอปพลิเคชันฝั่งคนขับสำหรับรับงาน นำทาง และอัปเดต ePOD แบบไม่มีค่าใช้จ่ายเพิ่มเติม',
    },
  ];

  return (
    <section id="community" className="enterprise-community-section">
      <div className="landing-container">
        <h2 className="section-title">
          Logistics Digital Community &amp; Fleet Synergy
        </h2>
        <p className="section-lead">
          มากกว่าระบบ TMS แต่เป็นการเข้าร่วม Ecosystem โลจิสติกส์ที่ครบวงจรที่สุด
        </p>

        <div className="community-cards-grid">
          {synergyPoints.map((item, index) => (
            <div key={index} className="community-card">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

