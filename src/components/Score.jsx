import React from 'react'
import Button from './Button'

export default function Score({score, dispatch}) {
  return (
    <div className='finished'>
        <h3>You have finished the quiz with {score} score</h3>
        <Button onClick={() => {
            dispatch({type: 'restart'})
        }}>Restart Quiz</Button>
    </div>
  )
}
