import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QuizProvider } from "./Context/quizContext";

const root = ReactDOM.createRoot(document.getElementById('quiz-root'));
root.render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>
);
