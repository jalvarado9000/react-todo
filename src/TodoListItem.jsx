import React from 'react'

export const TodoListItem = ({ item, onRemoveTodo }) => {

  const handleRemoveClick = () => {
    onRemoveTodo(item.id)
  }


  return (
    <>
      <li className="list-group-item hover-overlay thumbnail fw-bolder" key={item.id}>{item.title} <button onClick={handleRemoveClick} className="btn btn-danger m-1 mb-2 px-5 ms-5">Remove</button></li>

    </>
  )
}
