import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const Quotes = () => {
  const [quote,setQuote]=useState("");
  const [loading,setLoading]=useState(false);
  const API = import.meta.env.VITE_API; // if using Vite

  const handleQuotes=async()=>{
  try{
    if(!quote.trim()==""){
      setLoading(true)
    }
   const response = await axios({
        url:`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${API}`,
        method: "POST",
        data:{
          "contents": [{
            "parts":[{"text": "Give me a random single line quote "}],
            }]
           }
          })
        const res = response.data.candidates[0].content.parts[0].text;
          setQuote(res);
  }catch(error){
    console.log("Error",error)
  }
}
    useEffect(()=>{
      handleQuotes();
    },[])
  return (<>
  <div className='box-1'>
      <div className='box'>
        <h1>Quotes of the Day</h1>
        <div><NavLink to="/notes"><button>Add Task</button></NavLink></div>
    </div>
    <p>{quote}</p>
      </div>
    </>
  )
}

export default Quotes
