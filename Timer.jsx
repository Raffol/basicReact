import React, {useState, useEffect} from "react";

export default function Timer(){
    const [seconds, setSeconds] = useState(0);
    const [showTimer, setShowTimer] = useState(true);

    useEffect(() => {
        if (!showTimer) return;
        console.log("Time is run!");
        const interval = setInterval(()=>{
            setSeconds(prev => prev + 1);
        }, 1000);
        return()=>{
            clearInterval(interval);
            console.log("Time is stop!");
        };
    }, [showTimer]);
    return(
      <div style={{padding: "20px"}} >
          <button onClick={()=>setShowTimer(prev => !prev)}>
              {showTimer ? "Hide timer" : "Show timer"}
          </button>
          {showTimer && (
              <div style={{marginTop: "20px"}}>
                  <h2>Remaining: {seconds} s.</h2>
              </div>
          )}
      </div>
    );
}