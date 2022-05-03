import React, { useRef } from 'react';
import '../slyle.scss';

const BoxColor = () => {
  const boxElementRef = useRef<HTMLInputElement | null>(null);

  const changeColorToGold = () => {
    if (boxElementRef.current) {
      boxElementRef.current.style.backgroundColor = 'gold';
    }
  };

  const changeColorToSilver = () => {
    if (boxElementRef.current) {
      boxElementRef.current.style.backgroundColor = 'silver';
    }
  };

  const removeColor = () => {
    if (boxElementRef.current) {
      boxElementRef.current.style.backgroundColor = 'transparent';
    }
  };

  return (
    <section>
      <div
        className="box"
        ref={boxElementRef}
      />
      <br />
      <button onClick={() => changeColorToGold()}>Change color to gold</button>
      <button onClick={() => changeColorToSilver()}>Change color to silver</button>
      <button onClick={() => removeColor()}>Remove color</button>
    </section>
  );
};

export default BoxColor;
