import React, { useEffect, useRef, useState } from 'react';
import './slyle.scss';

const CreateList = () => {
  const inputValueRef = useRef<HTMLInputElement | null>(null);
  const [inputListEl, setInputListEl] = useState('');
  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    if (inputValueRef.current) {
      const inputValueHandled = inputValueRef.current;
      inputValueHandled.focus();
    }
  }, []);

  return (
    <div className="container__firstCount">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          setList([...list, inputListEl]);
          setInputListEl('');
          inputValueRef.current?.focus();
        }}
      >
        <input
          className="input__firstCount"
          type="text"
          placeholder="Add new text..."
          value={inputListEl}
          ref={inputValueRef}
          required
          onChange={(e) => setInputListEl(e.target.value)}
        />
        <button
          className="button__createList"
          type="submit"
        >
          SUBMIT
        </button>
      </form>
      <div
        className="text__firstCount"
      >
        <ul className="ul">
          {list.map((item) => (
            <p className="text__firstCount" key={Math.random()}>
              {item}
            </p>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreateList;
