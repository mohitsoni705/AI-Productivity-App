import React from 'react'
import Quotes from '../Components/Quotes'
import Greeting from '../Components/Greeting'
import TaskToday from '../Components/TaskToday'
import NotesSaved from '../Components/NotesSaved'
import TimePomodoro from '../Components/TimePomodoro'
import TaskOverview from '../Components/TaskOverview'
import AiChatBox from '../Components/AiChatBox'

const DashBoard = () => {
  return (
      <div className='right-Bar'>
        <div className="dashboard fade-in fade-in-left">
        {/* section1 */}
      <div >
      <header>
       <Greeting/>
      </header>
      </div>
      {/* section 2 */}
      <div className="stats">
        <div className="today fade-in fade-in-bottom">
          <TaskToday/>
        </div>
        <div className="notes-saved fade-in fade-in-bottom">
          <NotesSaved/>
          </div>
        <div className="pomodoro fade-in fade-in-bottom">
         <TimePomodoro/>
        </div>
      </div>
      {/* section 3 */}
      <div className="quotes fade-in fade-in-left">
          <Quotes/>
      </div>
        {/* section 4 */}
      <div className="task-overview fade-in fade-in-left">
        <TaskOverview/>
        </div>
      </div>
    </div>
  )
}

export default DashBoard
