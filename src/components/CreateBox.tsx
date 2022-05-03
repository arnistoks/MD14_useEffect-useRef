import React, { useRef, useState } from 'react';
import './slyle.scss';

const CreateBox = () => {
  const boxWrapperRef = useRef<HTMLDivElement | null>(null);
  const [boxColor, setBoxColor] = useState('');

  const createBox = () => {
    if (boxWrapperRef.current) {
      const newBox = document.createElement('div');
      newBox.className = 'newBox';
      newBox.style.backgroundColor = boxColor;
      boxWrapperRef.current.append(newBox);
    }
  };

  return (
    <div className="container__firstCount">
      <div className="container__createBox">
        <button
          className="button__firstCount"
          onClick={() => {
            createBox();
          }}
        >
          +
        </button>
        <select
          className="select"
          name="ChooseColor"
          value={boxColor}
          onChange={(e) => (
            setBoxColor(e.target.value)
          )}
        >
          <option selected hidden>COLOR DROPDOWN</option>
          <option value="darkred">RED</option>
          <option value="royalblue">BLUE</option>
          <option value="orange">ORANGE</option>
        </select>
      </div>
      <div
        className="boxWrapper"
        ref={boxWrapperRef}
      />
    </div>

  );
};

export default CreateBox;
