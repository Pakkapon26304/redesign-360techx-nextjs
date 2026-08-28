"use client";
import React from 'react';

export default function TmsEnterpriseIntegrationSection() {
  const cards = [
    {
      title: <>ผสานข้อมูล<span className="text-gradient">ไร้รอยต่อ</span></>,
      desc: "ซิงค์ข้อมูลกับระบบ ERP สมบูรณ์แบบ รองรับทุกสเตปของธุรกิจ"
    },
    {
      title: <>ดึงออเดอร์<span className="text-gradient">อัตโนมัติ</span></>,
      desc: "แปลง Sales Order และ Delivery Order เป็นแผนจัดส่งทันที"
    },
    {
      title: <>อัปเดตสถานะ <span className="text-gradient">Real-time</span></>,
      desc: "ส่งข้อมูล Shipment กลับระบบหลักขององค์กรอย่างแม่นยำ"
    },
    {
      title: <>จัดการบิลลิ่ง<span className="text-gradient">ครบวงจร</span></>,
      desc: "กระทบยอดบัญชีและเคลียร์ค่าขนส่งจบในที่เดียว"
    }
  ];

  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '8rem 2rem', color: '#fff', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ 
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden', pointerEvents: 'none',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 5%, black 20%, black 80%, transparent 95%, transparent 100%)',
        maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 5%, black 20%, black 80%, transparent 95%, transparent 100%)'
      }}>
        <iframe 
          src="https://www.youtube.com/embed/jLeen_p5QIw?autoplay=1&mute=1&controls=0&loop=1&playlist=jLeen_p5QIw&showinfo=0&modestbranding=1" 
          style={{ width: '150vw', height: '84.375vw', minHeight: '150vh', minWidth: '266.66vh', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', border: 'none' }}
          allow="autoplay; encrypted-media"
          title="Background Video"
        ></iframe>
        {/* Dark Overlay for better text readability */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10, 15, 29, 0.75)' }}></div>
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1440px', width: '100%', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem', color: '#fff' }}>
                Seamless <span className="text-gradient">ERP & WMS Integration</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.85)', maxWidth: '800px', margin: '0 auto' }}>
                เชื่อมต่อทุกระบบจัดการชั้นนำ ปลดล็อกศักยภาพงานขนส่งด้วย 360 Integration Agent
            </p>
        </div>
        <style>{`
          @keyframes levitate-integration {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
            100% {
              transform: translateY(0px);
            }
          }
          .integration-float-wrapper {
            animation: levitate-integration 6s ease-in-out infinite;
            will-change: transform;
          }
          .integration-img-animated {
            transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            will-change: transform, filter;
            filter: drop-shadow(0 15px 25px rgba(50, 255, 152, 0.15));
          }
          .integration-img-animated:hover {
            transform: scale(1.05) translateY(-10px);
            filter: drop-shadow(0 35px 55px rgba(50, 255, 152, 0.4));
          }
        `}</style>

        <div style={{ textAlign: 'center', marginBottom: '5rem', perspective: '1000px' }}>
            <div className="integration-float-wrapper">
                <img 
                    src="/interface-page-enterprise/Seamless-ERP-WMS-Integration.png" 
                    alt="Seamless ERP & WMS Integration" 
                    className="integration-img-animated"
                    style={{ maxWidth: '100%', width: '1200px', height: 'auto' }} 
                />
            </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {cards.map((card, idx) => (
                <div key={idx} className="glass-card hover-lift" style={{ background: 'linear-gradient(145deg, #1a1f2e, #0a0f16)', padding: '2.5rem 2rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: '700', color: '#fff' }}>
                        {card.title}
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.6', margin: 0 }}>
                        {card.desc}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

