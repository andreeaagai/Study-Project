import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from "../components/SearchBar";
import "./HomePage.css";
import Modal from "./Modal";

const HomePage = ({ questions, onCreate }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const nextId = useRef(questions.length + 1);

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleCreateQuestion = () => {
    setTitle("");
    setDescription("");
    setIsModalOpen(true);
  };

  const handleSubmitCreate = (event) => {
    event.preventDefault();
    const newQuestion = {
      id: nextId.current,
      title,
      body: description,
      answers: [],
      votes: 0,
      favorite: false,
    };
    onCreate(newQuestion);
    nextId.current += 1;
    setIsModalOpen(false);
  };

  const filteredQuestions = questions
    .filter((question) =>
      question.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      question.body.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((question) => ({
      ...question,
      answers: question.answers || [],
    }));

  return (
    <div>
      <header>
        <h1>Întrebări Recente și Populare</h1>
      </header>
      <div className="container">
        <div className="option-bar">
          <SearchBar onSearch={handleSearchChange} className="search-bar" />
          <button className="create-questions" color="primary" onClick={handleCreateQuestion}>
            Creează Întrebare
          </button>
        </div>
        <ul className='questions-list'>
            {filteredQuestions.map((question) => (
            <li 
              key={question.id}
              className='question-item'>
              <Link to={`/questions/${question.id}`}>
                {question.title} ({question.answers.length} răspunsuri)
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2>Creează Întrebare</h2>
          <form onSubmit={handleSubmitCreate}>
            <div>
              <label>Title:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label>Description:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button type="submit">Creează</button>
            <button type="button" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default HomePage;
