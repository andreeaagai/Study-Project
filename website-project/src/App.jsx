import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './components/LoginPage';
import Header from './components/Header';
import FavoriteQuestionsPage from './pages/FavoriteQuestionsPage';
import QuestionsPage from './pages/QuestionsPage';
import { AuthProvider } from './components/AuthContext';

const App = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const response = await fetch("/questions.json");
        const data = await response.json();
        const updatedQuestions = data.questions.map((question) => ({
          ...question,
          votes: question.votes ?? 0,
          favorite: question.favorite ?? false,
          answers: question.answers.map((answer) => ({
            ...answer,
            votes: answer.votes ?? 0,
          })),
        }));
        setQuestions(updatedQuestions);
      } catch (error) {
        console.error("Eroare la încărcarea întrebărilor:", error);
      }
    };

    loadQuestions();
  }, []);

  const handleCreate = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  const handleEdit = (updatedQuestion) => {
    setQuestions(
      questions.map((question) =>
        question.id === updatedQuestion.id ? updatedQuestion : question
      )
    );
  };

  const handleDelete = (id) => {
    setQuestions(questions.filter((question) => question.id !== id));
  };

  const handleVoteUp = (id) => {
    setQuestions(
      questions.map((question) =>
        question.id === id ? { ...question, votes: question.votes + 1 } : question
      )
    );
  };

  const handleVoteDown = (id) => {
    setQuestions(
      questions.map((question) =>
        question.id === id ? { ...question, votes: Math.max(question.votes - 1, 0) } : question
      )
    );
  };

  const toggleFavorite = (id) => {
    setQuestions(
      questions.map((question) =>
        question.id === id ? { ...question, favorite: !question.favorite } : question
      )
    );
  };

  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage questions={questions} onEdit={handleEdit} onDelete={handleDelete} onVoteUp={handleVoteUp} onVoteDown={handleVoteDown} onFavorite={toggleFavorite} onCreate={handleCreate} />} />
          <Route path="/favorite-questions" element={<FavoriteQuestionsPage questions={questions} onEdit={handleEdit} onDelete={handleDelete} onVoteUp={handleVoteUp} onVoteDown={handleVoteDown} onFavorite={toggleFavorite} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/questions/:questionId" element={<QuestionsPage questions={questions} onEdit={handleEdit} onDelete={handleDelete} onVoteUp={handleVoteUp} onVoteDown={handleVoteDown} onFavorite={toggleFavorite} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
