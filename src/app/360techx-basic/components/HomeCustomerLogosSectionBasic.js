import React from 'react';

export default function HomeCustomerLogosSectionBasic() {
  return (
    <>
      {/* Customer Logos Section */}
    <section className="customer-logos-section">
        <div className="section-header text-center" style={{ marginBottom: '2rem' }}>
            <p>ได้รับความไว้วางใจจากบริษัทชั้นนำ</p>
        </div>
        <div className="logo-slider">
            <div className="logo-slide-track">
                {/* Logos (duplicated for infinite effect) */}
                <div className="slide"><div className="logo-placeholder">COMPANY A</div></div>
                <div className="slide"><div className="logo-placeholder">COMPANY B</div></div>
                <div className="slide"><div className="logo-placeholder">COMPANY C</div></div>
                <div className="slide"><div className="logo-placeholder">COMPANY D</div></div>
                <div className="slide"><div className="logo-placeholder">COMPANY E</div></div>
                <div className="slide"><div className="logo-placeholder">COMPANY F</div></div>
                <div className="slide"><div className="logo-placeholder">COMPANY G</div></div>
                {/* Duplicate */}
                <div className="slide"><div className="logo-placeholder">COMPANY A</div></div>
                <div className="slide"><div className="logo-placeholder">COMPANY B</div></div>
                <div className="slide"><div className="logo-placeholder">COMPANY C</div></div>
                <div className="slide"><div className="logo-placeholder">COMPANY D</div></div>
                <div className="slide"><div className="logo-placeholder">COMPANY E</div></div>
                <div className="slide"><div className="logo-placeholder">COMPANY F</div></div>
                <div className="slide"><div className="logo-placeholder">COMPANY G</div></div>
            </div>
        </div>
    </section>

    
    </>
  );
}
