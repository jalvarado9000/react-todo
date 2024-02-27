import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AddTodoForm from './AddTodoForm'

import TodoList from './TodoList';

{/* what is the difference between exporting with parenthesis and without it? */ }

function App() {



  const [newTodo, setNewTodo] = React.useState('');
  const [todoList, setTodoList] = React.useState('');

  const handleAddTodo = (todoTitle) => {
    setNewTodo(todoTitle);
  };

  const addTodo = (newTodo) => {
    setTodoList([...todoList], newTodo);
  };




  return (
    <>
      <h1>hello</h1>
      <TodoList todoList={todoList} />
      <AddTodoForm onAddTodo={handleAddTodo} />


    </>
  );
}

export default App;