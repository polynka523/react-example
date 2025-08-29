import React, { useState, FormEvent, ChangeEvent } from "react";

import { ToDoFormProps } from "../types";

const ToDoForm: React.FC<ToDoFormProps> = ({ addTask, isDark }) => {
  const [userInput, setUserInput] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  return (
    <form 
      className={isDark ? "todo-form dark" : "todo-form"} 
      onSubmit={handleSubmit}
    >
      <input 
        type="text"
        placeholder="Enter your task"
        onChange={handleChange}
        value={userInput}
        className="todo-input"
      />
      <button 
        type="submit" 
        className={isDark ? "todo-btn dark" : "todo-btn"}
      >
        Add
      </button>
    </form>
  );
};

export default ToDoForm;