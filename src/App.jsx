import React, { useState } from 'react'
import './App.css'
import { Auth, CreateRoom, Chat } from './components'
import { auth } from './config/firebase'


function App() {
  //const [isAuth, setIsAuth] = useState(auth?.currentUser?.emailVerified) 
  const [isAuth, setIsAuth] = useState(false) 
  const [room, setRoom] = useState('')

  if(!isAuth){
    return (
      <div className="App">
        <Auth setIsAuth={setIsAuth}/>
      </div>
    )
  }
  return (
    <>
      {
      !room ?
      <CreateRoom setRoom={setRoom}/> : 
      <Chat room={room}/>
      }
    </>
    
      
  )
  
}

export default App