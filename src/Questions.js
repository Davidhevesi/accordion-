import { useState } from 'react'

const Questions = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn">btn</button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default Questions
