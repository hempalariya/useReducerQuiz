import React from "react";
import Progress from "./Progress";
import QuizContainer from "./QuizContainer";

export default function Main({questions, currentQuestionIndex, isAnswered, dispatch, selectedAnsIndex}) {

  return (
    <main>
      <Progress progressIndex={(currentQuestionIndex + 1) / questions.length}/>
      {}
      <QuizContainer question = {questions[currentQuestionIndex]} isAnswered = {isAnswered} dispatch = {dispatch} selectedAnsIndex = {selectedAnsIndex}/>
    </main>
  );
}
