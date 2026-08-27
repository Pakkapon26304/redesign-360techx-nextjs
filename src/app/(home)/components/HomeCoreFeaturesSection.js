import React from 'react';

export default function HomeCoreFeaturesSection() {
  return (
    <>
      {/* Core Features Section */}
    <section id="features" className="features reveal">
        <div className="features-container">

            <div className="features-grid">
                {/* Feature 1 */}
                <div className="feature-card glass-card hover-lift">
                    <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                    </div>
                    <h3>SHIPMENT MANAGEMENT SYSTEM</h3>
                    <h4>ระบบบริการจัดการงานขนส่ง</h4>
                    <p>จัดการออเดอร์และจ่ายงานขนส่ง (FTL/LTL) ได้หลากหลายรูปแบบ พร้อมแอปคนขับสำหรับอัปเดตสถานะแบบเรียลไทม์</p>
                </div>
                {/* Feature 2 */}
                <div className="feature-card glass-card hover-lift">
                    <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </div>
                    <h3>VRP (VERTICAL ROUTING PLANNING)</h3>
                    <h4>ระบบวางแผนเส้นทางการขนส่ง</h4>
                    <p>วิเคราะห์และวางแผนเส้นทางจัดรถขนส่งอัตโนมัติ เพื่อประสิทธิภาพสูงสุดและรองรับการขนส่งแบบ Milk-run</p>
                </div>
                {/* Feature 3 */}
                <div className="feature-card glass-card hover-lift">
                    <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                    </div>
                    <h3>LOADING OPTIMIZATION</h3>
                    <h4>ระบบบริหารการขึ้น-ลงสินค้า</h4>
                    <ul className="feature-list">
                        <li>วางแผนโหลดและเรียงสินค้าของรถขนส่ง</li>
                        <li>จัดตารางเวลาและสถานที่ขึ้น-ลงแต่ละจุด</li>
                    </ul>
                </div>
                {/* Feature 4 */}
                <div className="feature-card glass-card hover-lift">
                    <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <h3>MULTI GPS MONITORING</h3>
                    <h4>รองรับการเชื่อมต่อ GPS มากกว่า 20 แบรนด์</h4>
                    <p>รวมศูนย์ข้อมูล GPS จากหลายแบรนด์ไว้ในจอเดียว เพื่อติดตามสถานะการขนส่งได้รวดเร็วและแม่นยำ</p>
                </div>
                {/* Feature 5 */}
                <div className="feature-card glass-card hover-lift">
                    <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                    </div>
                    <h3>OVERVIEW YOUR BUSINESS IN 360°</h3>
                    <h4>มองเห็นภาพรวมธุรกิจแบบ 360 องศา</h4>
                    <p>วิเคราะห์ข้อมูลขนส่ง รถ และคนขับเชิงลึกแบบ 360 องศา พร้อมรองรับการเชื่อมต่อข้อมูลจากระบบภายนอก</p>
                </div>
                {/* Feature 6 */}
                <div className="feature-card glass-card hover-lift">
                    <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                    </div>
                    <h3>ONLINE FLEET CARD</h3>
                    <h4>ระบบคำนวณและซื้อน้ำมันออนไลน์</h4>
                    <p>คำนวณค่าน้ำมันอัตโนมัติ พร้อมระบบซื้อและจ่ายคูปองน้ำมันออนไลน์ให้คนขับได้ทันที ปลอดภัย</p>
                </div>
                {/* Feature 7 */}
                <div className="feature-card glass-card hover-lift">
                    <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    </div>
                    <h3>IMPORT/EXPORT TO EXCEL</h3>
                    <h4>รองรับการนำเข้าและส่งออกข้อมูล</h4>
                    <p>จัดการข้อมูลปริมาณมากผ่าน Excel ได้อย่างรวดเร็ว ช่วยลดเวลาการสร้างออเดอร์และทำรายงาน</p>
                </div>
                {/* Feature 8 */}
                <div className="feature-card glass-card hover-lift">
                    <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                    </div>
                    <h3>TRUCK & DRIVER MANAGEMENT</h3>
                    <h4>ระบบจัดการรถบรรทุกและคนขับ</h4>
                    <p>ศูนย์กลางจัดการประวัติ แจ้งเตือนซ่อมบำรุง และจัดตารางงานคนขับ เพื่อให้กองรถพร้อมใช้งานเสมอ</p>
                </div>
                {/* Feature 9 */}
                <div className="feature-card glass-card hover-lift">
                    <div className="icon-box">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                    </div>
                    <h3>ERP & WMS INTEGRATION</h3>
                    <h4>รองรับระบบ ERP และ WMS</h4>
                    <p>เชื่อมต่อระบบ ERP และ WMS ชั้นนำอย่างไร้รอยต่อ เพื่อเพิ่มประสิทธิภาพการตัดสินใจทางธุรกิจ</p>
                </div>
            </div>
        </div>
    </section>

    
    </>
  );
}
