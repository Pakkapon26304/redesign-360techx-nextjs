import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <Link href="/" className="logo-link">
                        <img src="/Logo-interface/360techx_logo_horizontal_nobg_white.png" alt="360TECHX Logo" className="logo-img dark-logo" />
                        <img src="/Logo-interface/360techx_logo_horizontal_nobg_black.png" alt="360TECHX Logo" className="logo-img light-logo" />
                    </Link>
                    <p>บริษัท ทรีซิกซ์ตี้ ซัพพลายเชน จำกัด (สำนักงานใหญ่)</p>
                    <p className="address">เลขที่ 170/72 อาคารโอเชี่ยนทาวเวอร์ 1 ชั้นที่ 24 ซอยสุขุมวิท 16 (สามมิตร) ถนนรัชดาภิเษก แขวงคลองเตย เขตคลองเตย กรุงเทพมหานคร 10110</p>
                </div>
                <div className="footer-links">
                    <div className="link-group">
                        <h4>เกี่ยวกับเรา</h4>
                        <Link href="/">หน้าแรก</Link>
                        <Link href="/about">เกี่ยวกับเรา</Link>
                        <Link href="/ibid">IBID</Link>
                        <Link href="/news">ข่าวสารและโปรโมชั่น</Link>
                    </div>
                    <div className="link-group">
                        <h4>โซลูชัน</h4>
                        <Link href="/360techx-basic">TMS Basic</Link>
                        <Link href="#tms-premium" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>TMS Premium <span style={{ fontSize: '0.6rem', background: 'var(--primary)', color: '#000', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold', textTransform: 'uppercase', display: 'inline-block' }}>Soon</span></Link>
                        <Link href="/360techx-enterprise">TMS Enterprise</Link>
                        <Link href="#topup" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>360TOP UP <span style={{ fontSize: '0.6rem', background: 'var(--primary)', color: '#000', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold', textTransform: 'uppercase', display: 'inline-block' }}>Soon</span></Link>
                        <Link href="/ibid">iBID</Link>
                    </div>
                    <div className="link-group">
                        <h4>ติดต่อ</h4>
                        <Link href="/contact">ติดต่อเรา</Link>
                        <Link href="#">แจ้งปัญหาการใช้งาน</Link>
                    </div>
                    <div className="link-group">
                        <h4>นโยบายบริษัท</h4>
                        <Link href="/privacy-policy">นโยบายความเป็นส่วนตัว</Link>
                        <Link href="/terms-and-conditions">เงื่อนไขการใช้บริการ</Link>
                        <Link href="/complaint-resolution-policy">นโยบายแก้ปัญหาข้อร้องเรียน</Link>
                        <Link href="/data-protection-policy">คำร้องขอถอนข้อมูล</Link>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 360TECHX. All rights reserved.</p>
            </div>
        </footer>
    );
}
