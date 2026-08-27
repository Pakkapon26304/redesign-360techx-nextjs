import React from 'react';

export default function HomeTimelineSection() {
  return (
    <>
      {/* Timeline Section */}
    <section className="timeline-section reveal">
        <div className="section-header text-center">
            <h2><span className="text-gradient">360TECHX</span> LAUNCHPAD</h2>
            <p>เส้นทางการพัฒนาและอัปเดตฟีเจอร์ต่างๆ ของระบบ</p>
        </div>
        
        <div className="timeline-container">
            {/* Item 1 */}
            <div className="timeline-item reveal">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-card hover-lift">
                    <span className="timeline-tag">ใช้งานแล้ว</span>
                    <h3>IBID</h3>
                    <h4>Online Freight Bidding Platform</h4>
                    <p>ระบบจัดการเปิดประมูลขนส่งออนไลน์สำหรับธุรกิจ ทำให้ทุกการประมูลของการขนส่งง่ายขึ้น โปร่งใส และจัดการได้ด้วยต้นทุนต่ำ</p>
                </div>
            </div>
            
            {/* Item 2 */}
            <div className="timeline-item reveal delay-1">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-card hover-lift">
                    <span className="timeline-tag">ใช้งานแล้ว</span>
                    <h3>360TECHX TMS – X1</h3>
                    <h4>Transport Booking Management System</h4>
                    <p>ระบบจัดการการขนส่ง ฟีเจอร์ขั้นพื้นฐาน สำหรับจัดการออเดอร์การขนส่ง</p>
                </div>
            </div>

            {/* Item 3 */}
            <div className="timeline-item reveal">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-card hover-lift">
                    <span className="timeline-tag">ใช้งานแล้ว</span>
                    <h3>360TECHX TMS – X2</h3>
                    <h4>Fleet Monitoring</h4>
                    <p>ระบบติดตามและแจ้งเตือนสถานะการขนส่ง เชื่อมต่อระบบ TMS เข้ากับตำแหน่งของรถขนส่ง</p>
                </div>
            </div>

            {/* Item 4 */}
            <div className="timeline-item reveal delay-1">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-card hover-lift">
                    <span className="timeline-tag">ใช้งานแล้ว</span>
                    <h3>360TECHX TMS – X3</h3>
                    <h4>Planning and Scheduling</h4>
                    <p>ระบบวางแผนและแนะนำการจัดรถขนส่งแบบอัตโนมัติ ด้วยอัลกอลิธึมอัจฉริยะจาก 360BRAIN™</p>
                </div>
            </div>

            {/* Item 5 */}
            <div className="timeline-item reveal">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-card hover-lift">
                    <span className="timeline-tag">ใช้งานแล้ว</span>
                    <h3>360TECHX TMS – X4</h3>
                    <h4>Settlement</h4>
                    <p>ระบบจัดการค่าใช้จ่ายสำหรับการขนส่ง เพิ่มประสิทธิภาพในการบริหารต้นทุนขนส่งให้ดียิ่งขึ้น</p>
                </div>
            </div>

            {/* Item 6 */}
            <div className="timeline-item reveal delay-1">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-card hover-lift">
                    <span className="timeline-tag">ใช้งานแล้ว</span>
                    <h3>360TECHX TMS – X5</h3>
                    <h4>ระบบคำนวณน้ำมัน และ ระบบซื้อน้ำมันออนไลน์</h4>
                    <p>จัดการค่าน้ำมันใน booking ได้ทันทีตามสูตรการคำนวณของคุณ พร้อมระบบซื้อน้ำมันออนไลน์ที่พนักงานสามารถบริหารจัดการให้คนขับได้ทันที</p>
                </div>
            </div>
        </div>
    </section>

    
    </>
  );
}
