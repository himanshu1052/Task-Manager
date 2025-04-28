import React, { useState, useEffect } from 'react';
import AddTodo from './Components/AddTodo/AddTodo';
import TodoList from './Components/TodoList/TodoList';
import { TodoProvider } from './Context/Contexttodo/Context';
import './index.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Apply dark or light theme to the body element
    if (isDarkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded"
      >
        Toggle Theme
      </button>

      <h1 className="text-3xl font-bold text-center mt-4">Todo App</h1>
      <div className="container mx-auto p-4">
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
