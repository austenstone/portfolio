import React, { useState } from 'react';

interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface QuizProps {
  questions: QuizQuestion[];
}

export default function Quiz({ questions }: QuizProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[current];

  function handleSelect(idx: number) {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === q.correct) {
      setScore((s) => s + 1);
    }
  }

  function handleNext() {
    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  }

  function handleReset() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    return (
      <div className="quiz-container">
        <div className="quiz-result">
          <h3>🎯 Results: {score}/{questions.length}</h3>
          <p>
            {score === questions.length
              ? '🏆 Perfect score!'
              : score >= questions.length * 0.7
              ? '👏 Great job!'
              : 'Keep learning — you\'ll get there!'}
          </p>
          <button className="quiz-btn" onClick={handleReset}>Try Again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <span>Question {current + 1} of {questions.length}</span>
        <span>Score: {score}</span>
      </div>
      <h4>{q.question}</h4>
      <div className="quiz-options">
        {q.options.map((opt, i) => {
          let cls = 'quiz-option';
          if (selected !== null) {
            if (i === q.correct) cls += ' correct';
            else if (i === selected) cls += ' incorrect';
          }
          return (
            <button key={i} className={cls} onClick={() => handleSelect(i)}>
              {opt}
            </button>
          );
        })}
      </div>
      {selected !== null && (
        <div className={`quiz-explanation ${selected === q.correct ? 'correct' : 'incorrect'}`}>
          <p>{selected === q.correct ? '✅ Correct!' : '❌ Not quite.'} {q.explanation}</p>
        </div>
      )}
      {selected !== null && (
        <button className="quiz-btn" onClick={handleNext}>
          {current + 1 >= questions.length ? 'See Results' : 'Next →'}
        </button>
      )}
    </div>
  );
}
