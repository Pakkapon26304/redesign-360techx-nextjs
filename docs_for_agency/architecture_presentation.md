# 🏗️ สถาปัตยกรรมเทคโนโลยีเว็บไซต์ (Tech Stack Architecture Proposal)
**ฉบับอัปเดต: สรุปมติที่ประชุม Co-Founder 360TECHX**

เอกสารนี้สรุปภาพรวมโครงสร้างระบบ (Architecture) ที่เคาะร่วมกันแล้ว ว่าเราจะใช้สถาปัตยกรรม **"Headless WordPress (Hybrid CMS)"** เพื่อผสานจุดแข็งระหว่างดีไซน์ล้ำสมัย (Vibe Code) กับความคุ้นเคยของระบบหลังบ้านเดิม

---

## 1. 🎯 สรุปมติที่ประชุม (Executive Summary)
1. **Frontend (หน้าบ้าน):** `www.360techx.co` จะเป็น Next.js (Vibe Code) เน้นทำ SEO & GEO โหลดเร็วติดจรวด และโฮสต์บน Server ของ Agency
2. **Backend (หลังบ้าน):** ย้าย WordPress ตัวเดิมไปไว้ที่ Subdomain `blog.360techx.co` เพื่อทำหน้าที่เป็น Headless CMS (ระบบพิมพ์ข่าว) ส่งข้อมูลผ่าน API
3. **Lead Management:** ข้อมูลลูกค้าทั้งหมดที่กรอกฟอร์ม จะถูกยิงผ่าน API ไปเก็บไว้ที่ Database ของ WordPress โดยตรง เพื่อให้ Sales/Marketing จัดการต่อได้ง่าย

---

## 2. 🛠️ เครื่องมือที่ใช้ (Final Tech Stack)

### 🖥️ Frontend (www.360techx.co)
*   **Core Framework:** `Next.js (App Router)`
*   **Styling:** `CSS Variables` & `Glassmorphism UI`
*   **Hosting:** `Agency Server (e.g., Vercel / AWS)`
*   **Key Features:** Server-Side Rendering (SSR) เพื่อทำ SEO ระดับสูงสุด, ควบคุม Layout ได้ 100%

### ⚙️ Backend & CMS (blog.360techx.co)
*   **Headless CMS:** `WordPress` (ทำหน้าที่เป็นตัวส่ง Data อย่างเดียว ไม่มีการใช้ Theme สวยงาม)
*   **API Protocol:** `WP REST API` หรือ `WPGraphQL`
*   **Database:** `MySQL/MariaDB` (ฐานข้อมูลเดิมของ WordPress)
*   **Key Features:** ทีม Marketing ทำงานบนระบบที่คุ้นเคย ใช้ปลั๊กอิน SEO (Yoast) ได้เหมือนเดิม

### 📈 Marketing & Lead Generation
*   **Contact Form:** หน้าเว็บ Next.js จะส่ง Data POST ไปเข้าปลั๊กอินฟอร์มใน WordPress (เช่น Contact Form 7 REST API หรือ WPForms) เพื่อเก็บ Lead ลูกค้า
*   **Tracking:** ฝัง GTM / GA4 / FB Pixel ไว้ในโครงของ Next.js โดยผูกกับ Cookie Consent

---

## 🗺️ 3. แผนภาพสถาปัตยกรรม (Hybrid Headless Architecture)

```mermaid
graph TD
    %% Define Styles
    classDef user fill:#f9f9f9,stroke:#333,stroke-width:2px;
    classDef fe fill:#000,stroke:#fff,stroke-width:2px,color:#fff;
    classDef be fill:#21759b,stroke:#005177,stroke-width:2px,color:#fff;
    classDef mkt fill:#ea580c,stroke:#c2410c,stroke-width:2px,color:#fff;

    U((ผู้ใช้งานเว็บ / ลูกค้า)):::user --> |เข้าชม www.360techx.co| FE

    subgraph "Frontend (Agency Server)"
        FE[Next.js Vibe Code<br/>SEO & GEO Optimized]:::fe
    end

    subgraph "Backend (blog.360techx.co)"
        WP[WordPress Headless CMS<br/>(WP REST API)]:::be
        DB[(WordPress Database<br/>Articles & Leads)]:::be
    end

    subgraph "Marketing & Sales"
        MKT_T[ทีม Marketing & Sales]:::mkt
    end

    %% Connections
    FE -->|ดึงข้อมูลข่าวสาร (GET)| WP
    FE -->|ส่งข้อมูล Lead (POST)| WP
    WP <--> DB
    
    MKT_T --> |ล็อกอินเขียนข่าว / ดูรายชื่อลูกค้า| WP
```

---

## 💡 4. ข้อดีของสถาปัตยกรรมนี้ (Why this is the best move)
1. **Zero Learning Curve:** ทีม Marketing ทำงานได้ทันทีไม่ต้องเรียนรู้ CMS ใหม่
2. **Best of Both Worlds:** ได้ความเร็วและดีไซน์สุดล้ำของ Next.js พร้อมกับความสะดวกของ WordPress
3. **Data Centralization:** เก็บรายชื่อ Lead ลูกค้าทั้งหมดไว้ในที่เดียว (WP Database) จัดการง่าย
4. **Security Isolation:** แฮกเกอร์โจมตี `www` ไม่ได้เพราะเป็นเว็บแบบ Static/SSR และเราสามารถซ่อน `blog` ให้เข้าได้เฉพาะทีมงานได้
