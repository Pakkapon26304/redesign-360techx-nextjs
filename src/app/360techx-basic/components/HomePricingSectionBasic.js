import React from 'react';

export default function HomePricingSectionBasic() {
  return (
    <>
      {/* Pricing Section */}
    <section className="pricing-section reveal">
        <div className="pricing-container">
            <div className="section-header text-center">
                <h2><span className="text-gradient">แพ็กเกจราคา</span> 360TECHX</h2>
                <p>เลือกโซลูชันที่เหมาะสมที่สุด เพื่อยกระดับและขับเคลื่อนธุรกิจขนส่งของคุณให้เติบโตอย่างยั่งยืน</p>
            </div>
            
            <div className="pricing-grid">
                {/* Basic */}
                <div className="pricing-card glass-card hover-lift">
                    <div className="pricing-header">
                        <h3 className="tier-title" style={{ marginBottom: '1rem' }}>
                            <img src="/Logo-interface/360techx-basic.png" alt="360TECHX Basic" className="tier-logo-img dark-logo" />
                            <img src="/Logo-interface/360techx-basic-black.png" alt="360TECHX Basic" className="tier-logo-img light-logo" />
                        </h3>
                        <p className="pricing-subtitle">เหมาะสำหรับธุรกิจขนส่งขนาดเล็กถึงขนาดกลาง (SME)</p>
                    </div>
                    <ul className="pricing-features">
                        <li><span className="check-icon">✓</span> จัดการงานขนส่งสูงสุด 20 งานต่อเดือน (1 งานไม่จำกัดเที่ยวรถ)</li>
                        <li><span className="check-icon">✓</span> จัดเก็บงานย้อนหลังไม่จำกัด</li>
                        <li><span className="check-icon">✓</span> ไม่จำกัดจำนวนผู้ใช้งาน จำนวนรถ จำนวนคนขับ</li>
                        <li><span className="check-icon">✓</span> รองรับการจ่ายงาน และติดตามสถานะคนขับด้วย 360TRUCKER App</li>
                        <li><span className="check-icon">✓</span> จัดการข้อมูลรถ ประวัติคนขับ และคำนวณค่าเที่ยว ได้ในระบบเดียว</li>
                    </ul>
                    <a href="/contact" className="btn btn-outline btn-full mt-4">เริ่มต้นใช้งานฟรี</a>
                </div>

                {/* Premium */}
                <div className="pricing-card glass-card hover-lift popular">
                    <div className="popular-badge">RECOMMENDED</div>
                    <div className="pricing-header">
                        <h3 className="tier-title" style={{ marginBottom: '1rem' }}>
                            <img src="/Logo-interface/360techx-premium.png" alt="360TECHX Premium" className="tier-logo-img dark-logo" />
                            <img src="/Logo-interface/360techx-premium-black.png" alt="360TECHX Premium" className="tier-logo-img light-logo" />
                        </h3>
                        <p className="pricing-subtitle">เหมาะสำหรับธุรกิจขนส่งขนาดกลาง</p>
                    </div>
                    <ul className="pricing-features">
                        <li><span className="check-icon">✓</span> จัดการงานขนส่งได้มากกว่า 100 งานต่อเดือน (1 งานไม่จำกัดเที่ยวรถ)</li>
                        <li><span className="check-icon">✓</span> จัดเก็บงานย้อนหลังไม่จำกัด</li>
                        <li><span className="check-icon">✓</span> ไม่จำกัดจำนวนผู้ใช้งาน จำนวนรถ จำนวนคนขับ</li>
                        <li><span className="check-icon">✓</span> รองรับการจ่ายงาน และติดตามสถานะคนขับด้วย 360TRUCKER App</li>
                        <li><span className="check-icon">✓</span> จัดการข้อมูลรถ ประวัติคนขับ และคำนวณค่าเที่ยว ได้ในระบบเดียว</li>
                        <li><span className="check-icon">✓</span> สามารถดาวน์โหลดข้อมูลเป็นไฟล์ Excel ได้</li>
                        <li><span className="check-icon">✓</span> เชื่อมต่อระบบบริหาร และจัดการค่าน้ำมันได้</li>
                    </ul>
                    <a href="/contact" className="btn btn-primary btn-full mt-4">ติดต่อฝ่ายขาย</a>
                </div>

                {/* Enterprise */}
                <div className="pricing-card glass-card hover-lift">
                    <div className="pricing-header">
                        <h3 className="tier-title" style={{ marginBottom: '1rem' }}>
                            <img src="/Logo-interface/360techx-enterprise.png" alt="360TECHX Enterprise" className="tier-logo-img dark-logo" />
                            <img src="/Logo-interface/360techx-enterprise-black.png" alt="360TECHX Enterprise" className="tier-logo-img light-logo" />
                        </h3>
                        <p className="pricing-subtitle">เหมาะสำหรับธุรกิจขนส่งขนาดใหญ่</p>
                    </div>
                    <ul className="pricing-features">
                        <li><span className="check-icon">✓</span> จัดการงานขนส่งได้มากกว่า 2,000 งานต่อเดือน (1 งานไม่จำกัดเที่ยวรถ)</li>
                        <li><span className="check-icon">✓</span> จัดเก็บงานย้อนหลังไม่จำกัด</li>
                        <li><span className="check-icon">✓</span> ไม่จำกัดจำนวนผู้ใช้งาน จำนวนรถ จำนวนคนขับ</li>
                        <li><span className="check-icon">✓</span> รองรับการจ่ายงาน และติดตามสถานะคนขับด้วย 360TRUCKER App</li>
                        <li><span className="check-icon">✓</span> จัดการข้อมูลรถ ประวัติคนขับ และคำนวณค่าเที่ยว ได้ในระบบเดียว</li>
                        <li><span className="check-icon">✓</span> สามารถดาวน์โหลดข้อมูลเป็นไฟล์ Excel ได้</li>
                        <li><span className="check-icon">✓</span> เชื่อมต่อระบบบริหาร และจัดการค่าน้ำมันได้</li>
                        <li><span className="check-icon">✓</span> รองรับการจัดการผู้รับเหมาขนส่งได้ 15 ราย</li>
                        <li><span className="check-icon">✓</span> รองรับการวางแผนขนส่ง และขนส่งอัตโนมัติ ด้วย AI ของ 360TECHX</li>
                        <li><span className="check-icon">✓</span> รองรับการเชื่อมต่อระบบ ERP และระบบ Warehouse Management System ที่มีอยู่</li>
                        <li><span className="check-icon">✓</span> รองรับการปรับแต่งระบบให้เหมาะสมกับธุรกิจ (Customization)</li>
                    </ul>
                    <a href="/contact" className="btn btn-outline btn-full mt-4">ติดต่อฝ่ายขาย</a>
                </div>
            </div>
        </div>
    </section>

    
    </>
  );
}
