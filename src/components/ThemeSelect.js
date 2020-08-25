import React, { useContext } from 'react'
import { AppThemeContext } from '../contexts/AppThemeContext'
import { Button, ButtonGroup } from 'reactstrap'

const ThemeSelect = () => {
  const { selection } = useContext(AppThemeContext)
  return (
    <div>
      <ButtonGroup size="lg">
        <Button value='light' onClick={(event) => selection(event)}>Light</Button>
        <Button value='dark' onClick={(event) => selection(event)}>Dark</Button>
        <Button value='nurple' onClick={(event) => selection(event)}>Nurple</Button>
      </ButtonGroup>
    </div>
  )
}
export default ThemeSelect