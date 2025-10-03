import React from "react";
import Button from "./Button";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function QuizContainer() {
  return (
    <div className="quiz-container">
      <div className="question">
        <h2>Question Text</h2>
      </div>
      <div className="options">
        <Button className={"answer"}>Option 1</Button>
        <Button className={"answer"}>Option 2</Button>
        <Button className={"answer"}>Option 3</Button>
        <Button className={"answer"}>Option 4</Button>
      </div>

      <div className="quiz-footer">
        <Button className={"prev"}>
          <FaLongArrowAltLeft />
        </Button>
        <Button className={"next"}>
          <FaLongArrowAltRight />
        </Button>
      </div>
    </div>
  );
}
