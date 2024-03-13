import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { AddTodoForm } from './AddTodoForm'
import TodoList from './TodoList';


function App() {
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodoList((prevTodoList) => {
      return ([...prevTodoList, newTodo])
    });
  };

  return (
    <>
      <TodoList onTodo={todoList} />
      <AddTodoForm onAddTodo={handleAddTodo} />
    </>
  );
}

export default App;

