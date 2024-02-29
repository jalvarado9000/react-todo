import React from 'react'
import { TodoListItem } from './TodoListItem';




export const TodoList = ({onTodo}) => {

  const todoList = props.todoList;

  

  return (
    <div>
      <h1>Todo List</h1>


      <ul className="list-group">
        {onTodo.map((item) => {
          return (

            <TodoListItem key={item.id} item={item} />

          );
        })}
      </ul>
    </div>
  )
}

