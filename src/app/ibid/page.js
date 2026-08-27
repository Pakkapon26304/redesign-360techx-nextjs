import React from 'react';
import HeroSectionIbid from './components/HeroSectionIbid';
import CoreFeaturesSectionIbid from './components/CoreFeaturesSectionIbid';
import Redesign1SectionIbid from './components/Redesign1SectionIbid';
import ZPatternBenefitsSectionIbid from './components/ZPatternBenefitsSectionIbid';
import StatsSummarySectionIbid from './components/StatsSummarySectionIbid';
import TestimonialSectionIbid from './components/TestimonialSectionIbid';
import FaqSectionIbid from './components/FaqSectionIbid';
import CtaSectionIbid from './components/CtaSectionIbid';

import IbidCustomerLogosSection from './components/IbidCustomerLogosSection';

// SEO & GEO Optimization
export const metadata = {
  title: 'ระบบ iBID ประมูลงานขนส่งออนไลน์ | 360TECHX',
  description: 'แพลตฟอร์มประมูลงานขนส่งออนไลน์ที่ช่วยยกระดับกระบวนการจัดประมูลงานขนส่ง จากเดิมที่ต้องจัดเตรียมเอกสาร ใช้เวลานาน และไม่โปร่งใส มาเป็นระบบออนไลน์ที่จัดการได้ด้วยต้นทุนที่ต่ำ',
  keywords: 'ระบบ iBID, ประมูลงานขนส่งออนไลน์, ประมูลงานโลจิสติกส์, จัดการขนส่ง, TMS, 360TECHX, โปรแกรมประมูลขนส่ง',
  alternates: {
    canonical: 'https://www.360techx.co/ibid',
  },
  openGraph: {
    title: 'ระบบ iBID ประมูลงานขนส่งออนไลน์ | 360TECHX',
    description: 'แพลตฟอร์มประมูลงานขนส่งออนไลน์ที่ช่วยยกระดับกระบวนการจัดประมูลงานขนส่ง ให้โปร่งใส รวดเร็ว และลดต้นทุน',
    url: 'https://www.360techx.co/ibid',
    siteName: '360TECHX',
    images: [
      {
        url: 'https://www.360techx.co/Logo-interface/mockup-วางแผนการขนส่ง.jpg',
        width: 1200,
        height: 630,
        alt: 'ระบบ iBID ประมูลงานขนส่งออนไลน์',
      },
    ],
    locale: 'th_TH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ระบบ iBID ประมูลงานขนส่งออนไลน์ | 360TECHX',
    description: 'แพลตฟอร์มประมูลงานขนส่งออนไลน์ที่ช่วยยกระดับกระบวนการจัดประมูลงานขนส่ง',
    images: ['https://www.360techx.co/Logo-interface/mockup-วางแผนการขนส่ง.jpg'],
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
  other: {
    'geo.region': 'TH',
    'geo.placename': 'Bangkok, Thailand',
  }
};

export default function IbidPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "iBID",
        "operatingSystem": "Web Application, Cloud",
        "applicationCategory": "BusinessApplication",
        "publisher": {
          "@type": "Organization",
          "name": "360TECHX",
          "url": "https://www.360techx.co"
        },
        "description": "แพลตฟอร์มประมูลงานขนส่งออนไลน์ จัดการเส้นทาง เปรียบเทียบราคา และเพิ่มความโปร่งใสในกระบวนการจัดจ้าง",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "THB"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "TMS ของ 360TECHX แตกต่างจาก TMS ในตลาดอย่างไรบ้าง ทำไมถึงควรใช้",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "เราได้นำประสบการณ์การบริหารการขนส่งบน Platform 360TRUCK มาออกแบบระบบ TMS ของ 360TECHX โดยมีจุดเด่น คือ รองรับการใช้งานร่วมกับ 360TRUCK, ใช้งานง่าย และสามารถใช้งาน 360TRUCKER แอปพลิเคชัน สำหรับคนขับรถใช้รายงานสถานะขนส่งได้ไม่จำกัด"
            }
          },
          {
            "@type": "Question",
            "name": "การใช้งาน TECHX TMS จำเป็นต้องมีจำนวนการขนส่งขั้นต่ำ หรือถ้าขนของไม่เต็มคันรถ สามารถใช้งานได้หรือไม่",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "สามารถใช้ได้ทั้งแบบขนเต็มคัน และขนไม่เต็มคันรถ โดยสามารถเริ่มใช้งานได้ฟรีโดยไม่มีการใช้งานขั้นต่ำ"
            }
          },
          {
            "@type": "Question",
            "name": "TECHX TMS สามารถจัดการงานขนส่งได้สูงสุดกี่งาน และในกรณีที่มีการขนส่งเป็นประจำ สามารถสร้างงานขนส่งใหม่จากประวัติการวิ่งงานผ่านระบบ ได้หรือไม่",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "สามารถใช้งานขนส่งได้สูงสุด 100 งานต่อเดือนได้ฟรี โดยสามารถซื้อจำนวนงานเพิ่มเติมได้ และสามารถบันทึกงานประจำและสร้างงานจากงานประจำได้"
            }
          },
          {
            "@type": "Question",
            "name": "อยากใช้งาน 360TECHX TMS จะต้องทำอย่างไรบ้าง",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "สามารถทดลองใช้งานได้ฟรี ผ่านทาง https://tms.360techx.co/signup"
            }
          }
        ]
      }
    ]
  };

  return (
    <main style={{ background: 'var(--bg-main)' }}> {/* Adapts to light/dark mode */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSectionIbid />
      <CoreFeaturesSectionIbid />
      <Redesign1SectionIbid />
      <ZPatternBenefitsSectionIbid />
      <StatsSummarySectionIbid />
      <IbidCustomerLogosSection />
      {/* <TestimonialSectionIbid /> */}
      {/* <FaqSectionIbid /> */}
      <CtaSectionIbid />

    </main>
  );
}
