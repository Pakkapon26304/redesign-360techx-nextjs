import React from 'react';

export default function Redesign1SectionIbid() {
  return (
    <>
      {/* RE-DESIGN 1: "ให้เราดูแลธุรกิจและ ระบบโลจิสติกส์ของคุณ" (Card grid with photo on top) */}
      <section className="reveal" style={{ padding: '6rem 2rem 8rem 2rem', background: 'var(--bg-main)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '3rem', color: 'var(--text-main)', fontWeight: '800', lineHeight: '1.2' }}>เปิดประมูล<span className="text-gradient">งานโลจิสติกส์ออนไลน์</span></h2>
          </div>
          
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <style dangerouslySetInnerHTML={{__html: `
                .expandable-container {
                    display: flex;
                    gap: 1.5rem;
                    height: 500px;
                    width: 100%;
                }
                .expandable-card {
                    position: relative;
                    flex: 1;
                    border-radius: 24px;
                    overflow: hidden;
                    transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
                    cursor: pointer;
                    background: var(--bg-card);
                }
                .expandable-card:hover {
                    flex: 4;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.3);
                }
                
                /* DEFAULT CARD 1 TO BE EXPANDED WHEN CONTAINER IS NOT HOVERED */
                .expandable-container:not(:hover) .expandable-card:first-child {
                    flex: 4;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.3);
                }
                
                .expandable-bg {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s ease;
                }
                .expandable-card:hover .expandable-bg,
                .expandable-container:not(:hover) .expandable-card:first-child .expandable-bg {
                    transform: scale(1.05);
                }
                
                .expandable-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(15,23,42,0.8) 0%, transparent 100%);
                    transition: background 0.6s ease;
                }
                .expandable-card:hover .expandable-overlay,
                .expandable-container:not(:hover) .expandable-card:first-child .expandable-overlay {
                    background: linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.5) 50%, transparent 100%);
                }
                
                .expandable-content-wrapper {
                    position: absolute;
                    inset: 0;
                    padding: 2.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                }
                
                .expandable-header {
                    display: flex;
                    align-items: flex-start; /* ALIGN TO TOP OF TEXT */
                    gap: 1.5rem;
                }
                
                .expandable-icon-container {
                    width: 48px;
                    height: 48px;
                    min-width: 48px;
                    background: rgba(50, 255, 152, 0.15); /* Match Bento Grid Style */
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--primary);
                    transition: all 0.6s ease;
                    margin-top: -0.2rem;
                }
                
                .expandable-text-group {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
                    transition-delay: 0s;
                    width: 350px; /* Force width so it doesn't reflow horizontally */
                    pointer-events: none;
                }
                
                .expandable-card:hover .expandable-text-group,
                .expandable-container:not(:hover) .expandable-card:first-child .expandable-text-group {
                    opacity: 1;
                    transform: translateY(0);
                    transition-delay: 0.15s; 
                    pointer-events: auto;
                }
                
                .expandable-title {
                    color: #fff;
                    font-size: 1.5rem;
                    font-weight: 800;
                    margin: 0 0 0.5rem 0;
                    white-space: nowrap;
                    line-height: 1.3;
                }
                
                .expandable-desc {
                    color: rgba(255,255,255,0.85);
                    font-size: 1rem;
                    line-height: 1.6;
                    margin: 0;
                    white-space: normal;
                }
                
                /* MOBILE UX FIX: Show all cards expanded statically */
                @media (max-width: 768px) {
                    .expandable-container {
                        flex-direction: column;
                        height: auto;
                    }
                    .expandable-card {
                        height: 350px;
                        flex: none !important;
                    }
                    .expandable-card:hover {
                        flex: none !important;
                    }
                    .expandable-text-group,
                    .expandable-container:not(:hover) .expandable-card:first-child .expandable-text-group {
                        opacity: 1 !important;
                        transform: translateY(0) !important;
                        width: 100% !important;
                    }
                    .expandable-desc {
                        min-width: unset;
                    }
                    .expandable-overlay,
                    .expandable-container:not(:hover) .expandable-card:first-child .expandable-overlay {
                        background: linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.4) 70%, transparent 100%) !important;
                    }
                }
              `}} />

              <div className="expandable-container">
                  {/* Card 1 */}
                  <div className="expandable-card">
                      <img src="/Logo-interface/CONVERGENT_PROCESSES.jpeg" className="expandable-bg" alt="ประหยัดต้นทุน" />
                      <div className="expandable-overlay"></div>
                      <div className="expandable-content-wrapper">
                          <div className="expandable-header">
                              <div className="expandable-icon-container">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                              </div>
                              <div className="expandable-text-group">
                                  <h3 className="expandable-title">ประหยัดต้นทุน และได้ราคาที่ดี</h3>
                                  <p className="expandable-desc">ระบบประมูลงานขนส่งออนไลน์ทำให้ผู้ประกอบการได้รับราคาที่ดีที่สุด ทำให้ประหยัดต้นทุนของสินค้า</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  {/* Card 2 */}
                  <div className="expandable-card">
                      <img src="/Logo-interface/CENTRALIZED_ECOSYSTEM.jpeg" className="expandable-bg" alt="ประหยัดเวลา" />
                      <div className="expandable-overlay"></div>
                      <div className="expandable-content-wrapper">
                          <div className="expandable-header">
                              <div className="expandable-icon-container">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                              </div>
                              <div className="expandable-text-group">
                                  <h3 className="expandable-title">ประหยัดเวลา และโปร่งใส</h3>
                                  <p className="expandable-desc">สามารถทราบราคาประมูลงานขนส่งสินค้าได้อย่างรวดเร็ว ตรวจสอบได้ และไม่ต้องจัดการเกี่ยวกับเอกสาร</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  {/* Card 3 */}
                  <div className="expandable-card">
                      <img src="/Logo-interface/support-360techx-enterprise.jpeg" className="expandable-bg" alt="จัดหาผู้ให้บริการ" />
                      <div className="expandable-overlay"></div>
                      <div className="expandable-content-wrapper">
                          <div className="expandable-header">
                              <div className="expandable-icon-container">
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                              </div>
                              <div className="expandable-text-group">
                                  <h3 className="expandable-title">จัดหาผู้ขนส่งที่มีประสิทธิภาพ</h3>
                                  <p className="expandable-desc">iBID มีเกณฑ์คัดกรองผู้ให้บริการขนส่ง เลือกผู้มีประสบการณ์ ตรงตามมาตรฐาน และเอกสารถูกต้อง</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      
    </>
  );
}
