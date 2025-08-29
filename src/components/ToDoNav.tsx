import { ToDoNavProps } from "../types";

export const ToDoNav:React.FC<ToDoNavProps> = ({allMode,completedMode,uncompletedMode,clearCompleted,mode }) => {
    
    


    return(
        <nav className="toDoNav">
            <button className={mode === 'all' ? "nav-btn selected" : "nav-btn"  } onClick={allMode}>All tasks</button>
            <button className={mode === 'completed' ? "nav-btn selected" : "nav-btn"  } onClick={completedMode}>Completed</button>
            <button className={mode === 'uncompleted' ? "nav-btn selected" : "nav-btn"  } onClick={uncompletedMode}>Uncompleted</button>
            <button className="nav-btn" onClick={clearCompleted}>Clear completed</button>
        </nav>
    );
}