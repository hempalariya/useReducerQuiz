import React from 'react'

export default function Progress() {
  return (
    <div className="progress-bar">
        <progress value={1 / 15}></progress>
        <p>1/15</p>
      </div>
  )
}
