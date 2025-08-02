import { useEffect, useState } from "react";

import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoItem from "./components/ToDoItem";




function App() {
  const [tasks,setTasks] = useState(localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []);
  const [isDarkTheme, setTheme] = useState(() => {
    // Ленивая инициализация из localStorage
    const saved = localStorage.getItem('isDark');
    return saved === 'true'; // Преобразуем строку в boolean
  });

  useEffect(() => {
    // Устанавливаем класс при первой загрузке
    if (isDarkTheme) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    
    // Сохраняем в localStorage при изменении
    localStorage.setItem('isDark', isDarkTheme.toString());
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setTheme(prev => !prev); // Используем функциональное обновление
  };

  const setTasksWithSave = (newTask) => {
      setTasks(newTask);
      localStorage.setItem('tasks',JSON.stringify(newTask));
  };

  const addTask = (userInput) => {
      if(userInput){
        const newTask = {
          id: Date.now(),
          taskText: userInput,
          completed: false
        };
        setTasksWithSave([...tasks,newTask]);
      }
      
  };



  const removeTask = (id) => {
      setTasksWithSave([...tasks.filter((task) => task.id !== id)]);
  };

  const toggleTask = (id) => {
    setTasksWithSave(
      [...tasks.map(
        (task) => task.id === id ? {...task, completed: !task.completed}:{...task}
      )]);
  };

  return (
    
    <div className="todo-app">
      <h1>ToDo List</h1>
      <button onClick={toggleTheme} className="theme-btn">
        {isDarkTheme ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
      <ToDoForm addTask={addTask} isDark={toggleTheme}/>
      {tasks.map((task) => (
        <ToDoItem
        task = {task}
        key = {task.id}
        toggleTask = {toggleTask}
        removeTask = {removeTask}
        
        />
      ))}

    </div>
    
  );
}

export default App;
