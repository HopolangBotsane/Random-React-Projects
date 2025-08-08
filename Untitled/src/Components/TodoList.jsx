import { useState } from 'react';

function TodoList() {

    const [ tasks, setTasks ] = useState(["eat breakfast", "take a shower", "stroke one out"])
    const [ newTask, setNewTask] = useState("")

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        if (newTask.trim() !== ""){
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setNewTask(updatedTasks)
    }

    function moveTaskUp(index) {}

    function moveTaskDown(index) {}

    return (
        <div className="to-do-list">
            <h1>To do List</h1>

            <div className="div">
                <input 
                    type="text" 
                    placeholder="Enter Task..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className="add-btn" onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index) => <li key={index}>
                    <span className="text">{tast}</span>
                </li>)}
                <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                <button className="move-up-button" onClick={() => moveTaskUp(index)}>Move Up</button>
                <button className="move-down-button" onClick={() => moveTaskDown(index)}>Move Down</button>
            </ol>

        </div>
    )
}

export default TodoList