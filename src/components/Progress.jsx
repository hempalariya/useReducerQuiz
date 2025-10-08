import React from 'react'

export default function Progress({progressIndex}) {
  return (
    <div className="progress-bar">
        <progress value={progressIndex}></progress>
      </div>
  )
}
