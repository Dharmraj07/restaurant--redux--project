// src/App.js
import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Modal from "./components/Modal"; // Import Modal component

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Modal /> {/* The modal will conditionally render based on state */}
    </div>
  );
}

export default App;
