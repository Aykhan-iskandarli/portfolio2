import React from 'react'
import "./button.scss"

const Button = ({children,className, style,onClick,disabled}) => {
    return (
        <button className={`btn ${className}`} style={style} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button
