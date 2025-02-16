import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Edit, Delete, ThumbUp, ThumbDown, Favorite, FavoriteBorder } from "@mui/icons-material";
import Modal from "./Modal";
import "./QuestionsPage.css";
import { useAuth } from "../components/AuthContext";

const QuestionsPage = ({ questions, onEdit, onDelete, onVoteUp, onVoteDown, onFavorite }) => {
  const { questionId } = useParams();
  const question = questions.find((q) => q.id === parseInt(questionId, 10));
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState(question ? question.title : "");
  const [description, setDescription] = useState(question ? question.body : "");
  const [editQuestion, setEditQuestion] = useState(question);
  const [editAnswer, setEditAnswer] = useState(null);
  const [answerText, setAnswerText] = useState("");

  const handleEditLocal = () => {
    setIsModalOpen(true);
  };

  const handleSubmitEdit = (event) => {
    event.preventDefault();
    const updatedQuestion = { ...editQuestion, title, body: description };
    onEdit(updatedQuestion);
    setIsModalOpen(false);
    setEditQuestion(null);
    setTitle("");
    setDescription("");
  };

  const handleEditAnswer = (answer) => {
    setEditAnswer(answer);
    setAnswerText(answer.body);
    setIsModalOpen(true);
  };

  const handleSubmitEditAnswer = (event) => {
    event.preventDefault();
    const updatedAnswers = question.answers.map((answer) =>
      answer === editAnswer ? { ...answer, body: answerText } : answer
    );
    const updatedQuestion = { ...editQuestion, answers: updatedAnswers };
    onEdit(updatedQuestion);
    setIsModalOpen(false);
    setEditAnswer(null);
    setAnswerText("");
  };

  const handleVoteUp = (id) => {
    if (!isAuthenticated) {
      alert("Trebuie să te autentifici pentru a vota.");
      navigate("/login");
      return;
    }
    onVoteUp(id);
  };

  const handleVoteDown = (id) => {
    if (!isAuthenticated) {
      alert("Trebuie să te autentifici pentru a vota.");
      navigate("/login");
      return;
    }
    onVoteDown(id);
  };

  const handleFavorite = (id) => {
    if (!isAuthenticated) {
      alert("Trebuie să te autentifici pentru a adăuga la favorite.");
      navigate("/login");
      return;
    }
    onFavorite(id);
  };

  if (!question) {
    return <div>Întrebarea nu a fost găsită.</div>;
  }

  return (
    <div>
      <div className="container">
        <h1>{question.title}</h1>
        <p>{question.body}</p>
        <div className="button">
          <Button
            onClick={handleEditLocal}
            className="edit-btn"
            startIcon={<Edit />}
            aria-hidden="true"
          >
            Editare
          </Button>
          <Button
            onClick={() => onDelete(question.id)}
            className="delete-btn"
            startIcon={<Delete />}
            aria-hidden="true"
          >
            Ștergere
          </Button>
          <Button onClick={() => handleFavorite(question.id)}>
            {question.favorite ? (
              <Favorite style={{ color: "red" }} />
            ) : (
              <FavoriteBorder style={{ color: "gray" }} />
            )}
            Favorite
          </Button>
          <Button
            onClick={() => handleVoteUp(question.id)}
            startIcon={<ThumbUp />}
            sx={{ color: "green" }}
          >
            Votează
          </Button>
          <Button
            onClick={() => handleVoteDown(question.id)}
            startIcon={<ThumbDown />}
            sx={{ color: "red" }}
          >
            Votează
          </Button>
        </div>
        <p>Voturi: {question.votes}</p>
        <div className="answers">
          {question.answers.map((answer, index) => (
            <div key={index} className="answer-item">
              <strong>{answer.author}</strong>
              <p>{answer.body}</p>
              <div className="button">
                <Button
                  onClick={() => handleEditAnswer(answer)}
                  className="edit-btn"
                  startIcon={<Edit />}
                  aria-hidden="true"
                >
                  Editare
                </Button>
                <Button
                  onClick={() => onDelete(answer.id)}
                  className="delete-btn"
                  startIcon={<Delete />}
                  aria-hidden="true"
                >
                  Ștergere
                </Button>
                <Button
                  onClick={() => handleVoteUp(answer.id)}
                  startIcon={<ThumbUp />}
                  sx={{ color: "green" }}
                >
                  Votează
                </Button>
                <Button
                  onClick={() => handleVoteDown(answer.id)}
                  startIcon={<ThumbDown />}
                  sx={{ color: "red" }}
                >
                  Votează
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2>{editQuestion ? "Edit Question" : "Edit Answer"}</h2>
          <form onSubmit={editQuestion ? handleSubmitEdit : handleSubmitEditAnswer}>
            <div>
              <label>Title:</label>
              <input
                type="text"
                value={editQuestion ? title : ""}
                onChange={(e) => setTitle(e.target.value)}
                disabled={!editQuestion}
              />
            </div>
            <div>
              <label>Description:</label>
              <textarea
                value={editQuestion ? description : answerText}
                onChange={(e) => editQuestion ? setDescription(e.target.value) : setAnswerText(e.target.value)}
              />
            </div>
            <button type="submit">{editQuestion ? "Save" : "Save Answer"}</button>
            <button type="button" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default QuestionsPage;
