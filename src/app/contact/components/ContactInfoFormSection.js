import React from 'react';

export default function ContactInfoFormSection() {
  return (
    <section className="tms-tiers" style={{ paddingTop: '5rem', paddingBottom: '0rem' }}>
        <div className="tier-row reveal">
            <div className="tier-container">
                {/* Left: Contact Info */}
                <div className="tier-info">
                    <h3 className="tier-title" style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>ช่องทาง<span className="text-gradient">การติดต่อ</span></h3>
                    <h4 className="tier-subtitle" style={{ marginBottom: '2rem' }}>เราพร้อมดูแลและให้คำปรึกษาตลอดเวลา</h4>
                    
                    <div className="tier-benefits">
                        <div className="benefit">
                            <span className="check-icon" style={{ border: '1px solid var(--glass-border)', borderRadius: '8px', background: 'transparent', color: 'var(--primary-color)' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></span>
                            <div>
                                <p style={{ fontSize: '1.2rem', fontWeight: '600' }}>+66 (0) 99 261 1699</p>
                            </div>
                        </div>
                        <div className="benefit">
                            <span className="check-icon" style={{ border: '1px solid var(--glass-border)', borderRadius: '8px', background: 'transparent', color: 'var(--primary-color)' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></span>
                            <div>
                                <p style={{ fontSize: '1.2rem', fontWeight: '600' }}>info@360techx.co</p>
                            </div>
                        </div>
                        <div className="benefit" style={{ alignItems: 'flex-start' }}>
                            <span className="check-icon" style={{ border: '1px solid var(--glass-border)', borderRadius: '8px', background: 'transparent', color: 'var(--primary-color)', marginTop: '5px' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></span>
                            <div>
                                <p style={{ lineHeight: '1.6', fontSize: '1.1rem', opacity: '0.9' }}>
                                    บริษัท ทรีซิกซ์ตี้ เทคเอ็กซ์ จำกัด<br />
                                    2170 ชั้น 8 อาคารกรุงเทพทาวเวอร์<br />
                                    ถนนเพชรบุรีตัดใหม่ แขวงบางกะปิ<br />
                                    เขตห้วยขวาง กรุงเทพฯ 10310
                                </p>
                            </div>
                        </div>
                        
                        <div className="benefit" style={{ marginTop: '1rem', borderTop: '1px solid var(--glass-border)', paddingTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
                            <h5 style={{ fontSize: '1.2rem' }}>ติดตามเราได้ที่</h5>
                            <div className="social-icons" style={{ display: 'flex', gap: '1rem' }}>
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
                </div>
                
                {/* Right: Form */}
                <div className="tier-visual contact-form-wrapper">
                    <div style={{ background: '#ffffff', border: '1px solid var(--glass-border)', borderRadius: '20px', padding: '1.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                        <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <input type="text" placeholder="ชื่อบริษัท *" required className="contact-input" style={{ gridColumn: 'span 2' }} />
                            <input type="text" placeholder="ชื่อ-นามสกุล ผู้ติดต่อ *" required className="contact-input" />
                            <input type="text" placeholder="ตำแหน่ง *" required className="contact-input" />
                            <input type="tel" placeholder="เบอร์โทรศัพท์ผู้ติดต่อ *" required className="contact-input" />
                            <input type="email" placeholder="อีเมล *" required className="contact-input" />
                            
                            <select className="contact-input" required style={{ gridColumn: 'span 2' }} defaultValue="">
                                <option value="" disabled>ประเภทธุรกิจของคุณ *</option>
                                <option value="shipper">เจ้าของสินค้า (Shipper)</option>
                                <option value="carrier">ผู้ให้บริการขนส่ง (Carrier)</option>
                                <option value="other">อื่นๆ</option>
                            </select>
                            
                            <select className="contact-input" required style={{ gridColumn: 'span 2' }} defaultValue="">
                                <option value="" disabled>ผลิตภัณฑ์ที่สนใจ *</option>
                                <option value="basic">360TechX Basic</option>
                                <option value="premium">360TechX Premium</option>
                                <option value="enterprise">360TechX Enterprise</option>
                                <option value="ibid">iBID</option>
                                <option value="topup">360TOP UP</option>
                            </select>
                            
                            <select className="contact-input" required defaultValue="">
                                <option value="" disabled>จำนวนเที่ยวการขนส่ง *</option>
                                <option value="1-50">1 - 50 เที่ยว</option>
                                <option value="51-200">51 - 200 เที่ยว</option>
                                <option value="201-500">201 - 500 เที่ยว</option>
                                <option value="500+">500 เที่ยวขึ้นไป</option>
                            </select>
                            
                            <select className="contact-input" required defaultValue="">
                                <option value="" disabled>ช่วงเวลาที่ติดต่อกลับ *</option>
                                <option value="morning">ช่วงเช้า (09:00 - 12:00)</option>
                                <option value="afternoon">ช่วงบ่าย (13:00 - 17:00)</option>
                            </select>
                            
                            <button type="button" className="btn-primary" style={{ gridColumn: 'span 2', marginTop: '1rem', border: 'none', padding: '1rem', fontSize: '1.1rem', borderRadius: '8px', cursor: 'pointer', fontFamily: '"Kanit", sans-serif' }}>ส่งข้อมูล</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
