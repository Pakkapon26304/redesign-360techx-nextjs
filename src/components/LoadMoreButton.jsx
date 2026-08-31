"use client";

import React, { useState } from 'react';

export default function LoadMoreButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    
    // จำลองการโหลดข้อมูลจาก API 1.5 วินาที
    setTimeout(() => {
      setIsLoading(false);
      // ในอนาคตเมื่อต่อ API จริง ให้นำฟังก์ชัน Fetch มาใส่ตรงนี้
    }, 1500);
  };

  return (
    <div className="load-more-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem', marginBottom: '2rem' }}>
      <button 
        className="btn btn-outline" 
        onClick={handleLoadMore} 
        disabled={isLoading}
        style={{ 
          opacity: isLoading ? 0.7 : 1, 
          cursor: isLoading ? 'wait' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}
      >
        {isLoading ? (
          <>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}>
              <circle cx="12" cy="12" r="10" strokeOpacity="0.25"></circle>
              <path d="M12 2a10 10 0 0 1 10 10"></path>
            </svg>
            กำลังโหลด...
          </>
        ) : (
          'โหลดเพิ่มเติม (Load More)'
        )}
      </button>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

