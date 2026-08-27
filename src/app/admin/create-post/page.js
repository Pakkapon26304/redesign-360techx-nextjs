import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: '360TECHX Admin - Create Post',
  robots: {
    index: false,
    follow: false,
  }
};

export default function CreatePostPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-dark)', padding: '6rem 2rem', fontFamily: 'var(--font-kanit)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header & Publishing Workflow */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <h1 style={{ fontSize: '2.5rem', color: 'var(--text-main)', margin: 0 }}>สร้างบทความใหม่</h1>
              <span style={{ padding: '0.3rem 0.8rem', background: 'rgba(255, 193, 7, 0.2)', color: '#ffc107', borderRadius: '20px', fontSize: '0.9rem', border: '1px solid rgba(255,193,7,0.4)' }}>
                🟠 Status: Draft (แบบร่าง)
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', margin: 0 }}>ระบบ 360TECHX Headless CMS Workspace</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              👁️ Live Preview
            </button>
            <button className="btn btn-outline">💾 บันทึก Draft</button>
            <button className="btn btn-primary" style={{ background: 'var(--primary)', color: '#000' }}>🚀 Publish (เผยแพร่)</button>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          
          {/* Main Editor Section */}
          <div style={{ flex: '1 1 65%', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Title & Custom URL Slug */}
            <div className="glass-card" style={{ padding: '2rem', borderRadius: '16px', background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.5rem', fontWeight: 'bold' }}>หัวข้อบทความ (Title)</label>
                <input type="text" placeholder="พิมพ์หัวข้อบทความที่นี่ (เช่น: ทำไมการวางแผนเส้นทางถึงช่วยประหยัดเงินได้?)..." style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--text-main)', fontSize: '1.2rem' }} />
              </div>
              <div>
                <label style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.5rem', fontWeight: 'bold' }}>Custom URL Slug</label>
                <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(0,0,0,0.02)', border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden' }}>
                  <span style={{ padding: '1rem', color: 'var(--text-muted)', background: 'rgba(0,0,0,0.05)', borderRight: '1px solid var(--border-color)' }}>360techx.co/news/</span>
                  <input type="text" placeholder="route-planning-save-cost" style={{ flex: 1, padding: '1rem', border: 'none', background: 'transparent', color: 'var(--text-main)', outline: 'none' }} />
                </div>
              </div>
            </div>

            {/* Rich Text Editor Mockup */}
            <div className="glass-card" style={{ borderRadius: '16px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
              <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.02)', borderBottom: '1px solid var(--border-color)', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <button style={{ padding: '0.5rem 1rem', background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-main)', borderRadius: '4px', cursor: 'pointer' }}><strong>B</strong></button>
                <button style={{ padding: '0.5rem 1rem', background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-main)', borderRadius: '4px', cursor: 'pointer' }}><em>I</em></button>
                <span style={{ width: '1px', background: 'var(--border-color)', margin: '0 0.5rem' }}></span>
                <button style={{ padding: '0.5rem 1rem', background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-main)', borderRadius: '4px', cursor: 'pointer' }}>H2</button>
                <button style={{ padding: '0.5rem 1rem', background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-main)', borderRadius: '4px', cursor: 'pointer' }}>H3</button>
                <span style={{ width: '1px', background: 'var(--border-color)', margin: '0 0.5rem' }}></span>
                <button style={{ padding: '0.5rem 1rem', background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-main)', borderRadius: '4px', cursor: 'pointer' }}>🔗 เชื่อมโยงลิงก์</button>
                <button style={{ padding: '0.5rem 1rem', background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-main)', borderRadius: '4px', cursor: 'pointer' }}>🖼️ แทรกรูปภาพ (Cloud)</button>
              </div>
              <textarea placeholder="เริ่มเล่าเรื่องราวของคุณที่นี่... (รองรับการ Drag & Drop รูปภาพลงมาวางได้เลย)" style={{ width: '100%', minHeight: '400px', padding: '2rem', border: 'none', background: 'transparent', color: 'var(--text-main)', fontSize: '1.1rem', lineHeight: '1.8', resize: 'vertical', outline: 'none' }}></textarea>
            </div>

            {/* SEO Input Fields */}
            <div className="glass-card" style={{ padding: '2rem', borderRadius: '16px', background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                SEO & Social Sharing
              </h3>
              
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 50%' }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Focus Keyword (คำค้นหาหลัก)</label>
                    <input type="text" placeholder="เช่น: ระบบ TMS, วางแผนเส้นทาง..." style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--text-main)' }} />
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                      <span>Meta Title</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>0/60</span>
                    </label>
                    <input type="text" placeholder="หัวข้อที่จะโชว์บน Google..." style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--text-main)' }} />
                  </div>
                  <div>
                    <label style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                      <span>Meta Description</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>0/160</span>
                    </label>
                    <textarea placeholder="คำอธิบายสั้นๆ ดึงดูดให้อ่านต่อ..." style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--text-main)', resize: 'vertical', minHeight: '100px' }}></textarea>
                  </div>
                </div>

                {/* Social Preview */}
                <div style={{ flex: '1 1 40%', background: 'var(--bg-dark)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <h4 style={{ color: 'var(--text-main)', marginBottom: '1rem', fontSize: '0.9rem' }}>Social Sharing Preview (Facebook/LINE)</h4>
                  <div style={{ background: '#fff', borderRadius: '8px', overflow: 'hidden', border: '1px solid #ddd' }}>
                    <div style={{ width: '100%', height: '150px', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
                      [ รูปปก (Cover Image) จะแสดงที่นี่ ]
                    </div>
                    <div style={{ padding: '1rem' }}>
                      <div style={{ color: '#64748b', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.2rem' }}>360TECHX.CO</div>
                      <div style={{ color: '#0f172a', fontWeight: 'bold', fontSize: '1rem', marginBottom: '0.3rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>หัวข้อบทความ (Meta Title)</div>
                      <div style={{ color: '#475569', fontSize: '0.85rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>คำอธิบายบทความ (Meta Description) จะถูกแสดงผลตรงนี้เพื่อดึงดูดให้คนคลิกอ่านต่อ...</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar Settings */}
          <div style={{ flex: '1 1 30%', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Media Management (Cover Image) */}
            <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px', background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: 'var(--text-main)', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold' }}>รูปภาพหน้าปก (Cover Image)</h3>
              <div style={{ width: '100%', height: '180px', border: '2px dashed var(--primary)', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'var(--text-muted)', cursor: 'pointer', background: 'rgba(50, 255, 152, 0.05)', textAlign: 'center', padding: '1rem' }}>
                <span style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>☁️</span>
                <span style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>ลากรูปภาพมาวางที่นี่</span>
                <span style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>เชื่อมต่อ Cloud Storage<br/>(Auto-resize WebP อัตโนมัติ)</span>
              </div>
              <div style={{ marginTop: '1rem' }}>
                <label style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Alt Text (สำคัญมากสำหรับ SEO รูปภาพ)</label>
                <input type="text" placeholder="เช่น: พนักงานขับรถใช้ระบบ TMS..." style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--text-main)' }} />
              </div>
            </div>

            {/* Writing Profile */}
            <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px', background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: 'var(--text-main)', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold' }}>ผู้เขียนบทความ (Author)</h3>
              <select style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--text-main)', fontSize: '1rem', cursor: 'pointer' }} defaultValue="pakkapon">
                <option value="pakkapon">👤 คุณ Pakkapon Chuensuwan (Executive)</option>
                <option value="team">👥 ทีมวิชาการ 360TECHX</option>
                <option value="marketing">📢 ทีมการตลาด (Marketing Team)</option>
              </select>
            </div>

            {/* Taxonomy (Categories & Tags) */}
            <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px', background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: 'var(--text-main)', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold' }}>หมวดหมู่ (Categories)</h3>
              <div style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '8px', maxHeight: '150px', overflowY: 'auto', marginBottom: '1.5rem', background: 'rgba(0,0,0,0.02)' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--text-main)', cursor: 'pointer' }}>
                  <input type="radio" name="category" /> อัปเดตระบบ (Product Updates)
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--text-main)', cursor: 'pointer' }}>
                  <input type="radio" name="category" defaultChecked /> ความรู้และเทรนด์ (Logistics Trends)
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--text-main)', cursor: 'pointer' }}>
                  <input type="radio" name="category" /> โปรโมชั่น (Promotions)
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', cursor: 'pointer' }}>
                  <input type="radio" name="category" /> ข่าวสารองค์กร (Company News)
                </label>
              </div>

              <h3 style={{ color: 'var(--text-main)', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold' }}>ป้ายกำกับ (Tags)</h3>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                <span style={{ padding: '0.3rem 0.8rem', background: 'var(--primary)', color: '#000', borderRadius: '20px', fontSize: '0.85rem' }}>TMS</span>
                <span style={{ padding: '0.3rem 0.8rem', background: 'var(--primary)', color: '#000', borderRadius: '20px', fontSize: '0.85rem' }}>Route Planning</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input type="text" placeholder="พิมพ์ Tag ใหม่..." style={{ flex: 1, padding: '0.6rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--text-main)' }} />
                <button className="btn btn-outline" style={{ padding: '0.6rem 1rem' }}>เพิ่ม</button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
