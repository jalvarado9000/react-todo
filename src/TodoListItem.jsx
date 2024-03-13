import React from 'react'

export const TodoListItem = (props) => {

 
  return (
    <div><li className="list-group-item hover-overlay thumbnail fw-bolder" key={props.item.id}>{props.item.title}</li></div>
  )
}
