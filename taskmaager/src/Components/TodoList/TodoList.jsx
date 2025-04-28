import React, { useState } from 'react';
import { useTodo } from '../../Context/Contexttodo/Context';

function TodoList() {
  const { todos, toggleTodo, deleteTodo, filterTodos } = useTodo();
  const [filter, setFilter] = useState('all');

  const filteredTodos = filterTodos(filter);

  return (
    <div className="mt-4">
      <div className='bg-blue-500 text-white px-4 py-2 rounded mb-2 gap-x-2 flex justify-center'>
        <button onClick={() => setFilter('all')} className="mr-2 ">All</button>
        <button onClick={() => setFilter('completed')} className="mr-2">Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
      </div>

      {filteredTodos.map((todo, index) => (
        <div key={index} className="flex items-center mb-2 transition-all">
          <input
            className="form-checkbox h-5 w-5 text-blue-500"
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(index)}
          />
          <label
            className={`ml-2 text-lg flex-1 ${todo.completed ? 'text-gray-400 line-through' : 'text-black'}`}
          >
            {todo.text}
          </label>
          {todo.completed && todo.completeAt && (
            <span className="text-sm text-green-500 ml-2">
              Completed At: {new Date(todo.completeAt).toLocaleString()}
            </span>
          )}
          <button
            className="ml-2 text-red-500 bg-black hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
            onClick={() => deleteTodo(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
