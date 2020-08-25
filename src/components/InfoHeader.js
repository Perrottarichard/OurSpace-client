import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const InfoDiv = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.messageBg};
  border-radius: 4px 4px 0 0;
  margin-top: 0;
  height: 1.5rem;
  width: 100%;
`
const Left = styled.div`
flex: 0.5;
display: flex;
align-items: center;
margin-left: 0.5rem;
color: ${props => props.theme.left};
`
const Right = styled.div`
display: flex;
  flex: 0.5;
  justify-content: flex-end;
  margin-right: 0.5rem;
  color: ${props => props.theme.closeIcon}
`
const InfoHeader = ({ room }) => {
  return (
    <InfoDiv>
      <Left>
        <h3>{room}</h3>
      </Left>
      <Right>
        <a href='/'><FontAwesomeIcon icon={faTimesCircle} style={{ fontSize: '1rem' }} /></a>
      </Right>
    </InfoDiv>
  )
}
export default InfoHeader