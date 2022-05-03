import React, { useRef } from 'react';
import '../slyle.scss';

const BoxClone = () => {
  const boxElementRef = useRef<HTMLInputElement | null>(null);
  const boxWrapperElementRef = useRef<HTMLInputElement | null>(null);

  const cloneBox = () => {
    if (boxWrapperElementRef.current && boxElementRef.current) {
      const boxWrapperNode = boxWrapperElementRef.current;
      const newBox = boxElementRef.current.cloneNode();
      boxWrapperNode.appendChild(newBox);
    }
  };

  return (
    <section>
      <div
        className="boxWrapper"
        ref={boxWrapperElementRef}
      >
        <div
          className="box"
          ref={boxElementRef}
        />
      </div>
      <br />
      <button onClick={() => cloneBox()}>Clone box</button>
    </section>
  );
};

export default BoxClone;
