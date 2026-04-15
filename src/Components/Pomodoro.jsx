import React from 'react'

const Pomodoro = () => {
  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <p>Free online Pomodoro timer to boost your daily productivity Achieve a sense of accomplishment and reduce the potential for burnout . Stay focused and motivated and get more done in less time.</p>
      <div>{pomoTime}</div>
      <button>Start Timer</button>
      <button>Reset</button>
      <div>
        <div>
        <label>Pomodoro"(min)"</label>
        <input type="text" />
        </div>
        <div>
        <label>Short break</label>
        <input type="text" />
        </div>
        <div>
        <label>Long break"(min)"</label>
        <input type="text" />
        </div>
      </div>
    </div>
  )
}

export default Pomodoro
