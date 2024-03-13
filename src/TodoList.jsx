import React from 'react'
import {TodoListItem} from './TodoListItem'
  
const TodoList = (props) => {

  return (
    <div>
    <h1>Todo List</h1>
    <ul className="list-group">
        {props.onTodo.map((item) => {
          return (
            <TodoListItem key={item.id} item={item}/>
            );
        })}
      </ul>
    </div>
  )
}

export default TodoList;