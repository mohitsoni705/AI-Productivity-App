import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AiAssistant = () => {
  const [res,setRes]=useState("");
  const [input, setInput] = useState("");
  const [loading,setLoading]=useState(false);
  const [typedText,setTypedText]=useState("");
  const API = import.meta.env.VITE_API || "AIzaSyCDzP3i0T_7acFeGaYPHf4VJ5kZ7PRG8P0";

  const handleGenerateAnswer = async () => {
    const prompt = input.trim();
    if (!prompt) return;

    setLoading(true);
    setRes("");

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${API}`,
        {
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }
      );

      const answer = response?.data?.candidates?.[0]?.content?.parts?.[0]?.text;
      setRes(answer || "No response from API.");
      setInput("");
    } catch (error) {
      console.error("Error", error);
      setRes("Oops! Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(()=>{
    let i=0;
    const interval = setInterval(()=>{
      setTypedText(res.slice(0,i));
      i++;
      if(i>res.length) clearInterval(interval);
    },20);
    return()=>clearInterval(interval)
  },[res])
  const handleInputChange=(e)=>{
    e.preventDefault();
    setInput(e.target.value)
  }
  return (
    <div className='notes fade-in fade-in-bottom'>
      <div className='box'>
        <div>
          <h1 className='ai-chat-title'>AI Assistant</h1>
          <p className='assistant-subtitle'>Ask questions, summarize text, or get ideas quickly.</p>
        </div>
      </div>

      <div className='box-1 ai-chat-card'>
        <div className='ai-response'>
          {loading ? (
            <p>Typing response...</p>
          ) : (
            <p>{typedText || 'Your AI response will appear here.'}</p>
          )}
        </div>

        <textarea
          className='notes-input ai-textarea'
          name='input'
          value={input}
          placeholder='Type your prompt here...'
          onChange={handleInputChange}
        />

        <button className='ai-send-button' onClick={handleGenerateAnswer}>
          Send
        </button>
      </div>
    </div>
  )
}

export default AiAssistant
