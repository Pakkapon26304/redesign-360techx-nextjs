import React from 'react';

export default function TmsEnterpriseIntroSection() {
  return (
    <>
      {/* Centered Intro Section */}
    <section className="reveal" style={{ padding: '6rem 2rem 1rem 2rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
        <img src="/Logo-interface/360techx-enterprise.png" className="dark-logo" alt="360TECHX Enterprise" style={{ height: '60px', margin: '0 auto 1.5rem auto' }} />
        <img src="/Logo-interface/360techx-enterprise-black.png" className="light-logo" alt="360TECHX Enterprise" style={{ height: '60px', margin: '0 auto 1.5rem auto' }} />
        <h2 className="intro-title" style={{ lineHeight: '1.3', fontWeight: '600', letterSpacing: '-0.5px', marginBottom: '1rem' }}>Transport Management System <br /><span className="text-gradient">มาตรฐานระดับ Enterprise</span> ด้วยราคาเข้าถึงได้</h2>
    </section>

    
    </>
  );
}
