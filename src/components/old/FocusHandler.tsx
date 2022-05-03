import React, { useRef } from 'react';

const FocusHandler = () => {
  const inputElementRef = useRef<HTMLInputElement | null>(null);

  const focusHandler = () => {
    if (inputElementRef.current) {
      inputElementRef.current.focus();
    }
  };

  return (
    <div>
      <form>
        <input
          ref={inputElementRef}
          type="text"
        />
        <button>Submit</button>
      </form>
      <br />
      <button onClick={focusHandler}>
        Focus input
      </button>
    </div>
  );
};

export default FocusHandler;
