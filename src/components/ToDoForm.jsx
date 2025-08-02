import React, {useState} from "react";
const ToDoForm = ({addTask,isDark}) => {
    const [userInput,setUserInput] = useState('');

    

    const handleChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    };

    return(
    <form className= {isDark ? "todo-form dark" : "todo-form"} onSubmit={handleSubmit}>

        <input type="text"
        placeholder="Enter your task"
        onChange={handleChange}
        value={userInput}
        className="todo-input"
        />
        <button className={isDark ? "todo-btn dark" : "todo-btn"}>Add</button>
    </form>
    )
};
export default ToDoForm;