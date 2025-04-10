import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import { collection ,onSnapshot } from 'firebase/firestore'
import { NavLink } from 'react-router-dom';
const TaskOverview = () => {
  const [todos ,setTodos]=useState([]);

  const totalCollectionRef = collection(db,"todos");
  useEffect(()=>{
    const unsubscribe =onSnapshot(totalCollectionRef,(snapShot)=>{
      const todoData=snapShot.docs.map((doc)=>({
        id:doc.id,
        ...doc.data(),
      }));
      setTodos(todoData);
    })
    return ()=>unsubscribe();
  },[]);
  console.log(todos)
  return (
    <div className='box-1'>
      <div className='flex-row'>
        <h1>Task Overview</h1>
        <NavLink to="todo-list"><button>Add</button></NavLink>
      </div>
      <ul className='task-Over'>
        {todos.slice(0,6).map((curElem)=>(
          <>
           <li key={curElem.id}>{curElem.text}</li>
           </>
        ))}
      </ul>
    </div>
  )
}

export default TaskOverview
