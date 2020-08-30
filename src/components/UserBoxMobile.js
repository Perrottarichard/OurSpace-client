import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot, faUser } from '@fortawesome/free-solid-svg-icons'

const UsersMobileContainer = styled.div`
display: block;
text-align: center;
height: auto;
width: 90%;
margin: auto;
margin-top: 20px;
margin-bottom: 0;
background-color: ${props => props.theme.bg};
border-radius: 5px;
color: ${props => props.theme.bubbleText};
@media (min-width: 1100px) {
  display: none;
}
`
const UsersMobileInner = styled.div`
overflow: auto;
text-align: left;
height: auto;
width: 50%;
border-style: solid;
border-color: ${props => props.theme.otherText};
border-width: 1px;
border-radius: 5px;
margin: auto;
padding: 10px;
font-size: 1.5rem;
background-color: ${ props => props.theme.bubbleOther};
color: ${ props => props.theme.otherText};
@media(min-width: 1100px) {
  display: none;
}
`
const ChatBoxMobileButton = styled.button`
color: ${ props => props.theme.otherText};
background-color: ${props => props.theme.bg};
border-radius: 4px;
text-transform: uppercase;
text-decoration: none;
padding: 10px;
border: none;
margin-bottom: 5px;
@media (max-width: 700px) {
  font-size: 0.75rem;
}
`
export const ChatBoxSpanMobile = styled.p`
font-size: 0.75rem;
margin-right: 10px;
color: ${props => props.theme.otherText}
`

const UserBoxMobile = ({ users }) => {
  const [show, setShow] = useState(false)
  const toggleShow = () => {
    setShow(!show)
  }
  return (
    <UsersMobileContainer>
      <ChatBoxMobileButton onClick={toggleShow}>Show who's here</ChatBoxMobileButton>
      {show ?
        <UsersMobileInner>
          <ChatBoxSpanMobile><FontAwesomeIcon icon={faRobot} />{' '}robot</ChatBoxSpanMobile>
          {users ? users.map((user) =>
            <ChatBoxSpanMobile key={user.name}>
              <FontAwesomeIcon icon={faUser} />{' '}{user.name}
            </ChatBoxSpanMobile>) : null}
        </UsersMobileInner>
        : null}
    </UsersMobileContainer>
  )
}

export default UserBoxMobile