import React from 'react';

export default function HomeHeroSection() {
  return (
    <>
      {/* Hero Section */}
    <div className="hero-scroll-wrapper">
        <header className="hero">
        <div className="hero-bg">
            <iframe className="hero-video" style={{ width: '100vw', height: '56.25vw', minHeight: '100vh', minWidth: '177.77vh', pointerEvents: 'none' }} src="https://www.youtube.com/embed/MWSDYnYrxao?autoplay=1&mute=1&controls=0&loop=1&playlist=MWSDYnYrxao&rel=0&showinfo=0&modestbranding=1&playsinline=1" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <div className="glow-orb orb-1"></div>
            <div className="glow-orb orb-2"></div>
        </div>
        <div className="hero-content">
            <div className="text-rotator">
                <h1 className="rotator-item active">REVOLUTION OF FREIGHT<span className="text-gradient"><br />IN EVERY ANGLE.</span></h1>
                <h1 className="rotator-item">MOST EFFICIENT<br /><span className="text-gradient">DIGITAL TRUCKING NETWORK.</span></h1>
                <h1 className="rotator-item">BREAKTHROUGH<br /><span className="text-gradient">LOGISTICS INNOVATION.</span></h1>
            </div>
        </div>
        </header>
    </div>

    
    </>
  );
}
