import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot, faUser } from '@fortawesome/free-solid-svg-icons'

const UsersContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
text-align: center;
height: auto;
width: 20%;
background-color: ${props => props.theme.bg};
// border-style: solid;
// border-color: ${props => props.theme.button};
// border-width: 5px;
border-radius: 5px;
color: ${props => props.theme.bubbleText};
@media (max-width: 800px) {
  width: 25%;
}

@media (max-width: 700px) {
  width: 30%;
}
@media (max-width: 600px) {
  display: none;
}
@media (max-width: 480px) {
  display: none;
}
`
const UsersInner = styled.div`
display: inline-block;
white-space: nowrap;
overflow: auto;
flex-direction: column;
// justify-content: space-between;
text-align: left;
height: 80%;
width: 80%;
border-style: solid;
border-color: ${props => props.theme.otherText};
border-width: 1px;
border-radius: 5px;
margin: auto;
margin-bottom: 3.5rem;
padding: 10px;
font-size: 1.5rem;
background-color: ${ props => props.theme.bubbleOther};
color: ${ props => props.theme.otherText};
@media(max-width: 480px) {
  display: none;
}
`
const ChatBoxHeading = styled.h3`
color: ${ props => props.theme.button};
@media (max-width: 700px) {
  font-size: 1rem;
}
`
export const ChatBoxP = styled.p`
font-size: 1rem;
color: ${props => props.theme.otherText}
`
const UserBox = ({ users }) => {
  return (
    <UsersContainer>
      <ChatBoxHeading>Who's here?</ChatBoxHeading>
      <UsersInner>
        <ChatBoxP><FontAwesomeIcon icon={faRobot} />{' '}robot</ChatBoxP>
        {users ? users.map((user, i) => <div key={user.name}>
          <ChatBoxP>
            <FontAwesomeIcon icon={faUser} />{' '}{user.name}
          </ChatBoxP>
        </div>
        ) : null}
      </UsersInner>
    </UsersContainer>
  )
}

export default UserBox