// Timer.jsx
import React, { useState, useEffect } from "react";

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isFocusMode, setIsFocusMode] = useState(true);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 mins

  // Format time
  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${String(mins).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  // Timer logic
  useEffect(() => {
    let interval;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      alert(isFocusMode ? "Focus session done! Time for a break 😌" : "Break over! Back to work 💪");
      setIsFocusMode((prev) => !prev);
      setTimeLeft(isFocusMode ? 5 * 60 : 25 * 60);
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, isFocusMode]);

  // Handlers
  const handleStartPause = () => setIsRunning((prev) => !prev);
  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(isFocusMode ? 25 * 60 : 5 * 60);
  };

  return (
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-semibold">{isFocusMode ? "Focus Time" : "Break Time"}</h2>
      <div className="text-5xl font-mono">{formatTime(timeLeft)}</div>
      <div className="space-x-4">
        <button onClick={handleStartPause} className="px-4 py-2 bg-green-500 text-white rounded">
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={handleReset} className="px-4 py-2 bg-gray-400 text-white rounded">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
