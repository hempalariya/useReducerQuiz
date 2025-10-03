import React from 'react'

export default function Button({children, className, type="button"}) {
  return (
    <button type={type} className={`btn ${className ? className : ''}`}>
        {children}
    </button>
  )
}
