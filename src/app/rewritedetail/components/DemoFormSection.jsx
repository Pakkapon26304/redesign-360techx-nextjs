'use client';
import React, { useState } from 'react';

export default function DemoFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    company: '',
    businessType: '',
    fleetSize: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <section id="demo" className="landing-demo-section">
      <div className="landing-container">
        <div className="demo-info-col">
          <h2 className="section-title">
            พร้อมยกระดับประสิทธิภาพขนส่งและควบคุมต้นทุน Fleet แล้วหรือยัง?
          </h2>
          <p className="section-lead">
            กรอกข้อมูล ทีมผู้เชี่ยวชาญจะติดต่อกลับเพื่อนัดสาธิตระบบและประเมิน ROI ให้ฟรี
          </p>
          <div className="contact-direct-info">
            <p>
              โทร <a href="tel:0992611699">+66 (0)99 261 1699</a>
            </p>
            <p>
              อีเมล <a href="mailto:info@360techx.co">info@360techx.co</a>
            </p>
          </div>
        </div>

        <div className="demo-form-col">
          <form className="demo-request-form" onSubmit={handleSubmit}>
            <label className="form-field">
              <span className="field-label">ชื่อ-นามสกุล</span>
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                className="field-input"
              />
            </label>

            <label className="form-field">
              <span className="field-label">ตำแหน่งงาน</span>
              <input
                type="text"
                name="position"
                required
                placeholder="เช่น Logistics Director"
                value={formData.position}
                onChange={handleChange}
                className="field-input"
              />
            </label>

            <label className="form-field full-width">
              <span className="field-label">ชื่อบริษัท / องค์กร</span>
              <input
                type="text"
                name="company"
                required
                autoComplete="organization"
                value={formData.company}
                onChange={handleChange}
                className="field-input"
              />
            </label>

            <label className="form-field">
              <span className="field-label">ประเภทธุรกิจ</span>
              <select
                name="businessType"
                required
                value={formData.businessType}
                onChange={handleChange}
                className="field-select"
              >
                <option value="">เลือก</option>
                <option value="โรงงานผู้ผลิต">โรงงานผู้ผลิต</option>
                <option value="ศูนย์กระจายสินค้า (DC)">ศูนย์กระจายสินค้า (DC)</option>
                <option value="ผู้ให้บริการ 3PL">ผู้ให้บริการ 3PL</option>
                <option value="อื่นๆ">อื่นๆ</option>
              </select>
            </label>

            <label className="form-field">
              <span className="field-label">ขนาด Fleet โดยประมาณ</span>
              <select
                name="fleetSize"
                required
                value={formData.fleetSize}
                onChange={handleChange}
                className="field-select"
              >
                <option value="">เลือก</option>
                <option value="1–30 คัน">1–30 คัน</option>
                <option value="31–100 คัน">31–100 คัน</option>
                <option value="100+ คัน">100+ คัน</option>
              </select>
            </label>

            <label className="form-field">
              <span className="field-label">เบอร์โทรศัพท์</span>
              <input
                type="tel"
                name="phone"
                required
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                className="field-input"
              />
            </label>

            <label className="form-field">
              <span className="field-label">อีเมลองค์กร</span>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="field-input"
              />
            </label>

            <div className="form-submit-wrapper full-width">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={submitted}
              >
                {submitted ? 'ส่งข้อมูลแล้ว' : 'ขอรับการสาธิตระบบ (Request Enterprise Demo)'}
              </button>
            </div>

            {submitted && (
              <div className="form-success-banner full-width" role="status">
                ส่งข้อมูลเรียบร้อย ทีมงานจะติดต่อกลับภายในเวลาทำการ
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

