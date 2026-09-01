import React from 'react';

export default function TmsEnterpriseCtaSection() {
  return (
    <>
      {/* CTA Section TMS Enterprise */}
      <section style={{ background: 'linear-gradient(rgba(10, 15, 29, 0.75), rgba(10, 15, 29, 0.75)), url("/interface-page-enterprise/service-system-integration.jpeg") center/cover no-repeat', padding: '8rem 2rem', textAlign: 'center', color: 'white', position: 'relative' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: '700', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.4', marginBottom: '3rem', letterSpacing: '-1px' }}>ยกระดับการจัดการงานขนส่งสำหรับองค์กรด้วย<br /><span className="text-gradient"> 360TECHX Enterprise</span></h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a href="/contact" className="btn hover-lift" style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))', color: 'white', padding: '1.25rem 3.5rem', fontSize: '1.15rem', borderRadius: '50px', textDecoration: 'none', fontWeight: '700', boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)', border: 'none' }}>ติดต่อเราเพื่อเริ่มต้นใช้งาน</a>
          </div>
      </section>


    </>
  );
}
