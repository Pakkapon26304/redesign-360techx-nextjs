import React from 'react';

export default function TestimonialSectionBasic() {
  return (
    <>
      {/* Testimonial Section */}
      <section className="testimonial-section reveal" style={{ maxWidth: '1200px', margin: '0 auto', padding: '6rem 2rem 4rem 2rem' }}>
          <div className="section-header text-center" style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-main)' }}>เสียงตอบรับจาก<span className="text-gradient">ผู้ใช้งานจริง</span></h2>
              <p style={{ fontSize: '1.2rem', opacity: '0.8', color: 'var(--text-muted)' }}>ความไว้วางใจจากพาร์ทเนอร์และลูกค้าของเรา</p>
          </div>
          
          <div className="testimonial-carousel-container" style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '1rem 0', WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}>
              <div className="testimonial-track">
                  {/* Testimonial 1 */}
                  <div className="testimonial-card">
                      <div className="testi-header">
                          <div className="testi-avatar">
                              <img src="/Authors/Pakkapon-Chuensuwan.JPG" alt="Pakkapon Chuensuwan" style={{ objectFit: 'cover' }} />
                          </div>
                          <div className="testi-info">
                              <h4 style={{ margin: '0', fontSize: '1.1rem', color: 'var(--text-color)' }}>คุณ Pakkapon C.</h4>
                              <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.7' }}>360TECHX Executive</p>
                          </div>
                      </div>
                      <p className="testi-text">"เป้าหมายของเราคือการสร้างระบบ TMS ที่ดีที่สุดในไทย และการเห็นลูกค้าสามารถลดต้นทุน-เพิ่มกำไรได้จริงจากเทคโนโลยีของเรา คือความภูมิใจสูงสุดของทีมงานครับ"</p>
                  </div>
                  {/* Testimonial 2 */}
                  <div className="testimonial-card">
                      <div className="testi-header">
                          <div className="testi-avatar">
                              <img src="https://ui-avatars.com/api/?name=Wipawan+S&background=32ff98&color=0b1120" alt="Profile" />
                          </div>
                          <div className="testi-info">
                              <h4 style={{ margin: '0', fontSize: '1.1rem', color: 'var(--text-color)' }}>คุณวิภาวรรณ ส.</h4>
                              <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.7' }}>บริษัท ขนส่งไทยมั่นคง</p>
                          </div>
                      </div>
                      <p className="testi-text">"ระบบเสถียรและใช้งานง่ายมาก แม้แต่ทีมงานที่ไม่เก่งคอมพิวเตอร์ก็สามารถเรียนรู้ได้ไว ระบบจัดการเอกสารและการเรียกเก็บเงินช่วยลดข้อผิดพลาดในองค์กรได้เกือบ 100%"</p>
                  </div>
                  {/* Testimonial 3 */}
                  <div className="testimonial-card">
                      <div className="testi-header">
                          <div className="testi-avatar">
                              <img src="https://ui-avatars.com/api/?name=Korn+P&background=32ff98&color=0b1120" alt="Profile" />
                          </div>
                          <div className="testi-info">
                              <h4 style={{ margin: '0', fontSize: '1.1rem', color: 'var(--text-color)' }}>คุณกร พ.</h4>
                              <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.7' }}>บริษัท พีเค ทรานสปอร์ต</p>
                          </div>
                      </div>
                      <p className="testi-text">"ประทับใจทีม Support มากครับ ให้คำปรึกษาและแก้ไขปัญหาได้อย่างรวดเร็ว ตัวระบบตอบโจทย์ธุรกิจขนส่งทุกขนาดจริงๆ คุ้มค่าแก่การลงทุนระยะยาวแน่นอน"</p>
                  </div>
                  {/* Duplicate for seamless scroll */}
                  <div className="testimonial-card">
                      <div className="testi-header">
                          <div className="testi-avatar">
                              <img src="https://ui-avatars.com/api/?name=Sompong+T&background=32ff98&color=0b1120" alt="Profile" />
                          </div>
                          <div className="testi-info">
                              <h4 style={{ margin: '0', fontSize: '1.1rem', color: 'var(--text-color)' }}>คุณสมพงษ์ ท.</h4>
                              <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.7' }}>บริษัท โลจิสติกส์ก้าวหน้า จำกัด</p>
                          </div>
                      </div>
                      <p className="testi-text">"ตั้งแต่เปลี่ยนมาใช้ระบบ TMS ของ 360TECHX การวางแผนรถขนส่งในแต่ละวันง่ายขึ้นมาก ลดเวลาการทำงานไปได้เยอะ และที่สำคัญคือสามารถติดตามสถานะรถได้แบบ Real-time ลูกค้าประทับใจมากครับ"</p>
                  </div>
                  {/* Duplicate 2 */}
                  <div className="testimonial-card">
                      <div className="testi-header">
                          <div className="testi-avatar">
                              <img src="https://ui-avatars.com/api/?name=Wipawan+S&background=32ff98&color=0b1120" alt="Profile" />
                          </div>
                          <div className="testi-info">
                              <h4 style={{ margin: '0', fontSize: '1.1rem', color: 'var(--text-color)' }}>คุณวิภาวรรณ ส.</h4>
                              <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.7' }}>บริษัท ขนส่งไทยมั่นคง</p>
                          </div>
                      </div>
                      <p className="testi-text">"ระบบเสถียรและใช้งานง่ายมาก แม้แต่ทีมงานที่ไม่เก่งคอมพิวเตอร์ก็สามารถเรียนรู้ได้ไว ระบบจัดการเอกสารและการเรียกเก็บเงินช่วยลดข้อผิดพลาดในองค์กรได้เกือบ 100%"</p>
                  </div>
                  {/* Duplicate 3 */}
                  <div className="testimonial-card">
                      <div className="testi-header">
                          <div className="testi-avatar">
                              <img src="https://ui-avatars.com/api/?name=Korn+P&background=32ff98&color=0b1120" alt="Profile" />
                          </div>
                          <div className="testi-info">
                              <h4 style={{ margin: '0', fontSize: '1.1rem', color: 'var(--text-color)' }}>คุณกร พ.</h4>
                              <p style={{ margin: '0', fontSize: '0.9rem', opacity: '0.7' }}>บริษัท พีเค ทรานสปอร์ต</p>
                          </div>
                      </div>
                      <p className="testi-text">"ประทับใจทีม Support มากครับ ให้คำปรึกษาและแก้ไขปัญหาได้อย่างรวดเร็ว ตัวระบบตอบโจทย์ธุรกิจขนส่งทุกขนาดจริงๆ คุ้มค่าแก่การลงทุนระยะยาวแน่นอน"</p>
                  </div>
              </div>
          </div>
      </section>
  
      
    </>
  );
}
