import React, { useEffect, useState } from 'react'

const TimePomodoro = () => {
  const [currTime ,setCurrTime] = useState("");
  useEffect(() => {
    const interval = setInterval(()=>{
      const now = new Date();
      const getTime = now.toLocaleTimeString();
      setCurrTime(getTime)
    },1000);
    return ()=>clearInterval(interval)
    },[])
  return (
    <div className='box-1'>
      <h1>Time: {currTime}</h1>
      <div>Current Time</div>
    </div>
  )
}

export default TimePomodoro
