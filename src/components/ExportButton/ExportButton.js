
import React, { useState } from 'react';
import Button from '../Button';

const ExportButton = ({ text, feedbackText }) => {
  const [showFeedback, setShowFeedback] = useState(false);

  const handleClick = () => {
    // Copy current URL to clipboard
    navigator.clipboard.writeText(window.location.href);
    
    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
    }, 2000);
  };

  return (
    <Button
      text={showFeedback ? feedbackText : text}
      onClick={handleClick}
      toggled={showFeedback}
    />
  );
};

export default ExportButton;
