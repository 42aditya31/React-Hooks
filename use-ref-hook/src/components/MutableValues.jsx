import React, { useRef, useState } from "react";

function MutableValues() {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  return (
    <div>
      <h2>Seconds: {seconds}</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default MutableValues;
