# 🗄️ โครงสร้างฐานข้อมูล (Data Structure) สำหรับ CMS ข่าวสารที่ถูกหลัก SEO 100%

สำหรับการพัฒนาระบบ CMS แบบ In-house (เช่น การใช้ Supabase, PostgreSQL, MongoDB, หรือ Headless CMS ตัวอื่นๆ) ทีม Developer สามารถนำโครงสร้าง (Schema) นี้ไปใช้งานสร้างตารางฐานข้อมูลได้ทันที โครงสร้างนี้ออกแบบมาเพื่อรองรับ Technical SEO ขั้นสุดยอดที่ Google ต้องการครับ

---

## 📋 Table: `articles` (ตารางเก็บบทความ/ข่าวสาร)

| Field Name | Data Type | Requirement | Description / SEO Purpose |
| :--- | :--- | :---: | :--- |
| `id` | `UUID` / `Int` | **Required** | รหัสอ้างอิงที่ไม่ซ้ำกันของบทความ |
| `title` | `String` | **Required** | ชื่อบทความหลัก (จะถูกนำไปใช้เป็นแท็ก `<h1>` ภายในหน้าเว็บ) |
| `slug` | `String` | **Required** | URL ที่อ่านออกเสียงและเข้าใจความหมายได้ เช่น `what-is-tms-system` (สำคัญมากต่อ SEO) **ห้ามมีช่องว่างเด็ดขาด** |
| `excerpt` | `Text` | Optional | คำโปรยสั้นๆ เพื่อใช้แสดงผลหน้าการ์ดข่าวสาร และสามารถดึงไปใช้เป็น Meta Description สำรองได้ |
| `content` | `Rich Text` | **Required** | เนื้อหาบทความทั้งหมด (รองรับ HTML/Markdown) เพื่อให้ทีม Content สามารถใส่แท็ก `<h2>`, `<h3>` ซ้อนลงไปได้ |
| `cover_image` | `String` (URL)| **Required** | ลิงก์รูปภาพหน้าปก |
| `cover_image_alt` | `String` | **Required** | **[SEO]** คำอธิบายรูปภาพหน้าปก สำหรับให้บอทของ Google อ่าน (คนตาบอดก็จะได้ยินคำนี้) |
| `author_id` | `UUID` / `Int` | **Required** | รหัสอ้างอิงถึงผู้เขียน (Google ชอบบทความที่มีความน่าเชื่อถือแบบ E-E-A-T ระบุตัวตนผู้เขียนได้ชัดเจน) |
| `category_id` | `UUID` / `Int` | **Required** | รหัสหมวดหมู่ข่าวสาร เช่น หมวด "Logistics Trend" (ช่วยทำ SEO แบบ Silo Structure) |

---

## 🎯 SEO Specific Fields (ฟิลด์พิเศษสำหรับหน้า SEO)
ฟิลด์กลุ่มนี้ ทีม Content จะเป็นคนกรอกเพื่อให้ Next.js ดึงไปสร้างแท็ก `<meta>` บน <head> ของเว็บไซต์

| Field Name | Data Type | Requirement | Description / SEO Purpose |
| :--- | :--- | :---: | :--- |
| `meta_title` | `String` | Optional | **[SEO]** ชื่อเรื่องที่จะให้โชว์บนผลการค้นหาของ Google (ถ้าไม่กรอก จะดึงจากช่อง `title` แทน) ควรรองรับสูงสุด ~60 ตัวอักษร |
| `meta_description`| `String` | Optional | **[SEO]** คำอธิบายใต้ลิงก์บน Google ควรรองรับสูงสุด ~150-160 ตัวอักษร |
| `canonical_url` | `String` | Optional | **[SEO]** หากไปก๊อปปี้บทความจากเว็บอื่นมาแปะ ให้ใส่ URL ของเว็บต้นฉบับลงในช่องนี้ เพื่อป้องกัน Google มองว่าเป็นเนื้อหาซ้ำซ้อน (Duplicate Content) |
| `focus_keyword` | `String` | Optional | คำค้นหาเป้าหมายหลัก (สำหรับระบบ CMS ไว้เช็คว่าทีมเขียนบทความมีคำนี้ปรากฏเยอะไหม) |
| `is_indexed` | `Boolean` | Default: `true` | **[SEO]** ถ้าตั้งเป็น `false` จะฝังคำสั่ง `noindex` บอกให้บอทของ Google ไม่ต้องนำหน้านี้ไปขึ้นระบบค้นหา (เช่น ข่าวภายในองค์กร) |

---

## ⏱️ Tracking Fields (ฟิลด์เวลาที่ Google ให้ความสำคัญ)

| Field Name | Data Type | Requirement | Description / SEO Purpose |
| :--- | :--- | :---: | :--- |
| `status` | `Enum` | **Required** | สถานะของข่าว (`DRAFT`, `PUBLISHED`, `ARCHIVED`) |
| `published_at` | `Timestamp` | **Required** | **[SEO]** วันที่และเวลาที่ตีพิมพ์บทความ เพื่อให้ Google รู้ว่าข่าวนี้สดใหม่แค่ไหน |
| `updated_at` | `Timestamp` | **Required** | **[SEO]** วันที่และเวลาที่มีการแก้ไขเนื้อหาล่าสุด (สำคัญมาก Google ชอบเว็บที่มีการอัปเดตบทความเก่าให้ทันสมัยอยู่เสมอ) |

---

## 🛠️ ตัวอย่างการนำไปใช้ใน Next.js (ฝากให้ Developer)

เมื่อฐานข้อมูลมีโครงสร้างแบบด้านบน เวลาทีม Dev เขียนโค้ดใน Next.js (App Router) สามารถนำข้อมูลมา Gen ใส่ SEO ได้ทันทีแบบนี้ครับ:

```javascript
// src/app/news/[slug]/page.js

export async function generateMetadata({ params }) {
  // 1. ดึงข้อมูลจากฐานข้อมูลตาม Slug ที่ผู้ใช้คลิก
  const article = await fetchArticleBySlug(params.slug);

  // 2. โยนข้อมูลใส่ Metadata ของ Next.js
  return {
    title: article.meta_title || article.title,
    description: article.meta_description || article.excerpt,
    alternates: {
      canonical: article.canonical_url || `https://360techx.co/news/${article.slug}`,
    },
    openGraph: {
      title: article.meta_title || article.title,
      description: article.meta_description || article.excerpt,
      images: [
        {
          url: article.cover_image,
          alt: article.cover_image_alt,
        },
      ],
      type: 'article',
      publishedTime: article.published_at,
      modifiedTime: article.updated_at,
    },
    robots: {
      index: article.is_indexed,
      follow: article.is_indexed,
    }
  };
}
```
