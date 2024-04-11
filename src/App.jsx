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
   
    const fetchData = async () => {
      let options = { method: 'GET', 
      headers: 
      { Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}` } 
    }

      const baseUrl = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`


      try {

        const response = await fetch(baseUrl, options)
        if (!response.ok) {
          throw new Error(`Error: ${response.ok}`)
        }

        const data = await response.json();
        console.log(data)


      } catch (error) {
        console.log('I am a error');

      }

    }
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
    
          <TodoList onTodo={todoList} onRemoveTodo={removeTodo} />
          <AddTodoForm onAddTodo={handleAddTodo} />
       
      

    </>
  );
}


export default App;


