import React, { useEffect, useRef, useState } from 'react';
import './slyle.scss';

const SecondCount = () => {
  const [count, setCount] = useState(100);
  const [input, setInput] = useState('');

  const documentTitleRef = useRef<HTMLInputElement | null>(null);
  const fontSizeRef = useRef<HTMLParagraphElement | null>(null);

  if (documentTitleRef.current) {
    const documentTitleHandled = documentTitleRef.current.value;
    document.title = documentTitleHandled.toUpperCase();
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
  }

  useEffect(() => {
    if (fontSizeRef.current) {
      const fontSizeHandled = fontSizeRef.current;
      const fontSizeChange = `${(count - 80).toString()}px`;
      fontSizeHandled.style.fontSize = fontSizeChange;
    }
  }, [count]);

  return (
    <div className="container__firstCount">
      <button
        className="button__firstCount"
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <p
        className="count__firstCount"
        ref={fontSizeRef}
      >
        COUNT:
        {' '}
        {count}
      </p>
      <input
        type="text"
        className="input__firstCount"
        placeholder="ADD NEW DOCUMENT NAME..."
        ref={documentTitleRef}
        onChange={(e) => setInput(e.target.value)}
      />
      <p
        className="text__firstCount"
      >
        {input}
      </p>
    </div>
  );
};

export default SecondCount;
