import { RiCloseCircleLine } from "react-icons/ri";


const ToDoItem = ({task,toggleTask,removeTask}) => {
    return(
        <div className= {task.completed ? "todo-row completed" : "todo-row"}>
            <div className="todo-row-main" onClick={()=> toggleTask(task.id)}>
                {task.taskText}
            </div>

            <div className="icon-container">
                <RiCloseCircleLine onClick={() => removeTask(task.id)}/>
            </div>
        </div>
    );
};

export default ToDoItem;