import React from 'react';

export default function StatsSummarySectionIbid() {
  return (
    <>
      {/* Stats Summary Section */}
      <section className="reveal" style={{ padding: '0 2rem 3rem 2rem', background: 'var(--bg-main)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '4rem', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              {/* Stat 1 */}
              <div style={{ flex: '1 1 200px' }}>
                  <div style={{ borderTop: '2px solid var(--border-color)', position: 'relative', paddingTop: '1.5rem' }}>
                      <div style={{ position: 'absolute', top: '-2px', left: 0, width: '40px', height: '2px', background: 'var(--primary)' }}></div>
                      <div style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--text-main)', display: 'flex', alignItems: 'flex-start', gap: '0.25rem', lineHeight: '1' }}>
                          1<span style={{ color: 'var(--primary)', fontSize: '2.5rem', fontWeight: '600', marginTop: '0.2rem' }}> วัน</span>
                      </div>
                      <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', marginTop: '1.5rem', fontWeight: '500' }}>
                          เปิดวาระการประมูลจากออฟไลน์สู่ระบบออนไลน์ที่ใช้เวลานาน ให้จบได้ภายใน 1 วัน
                      </p>
                  </div>
              </div>
              
              {/* Stat 2 */}
              <div style={{ flex: '1 1 200px' }}>
                  <div style={{ borderTop: '2px solid var(--border-color)', position: 'relative', paddingTop: '1.5rem' }}>
                      <div style={{ position: 'absolute', top: '-2px', left: 0, width: '40px', height: '2px', background: 'var(--primary)' }}></div>
                      <div style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--text-main)', display: 'flex', alignItems: 'flex-start', gap: '0.25rem', lineHeight: '1' }}>
                          15<span style={{ color: 'var(--primary)', fontSize: '2.5rem', fontWeight: '600', marginTop: '0.2rem' }}> Projects</span>
                      </div>
                      <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', marginTop: '1.5rem', fontWeight: '500' }}>
                          สามารถจัดการวาระการประมูลงานขนส่งได้มากถึง 15 โปรเจค โดยใช้จำนวนคนไม่ถึง 10 คน
                      </p>
                  </div>
              </div>
              
              {/* Stat 3 */}
              <div style={{ flex: '1 1 200px' }}>
                  <div style={{ borderTop: '2px solid var(--border-color)', position: 'relative', paddingTop: '1.5rem' }}>
                      <div style={{ position: 'absolute', top: '-2px', left: 0, width: '40px', height: '2px', background: 'var(--primary)' }}></div>
                      <div style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--text-main)', display: 'flex', alignItems: 'flex-start', gap: '0.25rem', lineHeight: '1' }}>
                          110<span style={{ color: 'var(--primary)', fontSize: '2.5rem', fontWeight: '600', marginTop: '0.2rem' }}> เส้นทาง</span>
                      </div>
                      <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', marginTop: '1.5rem', fontWeight: '500' }}>
                          บริหารจัดการเส้นทางการประมูลงานขนส่งขนาดใหญ่ 110 เส้นทางได้อย่างมีประสิทธิภาพ
                      </p>
                  </div>
              </div>
              
              {/* Stat 4 */}
              <div style={{ flex: '1 1 200px' }}>
                  <div style={{ borderTop: '2px solid var(--border-color)', position: 'relative', paddingTop: '1.5rem' }}>
                      <div style={{ position: 'absolute', top: '-2px', left: 0, width: '40px', height: '2px', background: 'var(--primary)' }}></div>
                      <div style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--text-main)', display: 'flex', alignItems: 'flex-start', gap: '0.25rem', lineHeight: '1' }}>
                          10.17<span style={{ color: 'var(--primary)', fontSize: '2.5rem', fontWeight: '600', marginTop: '0.2rem' }}>%</span>
                      </div>
                      <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', marginTop: '1.5rem', fontWeight: '500' }}>
                          โครงการประสบความสำเร็จ และช่วยลดต้นทุนค่าขนส่งได้มากถึง 10.17% ในทุกโปรเจคและเส้นทาง
                      </p>
                  </div>
              </div>
          </div>
      </section>

      
    </>
  );
}
