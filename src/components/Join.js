import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Join = () => {

  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  return (
    <div>
      <div>
        <h1>Join</h1>
        <div>
          <input placeholder='Name' type='text' onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div>
          <input placeholder='Room' type='text' onChange={(e) => setRoom(e.target.value)}></input>
        </div>
        <Link to={`/chat?name=${name}&room=${room}`} onClick={e => (!name || !room) ? e.preventDefault() : null}>
          <button type='submit'>Sign In</button>
        </Link>
      </div>

    </div>
  )
}

export default Join