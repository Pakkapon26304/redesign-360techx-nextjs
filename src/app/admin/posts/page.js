import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: '360TECHX Admin - All Posts',
  robots: {
    index: false,
    follow: false,
  }
};

export default function AdminPostsPage() {
  const posts = [
    {
      id: 1,
      title: 'ทำไมการวางแผนเส้นทาง ขนส่งให้แม่นยำ ถึงช่วยประหยัดเงินได้มหาศาล?',
      seoScore: 'good',
      readabilityScore: 'good',
      seoTitle: 'ทำไมการวางแผนเส้นทาง ขนส่งให้แม่นยำ ถึงช่วยประหยัดเงินได้?',
      metaDesc: 'ทราบกันไหมครับว่ากุญแจของความสำเร็จคืออะไร? ในยุคที่มีนักธุรกิจหน้าใหม่เติบโตแบบพุ่งทะยาน...',
      keyphrase: 'วางแผนเส้นทาง',
      date: 'Published\n2026/08/18 at 2:05 pm'
    },
    {
      id: 2,
      title: 'ถอดรหัสสตาร์ทอัปโครงการ AIEE The Founder & Lens โดย 360TECHX',
      seoScore: 'good',
      readabilityScore: 'ok',
      seoTitle: 'ถอดรหัสสตาร์ทอัปโครงการ AIEE The Founder & Lens',
      metaDesc: 'สรุป 3 แนวคิดสร้างธุรกิจสตาร์ทอัปจากโครงการ AIEE มหาวิทยาลัยกรุงเทพ และ สวทช.',
      keyphrase: 'aiee',
      date: 'Published\n2026/08/06 at 4:17 pm'
    },
    {
      id: 3,
      title: 'รถรับจ้างขนส่งสินค้าทั่วไทย เครือข่ายใหญ่รองรับธุรกิจขยายตัว',
      seoScore: 'good',
      readabilityScore: 'good',
      seoTitle: 'รถรับจ้างขนส่งสินค้าทั่วไทย เครือข่ายใหญ่รองรับธุรกิจ - 360TECHX',
      metaDesc: 'ธุรกิจกำลังโตแต่ติดปัญหาเรื่องการขนส่ง? 360TECHX มีเครือข่ายรถรับจ้างขนส่งสินค้าทั่วไทย...',
      keyphrase: 'รถรับจ้างขนส่งสินค้าทั่วไทย',
      date: 'Published\n2026/08/04 at 2:05 pm'
    },
    {
      id: 4,
      title: 'ส่งพัสดุด่วน ชิ้นใหญ่ เหมาคันทั่วไทย ปลอดภัย 100%',
      seoScore: 'ok',
      readabilityScore: 'good',
      seoTitle: 'ส่งพัสดุด่วน ชิ้นใหญ่ เหมาคันทั่วไทย ปลอดภัย 100% - 360TECHX',
      metaDesc: 'บริการ ส่งพัสดุด่วน ชิ้นใหญ่ เหมาคันทั่วไทย เรียกรถไว ราคามาตรฐานไม่มีบวกเพิ่ม...',
      keyphrase: 'ส่งพัสดุด่วน',
      date: 'Published\n2026/07/29 at 3:27 pm'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f1f5f9', padding: '4rem 2rem', fontFamily: 'var(--font-kanit)', color: '#0f172a' }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', margin: 0, fontWeight: '600' }}>Posts</h1>
          <Link href="/admin/create-post" style={{ padding: '0.4rem 1rem', fontSize: '0.9rem', border: '1px solid #2563eb', color: '#2563eb', borderRadius: '4px', textDecoration: 'none', fontWeight: '500' }}>
            Add New
          </Link>
        </div>

        {/* Status Links */}
        <div style={{ marginBottom: '1rem', color: '#64748b', fontSize: '0.9rem' }}>
          <Link href="#" style={{ color: '#000', fontWeight: 'bold', textDecoration: 'none' }}>All (377)</Link> <span style={{ color: '#cbd5e1' }}>|</span>{' '}
          <Link href="#" style={{ color: '#2563eb', textDecoration: 'none' }}>Mine (193)</Link> <span style={{ color: '#cbd5e1' }}>|</span>{' '}
          <Link href="#" style={{ color: '#2563eb', textDecoration: 'none' }}>Published (376)</Link> <span style={{ color: '#cbd5e1' }}>|</span>{' '}
          <Link href="#" style={{ color: '#2563eb', textDecoration: 'none' }}>Draft (1)</Link>
        </div>

        {/* Filter Bar */}
        <div style={{ background: '#ffffff', padding: '1rem', border: '1px solid #e2e8f0', borderBottom: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <select className="light-select">
              <option>Bulk actions</option>
              <option>Edit</option>
              <option>Move to Trash</option>
            </select>
            <button className="light-btn">Apply</button>
            
            <select className="light-select" style={{ marginLeft: '1rem' }}>
              <option>All dates</option>
            </select>
            <select className="light-select">
              <option>All Categories</option>
            </select>
            <select className="light-select">
              <option>All SEO Scores</option>
            </select>
            <button className="light-btn">Filter</button>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <input type="text" placeholder="Search..." style={{ padding: '0.4rem 0.8rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }} />
            <button className="light-btn">Search Posts</button>
          </div>
        </div>

        {/* Data Table */}
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', overflowX: 'auto', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '1000px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #cbd5e1' }}>
                <th style={{ padding: '1rem', width: '40px' }}><input type="checkbox" /></th>
                <th style={{ padding: '1rem', color: '#334155', fontWeight: '600' }}>Title</th>
                <th style={{ padding: '1rem', color: '#334155', fontWeight: '600', width: '60px' }}>SEO</th>
                <th style={{ padding: '1rem', color: '#334155', fontWeight: '600', width: '60px' }}>Read</th>
                <th style={{ padding: '1rem', color: '#334155', fontWeight: '600', width: '25%' }}>SEO Title</th>
                <th style={{ padding: '1rem', color: '#334155', fontWeight: '600', width: '30%' }}>Meta Desc.</th>
                <th style={{ padding: '1rem', color: '#334155', fontWeight: '600' }}>Keyphrase</th>
                <th style={{ padding: '1rem', color: '#334155', fontWeight: '600', width: '120px' }}>Date</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} style={{ borderBottom: '1px solid #f1f5f9', background: '#fff' }} className="post-row">
                  <td style={{ padding: '1rem' }}><input type="checkbox" /></td>
                  <td style={{ padding: '1rem' }}>
                    <Link href={`/admin/create-post?id=${post.id}`} style={{ color: '#2563eb', fontWeight: '600', fontSize: '1rem', textDecoration: 'none' }}>
                      {post.title}
                    </Link>
                    <div className="row-actions" style={{ fontSize: '0.8rem', marginTop: '0.4rem' }}>
                      <Link href={`/admin/create-post?id=${post.id}`} style={{ color: '#2563eb', marginRight: '0.5rem', textDecoration: 'none' }}>Edit</Link> | 
                      <span style={{ color: '#dc2626', margin: '0 0.5rem', cursor: 'pointer' }}>Trash</span> | 
                      <Link href="/news/route-planning-save-cost" target="_blank" style={{ color: '#16a34a', marginLeft: '0.5rem', textDecoration: 'none' }}>View</Link>
                    </div>
                  </td>
                  <td style={{ padding: '1rem', textAlign: 'center' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: post.seoScore === 'good' ? '#16a34a' : '#f59e0b', margin: '0 auto' }}></div>
                  </td>
                  <td style={{ padding: '1rem', textAlign: 'center' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: post.readabilityScore === 'good' ? '#16a34a' : '#f59e0b', margin: '0 auto' }}></div>
                  </td>
                  <td style={{ padding: '1rem', color: '#475569', fontSize: '0.9rem' }}>{post.seoTitle}</td>
                  <td style={{ padding: '1rem', color: '#475569', fontSize: '0.9rem', lineHeight: '1.4' }}>{post.metaDesc}</td>
                  <td style={{ padding: '1rem', color: '#0f172a', fontSize: '0.9rem' }}>{post.keyphrase}</td>
                  <td style={{ padding: '1rem', color: '#475569', fontSize: '0.85rem', whiteSpace: 'pre-line' }}>{post.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .light-select {
          padding: 0.4rem 0.8rem;
          border-radius: 4px;
          border: 1px solid #cbd5e1;
          background: #f8fafc;
          color: #334155;
          font-size: 0.9rem;
          outline: none;
        }
        .light-btn {
          padding: 0.4rem 1rem;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          color: #334155;
          border-radius: 4px;
          font-size: 0.9rem;
          cursor: pointer;
        }
        .light-btn:hover {
          background: #e2e8f0;
        }
        .post-row:nth-child(even) {
          background: #f8fafc !important;
        }
        .post-row:hover {
          background: #eff6ff !important;
        }
        .post-row .row-actions {
          visibility: hidden;
        }
        .post-row:hover .row-actions {
          visibility: visible;
        }
        `
      }} />
    </div>
  );
}
