"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function PolicyLayout({ title, lastUpdated, children }) {
  const pathname = usePathname();

  const links = [
    { name: 'นโยบายความเป็นส่วนตัว', path: '/privacy-policy' },
    { name: 'เงื่อนไขการใช้บริการ', path: '/terms-and-conditions' },
    { name: 'นโยบายแก้ปัญหาข้อร้องเรียน', path: '/complaint-resolution-policy' },
    { name: 'คำร้องขอถอนข้อมูล', path: '/data-protection-policy' },
  ];

  return (
    <main style={{ background: 'var(--bg-main)', minHeight: '100vh', padding: '10rem clamp(1rem, 4vw, 2rem) 8rem clamp(1rem, 4vw, 2rem)' }}>
      <div className="policy-layout-container">
        
        {/* Sidebar */}
        <aside className="policy-sidebar">
          <div className="sidebar-widget">
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1.5rem', color: 'var(--text-main)' }}>นโยบายบริษัท</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {links.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <li key={link.path}>
                    <Link 
                      href={link.path} 
                      className={`policy-link ${isActive ? 'active' : ''}`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="policy-main-content">
          <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '2rem', marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--text-main)', letterSpacing: '-0.5px' }}>{title}</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>อัปเดตล่าสุดเมื่อ: {lastUpdated}</p>
          </div>

          <div className="policy-content" style={{ color: 'var(--text-main)', lineHeight: '1.8', fontSize: '1.1rem' }}>
            {children}
          </div>

          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
            <Link href="/" className="btn btn-outline">กลับสู่หน้าหลัก</Link>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .policy-layout-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 2.5rem;
          align-items: start;
        }

        .policy-sidebar {
          position: sticky;
          top: 100px;
        }

        .sidebar-widget {
          background: var(--bg-card);
          padding: 2rem;
          border-radius: 16px;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
        }

        .policy-link {
          display: block;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          color: var(--text-muted);
          text-decoration: none;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .policy-link:hover {
          background: rgba(6, 182, 212, 0.1);
          color: var(--primary);
        }

        .policy-link.active {
          background: linear-gradient(135deg, #32ff98 0%, #03665e 100%);
          color: #ffffff;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(3, 102, 94, 0.3);
        }

        .policy-main-content {
          background: var(--bg-card);
          padding: 4rem;
          border-radius: 24px;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border-color);
        }

        .policy-content h2 {
          font-size: 1.8rem;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          color: var(--text-main);
          font-weight: 700;
        }
        .policy-content h3 {
          font-size: 1.4rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: var(--text-main);
          font-weight: 600;
        }
        .policy-content p {
          margin-bottom: 1.5rem;
          color: var(--text-muted);
        }
        .policy-content ul, .policy-content ol {
          margin-bottom: 2rem;
          padding-left: 2rem;
          color: var(--text-muted);
        }
        .policy-content li {
          margin-bottom: 0.5rem;
        }
        .policy-content a {
          color: var(--primary);
          text-decoration: underline;
        }

        @media (max-width: 991px) {
          .policy-layout-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .policy-sidebar {
            position: relative;
            top: 0;
          }
          .policy-main-content {
            padding: clamp(1.25rem, 4vw, 2.5rem);
          }
        }
      `}} />
    </main>
  );
}
