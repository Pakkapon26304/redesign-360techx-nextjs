"use client";
import React from 'react';

export default function TmsEnterpriseCustomerLogosSection() {
  const logos = [
    '/logo-customer-enterprise/15214.png',
    '/logo-customer-enterprise/Logistics-Asia-logo-2021.jpg',
    '/logo-customer-enterprise/PTG_Energy_Logo.svg.webp',
    '/logo-customer-enterprise/TRR-LIN-INB-TH-Expand.png',
    '/logo-customer-enterprise/images.png',
    '/logo-customer-enterprise/logo.webp',
    '/logo-customer-enterprise/logo_o.png'
  ];

  return (
    <>
      {/* Customer Logos Section */}
      <section className="customer-logos-section" style={{ paddingBottom: '4rem' }}>
          <div className="section-header text-center" style={{ marginBottom: '1rem' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                ได้รับความไว้วางใจจากองค์กรชั้นนำ
              </p>
          </div>
          <div className="logo-slider">
              <div className="logo-slide-track">
                  {/* Logos */}
                  {logos.map((logo, index) => (
                    <div className="slide" key={`logo-1-${index}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 2rem' }}>
                        <img 
                            src={logo} 
                            alt={`Customer Logo ${index + 1}`} 
                            style={{ 
                                height: '60px', 
                                width: 'auto', 
                                maxWidth: '180px',
                                objectFit: 'contain'
                            }} 
                        />
                    </div>
                  ))}
                  {/* Duplicate for infinite effect */}
                  {logos.map((logo, index) => (
                    <div className="slide" key={`logo-2-${index}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 2rem' }}>
                        <img 
                            src={logo} 
                            alt={`Customer Logo ${index + 1}`} 
                            style={{ 
                                height: '60px', 
                                width: 'auto', 
                                maxWidth: '180px',
                                objectFit: 'contain'
                            }} 
                        />
                    </div>
                  ))}
              </div>
          </div>
      </section>
    </>
  );
}
