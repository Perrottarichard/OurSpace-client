import React from 'react'
import styled from 'styled-components'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import ReactEmoji from 'react-emoji'

const MessageWrapperUser = styled.div`
display: flex;
  justify-content: flex-end;
  padding: 0 5%;
  margin-top: 3px;
`

const MessageWrapperOther = styled.div`
display: flex;
  justify-content: flex-start;
  padding: 0 5%;
  margin-top: 3px;
`
const Name = styled.p`
display: flex;
align-items: center;
font-family: Fira Sans;
color: ${props => props.theme.messageBg};
margin-right: 5px;
letter-spacing: 0.3px;
`
const MessageP = styled.p`
width: 100%;
letter-spacing: 0;
color: inherit;
float: left;
font-size: 1em;
word-wrap: break-word;
`
const BubbleUser = styled.div`
background: ${props => props.theme.bubble};
  border-radius: 20px;
  padding: 5px 20px;
  color: ${props => props.theme.bubbleText};
  display: inline-block;
  max-width: 80%;
`
const BubbleOther = styled.div`
background: ${props => props.theme.bubbleOther};
  border-radius: 20px;
  padding: 5px 20px;
  color:  ${props => props.theme.otherText};
  display: inline-block;
  max-width: 80%;
`

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false
  const trimmedName = name.trim().toLowerCase()
  if (user === trimmedName) {
    isSentByCurrentUser = true
  }
  return (
    isSentByCurrentUser ? (
      <MessageWrapperUser>
        <Name>
          {trimmedName}
        </Name>
        <BubbleUser>
          <MessageP>
            {ReactEmoji.emojify(text)}
          </MessageP>
        </BubbleUser>
      </MessageWrapperUser>
    )
      : (
        <MessageWrapperOther>
          <BubbleOther>
            <MessageP>
              {ReactEmoji.emojify(text)}
            </MessageP>
          </BubbleOther>
          <Name>
            {user}
          </Name>
        </MessageWrapperOther>
      )
  )
}
export default Message