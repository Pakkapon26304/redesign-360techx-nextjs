import React from 'react';

export default function HomeTmsTiersSection() {
  return (
    <>
      {/* TMS Tiers Section Header */}
    <section className="tms-tiers-header">
        <div className="section-header text-center reveal">
            <h2>SOLUTIONS TMS <span className="text-gradient">สำหรับทุกขนาดธุรกิจ</span></h2>
            <p>เลือกแพลตฟอร์มที่เหมาะสมกับการเติบโตของคุณ</p>
        </div>
    </section>

    {/* TMS Tiers Content */}
    <section className="tms-tiers">

        {/* 1. Basic Tier */}
        <div id="tms-basic" className="tier-row reveal">
            <div className="tier-container">
                <div className="tier-info">
                    <h3 className="tier-title">
                        <img src="/Logo-interface/360techx-basic.png" alt="360TECHX Basic" className="tier-logo-img dark-logo" />
                        <img src="/Logo-interface/360techx-basic-black.png" alt="360TECHX Basic" className="tier-logo-img light-logo" />
                    </h3>
                    <h4 className="tier-subtitle">ระบบ TMS สำหรับธุรกิจขนาดเล็ก</h4>
                    <div className="tier-benefits">
                        <div className="benefit">
                            <span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                            <div>
                                <h5>จัดการงานขนส่งไว้ในระบบเดียว</h5>
                                <p>มอบหมายงาน เช็คสถานะ และบันทึกรายรับ/รายจ่ายบนแพลตฟอร์มเดียว</p>
                            </div>
                        </div>
                        <div className="benefit">
                            <span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                            <div>
                                <h5>ระบบติดตามงานและแจ้งเตือนอัตโนมัติ</h5>
                                <p>อัพเดตสถานะแบบ real-time ผ่านแอป 360TRUCKER</p>
                            </div>
                        </div>
                        <div className="benefit">
                            <span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                            <div>
                                <h5>รวบรวมค่าใช้จ่ายการขนส่งเบื้องต้น</h5>
                                <p>คำนวณค่าเที่ยวและประเมินรายได้กำไรอัตโนมัติ</p>
                            </div>
                        </div>
                        <div className="benefit">
                            <span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                            <div>
                                <h5>เหมาะกับธุรกิจ SME ขนส่งรายย่อย</h5>
                                <p>ทำงานผ่านระบบที่ไหนก็ได้ ไร้รอยต่อ</p>
                            </div>
                        </div>
                    </div>
            </div>
                <div className="tier-visual">
                    <img src="/Logo-interface/homepage-tms-basic.png" alt="Basic Tier Interface" className="tier-interface-img" />
                </div>
            </div>
        </div>

        {/* 2. Premium Tier */}
        <div id="tms-premium" className="tier-row reverse reveal">
            <div className="tier-container">
                <div className="tier-info">
                    <h3 className="tier-title">
                        <img src="/Logo-interface/360techx-premium.png" alt="360TECHX Premium" className="tier-logo-img dark-logo" />
                        <img src="/Logo-interface/360techx-premium-black.png" alt="360TECHX Premium" className="tier-logo-img light-logo" />
                    </h3>
                    <h4 className="tier-subtitle">ระบบ TMS สำหรับธุรกิจขนาดกลาง</h4>
                    <div className="tier-benefits">
                        <div className="benefit">
                            <span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                            <div>
                                <h5>สร้างงานได้ง่ายขึ้นผ่าน import booking (excel)</h5>
                                <p>อัพโหลดและสร้าง booking ได้อัตโนมัติ สะดวก ง่าย และรวดเร็ว</p>
                            </div>
                        </div>
                        <div className="benefit">
                            <span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                            <div>
                                <h5>เห็นภาพรวมสถานะขนส่งได้มากขึ้นผ่าน Dashboard</h5>
                                <p>ติดตามสถานะของงานในแต่ละจุด เพื่อแก้ไขสถานการณ์เบื้องต้นแทบจะทันท่วงที</p>
                            </div>
                        </div>
                        <div className="benefit">
                            <span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                            <div>
                                <h5>ติดตามสถานะขนส่งแบบ realtime ผ่าน GPS</h5>
                                <p>รวบรวม GPS จากทุกเจ้าในตลาดไว้ที่เดียว ย้อนเวลาดูสถานะในแต่ละจุดได้</p>
                            </div>
                        </div>
                        <div className="benefit">
                            <span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                            <div>
                                <h5>เหมาะสำหรับกลุ่มบริษัทขนส่งขนาดกลาง</h5>
                                <p>เพิ่มรายได้จากรถเที่ยวเปล่าด้วย 360Truck แพลตฟอร์มรถบรรทุกที่ใหญ่ที่สุด</p>
                            </div>
                        </div>
                    </div>
            </div>
                <div className="tier-visual">
                    <img src="/Logo-interface/homepage-tms-premium.png" alt="Premium Tier Interface" className="tier-interface-img" />
                </div>
            </div>
        </div>

        {/* 3. Enterprise Tier */}
        <div id="tms-enterprise" className="tier-row reveal tier-enterprise-bg">
            <div className="tier-container">
                <div className="tier-info">
                    <h3 className="tier-title">
                        <img src="/Logo-interface/360techx-enterprise.png" alt="360TECHX Enterprise" className="tier-logo-img dark-logo" />
                        <img src="/Logo-interface/360techx-enterprise-black.png" alt="360TECHX Enterprise" className="tier-logo-img light-logo" />
                    </h3>
                    <h4 className="tier-subtitle">ระบบ TMS สำหรับองค์กรขนาดใหญ่</h4>
                    <div className="tier-benefits">
                        <div className="benefit">
                            <span className="check-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>
                            <div>
                                <h5>ออกแบบระบบและกระบวนการทำงานเป็นมาตรฐาน</h5>
                                <p>ทำงานมีมาตราฐาน ทั้งฝั่งเจ้าของสินค้า ผู้ขนส่ง และคนขับ เชื่อมต่อ realtime</p>
                            </div>
                        </div>
                        <div className="benefit">
                            <span className="check-icon">✓</span>
                            <div>
                                <h5>รองรับระบบ ERP และ WMS ชั้นนำระดับโลก</h5>
                                <p>เชื่อมต่อด้วย 360integration Agent (PROXY) ข้อมูลครบจบ</p>
                            </div>
                        </div>
                        <div className="benefit">
                            <span className="check-icon">✓</span>
                            <div>
                                <h5>รองรับการปรับแต่งระบบให้เหมาะสมกับธุรกิจ</h5>
                                <p>บริการปรับแต่ง Customization เพื่อปรับระบบให้เข้ากับ Process ของคุณ</p>
                            </div>
                        </div>
                        <div className="benefit">
                            <span className="check-icon">✓</span>
                            <div>
                                <h5>บริการให้คำปรึกษาสำหรับระบบจัดการงานขนส่ง</h5>
                                <p>ผู้เชี่ยวชาญช่วยวางสถาปัตยกรรมระบบ และปรับปรุงกระบวนการขนส่ง</p>
                            </div>
                        </div>
                    </div>
            </div>
                <div className="tier-visual">
                    <img src="/Logo-interface/mockup-วางแผนการขนส่ง-Enterprise.png" alt="Enterprise Tier Interface" className="tier-interface-img" />
                </div>
            </div>
        </div>

        {/* 4. iBID */}
        <div id="ibid" className="tier-row reverse reveal">
            <div className="tier-container">
                <div className="tier-info">
                    <h3 className="tier-title">
                        <img src="/Logo-interface/ibid_horizontal_darkmode.png" alt="iBID" className="tier-logo-img dark-logo" style={{ height: '52px' }} />
                        <img src="/Logo-interface/ibid_horizontal_lightmode.png" alt="iBID" className="tier-logo-img light-logo" style={{ height: '52px' }} />
                    </h3>
                    <h4 className="tier-subtitle">ระบบจัดการเปิดประมูลงานโลจิสติกส์ ประมูลงานขนส่งออนไลน์สำหรับธุรกิจ</h4>
                    <div className="tier-benefits">
                        <div className="benefit">
                            <div className="icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            </div>
                            <div>
                                <h5>ศูนย์รวมการประมูลงานโลจิสติกส์</h5>
                                <p>จัดการเชิญผู้ให้บริการและเปิดประมูลงานขนส่งออนไลน์ได้ทุกเส้นทาง ครบจบในระบบเดียว</p>
                            </div>
                        </div>
                        <div className="benefit">
                            <div className="icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                            </div>
                            <div>
                                <h5>แดชบอร์ด ทันทุกข้อมูล</h5>
                                <p>ติดตามและวิเคราะห์ผลการประมูลได้ตั้งแต่ต้นจนจบอย่างโปร่งใส ผ่านแดชบอร์ดที่รองรับทุกหน่วยงาน</p>
                            </div>
                        </div>
                        <div className="benefit">
                            <div className="icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                            </div>
                            <div>
                                <h5>ลดการใช้เอกสารในการประมูลงานขนส่ง</h5>
                                <p>ยกระดับสู่การประมูลออนไลน์เต็มรูปแบบ ช่วยลดต้นทุน ลดความเสี่ยงเอกสารสูญหาย และจัดการข้อมูลได้ง่ายขึ้น</p>
                            </div>
                        </div>
                        <div className="benefit">
                            <div className="icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                            </div>
                            <div>
                                <h5>นำผลการประมูลงานขนส่งออนไลน์ไปใช้งานต่อได้</h5>
                                <p>ส่งต่อผลประมูล ข้อมูลผู้ขนส่ง และราคาน้ำมัน ไปใช้งานต่อในระบบ 360TECHX TMS ได้ทันทีแบบไร้รอยต่อ</p>
                            </div>
                        </div>
                    </div>
                </div>
               <div className="tier-visual">
                    <img src="/Logo-interface/mockup-วางแผนการขนส่ง-Enterprise.png" alt="Enterprise Tier Interface" className="tier-interface-img" />
                </div>
            </div>
        </div>

        {/* 5. 360TOP UP */}
        <div id="topup" className="tier-row reveal">
            <div className="tier-container">
                <div className="tier-info">
                    <h3 className="tier-title">
                        <img src="/Logo-interface/logo-360topup.png" alt="360TOP UP" className="tier-logo-img" style={{ height: '52px' }} />
                    </h3>
                    <h4 className="tier-subtitle">ONLINE FLEET CARD<br />ระบบคำนวณน้ำมัน และระบบซื้อน้ำมันออนไลน์</h4>
                    <div className="tier-benefits">
                        <div className="benefit">
                            <div className="icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                            </div>
                            <div>
                                <h5>ระบบคำนวณน้ำมัน และจัดการคูปองน้ำมัน ให้คนขับ</h5>
                                <p>ระบบจะทำการคำนวณน้ำมัน และสร้างเป็นคูปองส่งให้คนขับตามแต่ละงานขนส่งแบบอัตโนมัติ</p>
                            </div>
                        </div>
                        <div className="benefit">
                            <div className="icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            </div>
                            <div>
                                <h5>ระบบซื้อน้ำมันและจ่ายคูปองน้ำมันออนไลน์</h5>
                                <p>ซื้อคูปองน้ำมันออนไลน์และส่งให้คนขับรถบรรทุก เติมได้ที่ปั๊มน้ำมัน PT Station ทั่วประเทศไทย</p>
                            </div>
                        </div>
                        <div className="benefit">
                            <div className="icon-box">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                            </div>
                            <div>
                                <h5>ส่งรหัสเติมน้ำมันให้คนขับผ่านแอป 360TRUCKER</h5>
                                <p>สามารถติดตามสถานะการเติมน้ำมันได้ทันที พร้อมใบกำกับภาษี ป้องกันการทุจริตได้ 100%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tier-visual">
                    <img src="/Logo-interface/homepage-360topup.webp" alt="360TOP UP Interface" className="tier-interface-img" />
                </div>
                    </div>
        </div>
    </section>

    
    </>
  );
}
