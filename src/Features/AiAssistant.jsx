import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiOutlineWechat } from "react-icons/ai";

const AiAssistant = () => {
  const [res,setRes]=useState("");
  const [input, setInput] = useState("");
  const [loading,setLoading]=useState(false);
  const [typedText,setTypedText]=useState("");
  const API = import.meta.env.VITE_API; 
   const handleGenerateAnswere=async()=>{
    if(!input.trim())return;
    setLoading(true);
    setRes("");
    try{
    const response = await axios(
      {
        url:`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API}`,
    method: "POST",
    data:{
      "contents": [{
        "parts":[{"text": input}]
        }]
       }
       });
       console.log(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
       setRes(response["data"]["candidates"][0]["content"]["parts"][0]["text"])
       setInput("");
      }catch(error){
        console.log("Error",error);
        setRes("Oops! Something went wrong.");
      }
      setLoading(false``)
  }
  useEffect(()=>{
    let i=0;
    const interval = setInterval(()=>{
      setTypedText(res.slice(0,i));
      setLoading(false)
      i++;
      if(i>res.length)clearInterval(interval);
    },20);
    return()=>clearInterval(interval)
  },[res])
  const handleInputChange=(e)=>{
    e.preventDefault();
    setInput(e.target.value)
  }
  return (
    <div className="chat-box"> 

  <div className="header">
    <AiOutlineWechat />
    <h1>AI ASSISTANT</h1>
  </div> 

  <div className="response">
    {loading ? <p>Typing response...</p> : <p>{typedText}</p>}
  </div>

  <div className="input-area">
    <input
      name="input"
      value={input}
      placeholder="Enter Your Prompt"
      onChange={handleInputChange}
    />
    <button onClick={handleGenerateAnswere}>Click me</button>
  </div>
</div>
  )
}

export default AiAssistant
