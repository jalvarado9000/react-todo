import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { AddTodoForm } from './AddTodoForm';
import TodoList from './TodoList';

function App() {
  const key = 'savedTodoList';
  const initialState = [];

  const [todoList, setTodoList] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    const fetchData = async () => {

      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
        }
      };

      const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;

      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);

        }

        const data = await response.json();
        console.log(data);

        const t = data.records.map(record => ({
          title: record.fields.title,
          id: record.id
        }));


        setTodoList(t);



      } catch (error) {
        console.error(error.message);


      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(key, JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const handleAddTodo = (newTodo) => {
    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
  };

  const removeTodo = (id) => {
    setTodoList((todoList) => todoList.filter((element) => element.id !== id));
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <TodoList onTodo={todoList} onRemoveTodo={removeTodo} />
          <AddTodoForm onAddTodo={handleAddTodo} />
        </>
      )}
    </>
  );
}

export default App;
