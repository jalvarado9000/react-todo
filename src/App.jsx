import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { AddTodoForm } from './AddTodoForm'
import TodoList from './TodoList';



function App() {

  const key = 'savedTodoList';
  const initialState = [];


  const [todoList, setTodoList] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);



  const loadTodo = async() =>{
    const baseId = `${import.meta.env.VITE_AIRTABLE_BASE_ID}`;
    const tableName = `${import.meta.env.VITE_TABLE_NAME}`
    const baseUrl = `https://api.airtable.com/v0/${baseId}/${tableName}`;
  

    try {
      const response = await
        fetch(baseUrl, {
          headers: {
            'Authorization': `Bearer ${API_TOKEN}`
          }
        });

      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }

      const todosFromAPI = await response.json();

      const todos = todosFromAPI.records.map((todo) => {

        const newTodo = {
          id: todo.id,
          title: todo.fields.title
        }

        return newTodo

      });

      setTodos(todos);

    } catch (error) {
      console.log(error.message)
    }
  }


  let fetchData = useCallback(() => {
    const fetchDataPromise = new Promise((resolve) => {
      const delay = 2000;
      const savedTodoList = localStorage.getItem(key);
      const updatedInitialState = savedTodoList ? JSON.parse(savedTodoList) : initialState;
      setTimeout(() => {
        resolve({ data: { todoList: updatedInitialState } });
      }, delay);
    });

    fetchDataPromise.then((result) => {
      setTodoList(result.data.todoList)
      setIsLoading(false);
    }).catch(() => setIsError(true))
    
  },[]);


  useEffect(() => {
    fetchData()
  }, [fetchData]);


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
      {isError && <p>Something went wrong...</p>}
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

