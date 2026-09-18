'use client';
import { useEffect } from 'react';
import { sendGTMEvent } from '@next/third-parties/google';

export default function ArticleTracker({ title, category, author }) {
  useEffect(() => {
    sendGTMEvent({ 
      event: 'view_article', 
      article_title: title,
      article_category: category,
      article_author: author
    });
  }, [title, category, author]);
  
  return null;
}

