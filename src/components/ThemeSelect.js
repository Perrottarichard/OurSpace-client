import React, { useContext } from 'react'
import { AppThemeContext } from '../contexts/AppThemeContext'
import styled from 'styled-components'

const LightButton = styled.button`
color: #30302f;
text-transform: uppercase;
text-decoration: none;
background: #e1e1e3;
padding: 10px;
display: inline-block;
border: none;
width: 5rem;
margin: 5px;
@media (max-width: 330px) {
  width: 4rem;
  font-size: 10px;
}
`
const DarkButton = styled.button`
color: white;
text-transform: uppercase;
text-decoration: none;
background: #2e2e36;
padding: 10px;
display: inline-block;
border: none;
width: 5rem;
margin: 5px;
@media (max-width: 330px) {
  width: 4rem;
  font-size: 10px;
}
`
const NurpleButton = styled.button`
color: white;
text-transform: uppercase;
text-decoration: none;
background: #3d0369;
padding: 10px;
display: inline-block;
border: none;
width: 5rem;
margin: 5px;
@media (max-width: 330px) {
  width: 4rem;
  font-size: 10px;
}
`
const PigButton = styled.button`
text-transform: uppercase;
text-decoration: none;
text-decoration: none;
color: #f0ab8d;
background: black;
display: inline-block;
border: none;
padding: 10px;
width: 5rem;
margin: 5px;
@media (max-width: 330px) {
  width: 4rem;
  font-size: 10px;
}
`
const ThemeSelect = ({ togglePig }) => {
  const { selection } = useContext(AppThemeContext)
  return (
    <div style={{ paddingTop: '3rem' }}>
      <LightButton value='light' onClick={(event) => selection(event)}>Light</LightButton>
      <DarkButton value='dark' onClick={(event) => selection(event)}>Dark</DarkButton>
      <NurpleButton value='nurple' onClick={(event) => selection(event)}>Nurple</NurpleButton>
      <PigButton onClick={togglePig}>Piglify</PigButton>
    </div>
  )
}
export default ThemeSelect