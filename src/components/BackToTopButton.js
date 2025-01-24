import React, { useState } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', toggleVisibility);

  return (
    isVisible && (
      <button className="back-to-top" onClick={scrollToTop}>
        ↑
      </button>
    )
  );
};

export default BackToTopButton;
