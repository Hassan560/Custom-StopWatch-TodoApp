import React from "react";
import "../App.css";

function StopWatchBut({ run, setInter, setStatus, status, inter,setCount }) {
  const start = () => {
    run();
    setStatus(1);
    setInter(setInterval(run, 10));
  };
  const stop = () => {
    clearInterval(inter);
    setStatus(2);
  };
  const reset = () => {
    clearInterval(inter);
    setStatus(0);
    setCount({ ms: "0", s: "0", m: "0", h: "0" })
  };
  const resume =()=>{
      start()
  }
  return (
    <div>
      {status === 0 ? (
        <div>
          <button className="btn" onClick={start}>
            Start
          </button>
        </div>
      ) : (
        ""
      )}
      {status === 1 ? (
        <div>
          <button className="btn2" onClick={stop}>
            {" "}
            Stop
          </button>
          <button className="btn3" onClick={reset}>
            {" "}
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
      {status === 2 ? (
        <div>
          <button className="btn4" onClick={resume}>
            {" "}
            Resume
          </button>
          <button className="btn3" onClick={reset}>
            {" "}
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default StopWatchBut;
