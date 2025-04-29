import React, { useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const reset = () => {
    setCount(0);
    setIsRunning(false);
  };

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div>
      <h2>5) Timer:</h2>
      <h3>{count} {count === 0 ? "second" : "seconds"}</h3>

      <button onClick={() => setIsRunning(true)}>Play</button>
      {isRunning && <button onClick={() => setIsRunning(false)}>Stop</button>}
      {count === 0 || <button onClick={reset}>Reset</button>}
    </div>
  );
};

export default Timer;
