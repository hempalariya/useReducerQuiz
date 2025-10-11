import React from "react";
import Progress from "./Progress";
import QuizContainer from "./QuizContainer";
import Button from "./Button";
import { FaLongArrowAltRight } from "react-icons/fa";
import Timer from "./Timer";

export default function Main({questions, currentQuestionIndex, isAnswered, dispatch, selectedAnsIndex, timeLeft, score}) {

   function handleNexQuestion(){
  dispatch({
    type: 'nextQuestion'
  })
 }

function handleSubmit(){
  dispatch({
    type: 'finish'
  })
}

  return (
    <main>
      <Progress progressIndex={(currentQuestionIndex + 1) / questions.length} />
      
      <QuizContainer question = {questions[currentQuestionIndex]} isAnswered = {isAnswered} dispatch = {dispatch} selectedAnsIndex = {selectedAnsIndex} score={score}/>
      <div className="quiz-footer">
        <Timer timeLeft = {timeLeft} dispatch = {dispatch}/>
        {/* <Button className={"prev"}>
          <FaLongArrowAltLeft />
        </Button> */}
        {isAnswered && (currentQuestionIndex < questions.length - 1) &&  (
          <Button className={"next"} onClick= {
            handleNexQuestion
          }>
            <FaLongArrowAltRight />
          </Button>
        )}
        {
          (currentQuestionIndex === questions.length - 1) && <Button onClick={handleSubmit}>Submit</Button>
        }
      </div>
    </main>
  );
}
