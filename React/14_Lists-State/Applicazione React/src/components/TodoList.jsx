import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim()) { // Se dopo il trim l'inputValue non è vuoto va avanti
      setTodos([...todos, inputValue]); // Aggiungi all'array todos il nuovo inputValue
      setInputValue(""); // Pulisci l'input dopo l'invio
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const resetTodos = () => {
    setTodos([]);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={resetTodos}>Reset</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
