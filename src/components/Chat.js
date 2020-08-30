import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import styled from 'styled-components'
import InfoHeader from './InfoHeader'
import InputBox from './InputBox'
import Messages from './Messages'
import ThemeSelect from './ThemeSelect'
import UserBox from './UserBox'
import UserBoxMobile from './UserBoxMobile'

const OuterDiv = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 90vh;
  background-color: ${props => props.theme.bg};
  @media (max-width: 1100px) {
    height: 80vh;
  }
  @media (max-width: 600px) {
    height: 75vh;
  }
`

const InnerDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background: ${props => props.theme.boxBg};
border-radius: 8px;
height: 80%;
width: 40%;
max-width: 600px;
overflow: auto;
@media (max-width: 1100px) {
  width: 75%;
  height: 100%;
  margin-top: 10px;
}
@media (max-width: 600px) {
    width: 95%;
    height: 100%;
    margin-top: 10px;
  }

`

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')
  const [users, setUsers] = useState('')
  const [client, setClient] = useState(false)
  const [error, setError] = useState(null)
  const [piglify, setPiglify] = useState(true)

  useEffect(() => {
    const { name, room } = queryString.parse(location.search)
    setName(name)
    setRoom(room)

    if (!client) {
      socket = io('https://r-space-server.herokuapp.com', { transports: ['polling'] })
      // socket = io('http://localhost:5000', { transports: ['websocket'] })
      socket.emit('join', { name, room })
      setClient(true)
    }

  }, [location.search, client])

  useEffect(() => {
    socket.on('message', (message) => {
      console.log(socket.id)
      setMessages(messages => [...messages, message])
    })

    socket.on('roomData', ({ users }) => {
      setUsers(users)
    })
  }, [])

  useEffect(() => {
    socket.on('disconnect', () => {
      console.log('disconnect')
    })
  }, [])

  useEffect(() => {
    socket.on('exception', (error) => {
      setError(error)
    })
  }, [])

  const sendMessage = (event) => {
    event.preventDefault()
    if (message) {
      socket.emit('sendMessage', message)
      setMessage('')
    }
  }
  const [modal, setModal] = useState(false)
  const toggle = () => {
    setModal(!modal)
  }
  const togglePig = () => {
    setPiglify(!piglify)
  }
  return (
    <div>
      <div style={{ display: 'block', textAlign: 'center' }}>
        <ThemeSelect togglePig={togglePig} />
        <div style={{ display: 'block', textAlign: 'center' }}>
          <UserBoxMobile users={users} />
        </div>
      </div>
      <OuterDiv>
        <InnerDiv>
          <InfoHeader room={room} users={users} toggle={toggle} piglify={piglify} />
          {error ? <h2 style={{ color: 'red', margin: '10px' }}>{error.errorMessage}</h2> : null}
          <Messages messages={messages} name={name} piglify={piglify} togglePig={togglePig} />
          <InputBox message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </InnerDiv>
        <UserBox users={users} />
      </OuterDiv>
    </div>
  )
}

export default Chat