import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const InfoHeader = ({ room }) => {
  return (
    <div className='container'>
      <div>
        <h3>{room}</h3>
      </div>
      <div className='left'>

      </div>
      <div className='right'>
        <a href='/'><FontAwesomeIcon icon={faTimesCircle} /></a>

      </div>
    </div>
  )
}
export default InfoHeader