import React from 'react';

export default function ContactHeroSection() {
  return (
    <div className="hero-scroll-wrapper" style={{ height: '60vh', minHeight: '480px' }}>
        <header className="hero" style={{ height: '100%' }}>
        <div className="hero-bg">
            <img src="/Office-360TRUCK/310931835_786540258976223_1593692212990799741_n.jpeg" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: '0', left: '0' }} alt="Hero Background" />
            <div className="hero-gradient-overlay"></div>
            <div className="glow-orb orb-1" style={{ zIndex: '2' }}></div>
            <div className="glow-orb orb-2" style={{ zIndex: '2' }}></div>
        </div>
        <div className="hero-content" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'center', height: '100%', zIndex: '3' }}>
            <div style={{ maxWidth: '750px' }}>
                <h1 className="ent-hero-title" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}><span className="text-gradient">ติดต่อเรา</span></h1>
                <p className="hero-sub ent-hero-sub" style={{ fontSize: '1.5rem', opacity: '0.9' }}>ขอคำปรึกษาจากผู้เชี่ยวชาญเกี่ยวกับระบบจัดการขนส่ง</p>
            </div>
        </div>
        </header>
    </div>
  );
}
