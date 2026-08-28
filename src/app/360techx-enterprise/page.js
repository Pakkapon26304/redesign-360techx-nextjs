import React from 'react';
import TmsEnterpriseHeroSection from './components/TmsEnterpriseHeroSection';
import TmsEnterpriseIntroSection from './components/TmsEnterpriseIntroSection';
import TmsEnterpriseCustomerLogosSection from './components/TmsEnterpriseCustomerLogosSection';
import TmsEnterpriseFeature1Section from './components/TmsEnterpriseFeature1Section';
import TmsEnterpriseFeature2Section from './components/TmsEnterpriseFeature2Section';
import TmsEnterpriseFeature3Section from './components/TmsEnterpriseFeature3Section';
import TmsEnterpriseFeature4Section from './components/TmsEnterpriseFeature4Section';
import TmsEnterpriseIntegrationSection from './components/TmsEnterpriseIntegrationSection';
import TmsEnterpriseBusinessFlowSection from './components/TmsEnterpriseBusinessFlowSection';
import TmsEnterpriseServicesSection from './components/TmsEnterpriseServicesSection';
import TmsEnterprisePricingSection from './components/TmsEnterprisePricingSection';
import TmsEnterpriseCtaSection from './components/TmsEnterpriseCtaSection';

// SEO & Technical Optimization
export const metadata = {
  title: 'TMS Enterprise | ระบบจัดการขนส่งสำหรับองค์กรขนาดใหญ่',
  description: 'บริหารจัดการงานขนส่งแบบครบวงจรสำหรับธุรกิจ Enterprise เพิ่มประสิทธิภาพ ลดต้นทุน วางแผนเส้นทางอัจฉริยะ และติดตามสถานะแบบ Real-time',
  keywords: 'TMS Enterprise, 360TECHX, ระบบจัดการขนส่ง, Logistics, ERP Integration, Fleet Management',
  alternates: {
    canonical: 'https://www.360techx.co/360techx-enterprise',
  },
  openGraph: {
    title: 'TMS Enterprise | ระบบจัดการขนส่งสำหรับองค์กรขนาดใหญ่',
    description: 'บริหารจัดการงานขนส่งแบบครบวงจรสำหรับธุรกิจ Enterprise เพิ่มประสิทธิภาพ ลดต้นทุน และวางแผนเส้นทางอัจฉริยะ',
    url: 'https://www.360techx.co/360techx-enterprise',
    siteName: '360TECHX',
    images: [
      {
        url: 'https://www.360techx.co/Logo-interface/CONVERGENT_PROCESSES.jpeg',
        width: 1200,
        height: 630,
        alt: 'TMS Enterprise',
      },
    ],
    locale: 'th_TH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TMS Enterprise | ระบบจัดการขนส่งสำหรับองค์กรขนาดใหญ่',
    description: 'บริหารจัดการงานขนส่งแบบครบวงจรสำหรับธุรกิจ Enterprise',
    images: ['https://www.360techx.co/Logo-interface/CONVERGENT_PROCESSES.jpeg'],
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

export default function TmsEnterprisePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "360TECHX TMS Enterprise",
        "operatingSystem": "Web Application, Cloud",
        "applicationCategory": "BusinessApplication",
        "publisher": {
          "@type": "Organization",
          "name": "360TECHX",
          "url": "https://www.360techx.co"
        },
        "description": "ระบบ Transport Management System (TMS) สำหรับองค์กรขนาดใหญ่ รองรับการเชื่อมต่อกับ ERP และ WMS ทุกระบบ",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "THB"
        }
      }
    ]
  };

  return (
    <main style={{ background: 'var(--bg-main)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <TmsEnterpriseHeroSection />
      <TmsEnterpriseIntroSection />
      <TmsEnterpriseCustomerLogosSection />
      <TmsEnterpriseFeature1Section />
      <TmsEnterpriseFeature2Section />
      <TmsEnterpriseFeature3Section />
      {/* <TmsEnterpriseFeature4Section /> */}
      <TmsEnterpriseIntegrationSection />
      <TmsEnterpriseBusinessFlowSection />
      <TmsEnterpriseServicesSection />
      <TmsEnterprisePricingSection />
      <TmsEnterpriseCtaSection />

    </main>
  );
}
