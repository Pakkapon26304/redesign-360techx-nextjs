'use client';
import React, { useState } from 'react';

export default function WorkflowTabsSection() {
  const steps = [
    {
      tab: 'Orders',
      title: 'Orders',
      description: 'รับข้อมูลออเดอร์เข้าสู่ระบบ',
      mockupLabel: 'หน้าจอรับออเดอร์',
    },
    {
      tab: 'Plan',
      title: 'Plan',
      description: 'จัดออเดอร์และรถให้เหมาะสม',
      mockupLabel: 'หน้าจอวางแผน',
    },
    {
      tab: 'Book',
      title: 'Book',
      description: 'ประสานงานและจองรถ',
      mockupLabel: 'หน้าจอจองรถ',
    },
    {
      tab: 'Dispatch',
      title: 'Dispatch',
      description: 'นำแผนไปใช้งานจริง',
      mockupLabel: 'หน้าจอจ่ายงาน',
    },
    {
      tab: 'Track',
      title: 'Track',
      description: 'ติดตามสถานะการจัดส่ง',
      mockupLabel: 'หน้าจอติดตามสถานะ',
    },
    {
      tab: 'Analyze',
      title: 'Analyze',
      description: 'วิเคราะห์ประสิทธิภาพการขนส่ง',
      mockupLabel: 'Dashboard',
    },
  ];

  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = steps[activeStepIndex];

  return (
    <section id="flow" className="landing-workflow-section">
      <div className="landing-container">
        <h2 className="section-title">จากออเดอร์ถึงการวิเคราะห์ ในระบบเดียวที่เชื่อมต่อกัน</h2>

        {/* Tab Navigation */}
        <div className="workflow-tabs-nav" role="tablist" aria-label="ขั้นตอนการทำงาน">
          {steps.map((step, index) => (
            <button
              key={step.tab}
              role="tab"
              type="button"
              aria-selected={activeStepIndex === index}
              className={`workflow-tab-btn ${activeStepIndex === index ? 'active' : ''}`}
              onClick={() => setActiveStepIndex(index)}
              onMouseEnter={() => setActiveStepIndex(index)}
            >
              {step.tab}
            </button>
          ))}
        </div>

        {/* Tab Content Panel */}
        <div className="workflow-panel" role="tabpanel" aria-live="polite">
          <div className="workflow-info">
            <h3 className="workflow-step-title">{currentStep.title}</h3>
            <p className="workflow-step-desc">{currentStep.description}</p>
          </div>
          <div className="workflow-screenshot-box">
            <div className="screenshot-placeholder">
              พื้นที่วางภาพหน้าจอระบบจริง: {currentStep.mockupLabel}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

