import React from 'react';

export default function CoreFeaturesSectionIbid() {
const features = [
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>, tag: 'Network', headline: 'เข้าถึงเครือข่ายผู้ขนส่งขนาดใหญ่', highlight: 'Digital Trucking Network', desc: 'ระบบ Crowdsource ช่วยให้คุณค้นหาผู้ให้บริการขนส่งที่มีคุณภาพและโปร่งใสได้อย่างง่ายดาย' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>, tag: 'Analytics', headline: 'มอนิเตอร์งานประมูล', highlight: 'วิเคราะห์ข้อมูล Real-time', desc: 'ติดตามความเคลื่อนไหวและวิเคราะห์ผลลัพธ์ของงานประมูลได้ครบทุกมิติอย่างแม่นยำ' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>, tag: 'Flexible', headline: 'รองรับทุกรูปแบบ', highlight: 'เต็มเที่ยว / Multi-drops', desc: 'ปรับแต่งเงื่อนไขการประมูลออนไลน์ให้เข้ากับทุกความต้องการขนส่งพิเศษของธุรกิจคุณ' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>, tag: 'Scalable', headline: 'รองรับสเกลงานใหญ่', highlight: '100+ ผู้ขนส่งต่อโปรเจกต์', desc: 'ระบบทำงานเสถียร รองรับผู้ร่วมประมูลจำนวนมากได้อย่างมีประสิทธิภาพและปลอดภัยสูงสุด' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>, tag: 'Automation', headline: 'จัดอันดับผู้ชนะ', highlight: 'Smart Ranking System', desc: 'คัดกรองและจัดอันดับผู้ให้บริการที่เสนอราคาคุ้มค่าที่สุดให้คุณพิจารณาตัดสินใจทันที' },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>, tag: 'Evaluation', headline: 'ประเมินองค์ประกอบหลากหลาย', highlight: 'พิจารณามากกว่าแค่ราคา', desc: 'รีวิวผู้ขนส่งด้วยเกณฑ์มาตรฐานอื่นๆ ที่สะท้อนถึงความเป็นมืออาชีพในการทำงานจริง' },
  ];

  return (
    <>
      {/* 2. Core Features Section */}
      <section className="reveal" style={{ padding: '5rem 2rem', background: 'var(--bg-main)' }}>
          <style dangerouslySetInnerHTML={{__html: `
            /* Responsive Bento Grid: Mobile = 1 col, Desktop = 4 cols */
            .bento-grid-container {
                display: grid;
                grid-template-columns: 1fr;
                gap: 1.5rem;
                max-width: 1200px;
                margin: 0 auto;
            }
            @media (min-width: 1024px) {
                .bento-grid-container {
                    grid-template-columns: repeat(4, 1fr);
                }
                .bento-col-span-2 {
                    grid-column: span 2;
                }
                .bento-col-span-1 {
                    grid-column: span 1;
                }
            }
          `}} />
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
             <h2 style={{ fontSize: '3rem', color: 'var(--text-main)', fontWeight: '800', lineHeight: '1.2' }}>ระบบประมูลงานโลจิสติกส์<span className="text-gradient">ออนไลน์</span></h2>
             <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '800px', margin: '1rem auto 0' }}>ทำให้ทุกการประมูลการขนส่งง่ายขึ้น โปร่งใส และจัดการได้ด้วยต้นทุนต่ำ</p>
          </div>

          {/* Interface Showcase Image */}
          <div className="reveal" style={{ maxWidth: '1200px', margin: '0 auto 1.5rem auto', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
              <img src="/Logo-interface/วางแผนการขนส่ง.png" alt="iBID Interface" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>

          <div className="bento-grid-container">
              {features.map((feature, index) => {
                  // Index 0 and 5 are wide on Desktop
                  const isWide = index === 0 || index === 5;
                  const colClass = isWide ? 'bento-col-span-2' : 'bento-col-span-1';

                  return (
                      <div key={index} className={`glass-card hover-lift ${colClass}`} style={{ display: 'flex', flexDirection: 'column', padding: '2.5rem', justifyContent: 'flex-start', minHeight: '280px', position: 'relative', overflow: 'hidden' }}>
                          
                          {/* Background Image for Card 1 (Network) */}
                          {index === 0 && (
                              <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                                  <img src="/Logo-interface/LOGISTICS DIGITAL_COMMUNITY.jpeg" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }} alt="Background" />
                                  {/* Fade 100% solid on the left half, transparent on the right */}
                                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--bg-card) 0%, var(--bg-card) 40%, transparent 100%)' }}></div>
                              </div>
                          )}

                          {/* Content Wrapper */}
                          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                              
                              {/* Uniform Icon Box */}
                              <div className="icon-box" style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', background: index === 0 ? 'rgba(50, 255, 152, 0.15)' : '' }}>
                                  {React.cloneElement(feature.icon, { style: { width: '24px', height: '24px', strokeWidth: '2.5' } })}
                              </div>
                              
                              {/* Text Hierarchy: Headline is Gradient, Highlight is normal text */}
                              <h3 className="text-gradient" style={{ fontSize: '1.4rem', marginBottom: '0.25rem', fontWeight: '800', lineHeight: '1.3' }}>
                                  {feature.headline}
                              </h3>
                              
                              <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '1rem', fontWeight: '600', letterSpacing: '0.5px', minHeight: '1.5rem' }}>
                                  {feature.highlight}
                              </h4>
                              
                              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0, flex: 1, maxWidth: isWide ? '85%' : '100%' }}>
                                  {feature.desc}
                              </p>
                          </div>
                      </div>
                  );
              })}
          </div>
      </section>

      
    </>
  );
}
