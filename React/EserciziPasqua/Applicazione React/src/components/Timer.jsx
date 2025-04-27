import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const Reset = () => {
    setCount(0);
    setIsRunning(false);
  }

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div>
      <h2>5) Timer:</h2>
      <h3>{count} {count === 0 || count === 1 ? 'second' : 'seconds'}</h3>
      <button onClick={() => setIsRunning(true)}>{count === 0 ? 'Start' : 'Play'}</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={() => Reset()}>Reset</button>
    </div>
  );
};

export default Timer;
