import React from 'react';

export default function ZPatternBenefitsSectionIbid() {
  return (
    <>
      {/* RE-DESIGN 2: "สิ่งที่ลูกค้าจะได้รับ" (Z-Pattern Layout with Widgets) */}
      <section className="reveal" style={{ padding: '6rem 2rem', background: 'var(--bg-main)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              
              <style dangerouslySetInnerHTML={{__html: `
                .z-pattern-row {
                    display: flex;
                    align-items: center;
                    gap: 6rem;
                    margin-bottom: 8rem;
                }
                .z-pattern-row:last-child {
                    margin-bottom: 0;
                }
                .z-pattern-row:nth-child(even) {
                    flex-direction: row-reverse;
                }
                .z-pattern-text {
                    flex: 1;
                }
                .z-pattern-img-wrapper {
                    flex: 1;
                    position: relative;
                }
                .z-pattern-main-img {
                    width: 100%;
                    aspect-ratio: 1 / 1;
                    object-fit: cover;
                    border-radius: 24px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                }
                .floating-card-tr {
                    position: absolute;
                    top: 2rem;
                    right: -2rem;
                    background: var(--bg-card);
                    padding: 1.5rem;
                    border-radius: 12px;
                    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
                    z-index: 10;
                    border: 1px solid var(--border-color);
                }
                .floating-card-bl {
                    position: absolute;
                    bottom: 2rem;
                    left: -2rem;
                    background: var(--bg-card);
                    padding: 1.5rem;
                    border-radius: 12px;
                    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
                    z-index: 10;
                    border: 1px solid var(--border-color);
                }
                
                @media (max-width: 992px) {
                    .z-pattern-row, .z-pattern-row:nth-child(even) {
                        flex-direction: column-reverse; /* Text on bottom, image on top */
                        gap: 3rem;
                        margin-bottom: 5rem;
                    }
                    .floating-card-tr, .floating-card-bl {
                        display: none; /* Hide floating widgets on mobile for clean look */
                    }
                }
              `}} />

              {/* Carrier Section */}
              <div className="z-pattern-row">
                  <div className="z-pattern-text">
                      <h2 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '1.5rem', lineHeight: '1.2' }}>สิ่งที่ <span className="text-gradient">Carrier</span> จะได้รับจาก iBID</h2>
                      <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: '1.8' }}>
                          วางแผนล่วงหน้าได้ดีกว่าเดิมสำหรับการเสนอเส้นทาง และราคาประมูล รับฟีดแบกจากระบบได้ทันทีที่ใส่ราคาประมูล และปรับปรุงราคาได้จนกว่าจะหมดเวลา
                      </p>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                          <div>
                              <div style={{ color: '#3b82f6', marginBottom: '1rem', background: 'rgba(59, 130, 246, 0.1)', width: '48px', height: '48px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                              </div>
                              <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--text-main)', marginBottom: '0.5rem' }}>ลดเวลาประมูล</h4>
                              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>ลดเวลาในการประมูลงานขนส่ง และช่วยลดค่าใช้จ่าย</p>
                          </div>
                          <div>
                              <div style={{ color: '#10b981', marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.1)', width: '48px', height: '48px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                              </div>
                              <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--text-main)', marginBottom: '0.5rem' }}>ลดงานเอกสาร</h4>
                              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>ลดกระบวนการเอกสารจำนวนมากในการประมูล</p>
                          </div>
                      </div>
                  </div>
                  <div className="z-pattern-img-wrapper">
                      <img src="/Logo-interface/support-360techx-enterprise.jpeg" className="z-pattern-main-img" alt="Carrier" />
                      
                      {/* Top Right Widget */}
                      <div className="floating-card-tr">
                          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.25rem' }}>
                              <span style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-main)', lineHeight: '1' }}>100%</span>
                              <span style={{ color: '#10b981' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="18 15 12 9 6 15"></polyline></svg></span>
                          </div>
                          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '600' }}>Transparency</div>
                      </div>

                      {/* Bottom Left Widget */}
                      <div className="floating-card-bl" style={{ width: '220px' }}>
                          <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--text-main)', marginBottom: '1rem' }}>Bidding Status</h4>
                          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', alignItems: 'center' }}>
                              <div style={{ width: '20px', height: '20px', borderRadius: '4px', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                              <div style={{ height: '8px', background: 'var(--border-color)', flex: 1, borderRadius: '4px' }}></div>
                          </div>
                          <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', alignItems: 'center' }}>
                              <div style={{ width: '20px', height: '20px', borderRadius: '4px', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                              <div style={{ height: '8px', background: 'var(--border-color)', width: '60%', borderRadius: '4px' }}></div>
                          </div>
                          <div style={{ height: '24px', background: 'var(--text-main)', borderRadius: '6px', width: '40%' }}></div>
                      </div>
                  </div>
              </div>

              {/* Shipper Section */}
              <div className="z-pattern-row">
                  <div className="z-pattern-text">
                      <h2 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '1.5rem', lineHeight: '1.2' }}>สิ่งที่ <span className="text-gradient">Shippers</span> จะได้รับจาก iBID</h2>
                      <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: '1.8' }}>
                          วางแผนล่วงหน้าได้ดีกว่าเดิมสำหรับการเสนอเส้นทาง และราคาประมูล พร้อมเปรียบเทียบ เจรจา และจัดการผลการประมูลได้ทันที พร้อมระบบ Executive Summary Report
                      </p>
                      <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', listStyle: 'none', padding: 0 }}>
                          <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '1.05rem', color: 'var(--text-main)', fontWeight: '600' }}>
                              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--text-main)' }}></div>
                              ลดอัตราความผิดพลาด
                          </li>
                          <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '1.05rem', color: 'var(--text-main)', fontWeight: '600' }}>
                              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--text-main)' }}></div>
                              ลดเวลาในการประมูล
                          </li>
                          <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '1.05rem', color: 'var(--text-main)', fontWeight: '600' }}>
                              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--text-main)' }}></div>
                              ลดงานเอกสาร 100%
                          </li>
                          <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '1.05rem', color: 'var(--text-main)', fontWeight: '600' }}>
                              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--text-main)' }}></div>
                              เปรียบเทียบราคาได้ทันที
                          </li>
                      </ul>
                  </div>
                  <div className="z-pattern-img-wrapper">
                      <img src="/Logo-interface/BG-headline-Feature.jpeg" className="z-pattern-main-img" alt="Shipper" />
                      
                      {/* Top Right Widget */}
                      <div className="floating-card-tr" style={{ right: 'auto', left: '-2rem', top: '2rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
                              </div>
                              <span style={{ fontSize: '0.85rem', color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '4px 8px', borderRadius: '12px', fontWeight: 'bold' }}>+15% ↑</span>
                          </div>
                          <div style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--text-main)' }}>1,200+</div>
                          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Total Shippers</div>
                      </div>

                      {/* Bottom Left Widget */}
                      <div className="floating-card-bl" style={{ bottom: '2rem', left: 'auto', right: '-2rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--primary)', color: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                              </div>
                              <span style={{ fontSize: '0.85rem', color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)', padding: '4px 8px', borderRadius: '12px', fontWeight: 'bold' }}>-25% ↓</span>
                          </div>
                          <div style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--text-main)' }}>-15% Cost</div>
                          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Average Savings</div>
                      </div>
                  </div>
              </div>

              {/* Customer Success Section */}
              <div className="z-pattern-row">
                  <div className="z-pattern-text">
                      <img src="/Logo-customer-ibid/TRR-LIN-logo.png" alt="TRR-LIN Logo" style={{ height: '60px', marginBottom: '1.5rem', objectFit: 'contain' }} />
                      <h2 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '1.5rem', lineHeight: '1.2' }}><span className="text-gradient">ความสำเร็จ</span>ของลูกค้า</h2>
                      <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: '1.8' }}>
                          วาระการประมูลรถขนส่งน้ำตาลในประเทศ ประจำวันที่ 15 ต.ค. 2020 ประสบความสำเร็จอย่างสูงด้วยการนำระบบออนไลน์ <strong className="text-gradient">Ibid</strong> มาใช้เป็นครั้งแรก สามารถดำเนินการเสร็จสิ้น<strong className="text-gradient">ใน 1 วัน</strong> บริหารงานขนส่ง <strong className="text-gradient">15 โปรเจกต์</strong> <strong className="text-gradient">110 เส้นทาง</strong>ได้อย่างมีประสิทธิภาพ และประหยัดงบประมาณค่าขนส่งได้ถึง <strong className="text-gradient">10.17%</strong>
                      </p>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                      </div>
                  </div>
                  <div className="z-pattern-img-wrapper">
                      <img src="/tms-picture/success-case-ibid.jpg" className="z-pattern-main-img" alt="Customer Success" />
                      
                      {/* Top Right Widget */}
                      <div className="floating-card-tr">
                          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.25rem' }}>
                              <span style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-main)', lineHeight: '1' }}>110+</span>
                              <span style={{ color: '#10b981' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="18 15 12 9 6 15"></polyline></svg></span>
                          </div>
                          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '600' }}>Success Projects</div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      
    </>
  );
}
