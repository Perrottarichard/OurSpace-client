import React from 'react'
import styled from 'styled-components'
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
font-size: 1rem;
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

const Message = ({ message: { user, text }, name, piglify }) => {

  function translatePigLatin(str) {
    let words = str.split(" ");
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let phrase = []
    words.forEach(word => {
      let pigString = '';
      for (var i = 0; i < word.length; i++) {
        for (var j = 0; j < vowels.length; j++) {
          if (word[0] === vowels[j]) {
            pigString = 'way'
            let finalString = word.concat(pigString);
            return phrase.push(finalString);
          }
          else if ((word[i] === 't' && word[i + 1] === 'h') && pigString === '') {
            pigString = 'ay'
            let finalString = word.slice(2,).concat(word.slice(0, 2)).concat(pigString);
            return phrase.push(finalString);
          }
          else if ((word[i] === 'c' && word[i + 1] === 'h') && pigString === '') {
            pigString = 'ay'
            let finalString = word.slice(2,).concat(word.slice(0, 2)).concat(pigString);
            return phrase.push(finalString);
          }
          else if ((word[i] === 's' && word[i + 1] === 'p') && pigString === '') {
            pigString = 'ay'
            let finalString = word.slice(2,).concat(word.slice(0, 2)).concat(pigString);
            return phrase.push(finalString);
          }
          else if ((word[i] === 't' && word[i + 1] === 'r') && pigString === '') {
            pigString = 'ay'
            let finalString = word.slice(2,).concat(word.slice(0, 2)).concat(pigString);
            return phrase.push(finalString);
          }
          else if (word[i] === vowels[j] && pigString === '') {
            pigString = 'ay'
            let finalString = word.slice(1,).concat(word.slice(0, 1)).concat(pigString);
            return phrase.push(finalString);
          }
        }
      }
    }
    )
    return phrase.join(' ').toLowerCase().replace(/[?.!,]/g, '')
  }

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
            {piglify ? translatePigLatin(text) : ReactEmoji.emojify(text)}
          </MessageP>
        </BubbleUser>
      </MessageWrapperUser>
    )
      : (
        <MessageWrapperOther>
          <BubbleOther>
            <MessageP>
              {piglify ? translatePigLatin(text) : ReactEmoji.emojify(text)}
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