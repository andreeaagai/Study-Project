import React from 'react';

function Cards({ questions, currentQuestion, onQuestionClick }) {
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div 
            key={question.id} 
            onClick={() => onQuestionClick(question.id)}
            className={currentQuestion === question.id ? 'selected' : ''}
        >
          
        {currentQuestion === question.id ? (
            <p>{question.answer}</p>
        ) : (
            <h3>{question.question}</h3>
        )}
        </div>
      ))}
    </div>
  );
}

export default Cards;