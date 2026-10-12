'use client';
import React, { useState } from 'react';
import {
  HeroSection,
  PainPointsSection,
  WorkflowTabsSection,
  OutcomesSection,
  SavingCalculatorSection,
  WhyEnterpriseSection,
  IndustrySolutionsSection,
  CrowdsourcingSection,
  StatsSection,
  AssessmentQuizSection,
  PricingComparisonSection,
  FaqSection,
  DemoFormSection,
} from './components';

import {
  EnterpriseVisionSection,
  EnterpriseConvergentProcessSection,
  EnterpriseCloudIntegrationSection,
  EnterpriseBuiltToSuitSection,
  EnterpriseCommunitySynergySection,
  EnterpriseRoiSection,
} from './components/enterprise';

import {
  BasicKeyFeaturesSection,
  BasicRevenueBackhaulSection,
  BasicPricingTableSection,
  BasicStartStepsSection,
} from './components/basic';

export default function RewriteDetailPage() {
  const [activeTab, setActiveTab] = useState('landing');

  return (
    <main
      className="rewrite-detail-preview-page"
      style={{ padding: '2rem 1rem', maxWidth: '1200px', margin: '0 auto' }}
    >
      {/* Header Controller Bar */}
      <div
        style={{
          marginBottom: '2.5rem',
          padding: '1.5rem',
          background: 'rgba(255,255,255,0.04)',
          borderRadius: '12px',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          🛠️ Preview Components จาก HTML ของหัวหน้า (Clean Markup, No CSS Clash)
        </h1>
        <p style={{ color: '#888', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
          แปลงแยกเป็น Component อิสระทั้งหมดเรียบร้อยแล้ว ไม่มี CSS เก่าติดมา เพื่อให้คุณปรับแต่ง
          Design และเลือก Import ไปวางในหน้าจริงได้ทันที
        </p>

        {/* Navigation Tabs */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={() => setActiveTab('landing')}
            style={{
              padding: '8px 18px',
              borderRadius: '20px',
              border: '1px solid #444',
              background: activeTab === 'landing' ? 'var(--primary, #32ff98)' : 'transparent',
              color: activeTab === 'landing' ? '#000' : '#fff',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            🏠 Landing Page (Home) (13 ส่วน)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('enterprise')}
            style={{
              padding: '8px 18px',
              borderRadius: '20px',
              border: '1px solid #444',
              background: activeTab === 'enterprise' ? 'var(--primary, #32ff98)' : 'transparent',
              color: activeTab === 'enterprise' ? '#000' : '#fff',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            🏢 TMS Enterprise (6 ส่วน)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('basic')}
            style={{
              padding: '8px 18px',
              borderRadius: '20px',
              border: '1px solid #444',
              background: activeTab === 'basic' ? 'var(--primary, #32ff98)' : 'transparent',
              color: activeTab === 'basic' ? '#000' : '#fff',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            🚚 TMS Basic (4 ส่วน)
          </button>
        </div>
      </div>

      {/* TAB 1: LANDING PAGE */}
      {activeTab === 'landing' && (
        <div className="tab-content-group">
          <SectionDivider title="1. Hero Section" />
          <HeroSection />

          <SectionDivider title="2. Pain Points Section" />
          <PainPointsSection />

          <SectionDivider title="3. Workflow Tabs Section (Interactive)" />
          <WorkflowTabsSection />

          <SectionDivider title="4. Outcomes Section" />
          <OutcomesSection />

          <SectionDivider title="5. Transportation Saving Calculator &amp; Simulator (Interactive)" />
          <SavingCalculatorSection />

          <SectionDivider title="6. 6 Reasons for Enterprise" />
          <WhyEnterpriseSection />

          <SectionDivider title="7. Industry Solutions Tabs (Interactive)" />
          <IndustrySolutionsSection />

          <SectionDivider title="8. Crowdsourcing Capacity (360TRUCK)" />
          <CrowdsourcingSection />

          <SectionDivider title="9. Measured Results (Stats)" />
          <StatsSection />

          <SectionDivider title="10. Assessment Quiz (Interactive)" />
          <AssessmentQuizSection />

          <SectionDivider title="11. Packages Comparison" />
          <PricingComparisonSection />

          <SectionDivider title="12. FAQs" />
          <FaqSection />

          <SectionDivider title="13. Enterprise Demo Request Form" />
          <DemoFormSection />
        </div>
      )}

      {/* TAB 2: ENTERPRISE */}
      {activeTab === 'enterprise' && (
        <div className="tab-content-group">
          <SectionDivider title="1. Enterprise Vision &amp; Differentiator" />
          <EnterpriseVisionSection />

          <SectionDivider title="2. Convergent Processes (6 Steps)" />
          <EnterpriseConvergentProcessSection />

          <SectionDivider title="3. Cloud Ecosystem &amp; RESTful API Gateway" />
          <EnterpriseCloudIntegrationSection />

          <SectionDivider title="4. Built-to-Suit Flexibility &amp; 4 Enterprise Services" />
          <EnterpriseBuiltToSuitSection />

          <SectionDivider title="5. Digital Community &amp; Fleet Synergy" />
          <EnterpriseCommunitySynergySection />

          <SectionDivider title="6. ROI &amp; Enterprise Success Story" />
          <EnterpriseRoiSection />
        </div>
      )}

      {/* TAB 3: BASIC */}
      {activeTab === 'basic' && (
        <div className="tab-content-group">
          <SectionDivider title="1. 4 Core Features for SMEs" />
          <BasicKeyFeaturesSection />

          <SectionDivider title="2. Backhaul &amp; Unlock Revenue (360TRUCK)" />
          <BasicRevenueBackhaulSection />

          <SectionDivider title="3. Pricing &amp; Comparison Table (Starter vs Basic Monthly)" />
          <BasicPricingTableSection />

          <SectionDivider title="4. 3 Steps to Start" />
          <BasicStartStepsSection />
        </div>
      )}
    </main>
  );
}

function SectionDivider({ title }) {
  return (
    <div style={{ margin: '4rem 0 1.5rem', borderBottom: '1px dashed rgba(255,255,255,0.15)', paddingBottom: '0.5rem' }}>
      <span style={{ fontSize: '0.85rem', color: '#ffbd59', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
        {title}
      </span>
    </div>
  );
}

