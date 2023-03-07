import React from 'react';
import './style.css';
import { useState } from 'react';
import QuizScreen from './component/QuizScreen.js';
import JoinScreen from './component/JoinScreen.js';
import Navbar from './component/Navbar.js';

export default function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  return (
    <>
      <Navbar />
      <div className="quiz-container">
        {isQuizStarted ? (
          <QuizScreen retry={() => setIsQuizStarted(false)} />
        ) : (
          <JoinScreen start={() => setIsQuizStarted(true)} />
        )}
      </div>
    </>
  );
}
