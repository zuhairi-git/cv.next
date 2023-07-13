import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to check if the user has scrolled down the page
    window.addEventListener('scroll', handleScroll);
    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Show the button when the user has scrolled 100 pixels down the page
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    // Scroll to the top of the page when the button is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showButton && (
        <button className="back-to-top-btn btn btn-primary border border-white" style={{ padding: '5px 10px', width: '32px' }} onClick={scrollToTop}>
          <i className='fa fa-arrow-up'></i>
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
