import React from 'react'
import { NavLink } from 'react-router-dom'

const PomoDashboard = () => {
  return (
    <NavLink to="pomodoro">
    <div className='box-1'>
      <h1>0</h1>
      <div>Your Pomodoro</div>
    </div>
    </NavLink>
  )
}

export default PomoDashboard
