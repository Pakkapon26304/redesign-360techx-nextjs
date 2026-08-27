# 🎨 360TECHX - Design System

เอกสารนี้สรุปแนวทางการออกแบบ (Design System) ของแพลตฟอร์ม 360TECHX เพื่อให้ทีมนักพัฒนา (Developers) และนักออกแบบ (Designers) สามารถนำไปต่อยอดและรักษาความสม่ำเสมอของ UI/UX ได้อย่างถูกต้อง

---

## 1. 🌈 Color Palette (โทนสี)
ระบบสีหลักถูกแบ่งออกเป็นโหมด Dark (ค่าเริ่มต้น) และ Light โทนสีจะเน้นไปที่ความล้ำสมัย (Futuristic) และความน่าเชื่อถือแบบเทคโนโลยี

### Brand Colors (สีประจำแบรนด์)
- **Primary (สีหลัก):** `#32ff98` (Neon Green) - ใช้สำหรับปุ่มกด, ข้อความที่ต้องการเน้น, และแสง Glow
- **Secondary (สีรอง):** `#03665e` (Deep Teal) - ใช้ควบคู่กับสี Primary ในการทำ Gradient หรือเงา

### Dark Mode (พื้นหลังและข้อความ)
- **Background:** `#0a0f16` (Deep Navy/Black)
- **Glass Card BG:** `rgba(255, 255, 255, 0.03)` (โปร่งแสงเล็กน้อย)
- **Border:** `rgba(255, 255, 255, 0.1)` (เส้นขอบจางๆ แบบกระจก)
- **Text Main:** `#f8fafc` (Slate 50)
- **Text Muted:** `#cbd5e1` (Slate 300)

### Light Mode (พื้นหลังและข้อความ)
- **Background:** `#f8fafc` (Slate 50)
- **Glass Card BG:** `rgba(255, 255, 255, 0.85)` (พื้นผิวขาวขุ่น)
- **Border:** `rgba(0, 0, 0, 0.08)` (เส้นขอบเทาอ่อน)
- **Text Main:** `#0f172a` (Slate 900)
- **Text Muted:** `#475569` (Slate 600)

---

## 2. 🔤 Typography (ตัวอักษร)
ใช้งาน Google Fonts ควบคู่กันเพื่อให้อ่านง่ายและดูทันสมัย

- **Font Family (ทุกส่วน):** `'Kanit', sans-serif`
- **น้ำหนัก (Weights):** 
  - `300` (Light) - สำหรับเนื้อหายาวๆ
  - `400` (Regular) - สำหรับข้อความทั่วไป (Body Text)
  - `600` (Semi-Bold) - สำหรับหัวข้อ (Headings, H1-H6)
- **Line Height:** `1.6` สำหรับ Body และ `1.2` สำหรับ Headings

---

## 3. 🪄 UI Elements & Components (ชิ้นส่วน UI)

### 🔘 Buttons (ปุ่มกด)
ใช้ Class มาตรฐาน `.btn` ควบคู่กับ Modifier

1. **Primary Button:** `.btn.btn-primary`
   - พื้นหลังแบบ Gradient `linear-gradient(135deg, var(--primary), var(--secondary))`
   - ตัวอักษรสีดำ (Dark Mode) เพื่อความตัดกัน
2. **Outline Button:** `.btn.btn-outline`
   - พื้นหลังใสขอบสีขาว `.border-color`
   - เมื่อโฮเวอร์ (Hover) จะมีขอบเป็นสี Primary พร้อมแสงเรืองรอง

### 🪞 Glassmorphism Cards (การ์ดแบบกระจก)
สร้างความลึกให้กับหน้าจอ ใช้บ่อยในส่วนของ Features และ ข่าวสาร
- **Class ที่ต้องใช้:** `.glass-card`
- **เอฟเฟกต์ (Effect):** `backdrop-filter: blur(12px)`
- **Hover Effect:** เพิ่มคลาส `.hover-lift` เพื่อให้การ์ดเด้งลอยขึ้นเมื่อเอาเมาส์ชี้ (`transform: translateY(-5px)`)

### 🌟 Gradients & Glows (แสงและเงา)
- **Text Gradient:** `.text-gradient` (ไล่สีจาก Primary ไป Secondary ทาบบนตัวอักษร)
- **Glow Orbs (ดวงไฟพื้นหลัง):** `.glow-orb` + `.orb-1` หรือ `.orb-2` (ดวงกลมฟุ้งๆ เบลอ `150px` สร้าง Vibe แบบไซไฟ)

---

## 4. 📐 Layout & Spacing
- **Container Max-Width:** `1200px` (เพื่อควบคุมความกว้างสูงสุดของเนื้อหาไม่ให้ล้นจอใหญ่เกินไป)
- **Padding แนวนอน (Mobile):** `2rem` สำหรับหน้าจอทั่วไป
- **Grid System:** เน้นการใช้ CSS Grid (เช่น `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`) เพื่อให้เป็น Responsive ทันทีโดยไม่ต้องเขียน Media Query เยอะ

---

## 5. 🎞️ Animation & Motion
- **Global Transition:** `all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)` (โค้งการเคลื่อนไหวที่นุ่มนวล)
- **Scroll Reveal:** ใช้คลาส `.reveal` คู่กับ Component `ScrollReveal.jsx`
  - องค์ประกอบจะเริ่มต้นด้วย `opacity: 0; transform: translateY(40px);`
  - เมื่อเลื่อนจอมาถึง จะถูกใส่คลาส `.active` เพื่อเลื่อนกลับที่เดิมและค่อยๆ ชัดขึ้น
