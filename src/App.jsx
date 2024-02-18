import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './TodoList'
import TodoList from './TodoList'
import { AddTodoForm } from './AddTodoForm'


function App() {
 

  return (
    <>
      <TodoList />
      <AddTodoForm />
        
    </>
    );
  }

export default App
