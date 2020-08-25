import React from 'react'
import styled from 'styled-components'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const StyledForm = styled.form`
display: flex;
`
const In = styled.input`
border: none;
border-radius: 0;
padding: 0.75rem;
width: 80%;
font-size: 1.2em;
color: ${props => props.theme.inputText};
background-color: ${props => props.theme.inputBg};
`
const ButtonSend = styled.button`
color: ${props => props.theme.buttonText};
text-transform: uppercase;
text-decoration: none;
background: ${props => props.theme.button};
padding: 20px;
display: inline-block;
border: none;
width: 30%;
`
const InputBox = (props) => {
  const { message, setMessage, sendMessage } = props
  return (
    <StyledForm>
      <In
        value={message}
        type='text'
        placeholder='Type your message'
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null} />
      <ButtonSend onClick={e => sendMessage(e)} style={{ color: props => props.theme.button }}>
        Send
      </ButtonSend>
    </StyledForm>
  )
}
export default InputBox