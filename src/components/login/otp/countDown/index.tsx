"use client";

import { useEffect, useState } from "react";

const CountDown = ({
  initialSeconds,
  onSendAgain,
  sendAgainTime
}: {
  initialSeconds: number;
  onSendAgain: () => void;
  sendAgainTime?:number
}) => {
  const [time, setTime] = useState(initialSeconds);
  const [isFinished, setIsFinished] = useState(false);
  const [restart, setRestart] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalId);
          setIsFinished(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [restart]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`; // Pad seconds
  };

  const handleClick = () => {
    setTime(sendAgainTime || 120);
    setIsFinished(false);
    setRestart(!restart);
    onSendAgain()
  };

  return isFinished ? (
    <span
      onClick={handleClick}
      style={{
        color: "var(--mui-palette-button-main)",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "400",
      }}
    >
      ارسال مجدد
    </span>
  ) : (
    <span style={{ color: "var(--mui-palette-button-main)" }}>
      {formatTime(time)}
    </span>
  );
};

export default CountDown;
