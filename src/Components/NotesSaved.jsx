import React, { useEffect, useState } from 'react'
import {db} from "../firebase";
import { collection,onSnapshot } from 'firebase/firestore';
import { NavLink } from 'react-router-dom';
const NotesSaved = () => {
  const [notes, setNotes] =useState([]);
  const  totalNotesCollection = collection(db,"notes");
  useEffect(()=>{
    const unsubsribe = onSnapshot(totalNotesCollection,(snapShot)=>{
      const notesData = snapShot.docs.map((doc)=>({
        id:doc.id,
        ...doc.data()
      }))
      setNotes(notesData)
    })
    return ()=>unsubsribe();
  },[])
  return (
  <NavLink to="notes">
    <div className='box-1'>
      <h1>{notes.length}</h1>
      <div>Notes Saved </div>
    </div>
    </NavLink>
  )
}

export default NotesSaved
