import React, { useEffect, useState, useRef } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  let timerToken = useRef(null);

  useEffect(() => {
    timerToken.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timerToken.current);
    };
  }, []);
  return (
    <div>
      <p>Seconds: {seconds}</p>
      <button
        onClick={() => {
          console.log("timerToken : ", timerToken.current);
          clearInterval(timerToken.current);
        }}
      >
        Stop Timer
      </button>
    </div>
  );
};

export default Timer;
