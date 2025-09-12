import React from 'react'
import "./ErrorBox.css"

const ErrorBox = ({ message }) => {
  return (
    <div className='cms-empty-err'>
      <h1>{ message }</h1>
    </div>
  )
}

export default ErrorBox
