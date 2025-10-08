import React from 'react'

export default function Button({children, className, type="button", onClick, disabled = "false"}) {
  return (
    <button type={type} className={`btn ${className ? className : ''}`} onClick={onClick}>
        {children}
    </button>
  )
}
