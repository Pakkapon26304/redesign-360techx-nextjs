import React from 'react';
import HomeHeroSection from './components/HomeHeroSection';
import HomeHighlightSection from './components/HomeHighlightSection';
import HomeCoreFeaturesSection from './components/HomeCoreFeaturesSection';
import HomeTmsTiersSection from './components/HomeTmsTiersSection';
import HomeTimelineSection from './components/HomeTimelineSection';
import HomePricingSection from './components/HomePricingSection';
import TmsEnterpriseCustomerLogosSection from '../360techx-enterprise/components/TmsEnterpriseCustomerLogosSection';

// SEO & GEO Optimization
export const metadata = {
  title: 'หน้าหลัก - 360TECHX | ระบบบริหารจัดการงานขนส่ง',
  description: 'ระบบบริหารจัดการงานขนส่งที่จะช่วยให้ธุรกิจของคุณเติบโตอย่างยั่งยืน วิเคราะห์และวางแผนเส้นทางอัตโนมัติ เพื่อประสิทธิภาพสูงสุด',
  keywords: 'TMS, จัดการขนส่ง, 360TECHX, ระบบขนส่ง, Logistics, ประมูลงานขนส่ง',
  alternates: {
    canonical: 'https://www.360techx.co',
  },
  openGraph: {
    title: 'หน้าหลัก - 360TECHX | ระบบบริหารจัดการงานขนส่ง',
    description: 'ระบบบริหารจัดการงานขนส่งที่จะช่วยให้ธุรกิจของคุณเติบโตอย่างยั่งยืน วิเคราะห์และวางแผนเส้นทางอัตโนมัติ',
    url: 'https://www.360techx.co',
    siteName: '360TECHX',
    images: [
      {
        url: 'https://www.360techx.co/Logo-interface/mockup-วางแผนการขนส่ง.jpg',
        width: 1200,
        height: 630,
        alt: '360TECHX TMS',
      },
    ],
    locale: 'th_TH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'หน้าหลัก - 360TECHX | ระบบบริหารจัดการงานขนส่ง',
    description: 'ระบบบริหารจัดการงานขนส่งที่จะช่วยให้ธุรกิจของคุณเติบโตอย่างยั่งยืน วิเคราะห์และวางแผนเส้นทางอัตโนมัติ',
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

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "360TECHX TMS",
        "operatingSystem": "Web Application, Cloud",
        "applicationCategory": "BusinessApplication",
        "publisher": {
          "@type": "Organization",
          "name": "360TECHX",
          "url": "https://www.360techx.co"
        },
        "description": "ระบบบริหารจัดการงานขนส่ง (TMS) ครบวงจร วิเคราะห์และวางแผนเส้นทาง จัดตารางเวลา และติดตามสถานะแบบเรียลไทม์",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "THB"
        }
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeHeroSection />
      <HomeHighlightSection />
      <HomeCoreFeaturesSection />
      <HomeTmsTiersSection />
      {/* <HomeTimelineSection /> */}
      <HomePricingSection />
      <TmsEnterpriseCustomerLogosSection />

    </main>
  );
}
