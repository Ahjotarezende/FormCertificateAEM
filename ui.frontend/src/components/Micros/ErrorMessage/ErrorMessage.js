import React from 'react'
import { Message } from './ErrorMessage.styled'

const ErrorMessage = ({fsmessage, fwmessage, txtmessage, colormessage, errors, className}) => {
  return (
       errors[className] ? <Message
        fsmessage={`${fsmessage}px`}
        fwmessage={fwmessage}
        colormessage={colormessage}
        className={className}
    > {txtmessage} </Message> : ""
  )
}

export default ErrorMessage;