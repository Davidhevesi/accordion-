import { useState } from 'react'
import './App.css'
import data from './data'
import SingleQuestion from './Questions'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <div>
      <main className="container">
        <h3>questions and and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />
          })}
        </section>
      </main>
    </div>
  )
}

export default App
