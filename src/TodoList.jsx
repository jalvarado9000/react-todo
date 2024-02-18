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

    <ul className="list-group">
        {todoList.map(function (item) {
          return (
            <li className="list-group-item hover-overlay thumbnail fw-bolder" key={item.id}>{item.title}</li>
            
          
            );
        })}
      </ul>
      </div>
  )
}

export default TodoList