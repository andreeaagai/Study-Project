import React, { useState } from "react";
import "./LoginPage.css";
import { auth } from "./firebaseConfig";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Autentificare reușită:", userCredential.user);
        setEmail("");
        setPassword("");
        navigate("/questions");
      })
      .catch((error) => {
        console.error("Eroare la autentificare:", error);
      });
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Autentificare Google reușită:", result.user);
        navigate("/questions");
      })
      .catch((error) => {
        console.error("Eroare la autentificare Google:", error);
      });
  };

  const handleGitHubLogin = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Autentificare GitHub reușită:", result.user);
        navigate("/questions");
      })
      .catch((error) => {
        console.error("Eroare la autentificare GitHub:", error);
      });
  };

  return (
    <div className="login-page">
      <div className="form-page">
        <h1>Autentificare</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Parolă"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="login" type="submit">Autentificare</button>
        </form>
        <button className="login" onClick={handleGoogleLogin}>Autentificare cu Google</button>
        <button className="login" onClick={handleGitHubLogin}>Autentificare cu GitHub</button>
      </div>
    </div>
  );
};

export default LoginPage;
