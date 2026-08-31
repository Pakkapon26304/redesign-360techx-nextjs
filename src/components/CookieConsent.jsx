'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // ตรวจสอบว่าเคยให้ความยินยอมหรือยัง
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-wrapper" style={{
      position: 'fixed',
      bottom: '0',
      left: '0',
      width: '100%',
      background: 'var(--nav-bg)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      borderTop: '1px solid var(--border-color)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      boxShadow: '0 -10px 30px rgba(0,0,0,0.3)',
      zIndex: 9999,
      animation: 'slideUp 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards'
    }}>
      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(100%); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .cookie-wrapper {
          padding: 1rem 1.2rem;
        }
        
        .cookie-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          width: 100%;
        }
        
        @media (min-width: 1025px) {
          .cookie-wrapper {
            padding: 1.5rem 2rem;
          }
          .cookie-container {
            flex-direction: row !important;
            align-items: center;
            justify-content: space-between;
          }
          .cookie-buttons {
            flex-direction: row;
            width: auto !important;
            flex-shrink: 0;
            gap: 1rem;
          }
        }
      `}</style>
      
      <div className="cookie-container" style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ flex: 1 }}>
          <h4 style={{ color: 'var(--text-main)', fontSize: '1.05rem', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>🍪</span> นโยบายการใช้คุกกี้ (Cookie Policy)
          </h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5' }}>
            เว็บไซต์นี้ใช้คุกกี้เพื่อมอบประสบการณ์การใช้งานที่ดีที่สุดแก่คุณ รวมถึงเพื่อวิเคราะห์การเข้าชมและนำเสนอโฆษณาที่ตรงกับความสนใจของคุณ การใช้งานเว็บไซต์นี้ถือเป็นการยอมรับ <Link href="/privacy-policy" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>นโยบายความเป็นส่วนตัว</Link> ของเรา
          </p>
        </div>
        
        <div className="cookie-buttons">
          <button 
            className="btn btn-outline" 
            style={{ flex: 1, textAlign: 'center', padding: '0.6rem 1rem', fontSize: '0.9rem', whiteSpace: 'nowrap' }}
            onClick={() => setIsVisible(false)}
          >
            ตั้งค่าคุกกี้
          </button>
          <button 
            className="btn btn-primary" 
            style={{ flex: 1, textAlign: 'center', padding: '0.6rem 1rem', fontSize: '0.9rem', whiteSpace: 'nowrap' }}
            onClick={handleAccept}
          >
            ยอมรับทั้งหมด
          </button>
        </div>
      </div>
    </div>
  );
}
