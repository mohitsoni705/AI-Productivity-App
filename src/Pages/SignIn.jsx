import React from 'react'

const SignIn = () => {
  return (
    <div className='signUpUi'>
      <div className='signUpHead'>
      <div>
        <h1>Signup to</h1>
        <p className='signUpHeadP'>Creative</p>
      </div>
      <div>
        <p>Already a user?</p>
        <p>Log in here</p>
      </div>
      </div>
      <div>
        <form className='signUpForm'>
          <label>Your Full Name</label>
          <input type="text" className='signpUpInput' />
          <label>Your Email Address</label>
          <input type="text" className='signpUpInput'/>
          <label>Create a password</label>
          <input type="text" className='signpUpInput'/>
          <div className='signUpCheck'>
          <input type="radio"/>
          <label>I agree to the Terms of Service and Privacy Policy</label>
          </div>
          <button type='submit'>Create Account</button>
        </form>

      </div>
    </div>
  )
}

export default SignIn
