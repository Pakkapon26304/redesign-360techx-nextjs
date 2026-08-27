import React from 'react';

export default function StatsSummarySectionBasic() {
  return (
    <>
      {/* Stats Summary Section */}
      <section className="reveal" style={{ padding: '0 2rem 8rem 2rem', background: 'var(--bg-main)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '4rem', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              {/* Stat 1 */}
              <div style={{ flex: '1 1 200px' }}>
                  <div style={{ borderTop: '2px solid var(--border-color)', position: 'relative', paddingTop: '1.5rem' }}>
                      <div style={{ position: 'absolute', top: '-2px', left: 0, width: '40px', height: '2px', background: 'var(--primary)' }}></div>
                      <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--text-main)', display: 'flex', alignItems: 'flex-start', gap: '0.25rem', lineHeight: '1' }}>
                          ใช้งาน<span style={{ color: 'var(--primary)' }}>ฟรี</span>
                      </div>
                      <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', marginTop: '1.5rem', fontWeight: '500' }}>
                          ระบบ TMS Basic มาตรฐานระดับ Enterprise ที่เริ่มใช้งานได้ฟรี ไม่มีค่าใช้จ่าย
                      </p>
                  </div>
              </div>
              
              {/* Stat 2 */}
              <div style={{ flex: '1 1 200px' }}>
                  <div style={{ borderTop: '2px solid var(--border-color)', position: 'relative', paddingTop: '1.5rem' }}>
                      <div style={{ position: 'absolute', top: '-2px', left: 0, width: '40px', height: '2px', background: 'var(--primary)' }}></div>
                      <div style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--text-main)', display: 'flex', alignItems: 'flex-start', gap: '0.25rem', lineHeight: '1' }}>
                          200<span style={{ color: 'var(--primary)', fontSize: '2.5rem', fontWeight: '600', marginTop: '0.2rem' }}>%</span>
                      </div>
                      <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', marginTop: '1.5rem', fontWeight: '500' }}>
                          เพิ่มกำไรจากการนำรถบรรทุกที่มีอยู่มารับงานกับ 360TRUCK
                      </p>
                  </div>
              </div>
              
              {/* Stat 3 */}
              <div style={{ flex: '1 1 200px' }}>
                  <div style={{ borderTop: '2px solid var(--border-color)', position: 'relative', paddingTop: '1.5rem' }}>
                      <div style={{ position: 'absolute', top: '-2px', left: 0, width: '40px', height: '2px', background: 'var(--primary)' }}></div>
                      <div style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--text-main)', display: 'flex', alignItems: 'flex-start', gap: '0.25rem', lineHeight: '1' }}>
                          30<span style={{ color: 'var(--primary)', fontSize: '2.5rem', fontWeight: '600', marginTop: '0.2rem' }}>%</span>
                      </div>
                      <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', marginTop: '1.5rem', fontWeight: '500' }}>
                          ลดต้นทุนการจัดการและการบริหารธุรกิจขนส่งได้สูงสุด 30%
                      </p>
                  </div>
              </div>
              
              {/* Stat 4 */}
              <div style={{ flex: '1 1 200px' }}>
                  <div style={{ borderTop: '2px solid var(--border-color)', position: 'relative', paddingTop: '1.5rem' }}>
                      <div style={{ position: 'absolute', top: '-2px', left: 0, width: '40px', height: '2px', background: 'var(--primary)' }}></div>
                      <div style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--text-main)', display: 'flex', alignItems: 'flex-start', gap: '0.25rem', lineHeight: '1' }}>
                          24<span style={{ color: 'var(--primary)', fontSize: '2.5rem', fontWeight: '600', marginTop: '0.2rem' }}>/7</span>
                      </div>
                      <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', marginTop: '1.5rem', fontWeight: '500' }}>
                          สามารถเข้าถึงการจัดการขนส่งได้ทุกที่ ทุกเวลา ออนไลน์ 100%
                      </p>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
