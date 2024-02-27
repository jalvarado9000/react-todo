import React from 'react'
import TodoListItem  from './TodoListItem'




const TodoList = (props) => {

  const todoList = props.todoList;

  return (
    <div>
      <h1>Todo List</h1>


      <ul className="list-group">
        {todoList.map((item) => {
          return (

            <TodoListItem key={item.id} item={item} />

          );
        })}
      </ul>
    </div>
  )
}

export default TodoList