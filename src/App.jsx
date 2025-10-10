import React, { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loading from "./components/Loading";
import QuizStart from "./components/QuizStart";
import Score from "./components/Score";

const initialState = {
  questions: [],
  status: "loading", // 'loading', 'error', 'ready', 'active', 'finished'
  currentQuestionIndex: 0,
  isAnswered: false,
  selectedAnsIndex: null,
  score: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "answered": {
      const question = state.questions.at(state.currentQuestionIndex);
      console.log(state.score);

      return {
        ...state,
        isAnswered: true,
        selectedAnsIndex: action.payload,
        score:
          action.payload === question.answerIndex
            ? state.score + 1
            : state.score,
      };
    }
    case "nextQuestion":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex++,
        isAnswered: false,
        selectedAnsIndex: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
      };

    case "restart":
      return {
        ...state,
        status: "ready", // 'loading', 'error', 'ready', 'active', 'finished'
        currentQuestionIndex: 0,
        isAnswered: false,
        selectedAnsIndex: null,
        score: 0,
      };

    default: {
      return state;
    }
  }
}

export default function App() {
  const [
    {
      questions,
      status,
      currentQuestionIndex,
      isAnswered,
      score,
      selectedAnsIndex,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "setLoading" });
        const res = await fetch("http://localhost:8000/quiz");

        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        dispatch({ type: "fetchFailed" });
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const numQuestion = questions.length;

  return (
    <div>
      <Header />
      {status === "loading" && <Loading />}
      {status === "ready" && (
        <QuizStart numQuestion={numQuestion} dispatch={dispatch} />
      )}
      {status === "active" && (
        <Main
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          isAnswered={isAnswered}
          score={score}
          dispatch={dispatch}
          selectedAnsIndex={selectedAnsIndex}
        />
      )}
      {status === "finished" && <Score score={score} dispatch={dispatch} />}
    </div>
  );
}
