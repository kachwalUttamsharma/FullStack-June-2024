import React from "react";

// component -> function which returns jsx
// .extension -> jsx
// component should always starts with capital letter

// props -> properties -> object (js) -> parameter to your component
const FirstComponent = ({ Message = "" }) => {
  return (
    <>
      <div>FirstComponent</div>
      <p>{Message}</p>
    </>
  );
};

export default FirstComponent;
