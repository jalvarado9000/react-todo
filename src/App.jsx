import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <>
      <h1>Todo List</h1>

      <ul>
        {todoList.map(function (item) {
          return (
            <li key={item.id}>{item.title}</li>
            
          
            );
        })}
      </ul>
        
    </>
    );
  }

export default App
