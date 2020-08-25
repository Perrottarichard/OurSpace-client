import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Heading = styled.h1`
color: ${props => props.theme.primaryColor};
font-size: 3rem;
text-align: center
`


const Join = () => {

  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  return (
    <div>
      <div>
        <Heading>Join</Heading>
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