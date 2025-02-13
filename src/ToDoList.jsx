import React, { useState } from "react";

function ToDoList() {
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
       if(newTask.trim() !== ""){
            setTask(t=> [...t, newTask]);
            setNewTask("");
       }

    }

    function deleteTask(index) {
       const updatedTask = task.filter((_, i) => i !== index);
       setTask(updatedTask);
    }

    function moveTaskUp(index){

        if(index > 0){
            const updatedTasks = [...task];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }

    function moveTaskDown(index){

        if(index < task.length - 1){
            const updatedTasks = [...task];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }

    return (
        <div className="to-do-list">
            <h1>To-Do List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a task" 
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button
                    className="add-button"
                    onClick={addTask}
                >
                    Add
                </button>
            </div>
            <ol>
                {task.map((element, i) => (
                    <li key={i}> 
                        <span className="text">{element}</span> 
                        <button className="delete-button" onClick={() => deleteTask(i)}>
                            Delete
                        </button>
                        <button className="move-up-button" onClick={() => moveTaskUp(i)}>
                            👆
                        </button>
                        <button className="move-down-button" onClick={() => moveTaskDown(i)}>
                            👇
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;
