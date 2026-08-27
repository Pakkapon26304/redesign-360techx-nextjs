import React from 'react';

export default function IbidCustomerLogosSection() {
  const logos = [
    '/Logo-customer-ibid/clients-logo-1.png',
    '/Logo-customer-ibid/clients-logo-2.png',
    '/Logo-customer-ibid/clients-logo-3.png',
    '/Logo-customer-ibid/clients-logo-4.png',
    '/Logo-customer-ibid/clients-logo-5.png',
    '/Logo-customer-ibid/clients-logo-6.png',
    '/Logo-customer-ibid/clients-logo-7.png'
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
                    <div className="slide" key={`ibid-logo-1-${index}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 2rem' }}>
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
                    <div className="slide" key={`ibid-logo-2-${index}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 2rem' }}>
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
