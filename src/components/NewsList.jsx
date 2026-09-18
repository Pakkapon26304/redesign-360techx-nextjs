"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function NewsList({ initialPosts, categories }) {
  const [posts, setPosts] = useState(initialPosts || []);
  const [page, setPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState((initialPosts || []).length === 9);

  // เมื่อกดเปลี่ยนหมวดหมู่
  const handleCategoryChange = async (categoryId) => {
    setActiveCategory(categoryId);
    setPage(1);
    setIsLoading(true);
    setPosts([]);
    
    try {
      const catParam = categoryId !== null ? `&categories=${categoryId}` : '';
      
      const res = await fetch(`https://www.360techx.co/wp-json/wp/v2/posts?_embed&per_page=9${catParam}`);
      if (res.ok) {
        const newPosts = await res.json();
        setPosts(newPosts);
        setHasMore(newPosts.length === 9);
      }
    } catch (error) {
      console.error('Failed to load category posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    
    try {
      const nextPage = page + 1;
      const catParam = activeCategory !== null ? `&categories=${activeCategory}` : '';
      
      const apiUrl = `https://www.360techx.co/wp-json/wp/v2/posts?_embed&per_page=9&page=${nextPage}${catParam}`;

      const res = await fetch(apiUrl);
      
      if (res.ok) {
        const newPosts = await res.json();
        if (newPosts.length > 0) {
          setPosts(prev => [...prev, ...newPosts]);
          setPage(nextPage);
          if (newPosts.length < 9) {
            setHasMore(false);
          }
        } else {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Failed to load more posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="filter-tabs">
        <button 
          className={`filter-btn ${activeCategory === null ? 'active' : ''}`}
          onClick={() => handleCategoryChange(null)}
        >
          ทั้งหมด
        </button>
        {categories && categories.map(cat => {
          if (cat.name === 'Uncategorized') return null; // ซ่อน Uncategorized
          return (
            <button 
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => handleCategoryChange(cat.id)}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      <div className="news-grid">
        {posts && posts.map((post) => {
          const dateObj = new Date(post.date);
          const formattedDate = dateObj.toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' });
          const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/Logo-interface/CONVERGENT_PROCESSES.jpeg';
          const categoryName = post._embedded?.['wp:term']?.[0]?.[0]?.name || 'ข่าวสาร';
          const authorName = post._embedded?.author?.[0]?.name || 'Admin';
          const authorAvatar = post._embedded?.author?.[0]?.avatar_urls?.['96'] || '/Authors/Pakkapon-Chuensuwan.JPG';
          const plainExcerpt = post.excerpt?.rendered?.replace(/<[^>]+>/g, '').substring(0, 100) + '...' || '';

          return (
            <Link href={`/news/${post.slug}`} className="news-card" key={post.id}>
              <div className="news-img-wrap">
                <span className="card-tag">{categoryName}</span>
                <img src={featuredMedia} alt={post.title?.rendered || 'News'} />
              </div>
              <div className="news-content">
                <div className="news-title-row">
                  <h3 className="news-title" dangerouslySetInnerHTML={{ __html: post.title?.rendered || '' }}></h3>
                  <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
                <p className="news-snippet" dangerouslySetInnerHTML={{ __html: plainExcerpt }}></p>
                <div className="news-footer">
                  <img className="author-avatar" src={authorAvatar} alt={authorName} style={{ padding: 0, objectFit: 'cover', background: 'transparent' }} />
                  <div className="author-info">
                    {authorName} <span className="dot"></span> {formattedDate}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {isLoading && posts.length === 0 && (
        <div style={{ textAlign: 'center', padding: '3rem' }}>กำลังโหลด...</div>
      )}

      {hasMore && posts.length > 0 && (
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
      )}
    </>
  );
}
