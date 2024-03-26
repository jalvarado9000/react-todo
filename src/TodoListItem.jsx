import React from 'react'

export const TodoListItem = ({ item }) => {


  return (
    <div><li className="list-group-item hover-overlay thumbnail fw-bolder" key={item.id}>{item.title}</li></div>
  )
}
