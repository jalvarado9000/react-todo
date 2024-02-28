import * as React from 'react';
import TodoList from './TodoList'

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

function App() {
 

  return (
    <>
      <TodoList/>

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
