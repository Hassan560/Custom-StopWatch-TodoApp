import { useState } from "react";

function UseStopWatch() {
    const [count, setCount] = useState({ ms: "0", s: "0", m: "0", h: "0" });
    const [inter, setInter] = useState()
    const [status, setStatus] = useState(0)
  
    let updateMs = count.ms,
      updateS = count.s,
      updateM = count.m,
      updateH = count.h;
  
    const run = () => {
      if (updateMs === 100) {
        updateS++;
        updateMs = 0;
      }
      if (updateS === 60) {
        updateM++;
        updateS = 0;
      }
      if (updateM === 60) {
        updateH++;
        updateM = 0;
      }
      updateMs++;
      return setCount({ ms: updateMs, s: updateS, m: updateM, h: updateH });
    };
    return{count,run,setInter,setStatus,status,inter,setCount}
}

export default UseStopWatch;
