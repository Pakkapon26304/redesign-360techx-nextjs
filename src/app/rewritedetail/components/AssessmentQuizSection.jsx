'use client';
import React, { useState } from 'react';

export default function AssessmentQuizSection() {
  const questions = [
    {
      question: 'ทีม Planner ยังใช้ Excel จัดออเดอร์ลงรถอยู่หรือไม่?',
      category: 'ประสิทธิภาพการวางแผน',
    },
    {
      question: 'รถออกวิ่งโดยมีพื้นที่ว่างเหลือบ่อยหรือไม่?',
      category: 'การใช้ความจุรถ',
    },
    {
      question: 'ทีมยังต้องโทรถามคนขับหรือ Transporter เพื่อติดตามสถานะหรือไม่?',
      category: 'การมองเห็นสถานะการขนส่ง',
    },
    {
      question: 'ข้อมูลการขนส่งกระจายอยู่หลายระบบหรือไม่?',
      category: 'การเชื่อมต่อข้อมูล',
    },
    {
      question: 'ยังวัดต้นทุนและ Truck Utilization ได้ยากหรือไม่?',
      category: 'การวัดต้นทุนและประสิทธิภาพ',
    },
  ];

  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSelect = (index, value) => {
    setAnswers((prev) => ({ ...prev, [index]: value }));
    setErrorMessage('');
  };

  const calculateScore = () => {
    const answeredCount = Object.keys(answers).length;
    if (answeredCount < questions.length) {
      setErrorMessage('กรุณาตอบให้ครบทั้ง 5 ข้อ');
      setResult(null);
      return;
    }

    // Filter questions where answer is "1" (Yes / ใช่)
    const yesAnswers = questions.filter((_, idx) => answers[idx] === '1');
    const score = Math.max(10, 100 - yesAnswers.length * 18);
    const improvementAreas = yesAnswers.slice(0, 3).map((q) => q.category);

    setResult({
      score,
      improvementAreas,
      hasImprovements: yesAnswers.length > 0,
    });
  };

  return (
    <section id="score" className="landing-assessment-section">
      <div className="landing-container">
        <h2 className="section-title">งานขนส่งของคุณมีประสิทธิภาพแค่ไหน?</h2>
        <p className="section-lead">
          ตอบ 5 ข้อสั้นๆ เพื่อดูจุดที่ยังปรับปรุงได้ และให้ทีมขายเริ่มคุยกับคุณได้ตรงจุด
        </p>

        <div className="assessment-card-box">
          <div className="quiz-questions-list">
            {questions.map((item, index) => (
              <div key={index} className="quiz-question-row">
                <span className="question-text">{item.question}</span>
                <div className="question-options">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name={`quiz-${index}`}
                      value="1"
                      checked={answers[index] === '1'}
                      onChange={() => handleSelect(index, '1')}
                    />
                    <span>ใช่</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name={`quiz-${index}`}
                      value="0"
                      checked={answers[index] === '0'}
                      onChange={() => handleSelect(index, '0')}
                    />
                    <span>ไม่ใช่</span>
                  </label>
                </div>
              </div>
            ))}
          </div>

          <div className="quiz-action-wrapper">
            <button
              type="button"
              className="btn btn-primary"
              onClick={calculateScore}
            >
              ดูคะแนน
            </button>
          </div>

          {errorMessage && (
            <div className="quiz-error-message" role="alert">
              {errorMessage}
            </div>
          )}

          {result && (
            <div className="quiz-result-box" role="status">
              <div className="result-score-highlight">
                <strong className="score-number">{result.score} / 100</strong>
                <span className="score-label">คะแนนประสิทธิภาพการบริหารขนส่ง (ประเมินเบื้องต้น)</span>
              </div>
              {result.hasImprovements ? (
                <div className="result-improvements">
                  <p>
                    โอกาสที่ควรปรับปรุง: {result.improvementAreas.join(' · ')}
                  </p>
                  <a href="#demo" className="btn btn-secondary">
                    คุยกับทีมงานเรื่องผลประเมิน
                  </a>
                </div>
              ) : (
                <div className="result-good-standing">
                  <p>การดำเนินงานของคุณอยู่ในเกณฑ์ดี ลองนัดสาธิตเพื่อดูโอกาสเพิ่มเติม</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

