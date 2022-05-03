import React, { useEffect, useRef, useState } from 'react';
import './slyle.scss';

const TimeoutAndMultiply = () => {
  const [count, setCount] = useState(2);
  const timeoutRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (timeoutRef.current) {
      timeoutRef.current.disabled = true;
      setTimeout(() => {
        timeoutRef.current!.disabled = false;
      }, 5000);
    }
  }, []);

  return (
    <div className="container__firstCount">
      <div className="container__timeoutAndMultiply">
        <button
          className="button__timeout"
          ref={timeoutRef}
        >
          TIMEOUT
        </button>
        <button
          className="button__createList"
          type="button"
          onClick={() => setCount(count + 1)}
        >
          COUNT:
          {' '}
          {count}
        </button>
        <div className="container__timeoutAndMultiply">
          <p className="counter">{count * 2}</p>
        </div>
      </div>
    </div>
  );
};

export default TimeoutAndMultiply;
