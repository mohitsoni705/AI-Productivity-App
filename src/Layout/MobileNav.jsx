import React, { useState } from 'react'
import { FaRegSquareCheck } from 'react-icons/fa6'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiVoiceprintFill } from 'react-icons/ri'
import { SlCalender } from 'react-icons/sl'
import { TbNotes } from 'react-icons/tb'
import { TiHomeOutline } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'

const MobileNav = () => {
  const [toogle,setToggle]=useState(false);
  const handleHamButton=()=>{
    if(toogle==true){
      setToggle(false)
    }else{
      setToggle(true)
    }
  }
  return (
    <>
    <div className='navbar-mobile'>
      <div>
        <img src="./public/img/growX(2).png" className='' alt="" />
      </div>
      <div className='icons ham-button'>
      <GiHamburgerMenu onClick={handleHamButton}/>
      </div>
    </div>
      <div className={toogle?"mobile-links":"none"}>
      <ul>
          <NavLink to="/"><li><TiHomeOutline className='icons'/> Home</li></NavLink>
                <NavLink to="todo-list"> <li><FaRegSquareCheck className='icons'/> To Do List</li></NavLink>
                <NavLink to="notes"><li><TbNotes className='icons'/> Notes</li></NavLink>
                <NavLink to="planner"> <li><SlCalender className='icons'/> Planner</li></NavLink>
                <NavLink to="aiassistant"> <li><RiVoiceprintFill className='icons'/> AI Assistant</li></NavLink>
      </ul>
      </div>
      </>
  )
}

export default MobileNav
