import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { AddTodoForm } from './AddTodoForm'
import TodoList from './TodoList';



function App() {

  const key = 'savedTodoList';
  const initialState = [];


  const [todoList, setTodoList] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    const fetchData = new Promise((resolve) => {
      const savedTodoList = localStorage.getItem(key);
      const updatedInitialState = savedTodoList ? JSON.parse(savedTodoList) : initialState;
      setTimeout(() => {
        resolve({ data: { todoList: updatedInitialState } });
      }, 2000);
    });

    fetchData.then((result) => {
      setTodoList(result.data.todoList)
      setIsLoading(false);
    });
  }, []);


  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(key, JSON.stringify(todoList));
    }

  }, [todoList, isLoading])




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
      {isLoading ?
        (<p>Loading...</p>) :
        (<>
          <TodoList onTodo={todoList} onRemoveTodo={removeTodo} />
          <AddTodoForm onAddTodo={handleAddTodo} />
        </>)
      }

    </>
  );
}

export default App;

