import React from 'react'
import TodoListItem  from './TodoListItem'




export const TodoList = (props) => {

  const todoList = props.todoList;

  const {id} = item;

  return (
    <div>
      <h1>Todo List</h1>


      <ul className="list-group">
        {todoList.map((item) => {
          return (

            <TodoListItem key={id} item={item} />

          );
        })}
      </ul>
    </div>
  )
}

