import React, { useState } from 'react';
import QuestionCard from './components/QuestionCards';

const TOTAL_QUESTION = 10;

const App = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const beginQuiz = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>QUIZ</h1>

        <button className="begin" onClick={beginQuiz}>Begin</button>
        <p className="score">Score:</p>
        <p>Loading Question...</p>

        <QuestionCard
          question={questions[questionNumber].question}
          answers={questions[questionNumber].answer}
          userAnswer={userAnswers ? userAnswers[questionNumber] : undefined}
          questionNumber={questionNumber + 1}
          questionTotal={TOTAL_QUESTION}
          mCallback={checkAnswer}
        />

        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      </header>
    </div>
  );
}

export default App;
