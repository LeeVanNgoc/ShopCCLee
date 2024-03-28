import React from 'react';
import './SignIn.css';
import { PiUserSquareFill } from "react-icons/pi";

const SignIn = () => {
  return (
    <>
    <div className='signin-container'>
        <div className='icon'>
          <PiUserSquareFill className='icon-display'/>
        </div>

        <p>Sign in</p>

        <div className='account'>
          <input type='text' placeholder='Email or phone' required/>
        </div>
      
        <div className='password'>
          <input type='password' placeholder='Password'required/>
        </div>
        <div className='submit'>
          <button type='submit'>Sign In</button>
        </div>
    </div>
    </>
  )
}

export default SignIn;