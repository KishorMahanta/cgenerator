
import React, { useState, useEffect } from 'react';

const Random = () => {
  const [color, setColor] = useState('#000000');
  const [hexCode, setHexCode] = useState('#000000');

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let randomColor = '#';
    for (let i = 0; i < 6; i++) {
      randomColor += letters[Math.floor(Math.random() * 16)];
    }
    return randomColor;
  };

  const handleRandomColor = () => {
    const newColor = getRandomColor();
    setColor(newColor);
    setHexCode(newColor);
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <p>Hex Code: {hexCode}</p>
      <button onClick={handleRandomColor}>Generate Random Color</button>
    </div>
  );
};

export default Random;