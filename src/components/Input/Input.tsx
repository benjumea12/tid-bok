import React from 'react'
// styled componts
import { InputStyled, Message } from './Input.styled'
// Interfaces
export interface IinputProps {   
    border?: boolean
    error?: boolean | false
    message?: string
}

type InputProps = IinputProps & React.InputHTMLAttributes<HTMLInputElement>

const Input = (props: InputProps) => {
    const { error, message } = props

    return (
        <React.Fragment>
            <Message error={error}>{ message }</Message>
            <InputStyled {...props} />
        </React.Fragment>
    )
}

export default Input