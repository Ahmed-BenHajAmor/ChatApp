import React, { useEffect, useState } from 'react'
import './Chat.css'
import { auth, db } from '../../config/firebase'
import { collection, addDoc, serverTimestamp, query, where, onSnapshot, orderBy } from 'firebase/firestore'

function Chat({room}) {
  const messagesRef = collection(db, 'messages');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);


  useEffect(()=>{
    const messagesQuery = query(messagesRef, where('room', '==', room), orderBy('time', 'desc'));
    const unsiscribe = onSnapshot(messagesQuery, (dbMessages)=>{
      const tmpMessages = [];
      dbMessages.forEach((msg)=>{
        tmpMessages.push({...msg.data(), id: msg.id});
      })
      setMessages(tmpMessages);
    })

    return ()=> unsiscribe();
  }, [])

  const addMessage = async (e)=>{
    if(message==='') return;
    e.preventDefault()
    try{
      await addDoc(messagesRef, {
        message,
        userName: auth?.currentUser?.displayName,
        room,
        time: serverTimestamp()

      })
      setMessage('')
    }catch(err){
      console.error(err);
    }
  }

  return (
    <section className="chat">
      <div className='chat__title'><h3>Welcome to: {room}</h3></div>
      <div className="box">
        {messages.map((message)=>{
          return <Message key={message.id} {...message}/>
        })}
      </div>
      <form onSubmit={addMessage}>
        <input value={message} onChange={(e)=>setMessage(e.target.value)} type="text" />
        <button type='submit'>sent</button>
      </form>
    </section>
  )
}

const Message = ({userName, message})=>{
  return (
    <div className="message__send">
      <p><b>{userName}</b>: <i>{message}</i></p>
    </div>
  )
}
export default Chat