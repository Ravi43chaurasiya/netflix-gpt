import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
  const [errMessage,setErrMessage]=useState(null)
  const email=useRef(null);
  const password=useRef(null);
  const handleButtonClick=()=>{
    //Validate the form data
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message=checkValidData(email.current.value,password.current.value)
   
    setErrMessage(message);
  }
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header></Header>
      <div >
        <img className='absolute' src='https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg' alt='background image'></img>
      </div>

      <form onSubmit={(e)=>e.preventDefault()} className='bg-black text-white absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 opacity-90'> 
        <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
        {!isSignInForm&&<input type='text' placeholder='Full-Name' className='p-2 m-2 w-full bg-slate-300'></input>}
        <input ref={email} type='text' placeholder='email' className='p-2 m-2 w-full bg-slate-300'></input><br></br>
        {!isSignInForm&&<input ref={password} type='password' placeholder='new-password' className='p-2 m-2 w-full bg-slate-300'></input>}<br></br>
        {!isSignInForm&&<input ref={password} type='password' placeholder='Confirm-new-password' className='p-2 m-2 w-full bg-slate-300 '></input>}
        {isSignInForm&&<input ref={password} type='password' placeholder='Password' className='p-2 m-2 w-full bg-slate-300'></input>}
        <p className='text-red-700'>{errMessage}</p>
        <button className='p-2 m-2 w-full bg-red-800 rounded-lg ' onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm?"New to Netflix?Sign Up Now":"Already registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login
