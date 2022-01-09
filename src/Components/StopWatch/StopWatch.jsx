import React from "react";
import '../../App.css'
import UseStopWatch from "../../Hooks/StopWatch/UseStopWatch";
import StopWatchBut from "./StopWatchBut";

function StopWatch() {
  const {count,setInter,run,setStatus,status,inter,setCount} = UseStopWatch()
  return (
    <div className="container">
      <h1>Stop Watch</h1>
      <span className="numbers">{count.h >= 10 ? count.h : "0" + count.h}</span>
      <span className="numbers">{count.m >= 10 ? count.m : "0" + count.m}</span>
      <span className="numbers">{count.s >= 10 ? count.s : "0" + count.s}</span>
      <span className="numbers">
        {count.ms >= 10 ? count.ms : "0" + count.ms}
      </span>

      <div className="buton">
        <StopWatchBut setInter={setInter} run={run} status={status} setStatus={setStatus} inter={inter} setCount={setCount}/>
      </div>
    </div>
  );
}

export default StopWatch;
