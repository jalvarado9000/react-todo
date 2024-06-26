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
  }, [key, todoList])

  return [todoList, setTodoList];
}

function App() {

  const [todoList, setTodoList] = useSemiPersistentState('savedTodoList', []);

  const handleAddTodo = (newTodo) => {
    setTodoList((prevTodoList) => {
      return ([...prevTodoList, newTodo])
    });
  };

  const removeTodo = (id) => {
    setTodoList((todoList) => todoList.filter((element) => element.id !== id))
  }


  return (
    <>
      <TodoList onTodo={todoList} onRemoveTodo={removeTodo} />
      <AddTodoForm onAddTodo={handleAddTodo} />
    </>
  );
}

export default App;

