import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const navigate = useNavigate();

  const handleDragStart = (clientY) => {
    setIsDragging(true);
    setStartY(clientY);
  };

  const handleDragMove = (clientY) => {
    setCurrentY(clientY);
    const deltaY = startY - clientY;
    if (!isDragging || deltaY < 0) return;
    if (deltaY > window.innerHeight * 0.45) { 
      navigate('/home');
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleMouseDown = (e) => {
    handleDragStart(e.clientY);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleDragMove(e.clientY);
    }
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleTouchStart = (e) => {
    handleDragStart(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      handleDragMove(e.touches[0].clientY);
    }
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  const containerStyle = isDragging ? { bottom: `${startY - currentY}px` } : {};

  return (
    <div className="landing-page">
      <div 
        className="indicators-container"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleTouchEnd}
        style={containerStyle}
      >
        <div className="rectangle-indicator"></div>
        <div className="triangle-indicator"></div>
      </div>
      <div className="scroll-message">Scroll Up to Begin!</div>
    </div>
  );
}

export default LandingPage;