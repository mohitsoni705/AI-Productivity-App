import React from 'react'

const DashBoard = () => {
  return (
    <div>
      <div className='right-Bar'>
        {/* section1 */}
      <div>
      <header>
        <h1>Hello, User!</h1>
        <h1>Let's Make today Productive</h1>
      </header>
      </div>
      {/* section 2 */}
      <div className="stats">
        <div className="today">
          <h1>5</h1>
          <p>task today</p>
        </div>
        <div className="notes-saved">
          <h1>12</h1>
          <p>notes saved</p>
        </div>
        <div className="pomodoro">
          <h1>45:00</h1>
          <p>time left in Pomodoro</p>
        </div>
      </div>
      {/* section 3 */}
      <div className="quotes">
        <div className="quotes-upper">
          <div><h1>Quote of the Day</h1></div>
          <div><button>Add Task</button></div>
        </div>
        <div>
          <h1>“Believe you can and you are halfway there.”</h1>
        </div>
      </div>
        {/* section 4 */}
      <div className="task-overview">
        <div className="quotes-upper">
          <div><h1>Task Overview</h1></div>
          <div><h1>more</h1></div>
        </div>
        <div className="">
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
        {/* section 5 */}
      <div className="chatbot">

      </div>
    </div>
    </div>
  )
}

export default DashBoard
