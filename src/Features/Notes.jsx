import React, { useEffect, useState } from 'react'
import {db} from "../firebase";
import { collection , onSnapshot, addDoc , doc ,updateDoc ,deleteDoc } from 'firebase/firestore';

const Notes = () => {
  const [notes,setNotes]=useState([]);
  const [note,setNote]=useState({
    name:"",
    note:""
});

  const totalCollectionRef = collection(db,"notes");

  // Read Notes 
  useEffect(()=>{
    const unsubsribe =  onSnapshot(totalCollectionRef,(snapShot)=>{
      const notesData = snapShot.docs.map((doc)=>({
        id:doc.id,
        ...doc.data()
      }))
      setNotes(notesData)
    }
    )
    return ()=>unsubsribe();
  },[])
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value
    }));
  };  
  const handleSubmitButton=async(e)=>{
    e.preventDefault();
    // alert("You Have Submited Notes")
    await addDoc(totalCollectionRef,{
      text:note.note,
      name:note.name,
    })
    setNote({
      name: "",
      note: ""
    }); 
  }
  const handleDeleteButton=async(id)=>{
    const noteDoc =doc(db,"notes",id);
    await deleteDoc(noteDoc);
  }
  return (
    <div className='notes'>
      <div>
        <h1>📝My Notes</h1>
      </div>
      <form className='notes-form' onSubmit={handleSubmitButton}>
        <input type="text"  placeholder="Note title"onChange={handleInputChange} name="name"value={note.name}/>
        <textarea type="text" placeholder='Write your note...' className='notes-input' name="note" value={note.note} onChange={handleInputChange} />
        <button type="submit">Add Note</button>
      </form>
      <div className="cur-notes">
        <ul className='grid-3-cols' >
          {notes.map((curElem)=>(
            <li key={curElem.id} className='box-1'>
              <h1>{curElem.name}</h1>
              <pre>{curElem.text}</pre>
              <div className='red-delete' onClick={()=>handleDeleteButton(curElem.id)}>Delete</div>
              </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Notes
