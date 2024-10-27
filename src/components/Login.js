import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL } from '../utils/constant';


const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
  const [errMessage,setErrMessage]=useState(null)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);
  const handleButtonClick=()=>{
    //Validate the form data
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message=checkValidData(email.current.value,password.current.value)

    setErrMessage(message);
    if(message) return;

    //Sign In Sign Up Logic
    if(!isSignInForm)
    {
      //Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/67574804?s=400&u=8eb564a3e318b27abc41904af96ac26c73ea7a4c&v=4"
    }).then(() => {
      // Profile updated!
      const {uid,email,displayName,photoURL} =auth.currentUser;// it will have updated user
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        
      // ...
    }).catch((error) => {
      // An error occurred
      const errorCode = error.code;
    const errorMessage = error.message;
      setErrMessage(errorCode+"-"+ errorMessage);
      // ...
    });
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrMessage(errorCode+"-"+ errorMessage);
    // ..
  });

    }
    else{
      //Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrMessage(errorCode+"-"+ errorMessage);
  });

    }
  }
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header></Header>
      <div >
        <img className='absolute' src={BG_URL} alt='background image'></img>
      </div>

      <form onSubmit={(e)=>e.preventDefault()} className='bg-black text-white absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 opacity-90'> 
        <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
        {!isSignInForm&&<input ref={name} type='text' placeholder='Full-Name' className='p-2 m-2 w-full bg-slate-300'></input>}
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
