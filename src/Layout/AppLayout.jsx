
import React from 'react'
import RightBar from './RightBar'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import MobileNav from './MobileNav'

const AppLayout = () => {
  return (
    <div className='applayout'>
      <div className="nav-left">
        <SideBar/>
      </div>
      <div className="nav-mob">
       <MobileNav/>
      </div>
      <div className="nav-right">
      <Outlet/>
      </div>
    </div>
  )
}

export default AppLayout
