import React from "react";
import { useState, useEffect } from "react";

export default function Stopwatch() {
  const [btntext, setBtn] = useState(false);
  const [timmer, setTimer] = useState(0);

  const handleBtntext = () => {
    setBtn(!btntext);
  };

  useEffect(
    (e) => {
      let interval;
      if (btntext) {
        interval = setInterval(() => {
          setTimer((prev) => prev + 1);
        }, 1000);
      } else {
        clearInterval(interval);
      }

      return () => {
        clearInterval(interval);
      };
    },
    [btntext]
  );

  const handlereset = (e) => {
    setBtn(false);
    setTimer(0);
  };

  const formattime = () => {
    let minute = Math.floor(timmer / 60);
    let second = timmer % 60;

    return `${minute}:${second < 10 ? 0 : ""}${second}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formattime()} </p>
      <button onClick={(e) => handleBtntext(e)}>
        {btntext ? "Stop" : "Start"}
      </button>
      <button
        onClick={(e) => {
          handlereset();
        }}
      >
        Reset
      </button>
    </div>
  );
}
