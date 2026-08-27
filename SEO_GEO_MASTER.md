# Master SEO & GEO Optimization Guide

คู่มือฉบับนี้คือ **Master Template** สำหรับการตั้งค่า SEO (Search Engine Optimization) และ **GEO (Generative Engine Optimization)** เพื่อให้หน้าเว็บของ **360TECHX** ติดอันดับบน Google และถูกนำไปอ้างอิงโดย AI Search Engines (เช่น ChatGPT, Gemini, Perplexity, Google SGE) อย่างแม่นยำ

---

## 1. Metadata Object (ระดับ Page - Technical SEO)
Export ไว้ด้านบนสุดของไฟล์ `page.js` เสมอ

```javascript
// SEO & Technical Optimization
export const metadata = {
  title: '[Page Title] | 360TECHX',
  description: '[Page Description - อธิบายกระชับ ดึงดูดให้คลิก]',
  keywords: '[keyword1, keyword2, 360TECHX, โลจิสติกส์]',
  alternates: {
    canonical: 'https://www.360techx.co/[page-slug]',
  },
  openGraph: {
    title: '[Page Title] | 360TECHX',
    description: '[Page Description]',
    url: 'https://www.360techx.co/[page-slug]',
    siteName: '360TECHX',
    images: [
      {
        url: 'https://www.360techx.co/Logo-interface/[og-image.jpg]',
        width: 1200,
        height: 630,
        alt: '[Page Title]',
      },
    ],
    locale: 'th_TH',
    type: 'website', 
  },
  twitter: {
    card: 'summary_large_image',
    title: '[Page Title] | 360TECHX',
    description: '[Page Description]',
    images: ['https://www.360techx.co/Logo-interface/[og-image.jpg]'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Local SEO (Optional)
  other: {
    'geo.region': 'TH',
    'geo.placename': 'Bangkok, Thailand',
  }
};
```

---

## 2. Structured Data (Schema Markup / JSON-LD)
สำคัญมากสำหรับ **GEO** เพราะ AI (LLMs) จะอ่านข้อมูลที่มีโครงสร้างชัดเจนก่อนเสมอ 

```javascript
export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication", 
        "name": "[ชื่อบริการ เช่น iBID]",
        "operatingSystem": "Web Application, Cloud",
        "applicationCategory": "BusinessApplication",
        "publisher": {
          "@type": "Organization",
          "name": "360TECHX",
          "url": "https://www.360techx.co"
        },
        "description": "[คำอธิบายบริการแบบตรงไปตรงมาให้ AI เข้าใจง่าย]",
        "offers": {
          "@type": "Offer",
          "price": "0", 
          "priceCurrency": "THB"
        }
      },
      // FAQ Schema (สำคัญมากสำหรับ GEO เพราะ AI ชอบตอบคำถาม)
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "[คำถามข้อที่ 1]",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "[คำตอบข้อที่ 1]"
            }
          }
        ]
      }
    ]
  };

  return (
    <div style={{ background: 'var(--bg-main)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Page Content... */}
    </div>
  );
}
```

---

## 3. GEO (Generative Engine Optimization) Guidelines 🤖
การปรับแต่งโค้ดและเนื้อหาเพื่อให้ **AI Search (ChatGPT, Gemini, Perplexity, SGE)** เข้าใจ หยิบข้อมูลไปตอบ และให้เครดิตอ้างอิง (Cite) กลับมายังเว็บไซต์ของเรา

1. **Semantic HTML (โค้ดต้องสื่อความหมาย):**
   - AI อ่าน HTML เป็นหลัก ห้ามใช้ `<div>` ครอบทุกอย่าง 
   - ให้ใช้ 태็ก Semantic เช่น `<section>`, `<article>`, `<header>`, `<main>`, `<ul>`, `<ol>`
   - ใช้ Heading `<h1>` ถึง `<h6>` เรียงตามลำดับห้ามข้ามขั้น เพื่อบอกลำดับชั้นของความสำคัญให้ AI ทราบ

2. **Direct Answer & Clarity (ตอบให้ชัด ไม่อ้อมค้อม):**
   - AI เกลียดภาษาการตลาดที่กำกวม (Fluff) 
   - ในทุกหน้า ควรมี 1 ย่อหน้าที่อธิบายตรงๆ เช่น *"iBID คือ แพลตฟอร์มประมูลงานขนส่งออนไลน์แบบ B2B ที่ช่วยให้ Shipper ประหยัดต้นทุนและหาผู้ขนส่งได้โปร่งใส"* 

3. **Data & Statistics (ดึงดูด AI ด้วยตัวเลข):**
   - AI รักสถิติและตัวเลขที่จับต้องได้ (เช่น ประหยัดต้นทุน 10%, รองรับ 110 เส้นทาง)
   - ข้อมูลสถิติควรจัดวางให้อยู่ในรูปแบบ Table (`<table>`) หรือ Bullet Points (`<ul>`) จะทำให้บอทนำไปประมวลผลต่อได้ง่ายที่สุด

4. **Authoritative Tone & FAQ:**
   - การมี Section **คำถามที่พบบ่อย (FAQ)** เป็นไม้ตายของ GEO เพราะ AI มักจะนำคำตอบจาก FAQ ไปตอบผู้ใช้งานเมื่อโดนถามตรงๆ

---

## 📝 Checklist ก่อน Deploy (สำหรับทีม Dev)
- [ ] `canonical` ถูกอัปเดตเป็น URL ปลายทางจริงๆ หรือไม่?
- [ ] โครงสร้าง HTML ใช้ `<section>`, `<article>` แทน `<div>` ในจุดที่เป็นเนื้อหาหลักหรือยัง?
- [ ] มีการฝัง `FAQPage` Schema ในหน้าที่อธิบายบริการหลักครบถ้วนหรือไม่?
- [ ] มีพารากราฟแรกที่อธิบายภาพรวมซอฟต์แวร์แบบ "เข้าใจง่าย ไม่อ้อมค้อม" ให้ AI อ่านแล้วหรือยัง?
