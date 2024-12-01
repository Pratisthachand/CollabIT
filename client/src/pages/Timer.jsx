import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 overflow-hidden">
      <div className="flex flex-col items-center justify-center p-4">
        <div className="relative w-64 h-64 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 shadow-md">
          <div className="absolute text-4xl font-mono text-gray-800 dark:text-gray-200">
            {formatTime(time)}
          </div>
        </div>
        <div className="flex space-x-4 mt-4">
          <button
            onClick={() => setIsActive(!isActive)}
            className={`px-4 py-2 rounded-lg text-white ${
              isActive
                ? "bg-red-500 hover:bg-red-600"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {isActive ? "Pause" : "Start"}
          </button>
          <button
            onClick={() => setTime(0)}
            className="px-4 py-2 rounded-lg bg-custom-purple hover:bg-custom-purple/40 text-white"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
