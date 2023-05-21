import React from 'react'
import TodoList from './components/TodoList/TodoList';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <div className='seccion'>
      <div className='tittle-todo'>
        <h1>To Do List</h1>
      </div>
      <TodoList />
    </div>
    </>
  )
};

export default App;
