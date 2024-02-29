import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AddTodoForm from './AddTodoForm'

import TodoList from './TodoList';

{/* what is the difference between exporting with parenthesis and without it? */ }

function App() {






  const [todoList, setTodoList] = React.useState([]);



  const handleAddTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };




  return (
    <>
     
      <TodoList todoList={todoList} />
      <AddTodoForm onAddTodo={handleAddTodo} />


    </>
  );
}

export default App;