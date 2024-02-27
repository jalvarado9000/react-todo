import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {AddTodoForm} from './AddTodoForm'

import TodoList from './TodoList';

{/* what is the difference between exporting with parenthesis and without it? */}

function App() {



  const [newTodo, setNewTodo] = useState(''); 
  const [todoList, setTodoList] = React.useState('');
  
  const handleAddTodo = (todoTitle) => {
    setNewTodo(todoTitle);
  };




  return (
    <>
      <TodoList todoList={todoList}/>
      <AddTodoForm onAddTodo={handleAddTodo}/>
      <p>{newTodo}</p>

    </>
  );
}

export default App;