import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocalStorage } from './useLocalStorage.js';  // Custom Hook

export const todoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useLocalStorage('todos', []); // Using useLocalStorage hook

  const addTodo = (text) => {
    const newTodo = {
      text,
      completed: false,
      completeAt: null,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return {
          ...todo,
          completed: !todo.completed,
          completeAt: !todo.completed ? new Date().toString() : null,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const filterTodos = (filter) => {
    switch (filter) {
      case 'completed':
        return todos.filter((todo) => todo.completed);
      case 'pending':
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  return (
    <todoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo, filterTodos }}>
      {children}
    </todoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(todoContext);
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
};
