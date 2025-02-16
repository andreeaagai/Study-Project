import React from "react";
import { Link } from "react-router-dom";
import "./FavoriteQuestionsPage.css";

const FavoriteQuestionsPage = ({ questions }) => {
  const favoriteQuestions = questions.filter((question) => question.favorite);

  return (
    <div>
      <h1>Întrebări Favorite</h1>
      <ul>
        {favoriteQuestions.map((question) => (
          <li key={question.id}>
            <Link to={`/questions/${question.id}`}>
              {question.title} ({question.answers.length} răspunsuri)
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteQuestionsPage;
