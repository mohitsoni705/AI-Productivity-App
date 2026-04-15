import React, { useState } from 'react'

const days =["Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday","Sunday"];

const Planner = () => {
  const [tasks, setTask] = useState(
    days.reduce((acc ,day)=>({...acc,[day]:[]},{})));
  const [newTask , setNewTask] = useState('')
  const [selectedDay , setSelectedDay] = useState("Monday")

  const handleAddTask=()=>{
    if(!newTask.trim())return;
    setTask((prev)=>({
      ...prev,[selectedDay]:[...prev[selectedDay],newTask],
    }))
    setNewTask("")
  }
  return (
    <div className="planner">
      <div>
        <h1>Planner</h1>
      </div>
      <div className='planner-input'>
        <select name="weekName" value={selectedDay} onChange={(e)=>setSelectedDay(e.target.value)}>
          {days.map((days)=>(
            <option value={days}>{days}</option>
          ))}
        </select>
        <input type="text" placeholder='What your task' value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
        <button onClick={handleAddTask}>add</button>
      </div>
      <div className="planner-grid">
        {/* {days.map((day) => (
          <div key={day} className="planner-day">
            <h3>{day}</h3>
            <ul>
              {tasks[day].map((task, index) => (
                <li key={index}>• {task}</li>
              ))}
            </ul>
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default Planner
