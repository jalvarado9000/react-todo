import React from 'react'

export const TodoListItem = ({ item, onRemoveTodo }) => {


  return (
    <>
      <li className="list-group-item hover-overlay thumbnail fw-bolder" key={item.id}>{item.title} <button onClick={onRemoveTodo}>Remove</button></li>
    
    </>
  )
}
