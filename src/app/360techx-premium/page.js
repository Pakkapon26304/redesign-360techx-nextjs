import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: '360TECHX Premium | 360TECHX',
  description: 'รายละเอียด 360TECHX Premium จาก 360TECHX'
};

export default function Page() {
  return (
    <main style={{ minHeight: '100vh', padding: '8rem 2rem', background: 'var(--bg-main)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="glass-panel p-8">
        <h1 style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '2rem' }}>360TECHX Premium</h1>
        <p style={{ color: 'var(--text-muted)' }}>
          อยู่ระหว่างการปรับปรุงและออกแบบ (Work in Progress).
        </p>
        <div style={{ marginTop: '2rem' }}>
          <Link href="/" className="btn btn-outline">กลับหน้าหลัก</Link>
        </div>
      </div>
    </main>
  );
}
