import React from 'react'

const Notes = () => {
  return (
    <div className='notes'>
      <div>
        <h1>Notes</h1>
      </div>
      <form className='notes-form'>
        <textarea type="text" placeholder='Enter your Notes' className='notes-input' />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Notes
