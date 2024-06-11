import React, { useState } from 'react'

function ToDoList(){
    const [tasks, setTasks] = useState(["Take a Shower", "Breakfast", "Go to Walk"]);
    const [newTasks, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTasks.trim() !== ""){
            setTasks(t => [...t, newTasks]);
        setNewTask("");
        }
        
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];

            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];

            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

return(
<div className='To-Do-List'>

    <h1>To-Do-List</h1>
    <div>

        <input
        type='text'
        placeholder='Enter a Task ...'
        value={newTasks}
        onChange={handleInputChange}/>

        <button 
        className='add-butn'
        onClick={addTask} >Add</button>
    </div>

    <ol>
        {tasks.map((task, index) => 
        <li key={index}>
        <span className='text'>{task}</span>
        <button
        className='delete-button'
        onClick={() => deleteTask(index)}>
           Delete
        </button>
        <button
        className='Move-button-up'
        onClick={() => moveTaskUp(index)}>
            ⬆️
        </button>
        <button
        className='Move-button-Down'
        onClick={() => moveTaskDown(index)}>
            ⬇️
        </button>

        </li>)}
    </ol> 

</div>
)

}

export default ToDoList