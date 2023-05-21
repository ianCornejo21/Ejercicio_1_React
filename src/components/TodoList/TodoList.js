import React, { useState } from "react";
import './TodoList.css';


function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue])
      setInputValue('')
    };
  };

  const handleInputChange =(event) => {
    setInputValue(event.target.value)}

  const handleInputKey = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    };
  };

  const addTasks = () => {
    if(inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue('')
    };
  };

  const clearTasks = () => {
    setTasks([])
  };



  return (
    <div className='tasks'>
      <input type='text' value={inputValue} onChange={handleInputChange} onKeyDown={handleInputKey} />
      <button className='btn-tasks' onClick={addTasks}>
        Añadir tarea
      </button>
      <button className='btn-tasks' onClick={clearTasks}>
        Borrar tareas
      </button>

      <ul className='ul-tasks'>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList;