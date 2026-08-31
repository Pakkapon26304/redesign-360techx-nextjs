import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer" style={{ borderTop: '1px solid var(--border-color)', padding: '5rem 0 2rem 0', background: 'var(--bg-footer)' }}>
            <div className="nav-container footer-main-grid">
                {/* Column 1: Brand & Subscribe */}
                <div className="footer-brand" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <Link href="/" className="logo-link" style={{ display: 'inline-block' }}>
                        <img src="/Logo-interface/360techx_logo_horizontal_nobg_white.png" alt="360TECHX Logo" className="logo-img dark-logo" style={{ height: '50px' }} />
                        <img src="/Logo-interface/360techx_logo_horizontal_nobg_black.png" alt="360TECHX Logo" className="logo-img light-logo" style={{ height: '50px' }} />
                    </Link>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                        บริษัท ทรีซิกซ์ตี้ เทคเอ็กซ์ จำกัด (สำนักงานใหญ่)<br/>
                        2170 ชั้น8 อาคารกรุงเทพทาวเวอร์ ถนนเพชรบุรีตัดใหม่ แขวงบางกะปิ เขตห้วยขวาง กรุงเทพฯ 10310
                    </p>
                    <div style={{ display: 'flex', background: 'var(--bg-card)', borderRadius: '30px', padding: '4px', border: '1px solid var(--border-color)', marginTop: '0.5rem', alignItems: 'center', maxWidth: '400px' }}>
                        <input type="email" placeholder="Email address" style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', padding: '0.8rem 1.2rem', outline: 'none', flex: 1, width: '100%' }} />
                        <button className="btn btn-primary" style={{ padding: '0.7rem 1.5rem', borderRadius: '30px', border: 'none', fontWeight: '600' }}>Subscribe</button>
                    </div>
                </div>

                {/* Column 2: Pages */}
                <div className="link-group" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Pages</h4>
                    <Link href="/about" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: '0.3s' }}>เกี่ยวกับเรา</Link>
                    <Link href="/news" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: '0.3s' }}>ข่าวสารและโปรโมชั่น</Link>
                    <Link href="/privacy-policy" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: '0.3s' }}>นโยบายความเป็นส่วนตัว</Link>
                    <Link href="/terms-and-conditions" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: '0.3s' }}>เงื่อนไขการใช้บริการ</Link>
                    <Link href="/complaint-resolution-policy" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: '0.3s' }}>นโยบายแก้ปัญหาข้อร้องเรียน</Link>
                </div>

                {/* Column 3: Services */}
                <div className="link-group" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Services</h4>
                    <Link href="/360techx-basic" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: '0.3s' }}>TMS Basic</Link>
                    <Link href="/360techx-enterprise" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: '0.3s' }}>TMS Enterprise</Link>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Link href="#tms-premium" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: '0.3s' }}>TMS Premium</Link>
                        <span style={{ fontSize: '0.6rem', background: 'var(--primary)', color: '#000', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold', textTransform: 'uppercase' }}>Soon</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Link href="#topup" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: '0.3s' }}>360TOP UP</Link>
                        <span style={{ fontSize: '0.6rem', background: 'var(--primary)', color: '#000', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold', textTransform: 'uppercase' }}>Soon</span>
                    </div>
                    <Link href="/ibid" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: '0.3s' }}>iBID</Link>
                </div>

                {/* Column 4: Contact */}
                <div className="footer-contact" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Contact</h4>
                    <p style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> 
                        <a href="mailto:info@360techx.co" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>info@360techx.co</a>
                    </p>
                    <p style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        <a href="tel:0992611699" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>+66 (0)99 261 1699</a>
                    </p>
                    <div className="social-icons" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <a href="https://www.facebook.com/360techx" target="_blank" rel="noopener noreferrer" style={{ width: '35px', height: '35px', borderRadius: '50%', background: 'var(--bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', transition: '0.3s', border: '1px solid var(--border-color)' }}>
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/chuchchon/" target="_blank" rel="noopener noreferrer" style={{ width: '35px', height: '35px', borderRadius: '50%', background: 'var(--bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', transition: '0.3s', border: '1px solid var(--border-color)' }}>
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <a href="https://www.youtube.com/@360truck3" target="_blank" rel="noopener noreferrer" style={{ width: '35px', height: '35px', borderRadius: '50%', background: 'var(--bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', transition: '0.3s', border: '1px solid var(--border-color)' }}>
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                        </a>
                        <a href="#" style={{ width: '35px', height: '35px', borderRadius: '50%', background: 'var(--bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', transition: '0.3s', border: '1px solid var(--border-color)' }}>
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom" style={{ borderTop: '1px solid var(--border-color)', marginTop: '4rem', paddingTop: '2rem', textAlign: 'center' }}>
                <div className="nav-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>COPYRIGHT &copy; 2021 THE 360TECHX CO.,LTD. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </footer>
    );
}
