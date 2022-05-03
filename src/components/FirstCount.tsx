import React, { useEffect, useState } from 'react';
import './slyle.scss';

const FirstCount = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  useEffect(() => {
    console.log('First render');
  }, []);

  useEffect(() => {
    console.log('Render');
  });

  useEffect(() => {
    console.log('Changing count');
  }, [count]);

  useEffect(() => {
    console.log('Input change');
  }, [input]);

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
      <p className="count__firstCount">
        COUNT:
        {' '}
        {count}
      </p>
      <input
        type="text"
        className="input__firstCount"
        placeholder="ADD NEW TEXT.."
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

export default FirstCount;
