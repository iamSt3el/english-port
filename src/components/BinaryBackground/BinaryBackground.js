import React, { useEffect, useRef } from 'react';
import './BinaryBackground.css';

const BinaryBackground = () => {
  const binaryBgRef = useRef(null);

  useEffect(() => {
    const createBinaryColumn = (index) => {
      const column = document.createElement('div');
      column.className = 'binary-column';
      
      // Random position and speed
      const left = index * 20 + Math.random() * 10;
      const speed = 2 + Math.random() * 3;
      const delay = Math.random() * 5;
      
      column.style.left = `${left}px`;
      column.style.animationDuration = `${speed}s`;
      column.style.animationDelay = `${delay}s`;
      
      // Generate binary content
      let binaryString = '';
      const length = 10 + Math.floor(Math.random() * 15);
      
      for (let i = 0; i < length; i++) {
        binaryString += Math.random() > 0.5 ? '1' : '0';
        binaryString += '<br>';
      }
      
      column.innerHTML = binaryString;
      return column;
    };

    if (binaryBgRef.current) {
      const columnCount = Math.floor(window.innerWidth / 20);
      
      for (let i = 0; i < columnCount; i++) {
        const column = createBinaryColumn(i);
        binaryBgRef.current.appendChild(column);
      }
    }

    // Cleanup function to remove all columns when component unmounts
    return () => {
      if (binaryBgRef.current) {
        while (binaryBgRef.current.firstChild) {
          binaryBgRef.current.removeChild(binaryBgRef.current.firstChild);
        }
      }
    };
  }, []);

  return <div className="binary-bg" ref={binaryBgRef}></div>;
};

export default BinaryBackground;