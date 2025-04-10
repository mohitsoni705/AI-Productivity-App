import React, { useEffect, useState } from 'react'

const TimePomodoro = () => {
  const date= new Date();
  const time = new Date();
  const getDate=date.toLocaleDateString();
  let getTime = time.toLocaleTimeString();

  return (
    <div className='box-1'>
      <h1>Time: {getTime}</h1>
      <div>time left in Pomodoro</div>
    </div>
  )
}

export default TimePomodoro
