import React from 'react'


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
  
const TodoList = () => {
  return (
    <div>
    <h1>Todo List</h1>

      <ul>
        {todoList.map(function (item) {
          return (
            <li key={item.id}>{item.title}</li>
            
          
            );
        })}
      </ul>
      </div>
  )
}

export default TodoList