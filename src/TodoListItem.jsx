import React from 'react'

export const TodoListItem = (props) => {

  const { id, title } = props.item;
  return (
    <div><li className="list-group-item hover-overlay thumbnail fw-bolder" key={id}>{title}</li></div>
  )
}
