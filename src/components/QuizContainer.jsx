import React from "react";
import Button from "./Button";



export default function QuizContainer({ question, isAnswered, dispatch, selectedAnsIndex, score }) {
  function handleAnswer(i) {
    dispatch({
      type: 'answered',
      payload: i
    })
    
  }


  return (
    <div className="quiz-container">
      <div className="score">
        <p>Score: {score}</p>
      </div>
      <div className="question">
        <h2>{question.question}</h2>
      </div>
      <div className="options">
        {question.options.map((option, i) => {
          return <Button key={i} disabled = {isAnswered} className={`answer ${selectedAnsIndex === i ? 'answered' : ''} ${(isAnswered ? (i === question.answerIndex) ? 'correct' : 'incorrect' : ' ')}`} onClick={() => {
            handleAnswer(i)
          }}>{option}</Button>;
        })}
      </div>

    </div>
  );
}
