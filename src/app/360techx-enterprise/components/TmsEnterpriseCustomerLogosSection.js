"use client";
import React from 'react';

export default function TmsEnterpriseCustomerLogosSection() {
  const logos = [
    '/logo-customer-enterprise/logo-customer-enterprise-1.png',
    '/logo-customer-enterprise/logo-customer-enterprise-2.png',
    '/logo-customer-enterprise/logo-customer-enterprise-3.png',
    '/logo-customer-enterprise/logo-customer-enterprise-4.png',
    '/logo-customer-enterprise/logo-customer-enterprise-5.png',
    '/logo-customer-enterprise/logo-customer-enterprise-6.png',
    '/logo-customer-enterprise/logo-customer-enterprise-7.png'
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
                                height: '100px', 
                                width: 'auto', 
                                maxWidth: '250px',
                                objectFit: 'contain',
                                borderRadius: '16px'
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
                                height: '100px', 
                                width: 'auto', 
                                maxWidth: '250px',
                                objectFit: 'contain',
                                borderRadius: '16px'
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
