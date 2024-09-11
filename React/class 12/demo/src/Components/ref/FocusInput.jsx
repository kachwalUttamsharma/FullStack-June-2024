import React, { useRef } from "react";

const FocusInput = () => {
  // current : mutual object
  const inputRef = useRef(null); // document.querySelection("input");
  const inputRef1 = useRef(null);

  const focusInput = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
    inputRef1.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <input type="text" ref={inputRef1} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default FocusInput;
