import React from 'react'
import './Auth.css'
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../../config/firebase'

function Auth({setIsAuth}) {
  const signIn = async ()=>{
    try{
        const result = await signInWithPopup(auth, googleProvider);
        setIsAuth(result?.user?.emailVerified);
    }catch(err){
        console.error(err);
    }
  }
  return (
    <div className="auth">
        <button onClick={signIn}>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png" alt="google icon" />
            <h3>Sign in</h3>
        </button>
    </div>
  )
}

export default Auth