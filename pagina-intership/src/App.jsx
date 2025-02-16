import React from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";


function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <Dashboard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
