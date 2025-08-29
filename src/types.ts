
export interface Task {
    id: number;
    taskText: string;
    completed: boolean;
}


export interface ToDoFormProps {
    addTask: (userInput: string) => void;
    isDark: boolean;
}

export interface ToDoItemProps {
    task: Task;
    toggleTask: (id: number) => void;
    removeTask: (id: number) => void;
}

export interface ToDoNavProps {
    allMode: () => void;
    completedMode: () => void;
    uncompletedMode: () => void;
    clearCompleted: () => void;
    mode:string;
}