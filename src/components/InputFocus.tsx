import React, { useEffect, useRef } from 'react';

const InputFocus = () => {
  const inputValueRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputValueRef.current) {
      const inputValueHandled = inputValueRef.current;
      inputValueHandled.focus();
    }
  }, []);

  return (
    <div className="container__firstCount">
      <input
        className="input__firstCount"
        type="text"
        placeholder="Add new text..."
        ref={inputValueRef}
      />
    </div>
  );
};

export default InputFocus;
