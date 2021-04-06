import React, { useState } from 'react';
import './ColorBox.scss';

ColorBox.propTypes = {

};

function getRandomColor() {
  const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
  const indexRand = Math.trunc(Math.random() * 5);
  return COLOR_LIST[indexRand];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem('box-color') || 'deeppink';
    return initColor
  });
  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem('box-color', newColor);
  }
  return (
    <div className="color-box"
      style={{
        backgroundColor: color
      }}
      onClick={handleBoxClick}
    >
      Color Box
    </div>
  );
}

export default ColorBox;