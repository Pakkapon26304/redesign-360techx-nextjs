import React from 'react';

export default function ContactMapSection() {
  return (
    <section className="map-section reveal" style={{ width: '100%', lineHeight: '0' }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5490870962212!2d100.57942589999999!3d13.745727700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29d174b967c61%3A0xacabe9544caa175c!2s360TRUCK!5e0!3m2!1sen!2sth!4v1786612535916!5m2!1sen!2sth" width="100%" height="450"  style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </section>
  );
}
