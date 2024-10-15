
import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate=useNavigate()
  const user=useSelector(store=>store.user)

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  return (
    <div className='absolute z-10 px-8 py-2 bg-gradient-to-b from-black flex justify-between'>
      <img className='w-1/6 ' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='netflix-logo'></img>
      {user &&(
      <div className='flex py-2 m-3'>
        <img className='w-12 h-12  ' src={user.photoURL} alt='usericon'></img>
       
<button onClick={handleSignOut} className="cursor-pointer bg-gradient-to-r from-[#EB3349] to-[#F45C43] px-2 py-2 rounded text-white font-semibold shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] hover:shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-10px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] focus:shadow-[inset_-12px_-8px_40px_#46464620] transition-shadow w-18 h-10 mx-4 text-justify">
  SignOut
</button>
      </div>)
}
    </div>
  )
}

export default Header