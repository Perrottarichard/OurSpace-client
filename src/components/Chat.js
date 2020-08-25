import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import InfoHeader from './InfoHeader'
import InputBox from './InputBox'
import Messages from './Messages'

let socket

const Chat = ({ location }) => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')
  const ENDPOINT = 'localhost:5000'

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

    socket = io(ENDPOINT)
    socket.emit('join', { name, room })

    return () => {
      socket.emit('disconnect')
      socket.off()
    }

  }, [ENDPOINT, location.search])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message])
    })
  }, [messages])

  return (
    <div>
      <InfoHeader room={room} />
      <Messages messages={messages} name={name} />
      <InputBox message={message} setMessage={setMessage} sendMessage={sendMessage} />
    </div>
  )
}

export default Chat