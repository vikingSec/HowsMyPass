import Styles from './styles'
import React from 'react'

export default function SubmitButton() {

  const buttonStyle = Styles.button

  return (
    <div style={{width:'100%'}}>
      <button style={buttonStyle}>Submit</button>
    </div>
  )
}
