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



  return (
    <>
      <TodoList onTodo={todoList}/>
      <AddTodoForm />
    </>
  );
}

export default App;