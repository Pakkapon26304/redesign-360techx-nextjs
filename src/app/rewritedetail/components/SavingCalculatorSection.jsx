'use client';
import React, { useState } from 'react';

export default function SavingCalculatorSection() {
  // Inputs state
  const [trucksPerDay, setTrucksPerDay] = useState(100);
  const [costPerTrip, setCostPerTrip] = useState(6000);
  const [workingDays, setWorkingDays] = useState(26);
  const [currentUtilization, setCurrentUtilization] = useState(68);

  // Optimizer state
  const [isOptimized, setIsOptimized] = useState(false);

  // Calculation logic
  const targetUtilization = 80;
  const savedTrucksPerDay =
    currentUtilization < targetUtilization
      ? Math.round(trucksPerDay * (1 - currentUtilization / targetUtilization))
      : 0;
  const savedTripsPerMonth = savedTrucksPerDay * workingDays;
  const monthlySavingsAmount = savedTripsPerMonth * costPerTrip;

  const nf = (n) => n.toLocaleString('th-TH');

  return (
    <section id="calc" className="landing-calculator-section">
      <div className="landing-container">
        <h2 className="section-title">งานขนส่งของคุณมีโอกาสประหยัดเท่าไหร่?</h2>

        <div className="calculator-layout-grid">
          {/* Box 1: Transportation Saving Calculator */}
          <div className="calculator-box">
            <h3 className="box-title">Transportation Saving Calculator</h3>
            <div className="calculator-form-grid">
              <label className="form-field">
                <span className="field-label">จำนวนรถ / วัน</span>
                <input
                  type="number"
                  min="1"
                  value={trucksPerDay}
                  onChange={(e) => setTrucksPerDay(+e.target.value || 0)}
                  className="field-input"
                />
              </label>
              <label className="form-field">
                <span className="field-label">ต้นทุนเฉลี่ยต่อเที่ยว (บาท)</span>
                <input
                  type="number"
                  min="0"
                  value={costPerTrip}
                  onChange={(e) => setCostPerTrip(+e.target.value || 0)}
                  className="field-input"
                />
              </label>
              <label className="form-field">
                <span className="field-label">วันทำงาน / เดือน</span>
                <input
                  type="number"
                  min="1"
                  max="31"
                  value={workingDays}
                  onChange={(e) => setWorkingDays(+e.target.value || 0)}
                  className="field-input"
                />
              </label>
              <label className="form-field">
                <span className="field-label">Utilization ปัจจุบัน (%)</span>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={currentUtilization}
                  onChange={(e) => setCurrentUtilization(+e.target.value || 0)}
                  className="field-input"
                />
              </label>
            </div>

            <p className="calculator-target-text">เป้าหมาย Utilization: 80%</p>

            <div className="calculator-result-value">
              {savedTrucksPerDay > 0
                ? `฿${nf(monthlySavingsAmount)} / เดือน`
                : 'Utilization ถึงเป้าหมายแล้ว'}
            </div>
            <div className="calculator-result-sub">
              {savedTrucksPerDay > 0
                ? `ประหยัดได้ราว ${savedTrucksPerDay} เที่ยว/วัน หรือ ≈ ${nf(savedTripsPerMonth)} เที่ยว/เดือน`
                : 'ลองปรับตัวเลขเพื่อดูโอกาสอื่น'}
            </div>

            <p className="calculator-disclaimer-note">
              เป็นการประมาณการเบื้องต้นเท่านั้น ผลที่ได้จริงขึ้นกับเงื่อนไขการขนส่งและการดำเนินงาน
            </p>
            <a href="#demo" className="btn btn-primary">
              ให้เราวิเคราะห์งานขนส่งของคุณ
            </a>
          </div>

          {/* Box 2: Optimize My Plan Simulator */}
          <div className="calculator-box">
            <h3 className="box-title">Optimize My Plan</h3>
            <p className="box-sub">30 ออเดอร์ จัดลงรถ 12 คัน</p>

            <div className="fleet-simulator-icons">
              {Array.from({ length: 12 }).map((_, i) => (
                <i
                  key={i}
                  className={`truck-icon-indicator ${isOptimized && i >= 9 ? 'off' : ''}`}
                  title={`คันที่ ${i + 1}`}
                />
              ))}
            </div>

            <div className="fleet-simulator-status">
              {isOptimized
                ? 'รถ 9 คัน · Utilization 83%'
                : 'รถ 12 คัน · Utilization 64%'}
            </div>

            <div className="fleet-simulator-action">
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setIsOptimized(!isOptimized)}
              >
                {isOptimized ? 'Reset' : 'Optimize My Plan'}
              </button>
            </div>

            <p className="calculator-disclaimer-note">
              Example optimization scenario ตัวอย่างประกอบ ไม่ใช่การรับประกันผลลัพธ์
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

