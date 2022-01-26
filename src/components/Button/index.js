import React from 'react'
import { StyledButton } from './button.style'

const Button = (props) => {

    const { children, onClick, value, type = "button"} = props


    return (
        <StyledButton {...props} value={value} onClick={() => type !=="submit" && onClick(value)}>{children}</StyledButton>
    )
}

export default Button