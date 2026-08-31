import React from 'react';
import Link from 'next/link';
import LoadMoreButton from '@/components/LoadMoreButton';

export default function Page() {
  return (
    <>


    <main className="news-page-container">

        {/* Header & Filters */}
        <div className="section-heading" style={{ marginBottom: '0.5rem' }}>
            <h2><span className="text-gradient">ข่าวสารและโปรโมชั่น</span></h2>
        </div>

        <div className="filter-tabs">
            <button className="filter-btn active">ทั้งหมด</button>
            <button className="filter-btn">อัปเดตระบบ</button>
            <button className="filter-btn">โปรโมชั่น</button>
            <button className="filter-btn">ข่าวสารองค์กร</button>
            <button className="filter-btn">เกร็ดความรู้ (Tips)</button>
            <button className="filter-btn">กิจกรรม</button>
        </div>
        
        {/* Featured Bento Section */}
        <section className="featured-bento">
            {/* Large Left */}
            <a href="#" className="bento-card bento-large">
                <img src="/Office-360TRUCK/310497074_786540285642887_6994208460385202528_n.jpeg" alt="Featured News" />
                <div className="bento-overlay"></div>
                <div className="bento-content">
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <span className="tag-pill">ข่าวสาร</span>
                    </div>
                    <h2 className="bento-title">360TECHX เปิดตัว TMS โฉมใหม่<br />ยกระดับวงการโลจิสติกส์ไทย</h2>
                    <div className="bento-meta">
                        <div>
                            <span>ผู้เขียน</span>
                            <strong>ทีมพัฒนา 360TECHX</strong>
                        </div>
                        <div>
                            <span>วันที่เผยแพร่</span>
                            <strong>15 สิงหาคม 2026</strong>
                        </div>
                    </div>
                </div>
            </a>
            
            {/* Small Top Right */}
            <a href="#" className="bento-card bento-small">
                <img src="/Office-360TRUCK/310561578_786540598976189_7453248759151350282_n.jpeg" alt="Event" />
                <div className="bento-overlay"></div>
                <div className="bento-content">
                    <span className="tag-pill">Event</span>
                    <h3 className="bento-title">ภาพบรรยากาศงาน Tech Logistics Summit 2026</h3>
                </div>
            </a>

            {/* Small Bottom Right */}
            <a href="#" className="bento-card bento-small">
                <img src="/Office-360TRUCK/310613192_786540602309522_3620945077409691797_n.jpeg" alt="Promotion" />
                <div className="bento-overlay"></div>
                <div className="bento-content">
                    <span className="tag-pill">Promotion</span>
                    <h3 className="bento-title">โปรโมชั่นพิเศษ! สมัครใช้งาน TMS รับสิทธิ์ฟรี 3 เดือนแรก</h3>
                </div>
            </a>
        </section>


        {/* News Grid */}
        <div className="news-grid">
            
            {/* NEW Article: Route Planning */}
            <Link href="/news/route-planning-save-cost" className="news-card">
                <div className="news-img-wrap">
                    <span className="card-tag">Logistics Strategy</span>
                    <img src="/Logo-interface/CONVERGENT_PROCESSES.jpeg" alt="Route Planning" />
                </div>
                <div className="news-content">
                    <div className="news-title-row">
                        <h3 className="news-title">ทำไมการวางแผนเส้นทางขนส่งให้แม่นยำ ถึงช่วยประหยัดเงินได้มหาศาล?</h3>
                        <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                    <p className="news-snippet">ไขความลับธุรกิจขนส่งที่เติบโตอย่างก้าวกระโดด ด้วยการวางแผนเส้นทางที่ช่วยประหยัดค่าน้ำมัน ลดชั่วโมง OT และเพิ่มกำไร</p>
                    <div className="news-footer">
                        <img className="author-avatar" src="/Authors/Pakkapon-Chuensuwan.JPG" alt="Pakkapon Chuensuwan" style={{ padding: 0, objectFit: 'cover', background: 'transparent' }} />
                        <div className="author-info">
                            Pakkapon Chuensuwan <span className="dot"></span> 18 ส.ค. 2026
                        </div>
                    </div>
                </div>
            </Link>

            {/* Card 1 */}
            <a href="#" className="news-card">
                <div className="news-img-wrap">
                    <span className="card-tag">อัปเดตระบบ</span>
                    <img src="/Office-360TRUCK/310670158_786540545642861_7719393581663746166_n.jpeg" alt="News" />
                </div>
                <div className="news-content">
                    <div className="news-title-row">
                        <h3 className="news-title">เพิ่มฟีเจอร์ AI คำนวณเส้นทาง ช่วยลดต้นทุนน้ำมัน 15%</h3>
                        <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                    <p className="news-snippet">ฟีเจอร์ใหม่ล่าสุดที่จะช่วยผู้ประกอบการประหยัดค่าน้ำมัน ด้วยระบบ AI วิเคราะห์เส้นทางอัจฉริยะที่แม่นยำยิ่งขึ้น พร้อมให้ใช้งานแล้ววันนี้</p>
                    <div className="news-footer">
                        <div className="author-avatar">P</div>
                        <div className="author-info">
                            Product Team <span className="dot"></span> 10 ส.ค. 2026
                        </div>
                    </div>
                </div>
            </a>

            {/* Card 2 */}
            <a href="#" className="news-card">
                <div className="news-img-wrap">
                    <span className="card-tag">โปรโมชั่น</span>
                    <img src="/Office-360TRUCK/310730239_786540455642870_6516347044567815501_n.jpeg" alt="News" />
                </div>
                <div className="news-content">
                    <div className="news-title-row">
                        <h3 className="news-title">แพ็กเกจ Enterprise ลดราคาพิเศษ 20% สำหรับลูกค้าองค์กร</h3>
                        <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                    <p className="news-snippet">ยกระดับธุรกิจของคุณด้วยระบบขนส่งครบวงจร ในราคาที่คุ้มค่าที่สุด สมัครวันนี้รับสิทธิพิเศษเพิ่มเติมมากมาย ด่วน! จำนวนจำกัด</p>
                    <div className="news-footer">
                        <div className="author-avatar" style={{ background: '#a855f7' }}>S</div>
                        <div className="author-info">
                            Sales Team <span className="dot"></span> 5 ส.ค. 2026
                        </div>
                    </div>
                </div>
            </a>

            {/* Card 3 */}
            <a href="#" className="news-card">
                <div className="news-img-wrap">
                    <span className="card-tag">ข่าวสารองค์กร</span>
                    <img src="/Office-360TRUCK/310757367_786540402309542_5823667891139763067_n.jpeg" alt="News" />
                </div>
                <div className="news-content">
                    <div className="news-title-row">
                        <h3 className="news-title">360TECHX เซ็นสัญญาพาร์ทเนอร์ชิพกับบริษัทยานยนต์ชั้นนำ</h3>
                        <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                    <p className="news-snippet">ความร่วมมือครั้งสำคัญที่จะพลิกโฉมการบูรณาการข้อมูลรถบรรทุกเข้ากับระบบ TMS ได้อย่างราบรื่นและมีประสิทธิภาพยิ่งกว่าเดิม</p>
                    <div className="news-footer">
                        <div className="author-avatar" style={{ background: '#3b82f6' }}>P</div>
                        <div className="author-info">
                            PR Team <span className="dot"></span> 1 ส.ค. 2026
                        </div>
                    </div>
                </div>
            </a>
            
            {/* Card 4 */}
            <a href="#" className="news-card">
                <div className="news-img-wrap">
                    <span className="card-tag">เกร็ดความรู้</span>
                    <img src="/Office-360TRUCK/310778268_786540358976213_3654379115183846366_n.jpeg" alt="News" />
                </div>
                <div className="news-content">
                    <div className="news-title-row">
                        <h3 className="news-title">5 เทคนิคการจัดการคลังสินค้าสำหรับมือใหม่</h3>
                        <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                    <p className="news-snippet">รวมหลักการจัดการคลังสินค้าเบื้องต้นที่จะช่วยให้คุณจัดระเบียบ ลดสินค้าค้างสต็อก และทำงานได้เร็วขึ้นแบบก้าวกระโดด</p>
                    <div className="news-footer">
                        <div className="author-avatar" style={{ background: '#eab308' }}>C</div>
                        <div className="author-info">
                            Content Team <span className="dot"></span> 28 ก.ค. 2026
                        </div>
                    </div>
                </div>
            </a>
            
            {/* Card 5 */}
            <a href="#" className="news-card">
                <div className="news-img-wrap">
                    <span className="card-tag">กิจกรรม</span>
                    <img src="/Office-360TRUCK/310800954_786540735642842_2874301864110789168_n.jpeg" alt="News" />
                </div>
                <div className="news-content">
                    <div className="news-title-row">
                        <h3 className="news-title">สรุปเนื้อหาจากสัมมนา "อนาคตของระบบโลจิสติกส์ไทย"</h3>
                        <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                    <p className="news-snippet">ย้อนดู Key Takeaway สำคัญจากงานสัมมนาที่เราจัดขึ้นเพื่ออัปเดตเทรนด์ใหม่ๆ ให้กับพาร์ทเนอร์และเครือข่ายขนส่งทั่วประเทศ</p>
                    <div className="news-footer">
                        <div className="author-avatar" style={{ background: '#ec4899' }}>E</div>
                        <div className="author-info">
                            Event Team <span className="dot"></span> 20 ก.ค. 2026
                        </div>
                    </div>
                </div>
            </a>
            
            {/* Card 6 */}
            <a href="#" className="news-card">
                <div className="news-img-wrap">
                    <span className="card-tag">อัปเดตระบบ</span>
                    <img src="/Office-360TRUCK/310832594_786540348976214_6567805359313259275_n.jpeg" alt="News" />
                </div>
                <div className="news-content">
                    <div className="news-title-row">
                        <h3 className="news-title">ปรับปรุง UX/UI ใหม่ ใช้งานง่ายขึ้น ตอบโจทย์คนขับรถ</h3>
                        <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                    <p className="news-snippet">เราได้รับฟังความคิดเห็นจากผู้ใช้งานจริง และได้ปรับปรุงหน้าตาแอปพลิเคชัน 360TRUCKER ให้ใช้งานง่ายขึ้นกว่าเดิม</p>
                    <div className="news-footer">
                        <div className="author-avatar">P</div>
                        <div className="author-info">
                            Product Team <span className="dot"></span> 15 ก.ค. 2026
                        </div>
                    </div>
                </div>
            </a>

            {/* Card 7 */}
            <a href="#" className="news-card">
                <div className="news-img-wrap">
                    <span className="card-tag">ข่าวสารองค์กร</span>
                    <img src="/Office-360TRUCK/310497074_786540285642887_6994208460385202528_n.jpeg" alt="News" />
                </div>
                <div className="news-content">
                    <div className="news-title-row">
                        <h3 className="news-title">360TECHX ขยายทีมงาน รองรับการเติบโตของธุรกิจปี 2026</h3>
                        <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                    <p className="news-snippet">ก้าวไปอีกขั้นกับทีมงานคุณภาพที่เพิ่มขึ้น เพื่อเตรียมพร้อมพัฒนาฟีเจอร์ระดับโลกให้ตอบสนองลูกค้ายิ่งกว่าเดิม</p>
                    <div className="news-footer">
                        <div className="author-avatar" style={{ background: '#10b981' }}>H</div>
                        <div className="author-info">
                            HR Team <span className="dot"></span> 5 ก.ค. 2026
                        </div>
                    </div>
                </div>
            </a>

            {/* Card 8 */}
            <a href="#" className="news-card">
                <div className="news-img-wrap">
                    <span className="card-tag">เกร็ดความรู้</span>
                    <img src="/Office-360TRUCK/310561578_786540598976189_7453248759151350282_n.jpeg" alt="News" />
                </div>
                <div className="news-content">
                    <div className="news-title-row">
                        <h3 className="news-title">3 วิธีลดอุบัติเหตุบนท้องถนน สำหรับธุรกิจขนส่ง</h3>
                        <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                    <p className="news-snippet">แชร์เคล็ดลับความปลอดภัยที่ผู้ประกอบการรถบรรทุกสามารถนำไปปรับใช้ได้จริง เพื่อความอุ่นใจในการทำงาน</p>
                    <div className="news-footer">
                        <div className="author-avatar" style={{ background: '#f59e0b' }}>S</div>
                        <div className="author-info">
                            Safety Team <span className="dot"></span> 2 ก.ค. 2026
                        </div>
                    </div>
                </div>
            </a>
        </div>

        <LoadMoreButton />

    </main>

    </>
  );
}