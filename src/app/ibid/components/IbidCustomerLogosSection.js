import React from 'react';

export default function IbidCustomerLogosSection() {
  const logos = [
    '/Logo-customer-ibid/logo-customer-ibid-1.png',
    '/Logo-customer-ibid/logo-customer-ibid-2.png',
    '/Logo-customer-ibid/logo-customer-ibid-3.png',
    '/Logo-customer-ibid/logo-customer-ibid-4.png',
    '/Logo-customer-ibid/logo-customer-ibid-5.png',
    '/Logo-customer-ibid/logo-customer-ibid-6_1.png',
    '/Logo-customer-ibid/logo-customer-ibid-6.png',
    '/Logo-customer-ibid/logo-customer-ibid-7.png'
  ];

  return (
    <>
      {/* Customer Logos Section */}
      <section className="customer-logos-section" style={{ paddingBottom: '4rem' }}>
          <div className="section-header text-center" style={{ marginBottom: '1rem' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                  ได้รับความไว้วางใจจากบริษัทชั้นนำ
              </p>
          </div>
          <div className="logo-slider">
              <div className="logo-slide-track">
                  {/* Logos */}
                  {logos.map((logo, index) => (
                    <div className="slide" key={`ibid-logo-1-${index}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 2rem' }}>
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
                    <div className="slide" key={`ibid-logo-2-${index}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 2rem' }}>
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
