import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {AddTodoForm} from './AddTodoForm'

import TodoList from './TodoList';

{/* what is the difference between exporting with parenthesis and without it? */}

function App() {
  const todoList = [
    {
      id: 1,
      title: 'Complete Assignment',
    },
    {
      id: 2,
      title: 'Complete Homework',
    },
    {
      id: 3,
      title: 'Complete Projects',
    },
  ];

  const [search, setSearch] = useState(''); 
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with title:', search);
  };

  return (
    <>
      <TodoList onTodo={todoList}/>
      <AddTodoForm onSubmit={handleSearch} onSearch={handleSubmit} />
    </>
  );
}

export default App;