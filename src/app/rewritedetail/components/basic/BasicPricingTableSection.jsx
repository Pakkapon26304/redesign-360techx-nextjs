import React from 'react';

export default function BasicPricingTableSection() {
  const comparisonRows = [
    {
      label: 'เหมาะสำหรับ',
      starter: 'ผู้เริ่มต้นทดลองระบบ',
      basicMonthly: 'ผู้ประกอบการขนส่ง SMEs',
      highlight: false,
    },
    {
      label: 'ปริมาณงานขนส่ง',
      starter: 'ไม่เกิน 10-15 เที่ยว/เดือน',
      basicMonthly: 'ไม่เกิน 100 เที่ยว/เดือน',
      highlight: true,
    },
    {
      label: 'จำนวนผู้ใช้งานระบบ',
      starter: '1 Admin',
      basicMonthly: '5 Admins',
      highlight: false,
    },
    {
      label: 'Mobile App Tracking',
      starter: 'รองรับ',
      basicMonthly: 'รองรับ + ดูประวัติย้อนหลัง',
      highlight: false,
    },
    {
      label: 'การเข้าถึงงาน 360TRUCK',
      starter: 'รองรับ',
      basicMonthly: 'รองรับเต็มรูปแบบเพื่อหางานเพิ่ม',
      highlight: false,
    },
    {
      label: 'ราคาค่าบริการ',
      starter: 'ฟรีตลอดชีพ',
      basicMonthly: 'ราคาประหยัดรายเดือน (เริ่มต้นหลักร้อย)',
      highlight: true,
    },
  ];

  return (
    <section id="bplans" className="basic-pricing-table-section">
      <div className="landing-container">
        <h2 className="section-title">แพ็กเกจและราคา</h2>
        <p className="section-lead">โครงสร้างราคาที่จับต้องได้ เหมาะกับ SMEs</p>

        <div className="pricing-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="th-feature">ฟีเจอร์ / รายละเอียด</th>
                <th className="th-starter">Starter Pack (Free)</th>
                <th className="th-basic highlighted">Basic Monthly Pack</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => (
                <tr key={index}>
                  <td className="td-label">{row.label}</td>
                  <td className="td-starter">{row.starter}</td>
                  <td className={`td-basic ${row.highlight ? 'bold' : ''}`}>
                    {row.basicMonthly}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

