import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './TodoList'
import TodoList from './TodoList'
import { AddTodoForm } from './AddTodoForm'
import 'bootstrap/dist/css/bootstrap.css'


function App() {
  const todoList = [
    {
      id: 1,
      title: 'Complete Assigment',
  
    },
    {
      id: 2,
      title: 'Complete Homework',
    },
    {
      id: 3,
      title: 'Complete Projects',
    },
  
  ]
 

  return (
    <>
      <TodoList todo={todoList}/>
      <AddTodoForm />
        
    </>
    );
  }

export default App
