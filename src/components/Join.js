import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
display: block;
height: 100vh;
width: 100vw;
justify-content: center;
margin: 0;
background-color: ${props => props.theme.bg};
`
const SubHeading = styled.h1`
color: ${props => props.theme.otherText};
font-size: 2rem;
text-align: center;
margin-top: 10%;
`
const StyledSection = styled.section`
background-color: ${props => props.theme.bubbleOther};
border-style: solid;
border-color: gray;
border-width: 1px;
width: 25rem;
text-align: center;
height: 25rem;
border-radius: 5px;
border-width: 0px;
margin-left: auto;
margin-right: auto;
margin-top: 20;
padding: 10px;
padding-top: 3rem;
margin-bottom: 20;
@media (max-width: 420px) {
  width: 80%;
}
`
const Input = styled.input`
padding: 10px;
width: 80%;
height: 40px;
margin-bottom: 40px;
margin-left: 10px;
margin-right: 10px;
border-radius: 5px;
border-width: 0px;
`
export const Button = styled.button`
  color: ${props => props.theme.buttonText};
  text-transform: uppercase;
  text-decoration: none;
  background: ${props => props.theme.button};
  padding: 20px;
  -webkit-border-radius: 5px;
  display: inline-block;
  border: none;
  width: 50%;
  transition-duration: 0.4s;
  &:hover {
    background-color: gray !important;
    color: #3254a8 !important;
  }
`

const Join = () => {

  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  return (
    <Wrapper>
      {/* <Heading><FontAwesomeIcon icon={faComments} style={{ color: '#3254a8', fontSize: '6rem' }} /></Heading> */}
      <SubHeading>Enter a room</SubHeading>
      <hr style={{ width: '20rem', margin: 'auto', marginBottom: 20 }} />
      <StyledSection>
        <Input placeholder='Name' type='text' onChange={(e) => setName(e.target.value)}></Input>
        <Input placeholder='Room' type='text' onChange={(e) => setRoom(e.target.value)}></Input>
        <Link to={`/chat?name=${name}&room=${room}`} onClick={e => (!name || !room) ? e.preventDefault() : null}>
          <Button type='submit'><FontAwesomeIcon icon={faComments} style={{ color: 'white', fontSize: '3rem' }} /></Button>
        </Link>
      </StyledSection>
    </Wrapper>
  )
}

export default Join