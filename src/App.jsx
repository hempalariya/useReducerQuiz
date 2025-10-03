import React, { useEffect, useReducer } from 'react'
import Header from './components/Header'
import Main from './components/Main'

const initialState = {
  questions : [],
  currentQuestionIndex : 0,
  score : 0,
  quizEnd : false
}


export default function App() {

  const [] = useReducer()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:8000/quiz')

        const data = await res.json()
        console.log(data);
        
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <Header />
      <Main />
    </div>
  )
} 
