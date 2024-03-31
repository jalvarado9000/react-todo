import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { AddTodoForm } from './AddTodoForm'
import TodoList from './TodoList';

function useSemiPersistentState(key, initialState) {

  const [todoList, setTodoList] = useState(() => {
    const savedTodoList = localStorage.getItem(key);
    return savedTodoList ? JSON.parse(savedTodoList) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(todoList));
  }, [todoList])

  return [todoList, setTodoList];
}

function App() {

  const [todoList, setTodoList] = useSemiPersistentState('savedTodoList', []);

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

