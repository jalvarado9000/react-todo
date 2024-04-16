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

  const AIRTABLE_API_TOKEN = import.meta.env.VITE_AIRTABLE_API_TOKEN;
  const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
  const TABLE_NAME = import.meta.env.VITE_TABLE_NAME;

  useEffect(() => {
    const fetchData = async () => {

      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_TOKEN}`
        }
      };

      const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${TABLE_NAME}`;

      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);

        }
        const data = await response.json();

        const todos = data.records.map(record => ({
          title: record.fields.title,
          id: record.id,

        }));

        setTodoList(todos);

      } catch (error) {
        console.error(error.message);


      }

      setIsLoading(false);
    };

    fetchData();

  }, []);





  const postTodo = async (newTodo) => {
    try {
      const airtableData = {
        records: [
          {
            fields: {
              title: newTodo.title

            }
          }
        ]
      }


      const response = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${TABLE_NAME}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${AIRTABLE_API_TOKEN}`,
          },
          body: JSON.stringify(airtableData),
        }
      );



      if (!response.ok) {
        const message = `Error has ocurred:
        ${response.status}`;
        throw new Error(message);
      }

      const dataResponse = await response.json();
      return dataResponse;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };



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
          <AddTodoForm onAddTodo={handleAddTodo} postTodo={postTodo} />
        </>
      )}
    </>
  );
}

export default App;
