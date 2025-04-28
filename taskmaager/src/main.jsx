import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Make sure App is correctly imported
import { TodoProvider } from './Context/Contexttodo/Context.jsx'; // Correct path
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);
