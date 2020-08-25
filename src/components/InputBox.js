import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const InputBox = (props) => {
  const { message, setMessage, sendMessage } = props
  return (
    <form>
      <input
        value={message}
        type='text'
        placeholder='type your message'
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null} />
      <button onClick={e => sendMessage(e)}>
        Send
      </button>
    </form>
  )
}
export default InputBox