import React, { useState, useRef } from 'react';

type todo = {
  label: string,
  checked: boolean,
}

const Home = () => {
  const [todos, setTodos] = useState<todo[]>([]);

  const todoInput = useRef<HTMLInputElement>(null);

  const addTodo = (): void => {
    const refValue: string = todoInput?.current?.value ?? '';
    const newTodo: todo = { label: refValue, checked: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="p-5">
      <input
        className="px-2 text-black border rounded-l h-9 focus:outline-none"
        type="text"
        placeholder="todo"
        ref={todoInput}
      />
      <button
        className="px-2 bg-pink-900 rounded-r h-9"
        type="button"
        onClick={addTodo}
      >
        <i className="px-1 text-lg fas fa-plus" />
      </button>
      {todos.map((item) => (
        <div key={todos.indexOf(item)}>
          <input id={item.label} type="checkbox" />
          <label htmlFor={item.label}>
            {item.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Home;
