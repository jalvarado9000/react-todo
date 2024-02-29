import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { AddTodoForm } from './AddTodoForm'

import TodoList from './TodoList';
import { TodoListItem } from './TodoListItem';

{/* what is the difference between exporting with parenthesis and without it? */ }

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


  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (todoTitle) => {
    setNewTodo(todoTitle);
  };




  return (
    <>
      <TodoList onTodo={todoList} />
      <AddTodoForm onAddTodo={handleAddTodo} />
      <p>{newTodo}</p>

    </>
  );
}

export default App;

