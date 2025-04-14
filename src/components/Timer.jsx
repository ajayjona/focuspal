// src/components/Timer.jsx
import React, { useState, useEffect } from "react";
import { Button } from "../components/ui/button";

const Timer = () => {
  const [isFocusMode, setIsFocusMode] = useState(true);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      clearInterval(timer);
      setIsRunning(false);
      // Switch between focus and break modes
      setIsFocusMode(!isFocusMode);
      setTimeLeft(isFocusMode ? 5 * 60 : 25 * 60); // 5 minutes for break, 25 minutes for focus
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, isFocusMode]);

  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes < 10 ? `0${minutes}` : minutes}:${secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}`;
  };

  return (
    <div style={styles.timerContainer}>
      <h2 style={styles.mode}>{isFocusMode ? "Focus Mode" : "Break Time"}</h2>
      <p style={styles.time}>{formatTime(timeLeft)}</p>
      <Button onClick={handleStartStop} style={styles.button}>
        {isRunning ? "Pause" : "Start"}
      </Button>
    </div>
  );
};

const styles = {
  timerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
  },
  mode: {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "1rem",
  },
  time: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  button: {
    width: "150px",
  },
};

export default Timer;
