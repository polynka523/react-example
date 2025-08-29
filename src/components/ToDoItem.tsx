import { RiCloseCircleLine } from "react-icons/ri";
import React from "react";


import { ToDoItemProps } from "../types";

const ToDoItem: React.FC<ToDoItemProps> = ({ task, toggleTask, removeTask }) => {
  const handleToggle = (): void => {
    toggleTask(task.id);
  };

  const handleRemove = (): void => {
    removeTask(task.id);
  };

  return (
    <div className={task.completed ? "todo-row completed" : "todo-row"}>
      <div className="todo-row-main" onClick={handleToggle}>
        {task.taskText}
      </div>

      <div className="icon-container">
        <RiCloseCircleLine onClick={handleRemove} />
      </div>
    </div>
  );
};

export default ToDoItem;