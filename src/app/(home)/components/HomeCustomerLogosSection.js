import React from 'react';

export default function HomeCustomerLogosSection() {
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
      <section className="customer-logos-section">
          <div className="section-header text-center" style={{ marginBottom: '2rem' }}>
              <p>ได้รับความไว้วางใจจากบริษัทชั้นนำ</p>
          </div>
          <div className="logo-slider">
              <div className="logo-slide-track">
                  {/* Logos */}
                  {logos.map((logo, index) => (
                    <div className="slide" key={`home-logo-1-${index}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 2rem' }}>
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
                    <div className="slide" key={`home-logo-2-${index}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 2rem' }}>
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
