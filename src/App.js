// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OddEvenGame from './components/OddEvenGame';
import Signup from './components/Signup';
import GameResult from './components/GameResult';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OddEvenGame />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/game-result" element={<GameResult />} />
      </Routes>
    </Router>
  );
}

export default App;
