import React from "react";
import Button from "./Button";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function QuizContainer({ question, isAsnswered, dispatch, selectedAnsIndex }) {
  function handleAnswer(i) {
    dispatch({
      type: 'answered',
      payload: i
    })
    
  }

  return (
    <div className="quiz-container">
      <div className="question">
        <h2>{question.question}</h2>
      </div>
      <div className="options">
        {question.options.map((option, i) => {
          return <Button key={i} disabled = {isAsnswered} className={"answer"} onClick={() => {
            handleAnswer(i)
          }}>{option}</Button>;
        })}
      </div>

      <div className="quiz-footer">
        {/* <Button className={"prev"}>
          <FaLongArrowAltLeft />
        </Button> */}
        {isAsnswered && (
          <Button className={"next"}>
            <FaLongArrowAltRight />
          </Button>
        )}
      </div>
    </div>
  );
}
