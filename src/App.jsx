import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import DashBoard from './Features/DashBoard'
import Notes from './Features/Notes'
import AiAssistant from './Features/AiAssistant'
import TodoList from './Features/TodoList'
import Planner from './Features/Planner'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element:<DashBoard/>,
        },
        {
          path: '/notes',
          element:<Notes/>
        },
        {
          path:"/planner",
          element:<Planner/>
        },{
          path:"/aiassistant",
          element:<AiAssistant/>
        },{
          path:"/todo-list",
          element:<TodoList/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}>
      <AppLayout/>
    </RouterProvider>
  )
}

export default App
