import Link from 'next/link';

export default function RelatedPosts({ post, relatedPosts }) {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1rem' }}>
      {/* 1. Tags */}
      {post?.tags?.length > 0 && (
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <span style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>Tags:</span>
          {post.tags.map(tag => (
            <span key={tag} style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 14px', borderRadius: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>#{tag}</span>
          ))}
        </div>
      )}

      {/* 2. Related Posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <div>
          <h3 style={{ color: 'var(--text-main)', fontSize: '1.5rem', marginBottom: '1.5rem', borderLeft: '4px solid var(--primary)', paddingLeft: '1rem' }}>บทความที่เกี่ยวข้อง (Related Posts)</h3>
          <div className="related-posts-grid">
            
            {relatedPosts.map((relatedPost) => {
              const featuredMedia = relatedPost._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/Logo-interface/CONVERGENT_PROCESSES.jpeg';
              const categoryName = relatedPost._embedded?.['wp:term']?.[0]?.[0]?.name || 'ข่าวสาร';
              const plainExcerpt = relatedPost.excerpt?.rendered?.replace(/<[^>]+>/g, '').substring(0, 100) + '...' || '';

              return (
                <Link href={`/news/${relatedPost.slug}`} className="news-card" key={relatedPost.id}>
                  <div className="news-img-wrap">
                    <span className="card-tag">{categoryName}</span>
                    <img src={featuredMedia} alt={relatedPost.title?.rendered} />
                  </div>
                  <div className="news-content">
                    <div className="news-title-row">
                      <h3 className="news-title" dangerouslySetInnerHTML={{ __html: relatedPost.title?.rendered || '' }}></h3>
                      <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                    <p className="news-snippet" dangerouslySetInnerHTML={{ __html: plainExcerpt }}></p>
                  </div>
                </Link>
              );
            })}

          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .related-posts-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 768px) {
          .related-posts-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </div>
  );
}
