import React, { useEffect, useState } from 'react'
import { db } from '../firebase';

import {
    collection,
    addDoc,
    updateDoc,
    onSnapshot,
    deleteDoc,
    doc,
  } from "firebase/firestore";
  
const Todo = () => {
  const [todo, setTodo]= useState("");
  const [todos, setTodos] = useState([]);

  const todosCollectionRef = collection(db,"todos");

  useEffect(()=>{
    const unsubscribe= onSnapshot(todosCollectionRef,(snapshot)=>{
        const todoData =snapshot.docs.map((doc)=>({
            id:doc.id,
            ...doc.data(),
        }));
        setTodos(todoData);
    })
    return ()=>unsubscribe();
  },[]);

  const handleInputChange=(e)=>{
    setTodo(e.target.value);
  }

  const handleSubmitButton=async(e)=>{
    e.preventDefault(); 
    if(todo.trim()==="")return;
    await addDoc(todosCollectionRef,{
        text:todo,
        completed:false,
    })
    setTodo("")
  }
  const handleDelete = async(id)=>{
    const todoDoc = doc(db,"todos",id);
    await deleteDoc(todoDoc);
  };
  const handleUpdate = async(id,newText)=>{
    const todoDoc = doc(db,"todos",id);
    await updateDoc(todoDoc,{text:newText});
  }

  return (
    <div className='todo fade-in fade-in-bottom'>
      <div className='todo-heading'>
        <h1>Todo List</h1>
      </div>
      <div className="todo-form">
      <form onSubmit={handleSubmitButton}>
        <label htmlFor="">
          <input type="text" id="todo"  value={todo} name="todo" placeholder="Enter a todo here" onChange={handleInputChange}/>
        </label>
        <button type="submit">Add Todo</button>
      </form>
      </div>
      <div className='todo-list'>
      <ul>
          {todos.map((curElem) => (
          <li key={curElem.id}>
            {curElem.text}
            <div className='gap-1'>
            <button onClick={() => handleDelete(curElem.id)}>❌</button>
            <button onClick={() => handleUpdate(curElem.id, prompt("Update todo:", curElem.text))}>✏️</button>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}

export default Todo
