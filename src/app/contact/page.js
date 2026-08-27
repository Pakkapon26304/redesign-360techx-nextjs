import React from 'react';
import ContactHeroSection from './components/ContactHeroSection';
import ContactInfoFormSection from './components/ContactInfoFormSection';
import ContactTestimonialSection from './components/ContactTestimonialSection';
import ContactFaqSection from './components/ContactFaqSection';
import ContactMapSection from './components/ContactMapSection';

export const metadata = {
  title: 'ติดต่อเรา - 360TECHX',
  description: 'ติดต่อทีมงาน 360TECHX เพื่อสอบถามข้อมูลเพิ่มเติมเกี่ยวกับระบบจัดการขนส่ง TMS ขอคำปรึกษาจากผู้เชี่ยวชาญได้ที่นี่',
  alternates: {
    canonical: 'https://www.360techx.co/contact',
  }
};

export default function ContactPage() {
  return (
    <main>
      <ContactHeroSection />
      <ContactInfoFormSection />
      {/* <ContactTestimonialSection /> */}
      {/* <ContactFaqSection /> */}
      <ContactMapSection />
    </main>
  );
}
