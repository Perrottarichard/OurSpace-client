import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import '../styles/Messages.css'
import Message from './Message'


const Messages = ({ messages, name }) => {
  return (
    <ScrollToBottom className="messages-scroll" behavior={'discrete'}>
      {messages.map((message, i) =>
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      )}
    </ScrollToBottom>
  )
}
export default Messages