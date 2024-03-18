import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { AddTodoForm } from './AddTodoForm'
import TodoList from './TodoList';


function useSemiPersistentState() {

  const [todoList, setTodoList] = useState(() => {
    const savedTodoList = localStorage.getItem('savedTodoList');
    return savedTodoList ? JSON.parse(savedTodoList) : [];
  });

  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList])

 return [todoList, setTodoList];

}



function App() {
 
  const [todoList, setTodoList] = useSemiPersistentState();




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

