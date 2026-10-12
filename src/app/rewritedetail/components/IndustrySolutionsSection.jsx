'use client';
import React, { useState } from 'react';

export default function IndustrySolutionsSection() {
  const industries = [
    {
      tabLabel: '🏭 โรงงานผู้ผลิต',
      title: '🏭 โรงงานผู้ผลิต (Manufacturing Plants)',
      challenges: [
        'ต้นทุนการขนส่งผันผวน',
        'ปัญหาการวางแผนรถให้มีประสิทธิภาพสูงสุด',
        'การเชื่อมต่อข้อมูลกับระบบ SAP/ERP คลังสินค้า',
      ],
      solutions: [
        {
          label: 'Seamless API:',
          detail: 'ดึงข้อมูล Sales Order/Delivery Note จาก ERP มาวางแผนขนส่งทันที',
        },
        {
          label: 'VRP & Load Optimization:',
          detail: 'จัดเที่ยวรถเต็มคัน (FTL) ลดการวิ่งเที่ยวว่าง',
        },
        {
          label: 'Vendor Control:',
          detail: 'กระจายงานให้รถร่วม (Sub-contractors) เมื่อมียอดเที่ยวขนส่งสูงเกิน fleet หลัก',
        },
        {
          label: 'Peak Period Solution:',
          detail:
            'เมื่อมียอดสั่งซื้อกระทันหันหรือยอดการผลิตพุ่งสูงขึ้นช่วงหน้าขาย สามารถกดหารถเสริมผ่าน 360TRUCK Crowdsourcing Integration ได้ทันที โดยไม่ต้องเสียเวลาหา Carrier นอกระบบที่ไม่มีการรับประกัน',
        },
      ],
    },
    {
      tabLabel: '📦 ศูนย์กระจายสินค้า (DC)',
      title: '📦 ศูนย์กระจายสินค้า (Distribution Center - DC)',
      challenges: [
        'การกระจายสินค้าหลายจุด (Multi-drop) ซับซ้อน',
        'คิวรถแออัดหน้าคลัง (Dock Bottleneck)',
        'การติดตามสถานะ e-POD ล่าช้า',
      ],
      solutions: [
        {
          label: 'Dynamic Route Optimization:',
          detail: 'คำนวณลำดับการจัดส่งและเวลาถึงจุดหมาย (ETA) อย่างแม่นยำ',
        },
        {
          label: 'Dock & Time-Slot Booking:',
          detail: 'วางแผนและจัดสรรคิวรถเข้า-ออก DC เพื่อลดความแออัดหน้าคลัง',
        },
        {
          label: '360TRUCKER App:',
          detail: 'คนขับเช็กอิน ยืนยัน e-POD และถ่ายภาพสินค้าผ่านแอปทันที',
        },
        {
          label: 'Peak Period Solution:',
          detail:
            'ช่วงแคมเปญใหญ่ (เช่น 11.11, 12.12 หรือช่วงเทศกาล) สามารถกดหารถเสริมผ่าน 360TRUCK Crowdsourcing Integration ได้ทันที โดยไม่ต้องเสียเวลาหา Carrier นอกระบบที่ไม่มีการรับประกัน',
        },
      ],
    },
    {
      tabLabel: '🚚 3PL และโลจิสติกส์',
      title: '🚚 ผู้ให้บริการโลจิสติกส์ใหญ่ (3PLs & Logistics)',
      challenges: [
        'ต้องบริหารทั้ง Owned Fleet และ Sub-contractors',
        'GPS กระจัดกระจายหลายยี่ห้อ',
        'ค่าซอฟต์แวร์เพิ่มขึ้นตามจำนวนรถที่รับเพิ่ม',
      ],
      solutions: [
        {
          label: 'Unlimited Truck Scale:',
          detail: 'ขยาย fleet รับงานเพิ่มได้ไม่จำกัดหัวลาก/ทะเบียน',
        },
        {
          label: 'Centralized GPS Monitoring:',
          detail: 'รวบรวม GPS 20+ ยี่ห้อในแดชบอร์ดเดียว',
        },
        {
          label: 'Sub-contractor Management:',
          detail:
            'คำนวณค่าเที่ยวและจัดสรรงานและบริหารเครือข่ายรถร่วม (Sub-contractors) ได้',
        },
        {
          label: 'Asset-Light Fleet Expansion:',
          detail:
            'เพิ่มศักยภาพในการรับงานลูกค้ารายใหญ่โดยไม่ต้องลงทุนซื้อรถเพิ่ม เมื่อ Fleet หลักเต็ม สามารถจ่ายงานส่วนเกินเข้าสู่เครือข่ายรถ 100,000+ คันของ 360TRUCK ได้อย่างไร้รอยต่อ',
        },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const currentIndustry = industries[activeTab];

  return (
    <section id="industry" className="landing-industry-section">
      <div className="landing-container">
        <h2 className="section-title">โซลูชันที่ออกแบบตามความท้าทายของแต่ละอุตสาหกรรม</h2>

        {/* Industry Tabs */}
        <div className="industry-tabs-nav" role="tablist" aria-label="อุตสาหกรรม">
          {industries.map((ind, index) => (
            <button
              key={index}
              role="tab"
              type="button"
              aria-selected={activeTab === index}
              className={`industry-tab-btn ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {ind.tabLabel}
            </button>
          ))}
        </div>

        {/* Industry Panel */}
        <div className="industry-panel" role="tabpanel" aria-live="polite">
          <div className="challenges-column">
            <h3 className="column-title">ความท้าทาย (Pain Points)</h3>
            <ul className="challenges-list">
              {currentIndustry.challenges.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>

          <div className="solutions-column">
            <h3 className="column-title">โซลูชันและผลลัพธ์จาก 360TechX TMS</h3>
            <ul className="solutions-list">
              {currentIndustry.solutions.map((s, i) => (
                <li key={i}>
                  <strong>{s.label}</strong> {s.detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

