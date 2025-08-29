import { useEffect, useMemo, useState } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoItem from "./components/ToDoItem";
import { Task } from "./types"; 
import { ToDoNav } from "./components/ToDoNav";
function App() {
  
  const [mode,setMode] = useState<string>('all');

  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  
  const [isDarkTheme, setTheme] = useState<boolean>(() => {
    const saved = localStorage.getItem('isDark');
    return saved === 'true';
  });

  const filteredTasks = useMemo(()=>{
    switch(mode) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'uncompleted':
        return tasks.filter(task => !task.completed);
      case 'all':
      default:
        return tasks;
    }
  },[tasks,mode]);

  useEffect(() => {
    
    if (isDarkTheme) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    
    
    localStorage.setItem('isDark', isDarkTheme.toString());
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setTheme(prev => !prev);
  };

  
  const setTasksWithSave = (newTasks: Task[]) => {
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  
  const addTask = (userInput: string) => {
    if (userInput.trim()) {
      const newTask: Task = {
        id: Date.now(),
        taskText: userInput,
        completed: false
      };
      setTasksWithSave([...tasks, newTask]);
    }
  };

  
  const removeTask = (id: number) => {
    setTasksWithSave(tasks.filter((task) => task.id !== id));
  };

  const clearCompleted = () => {
    setTasksWithSave(tasks.filter((task => !task.completed)));
  }

  
  const toggleTask = (id: number) => {
    setTasksWithSave(
      tasks.map((task) => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const allMode = () => {
        setMode('all')
        console.log(mode)
    }

    const completedMode = () => {
        setMode('completed')
        console.log(mode)
    }

    const uncompletedMode = () => {
        setMode('uncompleted')
        console.log(mode)
    }

  return (
    <div className="todo-app">
      <h1>ToDo List</h1>
      <button onClick={toggleTheme} className="theme-btn">
        {isDarkTheme ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
      
      <ToDoForm addTask={addTask} isDark={isDarkTheme} /> 
      <ToDoNav allMode={allMode} completedMode={completedMode} uncompletedMode={uncompletedMode} clearCompleted={clearCompleted} mode = {mode}/>
      {filteredTasks.map((task) => (
        <ToDoItem
          task={task}
          key={task.id}
          toggleTask={toggleTask}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
}

export default App;