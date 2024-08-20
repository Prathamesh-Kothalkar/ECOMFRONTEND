import './Timer.css'
import React, { useState, useEffect } from "react";

    const Timer = ({ delayResend = "500" }) => {
        const [delay, setDelay] = useState(+delayResend);
        const minutes = Math.floor(delay / 60);
        const seconds = Math.floor(delay % 60);
        useEffect(() => {
          const timer = setInterval(() => {
            setDelay(delay - 1);
          }, 1000);
      
          if (delay === 0) {
            clearInterval(timer);
          }
      
          return () => {
            clearInterval(timer);
          };
        });
    return(
        <>
        <div className="timercontainer">
            <h1 className='h1'>Hurry! Deal Ends In: </h1>&nbsp;&nbsp;
            <br></br>
        <div className='timerdesign'>
            {minutes}:{seconds}
        </div>
        </div>
        </>
    )
    }
    export default Timer;