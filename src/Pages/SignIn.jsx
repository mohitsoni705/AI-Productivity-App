import React from 'react'

const SignIn = () => {
  return (
    <div>
      <div>
        <h1>Signup</h1>
      </div>
      <div>
        <form className=''>
          <label>Name:</label>
          <input type="text" placeholder='Enter username' />
          <label>Password:</label>
          <input type="password" placeholder='Enter passaword' />
        </form>

      </div>
    </div>
  )
}

export default SignIn
