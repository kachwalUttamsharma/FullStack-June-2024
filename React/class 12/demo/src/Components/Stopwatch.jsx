// Create a stopwatch application using React. The stopwatch should have the following features:

// Start the timer.
// Stop the timer.
// Reset the timer.
// Display the elapsed time in a format of hours:minutes:seconds.

// 00:00:00
// 00:00:01

import React, { useState, useRef, useEffect, useCallback } from "react";

const Stopwatch = React.memo(() => {
  const [timer, setTimer] = useState(0);
  const timeRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    return () => {
      clearInterval(timeRef.current);
    };
  }, []);

  const startTimer = useCallback(() => {
    timeRef.current = setInterval(() => {
      setIsRunning(true);
      setTimer((prev) => prev + 1);
    }, 1000);
  }, []);

  const stopTimer = useCallback(() => {
    setIsRunning(false);
    clearInterval(timeRef.current);
  }, []);

  const resetTimer = useCallback(() => {
    clearInterval(timeRef.current);
    setIsRunning(false);
    setTimer(0);
  }, []);

  const formatTimer = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
    return `${getHours}: ${getMinutes}: ${getSeconds}`;
  };

  return (
    <div>
      <h1>{formatTimer(timer)}</h1>
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={resetTimer} disabled={!isRunning && timer <= 0}>
        Reset
      </button>
    </div>
  );
});

export default Stopwatch;
