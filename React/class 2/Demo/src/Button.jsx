import React from "react";

const Button = () => {
  const handleClickListner = (event) => {
    console.log(event);
  };
  return <button onClick={handleClickListner}>Click Me</button>;
};

export default Button;
