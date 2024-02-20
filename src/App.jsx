import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {TodoList} from './TodoList'
import  {AddTodoForm}  from './AddTodoForm'
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

   let [search, setSearch] = React.useState(' ');

  const handleSearch = (event) => {
    setSearch(event.target.value);

  }
 

  return (
    <>
      <TodoList todo={todoList}/>
      <AddTodoForm onSearch={handleSearch} />
        
    </>
    );
  }

export default App
