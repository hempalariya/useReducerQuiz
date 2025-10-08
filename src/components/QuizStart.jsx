import React from "react";
import Button from "./Button";

export default function QuizStart({ numQuestion, dispatch }) {
  function startQuiz() {
    console.log("ready");
    dispatch({ type: "start" });
  }
  return (
    <div className="quiz-ready">
      <h2>Welcome to the Quiz</h2>
      <p>Answer {numQuestion} questions.</p>
      <Button className={"quiz-start"} onClick={startQuiz}>
        Start Quiz
      </Button>
    </div>
  );
}
