import React from 'react'
import { FaRegSquareCheck } from 'react-icons/fa6'
import { RiVoiceprintFill } from 'react-icons/ri'
import { SlCalender } from 'react-icons/sl'
import { TbNotes } from 'react-icons/tb'
import { TiHomeOutline } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='side-bar'>
      <div className="logo">
        <NavLink to="/">
        <img src="./img/growX(2).png"/>
        </NavLink>
      </div>
      <div className="navbar">
        <ul className='nav-link'>
        <NavLink to="/"><li><TiHomeOutline className='icons'/> Home</li></NavLink>
        <NavLink to="todo-list"> <li><FaRegSquareCheck className='icons'/> To Do List</li></NavLink>
        <NavLink to="notes"><li><TbNotes className='icons'/> Notes</li></NavLink>
        <NavLink to="planner"> <li><SlCalender className='icons'/> Planner</li></NavLink>
        <NavLink to="aiassistant"> <li><RiVoiceprintFill className='icons'/> AI Assistant</li></NavLink>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
