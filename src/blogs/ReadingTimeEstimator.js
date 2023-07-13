import React, { useState, useEffect } from 'react';

const ReadingTimeEstimator = ({ filePath }) => {
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(filePath);
        const content = await response.text();
        const wordsPerMinute = 250;
        const words = content.trim().split(/\s+/).length;
        const time = Math.ceil(words / wordsPerMinute);
        setReadingTime(time);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchContent();
  }, [filePath]);

  return (
    <div>
      <p className='blog-author-position text-secondary'>
        Estimated reading time: {readingTime} minute{readingTime === 1 ? '' : 's'}
      </p>
    </div>
  );
};

export default ReadingTimeEstimator;
