import React from 'react';
import QuestionCard from './components/QuestionCards';

const App = () => {

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

        <QuestionCard />

        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      </header>
    </div>
  );
}

export default App;
