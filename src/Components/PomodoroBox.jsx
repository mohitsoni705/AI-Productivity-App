import React, { use, useEffect, useRef, useState } from 'react'

const PomodoroBox = () => {
    const [pomodoroTime, setPomodoroTime] = useState(1500);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);
    const formatTime = (pomodoroTime) => {
        const minutes = Math.floor(pomodoroTime / 60);
        const seconds = pomodoroTime % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    const handleStartButton =()=>{ 
      if(!isRunning && pomodoroTime > 0){
        setIsRunning(true);

      }
      }
      const handleResetButton =()=>{
        setIsRunning(false);
        setPomodoroTime(1500);
      }
      useEffect(() => {
        if (isRunning && pomodoroTime > 0) {
            intervalRef.current = setInterval(() => {
                setPomodoroTime(prevTime => prevTime - 1);
            }, 1000);
        } else if (!isRunning) {
            clearInterval(intervalRef.current);
        }
        if (pomodoroTime === 0) {
            setIsRunning(false);
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isRunning, pomodoroTime]);
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
        <button className='reset-button' onClick={handleResetButton}>Reset</button>
      </div>
    </div>
  )
}

export default PomodoroBox
