import React from 'react'
import "./title.scss"


const Title = ({children,className, style}) => {
    return (
        <div className={`title ${className}`}  style={style}>
            <h1>{children}</h1>
            <span>{children}</span>
        </div>
    )
}

export default Title
