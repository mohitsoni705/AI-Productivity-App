import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AiAssistant = () => {
  const [res,setRes]=useState("");
  const [input, setInput] = useState("");
  const [loading,setLoading]=useState(false);

   const handleGenerateAnswere=async()=>{
    if(!input.trim())return;
    setLoading(true);
    setRes("");
    try{
    const response = await axios(
      {
        url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCrz37pUzovSbdx5GySxs5ZenT4SitzvOk",
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
  useEffect(()=>{})
  const handleInputChange=(e)=>{
    e.preventDefault();
    setInput(e.target.value)
  }
  return (
    <div>
      {/* <p>{res}</p> */}
      <textarea name="input" value={input} placeholder='Enter Your Prompt' id="" onChange={handleInputChange}/>
      <h1>{res}</h1>
      <button onClick={handleGenerateAnswere}>Click me</button>
    </div>
  )
}

export default AiAssistant
