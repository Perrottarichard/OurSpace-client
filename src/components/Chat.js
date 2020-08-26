import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import styled from 'styled-components'
import InfoHeader from './InfoHeader'
import InputBox from './InputBox'
import Messages from './Messages'
import ThemeSelect from './ThemeSelect'

const OuterDiv = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  height: 100vh;
  background-color: ${props => props.theme.bg};
  padding-bottom: 5rem;
`

const InnerDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background: ${props => props.theme.boxBg};
border-radius: 8px;
height: 60%;
width: 35%;
overflow: auto;
@media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }

`

let socket

const Chat = ({ location }) => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')
  const EP = 'http:ourspace-server.herokuapp.com'

  const sendMessage = (event) => {
    event.preventDefault()
    if (message) {
      socket.emit('sendMessage', message)
      setMessage('')
    }
  }

  useEffect(() => {
    const { name, room } = queryString.parse(location.search)
    setName(name)
    setRoom(room)

    socket = io(EP)
    socket.emit('join', { name, room })

    return () => {
      socket.emit('disconnect')
      socket.off()
    }

  }, [EP, location.search])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message])
    })
  }, [messages])

  return (
    <div>
      <div style={{ display: 'block', textAlign: 'center' }}>
        <ThemeSelect />
      </div>
      <OuterDiv>
        <InnerDiv>
          <InfoHeader room={room} />
          <Messages messages={messages} name={name} />
          <InputBox message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </InnerDiv>
      </OuterDiv>
    </div>
  )
}

export default Chat