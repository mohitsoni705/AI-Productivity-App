import React, { useEffect, useState } from 'react'
import {db}from "../firebase";
import { collection,onSnapshot } from 'firebase/firestore';
const TaskToday = () => {
  const [todos,setTodos]=useState([]);
  const totalCollectionRef = collection(db,"todos") 
  useEffect(()=>{
    const unsubsribe =  onSnapshot(totalCollectionRef,(snapShot)=>{
      const todoData = snapShot.docs.map((doc)=>({
        id:doc.id,
        ...doc.data(),
      }))
      setTodos(todoData);
    }) 
    return ()=>unsubsribe();
  },[])

  return (
    <div className='box-1'>
      <h1>{todos.length}</h1>
      <div>tasks today</div>
    </div>
  )
}

export default TaskToday
