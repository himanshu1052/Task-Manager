import React, { useState } from 'react';
import { useTodo } from '../../Context/Contexttodo/Context';

function AddTodo() {
  const [text, setText] = useState('');
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      alert("Please enter a task.");
      return;
    }
    addTodo(text);
    setText('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-row gap-x-2 justify-center">
        <input
          className="form-input w-full rounded-md border shadow-sm p-4"
          type="text"
          value={text}
          placeholder="Add a new To do"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
