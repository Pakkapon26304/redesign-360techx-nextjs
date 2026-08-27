import React from 'react';

export default function FaqSectionIbid() {
  return (
    <>
      {/* FAQ Section */}
      <section className="faq-section reveal" style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 2rem 8rem 2rem' }}>
          <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-main)' }}>คำถามที่<span className="text-gradient">พบบ่อย</span> (FAQ)</h2>
          </div>
          
          <div className="faq-container">
              <details className="faq-item">
                  <summary className="faq-question">
                      <svg className="faq-icon" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                      <span>TMS ของ 360TECHX แตกต่างจาก TMS ในตลาดอย่างไรบ้าง ทำไมถึงควรใช้</span>
                  </summary>
                  <div className="faq-answer">
                      <p>เราได้นำประสบการณ์การบริหารการขนส่งบน Platform 360TRUCK มาออกแบบ<a href="https://www.360techx.co/tms/" target="_blank" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>ระบบ TMS</a> ของ 360TECHX โดยมีจุดเด่น คือ รองรับการใช้งานร่วมกับ 360TRUCK, ใช้งานง่าย และสามารถใช้งาน 360TRUCKER แอปพลิเคชัน สำหรับคนขับรถใช้รายงานสถานะขนส่งได้ไม่จำกัด</p>
                  </div>
              </details>
              
              <details className="faq-item">
                  <summary className="faq-question">
                      <svg className="faq-icon" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                      <span>การใช้งาน TECHX TMS จำเป็นต้องมีจำนวนการขนส่งขั้นต่ำ หรือถ้าขนของไม่เต็มคันรถ สามารถใช้งานได้หรือไม่</span>
                  </summary>
                  <div className="faq-answer">
                      <p>สามารถใช้ได้ทั้งแบบขนเต็มคัน และขนไม่เต็มคันรถ โดยสามารถเริ่มใช้งานได้ฟรีโดยไม่มีการใช้งานขั้นต่ำ</p>
                  </div>
              </details>
              
              <details className="faq-item">
                  <summary className="faq-question">
                      <svg className="faq-icon" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                      <span>TECHX TMS สามารถจัดการงานขนส่งได้สูงสุดกี่งาน และในกรณีที่มีการขนส่งเป็นประจำ สามารถสร้างงานขนส่งใหม่จากประวัติการวิ่งงานผ่านระบบ ได้หรือไม่</span>
                  </summary>
                  <div className="faq-answer">
                      <p>สามารถใช้งานขนส่งได้สูงสุด 100 งานต่อเดือนได้ฟรี โดยสามารถซื้อจำนวนงานเพิ่มเติมได้ และสามารถบันทึกงานประจำและสร้างงานจากงานประจำได้</p>
                  </div>
              </details>
              
              <details className="faq-item">
                  <summary className="faq-question">
                      <svg className="faq-icon" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                      <span>อยากใช้งาน 360TECHX TMS จะต้องทำอย่างไรบ้าง</span>
                  </summary>
                  <div className="faq-answer">
                      <p>สามารถทดลองใช้งานได้ฟรี ผ่านทาง <a href="https://tms.360techx.co/signup" target="_blank" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>https://tms.360techx.co/signup</a></p>
                  </div>
              </details>
          </div>
      </section>

      
    </>
  );
}
