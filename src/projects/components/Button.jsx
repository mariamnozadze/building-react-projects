import React from 'react'

const Button = ({text="Click", btnClass, icon}) => {
  return (
    <button className={`btn ${btnClass}`}>
        {icon}
        {text}</button>
  )
}

export default Button