import React, { useRef } from 'react'
import './CreateRoom.css'

function CreateRoom({setRoom}) {
    const inputValue = useRef()

    const handelRoomNameSubmit = (e)=>{
        e.preventDefault()
        setRoom(inputValue.current.value)

    }

  return (
    <section className="create__room">
        <h2>Choose a name for your room</h2>
        <form onSubmit={handelRoomNameSubmit}>
            <input ref={inputValue} type="text" />
            <button type='submit'>Create / Join</button>
        </form>
    </section>
  )
}

export default CreateRoom