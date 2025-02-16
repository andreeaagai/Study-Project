import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext'
import './Header.css'; 

const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="header">
      <nav className="nav-links">
          <Link to="/" className="nav-button">Home</Link>
          <Link to="/favorite-questions" className="nav-button">Favorite Questions</Link>
          <Link to="/login" className="nav-button">Login</Link>
           {isAuthenticated && (
            <button className='logout' onClick={logout}>Logout</button>
          )}
      </nav>
    </header>
  );
};

export default Header;
