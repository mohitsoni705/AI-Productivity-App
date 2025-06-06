import React, { use, useState } from 'react'

const PomodoroBox = () => {
    const [pomodoroTime, setPomodoroTime] = useState(1500);
    const formatTime = (pomodoroTime) => {
        const minutes = Math.floor(pomodoroTime / 60);
        const seconds = pomodoroTime % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    const handleStartButton =()=>{ 
    }
  return (
    <div className='container-pomodoro'>
      <div>
        <h1>Pomodoro Timer</h1>
      </div>
      <div className='button-group '>
        <button className='pomodoro-button'>Pomodoro</button>
        <button className='pomodoro-button'>Short Break</button>
        <button className='pomodoro-button  '>Long Break</button>
      </div>
      <div>
        <p className='timer-display'>{formatTime(pomodoroTime)}</p>
      </div>
      <div><button>Edit</button></div>
      <div className='button-group'>
        <button className='start-button' onClick={handleStartButton}>Start</button>
        <button className='reset-button'>Reset</button>
      </div>
    </div>
  )
}

export default PomodoroBox
